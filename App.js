import React from 'react'
import Navigation from './src/components/Navigation'
import { Provider } from 'react-redux'
import { store, persistor } from './src/store/store'
import { PersistGate } from 'redux-persist/integration/react'

const App = props =>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Navigation />
    </PersistGate>
  </Provider>

export default App;