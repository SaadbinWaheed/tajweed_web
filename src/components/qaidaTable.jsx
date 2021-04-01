import React, { useState } from "react"

const QaidaTable = () => {
  const alif = "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms.mp3";
  const ba = "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_2.mp3";
  const ta = "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_3.mp3";

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
            playAudio(alif)
          }}>
            ا
        </button>
        </div>
        <div class="col-sm">


          <button className="button" onClick={() => {
            playAudio(ba)
          }}>
            ب
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(ta)
          }}>
            ت
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(alif)
          }}>
            ث
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(alif)
          }}>
            ج
        </button>
        </div>
      </div>
      <div class="row flex-row-reverse ">
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(alif)
          }}>
            ح
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(alif)
          }}>
            خ
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(alif)
          }}>
            د
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(alif)
          }}>
            ذ
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(alif)
          }}>
            ر
        </button>
        </div>
      </div>
      <div class="row flex-row-reverse">
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(alif)
          }}>
            ز
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(alif)
          }}>
            س
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(alif)
          }}>
            ش
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(alif)
          }}>
            ص
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(alif)
          }}>
            ض
        </button>
        </div>
      </div>
      <div class="row flex-row-reverse">
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(alif)
          }}>
            ط
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(alif)
          }}>
            ظ
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(alif)
          }}>
            ع
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(alif)
          }}>
            غ
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(alif)
          }}>
            ف
        </button>
        </div>
      </div>
      <div class="row flex-row-reverse">
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(alif)
          }}>
            ق
        </button>
        </div>
        <div class="col-sm">

          <button className="button" onClick={() => {
            playAudio(alif)
          }}>
            ك
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(alif)
          }}>
            ل
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(alif)
          }}>
            م
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(alif)
          }}>
            ن
        </button>
        </div>
      </div>
      <div class="row flex-row-reverse">
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(alif)
          }}>
            و
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(alif)
          }}>
            ھ
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(alif)
          }}>
            ء
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(alif)
          }}>
            ي
        </button>
        </div>
        <div class="col-sm">
          <button className="button" onClick={() => {
            playAudio(alif)
          }}>
            ے
        </button>
        </div>
        <div class="col-sm"></div>
      </div>

    </div >
  )
}
export default QaidaTable;