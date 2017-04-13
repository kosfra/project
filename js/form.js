$(function() {
    $(':submit').click(sendForm);
});

function sendForm(e) {
  var form = document.querySelector('form');
  if (form.checkValidity()) {
        e.preventDefault();
        $.ajax({
                url: "https://formspree.io/kosfrancuz@gmail.com",
                method: "POST",
                data: {
                    name: $('#client_name').val(),
                    mob: $('#client_phone').val(),
                    email: $('#client_email').val(),
                    client_proposals: $('client_proposals').val(),

                },
                dataType: "json"
            })
            .done(function() {
                $('form').html("Thx you");
            });
    }
}