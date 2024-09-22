$(document).ready(function() {
    var owl = $('.carousel1');
    owl.owlCarousel({
        margin: 10,
        loop: true,
        lazyLoad: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});

$(document).ready(function() {
    var owl = $('.carousel2');
    owl.owlCarousel({
        margin: 10,
        loop: true,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});

$(document).ready(function() {
    var owl = $('.carousel3');
    owl.owlCarousel({
        margin: 10,
        loop: true,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 20000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });
});

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: true, 
      autoplay: true,
      autoplayTimeout: 5000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
        1200: {
          items: 5,
        },
      },
    });
  });
  
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true, // Faz o carrossel se repetir
      margin: 10, // Margem entre os itens
      nav: true, // Botões de navegação (anterior/próximo)
      dots: true, // Habilita os pontos de navegação
      responsive: {
        0: {
          items: 1, // Exibe 1 item por vez em dispositivos móveis
        },
        600: {
          items: 2, // Exibe 2 itens por vez em tablets
        },
        1000: {
          items: 3, // Exibe 3 itens por vez em desktops
          loop: false, // Desativa o loop para desktops
        },
      },
    });
  });
  
  $('.custom-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,  // Garante que os dots estão ativados
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  });
  