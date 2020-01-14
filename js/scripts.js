$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#user").prepend("<li>Meow!</li>");
    $("ul#user").after("<img src='img/meow.gif'</img>")
    $("ul#webpage").prepend("<li>Woof!</li>");
    $("ul#webpage").after("<img src='img/woof.jpg'</img>")
    $("ul#user").children("li").first().click(function() {
      alert('hi');
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      alert('hi');
      $(this).remove();
    });
  });

  $("button#woof").click(function() {
    $("ul#user").prepend("<li>Woof!</li>");
    $("ul#user").after("<img src='img/woof.jpg'</img>")
    $("ul#webpage").prepend("<li>Meow!!</li>");
    $("ul#webpage").after("<img src='img/meow.gif'</img>")
  });

  $("button#feed").click(function() {
    $("ul#user").prepend("<li>MEOW WOOF!</li>");
    $("ul#user").after("<img src='img/feed.jpg'</img>")
    $("ul#webpage").prepend("<li>It's not dinner time...</li>");
  });
});