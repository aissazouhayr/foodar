var coordinates;
var requests = 0;

//Variables for cityChecker
var cityElem = "cityCheck";
var cityButton = "cityChecker";
var cityInput = "cityZip";
var restaurants = [];

//FOR TEMPLATE
var value ;
function updateCity(){
	 
	
	
	var btn = g(cityButton);
	if (btn != null){
		
		btn.addEventListener("click", function(E)
		{
			
			
			
			// var value = g(cityInput).value;
			// if (value != null && value == '20000'){
			// 	g(cityElem).innerHTML = "City is available.";
			// 	g(cityElem).className = "green";
			// }else {
			// 	g(cityElem).innerHTML = "City is not yet in our system.";
			// 	g(cityElem).className += " red";
			// }
			
			
			//refactoring the code above using webworker
			var  worker = new Worker("js/zipcode.js");
			
				 value  = g(cityInput).value;
			worker.onmessage = function(e)
			{			
				  obj = e.data.message;
				 g(cityElem).innerHTML = obj[0];
				 g(cityElem).className += obj[1]
				 
			};
	        
			function done(value){
                worker.postMessage(value);
            }
			done(value);
			E.preventDefault();	
		 });
	}
}


/*	updates the navigation bar with number
	of requests that the user has submitted.
*/
function updateRequests(){
	var elem = g("requests");
	if (elem != null){
		elem.innerHTML = "( " + requests + " )" ;
	}
}

function populateRestaurants(){
	restaurants = [
		'Applebees',
		'Bojangles',
		'O\'Charles',
		'McDonalds',
		'Red Lobster'
	];
	
	var input = g("restaurant");
	
	if (input != null){
		input.addEventListener("keyup", function(e){
			console.log("possible restaurants...");
			
			var value = this.value;
			console.log("value: " + value);
			
			//list possible restaurants
			for (i=0; i < restaurants.length; i++){
				var r = restaurants[i];
				if (value != null && value != "" && r.startsWith(value)){
					console.log("Restaurant: " + r);
				}
			}
			
		});
	}
	
}

function g(id){
	return document.getElementById(id);
}




updateRequests();
updateCity();
populateRestaurants();


//*##################################################################*/
// My modifications
// i updated updateCity() above  by refactoring the code  using webworker



// ajax code to retrieve data from user.json
function userData(url){
// var xhr;
// if(window.XMLHttpRequest){
// 	xhr = new XMLHttpRequest();

// }
// else{xhr = new ActiveXObject("Microsoft.XMLHTTP");}
// xhr.onreadystatechange = function(){
// 	if(xhr.readyState == 4 && xhr.status==200 ){
		                                                            
// 		var datavalues = JSON.parse(xhr.responseText);     
// 		var data = JSON.stringify(xhr.responseText);                
// 		sessionStorage.setItem("foodar-user-Data", data);
// 		sessionStorage.setItem("ID", datavalues.id);
// 		sessionStorage.setItem("firstName", datavalues.firstName);
// 		sessionStorage.setItem("lastName", datavalues.lastName);
// 		sessionStorage.setItem("email", datavalues.email);
// 		sessionStorage.setItem("address1", datavalues.address1);
// 		sessionStorage.setItem("address2", datavalues.address2);
// 		sessionStorage.setItem("favoriteFoods", datavalues.favoriteFoods);
// 		sessionStorage.setItem("state", datavalues.state);
// 		sessionStorage.setItem("age", datavalues.age);
// 		sessionStorage.setItem("city", datavalues.city);
// 		sessionStorage.setItem("zipcode", datavalues.zipcode);
// 		sessionStorage.setItem("Phone number", datavalues.phoneNumber);

// 	}
	
// }
//    xhr.open("GET","http://localhost:5000/js/user.json");
// 	xhr.send();
//refactoring the code above using ajax methods

$(document).ready(function(){
	this.url = url;//using constructor design practices
	$.ajax(url).done(function(response){              
		sessionStorage.setItem("foodar-user-Data", response);
		sessionStorage.setItem("ID", response.id);
		sessionStorage.setItem("firstName", response.firstName);
		sessionStorage.setItem("lastName", response.lastName);
		sessionStorage.setItem("email", response.email);
		sessionStorage.setItem("address1", response.address1);
		sessionStorage.setItem("address2", response.address2);
		sessionStorage.setItem("favoriteFoods", response.favoriteFoods);
		sessionStorage.setItem("state", response.state);
		sessionStorage.setItem("age", response.age);
		sessionStorage.setItem("city", response.city);
		sessionStorage.setItem("zipcode", response.zipcode);
		sessionStorage.setItem("Phone number", response.phoneNumber);
	});
	
});
}
//code to hide and show login bar
function loginBartoggle(){
$(document).ready(function(){
	$("#login-form").hide();
	$("#sign-in").click(function(){
		$("#login-form").slideToggle();
	});
});

}
//userData("http://localhost/js/user.json")

userData("http://localhost:5000/js/user.json")
loginBartoggle();


  