export default function Projects({projectsArray}) {
  return(
    <section id="projects" className="projects">
      <div className="width-container">
        <p data-aos="fade-up" className='projects__heading'>Портфолио</p>
        <h3 data-aos="fade-up" className='projects__subheading'>Предпросмотр сайта при наведении</h3>
        <div className="projects__container">
          {projectsArray.map((elem) => {
            return(
              <div key={Math.random()} data-aos="fade-up" className="project">
                <div data-aos="fade-right" className='project__img-block'>
                  <a rel="noreferrer" target="_blank" href={elem.links[1] || elem.links[0]}>
                    <img src={elem.imagePath} alt="" />
                  </a>
                </div>
                <div data-aos="fade-left" className='project__text'>
                  <h3>{elem.heading}</h3>
                  <p>
                    {elem.text}
                  </p>
                  <div className='stack'>
                    {elem.technologies.map((tech) => {
                      return(<p key={Math.random()}>{tech}</p>);
                    })}
                  </div>
                  <div className='links'>
                    {elem.links[1] ? <><a target="_blank" href={elem.links[0]} rel="noreferrer">
                      Code <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                    </a>
                    <a target="_blank" href={elem.links[1]} rel="noreferrer">
                      Live Demo<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-external-link"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>
                    </a></> : elem.links[0].includes('github') ? <><a target="_blank" href={elem.links[0]} rel="noreferrer">
                      Code <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                    </a></> : <><a target="_blank" href={elem.links[0]} rel="noreferrer">
                      Live Demo<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-external-link"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>
                    </a></>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}