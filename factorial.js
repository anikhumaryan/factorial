const app = require('express')()


    app.get('/:n', function(req, res){
        const n = req.params.n
        
        function factorial(p){
            if (p<0){
                return "undefined";
            }
            if(p == 0 || p == 1){
                return 1;
            }
            else{
                return p * factorial(p-1);
            }
        
        }
        var a = factorial(n)
        res.send("The factorial of " + n + " is " + a)
        res.end()
    });

app.listen(7000, function(req, res){
    console.log('Running...')
});