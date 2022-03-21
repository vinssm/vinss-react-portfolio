import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav.js';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Resume from './components/Resume';



  function App() {
    const [currentPage, setCurrentPage] = useState("About");

    function renderPage() {
      switch(currentPage) {
        default: return <About />
        case "Projects":
          return <Projects/>;
        case "Contact":
          return <Contact/>;
          case "Resume":
            return <Resume/>
      }
    }
    return (
      <main>
          <div>
              <div>        
                <Nav
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>   
                 {renderPage(currentPage)} 
            </div> 
            <div className='footer'>
                <Footer></Footer>
              </div>    
         </main>         
    );
  }
  
  export default App;