// Empty js file. Please fill in as needed for your project.
$(document).ready(function() {

    // const answer = {}
  
  // addition on click start
    $("#additionButton").on('click', function(){
        
        
        let data = [];

           data.inputOne = $('#inputOne').val();
           data.inputTwo = $('#inputTwo').val();
            type: "add"

            

        },
        
  
    
    // subtraction on click start
    $("#subtractionButton").on('click', function(){

        let data = [];

           data.inputOne = $('#inputOne').val();
           data.inputTwo = $('#inputTwo').val();
            type: "subtract"        
    },



    
    // multiplacation on click start
    $("#multiplacationButton").on('click', function(){

        let data = [];

           data.inputOne = $('#inputOne').val();
           data.inputTwo = $('#inputTwo').val();
            type: "multiply"
        },


    
    //divison on click start
    $("#divisionButton").on('click', function(){

        let data = [];

           data.inputOne = $('#inputOne').val();
           data.inputTwo = $('#inputTwo').val();
            type: "divide"
        

   

    $("#equalButton").on('click', function(){
        
        let data = {}
            data.inputOne = $('#inputOne').val();
            data.inputTwo = $('#inputTwo').val();
        })
        
   
}),


$.ajax({
    type: 'POST',
    url: '/calculator',
    data: data,
    success: function() {
        console.log('success');
        
    },
    error: function(){
        console.log('error');
        
    }
})
),))})