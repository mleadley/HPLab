import React from 'react';
import ReactDOM from 'react-dom';
import CharacterContainer from "./containers/CharacterContainer"

window.addEventListener('load', function () {
  ReactDOM.render(
    <CharacterContainer />,
    document.getElementById('app')
  );
});
