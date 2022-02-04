<?php


    $firstname = $_POST['first_name'];
    $lastname = $_POST['last_name'];
    $message = $_POST['message'];
    $email = $_POST['mail'];
    $phonenum = $_POST['phone'];


        $email_from = 'UXPROS';
        $email_subject = 'New message from potential client'
        $email_body = 
        "Name: $first_name. $last_name. \n". "Email: $mail. \n". "Message: $message. \n". "Phone Number: $phone. \n";


    $email_to = "7.morrisarielle@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .="Reply-To: $email \r\n";

    mail($email_to, $email_subject, $email_body, $headers)

    header("location: contact-form-success.html");
  



?>