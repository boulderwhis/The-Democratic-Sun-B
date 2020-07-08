const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const PORT = process.env.PORT || 5000
const app = express();


//database entrypoint
const ads =[
  {title: 
                    "Hey stop trying to access my API guy. This is for Democratic Sun stuff only >:|"
}
]

console.log("dirname = " +__dirname);
console.log("path: \n");
//console.log(path,"%o");

app.use(helmet());

app.use(bodyParser.json());

app.use(cors());

app.use(morgan('combined'));

app.get('/', (req,res)=> {
  res.end(ads[0].title);
  // res.end('./Democratic_Sun')
});

app.get('/nick', (req,res)=> {
  res.end("Nick is wizard 2");
});

app.get('/tiffany', (req,res)=>{
  res.end("Hi Tiffany! I am computer and I put this in here to make Ethan look cool...how am I doing? :)");
})

app.get('/nick:data', (req,res)=> {
  console.log(req,"%o");
  console.log(req.url.split(":")[1].toString());
  res.end("Nick is wizard and "+req.url.split(":")[1].toString());
});


app.listen(PORT, ()=>{
  console.log('listening on port '+PORT);
  console.log("dirname = " +__dirname);
});

// }