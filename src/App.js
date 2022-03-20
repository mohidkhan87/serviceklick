import './App.css';
import Footer from './components/shared/navigation/Footer';
import Header from './components/shared/navigation/Header';

import Services from './components/pages/homepage/Services';
import Satisfaction from './components/pages/homepage/Satisfaction';
import Benefits from './components/pages/homepage/Benefits';
import News from './components/pages/homepage/News';

function App() {
  return (

    <div className="App">
      <Header />
      <Services />
      <Satisfaction />
      <Benefits />
      <News />
      <Footer />
    </div>
  );
}

export default App;
