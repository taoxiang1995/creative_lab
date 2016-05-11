 $(function(){
	        $(".european_union").mapael({
	            map : {
	                name : "european_union"
	            },
	            plots: {
			
					'England' : {
						latitude: 52.3555,
						longitude: 1.1743,
						//tooltip: {content : "San Francisco"},
		                value: [150000, 20],
		                tooltip: {
			                    	content: "<span style=\"font-weight:bold;\">England</span><br />Number of Bruins : 100"
			                }
					},

					'France' :{
						latitude: 46.2276,
						longitude: 2.2137,
						//tooltip: {content : "San Francisco"},
		                value: [15000, 20],
		                tooltip: {
			                    	content: "<span style=\"font-weight:bold;\">France</span><br />Number of Bruins : 70"
			                }
			        },

			        'German' :{
						latitude: 51.1657,
						longitude: 10.4515,
						//tooltip: {content : "San Francisco"},
		                value: [1000, 20],
		                tooltip: {
			                    	content: "<span style=\"font-weight:bold;\">German</span><br />Number of Bruins : 90"
			                }
			        },

			         'Sweden' :{
						latitude: 60.1282,
						longitude: 18.6435,
						//tooltip: {content : "San Francisco"},
		                value: [1000, 20],
		                tooltip: {
			                    	content: "<span style=\"font-weight:bold;\">Sweden</span><br />Number of Bruins : 20"
			                }
			        },
			
				}
	        });
	    });

	    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	    ga('create', 'UA-42216777-2', 'auto');
	    ga('send', 'pageview');