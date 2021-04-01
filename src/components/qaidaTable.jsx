import React, { useState } from "react"

const QaidaTable = () => {
  const alif = "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms.mp3";
  const ba = "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_2.mp3";
  const ta = "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_3.mp3";
  const audioLinks = [alif,ba,ta,
  "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_4.mp3",
  "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_5.mp3",
  "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_6.mp3",
  "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_7.mp3",
  "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_8.mp3",
  "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_9.mp3",
  "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_10.mp3",
  "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_11.mp3",
  "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_11b.mp3",
  "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_12.mp3",
  "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_13.mp3",
  "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_14.mp3",
  "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_15.mp3",
  "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_16.mp3",
  "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_17.mp3",
  "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_18.mp3",
  "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_19.mp3",
  "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_20.mp3",
  "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_21.mp3",
  "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_22.mp3",
  "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_23.mp3",
  "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_24.mp3",
  "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_25.mp3",
  "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_26.mp3",
  "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_27.mp3",
  "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_28.mp3",
  "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_29.mp3",
  ]
  const playAudio = (url) => {
    const audioPlayer = new Audio(url)
    audioPlayer.volume = 1;

    isPlaying ? audioPlayer.pause() : audioPlayer.play();
    setIsPlaying(!isPlaying)
    audioPlayer.addEventListener('ended', () => setIsPlaying(false));
  }
  // const [audio] = useState(new Audio(url));
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="container">
      <div class="row flex-row-reverse">
        <div class="col-sm ">

          <button className="button" onClick={() => {
            playAudio(audioLinks[0])
          }}>
            ا
        </button>
        </div>
        <div class="col-sm">


          <button className="button" onClick={() => {
            playAudio(audioLinks[1])
          }}>
            ب
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(audioLinks[2])
          }}>
            ت
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(audioLinks[3])
          }}>
            ث
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(audioLinks[4])
          }}>
            ج
        </button>
        </div>
      </div>
      <div class="row flex-row-reverse ">
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(audioLinks[5])
          }}>
            ح
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(audioLinks[6])
          }}>
            خ
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(audioLinks[7])
          }}>
            د
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(audioLinks[8])
          }}>
            ذ
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(audioLinks[9])
          }}>
            ر
        </button>
        </div>
      </div>
      <div class="row flex-row-reverse">
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(audioLinks[10])
          }}>
            ز
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(audioLinks[11])
          }}>
            س
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(audioLinks[12])
          }}>
            ش
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(audioLinks[13])
          }}>
            ص
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(audioLinks[14])
          }}>
            ض
        </button>
        </div>
      </div>
      <div class="row flex-row-reverse">
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(audioLinks[15])
          }}>
            ط
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(audioLinks[16])
          }}>
            ظ
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(audioLinks[17])
          }}>
            ع
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(audioLinks[18])
          }}>
            غ
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(audioLinks[19])
          }}>
            ف
        </button>
        </div>
      </div>
      <div class="row flex-row-reverse">
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(audioLinks[20])
          }}>
            ق
        </button>
        </div>
        <div class="col-sm">

          <button className="button" onClick={() => {
            playAudio(audioLinks[21])
          }}>
            ك
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(audioLinks[22])
          }}>
            ل
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(audioLinks[23])
          }}>
            م
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(audioLinks[24])
          }}>
            ن
        </button>
        </div>
      </div>
      <div class="row flex-row-reverse">
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(audioLinks[26])
          }}>
            و
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(audioLinks[25])
          }}>
            ھ
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
           // playAudio(audioLinks[27])
          }}>
            ء
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(audioLinks[27])
          }}>
            ي
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(audioLinks[27])
          }}>
            ے
        </button>
        </div>
      </div>

    </div >
  )
}
export default QaidaTable;