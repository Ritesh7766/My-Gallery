window.addEventListener('resize', function() {
    let gallery = this.document.getElementsByClassName('gallery')[0]
    if (window.screen.availWidth > gallery.offsetWidth) {
        Array.from(this.document.getElementsByClassName('post')).forEach(image => {
            image.classList.toggle('initial-width');
        });
    }
    else if (window.screen.availWidth <= gallery.offsetWidth) {
        Array.from(this.document.getElementsByClassName('post')).forEach(image => {
            image.style.width = Math.round(image.offsetWidth - image.offsetWidth * 0.1).toString() + 'px';
        });
    }
});