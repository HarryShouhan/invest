
// thems

const themeBtn= document.querySelector(".nav-theme-btn");

themeBtn.addEventListener('click', ()=>{
   document.body.classList.toggle('dark-theme')
   if(document.body.classList.contains('dark-theme')){
      themeBtn.innerHTML ='<i class="fa-solid fa-sun"></i>'

      localStorage.setItem('currentTheme', 'dark-theme')

   }else{
      themeBtn.innerHTML ='<i class="fa-solid fa-moon"></i>'

        localStorage.setItem('currentTheme', '')
   }
})


document.body.className = localStorage.getItem('currentTheme')
   if(document.body.classList.contains('dark-theme')){
      themeBtn.innerHTML ='<i class="fa-solid fa-sun"></i>'

      localStorage.setItem('currentTheme', 'dark-theme')

   }else{
      themeBtn.innerHTML ='<i class="fa-solid fa-moon"></i>'

        localStorage.setItem('currentTheme', '')
   }







// show/hide sidebar

const sidebar = document.querySelector(".sidebar");
const closeSidebarBtn = document.querySelector(".sidebar-close-btn");
const openSidebarBtn = document.querySelector(".nav-menu-btn")

openSidebarBtn.addEventListener('click',() => {
   sidebar.style.display = 'flex'
})

closeSidebarBtn.addEventListener('click',() => {
   sidebar.style.display = 'none'
})












const chart = document.querySelector(".chart").getContext('2d');

new Chart(chart,{
     type: 'line',
     data:{
        labels:["Jan", 'Feb', 'Mar', "Apr", 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        datasets:[
            {
                label: 'BTC',
                data:[29374, 64273, 52456, 67346, 46232, 65874, 64874, 57824, 45723, 76255, 64523, 96452,],
                borderColor:'red',
                borderWidth: 2,
            },
             {
                label: 'BTC',
                data:[58763, 32435, 65442, 43534, 63422, 76532, 85443, 64232, 73453, 43234, 84532, 9999],
                borderColor:'blue',
                borderWidth: 2,
             }
        ]
     },
     options:{
        risponsive: true
     }
})