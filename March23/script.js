function notNull(){
    return 1;
};
function truthy(){
    return true;
};
function falsy(){
    return false;
};
function obj2prop(){
    return {name:"John", age:20}
};
function sixchararray(){
    let myArray= ["kjhgt", "juhygt", "nbv", "qwertyu", "manaman", "kimij"];
    let hisArray=[];
    for(c=0;c<myArray.length;c++){
        if (myArray[c].length >= 6){
            hisArray.push(myArray[c]);
        };
    };
    return hisArray;
};
module.exports = {notNull, truthy, falsy, obj2prop, sixchararray};
