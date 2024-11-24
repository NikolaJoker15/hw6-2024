var video;

window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.getElementById('player1');
    video.autoplay = false;
    video.loop = false;
    
    // Update the volume info on page load
    updateVolumeInfo();
    console.log("Initial Volume:", video.volume);
});

// Play Button
document.getElementById('play').addEventListener('click', function() {
    console.log("Play Video");
    video.play();
    updateVolumeInfo(); // Ensure volume info is updated on play
    console.log("Volume after Play:", video.volume);
});

// Pause Button
document.getElementById('pause').addEventListener('click', function() {
    console.log("Pause Video");
    video.pause();
});

// Slow Down Button
document.getElementById('slower').addEventListener('click', function() {
    video.playbackRate -= 0.1;
    console.log(`New speed: ${video.playbackRate.toFixed(1)}`);
});

// Speed Up Button
document.getElementById('faster').addEventListener('click', function() {
    video.playbackRate += 0.1;
    console.log(`New speed: ${video.playbackRate.toFixed(1)}`);
});

// Skip Ahead Button
document.getElementById('skip').addEventListener('click', function() {
    if (video.currentTime + 10 > video.duration) {
        video.currentTime = 0;
    } else {
        video.currentTime += 10;
    }
    console.log(`Current time: ${video.currentTime.toFixed(2)}`);
});

// Mute/Unmute Button
document.getElementById('mute').addEventListener('click', function() {
    video.muted = !video.muted;
    this.textContent = video.muted ? 'Unmute' : 'Mute';
    updateVolumeInfo(); // Ensure volume info is updated when mute/unmute button is clicked
    console.log("Muted State:", video.muted);
    console.log("Volume after Mute Toggle:", video.volume);
});

// Volume Slider
document.getElementById('slider').addEventListener('input', function() {
    video.volume = this.value / 100;
    updateVolumeInfo();
    console.log("Volume Slider Change. New Volume:", video.volume);
});

// Old School Button
document.getElementById('vintage').addEventListener('click', function() {
    video.classList.add('oldSchool');
});

// Original Button
document.getElementById('orig').addEventListener('click', function() {
    video.classList.remove('oldSchool');
});

// Update the volume information on the page
function updateVolumeInfo() {
    let volumeText = `${Math.round(video.volume * 100)}%`;
    console.log("Updating Volume Info Display to:", volumeText);
    document.getElementById('volume').textContent = volumeText;
}
