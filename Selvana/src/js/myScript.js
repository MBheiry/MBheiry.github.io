
// cover component
let $cover_next = $(".S-Icon-Arrow-cover-right"),
    $cover_back = $(".S-Icon-Arrow-cover-left"),
    $cover_firstItem = $(".currentImg:first-child"),
    $cover_tempLeft = 0,
    $cover_itemIndexLength = $('.currentImg').length - 1, 
    $cover_currentIndex = 0,
    $cover_currentWidth = $(window).width();
// ------------

// all gallery function here
var slideGallery = {
    "next": ()=> {

        if ( $cover_currentIndex < $cover_itemIndexLength ) {
            $cover_currentIndex ++;
            $cover_tempLeft = $cover_tempLeft + -$cover_currentWidth;
            $( $cover_firstItem ).animate({marginLeft: $cover_tempLeft}, 500);
        }
    },
    "back": ()=> {
        if ( $cover_currentIndex >= 1 && $cover_currentIndex !=0 ) {
            $cover_currentIndex --;
            $cover_tempLeft = $cover_tempLeft - -$cover_currentWidth;
            $( $cover_firstItem ).animate({marginLeft: $cover_tempLeft}, 500);
        }
    }
}
// -------------------------
// For Cover Slider
$( $cover_next ).on('click', function(){ slideGallery.next() });
$( $cover_back ).on('click', function(){ slideGallery.back() });
// -------------------------
// |||||||||||||||||||||||||||||||||||
// |||||||||||||||||||||||||||||||||||
// -------------------------





// programs component
let $pro_next = $(".S-Icon-Arrow-right"),
    $pro_back = $(".S-Icon-Arrow-left"),
    $pro_firstItem = $(".twoItem:first-child"),
    $pro_tempLeft = 0,
    $pro_itemIndexLength = $('.twoItem').length - 1, 
    $pro_currentIndex = 0,
    $pro_currentWidth = $('.howSlider .slideItem').width();
// ------------

// all gallery function here
var pro_slideGallery = {
    "next": ()=> {

        if ( $pro_currentIndex < $pro_itemIndexLength ) {
            $pro_currentIndex ++;
            $pro_tempLeft = $pro_tempLeft + -$pro_currentWidth;
            $( $pro_firstItem ).animate({marginLeft: $pro_tempLeft}, 500);
        }
    },
    "back": ()=> {
        if ( $pro_currentIndex >= 1 && $pro_currentIndex !=0 ) {
            $pro_currentIndex --;
            $pro_tempLeft = $pro_tempLeft - -$pro_currentWidth;
            $( $pro_firstItem ).animate({marginLeft: $pro_tempLeft}, 500);
        }
    },
}
// -------------------------
// For Cover Slider
$( $pro_next ).on('click', function(){ pro_slideGallery.next() });
$( $pro_back ).on('click', function(){ pro_slideGallery.back() });
// -------------------------
// |||||||||||||||||||||||||||||||||||
// |||||||||||||||||||||||||||||||||||
// -------------------------






// -----------------------------------------------------


// -----------------------------------------------------
$( window ).resize(function() { 
    $cover_currentWidth = $(window).width();
    $pro_currentWidth = $('.howSlider .slideItem').width();
});
// -----------------------------------------------------
// -----------------------------------------------------



// -----------------------------------------------------


// Mobile Menu icon
$('.MobIcon').on('click', function(){
	$('header nav').slideToggle();
})
// -----------------------------------------------------

// function _iconState(){
//     if ( $currentIndex == 0 ) {
//         $($next).addClass('active');
//         $($back).removeClass('active');
//     }
//     else if( $currentIndex !== 0 && $currentIndex !== $itemIndexLength ){
//         $($next).addClass('active');
//         $($back).addClass('active');
//     }
//     else if( $currentIndex !== 0 || $currentIndex == $itemIndexLength ){ 
//         $($next).removeClass('active');
//     }
// }
// // Run Icon check Stat, on js loading.
// _iconState();

// -----------------------------------------------------



