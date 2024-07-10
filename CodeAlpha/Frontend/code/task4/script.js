const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');

const songs = [
    {
        title: "Shree Hanuman Chalisa",
        artist: "Artist 1",
        src: "Shree_Hanuman_Chalisa.mp3"
    },
    {
        title: "Jai_Hanuman_Gosai",
        artist: "Artist 2",
        src: "Jai_Hanuman_Gosai.mp3"
    },
    {
        title: "Sankat_Mochan_Naam_Tiharo",
        artist: "Artist 3",
        src: "Sankat_Mochan_Naam_Tiharo.mp3"
    }
];

let currentSongIndex = 0;

function loadSong(song) {
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    audio.src = song.src;
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    }
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    if (!audio.paused) {
        audio.play();
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    if (!audio.paused) {
        audio.play();
    }
}

// Load the initial song
loadSong(songs[currentSongIndex]);
