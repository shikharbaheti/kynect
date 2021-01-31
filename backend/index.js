headers['Access-Control-Allow-Origin'] = '*'
headers['Access-Control-Allow-Methods'] = 'PUT,GET,POST,DELETE,OPTIONS'
allow_headers = "Referer,Accept,Origin,User-Agent,Content-Type"
headers['Access-Control-Allow-Headers'] = allow_headers

const express = require('express');
const {spawn} = require('child_process');
const app = express();
const {PythonShell} =require('python-shell'); 


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080/"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
});

app.post('/', (req, res) => {

        let options = { 
            mode: 'text', 
            pythonOptions: ['-u'], // get print results in real-time 
              scriptPath: '', //If you are having python_test.py script in same folder, then it's optional. 
            args: [''] //An argument which can be accessed in the script using sys.argv[1] 
        }; 
          
      
        PythonShell.run('script1.py', options, function (err, result){ 
              if (err) throw err; 

              // result is an array consisting of messages collected  
              //during execution of script. 
              console.log('result: ', result.toString()); 
              res.send(result.toString()) 
        }); 

        res.redirect('http://localhost:3000/builder');

}) 

const server = app.listen(8080, () => {
    const host = server.address().address;
    const port = server.address().port;
    
    console.log(`Example app listening at http://${host}:${port}`);
});