var React = require('react');
//do the routing on the page
var ReactRouter = require('react-router');
//actual router object, decide what content to show
var Router = ReactRouter.Router;
//config router, instruct how to construct
var Route = ReactRouter.Route;
var Topic = require('./components/topic');


var Main = require('./components/main');
var ImageDetail = require('./components/image-detail');


module.exports = (
	<Router>
		<Route path="/" component = {Main}>
			//nested inside of the paht "/"
			//we can put a parameter to the url
			//insode the Topic, will have this.props.id = 
			<Route path="topics/:id" component={Topic} />
			<Route path="images/:id" component={ImageDetail} />
		</Route>
	</Router>
);