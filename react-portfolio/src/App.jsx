import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import ContactMe from './components/ContactMe'

function App() {
  return (
    <div className="main">
      <Header />
      <AboutMe />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

export default App;