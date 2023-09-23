import { useState } from "react";
import About from "./About";
import BurgerMenu from "./BurgerMenu";
import Contacts from "./Contacts";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";


function App() {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const navLinksArray = [
    {
      href: '#top',
      text: 'Наверх'
    },
    {
      href: '#about',
      text: 'Обо мне'
    },
    {
      href: '#projects',
      text: 'Проекты'
    },
    {
      href: '#contacts',
      text: 'Контакты'
    }
  ]
  return (
    <>
      <Header navLinksArray={navLinksArray} setBurgerIsOpen={setBurgerIsOpen}/>
      <Home />
      <About />
      <Projects />
      <Contacts />
      <Footer />
      <BurgerMenu navLinksArray={navLinksArray} setBurgerIsOpen={setBurgerIsOpen} burgerIsOpen={burgerIsOpen}/>
    </>
  );
}

export default App;
