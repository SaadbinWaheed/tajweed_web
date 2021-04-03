import React from "react"
import ArabicButton from "./arabicButton";

const Row = (props) => {
    const buttons = props.alphabets;
    const audioLinks = props.audioLinks;
    return (
    <div class="row justify-content-center flex-row-reverse">
            {buttons.map((val,i)=><ArabicButton letter={val} isFirst={val===buttons[0]} link={audioLinks[i]}/>)}
    </div>)
}

export default Row;