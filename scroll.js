$(document).on('scroll', function() {
  
//   pixel variable
  var pixelsFromTop = $(document).scrollTop()
//   progress text
  $('.progress').text(pixelsFromTop + ' pixels down')
  
//   hide header on scroll
  if (pixelsFromTop > 50) {
      $('header').addClass('hidden')
      } else {
        $('header').removeClass('hidden')
      }
  
//   bg change
  if (pixelsFromTop < 600) {
    $('body').css('background-color', '#ffffff')
  }
  
  if (pixelsFromTop > 600) {
    $('body').css('background-color', '#a29c97')
  }
  
  if (pixelsFromTop > 1400) {
    $('body').css('background-color', '#d9dfe4')
  }
  
  if (pixelsFromTop > 2200) {
    $('body').css('background-color', '#fff0f0')
  }
  
  if (pixelsFromTop > 3000) {
    $('body').css('background-color', '#cdccc7')
  }
  
//   progress bar
var documentHeight = $(document).height()
var windowHeight = $(window).height()
var differenceHeight = documentHeight - windowHeight
var percentage = 100 * pixelsFromTop / differenceHeight

$('.bar').css('width', percentage + '%')

})

