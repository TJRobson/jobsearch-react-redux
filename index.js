import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import { createStore } from 'redux'

  const initialState = {
    data: []
  }

  function reducer (state=initialState, action) {
    Switch (action.type) {
      case 'SEARCH_TERM' :
        return state
      defualt :
        return state
    }
  }

  const store = createStore(reducer)


  const render = () => {
    ReactDOM.render(
      <App
        store={store}
      />,
      document.querySelector('main')
    )
  }

  render()
  store.subscribe(render)
