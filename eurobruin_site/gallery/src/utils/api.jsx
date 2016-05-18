//fetch data using imgur api
//api module
var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = '4098ade8f937743';


//fetch will makes an Ajax request to whaeaver url we pass to it
module.exports = window.api= {
	get: function (url){
		return fetch(rootUrl+url, {
			headers: {
				'Authorization': 'Client-ID ' + apiKey
			}
		})//return a promise object
		//call back function in the then will be called rightafter get function get the result back
		.then(function(response){
			return response.json()
		});
		
	}
};

//how to use the api module?
/*

Api.get('topics/defaults')
.then(function(data){
	//Do something with the data
})

*/