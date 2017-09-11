$(function() {
//the .extend(WorkoutLog, ) is allowing us to add additional features to the Workoutlog we defined in app.js we can use one page but for our brain sake its best to split up funcitions into different pages. 
	$.extend(WorkoutLog, {
		definition: {
			userDefinitions: [],

			create: function() {

				var def = { 
		         		desc: $("#def-description").val(),  //the .val(), allows to grab the input on the page that is entered by user
						type: $("#def-logtype").val()
				};
				var postData = { definition: def };
		      	var define = $.ajax({

         	type: "POST",
	         	url: WorkoutLog.API_BASE + "definition",
	         	data: JSON.stringify(postData),
	         	contentType: "application/json"
		      	});

		      	define.done(function(data) {
		      		console.log(data)
	      			WorkoutLog.definition.userDefinitions.push(data.definition);
	      			$("#def-description").val(""); //the .val(''); is emptying the field out on the page after entering the info and submitting
	      			$("def-logtype").val("");
	      			$('a[href="#log"]').tab("show");  //[]-here are saying this is a link with the a tag. allows us to go to the next tab on the page once info has been submitted. #log is the the id assianged to log page on index.html
		      	});
		  },

		  fetchAll: function() {
			 var fetchDefs = $.ajax({
		         type: "GET",
		         url: WorkoutLog.API_BASE + "definition",
		         headers: {
		         	"authorization": window.localStorage.getItem("sessionToken")
		         }
		      })
		      .done(function(data) {
		         WorkoutLog.definition.userDefinitions = data;
		      })
		      .fail(function(err) {
		         console.log(err);
		      });
		  }
		}
	});

	// bindings
		$("#def-save").on("click", WorkoutLog.definition.create);


   // fetch definitions if we already are authenticated and refreshed
    if (window.localStorage.getItem("sessionToken")) {
      WorkoutLog.definition.fetchAll();
   }
   
})