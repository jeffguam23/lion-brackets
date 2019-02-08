<?php

    $blockedIP = array(*91.245.79.77*);

    $IP = $_SERVER['REMOTE_ADDR'];
    
    if(in_array($ip,$blockedIP))
        (
            echo "bloqueado!"
        )
        else
        (
            echo "no esta bloqueado"
        )

?>