// Wait till the DOM is reddy.
$(function () {
  var roles = ["Student", "VITian","Gamer"];
  var count=0;
  setInterval(() => {
      $("#intro .content h2 span").text(roles[count++ % roles.length])
       }, 1000);
});