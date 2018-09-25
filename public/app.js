$(function() {
  $('#more').on('click', function(event) {
    event.preventDefault();

    const task = {
      newTask: $('#new-task').val().trim()
    };
  });

  $.ajax({url: '/list', method: 'POST', data: list}).then(function(data) {

  })
  $('#new-task').val('');
  $('#new-task').focus();

})

function listRender() {
  $('#content').click(function (e) {
    e.preventDefault();
    console.log(e.target.id);
  })
}