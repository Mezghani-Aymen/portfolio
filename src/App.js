import './assets/css/tailwind.css';
import './assets/css/custom.css';
import React, { useEffect, useState } from 'react';
import Hero from "./pages/Hero";
import Project from "./pages/Project";
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import { Loading } from './components/Loading';
import ScrollToTopButton from './components/ScrollToTopButton';


function App() {
  const [data, setData] = useState(null);
  const [isLoadingVisible, setIsLoadingVisible] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) =>
        setTimeout(() => {
          setIsLoadingVisible(false)
        }, 4000))
      setData({ message: 'Data loaded!' });
    };
    fetchData();
  }, [isLoadingVisible])
  return (
    <>
      {isLoadingVisible ? (
        <Loading />
      ) : (
        <div className="overflow-x-hidden" >
          <>
            <Header />
            <Hero />
            <About />
            <Project />
            <Skills />
            <Contact />
            <ScrollToTopButton />
          </>
        </div >
      )}
    </>
    // <LoadingProvider>
    // <MainContent />
    // </LoadingProvider>
  );
}


export default App;