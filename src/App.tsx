import React from 'react';
import {AppContainer} from './styles'
import {Column} from './Column'
import {Card} from './Card'

function App() {
  return (
<AppContainer>
  <Column text ="To Do">
    <Card text='Generate app scaffod'/>
  </Column>

  <Column text ="In Progress">
  <Card text='Learn Typescript'/>
  </Column>

  <Column text ="Done">
  <Card text='Begin to static typing'/>
  </Column>
</AppContainer>
  );
}

export default App;
