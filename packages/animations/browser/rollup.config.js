/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import resolve from 'rollup-plugin-node-resolve';

const globals = {
  '@angular/core': 'ng.core',
  '@angular/common': 'ng.common',
  '@angular/animations': 'ng.animations'
};

export default {
  entry: '../../../dist/packages-dist/animations/@angular/animations/browser.es5.js',
  dest: '../../../dist/packages-dist/animations/bundles/animations-browser.umd.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'ng.animations.browser',
  plugins: [resolve()],
  external: Object.keys(globals),
  globals: globals
};
