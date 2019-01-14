

function g(id){
	return document.getElementById(id);
}


var strtext = [];

            this.onmessage =   function (e){
                 value = e.data;
                 if (value != null && value == '20000'){
                     strtext[0]= "City is available.";
                    strtext[1] = "green";
                    obj = {message: strtext};
                 str = "City is available.";
                 }else {
                     strtext[0] = "City is not yet in our system.";
                     strtext[1]= "red";
                    obj = {message: strtext};
                  } 
                done(obj);
            };
            function done(obj){
                
                this.postMessage(obj);
            }
           
     