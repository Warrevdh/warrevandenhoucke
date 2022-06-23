<?php  
 
if(isset($_POST['submit'])) {
 $mailto = "warrevandenhoucke@hotmail.com";  //My email address
 //getting customer data
 $name = $_POST['name']; //getting customer name
 $fromEmail = $_POST['email']; //getting customer email
 $subject = "Contact form"; //getting subject line from client
 $subject2 = "Confirmation: Message was submitted successfully"; // For customer confirmation
 
 //Email body I will receive
 $message = "Name: " . $name . "\n"
 . "Message: " . "\n" . $_POST['message'];
 
 //Message for client confirmation
 $message2 = "Dear" . $name . "\n"
 . "Thank you for contacting me. We will get back to you shortly!" . "\n\n"
 . "You submitted the following message: " . "\n" . $_POST['message'] . "\n\n"
 . "Regards," . "\n";
 
 //PHP mailer function
 
  mail($mailto, $subject, $message); // This email sent to My address
  mail($fromEmail, $subject2, $message2); //This confirmation email to client
}

?>