import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Faqs from './pages/Faqs'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Newsroom from './pages/Newsroom'

function App() {
  return (
    <>
      <Routes >
        <Route path='/' exact element={<Home />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/newsroom' element={<Newsroom />} />
      </Routes >
    </>
  );
}

export default App;
