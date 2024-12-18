import React from 'react'

const MyButton = (props) => {
    const {buttonText, bgColor, clickMe}= props;

  
   
  return (
<button style={{backgroundColor:bgColor}} onClick={clickMe}>{buttonText}</button>
    // document.addEventListener("click", handleClick)
    // <button style="backgroundColor:pink"></button>
  )
}

export default MyButton

//rafce

