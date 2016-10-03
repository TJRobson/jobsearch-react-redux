import React, { Component } from 'react'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    const { store } = this.props
    console.log('this.props', this.props)
    return (
      <div>
        <div>{store.getState()}</div>
        // <button onClick={() => store.dispatch({ type: 'ADD', payload: 1 }) }>
        //   add
        // </button>
      </div>
    )
  }

}

export default App
