import React from "react"
import Row from "./row";
import {page1Links} from "../audios/page_1_links"

const QaidaTable = () => {
  // const audioLinks = [alif, ba, ta,
  //   "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_4.mp3",
  //   "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_5.mp3",
  //   "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_6.mp3",
  //   "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_7.mp3",
  //   "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_8.mp3",
  //   "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_9.mp3",
  //   "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_10.mp3",
  //   "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_11.mp3",
  //   "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_11b.mp3",
  //   "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_12.mp3",
  //   "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_13.mp3",
  //   "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_14.mp3",
  //   "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_15.mp3",
  //   "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_16.mp3",
  //   "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_17.mp3",
  //   "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_18.mp3",
  //   "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_19.mp3",
  //   "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_20.mp3",
  //   "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_21.mp3",
  //   "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_22.mp3",
  //   "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_23.mp3",
  //   "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_24.mp3",
  //   "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_26.mp3",
  //   "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_25.mp3",
  //   "",
  //   "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_27.mp3",
  //   "https://quranforkids.org/wp-content/uploads/2013/04/Alphabet-Forms_27.mp3",
  // ]
  const alphabets=["??","??","??","??","??","??","??","??","??","??","??","??","??","??","??","??","??","??","??","??","??","??","??","??","??","??","??","??","??","??"]

  if (window.innerWidth > 600) {
    return (
      <div className="container">
        <Row alphabets={alphabets.slice(0,5)} audioLinks={page1Links.slice(0,5)}/>
        <Row alphabets={alphabets.slice(5,10)}  audioLinks={page1Links.slice(5,10)}/>
        <Row alphabets={alphabets.slice(10,15)} audioLinks={page1Links.slice(10,15)}/>
        <Row alphabets={alphabets.slice(15,20)} audioLinks={page1Links.slice(15,20)}/>
        <Row alphabets={alphabets.slice(20,25)} audioLinks={page1Links.slice(20,25)}/>
        <Row alphabets={alphabets.slice(25,30)} audioLinks={page1Links.slice(25,30)}/>
        </div >)}
          else {
            return ( 
            <div className="container">
            <Row alphabets={alphabets.slice(0,3)} audioLinks={page1Links.slice(0,3)}/>
            <Row alphabets={alphabets.slice(3,6)} audioLinks={page1Links.slice(3,6)}/>
            <Row alphabets={alphabets.slice(6,9)} audioLinks={page1Links.slice(6,9)}/>
            <Row alphabets={alphabets.slice(9,12)} audioLinks={page1Links.slice(9,12)}/>
            <Row alphabets={alphabets.slice(12,15)} audioLinks={page1Links.slice(12,15)}/>
            <Row alphabets={alphabets.slice(15,18)} audioLinks={page1Links.slice(15,18)}/>
            <Row alphabets={alphabets.slice(18,21)} audioLinks={page1Links.slice(18,21)}/>
            <Row alphabets={alphabets.slice(21,24)} audioLinks={page1Links.slice(21,24)}/>
            <Row alphabets={alphabets.slice(24,27)} audioLinks={page1Links.slice(24,27)}/>
            <Row alphabets={alphabets.slice(27,30)} audioLinks={page1Links.slice(27,30)}/>
            </div >)}
        }
