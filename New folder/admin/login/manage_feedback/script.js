const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function(){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

menu_btn.addEventListener('click', function(){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

document.addEventListener('DOMContentLoaded', function() {
    const profilePic = document.getElementById('profilePic');
    const dropdownContent = document.getElementById('dropdownContent');
  
    profilePic.addEventListener('click', function() {
      if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
      } else {
        dropdownContent.style.display = 'block';
      }
    });
  
    // Hide the dropdown when clicking outside of it
    window.addEventListener('click', function(event) {
      if (!event.target.matches('#profilePic')) {
        dropdownContent.style.display = 'none';
      }
    });
  });