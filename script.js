//hamburger menu
const nav = document.getElementById('navBar');
const toggler = document.querySelector('.nav-toggler');

toggler.addEventListener('click', ()=>{
nav.classList.toggle('show');
toggler.classList.toggle('change');
userContainer.classList.remove('show');
})



//get user


const userContainer = document.getElementById("user");
const userInfo = document.getElementById("userInfo");
const showProfile = document.getElementById("openAccount");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");



function getUser(){
    fetch("https://jsonplaceholder.typicode.com/users", {method:"GET"},)
    .then(res=>{
       if(res.status !== 200){
        throw new Error();
       }
       return res.json();
    })
    .then(res=>{
        const fragment = document.createDocumentFragment();
        let user = res[0];
       

        const name = document.createElement('li');
        name.innerText = `${user.name}`;
        fragment.appendChild(name);

        const email = document.createElement('li');
        email.innerText = `email: ${user.email}`;
        fragment.appendChild(email);

        const address = document.createElement('li');
        address.innerText = `address: ${user.address.city}, ${user.address.street}, ${user.address.zipcode}`;
        fragment.appendChild(address);

        const phone = document.createElement('li');
        phone.innerText = `phone: ${user.phone}`;
        fragment.appendChild(phone);

        userInfo.appendChild(fragment);
    })
    .catch(err=>{
        const p = document.createElement('p');
        p.innerText = err.message;
        userContainer.appendChild(p);
    })
}

getUser();

showProfile.addEventListener("click", function () {
    modal.classList.add("open-modal");
  });
  closeBtn.addEventListener("click", function () {
    modal.classList.remove("open-modal");
  });



//slider

const prevBtn = document.getElementById("arrow-left");
const nextBtn = document.getElementById("arrow-right");
const content = document.getElementById("slider-content");
const wrapper = document.querySelector('.slider-wrapper');
let current = 0;

let data = [
    {   
        index:0,
        text:'Holiday Surprises',
        desc:'stay tuned for holiday news...',
        img: "./assets/covers/1.jpg"
    },
    {
        index:1,
        text:'Perflect time',
        desc:'to reflect and create',
        img: "./assets/covers/2.jpg"
    },
    {
        index:2,
        text:'Perfect Place',
        desc:'to learn and evolve',
        img: "./assets/covers/3.jpg"
    }
]


const createSliderContainer = () => {
    const container = document.createElement("div");
    container.classList.add("slider-container");
  
  
    return container;
  }
  
  const addImg = (obj)=>{
     const imgDiv = document.createElement('div');
     imgDiv.style.backgroundImage = `url(${obj.img})`;
     imgDiv.classList.add('bg');
     console.log(imgDiv);
     console.log(obj.img);
       
     return imgDiv;
  }

  const addBtn = ()=>{
    const sliderBtn = document.createElement('button');
    sliderBtn.innerText = "Find out More";
    sliderBtn.classList.add("slider-btn");
    return sliderBtn;
  }
  
  
  const addText = (obj)=>{
  const text = document.createElement('h2');
 
  text.innerText = obj.text;
  text.classList.add("slider-title");
  return text;
  }

  const addDesc = (obj)=>{
    const desc = document.createElement('p');
   
    desc.innerText = obj.desc;
    desc.classList.add("slider-desc");
    return desc;
    }
  
  const addSliderNav = ()=> {
      const dots = document.createElement("div");
      dots.classList.add("dots");
    
      data.forEach((obj) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.innerHTML = '<i class="fa-solid fa-circle"></i>';
        dots.appendChild(dot);
      });
  
     
    
      return dots;
  }
  
  const dotsNav = ()=>{
      const dotsArr = Array.from(document.querySelectorAll('.fa-circle'));
      dotsArr.forEach((dot, index)=>{
          if(index === current){
              dot.style.color = 'white';
          }
              dot.addEventListener('click', ()=>{
                  current = index;
                  slide();
              })
         
      })
     
  }
  
  const slide = () => {
      content.innerHTML = " ";
      const slide = createSliderContainer();
      const bgDiv = addImg(data[current]);
      const text = addText(data[current]);
      const desc = addDesc(data[current]);
      const btn = addBtn();
      const dots = addSliderNav();

      const sliderText = document.createElement('div');
      sliderText.appendChild(text);
      sliderText.appendChild(desc);
      sliderText.appendChild(btn);
      sliderText.classList.add("slider-text");
      
  
      bgDiv.appendChild(sliderText);
      slide.appendChild(bgDiv);
      content.appendChild(slide);
      content.appendChild(dots);
      dotsNav();
    }
  
    nextBtn.addEventListener('click', ()=>{
      if (current === data.length - 1) {
          current = 0;
          slide();
          return;
        }
        current++;
        slide();
        dotsNav();
    });
  
    prevBtn.addEventListener('click', ()=>{
      if (current === 0) {
          current = data.length - 1;
          slide();
          return;
        }
        current--;
        slide();
        dotsNav();
    });
  
    slide();
    dotsNav();



  
//menu
const menu = [
    {
      id: 1,
      category: "holiday",
      price: 15.99,
      img: "./assets/holidays/1.jpg",
    },
    {
      id: 2,
      category: "holiday",
      price: 13.99,
      img: "./assets/holidays/2.jpg",
    },
    {
      id: 3,
      category: "holiday",
      price: 6.99,
      img: "./assets/holidays/3.jpg",
    },
    {
      id: 4,
      category: "holiday",
      price: 20.99,
      img: "./assets/holidays/4.jpg",
    },
    {
      id: 5,
      category: "dish",
      price: 8.99,
      img: "./assets/dishes/1.jpg",
    },
    {
      id: 6,
      category: "dish",
      price: 12.99,
      img: "./assets/dishes/2.jpg",
    },
    {
      id: 7,
      category: "dish",
      price: 16.99,
      img: "./assets/dishes/3.jpg",
    },
    {
        id: 8,
        category: "dish",
        price: 16.99,
        img: "./assets/dishes/4.jpg",
      },
      {
        id: 9,
        category: "decor",
        price: 16.99,
        img: "./assets/decor/1.jpg",
      },
      {
        id: 10,
        category: "decor",
        price: 16.99,
        img: "./assets/decor/2.jpg",
      },
      {
        id: 11,
        category: "decor",
        price: 15.99,
        img: "./assets/decor/3.jpg",
      },
      {
        id: 12,
        category: "decor",
        price: 13.99,
        img: "./assets/decor/4.jpg",
      },
      
  ];
  

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {

    return `<article class="menu-item">
          <img src=${item.img} class="photo" />
          <h4 class="price">${item.price} GEL</h4>
         
        </article>`;
  });
  displayMenu = displayMenu.join("");


  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}


//form validation

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
e.preventDefault();
let errors = {};
const name = document.getElementById("name").value;
if (name == "") {
  errors.name =
    "Name field must not be empty";
}

const email = document.getElementById("email").value;
if (email == "") {
  errors.email =
    "Email field can not be empty";
}


const subject = document.getElementById("subject").value;
if (!subject) {
  errors.subject =
    "Please specify the subject of your query";
}

const message = document.getElementById("message").value;
if (!message) {
  errors.message =
    "This field should not be empty";
}

console.log(errors);

document.querySelectorAll(".error-text").forEach((item) => {
  item.innerText = " ";
});

for (let key in errors) {
  let spanText = document.getElementById("error_" + key);

  if (spanText) {
    spanText.innerText = errors[key];
  }
}

if (Object.keys(errors).length == 0) {
   form.submit();
}
});
