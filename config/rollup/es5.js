import config from './umd.js';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

const packageInfo = require( '../../package.json' );

// Ovewrite original Babel plugin.
config.plugins[ 2 ] = babel( {
	presets: [
		[ 'es2015', { modules: false } ]
	],
	plugins: [ 'external-helpers' ]
} );

config.plugins.push( uglify( {
	output: {
		preamble: config.banner
	}
} ) );

config.dest = `dist/hello-world.es5.js`;

export default config;
