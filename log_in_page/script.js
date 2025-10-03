function loadLoginHTML(){
    const contentDiv = document.getElementById('content-div');
    contentDiv.innerHTML = "";
    const buttonsDiv = document.createElement('div');
    buttonsDiv.id = 'buttons-div';
    contentDiv.appendChild(buttonsDiv);

    const loginPageBtn = document.createElement('button');
    buttonsDiv.appendChild(loginPageBtn);
    loginPageBtn.classList.add('selected-btn');
    const loginIcon = document.createElement('img');
    loginPageBtn.textContent = "Login";
    loginPageBtn.prepend(loginIcon);
    loginIcon.src = 'icons/login.svg';


    const signUpBtn = document.createElement('button');
    buttonsDiv.appendChild(signUpBtn);
    const signUpIcon = document.createElement('img');
    signUpBtn.textContent = "Sign Up";
    signUpBtn.prepend(signUpIcon);
    signUpIcon.src = 'icons/sign-up.svg';

    const loginDiv = document.createElement('div');
    contentDiv.appendChild(loginDiv);
    loginDiv.id = 'login-div';
    // loginDiv.style.paddingBottom = "275px";

    const h1 = document.createElement('h1');
    loginDiv.appendChild(h1);
    h1.textContent = "Welcome back";

    const pSubtitle = document.createElement('p');
    loginDiv.appendChild(pSubtitle);
    pSubtitle.classList.add('subtitle');
    pSubtitle.textContent = 'Welcome! Please enter your details.'

    const inputDiv = document.createElement('div');
    loginDiv.appendChild(inputDiv);

    const userInput = document.createElement('input');
    inputDiv.appendChild(userInput);
    userInput.type = 'text';
    userInput.placeholder = 'Username';

    const passInput = document.createElement('input');
    inputDiv.appendChild(passInput);
    passInput.type = 'text';
    passInput.placeholder = 'Password'

    const loginBtn = document.createElement('button');
    loginDiv.appendChild(loginBtn);
    loginBtn.id = 'login-btn';
    loginBtn.textContent = 'Log In';

    const divider = document.createElement('p');
    loginDiv.appendChild(divider);
    divider.classList.add('divider');
    divider.textContent = 'OR';

    const goolgeBtn = document.createElement('button');
    goolgeBtn.id = 'google-btn';
    loginDiv.appendChild(goolgeBtn);
    goolgeBtn.textContent = 'Continue with Google';
    const googleIcon = document.createElement('img');
    goolgeBtn.prepend(googleIcon);
    googleIcon.src = 'icons/google.svg';
    googleIcon.alt = 'Google Icon';
    
    const noAccParagraph = document.createElement('p');
    contentDiv.appendChild(noAccParagraph);
    noAccParagraph.id = 'no-acc-yet';
    noAccParagraph.textContent = "Don't have an account yet? "
    const noAccLink = document.createElement('a');
    noAccParagraph.appendChild(noAccLink);
    noAccLink.href = '#';
    noAccLink.textContent = 'Sign up';

    const imgDiv = document.getElementById('img-div');
    imgDiv.innerHTML = "";
    const testimonial = document.createElement('div');
    imgDiv.appendChild(testimonial);
    testimonial.classList.add('testimonial');

    const quote = document.createElement('p')
    testimonial.appendChild(quote);
    quote.classList.add('quote');
    quote.textContent = '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam velit ipsam corrupti, commodi earum modi aliquid architecto voluptate nisi eveniet eius tenetur quasi aperiam facere quas qui, ipsa id quod?"';

    const author = document.createElement('p')
    testimonial.appendChild(author);
    author.classList.add('author');
    author.textContent = 'Lorem, ipsum.';

    const carouselDiv = document.createElement('div');
    testimonial.appendChild(carouselDiv);
    carouselDiv.classList.add('carousel-div')

    const carouselBtn1 = document.createElement('button');
    carouselBtn1.setAttribute('data-index', "0");
    const carouselBtn2 = document.createElement('button');
    carouselBtn2.setAttribute('data-index', "1");
    const carouselBtn3 = document.createElement('button');
    carouselBtn3.setAttribute('data-index', "2");
    carouselDiv.appendChild(carouselBtn1);
    carouselDiv.appendChild(carouselBtn2);
    carouselDiv.appendChild(carouselBtn3);

    const bgImg = document.createElement('img');
    imgDiv.appendChild(bgImg);
    bgImg.src = 'house.jpg';

    startCarousel(quote, author);

    // carouselBtn2.addEventListener('click', () => startCarousel(quote, author, 2));
    noAccLink.addEventListener('click', () => loadSignUpHTML())
    loginPageBtn.addEventListener('click', () => loadLoginHTML());
    signUpBtn.addEventListener('click', () => loadSignUpHTML());
}

