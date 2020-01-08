import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// Render App as root element into html
ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
