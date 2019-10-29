const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//this is to update the nav
// let link1 =document.querySelector('a');
// link1.textContent="Services";

let links=document.querySelectorAll('a')
links[0].setAttribute('class', '.nav-item-1')
links[0].innerText="Service"
links[1].setAttribute('class', '.nav-item-2')
links[1].innerText="Product"
links[2].setAttribute('class', '.nav-item-3')
links[2].innerText="Vision"
links[3].setAttribute('class', '.nav-item-4')
links[3].innerText="Features"
links[4].setAttribute('class', '.nav-item-5')
links[4].innerText="About"
links[5].setAttribute('class', '.nav-item-6')
links[5].innerText="Contact"

links.forEach(link => link.style.color='green')

// apprend and prepend 2 items
const newLink1 = document.createElement('a')
const newNav = document.querySelector('nav')
newLink1.textContent ='Disclaimer'
newLink1.href ='#'
newNav.append(newLink1)
newLink1.style.color = 'green'

const newLink2 = document.createElement('a')
newLink2.textContent = 'Support'
newLink2.href = '#'
newNav.prepend(newLink2)
newLink2.style.color = 'green'

//CTA update
let newDom = document.querySelector('.cta .cta-text h1')
newDom.innerHTML='DOM<br /> IS <br /> Awesome'

let topLogo = document.querySelector('#cta-img')
topLogo.setAttribute('src', siteContent["cta"]["img-src"])

let topButton = document.querySelector('button')
topButton.innerText='Get Started'

//Main Content
 let mainContent = document.querySelectorAll('.text-content')
 mainContent[0].querySelector('h4').textContent = siteContent['main-content']['features-h4']
 mainContent[0].querySelector('p').textContent = siteContent['main-content']['features-content']
 mainContent[1].querySelector('h4').textContent = siteContent['main-content']['about-h4']
 mainContent[1].querySelector('p').textContent = siteContent['main-content']['about-content']
 mainContent[2].querySelector('h4').textContent = siteContent['main-content']['services-h4']
 mainContent[2].querySelector('p').textContent = siteContent['main-content']['services-content']
 mainContent[3].querySelector('h4').textContent = siteContent['main-content']['product-h4']
 mainContent[3].querySelector('p').textContent = siteContent['main-content']['product-content']
 mainContent[4].querySelector('h4').textContent = siteContent['main-content']['features-h4']
 mainContent[4].querySelector('p').textContent = siteContent['main-content']['vision-content']

 let midLogo=document.querySelector("#middle-img")
 midLogo.setAttribute('src', siteContent["main-content"]["middle-img-src"])

 //Contact
 let mainContact=document.querySelector('.contact')
 mainContact.getElementsByTagName('h4')[0].textContent = siteContent["contact"]["contact-h4"]
 mainContact.getElementsByTagName('p')[0].textContent = siteContent["contact"]["address"]
 mainContact.getElementsByTagName('p')[1].textContent = siteContent["contact"]["phone"]
 mainContact.getElementsByTagName('p')[2].textContent = siteContent["contact"]["email"]

 //YAY FOOTER at LAST!
 let footer=document.querySelector('footer')
 footer.textContent="Copyright Great Idea! 2018"