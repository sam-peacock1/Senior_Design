import './App.css';
import  { NavBar }  from './components/navBar';
import  { Bannar }  from './components/Bannar';
import { Skills } from './components/Skills';
import { Experiance } from './components/Experiance';
import { ContactForm } from './components/ContactFrom';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Bannar></Bannar>
      <Skills></Skills>
      <Projects></Projects>
      <Experiance></Experiance>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}

export default App;
