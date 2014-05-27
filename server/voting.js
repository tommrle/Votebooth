Ballots = new Meteor.Collection("ballots");

Meteor.startup(function() {
	if(Ballots.find().count() == 0) {
		Ballots.insert({ name: "Yellow", score: 0, color: "yellow", num: 1});
		Ballots.insert({ name: "Red", score: 0, color: "red", num: 2});
		Ballots.insert({ name: "Blue", score: 0, color: "blue", num: 3});
		Ballots.insert({ name: "Orange", score: 0, color: "orange", num: 4});
		Ballots.insert({ name: "Teal", score: 0, color: "teal", num: 5});
		Ballots.insert({ name: "Green", score: 0, color: "green", num: 6});
		Ballots.insert({ name: "LightGreen", score: 0, color: "LightGreen", num: 7});
		Ballots.insert({ name: "Gray", score: 0, color: "gray", num: 8});
		Ballots.insert({ name: "Pink", score: 0, color: "#FF00FF", num: 9});
		Ballots.insert({ name: "BlueViolet", score: 0, color: "blueviolet", num: 10});
		Ballots.insert({ name: "Coral", score: 0, color: "Coral", num: 11});
		Ballots.insert({ name: "MediumSlateBlue", score: 0, color: "MediumSlateBlue", num: 12});
	}

	return Meteor.methods({
		removeAllData: function() {
			return Ballots.remove({});
		}
	});
});