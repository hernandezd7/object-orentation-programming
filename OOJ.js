// create a function that console logs any argument given 
function display (content){
    console.log(content);
}
    

// create a function that takes a name or string as a parameter
// and returns "hi my name is " parameter given 
// function name (name ){
//     return "Hi ,my name is "+ name +".";
// }



// // create 3 function that describe the powers of a ninja  you would like create

// function sharinga(ability){
// return "using "+ ability + ".";
// }
// function katon(style){
//     return "katon"+ style + "Jutsu"
// }
// function melee(move){
//     return "using my "+move +"to attack in close combat .";
 
// }
// // display(name("itachi"));
// // display (melee("punch"));
// // display(katon("fire "));
// // display(sharigan("mangeko"));


// // object orientation programing
// // -incapsulation

// // OOP incapstation : grouping all behaviors inside an Object 
// const ninja = {
//    name(name){
//         return "Hi ,my name is "+ name +".";
//     },
    
//  sharinga(ability){
//     return "using "+ ability + ".";
//     },
//      katon(style){
//         return "katon"+ style + "Jutsu"
//     },
//  melee(move){
//         return "using my "+move +"to attack in close combat .";





     
//     }
 
// create a class for instantiating ninja's
// OOP Abstraction : hiding complexity

 class NinjaGod {
     constructor ( name, ability,style, move){
    this.nameinsideNInjaGod = name;
    this.ability = ability;
    this.style = style;
    this.move = move ;
     }

    name(){
return "HI, my name is"+ this.nameinsideNInjaGod + "."};
    sharinga(){
    return "using" + this.ability + "sharigan.";
    } 
    jutsu (){
   return "katon"+ this.style + "style Justu .";}
    melee(){
    return "using my"+ this.move + "to attack from close counter ."}
}

let itachi = new NinjaGod ("itachi","magenko", "Fire","upside down knife throw");


display(itachi)
display(itachi)
display(itachi)
display(itachi)


