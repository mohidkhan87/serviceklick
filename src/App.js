import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Faqs from "./pages/Faqs";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/privacyPolicy";
import Newsroom from "./pages/Newsroom";
import HowItWorks from "./pages/HowItWorks";
import HelpCenter from "./pages/HelpCenter";
import AboutUs from "./pages/AboutUs";
// import CompletlyBusiness from "./pages/CompletlyBusiness";
import Categories from "./pages/Categories";
import BlogPost from "./pages/BlogPost";
import Article from "./pages/Article";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/newsroom" element={<Newsroom />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* <Route path="/completly-business" element={<CompletlyBusiness />} /> */}
        <Route path="/blog-post" element={<BlogPost />} />
        <Route path="/article" element={<Article />} />

        <Route path="/categories" element={<Categories />} />
        <Route path="/end-of-lease-cleaning" element={<Categories />} />
        <Route path="/airbnb-cleaning" element={<Categories />} />
        <Route path="/private-chef" element={<Categories />} />
        <Route path="/top-chef" element={<Categories />} />
        <Route path="/wine" element={<Categories />} />
        <Route path="/painter" element={<Categories />} />
        <Route path="/color" element={<Categories />} />
        <Route path="/assemble-furniture" element={<Categories />} />
        <Route path="/handymen" element={<Categories />} />
        <Route path="/electrician" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
