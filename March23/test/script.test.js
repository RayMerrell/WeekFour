const app = require("../script");

test("Should not be null", ()=>{
    expect(app.notNull()).not.toEqual(null);
});
test("Should be true", ()=>{
    expect(app.truthy()).toEqual(true);
});
test("Should be false", ()=>{
    expect(app.falsy()).toEqual(false);
});
test("Should be john", ()=>{
    expect(app.obj2prop().name).toEqual("John");
});
test("Should be 20", ()=>{
    expect(app.obj2prop().age).toEqual(20);
});
test("All items in the array should be at least 6 characters long", ()=>{
    let myArray = app.sixchararray();
    let str ="";
    for(let i =0;i<myArray.length;i++){
        str=myArray[c];
        console.log(str);
        expect(str.length).toBeGreaterThanOrEqual(6);
    }
})