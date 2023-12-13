const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function(){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

//menu
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

//fetching data from json file
fetch('user.json')
.then(response => response.json())
.then(data => {
  const profilePicturesContainer = document.getElementById('profilePictures');
  data.customers.forEach(customer => {
    const customerDiv = document.createElement('div');
    customerDiv.classList.add('customer');
    customerDiv.innerHTML = `
        <img src="${customer.profile_pic}" alt="${customer.name}">
        <h3>${customer.name}</h3>
    `;

    const iconGroup = document.createElement('div');
    iconGroup.classList.add('icon-group'); // Adding 'icon-group' class for styling

    // Create icons for edit, update, and delete
    const blockIcon = document.createElement('i');
    blockIcon.classList.add('fas', 'fa-ban', 'icon'); // Add 'icon' class for styling
    blockIcon.title = 'Block';

      // Add click event listener to block icon
      blockIcon.addEventListener('click', (event) => {
        const clickedCustomerDiv = event.target.closest('.customer');
        if (clickedCustomerDiv.style.opacity !== '0.5') {
          // Toggle back to the original appearance
          clickedCustomerDiv.style.transition = 'opacity 1s, background-color 1s';
          clickedCustomerDiv.style.opacity = '0.5'; // Dim the opacity
          clickedCustomerDiv.style.backgroundColor = '#ccc'; // Change the color to a dimmed version
        } else {
          // Toggle to revert to the original appearance
          clickedCustomerDiv.style.transition = 'opacity 1s, background-color 1s';
          clickedCustomerDiv.style.opacity = '1'; // Revert opacity to original
          clickedCustomerDiv.style.backgroundColor = 'white'; // Revert background color
        }
      });

    const updateIcon = document.createElement('i');
    updateIcon.classList.add('fas', 'fa-sync', 'icon'); // Add 'icon' class for styling
    updateIcon.title = 'Update';

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fas', 'fa-trash-alt', 'icon'); // Add 'icon' class for styling
    deleteIcon.title = 'Delete';

    deleteIcon.addEventListener('click', (event) => {
      const clickedCustomerDiv = event.target.closest('.customer');
      clickedCustomerDiv.style.transition = 'opacity 1s, background-color 1s';
      clickedCustomerDiv.style.opacity = '0';
      setTimeout(() => {
        clickedCustomerDiv.remove();
      }, 1000); // Change the timing if needed
    });

    // Append icons to the icon-group container
    iconGroup.appendChild(blockIcon);
    iconGroup.appendChild(updateIcon);
    iconGroup.appendChild(deleteIcon);

    customerDiv.appendChild(iconGroup);
    profilePicturesContainer.appendChild(customerDiv);
  });
});

 // Create icons for edit, update, and delete
 const editIcon = document.createElement('i');
 editIcon.classList.add('fas', 'fa-edit'); // Font Awesome edit icon

 const updateIcon = document.createElement('i');
 updateIcon.classList.add('fas', 'fa-sync'); // Font Awesome update icon

 const deleteIcon = document.createElement('i');
 deleteIcon.classList.add('fas', 'fa-trash-alt'); // Font Awesome delete icon

 customerDiv.appendChild(editIcon);
 customerDiv.appendChild(updateIcon);
 customerDiv.appendChild(deleteIcon);