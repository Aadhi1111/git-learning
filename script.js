//XML-HTTP Methods:
//Purpose : it is used to interact with the
//servers via API

//Total there are 5 steps.

//Step 01: Create a XML-HTTP Object
var request = new XMLHttpRequest();
//Step 02: Open a Request
request.open("GET","https://restcountries.com/v3.1/all");
//Step 03: Kickstart a request
request.send();
//step 04:
//Once the data successfully recived from the server
//server status code is 200
//data coming from the server is of type string
//convert string to object

request.onload = function(){
var res = JSON.parse(request.response); 
for(i=0;i<res.length;i++){
    if(res[i].capital){
        console.log(res[i].capital[0] +" "+res[i].area);
    }
    else{
        console.log("Invalid Capital"+" "+res[i].area);
    }
    
}
}
