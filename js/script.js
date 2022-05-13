
const isMobile = {
  Android: function() {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

if (isMobile.any()) {
    document.body.classList.add('isMobile')
} else {
    document.body.classList.remove('isMobile')
};
if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
  document.body.classList.add('fireFox')
}
console.log(navigator.userAgent.toLowerCase());
document.addEventListener("DOMContentLoaded",(e) => {
  const menuContents = document.querySelectorAll('.js-menu-content')
const menuLinks = document.querySelectorAll('.js-menu')

console.log(menuLinks)
function removeActiveClasses(idxContent) {
  for (let i = 0; i < menuContents.length; i++) {
    if (+idxContent !== +(menuContents[i].getAttribute('data-menu-content'))) {
      menuContents[i].classList.remove('active')
      menuLinks[i].classList.remove('active')
    }
  }
}
function showActiveClassMenu(idx) {
  menuContents[idx].classList.toggle('active')
  menuLinks[idx].classList.toggle('active')
}
if (menuLinks.length) {
  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const indexMenu = e.currentTarget.dataset.menu;
      console.log(indexMenu)
      if (indexMenu && e.currentTarget.classList.contains('js-has-content')) {
        removeActiveClasses(indexMenu)
        showActiveClassMenu(indexMenu)
      }
    })
  })

  menuContents.forEach(item => {
    item.addEventListener('click', (e) => {
      const insideLink = e.target.closest('.js-inside-menu')
      if (insideLink && !insideLink.classList.contains('active')) {
        const indexMenu = insideLink.dataset.insideMenu
        console.log(indexMenu, 'fff')
        const activeContent = e.currentTarget.querySelector('.js-inside-content.active')
        const insideLinkActive = e.currentTarget.querySelector('.js-inside-menu.active')
        activeContent.classList.remove('active')
        insideLinkActive.classList.remove('active')
        e.currentTarget.querySelector(`.js-inside-content[data-inside-content="${indexMenu}"]`).classList.add('active')
        insideLink.classList.add('active')
      }
    })
  })

}

