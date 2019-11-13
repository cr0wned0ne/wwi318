const myJsModule = {
    a : 1,
    sayHi :  function(param, param2, param3) {
        alert("Hi! " + param + param2);
    },
    onStartup : function() {

        console.log(x);
    
        for (let i = 0; i < 10; i++) {
            console.log(i);
        }
        

        
        const a = this.a;
        const b = 1;
        
        function add(x, y) {
            return x + y;
        }
        
        const result = add(a, b);
        console.log('result:', result);
        
        let logHi = function() {
            console.log("hi!");
        }
        
        
        if (result > 3) {
            console.log('Wow!');
        } else {
            console.log('Meh..');
        }
    }

}


myJsModule.onStartup();
console.log(myJsModule.a);


