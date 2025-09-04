import { useEffect, useState } from 'react';

import { solutionsData } from '../../data/DropDown';
import Button from '../Button';
import Dropdown from '../DropDown';

import { ReactComponent as HubbobosLogoBrown } from '../../assets/svg/globe-brown.svg';
import { ReactComponent as GlobeLogo } from '../../assets/svg/globe-white.svg';
import { ReactComponent as HubbobosLogo } from '../../assets/svg/hubboposlogo.svg';
import { ReactComponent as MenuIcon } from '../../assets/svg/menuIcon.svg';

import './styles.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLanguageSelect = (option: string) => {
    console.log(option);
  };

  const languages = ['English(EN)', 'Bahasa(BM)'];
  const AboutUs = [
    {
      label: 'About Us',
      image:
        'https://assets.grab.com/wp-content/uploads/sites/42/2024/06/01080422/header-about-us.png',
    },
  ];
  const WhyHubbo = [...AboutUs];

  const solutionsOptions = solutionsData.map(solution => ({
    label: solution.name,
    image: solution.image,
  }));

  return (
    <div className={`header-main-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-sub-container">
        <div className="header-component">
          <div className="menuIcon">
            <MenuIcon color="#fff" className="menuIconSvg" />
          </div>
          <HubbobosLogo />
        </div>
        <div className="solutions-menu-container">
          <Dropdown
            label="Solutions"
            options={solutionsOptions}
            onSelect={handleLanguageSelect}
            className="solutions dropdown-solutions"
            isScrolled={isScrolled}
          />

          <div className="solutions">
            <p className="solutions-text">Plans & Pricing</p>
          </div>

          <Dropdown
            label="Why Hubbo"
            options={WhyHubbo}
            onSelect={handleLanguageSelect}
            className="why-hubbo"
            isScrolled={isScrolled}
          />

          <Button className="contact-us">
            <p className="solutions-text">Contact Us</p>
          </Button>
        </div>
        <div className="language-box">
          <div className="languages">
            <div className="language-container">
              {isScrolled ? <HubbobosLogoBrown /> : <GlobeLogo />}
              <span>
                <Dropdown
                  label="EN"
                  options={languages}
                  onSelect={handleLanguageSelect}
                  className="dropdown-language"
                  isScrolled={isScrolled}
                />
              </span>
            </div>
          </div>
          <p className="login">Log In</p>
          <div>
            <Button
              className="get-started"
              variant={isScrolled ? 'primary' : 'secondary'}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
