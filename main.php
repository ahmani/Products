<?php
session_start();

//unset($_SESSION['product']);
header('Content-Type: application/json');

if($_GET['action'] == "all")
{
	$object = array(array(
	"nom" => "product 1",
	"description" => "mon produit 1",
	"prix" => "14.55€"
	),
	array(
	"nom" => "product 2",
	"description" => "mon produit 2",
	"prix" => "20.99€"
	),
	array(
	"nom" => "product 3",
	"description" => "mon produit 3",
	"prix" => "33.55€"
	)
	);
	

echo json_encode($object);

}
if ($_GET['action']  == 'card') {
echo json_encode($_SESSION['product']);	
}

if($_GET['action'] == 'validation')
{
sleep(4);
echo json_encode("OK");
}

