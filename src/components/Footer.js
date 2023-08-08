import { Link } from 'react-router-dom';
import ThemeSelect from './ThemeSelect';
import { animateScroll as scroll } from 'react-scroll';
import { useEffect, useState } from 'react';
import ExchangeRate from './ExchangeRate';

const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false);
  
    const scrollToTop = () => {
      scroll.scrollToTop({
        duration: 500,
        smooth: 'easeInOutQuad',
      });
    };
  
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    
  
    return (
        <>
          {showButton && (
            <button
              onClick={scrollToTop}
              className='go-top-btn'
              style={{
                position: 'fixed',
                bottom: '150px',
                right: '40px',
                zIndex: 989,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '48px',
                height: '48px',
                borderRadius: '16px',
                boxShadow: 'rgba(14, 14, 44, 0.4) 0px -1px 0px 0px inset',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '16px',
                fontWeight: 600,
                letterSpacing: '0.03em',
                lineHeight: 1,
                outline: '0px',
                backgroundColor: 'var(--colors-primary)',
                color: 'var(--colors-invertedContrast)',
                transition: 'background-color 0.2s ease, opacity 0.2s ease, transform 0.2s ease',
                border: 'none',
              }}
            >
                <svg 
                viewBox="0 0 24 24" 
                color="var(--colors-invertedContrast)" 
                fill='var(--colors-invertedContrast)'
                width="20px" 
                xmlns="http://www.w3.org/2000/svg" 
                class="">
                    <path d="M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z"></path>
                </svg>
            </button>
          )}
        </>
      );
      
  };
  

function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-wrapper">
                    <div id="links-footer">
                        <div className="about">
                            <h4>About</h4>
                            <Link to="#"><strong className="yellow">Contact</strong></Link>
                            <Link to="#">Brand</Link>
                            <Link to="#">Blog</Link>
                            <Link to="#">Community</Link>
                            <Link to="#">Litepaper</Link>
                        </div>
                        <div className="help">
                            <h4>Help</h4>
                            <Link to="#">Customer Support</Link>
                            <Link to="#">Troubleshooting</Link>
                            <Link to="#">Guides</Link>
                        </div>
                        <div className="developers">
                            <h4>Developers</h4>
                            <Link to="#">Github</Link>
                            <Link to="#">Documentation</Link>
                            <Link to="#">Bug Bounty</Link>
                            <Link to="#">Audits</Link>
                            <Link to="#">Careers</Link>
                        </div>
                        <img className="desktop" src="/assets/svgexport-36.svg" width="160px" alt="Pancake Swap Logo"/>
                    </div>
                    <img className="mobile" src="/assets/svgexport-36.svg" width="160px" alt="Pancake Swap Logo"/>

                    <div className="icons-footer">
                        <Link to="#"><img src="/assets//svgexport-38.svg" alt="Twitter"/></Link>
                        <div className="telegram"><Link to="#"><img src="/assets/svgexport-39.svg" alt="Telegram"/></Link>
                            <div className="tele-lang">
                                <button className="lang-item"><Link target="_blank" to="https://t.me/pancakeswap">English</Link></button>
                                <button className="lang-item"><Link target="_blank" to="https://t.me/PancakeSwap_DE">Deutsch</Link></button>
                                <button className="lang-item"><Link target="_blank" to="https://t.me/PancakeswapEs">Español</Link></button>
                                <button className="lang-item"><Link target="_blank" to="https://t.me/pancakeswapfr">Français</Link></button>
                                <button className="lang-item"><Link target="_blank" to="https://t.me/PancakeSwapPortuguese">Português</Link></button>
                                <button className="lang-item"><Link target="_blank" to="https://t.me/pancakeswapturkiye">Türkçe</Link></button>
                            </div>
                        </div>
                        <Link to="#"><img src="/assets//svgexport-40.svg" alt="Reddit"/></Link>
                        <Link to="#"><img src="/assets//svgexport-41.svg" alt="Instagram"/></Link>
                        <Link to="#"><img src="/assets//svgexport-42.svg" alt="Github"/></Link>
                        <Link to="#"><img src="/assets//svgexport-43.svg" alt="Discord"/></Link>
                        <Link to="#"><img src="/assets//svgexport-44.svg" alt="Youtube"/></Link>        
                    </div>

                    <div className="buttons-footer">

                        <div className="buttons-footer-left">
                            <ThemeSelect />

                            <div className="lang-select">
                                <button className="lang-select-btn">
                                    <img src="/assets//svgexport-7.svg" alt=""/>
                                    <div>EN</div>
                                </button>
                                <div className="lang-select-content">
                                    <button className="lang-item">العربية</button>
                                    <button className="lang-item">বাংলা</button>
                                    <button className="lang-item">English</button>
                                    <button className="lang-item">Deutsch</button>
                                    <button className="lang-item">Ελληνικά</button>
                                    <button className="lang-item">Español</button>
                                    <button className="lang-item">Suomalainen</button>
                                    <button className="lang-item">Filipino</button>
                                    <button className="lang-item">Français</button>
                                    <button className="lang-item">हिंदी</button>
                                    <button className="lang-item">Magyar</button>
                                    <button className="lang-item">Bahasa Indonesia</button>
                                    <button className="lang-item">Italiano</button>
                                    <button className="lang-item">日本語</button>
                                    <button className="lang-item">한국어</button>
                                    <button className="lang-item">Nederlands</button>
                                    <button className="lang-item">Polski</button>
                                    <button className="lang-item">Português (Brazil)</button>
                                    <button className="lang-item">Português</button>
                                    <button className="lang-item">Română</button>
                                    <button className="lang-item">Русский</button>
                                    <button className="lang-item">Svenska</button>
                                    <button className="lang-item">தமிழ்</button>
                                    <button className="lang-item">Türkçe</button>
                                    <button className="lang-item">Українська</button>
                                    <button className="lang-item">Tiếng Việt</button>
                                    <button className="lang-item">简体中文</button>
                                    <button className="lang-item">繁體中文</button>
                                </div>
                            </div>
                        </div>
                        <div className="buttons-footer-right">
                            <div className="currency-price">
                                <Link to="#">
                                    <img src="/assets//svgexport-6.svg" alt="" style={{width: 24}}/>
                                    <div className="text-currency"><ExchangeRate /></div>
                                </Link>
                            </div>
                            <Link to="#" className="buy-btn">Buy CAKE
                                <span style={{marginLeft: '10px'}}>
                                    <svg 
                                    viewBox="0 0 24 24" 
                                    color="var(--colors-invertedContrast)" 
                                    width="24" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    class="" 
                                    
                                    height="24" >
                                        <path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z" fill="var(--colors-invertedContrast)"></path>
                                    </svg>
                                </span> 
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
            <ScrollToTopButton />
        </div>
    )
}

export default Footer