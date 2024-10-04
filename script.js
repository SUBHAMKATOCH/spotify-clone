
let songIndex = 0;
let audioElement = new Audio('songs/0.mp3'); 
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = document.getElementById('songItem');

// List of songs
let songs = [
    { songname: "ANTIDOTE", filepath: "songs/0.mp3", coverpath: "artworks-CoiqDiDaMA79-0-t240x240.jpg" },
    { songname: "LEGION", filepath: 'songs/2.mp3', coverpath: "artworks/CoiqDiDaMA79-0-t240x240.jpg" },
    { songname: "CARTEL", filepath: 'songs/5.mp3', coverpath: "artworks/CoiqDiDaMA79-0-t240x240.jpg" },
    { songname: "THEY MADE", filepath: 'songs/4.mp3', coverpath: "artworks/CoiqDiDaMA79-0-t240x240.jpg" },
    { songname: "RICH KID", filepath: 'songs/5.mp3', coverpath: "artworks/CoiqDiDaMA79-0-t240x240.jpg" },
    { songname: "ARTIST NAME", filepath: 'songs/6.mp3', coverpath: "artworks/CoiqDiDaMA79-0-t240x240.jpg" },
    { songname: "SAFETY DANCE", filepath: 'songs/7.mp3', coverpath: "artworks/CoiqDiDaMA79-0-t240x240.jpg" },
    { songname: "BACK IT UP", filepath: 'songs/8.mp3', coverpath: "artworks/CoiqDiDaMA79-0-t240x240.jpg" }
];

// Play/Pause button functionality
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.add('playing'); // Show it's playing
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterplay.classList.remove('playing');
        gif.style.opacity = 0;
    }
});


// Update progress bar as audio plays
audioElement.addEventListener('timeupdate', () => {
    if (audioElement.duration) {
        const progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
        myprogressbar.value = progress;
    }
});

// Seek audio when progress bar is changed
myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
});

// Check if audio is playing
audioElement.addEventListener('play', () => {
    console.log('Audio is playing');
});

// Handle audio errors
audioElement.addEventListener('error', (e) => {
    console.error('Error occurred during audio playback', e);
});

// Function to reset play buttons
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

// Add event listeners for each song item
Array.from(document.getElementsByClassName('songitemplay')).forEach((element, index) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
       
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex+1].filepath; // Set the source to the correct file path
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    });
});


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


