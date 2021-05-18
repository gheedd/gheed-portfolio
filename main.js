$('nav a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});

// $('nav li').on('click', function () {
//   $(this).addClass('active').siblings().removeClass('active');
// });

const sections = document.querySelectorAll('section');
const navListItems = document.querySelectorAll('nav ul li');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navListItems.forEach((li) => {
    li.classList.remove('active');
    if (li.classList.contains(current)) {
      li.classList.add('active');
    }
  });
});
