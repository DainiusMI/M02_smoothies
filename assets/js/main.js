
const hamburger = document.querySelector( 'header > .hamburger-menu' );

const headerRight = document.querySelector( ' .header-right' );


console.log(headerRight);
console.log(hamburger);


hamburger.addEventListener('click', () => 
    {
    headerRight.classList.toggle('menu-visible');
    }
);
