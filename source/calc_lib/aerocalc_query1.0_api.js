// ============================================================================
//  AEROCALC_QUERY_API v1.0
//  Simple Unit-to-Unit Conversion Utility
//
//  Supported Conversions:
//    • Length          as len('m', 'cm', 100)
//    • Mass            as mass()
//    • Volume          as vol()
//    • Pressure        as pre()
//    • Density         as den()
//    • Temperature     as temp()
//    • Velocity        as vel()
//
//  How to use: 
//    - conversion (inputUnit, outputUnit, value)  eg len( 'm', 'cm', 100 )
//    - for detailed unit string for conversion visit github.com/Navgosoft/Unit_Calc_Api
//
//  License:
//    Open License – Free to use, modify, and distribute.
//    No Copyrights reserved.
//
//  Notes:
//    - Developed as part of the "Aero Gate Calc" App.
//    - Created and maintained by Navgosoft (Naveengnkcoding).
//    - Intended for Engineering and Technical applications.
//    - For more Engineering/Technical APIs, visit Navgosoft.
//
//  Author: Naveen Kumar (Navgosoft)
//  Version: 1.0
//  Release: 2025
// ============================================================================
console.log("Aerocalc_query_lib accessed");

function len(i,o,v){
    var s = 0; /// Std in meter
    var result = 0;
    switch (i) {
          case "mm":
               s = v/1000;
            break;
          case 'cm':
                s = v/100;
            break;
          case 'm':
                s = v*1;
            break;
          case 'km':
                s = v*1000;
            break;
          case 'ft':
                s = v*0.3048;
            break;
          case 'mi':
                s = v*1609.34;
            break;
        }
        console.log(s);
    switch (o) {
          case "mm":
               result = s*1000;
            break;
          case 'cm':
                result = s*100;
            break;
          case 'm':
                result = s*1;
            break;
          case 'km':
                result = s/1000;
            break;
          case 'ft':
                result = s/0.3048;
            break;
          case 'mi':
                result = s/1609.34;
            break;
        }
    return result;
}

/////Function for Masss
function mass(i,o,v){
    var s = 0;
    var result = 0;
    switch (i) {
          case "mg":
               s = v/1000;
            break;
          case 'g':
                s = v*1;
            break;
          case 'kg':
                s = v*1000;
            break;
          case 'ton':
                s = v*1000*1000;
            break;
        }
        console.log(s);
    switch (o) {
          case "mg":
               result = s*1000;
            break;
          case 'g':
                result = s*1;
            break;
          case 'kg':
                result = s/1000;
            break;
          case 'ton':
                result = s/1000000;
            break;
        }
    return result;
}

/// Volume Function mm3,ccc,mmm,l
function vol(i,o,v){
    var s = 0; /// Std in ccc
    var result = 0;
    switch (i) {
          case "mm3":
               s = v/1000;
            break;
          case 'ccc':
                s = v*1;
            break;
          case 'mmm':
                s = v*1000;
            break;
          case 'l':
                s = v*1000;
            break;
        }
        console.log(s);
    switch (o) {
          case "mm3":
               result = s*1000;
            break;
          case 'ccc':
                result = s*1;
            break;
          case 'mmm':
                result = s/1000;
            break;
          case 'l':
                result = s/1000;
            break;
        }
    return result;
}

/// Temparute Function F,C,K
function temp(i,o,v){
    var s = 0; /// Std in ccc
    var result = 0;
    switch (i) {
          case "k":
               s = v-273.15;
            break;
          case 'c':
                s = v*1;
            break;
          case 'f':
                s = (v-32)*5/9;
            break;
        }
        console.log(s);
    switch (o) {
          case "k":
               result = s + 273.15;
            break;
          case 'c':
                result = s*1;
            break;
          case 'f':
                result = (s*9/5) + 32;
            break;
        }
    return result;
}

///// Pressure FUNC Pa,N,
function pre(i,o,v){
    var s = 0; /// Std in Pa
    var result = 0;
    switch (i) {
          case "pa":
               s = v*1;
            break;
          case 'bar':
                s = v*100000;
            break;
          case 'atm':
                s = v*101325;
            break;
          case 'nm2':
                s = v*1;
            break;
          case 'mbar':
                s = v*100;
            break;
        }
        console.log(s);
    switch (o) {
          case "pa":
               result = s*1;
            break;
          case 'bar':
                result = s/100000;
            break;
          case 'atm':
                result = s/101325;
            break;
          case 'nm2':
                result = s*1;
            break;
          case 'mbar':
                result = s/100;
            break;
        }
    return result;
}

//
function den(i,o,v){
    var s = 0; /// Std in m3
    var result = 0;
    switch (i) {
          case "kgm3":
               s = v*1;
            break;
          case 'gm3':
                s = v/1000;
            break;
          case 'kcm3':
                s = v*1000000;
            break;
          case 'gcm3':
                s = v*1000;
            break;
          case 'kgl':
                s = v*1000;
            break;
          case 'gl':
                s = v*1;
            break;
          case 'gml':
                s = v*1000;
            break;
        }
        console.log(s);
    switch (o) {
          case "kgm3":
               result = s*1;
            break;
          case 'gm3':
                result = s*1000;
            break;
          case 'kcm3':
                result = s/1000000;
            break;
          case 'gcm3':
                result = s/1000;
            break;
          case 'kgl':
                result = s/1000;
            break;
          case 'gl':
                result = s*1;
            break;
          case 'gml':
                result = s/1000;
            break;
        }
    return result;
}

///velocity
function vel(i,o,v){
    var s = 0; /// Std in mps
    var result = 0;
    switch (i) {
          case "cmps":
               v = s/100;
            break;
          case 'mps':
                v = s*1;
            break;
          case 'kmph':
                v = s/3.6;
            break;
          case 'knot':
                v = s/1.94384;
            break;
          case 'milph':
                v = s/2.23694;
            break;
          case 'ftps':
                v = s/3.28084;
            break;
        }
        console.log(s);
    switch (o) {
          case "cmps":
               result = s*100;
            break;
          case 'mps':
                result = s*1;
            break;
          case 'kmph':
                result = s*3.6;
            break;
          case 'knot':
                result = s*1.94384;
            break;
          case 'milph':
                result = s*2.23694;
            break;
          case 'ftps':
                result = s*3.28084;
            break;
        }
    return result;
}
////Universal Function for above all
function all(unit,i,o,v){
      switch (unit) {
          case "L":
               len(i,o,v);
            break;
          case 'M':
                mass(i,o,v);
            break;
          case 'vol':
                vol(i,o,v);
            break;
          case 'pre':
                pre(i,o,v);
            break;
          case 'den':
                den(i,o,v);
            break;
          case 'temp':
                temp(i,o,v);
            break;
          case 'vel':
                vel(i,o,v);
            break;
        }
        return result;
}