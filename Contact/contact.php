<?php


    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $message = $_POST['message'];
    $budget = $_POST['budget'];
    $email = $_POST['email'];
    $number = $_POST['number'];

    if (!empty($firstName) || !empty($lastName) || !empty($message) 
    || !empty($email) || !empty($number)) {
    $host = "localhost";
    $dbUsername = "	u307258664_ariellemorris";
    $dbPassword = "Naruto1#";
    $dbName = "u307258664_database_one";
    } else{
        echo "All fields are required";
        die();
    }
    


  



?>