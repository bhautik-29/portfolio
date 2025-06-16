const navbar = () => {
  var navitems = document.querySelector('.nav-items');




  function initializeMenu() {
      if (window.innerWidth < 900) {
          navitems.style.transform = "translateX(100%)";
      } else {
          navitems.style.transform = "translateX(0%)";
      }
  }

  function openMenu() {
      if (window.innerWidth < 900) {
          if (navitems.style.transform === "translateX(100%)") {
              navitems.style.transform = "translateX(0%)";
          } else {
              navitems.style.transform = "translateX(100%)";
          }
      }
  }

  function closeMenu() {
      if (window.innerWidth < 900) {
          if (navitems.style.transform === "translateX(0%)") {
              navitems.style.transform = "translateX(100%)";
          } else {
              navitems.style.transform = "translateX(0%)";
          }
      }
  }

  
  initializeMenu();

  
  document.getElementById('menu-icon').addEventListener('click', openMenu);
  document.getElementById('menu-close-button').addEventListener('click', closeMenu);

  
  window.addEventListener('resize', initializeMenu);
};

navbar()


let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

// scoll section

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            // active navbar links
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
            // active section for Animation
            sec.classList.add('show-animate');

        }
        // if want to use animation that repeats on scroll use this
        else{
            sec.classList.remove('show-animate')
        }
    })
    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);

    let footer = document.querySelector('footer');


    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight)
}


