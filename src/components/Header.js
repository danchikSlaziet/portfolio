export default function Header({setBurgerIsOpen, navLinksArray}) {
  function buttonHandler() {
    setBurgerIsOpen(true);
  }

  return (
    <header className="header">
      <nav className="nav header__nav">
        <h3 className="logo header__logo"><a href="#top" className="logo__link">Danis.dev</a></h3>
        <ul className="nav__list">
          {navLinksArray.map((elem) => {
            return (
              <li key={Math.random()} className="nav__item">
                <a className="nav__link" href={elem.href}>{elem.text}</a>
              </li>
            );
          })}
        </ul>
        <div onClick={buttonHandler} className="burger-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-menu">
            <path d="M4 6l16 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M4 18l16 0"></path>
          </svg>
        </div>
      </nav>
    </header>
  );
}