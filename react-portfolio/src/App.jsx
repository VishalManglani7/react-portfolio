import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import ContactMe from './components/ContactMe'
import Resume from './components/Resume'

function App() {
  return (
    <div className="main">
      <Header />
      <AboutMe />
      <Portfolio />
      <Resume/>
      <ContactMe />
    </div>
  );
}

export default App;