/*
        <div class="row justify-content-center flex-row-reverse">
          <div class="col-2 right-offset-1">

            <button className="button" onClick={() => {
              playAudio(audioLinks[0])
            }}>
              ??
        </button>
          </div>
          <div class="col-2">


            <button className="button" onClick={() => {
              playAudio(audioLinks[1])
            }}>
              ??
        </button>
          </div>
          <div class="col-2">
            <button className="button" onClick={() => {
              playAudio(audioLinks[2])
            }}>
              ??
        </button>
          </div>
          <div class="col-2">
            <button className="button" onClick={() => {
              playAudio(audioLinks[3])
            }}>
              ??
        </button>
          </div>
          <div class="col-2">
            <button className="button" onClick={() => {
              playAudio(audioLinks[4])
            }}>
              ??
        </button>
          </div>
        </div>
        <div class="row justify-content-center flex-row-reverse ">
          <div class="col-2 right-offset-1">
            <button className="button" onClick={() => {
              playAudio(audioLinks[5])
            }}>
              ??
        </button>
          </div>
          <div class="col-2">
            <button className="button" onClick={() => {
              playAudio(audioLinks[6])
            }}>
              ??
        </button>
          </div>
          <div class="col-2">
            <button className="button" onClick={() => {
              playAudio(audioLinks[7])
            }}>
              ??
        </button>
          </div>
          <div class="col-2">
            <button className="button" onClick={() => {
              playAudio(audioLinks[8])
            }}>
              ??
        </button>
          </div>
          <div class="col-2">
            <button className="button" onClick={() => {
              playAudio(audioLinks[9])
            }}>
              ??
        </button>
          </div>
        </div>
        <div class="row justify-content-center flex-row-reverse">
          <div class="col-2 right-offset-1">
            <button className="button" onClick={() => {
              playAudio(audioLinks[10])
            }}>
              ??
        </button>
          </div>
          <div class="col-2">
            <button className="button" onClick={() => {
              playAudio(audioLinks[11])
            }}>
              ??
        </button>
          </div>
          <div class="col-2">
            <button className="button" onClick={() => {
              playAudio(audioLinks[12])
            }}>
              ??
        </button>
          </div>
          <div class="col-2">
            <button className="button" onClick={() => {
              playAudio(audioLinks[13])
            }}>
              ??
        </button>
          </div>
          <div class="col-2">
            <button className="button" onClick={() => {
              playAudio(audioLinks[14])
            }}>
              ??
        </button>
          </div>
        </div>
        <div class="row justify-content-center flex-row-reverse">
          <div class="col-2 right-offset-1">
            <button className="button" onClick={() => {
              playAudio(audioLinks[15])
            }}>
              ??
        </button>
          </div>
          <div class="col-2">
            <button className="button" onClick={() => {
              playAudio(audioLinks[16])
            }}>
              ??
        </button>
          </div>
          <div class="col-2">
            <button className="button" onClick={() => {
              playAudio(audioLinks[17])
            }}>
              ??
        </button>
          </div>
          <div class="col-2">
            <button className="button" onClick={() => {
              playAudio(audioLinks[18])
            }}>
              ??
        </button>
          </div>
          <div class="col-2">
            <button className="button" onClick={() => {
              playAudio(audioLinks[19])
            }}>
              ??
        </button>
          </div>
        </div>
        <div class="row justify-content-center flex-row-reverse">
          <div class="col-2 right-offset-1">
            <button className="button" onClick={() => {
              playAudio(audioLinks[20])
            }}>
              ??
        </button>
          </div>
          <div class="col-2">

            <button className="button" onClick={() => {
              playAudio(audioLinks[21])
            }}>
              ??
        </button>
          </div>
          <div class="col-2">
            <button className="button" onClick={() => {
              playAudio(audioLinks[22])
            }}>
              ??
        </button>
          </div>
          <div class="col-2">
            <button className="button" onClick={() => {
              playAudio(audioLinks[23])
            }}>
              ??
        </button>
          </div>
          <div class="col-2">
            <button className="button" onClick={() => {
              playAudio(audioLinks[24])
            }}>
              ??
        </button>
          </div>
        </div>
        <div class="row justify-content-center flex-row-reverse">
          <div class="col-2 right-offset-1">
            <button className="button" onClick={() => {
              playAudio(audioLinks[26])
            }}>
              ??
        </button>
          </div>
          <div class="col-2">
            <button className="button" onClick={() => {
              playAudio(audioLinks[25])
            }}>
              ??
        </button>
          </div>
          <div class="col-2">
            <button className="button" onClick={() => {
              // playAudio(audioLinks[27])
            }}>
              ??
        </button>
          </div>
          <div class="col-2">
            <button className="button" onClick={() => {
              playAudio(audioLinks[27])
            }}>
              ??
        </button>
          </div>
          <div class="col-2">
            <button className="button" onClick={() => {
              playAudio(audioLinks[27])
            }}>
              ??
        </button>
          </div>
        </div>
  */
  


export default QaidaTable;