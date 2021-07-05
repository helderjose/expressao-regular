#!/bin/bash
clear



# Delete node_modules folders
AUX=true
while [ "$AUX" = "true" ]
do
    FOLDER_DELETE=$(find . -type d -name "node_modules" | head -n 1 | xargs)

    if [ $FOLDER_DELETE ]
    then
        echo $FOLDER_DELETE
        rm -rf $FOLDER_DELETE
    else
        AUX=false
    fi

done

