import React from 'react'
import ReactDOM from 'react-dom'
import 'shoelace-css/dist/shoelace.css'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
