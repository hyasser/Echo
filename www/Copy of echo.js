     /**
     * @constructor
     */
    var Echo = function(){alert("echo");};


    Echo.prototype.echo = function(str, callback){
    	  cordova.exec(callback, function(err) {
              callback('Nothing to echo.');
          }, "Echo", "echo", [str]);
    };

    // Plug in to Cordova
    cordova.addConstructor(function() {

        if (!window.Cordova) {
            window.Cordova = cordova;
        };


        if(!window.plugins) window.plugins = {};
        window.plugins.Echo = new Echo();
    });
