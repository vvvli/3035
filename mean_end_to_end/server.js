var Model = require('./models/models.js')
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

var db = "mongodb://192.241.203.159/3035";

mongoose.connect(db, function(err, response){
	if(err){
		console.log('Failed to connected to ' + db);
	}
	else { 
		console.log('Connected to ' + db);
	}
});

var router = express.Router();

//GET

router.get('/api/admins', function(request, response){

	Model.find({}, function(err, admins){
		if(err){
			response.status(404).send(err);
		}
		else{
			response.status(200).send(admins)
		}
	})

});

router.post('/api/admins', function(request, response){
	var model = new Model();
	model.name = request.body.name;
	model.edu = request.body.edu;
	model.skills = request.body.skills;
	model.projects = request.body.projects;
	model.save(function(err, admin){
		if(err){
			response.status(500).send(err)
		}
		else{
			response.status(201).send(admin)
		}
	});
});

app.use('/', router);

app.use(morgan('dev')); 

app.use(express.static(__dirname + '/public'));

app.listen(3000, function(){
	console.log('Listening on port 8080');
})