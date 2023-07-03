$(document).ready(()  => {

  $('#phone').on('keydown', (e) => {
    if (!((e.key >= '0' && e.key <= '9') || e.key === 'Backspace' || e.key === 'Delete' || e.key === 'Tab' || e.key.includes('Arrow'))) {
      e.preventDefault();
    }
  });

  $('#name').on('keydown', (e) => {
    if (e.key === '.') {
      e.preventDefault();
    }
  });

  $('#reserve-button > button').click(() => {
    let name = $('#name');
    let address = $('#address');
    let phone = $('#phone');

    if (name.val() && address.val() && phone.val()) {
      $.ajax({
        type: 'post',
        url: 'mail.php',
        data: 'name=' + name.val() + '&address=' + address.val() + '&phone=' + phone.val(),
        success: () => {
          $('#popup').css('display', 'flex');
          $('#reserve-error').hide();
          setTimeout(() => {
            $('#popup').css('display', 'none');
          }, 3000);
        },
        error: () => {
          alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.');
        }
      });
    } else {
      $('#reserve-error').show();
    }
  });

  $('#burger').click(() => {
    $('#header').toggleClass('menu-open');
  });

  $('#header #menu a').click(() => {
    $('#header').removeClass('menu-open');
  });

});
