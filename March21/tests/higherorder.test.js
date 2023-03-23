const testapp = require("../HigherOrderFunctions");


test("Should equal 5 when passed 2 and 3", ()=>{
    expect(testapp.add(2,1)).toBe(3);
})