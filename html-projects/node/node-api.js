const varun = require('http');

let shamu = varun.createServer((request,response)=>{
response.write("<iframe src='https://en.wikipedia.org/wiki/Steve_Jobs' height='100%' width='100'></iframe>");
response.end();
});

const address = "127.0.0.1";
const port = 4000;

shamu.listen(port,address,()=>{
    console.log("server is running at http://" + address + ":" + port);
});