function changeImage(index) {
    const mainImg = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const images = [
        '/assets/img/Hilux-2023-0.png',
        '/assets/img/Hilux-2023-1.png',
        '/assets/img/Hilux-2023-2.png',
        '/assets/img/Hilux-2023-3.png'
    ];

    mainImg.src = images[index];
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

document.addEventListener('keydown', (e) => {
    const currentIndex = Array.from(document.querySelectorAll('.thumbnail'))
                            .findIndex(thumb => thumb.classList.contains('active'));
    
    if(e.key === 'ArrowLeft' && currentIndex > 0) {
        changeImage(currentIndex - 1);
    }
    if(e.key === 'ArrowRight' && currentIndex < 3) {
        changeImage(currentIndex + 1);
    }
});