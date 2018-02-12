// Empty js file. Please fill in as needed for your project.
$(document).ready(function() {

  
  // addition on click start
    $("#additionButton").on('click', function(){
        
        let additionObject = {

            value1: Number = $('inputOne').val(),
            value2: Number = $('inputTwo').val(),
            type: "add"

        }
        
    })//on click ends (add)
    
    // subtraction on click start
    $("#subtractionButton").on('click', function(){

        let subtractionObject = {
            
            value1: $('inputOne').val(),
            value2: $('inputTwo').val(),
            type: "subtract"        }



    }) // on click ends (sub) 
    
    // multiplacation on click start
    $("#multiplacationButton").on('click', function(){

        let multiplyObject = {

            value1: $('inputOne').val(),
            value2: $('inputTwo').val(),
            type: "multiply"
        }


    })// on click ends (multiply)
    
    //divison on click start
    $("#divisionButton").on('click', function(){

        let divideObject = {

            value1: $('inputOne').val(),
            value2: $('inputTwo').val(),
            type: "divide"
        }

    }// On click ends (div)



);})