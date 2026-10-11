import {
  BoxGeometry,
  Color,
  CylinderGeometry,
  DoubleSide,
  ExtrudeGeometry,
  Group,
  InstancedMesh,
  LatheGeometry,
  Matrix4,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Object3D,
  Shape,
  SphereGeometry,
  TorusGeometry,
  Vector2,
} from 'three';

/**
 * A procedural twin-engine airliner, 1 unit long, nose toward +X, up +Y, starboard toward +Z.
 * Flytz livery: pearl body, gold tail and cheatline, warm cabin windows.
 */
export function buildAirliner({ detail = 'high', accent = '#c9a24b' } = {}) {
  const hi = detail === 'high';
  const group = new Group();
  group.name = 'airliner';

  const body = new MeshStandardMaterial({ color: '#eef2f7', metalness: 0.25, roughness: 0.32 });
  const wingMat = new MeshStandardMaterial({ color: '#c9d1dd', metalness: 0.45, roughness: 0.4, side: DoubleSide });
  // Gold reads as metallic paint: fully metallic gold mirrors the dark sky and turns brown.
  const gold = new MeshStandardMaterial({ color: accent, metalness: 0.7, roughness: 0.32, side: DoubleSide });
  const dark = new MeshStandardMaterial({ color: '#0b0f17', metalness: 0.6, roughness: 0.25 });
  const nacelle = new MeshStandardMaterial({ color: '#dfe5ee', metalness: 0.5, roughness: 0.3 });
  const windowMat = new MeshBasicMaterial({ color: new Color('#ffd28a') });

  // Fuselage: a lathe profile turned on its side, tail swept up.
  const profile = [
    [0.0, -0.5], [0.011, -0.492], [0.019, -0.47], [0.031, -0.41], [0.044, -0.34], [0.052, -0.27], [0.056, -0.19],
    [0.056, 0.3], [0.054, 0.36], [0.049, 0.41], [0.04, 0.45], [0.028, 0.478], [0.014, 0.494], [0.0, 0.5],
  ].map(([r, y]) => new Vector2(r, y));
  const fuselageGeo = new LatheGeometry(profile, hi ? 32 : 16);
  fuselageGeo.rotateZ(-Math.PI / 2);
  const p = fuselageGeo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i);
    if (x < -0.2) p.setY(i, p.getY(i) + (-0.2 - x) * 0.22);
  }
  fuselageGeo.computeVertexNormals();
  group.add(new Mesh(fuselageGeo, body));

  // Gold cheatline along both sides.
  for (const z of [-0.0566, 0.0566]) {
    const line = new Mesh(new BoxGeometry(0.62, 0.0045, 0.0015), gold);
    line.position.set(0.02, -0.004, z);
    group.add(line);
  }

  // Wings and tailplanes from swept planforms.
  const planform = (rootLE, rootTE, tipLE, tipTE, span, sign, thickness) => {
    const pts = [
      [rootLE, 0], [tipLE, span * sign], [tipTE, span * sign], [rootTE, 0],
    ];
    if (sign < 0) pts.reverse();
    const s = new Shape(pts.map(([x, y]) => new Vector2(x, y)));
    const g = new ExtrudeGeometry(s, { depth: thickness, bevelEnabled: true, bevelThickness: thickness * 0.35, bevelSize: thickness * 0.35, bevelSegments: 1 });
    g.rotateX(Math.PI / 2);
    return g;
  };
  for (const sign of [-1, 1]) {
    const wing = new Mesh(planform(0.15, -0.1, -0.15, -0.25, 0.5, sign, 0.01), wingMat);
    wing.position.set(0, -0.022, 0);
    wing.rotation.x = -0.07 * sign;
    group.add(wing);
    // Winglet: a small raked fin at the tip, in the accent colour.
    const wl = new Shape([new Vector2(-0.165, 0), new Vector2(-0.205, 0.045), new Vector2(-0.228, 0.045), new Vector2(-0.236, 0)]);
    const winglet = new Mesh(new ExtrudeGeometry(wl, { depth: 0.005, bevelEnabled: false }), gold);
    winglet.position.set(0, 0, 0.5 * sign - 0.0025);
    wing.add(winglet);
    const stab = new Mesh(planform(-0.34, -0.45, -0.46, -0.51, 0.19, sign, 0.006), wingMat);
    stab.position.set(0, 0.044, 0);
    stab.rotation.x = -0.1 * sign;
    group.add(stab);

    // Engine under each wing.
    const eng = new Group();
    const shell = new Mesh(new CylinderGeometry(0.03, 0.026, 0.13, hi ? 24 : 12, 1, true), nacelle);
    shell.rotation.z = Math.PI / 2;
    const intake = new Mesh(new TorusGeometry(0.029, 0.004, 8, hi ? 24 : 12), gold);
    intake.rotation.y = Math.PI / 2;
    intake.position.x = 0.065;
    const fan = new Mesh(new CylinderGeometry(0.027, 0.027, 0.004, hi ? 20 : 10), dark);
    fan.rotation.z = Math.PI / 2;
    fan.position.x = 0.06;
    const pylon = new Mesh(new BoxGeometry(0.09, 0.03, 0.006), wingMat);
    pylon.position.set(-0.01, 0.028, 0);
    eng.add(shell, intake, fan, pylon);
    eng.position.set(0.07, -0.062, 0.19 * sign);
    group.add(eng);
  }

  // Vertical fin in the accent colour.
  const finShape = new Shape([
    new Vector2(-0.29, 0.045), new Vector2(-0.43, 0.245), new Vector2(-0.5, 0.245), new Vector2(-0.48, 0.045),
  ]);
  const finGeo = new ExtrudeGeometry(finShape, { depth: 0.01, bevelEnabled: true, bevelThickness: 0.003, bevelSize: 0.003, bevelSegments: 1 });
  finGeo.translate(0, 0, -0.005);
  group.add(new Mesh(finGeo, gold));

  // Cockpit glazing.
  const cockpit = new Mesh(new BoxGeometry(0.03, 0.012, 0.058), dark);
  cockpit.position.set(0.445, 0.02, 0);
  cockpit.rotation.z = -0.5;
  group.add(cockpit);

  // Cabin windows: warm instanced squares along both sides.
  const parts = { navLights: [], strobes: [], beacon: null, gear: null, cargoDoor: null, windows: null };
  if (hi) {
    const count = 30;
    const win = new InstancedMesh(new BoxGeometry(0.008, 0.007, 0.002), windowMat, count * 2);
    const m = new Matrix4();
    let k = 0;
    for (const z of [-0.0545, 0.0545]) {
      for (let i = 0; i < count; i++) {
        m.makeTranslation(0.31 - i * 0.017, 0.016, z);
        win.setMatrixAt(k++, m);
      }
    }
    group.add(win);
    parts.windows = win;
  }

  // Navigation lights: red port, green starboard, white tail; strobes and a red beacon blink in update().
  const lamp = (color, x, y, z, size = 0.007) => {
    const mesh = new Mesh(new SphereGeometry(size, 8, 6), new MeshBasicMaterial({ color }));
    mesh.position.set(x, y, z);
    group.add(mesh);
    return mesh;
  };
  parts.navLights.push(lamp('#ff3b3b', -0.18, 0.012, -0.505), lamp('#3bff7a', -0.18, 0.012, 0.505), lamp('#ffffff', -0.505, 0.11, 0));
  parts.strobes.push(lamp('#ffffff', -0.19, 0.012, -0.508, 0.005), lamp('#ffffff', -0.19, 0.012, 0.508, 0.005));
  parts.beacon = lamp('#ff4a3a', 0.05, 0.06, 0, 0.006);

  if (hi) {
    // Landing gear (retracts after take-off).
    const gear = new Group();
    const strutMat = new MeshStandardMaterial({ color: '#9aa3b2', metalness: 0.8, roughness: 0.35 });
    const tyre = new MeshStandardMaterial({ color: '#121418', roughness: 0.8 });
    const leg = (x, z, wheels) => {
      const g = new Group();
      const strut = new Mesh(new CylinderGeometry(0.0035, 0.0035, 0.06, 8), strutMat);
      strut.position.y = -0.03;
      g.add(strut);
      for (const dz of wheels) {
        const w = new Mesh(new CylinderGeometry(0.013, 0.013, 0.008, 14), tyre);
        w.rotation.x = Math.PI / 2;
        w.position.set(0, -0.062, dz);
        g.add(w);
      }
      g.position.set(x, -0.045, z);
      gear.add(g);
    };
    leg(0.37, 0, [-0.006, 0.006]);
    leg(-0.02, -0.07, [-0.008, 0.008]);
    leg(-0.02, 0.07, [-0.008, 0.008]);
    group.add(gear);
    parts.gear = gear;

    // Forward cargo door on the starboard side, hinged along its top edge.
    const hinge = new Object3D();
    hinge.position.set(0.17, 0.004, 0.0545);
    const door = new Mesh(new BoxGeometry(0.075, 0.045, 0.004), body);
    door.position.y = -0.0225;
    hinge.add(door);
    group.add(hinge);
    parts.cargoDoor = hinge;
  }

  const lit = (mesh, on) => {
    mesh.visible = on;
  };
  return {
    group,
    parts,
    /** Blink strobes and the beacon; `t` in seconds. */
    update(t) {
      const strobe = t % 1.2 < 0.07 || (t % 1.2 > 0.16 && t % 1.2 < 0.22);
      parts.strobes.forEach((s) => lit(s, strobe));
      if (parts.beacon) lit(parts.beacon, t % 1.0 < 0.12);
    },
  };
}
