// tsc --init : puts this folder under control of npm and under control of tyescript, after running this command
// json file will be created, and then we can just type tsc to compile all ts files in our folder to js files

// 1. JS - dynamic types
//    TS - static types, we define it once and then we cant change the type variable stores.
//    eg. let data = 'Peter" 
//        let data = 21 > error, you cant change type 
//          
//    number : 21, 55.5

//    if we just declare variable without initialization it will have type of 'any' 
//      so then we can reasign event with other types eg:
//      let data 
//      data = 'qwerty'
//      data = 12 > ok, no errors