import React from 'react';

const CharacterFact = (props) =>{
  if(!props.fact) return null
  return <div><p>{props.fact}</p>
</div>

}
export default CharacterFact;
