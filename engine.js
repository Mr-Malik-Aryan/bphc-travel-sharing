function formdata() {
  console.log("working");
  var name = document.getElementById("name").value;
  var destination = document.getElementById("destination").value;
  var date = document.getElementById("date").value;

  var phone = document.getElementById("phone").value;
  var timeh = document.getElementById("timeh").value;
  var timem = document.getElementById("timem").value;

  var str =
    name +
    " " +
    destination +
    " " +
    date +
    " " +
    phone +
    " " +
    timeh +
    ":" +
    timem;

  var str =
    name +
    " " +
    destination +
    " " +
    date +
    " " +
    phone +
    " " +
    timeh +
    ":" +
    timem;
  window.localStorage.setItem(phone, str);
  window.href.replace;
  //  document.getElementById('cards').innerHTML=str;

  //       function insertRows() {
  //         console.log("rows");
  //     var datatable = document.getElementById("datatable");
  //     var numOfBookings = window.localStorage.length;
  //     for (var i = 0; i < numOfBookings; i++) {
  //         var bookingData = window.localStorage[i];
  //         insertRow(i, datatable, bookingData);
  //     }
  // }
  //  function insertRow(i, datatable, bookingData) {
  //  var row = datatable.insertRow(i);
  // //0
  //  var dateval = row.insertCell(0);
  //  dateval.innerText = bookingData.date;
  //  //1
  //  var timingsval = row.insertCell(1);
  // timingsval.innerText = bookingData.timeh + ":" + bookingData.timem;
  // //2
  //  var destinationval = row.insertCell(2);
  // destinationval.innerText = bookingData.destination;    //3
  // var statusval = row.insertCell(3);
  //  statusval.innerText = "ok";
  //  //4
  //  var linksval = row.insertCell(4);
  //  linksval.innerText = "http://www.google.com";
  //   insertRows();
}
