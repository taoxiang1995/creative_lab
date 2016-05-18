var React = require('react');
var Actions = require('../actions');
var ImageStore = require('../stores/image-store');
var Reflux = require('reflux');
var ImagePreview = require('./image-preview');



module.exports = React.createClass({
	//specify topic component shold listen to ImageStore 
	mixins: [
		Reflux.listenTo(ImageStore, 'onChange')
	],

	render: function(){
		return <div className="topic">
			{this.renderImages()}

		</div>
	},

	getInitialState: function(){
		return {
			images: []
		}
	},

	//whatever we change the url, as long as it is the same component,
	//componentWillMount will not be changed. 
	componentWillMount: function(){
		Actions.getImages(this.props.params.id);
	},

	//this function will be involked when the component receive a new props:
	//<Route path="topics/:id" component={Topic} />
	//when id changed, this function will be called
	//we can get the id by nextProps.params.id
	componentWillReceiveProps: function(nextProps){
		Actions.getImages(nextProps.params.id);	
	},

	renderImages: function(){

		return this.state.images.slice(0,40).map(function(image){
			//when we pass the object as props using {... image}
			//react will transfer all the fileds in image to the this.props.
			//so later we can use this.props.something directly
			return <ImagePreview key={image.id} {...image} />
		});
	},

	onChange: function(event, images){

		this.setState({images: images})
	}

	
});