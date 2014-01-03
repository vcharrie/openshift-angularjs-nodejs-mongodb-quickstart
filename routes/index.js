var mongoose = require('mongoose');

var dbUrl = process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME;

var db = mongoose.createConnection(dbUrl, function(err) {
		if (err) {
			console.log("[Error] MongoDB '" + dbUrl + "' connection failed : " + err);
		}
	});

// var db = mongoose.createConnection('localhost', 'triplistsapp');
var TListSchema = require('../models/TList.js').TListSchema;
var TListDB = db.model('tlists', TListSchema);

exports.index = function(req, res) {
  res.render('index', {title: 'My Trip List'});
};

// JSON API for list of list
exports.tlists = function(req, res) { 
	TListDB.find({}, 'title', function(error, tlists) {
    res.json(tlists);
  });
};

// JSON API for getting a single poll
exports.atlist = function(req, res) {  
  var tlistId = req.params.tlistId;
  TListDB.findById(tlistId, '', { lean: true }, function(err, tlist) {
    if(tlist) {
      res.json(tlist);
    } else {
      res.json({error:true});
    }
  });
};

// JSON API for creating a new poll
exports.create = function(req, res) {
  var reqBody = req.body,
      artefacts = reqBody.artefacts.filter(function(v) { return v.text != ''; }),
      listObj = {title: reqBody.title, artefacts: artefacts};
  var tlist = new TListDB(listObj);
  tlist.save(function(err, doc) {
    if(err || !doc) {
      throw 'Error';
    } else {
      res.json(doc);
    }   
  });
};