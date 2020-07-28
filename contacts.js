var contacts = [];
var saved    = localStorage.getItem("contacts");

if(saved){
    contacts = JSON.parse(saved);
    loadContacts();
}

function add(){
    var name   = document.querySelector("#name");
    var number = document.querySelector("#number");

    if(name.value === "" || number.value === ""){
        alert("Favor digitar um valor");
        return false;
    }

    var contact = {
        name:   name.value,
        number: number.value
    }

    contacts.push(contact);
    saveContacts();
    loadContacts();

    name.value   = "";
    number.value = "";
}

function loadContacts(){
    var list = document.querySelector(".list ul");
    list.innerHTML = "";

    contacts.sort(function(a, b){
        if(a.name < b.name) {
            return -1;
        } else {
            return 0;
        }
    })
    
    for(contact of contacts){
        var li   = document.createElement("li");

        li.innerHTML = `<strong>${contact.name}</strong>${contact.number}`;

        list.append(li);
    }
}

function saveContacts(){
    localStorage.setItem("contacts", JSON.stringify(contacts));
}

document.querySelector(".add button").onclick = add;