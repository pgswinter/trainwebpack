window.setTimeout(function() {
    require.ensure([],function(sub) {
        var sub = require('./sub');
        sub('Hello World!');
    });
},3000);