import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Faqs from './pages/Faqs'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Newsroom from './pages/Newsroom'
import HowItWorks from './pages/HowItWorks'
import HelpCenter from './pages/HelpCenter'
import AboutUs from './pages/AboutUs'
import CompletlyBusiness from './pages/CompletlyBusiness'
import Categories from './pages/Categories'
import BlogPost from './pages/BlogPost'

function App() {
  return (
    <>
      <Routes >
        <Route path='/' exact element={<Home />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/newsroom' element={<Newsroom />} />
        <Route path='/how-it-works' element={<HowItWorks />} />
        <Route path='/help-center' element={<HelpCenter />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/completly-business' element={<CompletlyBusiness />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/blog-post' element={<BlogPost />} />
      </Routes >
    </>
  );
}

export default App;
