var Reflux = require('reflux');
var Actions = require('../actions');
var Api = require('../utils/api');

module.exports = Reflux.createStore({
	listenables: [Actions],
	getImage: function(id){
		Api.get('gallery/'+ id+ '/comments')
			.then(function(json){
				this.comment = json.data;
				//console.log(this.comment);
				this.triggerChange();
			}.bind(this));
	},

	triggerChange: function(){
		//console.log(this.comment)
		this.trigger('comment', this.comment);
	}
});