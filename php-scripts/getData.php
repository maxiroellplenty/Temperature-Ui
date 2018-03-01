<?php
 	/* header("Access-Control-Allow-Origin: *");
     $con=mysqli_connect("localhost","root","","temperature");
     $sql="SELECT * FROM data";
     $sth = mysqli_query($con,$sql);
     $rows = array();
     while($r = mysqli_fetch_assoc($sth)) {
         $rows[] = $r;
     }
     mysqli_close($con);
     echo json_encode($rows); */
?>
<?php
 	header("Access-Control-Allow-Origin: *");
     $con= mysqli_connect("10.81.10.234","root","abcD123","Lernfeld6");
     $sql= "SELECT * FROM Messort";
     $sth= mysqli_query($con,$sql);
     $rows= array();
     while($r= mysqli_fetch_assoc($sth)) 
     {
         $rows[]= $r;
     }
     mysqli_close($con);
     echo json_encode($rows);
?>