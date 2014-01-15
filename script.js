/* Exercise 1: Wish list */


$(document).ready(function() {
  
  $('#add-to-list').on('click', function(){
    var item = $('#item').val();
    addToList(item);
    
  })

  $('#item').on('keypress', function(event){
    if(event.keyCode == 13) {
      var item = $('#item').val();
      addToList(item);

    }
  })



})

function addToList(item) {
  $('#item').val("");
  var listItem = $('<li>'+ item + '<span class="label pending">Pending</span></li>');
  $('#items').append(listItem);
  $('#item').focus();
  updateTotals();
  var label = listItem.find('span');
  label.on('click', function(){
    $(this).replaceWith("<span class='label success'>Done!</span>");
    listItem.addClass('completed');
    updateTotals();
  })
  
}


function updateTotals() {
  
  var pending = $('.pending').length;
  var completed = $('.completed').length;
  $('.total').text("Pending: " + pending + " Completed: " + completed);

}

