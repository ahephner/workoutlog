
// $(function(){
// 	$.extend(WorkoutLog, {
// 		//signup method
// 		signup: function(){
// 			// username & password variables.
// 			var username = $("#su_username").val();
// 			var password = $("#su_password").val();
// 			// user object
// 				var user = {
// 					user: {
// 						username: username,
// 						password: password
// 					}
// 				};
// 					//signup post
// 					var signup = $.ajax({
// 						type: "POST",
// 						url: WorkoutLog.API_Base + "user",
// 						data: JSON.stringify( user ),
// 						contentType: 'application/json'
// 					});
// 					//signup done/fail
// 					signup.done(function(data){
// 						if(data.sessionToken){
// 							WorkoutLog.setAuthHeader(data.sessionToken);
// 						}

// 						$("#signup-modal").modal("hide");
// 						$(".disabled").removeClass("disabled");
// 						$("loginout").text("Logout");
// 					}).fail(function(){
// 						$("#su_error").text("There was an issue with sign up").show();
// 					});
// 		  },
			
// // 	})

// // });
// 		//login method
// 		login: function(){
// 			//login variables 
// 			var username=$("#li_username").val();
// 			var password=$("#li_password").val();
// 			 	var user ={
// 			 		user: {
// 			 			username: username,
// 			 			password: password
// 			 		}
// 			 	};
// 			 	//login post
// 			 	var login = $.ajax({
// 			 		type: "POST", 
// 			 		url: WorkoutLog.API_Base + "login", 
// 			 		data: JSON.stringify(user), 
// 			 		contentType: "application/json"
// 			 	});

// 			 	login.done(function(data){
// 			 		if (data.sessionToken){
// 			 			WorkoutLog.setAuthHeader(data.sessionToken);
// 			 				console.log(data.sessionToken);
// 			 		}
// 			 				$("#login-modal").modal("hide");
// 			 				$(".disable").removeClass("disabled");
// 			 				$("#loginout").text("Logout");

// 			 	})

// 			 	.fail(function(){
// 			 		$("#li_error").text("There was an issue with your username")
// 			 	});
// 		},

// 		//logout
// 				loginout: function(){
// 					if (window.localStorage.getItem("sessionToken")){
// 						window.localStorage.removeItem("sessionToken");
// 						$("loginout").text("Login");
// 					}
// 				}
// 	});

// 			$("#login").on("click", WorkoutLog.login);
// 			$("#signup").on("click", WorkoutLog.signup);
// 			$("#loginout").on("click", WorkoutLog.loginout);

// 			if (window.localStorage.getItem("sessionToken")){
// 				$("#loginout").text("Logout");
// 			}

// 		});

$(function() {
   $.extend( WorkoutLog, {
      signup: function() {
            var username = $("#su_username").val();
            var password = $("#su_password").val();
            var user = {user:  {username: username, password: password }};
            var signup = $.ajax({
               type: "POST", 
               url: WorkoutLog.API_BASE + "user", 
               data: JSON.stringify(user), 
               contentType: "application/json"
            });
            signup
            .done(function(data) {
               if (data.sessionToken) {
                  WorkoutLog.setAuthHeader(data.sessionToken);
                  console.log("You made it!");
                  console.log(data.sessionToken);
               }
               $("#signup-modal").modal("hide");
               $(".disabled").removeClass("disabled");
	           //$("#loginout").text("Logout");
               //go to define tab
               //$('.nav-tabs a[href="#define"]').tab('show');
            })
            .fail(function(){
               $("#su_error").text("There was an issue with your username").show();
            });
      },

      //login

      login: function() {
   		var username = $("#li_username").val();
   		var password = $("#li_password").val();
   		var user = {user:  {username: username, password: password }};
   		var login = $.ajax({
   			type: "POST", 
   			url: WorkoutLog.API_BASE + "login", 
   			data: JSON.stringify(user), 
   			contentType: "application/json"
   		});

   		login
   		.done(function(data) {
   			if (data.sessionToken) {
               WorkoutLog.setAuthHeader(data.sessionToken);       
               console.log(data.sessionToken);
   			}

   			$("#login-modal").modal("hide");
   			$(".disabled").removeClass("disabled");
   			$("#loginout").text("Logout");
   		})

 
   		.fail(function(){
   			$("#li_error").text("There was an issue with your username or password").show();
      		});
      },

      //logout
      loginout: function() {
         if (window.localStorage.getItem("sessionToken")) {
            window.localStorage.removeItem("sessionToken");
            $("#loginout").text("Login");
         }
      }
   });

   // bind events
  	$("#login").on("click", WorkoutLog.login);
    $("#signup").on("click", WorkoutLog.signup);
 	$("#loginout").on("click", WorkoutLog.loginout);

   if (window.localStorage.getItem("sessionToken")) {
      $("#loginout").text("Logout");
   }

});