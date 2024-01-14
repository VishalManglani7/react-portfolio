import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';

//react routing. all over parts of page should be in Outlet
function App() {
  return (
    <div className="main">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;