import React from 'react';

const LuckyButton = (props) => {
  return (
    <button onClick={props.onButtonClicked}>
      I'm Feeling Lucky
    </button>
  )
}

export default LuckyButton
