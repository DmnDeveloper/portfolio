import { HashRouter } from 'react-router-dom'
import React from 'react' 
import Header from './components/Header'
import Footer from './components/Footer/Footer'
import AnimatedRoutes from './components/AnimatedRoutes'

function App() {
  return (
      <HashRouter>
        <Header />
        <AnimatedRoutes />
        <Footer />
      </HashRouter>
  );
}

export default App;
