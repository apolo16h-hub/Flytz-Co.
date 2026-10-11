import { supported } from './core.js';
import { createGlobe } from './globe.js';
import { createLandmark } from './stage.js';
import { createBoarding } from './boarding.js';
import { BUILDERS } from './landmarks.js';

window.Flytz3D = { version: '1.1.0', supported, createGlobe, createLandmark, createBoarding, landmarks: Object.keys(BUILDERS) };
window.dispatchEvent(new Event('flytz3d:ready'));
