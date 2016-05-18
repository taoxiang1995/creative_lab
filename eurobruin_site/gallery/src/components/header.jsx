var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Actions = require('../actions');
var TopicStore = require('../stores/topic-store');
var Reflux = require('reflux');


module.exports = React.createClass({

	//specify this Header component should listen to TopicStore
	mixins: [
		Reflux.listenTo(TopicStore, 'onChange')
	],

	//component make a action call
	componentWillMount : function(){
		Actions.getTopics();
	},

	//initiate the topic state
	getInitialState: function(){
		return {
			topics:[]
		}
	},

	render: function(){
		return <nav className="navbar navbar-default header">
			<div className="container-fluid">
 
				<Link to = "/" className="navbar-brand">
					Imgur Browser
				</Link>

				
				<ul className="nav navbar-nav navbar-right">
					{this.renderTopics()}
				</ul>
			</div>
		</nav>
	},

	renderTopics: function(){
		return this.state.topics.slice(0,10).map(function(topic){
			return <li key={topic.id} >
				<Link activeClassName="active" to={"topics/"+topic.id}>
					{topic.name}
				</Link>
			</li>
		});
	},

	onChange: function(event, topics ){
		this.setState({
			topics: topics
		});
	}
});