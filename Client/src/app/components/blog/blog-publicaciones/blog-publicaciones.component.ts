import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../../services/upload.service';
import { DomSanitizer } from '@angular/platform-browser';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { Publicacion } from 'src/app/models/publicacion';
import { Publicaciones } from 'src/app/models/publicacion';
import { concat } from 'rxjs';


/* https://es.stackoverflow.com/questions/278427/no-cargar-los-archivos-javascript-despues-de-cambio-de-componentes-en-angular */
declare var $;


@Component({
  selector: 'app-blog-publicaciones',
  templateUrl: './blog-publicaciones.component.html',
  styleUrls: ['./blog-publicaciones.component.css']
})
export class BlogPublicacionesComponent implements OnInit {

  images: any = [];
  image: any;
  pageActual: number = 1;

  publicaciones: Array<Publicaciones> = [];
  agrupados: Array<Publicaciones> = [];
  aux: Array<Publicaciones> = [];

  constructor(private uploadService: UploadService, private sanitizer: DomSanitizer, private publicacionService: PublicacionService) { }

  ngOnInit() {
    // loader
    setTimeout(function () {
      $('#ftco-loader').removeClass('show');
    }, 1);
    this.publicacionService.getPublicacionesAll().subscribe(
      (res: Array<Publicaciones>) => {
        console.log(res);
        this.publicaciones = res;
        this.concatenar(this.publicaciones);
        this.viewImages();
      },
      err => console.error(err)
    );


    var isMobile = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
    };


    $(window).stellar({
      responsive: true,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: 'scroll'
    });


    var fullHeight = function () {

      $('.js-fullheight').css('height', $(window).height());
      $(window).resize(function () {
        $('.js-fullheight').css('height', $(window).height());
      });

    };
    fullHeight();



    // Scrollax
    $.Scrollax();

    var carousel = function () {
      $('.carousel-testimony').owlCarousel({
        center: true,
        loop: true,
        items: 1,
        margin: 30,
        stagePadding: 0,
        nav: false,
        navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
      });


    };
    carousel();

    $('nav .dropdown').hover(function () {
      var $this = $(this);
      // 	 timer;
      // clearTimeout(timer);
      $this.addClass('show');
      $this.find('> a').attr('aria-expanded', true);
      // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
      $this.find('.dropdown-menu').addClass('show');
    }, function () {
      var $this = $(this);
      // timer;
      // timer = setTimeout(function(){
      $this.removeClass('show');
      $this.find('> a').attr('aria-expanded', false);
      // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
      $this.find('.dropdown-menu').removeClass('show');
      // }, 100);
    });


    $('#dropdown04').on('show.bs.dropdown', function () {
      console.log('show');
    });

    // scroll
    var scrollWindow = function () {
      $(window).scroll(function () {
        var $w = $(this),
          st = $w.scrollTop(),
          navbar = $('.ftco_navbar'),
          sd = $('.js-scroll-wrap');

        if (st > 150) {
          if (!navbar.hasClass('scrolled')) {
            navbar.addClass('scrolled');
          }
        }
        if (st < 150) {
          if (navbar.hasClass('scrolled')) {
            navbar.removeClass('scrolled sleep');
          }
        }
        if (st > 350) {
          if (!navbar.hasClass('awake')) {
            navbar.addClass('awake');
          }

          if (sd.length > 0) {
            sd.addClass('sleep');
          }
        }
        if (st < 350) {
          if (navbar.hasClass('awake')) {
            navbar.removeClass('awake');
            navbar.addClass('sleep');
          }
          if (sd.length > 0) {
            sd.removeClass('sleep');
          }
        }
      });
    };
    scrollWindow();

