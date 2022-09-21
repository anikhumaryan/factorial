const app = require('express')()
const http = require('http')
const port = 8080

const server = http.createServer(function(req, res) {
    app.get('/:n', function(req, res){
        const n = req.params.n
        
        function factorial(n){
            if (n<0){
                return "undefined";
            }
            if(n == 0 || n == 1){
                return 1;
            }
            else{
                return n * factorial(n-1);
            }
            answer = factorial(n)
        }
        res.send("The factorial of" + n + "is" + answer)
        res.end()
    });
});

server.listen(port, function(error){
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on portt' + port)
    }
});