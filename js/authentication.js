function g(id){
	return document.getElementById(id);
}

//login user function that will tranfer user to profile.html on the first right login
function loginUser(){
	//Check for Web Storage API support
	if(typeof(Storage) !== "undefined") {
		// Code for localStorage/sessionStorage.
		
	} else {
		// Sorry! No Web Storage support..
	}
	
	
	if (localStorage.getItem("address_state") == null){
		
		var username = "username";
		var email = "user@example.com";
		var phone = "1234567890";
		var address_street = "123 Main Street Suite 205";
		var address_city = "Reston";
		var address_state = "Virginia";
		var address_zipcode = "20190";
		
		localStorage.setItem("address_street", address_street);
		localStorage.setItem("address_city", address_city);
		localStorage.setItem("address_state", address_state);
		localStorage.setItem("address_zipcode", address_zipcode);
		localStorage.setItem("username", username);
		localStorage.setItem("phone", phone);
		localStorage.setItem("email", email);
		localStorage.setItem("username", username);
	} else {
		//localStorage.address = null;
		//localStorage.removeItem("user");
		
		
		var address = localStorage.getItem("address_street");
		
		var elem = g("address");
		
		if (elem != null){
			elem.value = address;
		} else {
			//do nothing
			//more than likely this method was executed on another page
			//or the element id is a different name
		}
		
    }

 //my modification
var element = g("login-form") ;
 if(element){
     element.addEventListener("click",function(e)
	{   
		var password = element.password.value;
		var username = element.username.value;
		
        var valid = checkUsernamePassword(password,username);
        
		if(valid){
			if(typeof(Storage) !== "undefined") {
				// Code for localStorage/sessionStorage.
				var user= element.username.value;
				localStorage.setItem("username",user);
			    
			} else {
				// Sorry! No Web Storage support..
			}
			// forward to profile.html
			 	
			// linking to profile.html
			 window.location.href = "profile.html";
		     
		}

		e.preventDefault();

	});
	
	
}	
	

}
// function to check input password and username
function checkUsernamePassword(password,username){
    var Mname = 'aissa';
    var  Mpword = '1234./qw';
    this.password = password;// using the constructor design
    this.username = username;//  using the constructor design
    
        if(checkpassword(password)&&(username===Mname) && (password===Mpword))
        {
            
            return true;
        } 
        else return false;
      
      
 }

//function checkpassword() to check that a password has at least one letter one number and maxlength=8
function checkpassword(password){
    this.password = password;// using the constructor design
	var pattern = new RegExp(/[~`!@#$%\^&*+=\-\[\]\\';,./{}|\\":<>\?]/);
	
	if((password.length<=8) && (password.search(/[a-z]/)>0 || password.search(/[A-Z]/)>0) && (pattern.test(password))){
	  
	    return true;
	}
	else {
		return false;
	}
	
}


// code for the advertisement and coupon
var  E  = g("advertise");
var div1 = document.createElement("div");
var h3 = document.createElement("h3");
var P = document.createElement("p");
div1.style.backgroundColor="#22222299";     
E.addEventListener("click",clearadvertise);
function advertise(){

 h3.style.dislay="block";
 h3.innerHTML="Order today and get 15% off";
 h3.style.textAlign="center";
 P.innerHTML="Use coupon code:15OFF";
 P.style.color="yellow";
 P.style.textAlign="center";
 P.style.dislay="block";
 div1.style.color="white";
 div1.style.padding="10px";
 div1.style.height='100px';
 div1.style.width='100%';  


div1.appendChild(h3);   
div1.appendChild(P); 


div1.style.position ="fixed";

E.appendChild(div1);


}
function clearadvertise(){
	E.removeChild(div1);
}
setTimeout(advertise,2000);
loginUser();


//code for changing feature-image eevery 3s
var count = 0 ;



var elm = document.getElementById("feature-image-div");
var h = document.createElement('h1');

h.innerHTML= "Try A New Meal Today";      
elm.style.height="100%";
elm.style.width="100%";
var img = document.createElement("img");
var a =["images/bg-aboutus.jpg","images/03.jpg","images/01.jpg"];
function updatepic(){
 
    if(count==3){count=0;}
     img.setAttribute("width","100%");
     img.setAttribute("height","80%");
     //img.style.backgroundSize="cover";
	 h.style.color="white";
	 h.style.margin="20% 20% 20% 30%";
	 img.src = a[count];
	 //elm.style.position="relative";

	 h.style.position="absolute";
     elm.style.textAlign="center";
	 elm.appendChild(h);

	 elm.appendChild(img);
	 
	 elm.style.backgroundSize="cover";
	 
     count++;
}
updatepic();
var interval = setInterval(updatepic,3000);