    var isMobile = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
    };

    var counter = function () {

      $('#section-counter, .hero-wrap, .ftco-counter').waypoint(function (direction) {

        if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

          var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
          $('.number').each(function () {
            var $this = $(this),
              num = $this.data('number');
            console.log(num);
            $this.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step
              }, 7000
            );
          });

        }

      }, { offset: '95%' });

    }
    counter();


    var contentWayPoint = function () {
      var i = 0;
      $('.ftco-animate').waypoint(function (direction) {

        if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

          i++;

          $(this.element).addClass('item-animate');
          setTimeout(function () {

            $('body .ftco-animate.item-animate').each(function (k) {
              var el = $(this);
              setTimeout(function () {
                var effect = el.data('animate-effect');
                if (effect === 'fadeIn') {
                  el.addClass('fadeIn ftco-animated');
                } else if (effect === 'fadeInLeft') {
                  el.addClass('fadeInLeft ftco-animated');
                } else if (effect === 'fadeInRight') {
                  el.addClass('fadeInRight ftco-animated');
                } else {
                  el.addClass('fadeInUp ftco-animated');
                }
                el.removeClass('item-animate');
              }, k * 50, 'easeInOutExpo');
            });

          }, 100);

        }

      }, { offset: '95%' });
    };
    contentWayPoint();


    // navigation
    var OnePageNav = function () {
      $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function (e) {
        e.preventDefault();

        var hash = this.hash,
          navToggler = $('.navbar-toggler');
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 700, 'easeInOutExpo', function () {
          window.location.hash = hash;
        });


        if (navToggler.is(':visible')) {
          navToggler.click();
        }
      });
      $('body').on('activate.bs.scrollspy', function () {
        console.log('nice');
      })
    };
    OnePageNav();


    // magnific popup
    $('.image-popup').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        verticalFit: true
      },
      zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS
      }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });
  }

  viewImages() {
    for (let i = 0; i < this.publicaciones.length; i++) {

      console.log("-"+this.publicaciones[i].image.substr(1,this.publicaciones[i].image.length-2)+"-");
    }
    for (let i = 0; i < this.publicaciones.length; i++) {
      var auxFileName = this.publicaciones[i].image.substr(1,this.publicaciones[i].image.length-2);
      this.uploadService.downloadFile(auxFileName)
        .subscribe(
          data => {
            console.log(data);
            let objectURL = URL.createObjectURL(data);
            this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);

            this.images.push(this.image);
            this.publicaciones[i].img = this.image;
          },
          error => console.error(error)
        );
    }
  }

  concatenar(array: Array<Publicaciones>) {
    for (var i = 0; i < array.length; i++) {
      this.agrupados.push(array[i]);
      this.aux.push(array[i]);
    }

    var auxiliar = "";
    for (var i = 0; i < array.length; i++) {
      auxiliar = "";
      for (var j = 0; j < this.agrupados.length; j++) {

        //this.agrupados.push(array[i]);
        //console.log(this.agrupados[j].id_publicacion + " - " + array[i].id_publicacion);
        if (this.agrupados[j].id_publicacion == array[i].id_publicacion) {

          //console.log("COMPARA: "+this.agrupados[j].id_publicacion + " - " + array[i].id_publicacion);
          auxiliar = auxiliar.concat(this.agrupados[j].nombre_keyword, ', ');

        }
      }
      this.aux[i].nombre_keyword = auxiliar.substr(0, auxiliar.length - 2);
    }

    const eliminarRepetidos = (array: Array<Publicaciones>) => {
      var unicos = [];
      var itemsEncontrados = {};
      for (var i = 0, l = array.length; i < l; i++) {
        var stringified = JSON.stringify(array[i].id_publicacion);
        if (itemsEncontrados[stringified]) { continue; }
        unicos.push(array[i]);
        itemsEncontrados[stringified] = true;
      }
      return unicos;
    }

    this.publicaciones = eliminarRepetidos(this.aux);
    /*
        for (var i = 0; i < this.publicaciones.length; i++) {
    
          console.log(this.publicaciones[i].id_publicacion + " - " + this.publicaciones[i].nombre_keyword);
        }
    */

  }

}
