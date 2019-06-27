const IncomingForm = require('formidable').IncomingForm

module.exports = function upload(req, res) {
    var form = new IncomingForm()
  
    form.on('file', (field, file) => {
      // Do something with the file
      // e.g. save it to the database
      // you can access it using file.path
    })
    form.on('end', () => {
      res.json()
    })
    form.parse(req)
  }

/*const busboy = require('connect-busboy')
const path = require('path')
const fs = require('fs-extra')

exports.saveFile = function(app, req){
    app.use(busboy())
    app.use(express.static(path.join(__dirname, 'public')))
    var fstream;
    req.pipe(req.busboy);
    req.busboy.on('file', function (fieldname, file, filename) {
        console.log("Uploading: " + filename);

        //Path where image will be uploaded
        fstream = fs.createWriteStream(__dirname + '/img/' + filename);
        file.pipe(fstream);
        fstream.on('close', function () {    
            console.log("Upload Finished of " + filename);              
            res.redirect('back');           //where to go next
        });
    });
}*/