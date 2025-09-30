function loadLoginHTML(){
        const contentDiv = document.getElementById('content-div');
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
        loginDiv.appendChild(noAccParagraph);
        noAccParagraph.id = 'no-acc-yet';
        noAccParagraph.textContent = "Don't have an account yet? "
        const noAccLink = document.createElement('a');
        noAccParagraph.appendChild(noAccLink);
        noAccLink.href = '';
        noAccLink.textContent = 'Sign up';

        const imgDiv = document.getElementById('img-div');
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
        const carouselBtn2 = document.createElement('button');
        const carouselBtn3 = document.createElement('button');
        carouselDiv.appendChild(carouselBtn1);
        carouselDiv.appendChild(carouselBtn2);
        carouselDiv.appendChild(carouselBtn3);

        const bgImg = document.createElement('img');
        imgDiv.appendChild(bgImg);
        bgImg.src = 'house.jpg';

}

document.addEventListener("DOMContentLoaded", () => loadLoginHTML());