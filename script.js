var db = firebase.firestore()

let deskData = {    
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
};

function loadData() {
    document.getElementById('cubicle-boxes').innerHTML = '';
    for(let index in deskData){
        const x = document.createElement('div');
        x.classList.add('cubicle-box');
        const y = document.createElement('h1');
        y.appendChild(document.createTextNode(`Desk${index}`));
        x.appendChild(y);
        if(deskData[index]){
            x.style.backgroundColor = 'green';
        }
        document.getElementById('cubicle-boxes').appendChild(x);
    }
}


//listeners for the desks availability changes

db.collection("desks").doc("0")
    .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data());
        deskData['0'] = doc.data().availability;
        loadData();
    });
    
db.collection("desks").doc("1")
    .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data());
        deskData['1'] = doc.data().availability;
        loadData();
    });
    
db.collection("desks").doc("2")
    .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data());
        deskData['2'] = doc.data().availability;
        loadData();
    });
    
db.collection("desks").doc("3")
    .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data());
        deskData['3'] = doc.data().availability;
        loadData();
    });
    
db.collection("desks").doc("4")
    .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data());
        deskData['4'] = doc.data().availability;
        loadData();
    });
    
db.collection("desks").doc("5")
    .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data());
        deskData['5'] = doc.data().availability;
        loadData();
    });
    
db.collection("desks").doc("6")
    .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data());
        deskData['6'] = doc.data().availability;
        loadData();
    });
    

loadData();
