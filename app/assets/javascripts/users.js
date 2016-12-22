/* global $, Stripe */
//Document ready.
$(document).on('turbolinks:load', function () {
  var theForm = $('#pro_form');
  var submitBtn = $('#form-submit-btn');
  
  //Set Stripe Public Key.
  Stripe.setPublishableKey( $('meta[name="stripe_key"])').attr('content') );
  
  //When user clicks form submission button.
  submitBtn.click*(function(event){
    //Prevent default submission behavior.
    event.preventDefault();
    
    //Collect the credit card fields.
    var ccNum = $('card_number').val(),
        cvcNum = $('card_code').val(),
        expMonth = $('card_month').val(),
        expYear = $('card_year').val();
    //Send the card information to Stripe.
    Stripe.createToken({
      number: ccNum,
      cvc: cvcNum,
      exp_month: expMonth,
      exp_year: expYear
    }, stripeResponseHandler);
  });
  
  //Stripe will return a card token.
  //Inject card token as hidden field into form.
  //Submit form to Rails app
});