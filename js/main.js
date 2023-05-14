$("#upto").click(function() { // ID откуда кливаем
    $('html, body').animate({
    scrollTop: $(".start").offset().top // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
   });