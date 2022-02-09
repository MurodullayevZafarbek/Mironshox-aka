import './Style/About.css';

function About() {
   return (
      <div className="About">
         <div className="top">
            <i class="fa-solid fa-angle-up"></i>
         </div>
         <div className="container">
            <div className="content">
               <div className="text">
                  <h1>О нас</h1>
                  <p>Качественный сайт – это основа продвижения Вашего бизнеса в интернете. Он создаёт имидж компании и  увеличивает Ваши продажи 24/7. Мы сделаем для Вас рабочий инструмент, который значительно поможет в развитии бизнеса.
                     Качественный сайт – это основа продвижения Вашего бизнеса в интернете. Он создаёт имидж компании и  увеличивает Ваши продажи 24/7. Мы сделаем для Вас рабочий инструмент, который значительно поможет в развитии бизнеса.
                  </p>
               </div>
               <div className="btn-second">
                  <a href="">
                     Подробнее
                        <svg width="72" height="20" viewBox="0 0 72 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M70.8839 10.8839C71.372 10.3957 71.372 9.60428 70.8839 9.11612L62.9289 1.16117C62.4408 0.673015 61.6493 0.673015 61.1612 1.16117C60.673 1.64933 60.673 2.44078 61.1612 2.92894L68.2322 10L61.1612 17.0711C60.673 17.5592 60.673 18.3507 61.1612 18.8388C61.6493 19.327 62.4408 19.327 62.9289 18.8388L70.8839 10.8839ZM-1.09278e-07 11.25L70 11.25L70 8.75001L1.09278e-07 8.75L-1.09278e-07 11.25Z" fill="#DFBB7F" />
                        </svg>
                  </a>
               </div>
            </div>
            <img src="Bacground2.png" alt="" />
         </div>
      </div>
   );
}

export default About;
