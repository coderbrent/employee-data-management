var config = {
    apiKey: "AIzaSyA4eYx0HQpUftXEvZSI3pVrv8CFu_morBQ",
    authDomain: "yvelstlaurent.firebaseapp.com",
    databaseURL: "https://yvelstlaurent.firebaseio.com",
    projectId: "yvelstlaurent",
    storageBucket: "yvelstlaurent.appspot.com",
    messagingSenderId: "97071970787"
  };

firebase.initializeApp(config);

var employeeName = "";
var employeeRole = "";
var employeeStartDate;
var employeeMonthlyRate;
var totalBilled;

var database = firebase.database();


$(".submit").on("click", function() {
    employeeName = $("data-name").val().trim();
    $("<tr>").appendTo("#employee-view");

    database.ref().push({
        empName: employeeName,
        empRole: employeeRole,
        empStart: employeeStartDate,
        empMonthRate: employeeMonthlyRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    })
})

dataRef.ref().on("child_added", function(childSnapshot) {

    console.log(childSnapshot.val().empName);

}, function(errorObject) {

    console.log("Errors handled: " + errorObject.code);

});

