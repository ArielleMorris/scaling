<?php


    $firstName = filter_input($INPUT_POST, 'firstName');
    $lastName = filter_input($INPUT_POST, 'lastName');
    $message = filter_input($INPUT_POST, 'message');
    $email = filter_input($INPUT_POST, 'email');
    $number = filter_input($INPUT_POST, 'number');


    if (!empty($firstName) || !empty($lastName) || !empty($message) 
    || !empty($email) || !empty($number)) {
    $servername = "localhost";
    $database = "mydatabase";
    $username = "ariellemorris";
    $password = "Naruto1#";
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $database);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    echo "Connected successfully";
    mysqli_close($conn);
       
    }



    

    

    


    
   
      

    
        
 

     
    
  

   

    


?>