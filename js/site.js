function decor_width(decoration_height){
    var decoration_width = decoration_height*4;
    return decoration_width
}
$('.decoration-30').css("width", decor_width(30) )
$('.decoration-60').css("width", decor_width(60) )
$('.decoration-90').css("width", decor_width(90))

var banner_decor_height = $('.decoration-90').height()
var banner_decor_width = banner_decor_height*4;
$('.decoration-90').css("width", banner_decor_width)

function removeOffset(){
    if (window.matchMedia('(max-width: 375px)').matches) {
        $(".col-img").removeClass("offset-2")
    }
}
removeOffset()