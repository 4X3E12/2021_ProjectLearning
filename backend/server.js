var express = require('express');
var cors = require('cors');
//import bodyParser from 'body-parser';
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var crypto = require('crypto');
var multer = require('multer');
var path = require('path');
var GridFsStrorage = require('multer-gridfs-storage');
var Grid = require('gridfs-stream');
//var MongoClient = mongoose.MongoClient;
var ejs = require('ejs');

/**
 * Helmet can help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately.

  Helmet is actually just a collection of smaller middleware functions that set security-related HTTP response headers:
 */
var helmet = require ('helmet');
   
const Issues = require ('./models/issue');
const own = require ('./models/own');

const app = express();
const router = express.Router();

// set The Port on 80 
 var server = require ('http').createServer(app);

var fs = require('fs');

app.set('view engine', 'ejs');

// Use For x-powered-by
// app.use(helmet());
app.disable('x-powered-by');
// CSP 


app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});


//var parser = require('xml2json');

//var xml = " <root>Hello xml2js!</root>";
//fs.readfile('./survey.xml', function(err,resutl){
  //  var json = JSON.parse(parser.toJson(resutl, {reversible: true}));
//});


app.use(cors());
app.use(bodyParser.json());

// DB connection CODE
const LinkUrl ="mongodb+srv://l4devs:hello@first-evujp.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(LinkUrl);
var connection = mongoose.connection;
connection.once('open', () => {
    console.log('*******DB Now Connections ON********');
});

/* const client = new MongoClient(LinkUrl, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("firstdb").collection("issues");
  // perform actions on the collection object
  client.close();
}); */

// Static dir

if(process.env.NODE_ENV === 'production'){}
    // serve it through nginx;
    app.use(express.static(path.join(__dirname, './dist/ProjectLearning/')));



//Init Stream 
// collection Name 'uploads';
/*  var gfs;
 connection.once('open', function(){
    gfs = Grid(connection.db,mongoose.mongo);
    gfs.collection('uploads');
   
}); */



// Strorage Engine 
/*  var storage = new GridFsStrorage({
     url: LinkUrl,
     file: (req, file) => {
       return new Promise((resolve, reject) => {
         crypto.randomBytes(16, (err, buf) => {
           if (err) {
             return reject(err);
           }
           var filename = buf.toString('hex') + path.extname(file.originalname);
           var fileInfo = {
             filename: filename,
             bucketName: 'uploads'
           };
           resolve(fileInfo);
         });
       });
     }
   });
   var upload = multer({ storage });

  //@route POST File Upload;
  //@desc This code contains upload file ('file' att. of HTML input)
    app.post('/uploads', upload.single('file'), (req, res) =>{
      res.json({file: req.file});
     //res.redirect('/index');
        res.json ({file: req.file}) ;
        console.log( "File Uploaded ");
  });

    //@route GET /files
   app.get('/files',  (req, res ) => {
      gfs.files.find().toArray( function (err, files ) {
        if(!files || files.lenght === 0){
            return res.status(404).json({
                err: 'No Files Return'
            });
        }
        // Read File's
        //var readstream = gfs.createReadStream(files);
        //readstream.pipe(res);
         return res.json(files);
  });
  });

 

  //@route return files all exits by name JSON
//   router.route('/files/:filename').get((req, res ) => {
//     gfs.files.findOne({filename: req.params.filename}, (err, file ) => {
//         if (!file || file.lenght === 0) {
//             return res.status(404).json({
//                 err: 'No File Return!!'
//             });
//         } 
//            return res.json(file);
        
//     });
// });

 //@route GET /image/:filename in Image format
   router.route('/image/:filename').get((req, res ) => {
        gfs.files.findOne({filename: req.params.filename}, (err, file ) => {
            if (!file || file.lenght === 0) {
                 return res.status(404).json({
                    err: 'No File Return!!'
                });
            } 
               //Check File's is IMAGE or NOT;
             
              if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
                  //Read the output to browser;
                  var readstream = gfs.createReadStream(file.filename);
                  readstream.pipe(res);
            } else{
               
                 res.status(404).json({
                      err:'Sorry the Image Not Returned!! check your content is JPEG/PNG; '
                });
            }
        
        });
    });

  // Show Files 
   app.get('/index', function (req, res)
 {
    gfs.files.find().toArray( function (err, files) {
        if(!files || files.lenght === 0){
             res.render('index', {files: false});
             return res.status(404).json({
                 err: 'No Files Showing Here'
             });
        }
         // Here is Image Collections;
         else {
             files.map(file => {
                 if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
                     file.isImage = true;
                   
                 }else{
                     file.isImage =false;
                 }
             });
             res.render('',  {files: files});
         }
       });
 });  
     */
          
