
// Title constructor function that creates a Title object
function Title(t1) {
    this.mytitle = t1;
}

Title.prototype.getName = function () {
    return this.mytitle;
};

var socialMedia = {
    facebook: 'http://facebook.com',
    twitter: 'http://twitter.com',
    flickr: 'http://flickr.com',
    youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

// H2 title
var nameAndId = "Vaishnavi Chundru - 002870813";

var heading = document.createElement("h2");
heading.style.textAlign = 'center';
heading.textContent = nameAndId;
var firstElement = document.body.firstChild;
document.body.insertBefore(heading, firstElement);

var t = new Title("CONNECT WITH ME!");
let checkBoxVal = document.querySelectorAll("input[type=checkbox]");
let tableData = document.querySelectorAll("#myTable tr");
let data_1 = tableData[1].cloneNode(true);
let data_2 = tableData[2].cloneNode(true);
var table = document.getElementById('myTable');
var headers = table.rows[0].cells.length;
function addRows(){
	var data =["<input type='checkbox' class='check' onclick='ColorChange(this)'/>"+"<br />"+"<img src='down.png' onclick='view_data(this)' width='25px'/>","Student 4","Teacher 4","Approved","Fall","TA","45678","100%"];
	var toggle_data = ["<tr class='dropDownTextArea'><td colspan='8'>"+
			"Advisor:<br /><br />"+
			"Award Details<br />"+
			"Summer 1-2014(TA)<br />"+
			"Budget Number: <br />"+
			"Tuition Number: <br />"+
			"Comments:<br /><br /><br />"+
			"Award Status:<br /><br /><br />"+
		"</td></tr>"]
	var table = document.getElementById("myTable");
    alert("A new student record is added successfully");
	for(var j=0;j<2;j++){
		var row = table.insertRow(table.rows.length);
		var rowId= (table.rows.length)-1;
		row.id = rowId; 
		if(rowId % 2 ==0){
			var col = row.insertCell(0);
			col.innerHTML = toggle_data;
			var view_details =document.getElementById(rowId);
			view_details.style.display = "none";
		} 
		else{
			for (var i = 0; i <headers; i++ ) {
				var col = row.insertCell(i);
				col.innerHTML=data[i];
			}
		}
	}
}

function ColorChange(element){
	var selected_element = element.closest('tr');
	var id = selected_element.getAttribute('id');
	if(selected_element.getElementsByTagName('input')[0].checked == true){
		if(table.rows[0].cells.length<=headers){
			var deleteColumn = table.rows[0].insertCell(-1);
			deleteColumn.innerHTML="DELETE".fontcolor("white");
			deleteColumn.style.fontWeight = "Bold";
			deleteColumn.style.backgroundColor="#a7c942";
			var editColumn = table.rows[0].insertCell(-1);
			editColumn.innerHTML="EDIT".fontcolor("white");
			editColumn.style.fontWeight = "Bold";
			editColumn.style.backgroundColor="#a7c942";
			
			
		}
		selected_element.style.backgroundColor = "Yellow";
		var col = selected_element.insertCell(-1);
		col.innerHTML = "<input type='button' class='btn' name='del_but' onclick='delete_data(this)' value='Delete'/>"
		var col = selected_element.insertCell(-1);
		col.innerHTML = "<input type='button' class='btn' name='edit_but' onclick='edit_data(this)' value='Edit'/>"
		submitbtn = document.getElementById('submitbtn');
		submitbtn.disabled = false;
		submitbtn.style.backgroundColor = "orange";
	}else if(selected_element.getElementsByTagName('input')[0].checked == false){
		selected_element.style.backgroundColor = "";
		selected_element.deleteCell(-1);
		selected_element.deleteCell(-1);
		removeDeleteColumn();
		removeEditColumn();
	}

}

function removeDeleteColumn(){
	var deleteBtn = document.getElementsByName("del_but");
	if(deleteBtn.length == 0){
		table.rows[0].deleteCell(-1);
		submitbtn.disabled = true;
		submitbtn.style.backgroundColor = "";

	}

}
function removeEditColumn(){
	var EditBtn = document.getElementsByName("edit_but");
	if(EditBtn.length == 0){
		table.rows[0].deleteCell(-1);
		submitbtn.disabled = true;
		submitbtn.style.backgroundColor = "";

	}

}


function delete_data(element){
	var delete_row = element.closest('tr');
	var id = delete_row.getAttribute('id');
	delete_row.parentNode.removeChild(delete_row);
	removeDeleteColumn();
	removeEditColumn()
	alert("A student record is deleted successfully");

}

function edit_data(element){
	var delete_row = element.closest('tr');
	var id = delete_row.getAttribute('id');
	removeEditColumn();
	removeDeleteColumn();
	alert("Please edit the details");

}


function view_data(selected_row){
	var row = selected_row.closest('tr');
	var id = row.getAttribute('id');
	var show_details = document.getElementById(parseInt(id)+1);
	if(show_details.style.display == "none"){
		show_details.style.display = "block";
	}else{
		show_details.style.display = "none";
	}
	
}