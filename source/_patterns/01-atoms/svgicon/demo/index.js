/**
 * Demo of svgicon. Pulls in svgicon assets, and provides demo-only assets.
 *
 * This file is NOT imported by design-system.js, but is included as part of apps/pl/index.js
 */

// Import component assets
import 'atoms/svgicon';

// Import demo assets
import twig from './svgicons.twig';
import yaml from './svgicons.yml';
import markdown from './svgicons.md';

export default {
  twig,
  yaml,
  markdown,
};