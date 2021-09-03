import React from 'react';
import hero from './Saly-13.png';
import {
  FaSun,
  FaMoon,
  FaArrowRight,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
} from 'react-icons/fa';
//import './lightscreen.css';
//import './darkscreen.css';
import './dark_screen_responsive.css';

function Screen() {
  return (
    <div className='container'>
      <header className='nav'>
        <a href='#' className='resume_link resume'>
          Resume
        </a>{' '}
        <span className='swtich'>
          <FaSun className='switch_size_controller' />
        </span>
      </header>
      <body className='body_flex'>
        <div className='body_text_flex'>
          <h1 className='body_heading'>
            Hii! I’m Irfan Asif. Web{' '}
            <span className='text_decoration1'>Designer</span> and Web{' '}
            <span className='text_decoration2'>Developer</span>
          </h1>
          <p className='body_description'>
            I’m a 2nd year under graduate student who is enthusiastic about
            tech. I am a full web devloper and currently learning DevOps{' '}
          </p>
        </div>
        <div className='Image_container'>
          <img src={hero} alt='Hero' className='hero' />
        </div>
      </body>
      <fotter>
        <div className='footer'>
          <button className='button'>
            {" "}Connect with me <FaArrowRight />
          </button>
          <div className='socials'>
            <a href='#'>
              <FaLinkedin className='social_icon linkedin' />
            </a>
            <a href='#'>
              <FaTwitter className='social_icon twitter' />
            </a>
            <a href='#'>
              <FaGithub className='social_icon github' />
            </a>
            <a href='#'>
              <FaInstagram className='social_icon Instagram' />
            </a>
          </div>
        </div>
      </fotter>
    </div>
  );
}

export default Screen;
