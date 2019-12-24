/**
 * @fileoverview forbidden set settimeout second params
 * @author eva
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/nosettimeout"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 7,
    }
});
ruleTester.run("nosettimeout", rule, {

    valid: [{
        code: "let someTime = 500; setTimeout(()=>{console.log(2222)}, someTime);"
    },
    {
        code: "setTimeout(()=>{console.log(2222)}, someTime);"
    }],

    invalid: [
        {
            code: "setTimeout(()=>{console.log(\"test\")},10000)",
            errors: [{
                message: "禁止setTimeout的第二个参数是数字",
                type: "CallExpression"
            }]
        }
    ]
});
