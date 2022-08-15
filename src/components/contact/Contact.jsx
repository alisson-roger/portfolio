import './contact.css';

import { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_gasxkm9',
        'template_07jk52c',
        formRef.current,
        '3Mi8mtMH-vJWG5JUH'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg">
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Let's discuss your project</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img
                  src="https://raw.githubusercontent.com/safak/youtube/react-portfolio-website/src/img/phone.png"
                  alt=""
                  className="c-icon"
                />
                + 1 1234 556 75
              </div>
              <div className="c-info-item">
                <img
                  src="https://raw.githubusercontent.com/safak/youtube/react-portfolio-website/src/img/email.png"
                  alt=""
                  className="c-icon"
                />
                contact@gmail.com
              </div>
              <div className="c-info-item">
                <img
                  src="https://raw.githubusercontent.com/safak/youtube/react-portfolio-website/src/img/address.png"
                  alt=""
                  className="c-icon"
                />{' '}
                Far - Far Away
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>Nullam tincidunt augue et magna ultrices scelerisque.</b> Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                style={{ backgroundColor: darkMode && '#333' }}
                type="text"
                placeholder="Name"
                name="user_name"
              />
              <input
                style={{ backgroundColor: darkMode && '#333' }}
                type="text"
                placeholder="Subject"
                name="user_subject"
              />
              <input
                style={{ backgroundColor: darkMode && '#333' }}
                type="Email"
                placeholder="Name"
                name="user_email"
              />
              <textarea
                style={{ backgroundColor: darkMode && '#333' }}
                rows="5"
                placeholder="Message"
                name="message"
              />
              <button>Submit</button>
              {done && 'Thank you'}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
