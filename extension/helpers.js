
var getHTMLCODE = setInterval(function() { 
    
    
    var htmlCode = document.getElementById('message').innerHTML;
    if ("Injecting Script...." !== htmlCode) {
    
        //Call API


        // axios.post('https://hackprinceton-hlcv3.ondigitalocean.app/summarize-biasHTML', {
        //     htmlCode
        //   })
        //   .then((response) => {
        //     console.log(response);
        //   }, (error) => {
        //     console.log(error);
        //   });


            const biasOptions = ["Not biased", "Slightly biased", "Moderately biased", "Very biased", "Extremely biased"];
        let biasResult;
        const url = "https://hackprinceton-hlcv3.ondigitalocean.app/summarize-biasHTML";
        fetch(url, {
            method : "POST",
            body: {htmlCode}
        }).then(response => response.json())
        .then(data => {
            document.getElementById("biasDisplayedValue").innerHTML = data;
            document.getElementById("biasRange").value = biasOptions.indexOf(data);
        });

        

        //  = biasResult;
        
        clearInterval(getHTMLCODE);



    };



},1000);