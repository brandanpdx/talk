$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#user").prepend("<li>Meow!</li>");
    $("ul#webpage").prepend("<li>Woof!</li>");
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
    $("ul#webpage").prepend("<li>Meow!!</li>");
  });

  $("button#feed").click(function() {
    $("ul#user").prepend("<li>MEOW WOOF!</li>");
    $("ul#webpage").prepend("<li>It's not dinner time...</li>");
  });
});