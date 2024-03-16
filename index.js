function playAll(songNumber){
    let audioElement=document.getElementById("song");
    let platBtn=document.getElementById("play-pause");
    let songFileName="music/"+songNumber+".mp3";
    let currentRow=document.getElementById("song"+songNumber);

    if(audioElement.getAttribute("src")==songFileName && !audioElement.paused){
        audioElement.pause();
        platBtn.innerHTML='<img src="images/play-button.svg">';
        currentRow.classList.remove("highlight");
    }
    else{
        audioElement.setAttribute("src",songFileName);
        audioElement.play();
        platBtn.innerHTML='<img src="images/pause-button.svg">';
        currentRow.classList.add("highlight");
    }
}

function playaudio(){
    let audio=document.getElementById("song");
    let platBtn=document.getElementById("play-pause");
    if(audio.paused){
        audio.play();
        platBtn.innerHTML='<img src="images/pause-button.svg">';
    }
    else{
        audio.pause();
        platBtn.innerHTML='<img src="images/play-button.svg">';
    }
}