// CSS
import './styles/App.css'
// Components
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
// React Hooks
import { useState, useEffect} from 'react'

function App() {
  return (
  <>
    <Header/>
    
      <main>        
      <Card/>
      </main>
      

    <Footer/>
  </>

  );
}

export default App;
