$(document).ready(function() {
  $('#ele1').mouseover(function () {
    $('.women').hide();
    $('.kids').hide();
    $('.men').fadeIn();
    })
  $('.men').mouseleave(function () {
    $('.men').hide();
  })
  $('#ele2').mouseover(function () {
    $('.men').hide();
    $('.kids').hide();
    $('.women').show();
    })
  $('.women').mouseleave(function () {
    $('.women').hide();
  })
  $('#ele3').mouseover(function () {
    $('.men').hide();
    $('.women').hide();
    $('.kids').show()
    })
  $('.kids').mouseleave(function () {
    $('.kids').hide();
  })
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  })

  $('#output').keypress(function () {
    getin.value=input.value;
    getout.value=output.value;
  })

  $('#r1').click(function () {
    $('#r1').css({"opacity":"0.7"});
    $('#b1').css({"opacity":"1.0"});
    $('#a').attr("src", "red.jfif");
  })
  $('#b1').click(function () {
    $('#b1').css({"opacity":"0.7"});
    $('#r1').css({"opacity":"1.0"});
    $('#a').attr("src", "black.jfif");
  })
  $('#r2').click(function () {
    $('#r2').css({"opacity":"0.7"});
    $('#b2').css({"opacity":"1.0"});
    $('#b').attr("src", "red.jfif");
  })
  $('#b2').click(function () {
    $('#b2').css({"opacity":"0.7"});
    $('#r2').css({"opacity":"1.0"});
    $('#b').attr("src", "black.jfif");
  })
  $('#r3').click(function () {
    $('#r3').css({"opacity":"0.7"});
    $('#b3').css({"opacity":"1.0"});
    $('#c').attr("src", "red.jfif");
  })
  $('#b3').click(function () {
    $('#b3').css({"opacity":"0.7"});
    $('#r3').css({"opacity":"1.0"});
    $('#c').attr("src", "black.jfif");
  })
  $('#r4').click(function () {
    $('#r4').css({"opacity":"0.7"});
    $('#b4').css({"opacity":"1.0"});
    $('#d').attr("src", "red.jfif");
  })
  $('#b4').click(function () {
    $('#b4').css({"opacity":"0.7"});
    $('#r4').css({"opacity":"1.0"});
    $('#d').attr("src", "black.jfif");
  })

})
