﻿
var obj = {};
obj.a = "a-org";

with (obj) {
    var foo = function(x, y) {
        return function() {
            return a;
        }
    }

    var b;
    b = a;
    a = "a-next";
}

obj.b = b;
a_val = foo(1, 2)();