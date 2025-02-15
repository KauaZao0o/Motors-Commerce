function changeImage(index) {
    const mainImg = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const images = [
        '../img/Civic-2021/Civic-2021-0.png',
        '../img/Civic-2021/Civic-2021-1.png',
        '../img/Civic-2021/Civic-2021-2.png',
        '../img/Civic-2021/Civic-2021-3.png'
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