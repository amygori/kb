$(document).ready(removeFlash);
function removeFlash(){
  setTimeout(() => {

    $('#home-page-flash').fadeOut(300, function (){
      this.remove();
    });
  }, 4000);
}