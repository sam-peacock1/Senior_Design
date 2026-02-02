import './App.css';
import  { NavBar }  from './components/navBar';
import  { Bannar }  from './components/Bannar';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ContactForm } from './components/ContactFrom';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Bannar></Bannar>
      <Skills></Skills>
      <Projects></Projects>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}

export default App;
