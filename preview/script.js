const albumCover = document.getElementById('albumCover');
const audioPlayer = document.getElementById('audioPlayer');
const prevButton = document.getElementById('prevButton');
const playButton = document.getElementById('playButton');
const nextButton = document.getElementById('nextButton');
const bgContainer = document.getElementById('bg-container'); // 获取背景图片容器元素

// 这里模拟一个音乐列表以及对应的封面图片列表，你需要替换为真实的音乐文件路径和封面图片路径数组
const musicList = [
    {
        music: 'Deister Orchestra - groove 33edo.mp3',
        cover: '../image/5.png',
    },
    {
        music: '次元晴天 - 不 客 觀 夢 境 記 錄 師.mp3',
        cover: '../image/2.png'
    },
    {
        music: '次元晴天,Sufflection - 濫 好 人.mp3',
        cover: '../image/3.png'
    }
];
let currentIndex = 0;

// 播放按钮点击事件处理
playButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = '暂停';
    } else {
        audioPlayer.pause();
        playButton.textContent = '播放';
    }
});

// 上一首按钮点击事件处理
prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = musicList.length - 1;
    }
    updateMusicAndCover();
});

// 下一首按钮点击事件处理
nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= musicList.length) {
        currentIndex = 0;
    }
    updateMusicAndCover();
});

function updateMusicAndCover() {
    const currentMusic = musicList[currentIndex];
    audioPlayer.src = currentMusic.music;
    albumCover.src = currentMusic.cover;
    bgContainer.style.backgroundImage = `url(${currentMusic.cover})`; // 设置背景图片容器的背景图片
    bgContainer.style.backgroundSize = 'cover'; // 背景图片铺满背景容器
    bgContainer.style.backgroundPosition = 'center'; // 背景图片居中显示
    audioPlayer.play();
}

// 页面加载时设置初始音乐和封面
window.onload = () => {
    const firstMusic = musicList[0];
    audioPlayer.src = firstMusic.music;
    albumCover.src = firstMusic.cover;
    bgContainer.style.backgroundImage = `url(${firstMusic.cover})`; // 设置初始背景图片
};


const menuButton = document.querySelector('.menu');
const navList = document.querySelector('header nav ul');

menuButton.addEventListener('click', function () {
    console.log('点击事件触发了'); // 添加这行代码，查看点击时控制台是否有输出，验证事件监听器是否生效
    navList.classList.toggle('active');
    menuButton.classList.toggle('active');
});