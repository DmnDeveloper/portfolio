import { HashRouter } from 'react-router-dom'
import React from 'react' 
// import Header from './components/Header'
// import Footer from './components/Footer/Footer'
import AnimatedRoutes from './components/AnimatedRoutes'
import Layout from './components/Layout';

function App() {
  return (
    <HashRouter>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </HashRouter>
  );
}

export default App;
