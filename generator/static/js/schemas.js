$(document).ready(function() {

    $('#selectAll').click(function() {
        selectAll();
     });

      $('#expandAll').click(function() {
        expandAll();
     });
});

function selectAll(){

    if(!$('#expandAll').hasClass('expanded')){
        expandAll();
    }


    $('#data-items .content input[type=checkbox]').each(function(){
        $(this).prop('checked', true)

    });
}

function expandAll(){
    var coll = document.getElementsByClassName("collapsible");

    $('#expandAll').toggleClass("expanded");

    for (var c = 0; c < coll.length; c++) {
        coll[c].classList.toggle("active");
        var content = coll[c].nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
    }


    if($('#expandAll').hasClass('expanded')){
      $('#expandAll').empty().text("Collapse all sections");
    }
    else{
      $('#expandAll').empty().text("Expand all sections");
    }



//     $('#data-items .collapsible').each(function(){
//        $(this).classList.toggle("active");
//        var content = $(this).nextElementSibling;
//        if (content.style.maxHeight){
//          content.style.maxHeight = null;
//        } else {
//          content.style.maxHeight = content.scrollHeight + "px";
//        }
//    })
}