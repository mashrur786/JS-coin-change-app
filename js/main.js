    //on form submit
    document.getElementById("amountForm").onsubmit = function() {

        //prevent from submission
        event.preventDefault();
        //declare coins object to keep the count of number of specified coins
        var coins ={};
        //get the enter amount
        var amount = document.getElementById("amount").value;
        var element = document.getElementById('error');
        element.innerHTML = '';

        //validate the amount
        if(isValidInput(amount)){
            //remove non-digits form the string
            amount = prepareAmount(amount);

            coins.twoPounds = ~~(amount / 200);
            amount = amount - (coins.twoPounds * 200);

            coins.onePounds = ~~(amount / 100);
            amount = amount - (coins.onePounds * 100);

            coins.fiftyPs = ~~(amount / 50);
            amount = amount - (coins.fiftyPs * 50);

            coins.twentyPs = ~~(amount / 20);
            amount = amount - (coins.twentyPs * 20);

            coins.tenPs = ~~(amount / 10);
            amount = amount - (coins.tenPs * 10);

            coins.fivePs = ~~(amount / 5);
            amount = amount - (coins.fivePs * 5);

            coins.twoPs = ~~(amount / 2);
            amount = amount - (coins.twoPs * 2);

            coins.onePs = ~~(amount / 1);
            amount = amount - coins.onePs;

            //loop through coins object and output the value of the key in the targeted element
            Object.keys(coins).forEach(function(key, index) {
               var el = document.getElementById('result-container').children[index].lastElementChild;
               el.innerHTML = coins[key];
            });


        } else {

            element.innerHTML = "Error! please enter a valid amount";
            console.log('amount is not valid:' + amount);
        }

 };

 function isValidInput(input){
        //check if input matches against the given pattern
        //var pattern = /^£?(([1-9]{1,3}(,\d{3})*(\.\d{2})?)|(0\.[1-9]\d)|(0\.0[1-9]))p?$/gi;
        return input.match(/^£?[0-9]+(\.[0-9]{1,3})?p?$/gi);
 }

 function prepareAmount(input){

     if( (input.indexOf('£') !== -1 ) && (input.indexOf('.') === -1 ) ) {
         input = parseFloat(input.replace(/\D/g,''));
         //console.log(input);
         return input*100;

     }
     return parseFloat(input.replace(/\D/g,''));
 }