var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');


module.exports = Reflux.createStore({
	//listenables is already implemented by the Reflux
	//any action that is triggered by this action object 
	//it will run the exact function that the action is triggered. 

	listenables: [Actions],

	getTopics:function(){
		return Api.get('topics/defaults')
			.then(function(json){
				this.topics = json.data;
				//when we sucessfully fetch the data, we call triggerChange function
				this.triggerChange();
			}.bind(this));
	},

	triggerChange: function()
	{
		//trigger() is procvided by reflux
		///\'change' is the name of the event occur
		//second argument is the information we want to share
		//same as the event handler


		//whenever there is a change 
		this.trigger('change', this.topics);
	}
});