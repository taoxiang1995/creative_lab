var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./routes');
var Api = require('./utils/api')



// var Hello = React.createClass({
//   render: function() {
//     return <h1 className="red">
//        //if url is /1 then refer to Child1
//        //if url is /2 then refer to Child2
//        //this.props.children only reference to direct child
//        //which component depends on the url specification. 
//        I am a header
//       {this.props.children}
//     </h1>
//   }
// });

// var Child1 = React.createClass({
// 	render : function (){
// 		return <h1> I am Child1 </h1> 
// 	}
// });

// var Child2 = React.createClass({
// 	render : function (){
// 		return <h1> I am other chile, Child2 </h1> 
// 	}
// });



//var element = React.createElement(Hello, {});
ReactDOM.render(Routes, document.querySelector('.container'));
