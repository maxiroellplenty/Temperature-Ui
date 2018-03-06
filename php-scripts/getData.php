<?php
header("Access-Control-Allow-Origin: *");
$con = mysqli_connect("10.81.10.234", "root", "abcD123", "Lernfeld6");
$sql = "SELECT * FROM Messort
        LEFT JOIN Sensor ON Messort.ID = Sensor.ID_Messort
        LEFT JOIN Messwert ON Sensor.ID = Messwert.ID_Sensor
        LEFT JOIN Zeit ON Messwert.ID_Zeit = Zeit.ID";
$sth = mysqli_query($con, $sql);
$rows = array();
while ($r = mysqli_fetch_assoc($sth)) {
    $rows[] = $r;
}
mysqli_close($con);
echo json_encode($rows);
?>