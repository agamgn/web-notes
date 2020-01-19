define(['./hello.js', './worlld.js'], function(hello) {
    return {
        sayHello: function() {
            console.log(hello.getMessage());
        }
    };
});

