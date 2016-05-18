var React=require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/image-store');
var CommentStore = require('../stores/comment-store')
var Actions = require('../actions');
var CommentBox = require('./comment-box');


module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(ImageStore, 'onChange'),
		Reflux.listenTo(CommentStore, 'onChange')
	],

	getInitialState: function(){
		return {
			image: {},
			comments: []
		}
	},

	componentWillMount: function(){
		Actions.getImage(this.props.params.id);
		
	},


	render: function(){
		//console.log(this.state.image);
		return <div className="image-detail">
			{this.state.image? this.renderContent() : null}
		</div>
	},

	renderContent: function(){
		//console.log(CommentStore.comment);
		return <div>
			<div className="panel panel-default" >
				<div className="panel-heading" >
					<h4>{this.state.image.title}</h4>
				</div>

				<div className="panel-body" >
					{this.renderImage()}
				</div>

				<h3>Comments</h3>
				{this.renderComments()}
				<div className="panel-footer" >
					{this.state.image.description}
				</div>
			</div>
		</div>
	},

	renderComments: function(){
		//console.log( this.state.comments);
		if (!this.state.comments)
		{
			return null;
		}
		else
		{
			return <CommentBox comments={this.state.comments} />
		}
	},

	renderImage: function(){
		if (this.state.image.animated)
		{
			return <video preload="auto" autoPlay="autoplay" loop="loop" webkit-playsinline>
						<source src={this.state.image.mp4} />
					</video>
		}
		else
		{
			return <img src={this.state.image.link} />
		}
	},

	onChange: function(){
		// console.log("sds");
		//console.log("sds");
		console.log('sds');
		this.setState({
			image: ImageStore.find(this.props.params.id),
			comments: CommentStore.comment
		});



		//console.log(this.state.image);
		
		//console.log(this.props.params.id);	
	}
});