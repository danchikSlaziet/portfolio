import image1Path from '../images/aboutimg.webp'
import image2Path from '../images/aboutlaptop.png'
import rotatePath from '../images/rotateText.svg'

export default function About() {
  return(
    <section id='about' className="about">
      <div className="width-container">
        <div className="about-content">
          <div className="about-content__images">
            <img data-aos="fade-right" className="about-content__image-1" src={image1Path} alt="" />
            <img data-aos="fade-up" className="about-content__image-2" src={image2Path} alt="" />
            <span data-aos="fade-up" >
              <img className='about-content__rotate-img' src={rotatePath} alt="" />
            </span>
          </div>
          <div data-aos="fade-left" className='about-content__text'>
            <h3>Обо мне</h3>
            <h4>
              Веб-разработчик из Москвы/Челябинска
            </h4>
            <p>
              Обладаю навыками HTML, CSS/Sass, JS, TS, React, Redux, NodeJS, ExpressJS, MongoDB, Postman, также осуществлял настройку pm2, Ngnix, SSL-сертификата на certbot при деплое (на Ubuntu). 
              Мой опыт заключается в создании динамичных, привлекательных интерфейсов 
              посредством написания чистого и оптимизированного кода и использования 
              передовых инструментов и методов разработки. Имею опыт работы в команде разработчиков, работал в тесном сотрудничестве с SEO и backend-разработчиком (PHP + WordPress).
              Также писал собственный бэкенд на Express.js. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}