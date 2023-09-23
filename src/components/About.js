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
              A dedicated Front-end Developer
              based in Belgrade, Serbia
            </h4>
            <p>As a Junior Front-End Developer, I possess an impressive arsenal of skills 
              in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and 
              maintaining responsive websites that offer a smooth user experience. My expertise 
              lies in crafting dynamic, engaging interfaces through writing clean and optimized 
              code and utilizing cutting-edge development tools and techniques. I am also a team 
              player who thrives in collaborating with cross-functional teams to produce outstanding 
              web applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
}