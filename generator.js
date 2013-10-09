// forked from https://github.com/Eccenux/GoogleFormAnalysis

var Color = require( './color.js' );

function interpolation( a, b, factor ) {
    var ret = [];

    for( var i = 0; i < Math.min( a.length, b.length ); ++i )
    {
        ret[ i ] = a[ i ] * ( 1 - factor ) + b[ i ] * factor;
    }

    return ret;
}

module.exports = {};
    
/**
 * Generate colors sequence.
 *
 * @param {String} start Start color (any CSS format should work - both hex and names should be fine).
 * @param {String} end End color.
 * @param {type} n Number of colors to generate.
 * @returns {Array} Array of generated colors.
 */
module.exports.generate = function( start, end, n ) {
    var result = [];

    var a = new Color( start );
    var b = new Color( end );

    for( var i = 0; i < n; ++i )
    {
        var rgb = interpolation( a.toRGBArray(), b.toRGBArray(), i / ( n - 1 ) );
        result.push( new Color().setRGB( rgb[ 0 ], rgb[ 1 ], rgb[ 2 ] ) );
    }

    return result;
};

/**
 * Generate hex colors sequence.
 *
 * @param {String} start Start color (any CSS format should work - both hex and names should be fine).
 * @param {String} end End color.
 * @param {type} n Number of colors to generate.
 * @returns {Array} Array of generated hex color strings.
 */
module.exports.generateHex = function( start, end, n ) {
    var colors = this.generate( start, end, n );

    var result = [];
    for ( var i = 0; i < colors.length; ++i )
    {
        result.push( colors[ i ].toString() );
    }
    
    return result;
}

