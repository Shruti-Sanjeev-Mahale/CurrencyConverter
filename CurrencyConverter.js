let api="https://v6.exchangerate-api.com/v6/3792acd56caaef8dec7fd03e/latest/USD";
	let fromCurrencyDropdown=document.getElementById("from-currency");
	let toCurrencyDropdown=document.getElementById("to-currency");
	let op=document.getElementById("op");
    op.innerHTML="output";
    let currencyArr=["AED","EUR","INR","LKR","PKR","USD"];

    currencyArr.forEach((currency)=>{
    	let option = document.createElement("option");
    	option.value=currency;
    	option.innerHTML=currency;
    	fromCurrencyDropdown.appendChild(option);
    })

    currencyArr.forEach((currency)=>{
    	let option = document.createElement("option");
    	option.value=currency;
    	option.innerHTML=currency;
    	toCurrencyDropdown.appendChild(option);
    })

    fromCurrencyDropdown.value="INR";
    toCurrencyDropdown.value="USD";
    

    function convertCurrency() {
    	
    	fetch(api)
    	.then(response=>response.json())
    	.then(data=>{
    		let fromCurr=document.getElementById("from-currency").value;
    		let toCurr=document.getElementById("to-currency").value;
    		let fromCurrencyRate=data.conversion_rates[fromCurr];
    		let toCurrencyRate=data.conversion_rates[toCurr];
            let amount=document.getElementById("amount").value;
            if (amount!=" ") {
            	let convertedAmount=(amount/fromCurrencyRate)*toCurrencyRate;
            	op.innerHTML=`${amount} ${fromCurr}=${convertedAmount.toFixed(2)} ${toCurr}`
            } else {
            	alert("Enter an amount");
            }
    	})
    }