/*var db = MongoClient.db('issues');

db.collection('Issues').find().toArray((err, result) => {
    if (err) {
        throw err;
    }
    else {
        console.log (result);
    }
    
} );**/

// Isssues Tracking List of all recordes
router.route('/').get((req, res) => {
    Issues.find((err, own) => {
        if (err) {
            console.log(err);
            console.log(" Sorry We Do not Find Somthing Here; This is From ERROR; ");
        }else{
        res.json(own);
        return ;
        console.log(" Sorry We Do not Find Somthing Here;" );
    }


    });
});


router.route('/issues').get( (req, res) => {
    Issues.find((err, issue) => {
        if (err) {
            console.log(err);
        }else {
           res.json(issue);
           return ;
           //console.log ("hello");
            
        }
    });
    

});

router.route('/list').get( (req, res) => {

            //console.log(err);
    
           //res.json(issue);
           res.redirect('/');
           return ;
            console.log ("hello");
});

router.route('/create').get( (req, res) => {

    //console.log(err);

   //res.json(issue);
   res.redirect('/');
   return ;
    console.log ("hello");
});


//This Find Or Showing ID
router.route('/issues/:id').get((req, res) => {
    Issues.findById(req.params.id, (err, issue) => {
        if (err) {
            console.log(err);
        } else {
           res.json(issue);
           //res.send({_id:issue});
           return ;
        }
    });
});

// Select By Tag Name Awsome!!

router.route('/tag/:responsebile').get((req, res) => {
    Issues.find({responsebile: req.params.responsebile}, (err, issueTag) => {
        if (err){
            console.log(err);
            return;

        }else {
            return res.json(issueTag);
        }
    });
} );

// Add Upload FIle
//router.route('/uploads', upload.single('file')).post((req, res) => {
    //res.json({file: req.file});
  //});



// Add or Insert Values In DB
router.route('/issues/add').post((req, res) => {
    let issue = new Issues(req.body);
    issue.save()
        .then(issue => {
            res.status(200).json({
                "title" : "This is Title",
                "responsebile" : "Hello WOrld",
                "description" : "RHLRLJLJKLKKL",
                "status" : "Open"

            });
        })
        .catch(erro => {
            res.status(400).send('Failed To Create new Record');
        });
});

// Update Database
router.route('/issues/update/:id').post((req, res) => {
    // Issues.findById(req.params.id, (err, issue) => {
    //     if (!issue) {
    //         return next(new Error('Could Not Load Doucment'));
    //     } else {
    //         issue.title = req.body.title;
    //         issue.responsebile = req.body.responsebile;
    //         issue.description = req.body.description;
    //         issue.severity = req.body.severity;
    //         issue.status = req.body.status;

    //         issue.save().then(issue => {
    //             res.json('Update Done');
    //         }).catch(err => {
    //             res.status(400).send('Update Failed');
    //         });
    //     }
    // });
});

router.route('/issues/delete/:id').get((req, res) => {
    // Issues.findByIdAndRemove({
    //     _id: req.params.id
    // }, (err, issue) => {
    //     if (err) {
    //         res.json(err);
    //     } else {
    //         res.json('Remove Succesfully');
    //     }
    // });
});


app.use('/', router);

var hostname = '192.168.43.55';
// App listen On Port No;
var port = process.env.port || 4420;

app.listen(port,  () => console.log('Express Server Is NOW ON'));

