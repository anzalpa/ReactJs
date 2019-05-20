import React from 'react'

import Heading from './Heading'
import Todos from './Todos'
import '../Css/index.css'

class App extends React.Component {
  render(){
    return (
      <div>
        <Heading />
        <Todos />
      </div>
    )
  }
}

export default App
