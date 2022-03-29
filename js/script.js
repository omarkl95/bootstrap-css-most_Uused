// Make Div CLickable jquery
 $(".make-clickable").on("click",function(){
    window.location = $(this).find("a").attr("href");

 })
//  document.getElementById('clickable').addEventListener('click', clickDiv);

// function clickDiv() {
//     document.getElementById('clickable').innerHTML = "Clicked and Changed"; // Changes text inside div one time only when clicked
// }
//  make div clickable
// Change icon on click (toggle)
 $('#click_advance').click(function() {
    $('#display_advance').toggle('1000');
    $("i", this).toggleClass("fas fa-arrow-up fas fa-arrow-down");
});
