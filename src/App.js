import React from 'react'
import './App.css'
import Introduction from './components/Introduction'
import NavigationBar from './components/NavigationBar'
import Work from './components/Work'

function App() {
  return (
    <div>
      <NavigationBar />
      <Introduction />
      <Work />
    </div>
  )
}

export default App
