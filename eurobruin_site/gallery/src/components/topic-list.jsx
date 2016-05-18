var React = require('react');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


module.exports = React.createClass({

	mixins: [
		//whenever there is a change in TopicStore, it gonna call onChange function
		Reflux.listenTo(TopicStore, 'onChange')
	],

	getInitialState: function(){
		return {
			topics: []
		}
	},

	//problems:
	/*
	 1.cant communicate the topic data between sibling component
	 2.component file should only contain html logic and handle user interaction
	*/
	componentWillMount: function(){
		//we might add additional functionality to getTopics()
		//we need a better place to put the code
		Actions.getTopics();
	//bind(this) is to bind this to the calling function
	//where to use the bind()? 
	//=>use it for the call back function which has this. in side of the function body

	},

	render: function() {
		return <div className = "list-group">
			{this.renderTopics()}
		</div>
	},

	renderTopics: function() {
		return this.state.topics.map(function(topic){
			return <Link to={"topics/"+topic.id} className="list-group-item" key={topic.id}>
				<h4>{topic.name}</h4>
				<p>{topic.description}</p>
			</Link>
		});
	},

	onChange: function(event, topics){
		this.setState({
			topics: topics
		});
	}


});