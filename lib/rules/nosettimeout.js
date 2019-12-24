/**
 * @fileoverview forbidden set settimeout second params
 * @author eva
 */
"use strict";

module.exports = {
    meta: {
        docs: {
            description: "forbidden set settimeout second params is a number",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function (context) {
        return {
            'CallExpression': (node) => {
                if (node.callee.name !== "setTimeout") { return; }
                const nodeChild = node.arguments && node.arguments[1];
                if (nodeChild) {
                    if (nodeChild.type === "Literal" && typeof nodeChild.value === "number") {
                        context.report({
                            node,
                            message: "setTimeout第二个参数禁止是数字"
                        })
                    }
                }

            }
        };
    }
};
