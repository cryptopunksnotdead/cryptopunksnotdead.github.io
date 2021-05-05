///////////////////////////////////////////
//   support functions for parsing and generating pixel matrix


      // use ascii art image chars => .@xo^~%*+=:    -- .~:+=o*x^%#@
     function mapColorToAscii( x, chars ) {
        return chars[x];
     }

     function generateAscii( ary, chars ) {
        let str = ary.map( (row, i) =>
                       row.map( (x) =>
                             mapColorToAscii( x, chars )
                        ).join(" ")
                    ).join("\n");
        return str;
     }




     function mapAsciiToColor( x, chars ) {
       // var chars = $("#chars").val();
       let pos = chars.indexOf( x );
       if( pos == -1 ) {
          // assume number (as string) - convert to number
          return parseInt( x, 10 );
       }
       else {
         return pos;
       }
     }

     function parseAscii( str, chars ) {
       let ary = str.split("\n").map( (row) =>
                                  row.split(" ").map( (x) =>
                                     mapAsciiToColor( x, chars ))
                                    );
       return ary;
    }


