
# colorgen

  A simple javascript library to easily generate color pallettes.

  Based on the color generation work in: https://github.com/Eccenux/GoogleFormAnalysis
  
## Installation

  Install with [component(1)](http://component.io):

    $ component install andyburke/colorgen

## API

```
var colorgen = require( 'colorgen' );

// generate an array of Color objects, eg:
//   var Color = require( 'colorgen/color' );
//   var color = new Color().setRGB( 128, 0, 64 );

var colors = colorgen.generate( '#123456', '#abc', 5 );

// generate an array of hex values
var hexColors = colorgen.generateHex( 'red', 'blue', 20 );
```

## License

  MIT
