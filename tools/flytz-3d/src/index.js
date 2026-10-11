import { supported } from './core.js';
import { createGlobe } from './globe.js';

window.Flytz3D = { version: '1.0.0', supported, createGlobe };
window.dispatchEvent(new Event('flytz3d:ready'));
