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

function hover1(){
  $("#item1-des").slideToggle();
};
function hover2(){
  $("#item2-des").slideToggle();
};
function animate_big(){
	$("#buy").animate({
    width:"200px"
  //  $("div").width("50%");
})
};
function animate_small(){
	$("#buy").animate({
    width:"100px"
  //  $("div").width("50%");
})
};
