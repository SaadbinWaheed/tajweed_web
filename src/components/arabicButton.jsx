import React, { useState } from "react"

function ArabicButton(props) {
    const [isPlaying, setIsPlaying] = useState(false);

    let colClass = "col-2";
    if (props.isFirst) {
        colClass = colClass + " right-offset-1"
    }

    const playAudio = (url) => {
        const audioPlayer = new Audio(url)
        audioPlayer.volume = 1;

        isPlaying ? audioPlayer.pause() : audioPlayer.play();
        setIsPlaying(!isPlaying)
        audioPlayer.addEventListener('ended', () => setIsPlaying(false));
    }

    return (

        <div class={colClass}>
            <button className="button" onClick={() => {
                playAudio(props.link)
            }}>
                {props.letter}
            </button>
        </div>
    )
}

export default ArabicButton;