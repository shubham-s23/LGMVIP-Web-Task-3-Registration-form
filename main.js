function onformSubmit() {

    var formData = readFormData();
    insertNew(formData);
    resetF();

}

function readFormData() {
    var formData = {};

    formData["fname"] = document.getElementById("fname").value;

    formData["femail"] = document.getElementById("femail").value;

    formData["fcourse"] = document.getElementById("fcourse").value;

    formData["gender"] = document.getElementById("gender").value;

    return formData;
}

function insertNew(data){
    var table = document.getElementById("ulist").getElementsByTagName('tbody')[0];

    var newRow = table.insertRow(table.length);

    cel1 = newRow.insertCell(0);
    cel1.innerHTML = data.fname;

    cel1 = newRow.insertCell(1);
    cel1.innerHTML = data.femail;

    cel1 = newRow.insertCell(2);
    cel1.innerHTML = data.fcourse;

    cel1 = newRow.insertCell(3);
    cel1.innerHTML = data.gender;

}
function resetF(){
    document.getElementById("fname").value="";
    document.getElementById("femail").value="";
    document.getElementById("fcourse").value="";
    document.getElementById("gender").value="";
}