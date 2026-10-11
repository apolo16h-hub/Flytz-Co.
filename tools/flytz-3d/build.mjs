import { build } from 'esbuild';
import { statSync } from 'node:fs';

const here = (p) => new URL(p, import.meta.url).pathname;
const outfile = here('../../shopify-theme/assets/flytz-3d.js');

// Resolve the bare `three` import to its source modules so unused classes are tree-shaken away.
const threeSource = {
  name: 'three-source',
  setup(b) {
    b.onResolve({ filter: /^three$/ }, () => ({ path: here('./node_modules/three/src/Three.js') }));
  },
};

await build({
  entryPoints: [here('./src/index.js')],
  bundle: true,
  minify: true,
  format: 'iife',
  target: ['es2020'],
  legalComments: 'eof',
  banner: { js: '/*! Flytz 3D scenes. Built on three.js r186 (MIT License, Copyright 2010-2026 three.js authors). */' },
  plugins: [threeSource],
  outfile,
});
console.log(`flytz-3d.js ${(statSync(outfile).size / 1024).toFixed(1)} KB`);
