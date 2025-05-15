if (typeof window.CSS.registerProperty === 'function') {
    console.log('CSS.registerProperty supported 🎉')
    document.body.style.setProperty('--supported', 1);
    document.body.classList.add('registerProperty-supported')
} else if (typeof CSS !== 'undefined' && typeof CSS.supports === 'function' && CSS.supports('--fake-var', 0)) {
    console.log('CSS.registerProperty not supported, but CSS.supports is supported 🎉')
    document.body.style.setProperty('--supported', 1);
    document.body.classList.add('registerProperty-supported')
} else {
    console.log('CSS.registerProperty and CSS.supports not supported ❌')
    document.body.style.setProperty('--not-supported', 1);
    document.body.classList.add('registerProperty-not-supported')
}

var button = document.getElementById('button');

button.addEventListener('click', function() {
    window.location.href = '/portfolio/';
});