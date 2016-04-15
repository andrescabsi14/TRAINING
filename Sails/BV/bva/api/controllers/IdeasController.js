/**
 * IdeasController
 *
 * @description :: Server-side logic for managing ideas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getIdeas: function(req, res){
		Ideas.find().exec(function(err, ideas){
			return res.json(ideas);
		})
	},
	addIdea: function(req, res){
		var dataIdea = req.params.all();
		Ideas.create(dataIdea).exec(function(err, ideas){
			return res.json(ideas);
		})
	},
	removeIdea: function(req, res){
		var dataIdea = req.params.all();
		Ideas.destroy(dataIdea).exec(function(err, ideas){
			return res.json(ideas);
		})
	}
};

