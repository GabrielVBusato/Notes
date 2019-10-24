import React from 'react'
import Navigation from './src/components/Navigation'
import { Provider } from 'react-redux'
import store from './src/store/store'

const App = props =>
    <Provider store = {store}>
      <Navigation/>
    </Provider>

export default App;