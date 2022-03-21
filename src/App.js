import './App.css';
import Footer from './components/shared/navigation/Footer';
import Header from './components/shared/navigation/Header';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Faqs from './pages/Faqs'

function App() {
  return (

    <>
      {/* <Header /> */}
      <Routes >
        <Route path='/' exact component={Home} />
        <Route path='/faqs' component={Faqs} />
      </Routes >
      {/* <Footer /> */}
    </>
  );
}

export default App;
