<?php

/*
    $firstName = ($_POST, 'firstName');
    $lastName = ($INPUT_POST, 'lastName');
    $message = filter_input($INPUT_POST, 'message');
    $email = filter_input($INPUT_POST, 'email');
    $number = filter_input($INPUT_POST, 'number');


    if (!empty($firstName) || !empty($lastName) || !empty($message) 
    || !empty($email) || !empty($number)) {
        $host = "localhost";
        $dbUsername = "	u307258664_ariellemorris";
        $dbName = "u307258664_mydatabase";

        //create connection
        $conn = new mysqli($host, $dbUsername, $dbName);
        if(mysqli_connect_error()){
            die('Connect Error ('. mysqli_connect_error() . ')'
            . mysqli_connection_error());
        }
        else{
            $sql = "INSERT INTO contact (firstName, lastName, message, number, email) values ('$firstName', '$lastName', '$message', '$email', '$number')";
            if($conn->query($sql)){
                echo "New connection successful";
        }
    }



    }

    */


    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $message = $_POST['message'];
    $formcontent = "From: $name \n Message: $message";
    $recipient = "7.morrisarielle@gmail.com";
    $subject = "Contact Form";
    $mailheader = "From: $email \r\n";
    mail($recipient, $subject, $formcontent, $mailheader) or die("Error");
    echo "Thank you";



    
   
      

    
        
 

     
    
  

   

    


?>