const menu = document.querySelector('.menu');
const links = document.querySelectorAll('li');
const highlights = document.querySelector('.highlight');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
    if (this.dataset.open === 'close') {
        menu.style.clipPath = 'circle(100% at 50% 50%)';
        this.dataset.open = 'open';
    } else {
        menu.style.clipPath = 'circle(20px at calc(100vw - 5vw) 31px)';
        this.dataset.open = 'close';
        highlights.style = '';
    }
});

links.forEach(link => {
    link.addEventListener('pointerover', function () {
        const w = this.offsetWidth,
              h = this.offsetHeight,
              t = this.offsetTop;
        highlights.style.cssText = `transform: translateY(${t}px); 
        width: ${w}px; 
        height: ${h}px;
        opacity: 1;`

    });
    link.addEventListener('pointerout', function() {
        highlights.style.opacity = '0';
    })
});

