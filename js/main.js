// Ограничиваем ввод в инпуты (в добавлении контакта) - фамилия/имя без цифр, телефон - только цифры
  $('input[name=name]').on( 'keypress', function(e) {
    if (e.keyCode > 48 && e.keyCode < 57) {
        e.preventDefault();
    }
  });

  $('input[name=surname]').on( 'keypress', function(e) {
    if (e.keyCode > 48 && e.keyCode < 57) {
        e.preventDefault();
    }
  });

  $('input[name=phone]').on( 'keypress', function(e) {
    if (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) {
        e.preventDefault();
    }
  });

// событие нажатия на кнпку "Сохранить контакт"
  $('.add-contacts__button').click(function(e) {
    name = $('input[name=name]').val(); //данные из инпута Имя
    surname = $('input[name=surname]').val(); //данные из инпута Фамилия
    tel = $('input[name=phone]').val(); //данные из инпута Телефон
    numberUl = ($('ul').length - 1); //кол-во списков ul (чтобы повесить id на новые ul), один вычтен ибо есть ul-шапка таблицы, его не учитываем
    if(name == '') { //если первый инпут пустой - подсвечиваем красным, остальные делаем цветом по умолчанию (на случай если ранее их сделали красным)
      $('input[name=name]').css('border-color', 'red');
      $('input[name=surname]').css('border-color', 'initial');
      $('input[name=phone]').css('border-color', 'initial');
    }
    else if(surname == '') { //если второй инпут пустой - подсвечиваем красным, остальные делаем цветом по умолчанию (на случай если ранее их сделали красным)
      $('input[name=name]').css('border-color', 'initial');
      $('input[name=surname]').css('border-color', 'red');
      $('input[name=phone]').css('border-color', 'initial');
    }
    else if(tel == '') { //если третий инпут пустой - подсвечиваем красным, остальные делаем цветом по умолчанию (на случай если ранее их сделали красным)
      $('input[name=name]').css('border-color', 'initial');
      $('input[name=surname]').css('border-color', 'initial');
      $('input[name=phone]').css('border-color', 'red');
    }
    else { //если все инпуты заполнены - добавляем новый контакт
      initials = $('input[name=name]').val()[0] + $('input[name=surname]').val()[0]; //эта переменная берет первые буквы имени и фамилии (для добавления иконки перед карточкой контакта)
      $('.contacts-book__saved-contacts').append('<div class="saved-contacts__item saved-contacts__id-' + numberUl + '"><span class="id-' + numberUl + '__icon saved-contacts__icon">' + initials + '</span><ul class="saved-contacts__id-' + numberUl + '"><li>' + name + '</li><li>' + surname + '</li><li><a href="tel:' + tel + '">' + tel + '</a></li></ul><button class="saved-contacts__delete id-' + numberUl + '__delete-contact">Удалить</button></div>'); //добавляем карточку контакта, которая содержит иконку, имя-фамилию-телефон и кнопку "удалить"
      $('input[name=name]').val(''); //сбрасываем значение инпута
      $('input[name=surname]').val(''); //сбрасываем значение инпута
      $('input[name=phone]').val(''); //сбрасываем значение инпута
      $('input[name=name]').css('border-color', 'initial'); //сбрасываем рамку (на случай если была красной)
      $('input[name=surname]').css('border-color', 'initial'); //сбрасываем рамку (на случай если была красной)
      $('input[name=phone]').css('border-color', 'initial'); //сбрасываем рамку (на случай если была красной)
    };
  });

  $('body').on('click', 'button.saved-contacts__delete', function(e) {
    if(confirm("Удалить контакт?")) {
      $(this).parent('.saved-contacts__item').remove();
    }
  });
