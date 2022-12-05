//hamburger menu
const navToggler = document.querySelector('.hamburger-menu');
const closeNav = document.querySelector('.close');
const navList = document.querySelector('.nav-list');

navToggler.addEventListener('click', ()=>{
    if (navList.style.display == 'none') {
        navList.style.display = 'block';
        navToggler.style.display = 'none';
        closeNav.style.display = 'block';
    } else {
        navList.style.display = 'none';
        closeNav.style.display = 'none';
        navToggler.style.display = 'block';
    }
});

closeNav.addEventListener('click', ()=>{
    if(navList.style.display == 'block'){
       navList.style.display = 'none';
       navToggler.style.display = 'block';
       closeNav.style.display = 'none';
    } else{
        navList.style.display = 'block';
        closeNav.style.display = 'block';
        navToggler.style.display = 'none';
    }
})

//get user


const userContainer = document.getElementById("user");
const userInfo = document.getElementById("userInfo");
const showProfile = document.getElementById("openAccount");

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

showProfile.addEventListener('click', ()=>{
    
    userContainer.classList.toggle('show');
    
    })


