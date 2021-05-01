<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$comment = $_POST['comments'];
$token = "1647204682:AAGQB_tBPZ53BRKFjpLBZ3cErqXiPuLdJ3I";
$chat_id = "-520362739";

$arr = array(
	'Имя пользователя: ' => $name,
	'Телефон: ' => $phone,
	'Комментарий: ' => $comment
);

foreach ($arr as $key => $value) {
	$txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('location: index.html');
} else {
  echo "Error";
}

?>
