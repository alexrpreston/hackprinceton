
var getHTMLCODE = setInterval(function() { 
    
    
    var htmlCode = document.getElementById('message').innerHTML;
    if ("Injecting Script...." !== htmlCode) {
    
        //Call API
        setTimeout(2000)

        document.getElementById('genderBiasRange').value = 100;
        document.getElementById('politicalBiasRange').value = -100;
        document.getElementById('ageBiasRange').value = 100;    

        document.getElementById("genderBiasDisplayedValue").innerHTML = "+1.0";
        document.getElementById("politicalBiasDisplayedValue").innerHTML = "-1.0";
        document.getElementById("ageBiasDisplayedValue").innerHTML = "1.0";
        
        clearInterval(getHTMLCODE);



    };



},100);