function loadSignUpHTML(){
    const contentDiv = document.getElementById('content-div');
    contentDiv.innerHTML = "";
    const buttonsDiv = document.createElement('div');
    buttonsDiv.id = 'buttons-div';
    contentDiv.appendChild(buttonsDiv);

    const loginPageBtn = document.createElement('button');
    buttonsDiv.appendChild(loginPageBtn);
    const loginIcon = document.createElement('img');
    loginPageBtn.textContent = "Login";
    loginPageBtn.prepend(loginIcon);
    loginIcon.src = 'icons/login.svg';

    const signUpPageBtn = document.createElement('button');
    buttonsDiv.appendChild(signUpPageBtn);
    signUpPageBtn.classList.add('selected-btn');
    const signUpIcon = document.createElement('img');
    signUpPageBtn.textContent = "Sign Up";
    signUpPageBtn.prepend(signUpIcon);
    signUpIcon.src = 'icons/sign-up.svg';
    
    const loginDiv = document.createElement('div');
    contentDiv.appendChild(loginDiv);
    loginDiv.id = 'login-div';
    // loginDiv.style.paddingBottom = "170px";

    const h1 = document.createElement('h1');
    loginDiv.appendChild(h1);
    h1.textContent = "Sign Up";

    const pSubtitle = document.createElement('p');
    loginDiv.appendChild(pSubtitle);
    pSubtitle.classList.add('subtitle');
    pSubtitle.textContent = 'Join our community';

    const inputDiv = document.createElement('div');
    loginDiv.appendChild(inputDiv);

    const nameInput = document.createElement('input');
    inputDiv.appendChild(nameInput);
    nameInput.type = 'text';
    nameInput.placeholder = 'Full name';

    const userInput = document.createElement('input');
    inputDiv.appendChild(userInput);
    userInput.type = 'text';
    userInput.placeholder = 'Username';

    const emailInput = document.createElement('input');
    inputDiv.appendChild(emailInput);
    emailInput.type = 'text';
    emailInput.placeholder = 'Email';

    const passInput = document.createElement('input');
    inputDiv.appendChild(passInput);
    passInput.type = 'text';
    passInput.placeholder = 'Password';

    const signUpBtn = document.createElement('button');
    loginDiv.appendChild(signUpBtn);
    signUpBtn.id = 'login-btn';
    signUpBtn.textContent = 'Sign Up';

    const divider = document.createElement('p');
    loginDiv.appendChild(divider);
    divider.classList.add('divider');
    divider.textContent = 'OR';

    const goolgeBtn = document.createElement('button');
    goolgeBtn.id = 'google-btn';
    loginDiv.appendChild(goolgeBtn);
    goolgeBtn.textContent = 'Continue with Google';
    const googleIcon = document.createElement('img');
    goolgeBtn.prepend(googleIcon);
    googleIcon.src = 'icons/google.svg';
    googleIcon.alt = 'Google Icon';

    const imgDiv = document.getElementById('img-div');
    imgDiv.innerHTML = "";
    const testimonial = document.createElement('div');
    imgDiv.appendChild(testimonial);
    testimonial.classList.add('testimonial');

    const quote = document.createElement('p')
    testimonial.appendChild(quote);
    quote.classList.add('quote');
    quote.textContent = '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam velit ipsam corrupti, commodi earum modi aliquid architecto voluptate nisi eveniet eius tenetur quasi aperiam facere quas qui, ipsa id quod?"';

    const author = document.createElement('p')
    testimonial.appendChild(author);
    author.classList.add('author');
    author.textContent = 'Lorem, ipsum.';

    const carouselDiv = document.createElement('div');
    testimonial.appendChild(carouselDiv);
    carouselDiv.classList.add('carousel-div')

     const carouselBtn1 = document.createElement('button');
    carouselBtn1.setAttribute('data-index', "0");
    const carouselBtn2 = document.createElement('button');
    carouselBtn2.setAttribute('data-index', "1");
    const carouselBtn3 = document.createElement('button');
    carouselBtn3.setAttribute('data-index', "2");
    carouselDiv.appendChild(carouselBtn1);
    carouselDiv.appendChild(carouselBtn2);
    carouselDiv.appendChild(carouselBtn3);

    const bgImg = document.createElement('img');
    imgDiv.appendChild(bgImg);
    bgImg.src = 'house2.jpg';

    startCarousel(quote, author);

    signUpBtn.addEventListener('click', () => loadLoginHTML())
    loginPageBtn.addEventListener('click', () => loadLoginHTML());
    signUpPageBtn.addEventListener('click', () => loadSignUpHTML());
}

document.addEventListener("DOMContentLoaded", () => loadLoginHTML());

function startCarousel(quoteDiv, authorDiv, indexValue = 0) {
    
    const content = [
    { quote: `“This app makes reporting issues so simple. I submitted a request and got a response within hours. It’s reassuring to know things won’t be ignored anymore.`, author: '- James Carter, Tenant' },
    { quote: `“Tracking maintenance requests used to be chaotic. Now everything’s organized, transparent, and easy to follow. It’s made my job smoother and tenants happier.”`, author: `- Linda Nguyen, Property Manager` },
    { quote: `“I finally have visibility into what’s happening across my properties. The tracker helps me prioritize repairs and keep everyone informed. It’s a game changer for property management.”`, author: '- Robert Evans, Landlord' }
  ];

  const buttons = document.querySelectorAll('.carousel-div button');

  let index = indexValue;
  quoteDiv.textContent = content[index].quote;
  authorDiv.textContent = content[index].author;

  buttons.forEach((button) => {
        const buttonIndex = Number(button.dataset.index);
        buttonIndex === index ? button.classList.add('active-btn') : button.classList.remove('active-btn'); 
    });


  setInterval(() => {
    if (index >= content.length) {
      index = 0;
    }

    const element = content[index];
    quoteDiv.textContent = element.quote;
    authorDiv.textContent = element.author;

    buttons.forEach((button) => {
        const buttonIndex = Number(button.dataset.index);
        buttonIndex === index ? button.classList.add('active-btn') : button.classList.remove('active-btn'); 
    });

    
    index++;
  }, 3000);
}
