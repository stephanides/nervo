<?php
require_once "Mail.php";
$name = "";
if(isset($_POST['name'])){
    $name = $_POST['name'];
}
$email = "";
if(isset($_POST['email'])){
    $email = $_POST['email'];
}
$message = "";
if(isset($_POST['message'])){
    $message = $_POST['message'];
}
$host = "";
$port = ; 
$username = "tif@nervo.cz";
$password = "";
$to = "Me <tif@nervo.cz>";

$subject = "";
if(isset($_POST['subject'])){
    $subject = $_POST['subject'];
}
$body = "Od: $name <br> Email: $email <br> Sprava: $message";

$headers = array ('From' => $email,
'To' => $to,
'Subject' => $subject,
'Content-Type'  => 'text/html; charset=UTF-8');
$smtp = Mail::factory('smtp',
array ('host' => $host,
'port' => $port, 
'auth' => true,
'username' => $username,
'password' => $password));

$mail = $smtp->send($to, $headers, $body);

if (PEAR::isError($mail)) {
          echo("<p>" . $mail->getMessage() . "</p>"); 
} 
else {
          echo("<p>Message successfully sent!</p>");
} 
?>