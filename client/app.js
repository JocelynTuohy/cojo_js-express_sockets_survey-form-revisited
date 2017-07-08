$(document).ready(() => {
  console.log('jQuery?');
  const socket = io.connect();

  $('button').click(() => {
    let form_data = {
      name: $('#name').val(),
      location: $('#location').val(),
      language: $('#language').val(),
      comment: $('#comment').val()
    }
    socket.emit('submit', form_data);
  });

  socket.on('display', (data) => {
    $("#form_display").html(
      `<p>You emitted the following information to the server: ` +
      `${data}</p>`
    )
  });

  socket.on('number', (number) => {
    // console.log('are we here yet?')
    $("#lucky_number").html(`<p>Your lucky number emitted by the server is` +
      ` ${number}.`);
  });

});