;
  (function() {
  const burgerBtn = document.querySelector('.js-burger');
  const mobileMenu = document.querySelector('.js-mobile-menu')
  const overlay = document.querySelector('.overlay')
  function toggleBurgerMenu() {
    mobileMenu.classList.toggle('active')
    burgerBtn.classList.toggle('active')
    overlay.classList.toggle('active')
    // document.body.classList.toggle('no-scroll')
  }

  if (burgerBtn) {
    burgerBtn.addEventListener('click', toggleBurgerMenu)
    overlay.addEventListener('click',toggleBurgerMenu)
  }
})();
  (function() {
  // indigo-swiper
  const indigoContainer = document.querySelector('.swiper-indigo-main');
  let sliderIndigo;
  function mobileSliderIndigo() {
    if (!indigoContainer) return false
    if (document.documentElement.clientWidth <= 830 && indigoContainer.dataset.mobile === 'false') {

      sliderIndigo = new Swiper(indigoContainer, {
        slidesPerView: 1.5,
        speed: 700,
        breakpoints: {
          320: {
            slidesPerView: 1.38,
            spaceBetween: 9.5,
          },
          635: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
        },
        navigation: {
          nextEl: '.indigo-button-next',
        }
      })
      indigoContainer.dataset.mobile = 'true'
    } else if (document.documentElement.clientWidth > 830) {
      indigoContainer.dataset.mobile = 'false'
      if (indigoContainer.classList.contains('swiper-container-initialized')) {
        sliderIndigo.destroy()
      }
    }
  }
  mobileSliderIndigo()


  // slider-buttons
  const buttonsContainer_1 = document.querySelector('.swiper-buttons-slider');
  let sliderButtons_1;
    if (buttonsContainer_1) {
      sliderButtons_1 = new Swiper(buttonsContainer_1, {
        slidesPerView: 4,
        spaceBetween: 10,
        speed: 700,
        breakpoints: {
          320: {
            slidesPerView: 2.8,
            },
            470: {
              slidesPerView: 4,
            },
            870: {
              slidesPerView: 6,
            },
            870: {
              slidesPerView: 8,
            },
            992: {
              slidesPerView: 8.3,
            }
        },
        navigation: {
          nextEl: '.buttons-button-next',
        }
      })

    }

  let sliderButtons_2;
  const buttonsContainer_2 = document.querySelectorAll('.swiper-buttons-slider-minni')
    if (buttonsContainer_2.length) {
      buttonsContainer_2.forEach(ct => {
        sliderButtons_2 = new Swiper(ct, {
          spaceBetween: 10,
          speed: 700,
          breakpoints: {
            320: {
              slidesPerView: 2.4,
            },
            600: {
              slidesPerView: 4,
            },
            760: {
              slidesPerView: 5,
            },
            1225: {
              slidesPerView: 6,
              spaceBetween: 17,
            }
          },
          navigation: {
            nextEl:'.buttons-button-next_2'
          }
        })
      })
    }





  // slider -team

  const sliderTeamContainer = document.querySelector('.swiper-team');
  if (sliderTeamContainer) {
    let sliderTeam = new Swiper(sliderTeamContainer, {
      slidesPerView: 1,
      spaceBetween: 14,
      speed: 700,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
        576: {
          slidesPerView: 2,
        },
        740: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
      },
      navigation: {
        prevEl: '.slider-team-prev',
        nextEl: '.slider-team-next',
      }
    })
  }

  // swiper-indigo-dots
  const swiperIndigoDots = document.querySelector('.swiper-indigo-dots')
  if (swiperIndigoDots) {
    let sliderIndigoDots = new Swiper(swiperIndigoDots, {
      slidesPerView: 1,
      spaceBetween: 14,
      speed: 700,
      breakpoints: {
        320: {
          slidesPerView: 1.3,
        },
        576: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 1,
        },
      },
      pagination: {
        el: ".swiper-pagination-indigo",
        clickable: true
      },
    })
  }
  // swiper-indigo-dots-double
  const swiperIndigoDotsDouble = document.querySelector('.swiper-indigo-dots--double')
  if (swiperIndigoDotsDouble) {
    let sliderIndigoDotsDouble = new Swiper(swiperIndigoDotsDouble, {
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 700,
      breakpoints: {
        320: {
          slidesPerView: 0.7,
        },
        650: {
          slidesPerView: 1,
        },
      },
      pagination: {
        el: ".swiper-pagination-indigo_double",
        clickable: true
      },
    })
  }

  // swiper-indigo-dots
  const swiperIndigoDots_2 = document.querySelector('.swiper-indigo-dots_2')
  if (swiperIndigoDots_2) {
    let sliderIndigoDots_2 = new Swiper(swiperIndigoDots_2, {
      slidesPerView: 1,
      spaceBetween: 14,
      speed: 700,
      breakpoints: {
        320: {
          slidesPerView: 1.3,
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 14,
        },
      },
      pagination: {
        el: ".swiper-pagination-dots_2",
        clickable: true
      },

    })
  }
  // siwper-buttons-rating
  const buttonsContainer_3 = document.querySelector('.swiper-buttons-slider--rating');
  let sliderButtons_3;
    if (buttonsContainer_3) {
      sliderButtons_3 = new Swiper(buttonsContainer_3, {
        slidesPerView: 3.5,
        spaceBetween: 20,
        speed: 700,
        breakpoints: {
          320: {
            slidesPerView: 2.6,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          930: {
            slidesPerView: 7,
            spaceBetween: 15,
          },
          1199: {
            slidesPerView: 8,
            spaceBetween: 15,
          }
        },
        navigation: {
          nextEl: '.buttons-button-next',
        }
      })
    }

  // slider-youtube
  const youtubeSliderContainer = document.querySelector('.swiper-youtube');
  let sliderYoutube;
    if (youtubeSliderContainer) {
      sliderYoutube = new Swiper(youtubeSliderContainer, {
        slidesPerView: 3,
        spaceBetween: 20,
        speed: 700,

        roundLengths: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination-youtube",
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 1.2,
            spaceBetween: 15,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 15,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 20,
            loopAdditionalSlides: 3,
            centeredSlides: true,
          },

        },
      })
    }

    // siwper-buttons-four
  const buttonsContainer_4 = document.querySelector('.swiper-buttons-slider-four');
  let sliderButtons_4;
    if (buttonsContainer_4) {
      sliderButtons_4 = new Swiper(buttonsContainer_4, {
        slidesPerView: 3,
        spaceBetween: 20,
        speed: 700,
        breakpoints: {
          320: {
            slidesPerView: 2.3,
            spaceBetween: 10,
          },
          500: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          650: {
            slidesPerView: 4,
            spaceBetween: 15,
          }
        },
        navigation: {
          nextEl: '.buttons-button-next_3',
        }
      })

    }

  // swiper-buttons-slider-five

  const buttonsContainer_5 = document.querySelector('.swiper-buttons-slider-five');
  let sliderButtons_5;
    if (buttonsContainer_5) {
      sliderButtons_5 = new Swiper(buttonsContainer_5, {
        slidesPerView: 2.3,
        spaceBetween: 20,
        speed: 700,
        breakpoints: {
          320: {
            slidesPerView: 2.3,
            spaceBetween: 10,
          },
          500: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 5,
            spaceBetween: 20,
          }
        },
        navigation: {
          nextEl: '.buttons-button-next_4',
        }
      })
    }

  const buttonsContainer_6 = document.querySelector('.swiper-buttons-slider-five_2');
  let sliderButtons_6;
    if (buttonsContainer_6) {
      sliderButtons_6 = new Swiper(buttonsContainer_6, {
        slidesPerView: 2.3,
        spaceBetween: 20,
        speed: 700,
        breakpoints: {
          320: {
            slidesPerView: 2.3,
            spaceBetween: 10,
          },
          500: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 5,
            spaceBetween: 20,
          }
        },
        navigation: {
          nextEl: '.buttons-button-next_5',
        }
      })
    }


  const buttonsContainer_7 = document.querySelector('.swiper-buttons-slider-five_3');
  let sliderButtons_7;
    if (buttonsContainer_7)  {
      sliderButtons_7 = new Swiper(buttonsContainer_7, {
        slidesPerView: 2.3,
        spaceBetween: 20,
        speed: 700,
        breakpoints: {
          320: {
            slidesPerView: 2.3,
            spaceBetween: 10,
          },
          500: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 5,
            spaceBetween: 20,
          }
        },
        navigation: {
          nextEl: '.buttons-button-next_6',
        }
      })
    }



  const buttonsContainer_8 = document.querySelector('.swiper-buttons-slider-five_4');
  let sliderButtons_8;
    if (buttonsContainer_8) {
      sliderButtons_8 = new Swiper(buttonsContainer_8, {
        slidesPerView: 2.3,
        spaceBetween: 20,
        speed: 700,
        breakpoints: {
          320: {
            slidesPerView: 2.3,
            spaceBetween: 10,
          },
          500: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 5,
            spaceBetween: 20,
          }
        },
        navigation: {
          nextEl: '.buttons-button-next_7',
        }
      })
    }

  const buttonsContainer_9 = document.querySelector('.swiper-buttons-slider-six');
  let sliderButtons_9;
  sliderButtons_9 = new Swiper(buttonsContainer_9, {
    slidesPerView: 2.5,
    spaceBetween: 20,
    speed: 700,
    breakpoints: {
      320: {
        slidesPerView: 2.3,
        spaceBetween: 10,
      },
      575: {
        slidesPerView: 3.5,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 4.5,
        spaceBetween: 20,
      },
      1130: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1135: {
        slidesPerView: 6,
        spaceBetween: 20,
      }
    },
    navigation: {
      nextEl: '.buttons-button-next_9',
    }
  })


  window.addEventListener('resize', (e) => {
    if (indigoContainer) {
      mobileSliderIndigo()
    }
  });
})();
  (function() {
  const tabButtons = document.querySelectorAll('.js-tab-button-comment');
  const tabContents = document.querySelectorAll('.js-tab-content-comment')
  if (!tabContents.length && !tabButtons.length) return false

  function removeActiveClasses() {
    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].classList.remove('active')
      tabButtons[i].classList.remove('active')
    }
  }
  function showContent(index) {
    removeActiveClasses()
    tabContents[index].classList.add('active')
    tabButtons[index].classList.add('active')
  }
  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      for (let i = 0; i < tabButtons.length; i++) {
        if (e.target === tabButtons[i]) {
          showContent(i)
        }
      }
    })
  })
})();
  (function() {
  const filterBtns = document.querySelectorAll('.js-filter-btn');
  const filterContents = document.querySelectorAll('.js-filter-content')
  if (!filterBtns.length && !filterContents.length) return false

  function removeActiveClasses() {
    for (let i = 0; i < filterBtns.length; i++) {
      filterBtns[i].classList.remove('active')
    }
  }
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const filterType = e.target.dataset.filter
      filterContents.forEach(content => {
        removeActiveClasses()
        e.target.classList.add('active')
        if (filterType === content.dataset.filter) {
          content.style.display = 'block'
        } else {
          content.style.display = 'none'
        }
      })
    })
  })


})();
  (function() {
  const filterAccountsContainers = document.querySelectorAll('.js-filter-container')
  const filterAccountBigBtns = document.querySelectorAll('.js-filter-account-big-btn');
  if (!filterAccountsContainers.length) return false
  filterAccountsContainers.forEach((item) => {
    item.addEventListener('click', (e) => {
      const buttonFilter = e.target.closest('.js-filter-account-btn')
      if (buttonFilter) {
        const filterContentItems = e.currentTarget.querySelectorAll('.js-filter-account-content')
        const filter = buttonFilter.getAttribute('data-filter-account');
        const activeBtn = e.currentTarget.querySelector('.js-filter-account-btn.active');
        if (activeBtn) activeBtn.classList.remove('active')
        buttonFilter.classList.add('active')
        filterContentItems.forEach(item => {
          const contentFilter = item.getAttribute('data-filter-account-content');
          if (filter !== contentFilter) {
            item.style.display = 'none'
          } else {
            item.style.display = 'block'
          }
        })
      }
    })
  })
})();
  (function() {
  const videoWrapItems = document.querySelectorAll('.js-video-play');
  if (!videoWrapItems.length) return false

  videoWrapItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault()
      const video = e.currentTarget.querySelector('.video')
      video.src += '?autoplay=1'
      e.currentTarget.querySelector('button').classList.add('played')
      e.currentTarget.querySelector('.video-poster').classList.add('played')
      const descrVideoItem = e.currentTarget.closest('.js-video').querySelector('.js-video-descr')
      descrVideoItem.classList.add('hidden')

    })
  })
})();
  document.body.addEventListener('click', (e) => {
  // navLinks
  const menuLink = e.target.closest('.js-menu.js-has-content')
  const menuContent = e.target.closest('.js-menu-content')
  if (!menuLink && !menuContent && document.querySelector('.js-menu-content.active')) {
    removeActiveClasses()
  }

})
;

  // anchor
  const anchorLingks = document.querySelectorAll('a[data-scroll]');
  if (anchorLingks.length) {
    anchorLingks.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('data-scroll')).scrollIntoView({
              behavior: 'smooth'
          });
      });
    });

  }
})

$(function() {

  // toggle-slide mobile menu
  $('button.js-toggle').on('click', function(e) {
    e.preventDefault()
    const $this = $(this);
    if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
      $this.removeClass('active')
    } else {
      $this.next().removeClass('show');
      $this.next().addClass('show');
      $this.next().slideToggle(350);
      $this.addClass('active')
    }
  })
  // toggle slide accordion
  $('.js-accordion').on('click', function(e) {
    e.preventDefault()
    const $this = $(this);
    const bodyAccordion = $this.find('.js-accordion-body')
    if ($this.hasClass('show')) {
      $this.removeClass('show');
      $(bodyAccordion).slideUp(350);
    } else {
      $('.js-accordion-body').slideUp(350);
      $('.js-accordion').removeClass('show')
      $this.addClass('show');
      $(bodyAccordion).slideDown(300);
    }
  })

  // eraser

  $(".js-eraser").eraser({size: 45})


  // anchor scrolls
  // $(document).on('click', 'a[data-scroll]', function (event) {
  //   event.preventDefault();
  //   $('html, body').stop().animate({
  //       scrollTop: $($.attr(this, 'data-scroll')).offset().top
  //   }, 100);
  // });

})