import { useEffect, useState } from "react";
import About from "./About";
import BurgerMenu from "./BurgerMenu";
import Contacts from "./Contacts";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import mestoPath from '../images/mesto-full.webp';
import moviesPath from '../images/movies-full.webp';
import asteriPath from '../images/asteri-3d.ru_ (1).webp';
import mottexPath from '../images/accouno4.beget.tech_-min.webp';
import russianPath from '../images/danchikslaziet.github.io_russian-travel-new_ (1).webp';


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
  const projectsArray = [
    {
      imagePath: mestoPath,
      heading: 'Mesto social',
      text: 'Социальная сеть с авторизацией, базой данных юзеров и карточек. Полностью написан фронтенд и бэкенд (со сборами логов) с последующим деплоем (уже закончился бесплатный период на Yandex Cloud) на Ubuntu 20.04. *ссылка на демо только на фронт с публичной апишкой, ссылка на гит со своим бэкендом',
      technologies: ['React', 'NodeJS', 'MongoDB', 'ExpressJS', 'Webpack'],
      links: ['https://github.com/danchikSlaziet/react-mesto-api-full-gha', 'https://danchikslaziet.github.io/react-mesto-auth/']
    },
    {
      imagePath: moviesPath,
      heading: 'Movies explorer',
      text: 'Приложение по поиску и фильтрации фильмов с личным кабинетом, авторизацией и списком сохранённых фильмов. Полностью написан фронтенд и бэкенд. Только одна публичная API со списком фильмов.',
      technologies: ['React', 'NodeJS', 'MongoDB', 'ExpressJS', 'Webpack'],
      links: ['https://github.com/danchikSlaziet/movies-explorer-app']
    },
    {
      imagePath: asteriPath,
      heading: 'Asteri-3D',
      text: 'Сайт для компании, занимающейся профессиональной 3д-печатью, поставленной на поток.',
      technologies: ['jQuery', 'Vanilla JS'],
      links: ['https://asteri-3d.ru/services/3d-%d0%bc%d0%be%d0%b4%d0%b5%d0%bb%d0%b8%d1%80%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d0%b5/']
    },
    {
      imagePath: mottexPath,
      heading: 'Mottex Digital',
      text: 'Сайт для IT-компании по разработке и продвижению цифровых продуктов (постер видео под заголовком - заглушка)',
      technologies: ['Vanilla JS', 'jQuery', 'Webpack'],
      links: ['http://accouno4.beget.tech/']
    },
    {
      imagePath: russianPath,
      heading: 'Russian Travel',
      text: 'Сайт о путешествиях по России. Простенькая вёрстка с возможностью переключения языка',
      technologies: ['HTML', 'CSS'],
      links: ['https://github.com/danchikSlaziet/russian-travel-new','https://danchikslaziet.github.io/russian-travel-new/']
    },
  ]

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }, [])

  return (
    <>
      <Header navLinksArray={navLinksArray} setBurgerIsOpen={setBurgerIsOpen}/>
      <Home />
      <About />
      <Projects projectsArray={projectsArray}/>
      <Contacts />
      <Footer />
      <BurgerMenu navLinksArray={navLinksArray} setBurgerIsOpen={setBurgerIsOpen} burgerIsOpen={burgerIsOpen}/>
    </>
  );
}

export default App;
