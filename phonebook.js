document.getElementById("btnSave").onclick = function() {
    lastName = document.getElementById("ln").value;
    firstName = document.getElementById("fn").value;
    phoneNumber = document.getElementById("phone").value;

    //alert(lastName + firstName + phoneNumber);
    table = document.getElementById("mytable");
    tr = document.createElement("tr");
    td1 = document.createElement("td");
    td2 = document.createElement("td");
    td3 = document.createElement("td");
    td1.innerText = lastName;
    td2.innerText = firstName;
    td3.innerText = phoneNumber;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    /*
    // without creating TD... 
    tr.innerHTML = "<td>" + lastName + " </td>";
    tr.innerHTML += "<td>" + firstName + " </td>";
    tr.innerHTML += "<td>" + phoneNumber + " </td>";
    */
    table.appendChild(tr);
}