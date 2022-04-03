
var getHTMLCODE = setInterval(function() { 
    
    
    var htmlCode = document.getElementById('message').innerHTML;
    if ("Injecting Script...." !== htmlCode) {
    
        //Get Bias Level
        document.getElementById("biaslevel").innerHTML = "Loading...";
        var url = "http://localhost:80/api/v1/classify-bias-level?type=html";
        fetch(url, {
            method : "POST",
            body: htmlCode
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById("biaslevel").innerHTML = data.replaceAll('"', '');
            // document.getElementById("biasRange").value = biasOptions.indexOf(data);
        });

        //Get Reason for Bias
        document.getElementById("biasReason").innerHTML = "Loading...";
        var url = "http://localhost:80/api/v1/summarize-bias?type=html";
        fetch(url, {
            method : "POST",
            body: htmlCode
        })
        .then(response => response.text())
        .then(data => { 
            console.log("Data29",data)
            let biasLevel = document.getElementById("biaslevel").innerHTML;
            if(biasLevel !== "Not biased" || biasLevel !== "Couldn't classify bias level"){
                document.getElementById("reasonForBiasDiv").classList.remove("visually-hidden");
                document.getElementById("biasReason").innerHTML = data.replaceAll('"', '');
            }
            // document.getElementById("biasRange").value = biasOptions.indexOf(data);
        })
        .catch(error => {
            console.log(error);
        });

        

        //  = biasResult;
        
        clearInterval(getHTMLCODE);



    };



},100);
