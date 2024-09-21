const stripe = Stripe('pk_test_51PyyUJ034wxKpBOisOLRhlOd4wTYqBexHAkk0bJN5GcPRKPd7LfrNJRy2q8R6hdNvrsk4zEPxytwoFLKGts1iIfl00awtMIY3N');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });