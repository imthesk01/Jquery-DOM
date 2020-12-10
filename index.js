function login() {
   var user = $("#username").val();
   var pass = $("#password").val();
	console.log(pass);
	console.log(user);
   if(user == "admin" && pass == "password"){
		doRedirect("home.html");
	  }
   else{
   alert("You are not a valid user");
   }
  };


function doRedirect(href) {

 window.location = href;

};
