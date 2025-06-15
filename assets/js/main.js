window.onload = function() {
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

  // Initialize the nav-items based on window width
  initializeMenu();

  // Add click event listener to the menu icon
  document.getElementById('menu-icon').addEventListener('click', openMenu);
  document.getElementById('menu-close-button').addEventListener('click', closeMenu);

  // Optionally, update the menu state when the window is resized
  window.addEventListener('resize', initializeMenu);
};