// CSS
import './styles/App.css'
// Components
import Header from './components/Header'
import Footer from './components/Footer'
import Board from './components/Board'

function App() {
  return (
  <>
    <Header/>    
      <main>
        <Board/>
      </main>      
    <Footer/>
  </>
  );
}

export default App;
