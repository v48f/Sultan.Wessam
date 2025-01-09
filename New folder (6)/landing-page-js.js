document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const startOverlay = document.getElementById('startOverlay');
    const mainContent = document.getElementById('mainContent');
    const music = document.getElementById('backgroundMusic');
    const container = document.querySelector('.falling-images-container');

    // مصفوفة من روابط الصور المتساقطة
    const imageUrls = [
        '/api/placeholder/50/50',
        '/api/placeholder/60/60',
        '/api/placeholder/40/40'
    ];

    // تشغيل الموسيقى عند الضغط على زر البدء
    startButton.addEventListener('click', () => {
        startOverlay.style.display = 'none';
        mainContent.style.display = 'block';
        music.play();
        startFallingImages();
    });

    // دالة لإنشاء صورة متساقطة
    function createFallingImage() {
        const img = document.createElement('img');
        img.src = imageUrls[Math.floor(Math.random() * imageUrls.length)];
        img.className = 'falling-image';
        img.style.left = `${Math.random() * 100}%`;
        img.style.width = `${30 + Math.random() * 30}px`;
        img.style.animationDuration = `${5 + Math.random() * 5}s`;
        container.appendChild(img);

        // إزالة الصورة بعد انتهاء الحركة
        img.addEventListener('animationend', () => {
            img.remove();
        });
    }

    // دالة لبدء تساقط الصور
    function startFallingImages() {
        // إنشاء صورة جديدة كل 500 مللي ثانية
        setInterval(createFallingImage, 500);
    }

    // معالجة الموسيقى عند انتهائها
    music.addEventListener('ended', () => {
        music.currentTime = 0;
        music.play();
    });
});
