<?php

session_start();

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$_SESSION['product'][] = array("nom" => $request->nom,
									  "description" => $request->description,
									  "prix" => $request->prix
									 )	;




echo json_encode($_SESSION['product']);