function ajaxRequest()
{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            document.getElementById('dataUpdate').innerHTML = this.responseText;
            console.log(this.responseText);
        }

    };

//    xhttp.open("GET", "data.txt", true);

    xhttp.open("GET", "script.php", true);

    xhttp.send();


}

document.getElementById('actionUpdate').addEventListener('click', ajaxRequest);
