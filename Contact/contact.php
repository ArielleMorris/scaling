<?php


    // $firstName = filter_input($INPUT_POST, 'firstName');
    // $lastName = filter_input($INPUT_POST, 'lastName');
    // $message = filter_input($INPUT_POST, 'message');
    // $email = filter_input($INPUT_POST, 'email');
    // $number = filter_input($INPUT_POST, 'number');
    require_once('lib/class.phpmailer.php');

    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $message = $_POST['message'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $budget = $_POST['budget'];



    $mail  = new PHPMailer(); // defaults to using php "mail()"
    $mail->isHTML();


    $mail->AddReplyTo("info@alreadyhappening.online","Contact Form");

    $mail->SetFrom('info@alreadyhappening.online', 'Contact Form');

    $mail->AddReplyTo("info@alreadyhappening.online","Contact Form");

    $mail->AddAddress("chrislala96@gmail.com");
    // $mail->AddAddress("chrislala96@gmail.com");




    $mail->Subject    = "Incoming Message";



    $mail->Body = '
    First Name: '.$firstName.'
    <br>
    Last Name: '.$lastName.'
    <br>
    Email: '.$email.'
    <br>
    Phone Number: '.$number.'
    <br>
    Budget: '.$budget.'
    <br>
    Description: '.$message.'
    <br>
    ';

      
    if(!$mail->Send()) {

        
      echo "Mailer Error: " . $mail->ErrorInfo;
    

    } else {
            
      echo "done";
    
    }




    // if (!empty($firstName) || !empty($lastName) || !empty($message) 
    // || !empty($email) || !empty($number)) {
    // $servername = "localhost";
    // $database = "mydatabase";
    // $username = "ariellemorris";
    // $password = "Naruto1#";
    // // Create connection
    // $conn = mysqli_connect($servername, $username, $password, $database);
    // // Check connection
    // if (!$conn) {
    //     die("Connection failed: " . mysqli_connect_error());
    // }
    // echo "Connected successfully";
    // mysqli_close($conn);
       
    // }



    

    

    


    
   
      

    
        
 

     
    
  

   

    


?>