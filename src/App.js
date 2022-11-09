// CSS
import './styles/App.css'
// Components
import Header from './components/Header'
import Board from './components/Board'
import Footer from './components/Footer'

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
