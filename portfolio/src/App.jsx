import './App.css'

import { Outlet } from 'react-router-dom'

import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <h1>Footer</h1>
    </>
  )
}

export default App
