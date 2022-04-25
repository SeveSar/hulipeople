
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
function support_format_webp()
{
 var elem = document.createElement('canvas');

 if (!!(elem.getContext && elem.getContext('2d')))
 {
  // was able or not to get WebP representation
  return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
 }
 else
 {
  // very old browser like IE 8, canvas not supported
  return false;
 }
}
if (support_format_webp()) document.body.classList.add('webp');
document.addEventListener("DOMContentLoaded",(e) => {
  const menuContents = document.querySelectorAll('.js-menu-content')
const menuLinks = document.querySelectorAll('.js-menu')

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

  // function showActiveClassNavContent(array, currentContent) {
  //   array.forEach(item => item.classList.remove('active'))
  //   currentContent.classList.add('active')
  // }
  // bodyNavItems.forEach(item => {
  //   item.addEventListener('click', (e) => {
  //     const navBtn = e.target.closest('button[nav-btn-js]')
  //     if (navBtn && !navBtn.classList.contains('active') && navBtn.hasAttribute('has-content')) {
  //       const activeBtn = e.currentTarget.querySelector('button[nav-btn-js].active');
  //       activeBtn.classList.remove('active')
  //       navBtn.classList.add('active')
  //       const navContentItems = e.currentTarget.querySelectorAll('.nav-content')
  //       const indexContent = navBtn.getAttribute('nav-content')
  //       showActiveClassNavContent(navContentItems, navContentItems[indexContent])
  //     }
  //   })
  // })
}


// if-touchpad

// const navLinkItems = document.querySelectorAll('.nav .nav__list-item[has-content] > button')
// const bodyNavLinkItems = document.querySelectorAll('.nav .nav__list-item[has-content] .body-nav')
// function removeActiveClassBodyNav(number) {
//   for (let i = 0; i < bodyNavLinkItems.length; i++) {
//     if (+number !== +(bodyNavLinkItems[i].getAttribute('number-content'))) {
//       bodyNavLinkItems[i].classList.remove('active')
//       navLinkItems[i].classList.remove('active')
//     }
//   }
// }
// function toggleClassActiveBodyNav(bodyNav, btn) {
//   bodyNav.classList.toggle('active')
//   btn.classList.toggle('active')
// }
// if (isMobile.any()) {
//   navLinkItems.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//       const parentItem = e.currentTarget.closest('.nav__list-item[has-content]')
//       const bodyNavItem = parentItem.querySelector('.body-nav')
//       removeActiveClassBodyNav(bodyNavItem.getAttribute('number-content'))
//       toggleClassActiveBodyNav(bodyNavItem, e.currentTarget)

//     })
//   })
// }
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
  function mobileSliderButtons_1() {
    if (!buttonsContainer_1) return false
    if (document.documentElement.clientWidth <= 1138 && buttonsContainer_1.dataset.mobile === 'false') {
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
            }
        },
        navigation: {
          nextEl: '.buttons-button-next',
        }
      })

      buttonsContainer_1.dataset.mobile = 'true'
    } else if (document.documentElement.clientWidth > 1138) {
      buttonsContainer_1.dataset.mobile = 'false'
      if (buttonsContainer_1.classList.contains('swiper-container-initialized')) {
        sliderButtons_1.destroy()
      }
    }
  }
  let sliderButtons_2;
  const buttonsContainer_2 = document.querySelector('.swiper-buttons-slider-minni')
  function mobileSliderButtons_2() {
    if (!buttonsContainer_2) return false
    console.log(buttonsContainer_2.closest('.slider-buttons').querySelector('.buttons-button-next'))
    if (document.documentElement.clientWidth <= 1230 && buttonsContainer_2.dataset.mobile === 'false') {
      sliderButtons_2 = new Swiper(buttonsContainer_2, {
        // slidesPerView: 3,
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
          }
        },
        navigation: {
          nextEl:'.buttons-button-next_2'
        }
      })

      buttonsContainer_2.dataset.mobile = 'true'
    } else if (document.documentElement.clientWidth > 1230) {
      buttonsContainer_2.dataset.mobile = 'false'
      if (buttonsContainer_2.classList.contains('swiper-container-initialized')) {
        sliderButtons_2.destroy()
      }
    }
  }
  mobileSliderButtons_1()
  mobileSliderButtons_2()


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
  function mobileSliderButtons_3() {
    if (!buttonsContainer_3) return false
    if (document.documentElement.clientWidth <= 1138 && buttonsContainer_3.dataset.mobile === 'false') {
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
          }
        },
        navigation: {
          nextEl: '.buttons-button-next',
        }
      })

      buttonsContainer_3.dataset.mobile = 'true'
    } else if (document.documentElement.clientWidth > 1138) {
      buttonsContainer_3.dataset.mobile = 'false'
      if (buttonsContainer_3.classList.contains('swiper-container-initialized')) {
        sliderButtons_3.destroy()
      }
    }
  }
  mobileSliderButtons_3()

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
          }
        },
      })
    }

    // siwper-buttons-four
  const buttonsContainer_4 = document.querySelector('.swiper-buttons-slider-four');
  let sliderButtons_4;
  function mobileSliderButtons_4() {
    if (!buttonsContainer_4) return false
    if (document.documentElement.clientWidth <= 1138 && buttonsContainer_4.dataset.mobile === 'false') {
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

      buttonsContainer_4.dataset.mobile = 'true'
    } else if (document.documentElement.clientWidth > 1138) {
      buttonsContainer_4.dataset.mobile = 'false'
      if (buttonsContainer_4.classList.contains('swiper-container-initialized')) {
        sliderButtons_4.destroy()
      }
    }
  }
  mobileSliderButtons_4()

  // swiper-buttons-slider-five

  const buttonsContainer_5 = document.querySelector('.swiper-buttons-slider-five');
  let sliderButtons_5;
  function mobileSliderButtons_5() {
    if (!buttonsContainer_5) return false
    if (document.documentElement.clientWidth <= 1138 && buttonsContainer_5.dataset.mobile === 'false') {
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

      buttonsContainer_5.dataset.mobile = 'true'
    } else if (document.documentElement.clientWidth > 1138) {
      buttonsContainer_5.dataset.mobile = 'false'
      if (buttonsContainer_5.classList.contains('swiper-container-initialized')) {
        sliderButtons_5.destroy()
      }
    }
  }
  mobileSliderButtons_5()

  const buttonsContainer_6 = document.querySelector('.swiper-buttons-slider-five_2');
  let sliderButtons_6;
  function mobileSliderButtons_6() {
    if (!buttonsContainer_6) return false
    if (document.documentElement.clientWidth <= 1138 && buttonsContainer_6.dataset.mobile === 'false') {
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

      buttonsContainer_6.dataset.mobile = 'true'
    } else if (document.documentElement.clientWidth > 1138) {
      buttonsContainer_6.dataset.mobile = 'false'
      if (buttonsContainer_5.classList.contains('swiper-container-initialized')) {
        sliderButtons_6.destroy()
      }
    }
  }
  mobileSliderButtons_6()

  const buttonsContainer_7 = document.querySelector('.swiper-buttons-slider-five_3');
  let sliderButtons_7;
  function mobileSliderButtons_7() {
    if (!buttonsContainer_6) return false
    if (document.documentElement.clientWidth <= 1138 && buttonsContainer_7.dataset.mobile === 'false') {
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

      buttonsContainer_7.dataset.mobile = 'true'
    } else if (document.documentElement.clientWidth > 1138) {
      buttonsContainer_7.dataset.mobile = 'false'
      if (buttonsContainer_7.classList.contains('swiper-container-initialized')) {
        sliderButtons_7.destroy()
      }
    }
  }
  mobileSliderButtons_7()

  const buttonsContainer_8 = document.querySelector('.swiper-buttons-slider-five_4');
  let sliderButtons_8;
  function mobileSliderButtons_8() {
    if (!buttonsContainer_8) return false
    if (document.documentElement.clientWidth <= 1138 && buttonsContainer_8.dataset.mobile === 'false') {
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

      buttonsContainer_8.dataset.mobile = 'true'
    } else if (document.documentElement.clientWidth > 1138) {
      buttonsContainer_8.dataset.mobile = 'false'
      if (buttonsContainer_8.classList.contains('swiper-container-initialized')) {
        sliderButtons_8.destroy()
      }
    }
  }
  mobileSliderButtons_8()

  const buttonsContainer_9 = document.querySelector('.swiper-buttons-slider-six');
  let sliderButtons_9;
  function mobileSliderButtons_9() {
    if (!buttonsContainer_9) return false
    if (document.documentElement.clientWidth <= 1138 && buttonsContainer_9.dataset.mobile === 'false') {
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
          }
        },
        navigation: {
          nextEl: '.buttons-button-next_9',
        }
      })

      buttonsContainer_9.dataset.mobile = 'true'
    } else if (document.documentElement.clientWidth > 1138) {
      buttonsContainer_9.dataset.mobile = 'false'
      if (buttonsContainer_9.classList.contains('swiper-container-initialized')) {
        sliderButtons_9.destroy()
      }
    }
  }
  mobileSliderButtons_9()

  window.addEventListener('resize', (e) => {
    if (indigoContainer) {
      mobileSliderIndigo()
    }
    if (buttonsContainer_1) {
      mobileSliderButtons_1()
    }
    if (buttonsContainer_2) {
      mobileSliderButtons_2()
    }
    if (buttonsContainer_3) {
      mobileSliderButtons_3()
    }
    if (buttonsContainer_4) {
      mobileSliderButtons_4()
    }
    if (buttonsContainer_5) {
      mobileSliderButtons_5()
    }
    if (buttonsContainer_6) {
      mobileSliderButtons_6()
    }
    if (buttonsContainer_7) {
      mobileSliderButtons_7()
    }
    if (buttonsContainer_8) {
      mobileSliderButtons_8()
    }
    if (buttonsContainer_9) {
      mobileSliderButtons_9()
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
})