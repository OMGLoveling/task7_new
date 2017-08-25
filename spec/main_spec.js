"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试描述", function(){
    sinon.spy(console, 'log');

    it("测试用例1", function(){

        var result = main();
        var expect_string = '';
        
        expect(expect_string).to.equal(result);
    });
    it("0  bottle of beer.", function(){


        var number = 0;
        var result = main(number);

        expect(result).to.equal("No more bottles of beer on the wall, no more bottles of beer." +
            "Go to the store and buy some more, 99 bottles of beer on the wall.");
    });
    it("1  bottle of beer.", function(){

        
        var number = 1;
        var result = main(number);

        expect(result).to.equal("1 bottle of beer on the wall, 1 bottle of beer." +
            "Take one down and pass it around, no more bottles of beer on the wall." +
            "No more bottles of beer on the wall, no more bottles of beer." +
            "Go to the store and buy some more, 99 bottles of beer on the wall.");
    });

     it("2  bottle of beer.", function(){

        
        var number = 2
        var result = main(number);

        expect(result).to.equal("2 bottles of beer on the wall, 2 bottles of beer."  +
            "Take one down and pass it around, 1 bottles of beer on the wall."+
            "1 bottle of beer on the wall, 1 bottle of beer." +
            "Take one down and pass it around, no more bottles of beer on the wall." +
            "No more bottles of beer on the wall, no more bottles of beer." +
            "Go to the store and buy some more, 99 bottles of beer on the wall.");
    });
     it("3  bottle of beer.", function(){

        
        var number = 3
        var result = main(number);

        expect(result).to.equal("3 bottles of beer on the wall, 3 bottles of beer."+
            "Take one down and pass it around, 2 bottles of beer on the wall."+
            "2 bottles of beer on the wall, 2 bottles of beer."  +
            "Take one down and pass it around, 1 bottles of beer on the wall."+
            "1 bottle of beer on the wall, 1 bottle of beer." +
            "Take one down and pass it around, no more bottles of beer on the wall." +
            "No more bottles of beer on the wall, no more bottles of beer." +
            "Go to the store and buy some more, 99 bottles of beer on the wall.");
    });
});