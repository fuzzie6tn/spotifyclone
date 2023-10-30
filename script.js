console.log("Welcome to Spotify!");
//initializing variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs= [
    {songName: "Die for you", filePath:"song/1.mp3", cover:"covers/1.jpg"},
    {songName: "Blinding Lights", filePath:"song/2.mp3", cover:"covers/2.jpg"},
    {songName: "Try me", filePath:"song/3.mp3", cover:"covers/3.jpg"},
    {songName: "Call out my name", filePath:"song/4.mp3", cover:"covers/4.jpg"},
    {songName: "Save your tears", filePath:"song/5.mp3", cover:"covers/5.jpg"},
    {songName: "Prey", filePath:"song/6.mp3", cover:"covers/6.jpg"},
    {songName: "Hollywood's Bleeding", filePath:"song/7.mp3", cover:"covers/7.jpg"},
    {songName: "Enemy", filePath:"song/8.mp3", cover:"covers/8.jpg"},
    {songName: "Believer", filePath:"song/9.mp3", cover:"covers/9.jpg"},
]

// audioElementplay();
// handle play/pause click
    masterPlay.addEventListener('click', ()=>{
        if (audioElement.paused || audioElement.audioTime<=0){
            audioElement.play();
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
            gif.style.opacity = 1;
        }else{
            audioElement.pause();
            masterPlay.classList.remove('fa-pause');
            masterPlay.classList.add('fa-play');
            gif.style.opacity = 0;
        }
    })
    //Listen to Events

    audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');

    //update seek bar
        progress =  parseInt((audioElement.currentTime/audioElement.duration)*100);
        console.log(progress);
        myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime= myProgressBar.value*audioElement.duration/100;
})

songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementByTagName("img")[0].src = songs[i].coverPath;
    element.getElementByClassName("img")[0].src = songs[i].coverPath;
})