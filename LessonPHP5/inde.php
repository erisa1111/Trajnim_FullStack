<html>
    <head>
        <style>
            table{
                width:50%;
                border-collapse: collapse;
            }
            th,td{
                padding: 30px;
                text-align: left;
                border: 1px solid;
            }
            th{
                background-color: lightblue;
                font-weight: bold;
            }
        </style>
        <body>
            <table border ="1">
                <tr>
                    <th>Brand</th>
                    <th>Origin</th>
                    <th>Year</th>
                </tr>
        
        </body>
    </head>
</html>




<?php 
            $cars = array(
                array("BMW", "Germany", 2020),
                array("Mercedes", "Germany", 2020),
                array("Audi", "Germany", 2020),
            );

            echo $cars[0][0]. ": Origin " . $cars[0][1] .", Year " . $cars[0][2]. "<br>";
            echo $cars[1][0]. ": Origin " . $cars[1][1] .", Year " . $cars[1][2]. "<br>";
            echo $cars[2][0]. ": Origin " . $cars[2][1] .", Year " . $cars[2][2]. "<br>";

            // Correct the loop range to 3
            for($row = 0; $row < 3; $row++) {
                echo "<tr>"; // Correct the HTML tag
                for($col = 0; $col < 3; $col++) {
                    echo "<td>" . $cars[$row][$col] . "</td>";
                }
                echo "</tr>";
            }
            ?>
