import React, {useState} from "react"

const QaidaTable = ()=>{
    const alif = "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms.mp3";
    const ba = "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_2.mp3";
    const ta = "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_3.mp3";
  
    const playAudio = (url)=>{
      const audioPlayer = new Audio(url)
      audioPlayer.volume = 1;
  
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

        <button className="button" onClick={()=>{
          playAudio(alif)
         }}>
        ث  
        </button>

        <button className="button" onClick={()=>{
          playAudio(alif)
         }}>
        ج  
        </button>

        <button className="button" onClick={()=>{
          playAudio(alif)
         }}>
        ح  
        </button>

        <button className="button" onClick={()=>{
          playAudio(alif)
         }}>
        خ  
        </button>

        <button className="button" onClick={()=>{
          playAudio(alif)
         }}>
        د  
        </button>

        <button className="button" onClick={()=>{
          playAudio(alif)
         }}>
        ذ  
        </button>

        <button className="button" onClick={()=>{
          playAudio(alif)
         }}>
        ر  
        </button>

        <button className="button" onClick={()=>{
          playAudio(alif)
         }}>
        ز  
        </button>

        <button className="button" onClick={()=>{
          playAudio(alif)
         }}>
        س  
        </button>

        <button className="button" onClick={()=>{
          playAudio(alif)
         }}>
        ش  
        </button>

        <button className="button" onClick={()=>{
          playAudio(alif)
         }}>
        ص  
        </button>

        <button className="button" onClick={()=>{
          playAudio(alif)
         }}>
        ض  
        </button>

        <button className="button" onClick={()=>{
          playAudio(alif)
         }}>
        ط  
        </button>

        <button className="button" onClick={()=>{
          playAudio(alif)
         }}>
        ظ  
        </button>

        <button className="button" onClick={()=>{
          playAudio(alif)
         }}>
        ع
        </button>

        <button className="button" onClick={()=>{
          playAudio(alif)
         }}>
         غ
        </button>

        <button className="button" onClick={()=>{
          playAudio(alif)
         }}>
         ف
        </button>

        <button className="button" onClick={()=>{
          playAudio(alif)
         }}>
         ق
        </button>


        <button className="button" onClick={()=>{
          playAudio(alif)
         }}>
         ك
        </button>

        <button className="button" onClick={()=>{
          playAudio(alif)
         }}>
         ل
        </button>

        <button className="button" onClick={()=>{
          playAudio(alif)
         }}>
         م
        </button>

        <button className="button" onClick={()=>{
          playAudio(alif)
         }}>
         ن
        </button>

        <button className="button" onClick={()=>{
          playAudio(alif)
         }}>
         و
        </button>

        <button className="button" onClick={()=>{
          playAudio(alif)
         }}>
         ھ
        </button>

        <button className="button" onClick={()=>{
          playAudio(alif)
         }}>
         ء
        </button>

        <button className="button" onClick={()=>{
          playAudio(alif)
         }}>
         ي
        </button>

        <button className="button" onClick={()=>{
          playAudio(alif)
         }}>
         ے
        </button>



      










      </div>
    )
}
export default QaidaTable;