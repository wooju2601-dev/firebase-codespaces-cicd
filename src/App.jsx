import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


function App() {
  return(
<div>
  <h1>확장 과제입니다</h1>
    <Header/>
    <Main/>
    <Footer/>
</div>


  );
}

export default App
