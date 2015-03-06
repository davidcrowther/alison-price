$(document).ready(function(){  
    
    $(".page-header").anystretch('img/top-header.jpg');
    $(".naturmort-1").anystretch('img/naturmort-1.jpg');
    $(".naturmort-3").anystretch('img/naturmort-3.jpg');
    $(".expectations").anystretch('img/naturmort-2.jpg'); 
    

   	$('form.signup-1').validate({
	    rules: {
  	      email: {
	      	minlength: 2,
	        required: true,
	        email: true
	      }  
	    },
	    highlight: function(label) {
	    	$(label).closest('.form-control').addClass('has-error');
	    },
	    success: function(label) {
	    	$(label).text('OK!').addClass('valid').closest('.form-control').addClass('has-success');

	    }, 
	    messages: { 
	     email: {
	       email: "Your email address must be in the format of 'email@yourdomain.com'"
	      }
	    }
    });

   	$('form.signup-2').validate({
	    rules: {
  	      email: {
	      	minlength: 2,
	        required: true,
	        email: true
	      }  
	    },
	    highlight: function(label) {
	    	$(label).closest('.form-control').addClass('has-error');
	    },
	    success: function(label) {
	    	$(label).text('OK!').addClass('valid').closest('.form-control').addClass('has-success');

	    }, 
	    messages: { 
	     email: {
	       email: "Your email address must be in the format of 'email@yourdomain.com'"
	      }
	    }
    });

  
});