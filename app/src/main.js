const $ = require("jquery");
const { data, post } = require("jquery");

function getPagesList() {
   $("h3").remove();
   $.get("./api/api.php", (data) => {
      data.forEach(element => {
         $("body").append("<h3>" + element + "</h3>")
         // $("body").append('<input name="delete" type="submit" value="Delete Now!" >' + element)
         //onclick = "'.delfun(element).'"
      });
      console.log(data);

   }, "JSON");
}

getPagesList();

$("#but_new").click(() => {

   $.post("./api/createNewHTML.php", {
      "name": $('#new').val()
   }, (data) => {
      console.log(data, 'jnjn')
      getPagesList();
   })
      .fail(() => {
         alert("Такая страница уже существует");
      })
});
$("#but_del").click(() => {

   $.post("./api/delfileHTML.php", {
      "name": $('#del').val()
   }, (data) => {
      console.log(data, 'jnjn')
      getPagesList();
   })
      .fail(() => {
         alert("Такой страницы не существует!");
      })
});
// function delfun(element) {
//    unlink(element);
//    console.log(element);
// };
// $('input[type="submit"]').on('click', () => {
//    $.post("./api/delfileHTML.php", {
//       // "name": data[1].val()

//    }, (data) => {
//       console.log(data)
//       getPagesList();
//    })
//       .fail(() => {
//          alert("Такая");
//       })
// });
