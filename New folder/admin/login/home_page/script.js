const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

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
 
/*-------------------------------------charts---------------------------------------*/  
const xValues = ["India", "Canada", "Spain", "USA", "Argentina"];
const yValues = [55, 49, 44, 24, 15];
const barColors = [
  "#fefcbf",
  "#81e9e6",
  "#2b5797",
  "#2a6fdb",
  "#122c91"
];

new Chart("myChart1", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Product sold 2023"
    }
  }
});


const category = ["Phones", "Furniture", "Cars", "E-Gadgets", "Home Appliances"];
const values = [55, 49, 44, 24, 15];
const barColor = [
  "#3c2a4d",
  "#503a65",
  "#574f7d",
  "#95adbe",
  "#e0f0ea"
];

new Chart("myChart2", {
  type: "pie",
  data: {
    labels: category,
    datasets: [{
      backgroundColor: barColor,
      data: values
    }]
  },
  options: {
    title: {
      display: true,
      text: "Item Sold By category"
    }
  }
});

/*----------------------------------chart for sales----------------------------------------------------*/

const Values = [100,200,300,400,500,600,700,800,900,1000];

new Chart("lineChart", {
  type: "line",
  data: {
    labels: Values,
    datasets: [{ 
      data: [2478,3830,4060,4060,3070,5110,4330,4210,7830,8478],
      borderColor: "#3c2a4d",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});

const Values2 = [100,200,300,400,500,600,700,800,900,1000];

new Chart("lineChart2", {
  type: "line",
  data: {
    labels: Values2,
    datasets: [{ 
      data:[4478,3830,4060,3060,4070,5110,4330,4210,6830,5478],
      borderColor: "#3c2a4d",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});

const Values3 = [100,200,300,400,500,600,700,800,900,1000];

new Chart("lineChart3", {
  type: "line",
  data: {
    labels: Values3,
    datasets: [{ 
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "#3c2a4d",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});

/*-----------------------slider-----------------------------------------------------------------------*/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}