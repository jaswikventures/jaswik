<?php 

if(isset($_POST['submit'])) {
    $mailto = "sales@jaswikventures.in";

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $fromEmail = $_POST['email'];
    $subject = "New Enquiry from Company Website";
    $subject2 = "Confirmation: Message was submitted successfully | Jaswik Ventures"
    
    $message = 'Customer Name: ' . $name . "\n" . 
               "Phone Number: " . $phone . "\n" . 
               "Email: " . $fromEmail . "\n\n" . 
               "Requirement: " . $_POST['message'];

    $message2 = "Dear Mr." . $name ."\n" . 
                "Thank you for contacting us. We will get back to you" . "\n\n" . 
                "You submitted the following message: " . "\n" . $_POST['message'] . "\n\n" . 
                "Regards," . "\n" . "Sales Team" . "\n" ."Jaswik Ventures";

    $headers = "From: " . $fromEmail;
    $headers2 = "From: " . $mailto;

    //PHP mailer function

    $result1 = mail($mailto, $subject, $message, $headers);
    $result2 = mail($fromEmail, $subject2, $message2, $headers2);

    if($result1 && $result2) {
        $success = "Your Message was sent successfully!";
    } else {
        $failed = "Sorry! Message was not sent, Try again Later.";
    }
}

?>