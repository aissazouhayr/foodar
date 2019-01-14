
    $(document).ready(function(){
        
     // populating  the first and last name to profile.html at the first successed login 
	 var checkLocalStorage = localStorage.getItem("username");
	 
    if(checkLocalStorage)
    {
        document.getElementById("first-lastName").innerHTML = checkLocalStorage; 
    }
// get the data grabed from user.json and display it on profile.html
//getting the values from sessionStorage
if(sessionStorage.getItem('foodar-user-Data')!=null){
var email = sessionStorage.getItem("email");
var city = sessionStorage.getItem("city");
var address1 = sessionStorage.getItem("address1");
var address2 = sessionStorage.getItem("address2");
var state = sessionStorage.getItem("state");
var zipcode = sessionStorage.getItem("zipcode");
var age = sessionStorage.getItem("age");
var phone = sessionStorage.getItem("Phone number");

//setting values
$("[id=email]").val(email);
$("[id=address1]").val(address1);
$("[id=address2]").val(address2);
$("[id=city]").val(city);
$("[id=state]").val(state);
$("[id=zipcode]").val(zipcode);
$("[id=age]").val(age);
$("[id=phone]").val(phone);
}
// update the local storage after 3 secends if the user changed personal data 
$(".data").change(function(){
	   var elementChanged =  $(this).attr('id');
	   var newvalue = $(this).val();
	   	   setTimeout(function(){localStorage.setItem(elementChanged,newvalue);},3000)
});


});

// code to hide and show theme colors and set background theme
$(document).ready(function(){
    $(".colors").hide();
      var c = localStorage.getItem("color");//get the color from lcal Storage
      $("#profilepage").css("background",c);// set the background
    //on choice of theme update the background
 $("#themecolors").on('click',function()
    {
	//	$(".first-lastName-div").css('display','block');
      $(".colors").toggle();
	  $(".colors").click(function()
	   {
            var color = $(this).attr('data');
            $("#profilepage").css("background",color);
            //setting timer to autosave background color after 3 secends
            setTimeout(function(){ localStorage.setItem("color",color); }, 3000);
            
       });

	});  
 });
    
// code to upload photo

var elm = document.getElementById("upload");
var elm2 = document.getElementById("fileElem");
elm2.addEventListener("change",function  imageUploadTest(event){
   
	var file = event.target.files[0];

	var reader = new FileReader();

	//Binds a function to the onload event
	//
	reader.onload = function(innerEvent){
		//checks if image is a .jpg
		//NOTE: You can change this to allow .gif or .png files
		if (innerEvent.target.result.search(".jpg") != -1){
			//change file image
			
			
			//Use innerEvent.target.result as "src" for image
			
			$("#profile-image").attr("src", innerEvent.target.result).css({
				width: 200,
				height: 200,
			});
			
        }
        else {
			alert("only .jpg files allowed!");
		}
	};


	//binds function to when uploading image starts
	reader.onloadstart = function(event){
		console.log("Loading image...");
	};

	//binds function to when image upload is complete
	reader.onloadend = function(event){
		console.log("done loading image");
        //TODO: save date to local storage after 3 secends
        setTimeout(function(){ localStorage.setItem("photo",file); }, 3000);
	};
    
	//needed to read image data
	reader.readAsDataURL(file);		
});

