import React, {useState} from "react"

const QaidaTable = ()=>{
    const alif = "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms.mp3";
    const ba = "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_2.mp3";
    const ta = "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_3.mp3";
  
    const playAudio = (url)=>{
      const audioPlayer = new Audio(url)
      audioPlayer.volume = 0.1;
  
      isPlaying? audioPlayer.pause(): audioPlayer.play();
      setIsPlaying(!isPlaying)
      audioPlayer.addEventListener('ended', () => setIsPlaying(false));
    }
   // const [audio] = useState(new Audio(url));
   const [isPlaying,setIsPlaying] = useState(false);
    return (
        <div  className="container">
        <button className="button" onClick={()=>{
          playAudio(alif)
         }}>
        ا   
        </button>
        <button className="button" onClick={()=>{
          playAudio(ba)
         }}>
        ب 
        </button>
        <button className="button" onClick={()=>{
          playAudio(ta)
         }}>
        ت       
        </button>
      </div>
    )
}
export default QaidaTable;