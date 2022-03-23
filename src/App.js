import './App.css';
// import Footer from './components/shared/navigation/Footer';
import Header from './components/shared/navigation/Header';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Faqs from './pages/Faqs'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
  return (

    <>
      <Header />
      <Routes >
        <Route path='/' exact element={<Home />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes >
      {/* <Footer /> */}
    </>
  );
}

export default App;
