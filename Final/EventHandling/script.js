document.querySelectorAll('.thumb').forEach(thumb => {
    thumb.addEventListener('click', function() {
        let mainImage = document.getElementById('mainImage');
        let Tempsrc = mainImage.src;
        mainImage.src = this.src;
        this.src = Tempsrc;
    });
});