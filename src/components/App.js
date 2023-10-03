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
import mottexPath from '../images/mottex.webp';
import russianPath from '../images/danchikslaziet.github.io_russian-travel-new_ (1).webp';
import coinPath from '../images/coin-app.webp';


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
      text: 'Небольшая социальная сеть. В проекте реализована стандартная авторизация с хранением jwt в куках, защитил основной роут для неавторизованных пользователей, прокидывал информацию о юзере через контекст, также написал базовый бэкенд на Express.js со схемами и моделями mongoose и подключением к mongoDB. Делал деплой на Ubuntu (pm2, certbot, ngnix) *закончился пробный период на YandexCloud, поэтому ссылка на демо - фронт с чужим апи, ссылка на гит - со своим',
      technologies: ['React', 'NodeJS', 'MongoDB', 'ExpressJS', 'Webpack'],
      links: ['https://github.com/danchikSlaziet/react-mesto-api-full-gha', 'https://danchikslaziet.github.io/react-mesto-auth/']
    },
    {
      imagePath: moviesPath,
      heading: 'Movies explorer',
      text: 'Приложение по поиску фильмов/короткометражек. Реализована авторизация (jwt in cookies), возможность редактировать профиль, добавлять фильмы в избранное и фильтровать поиск по короткометражкам. Сделал хранение последних запросов фильмов и фильтра в localStorage для лучшего UX, защитил основные роуты. Список фильмов берётся из публичного api, для остального написал базовый бэкенд на Express.js',
      technologies: ['React', 'NodeJS', 'MongoDB', 'ExpressJS', 'Webpack'],
      links: ['https://github.com/danchikSlaziet/movies-explorer-app']
    },
    {
      imagePath: coinPath,
      heading: 'CryptoLost',
      text: 'Сайт с информацией о top-50 rank криптовалютах. Условно-бесплатный api coinGecko с лимитом по запросам. Сделал пагинацию для списка топ-50 валют, получал данные при помощи axios (до этого работал только с fetch и ajax), типизировал приходящие данные (c coinGecko api), для удобства вынес отдельно запросы к апи и подключил redux-thunk',
      technologies: ['React', 'Redux', 'TypeScript', 'Sass'],
      links: ['https://github.com/danchikSlaziet/coin-app','https://danchikslaziet.github.io/coin-app/']
    },
    {
      imagePath: mottexPath,
      heading: 'Mottex Digital',
      text: 'Сайт для IT-компании по разработке и продвижению цифровых продуктов. Стандартный сайт-визитка, есть несколько форм с отправкой через ajax и валидацией (в том числе валидация прикрепляемого файла), немного оживил сайт анимациями (в том числе AOS) и добавил всплывающую форму при draggable эффекте',
      technologies: ['Vanilla JS', 'jQuery', 'Webpack'],
      links: ['http://accouno4.beget.tech/']
    },
    {
      imagePath: asteriPath,
      heading: 'Asteri-3D',
      text: 'Сайт для компании, занимающейся профессиональной 3д-печатью. Проект под wp, сделан многостраничный сайт, реализована форма отправки заказа с валидацией (в т.ч. прикрепляемого файла), переделал поиск по городам, фиксил баги в safari и на android',
      technologies: ['jQuery', 'Vanilla JS'],
      links: ['https://asteri-3d.ru/services/3d-%d0%bc%d0%be%d0%b4%d0%b5%d0%bb%d0%b8%d1%80%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d0%b5/']
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
