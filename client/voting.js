//Keep track of the scores
Ballots = new Meteor.Collection("ballots");
var updateLeft_dep = new Deps.Dependency();
var updateRight_dep = new Deps.Dependency();
var randleft;
var randright;

Template.voteTemplate.helpers({
	GetLeftScore: function () {
		return Ballots.findOne({name:"Left Ballot"});
	},

	GetRightScore: function () {
		return Ballots.findOne({name:"Right Ballot"});
	}
});

//Handle voteTemplate events (namely voting)
Template.voteTemplate.events({
	'click .leftballot': function (e, template) {
		Ballots.update(Session.get("left")._id, {$inc: {score: 5}});
		updateRight_dep.changed();
	},

	'click .rightballot': function (e, template) {
		Ballots.update(Session.get("right")._id, {$inc: {score: 5}});
		updateLeft_dep.changed();
	},

});

Template.ColorTemplate.helpers({
	GetLeftColor: function() {
		updateLeft_dep.depend();
		randleft = (Math.floor(Math.random() * 12) + 1);
		while(randleft == randright)
		{
			randleft = (Math.floor(Math.random() * 12) + 1);
		}
		var lft = Ballots.findOne({num: randleft});
		Session.set("left", lft);
		return lft;
	},

	GetRightColor: function() {
		updateRight_dep.depend();
		randright = (Math.floor(Math.random() * 12) + 1);
		while(randright == randleft)
		{
			randright = (Math.floor(Math.random() * 12) + 1);
		}
		var rgt = Ballots.findOne({num: randright});
		Session.set("right", rgt);
		return rgt;
	}
});

Template.LeaderboardTemplate.helpers({
	GetColors: function() {
		return Ballots.find({}, {sort: {score: -1}});
	}
});
/*
Template.ColorTemplate.GetLeftColor = function () {
	
	console.log("Start Debug");
	console.log(Ballots.find().count());
	var bal = Ballots.findOne({num: (Math.floor(Math.random() * 3) + 1)});
	console.log(bal);
	var color = bal.color;
	console.log(color);
	$('.leftballot').css('background-color', color);
	
	var bal = Ballots.findOne({num: (Math.floor(Math.random() * 3) + 1)});
	console.log(bal);
	Session.set("left", bal);
	return bal;
}*/
