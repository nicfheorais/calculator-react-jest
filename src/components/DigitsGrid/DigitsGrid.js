import React from 'react'
import Digit from '../Digit/Digit'

function DigitsGrid() {

    const digitArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
      <div>
          {digitArray.map((element) => {
              return <Digit key={element} digit={element}/>
          })}
    </div>
  )
}

export default DigitsGrid