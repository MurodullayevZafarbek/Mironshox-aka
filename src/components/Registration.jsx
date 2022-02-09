import './Style/Registration.css';
function Registration() {
   return (
      <div className="Registration">
         <div className="container">
            <form action="">
               <h2>Заполните форму прямо сейчас и получите квалифицированную</h2>
               <label htmlFor="">Название организации</label><br />
               <input type="text" placeholder="Пример : ITMAKER" name="" />
               <div className="check">
                  <label>
                     <input type="checkbox" />
                     <div className="checkbox"></div>
                  </label>
                  <div className="bordered"></div>
                  <label>
                     <input type="checkbox" />
                     <div className="checkbox"></div>
                  </label>
                  <div className="bordered"></div>
                  <label>
                     <input type="checkbox" />
                     <div className="checkbox"></div>
                  </label>
                  <div className="bordered"></div>
                  <label>
                     <input type="checkbox" />
                     <div className="checkbox"></div>
                  </label>
               </div>
               <div className="btn">
                  <div className="btn-prev">
                     <svg width="43" height="20" viewBox="0 0 43 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.11612 10.8839C0.62796 10.3957 0.62796 9.60427 1.11612 9.11611L9.07107 1.16116C9.55922 0.673008 10.3507 0.673008 10.8388 1.16116C11.327 1.64932 11.327 2.44077 10.8388 2.92893L3.76777 10L10.8388 17.0711C11.327 17.5592 11.327 18.3507 10.8388 18.8388C10.3507 19.327 9.55922 19.327 9.07107 18.8388L1.11612 10.8839ZM43 11.25L2 11.25L2 8.75L43 8.75L43 11.25Z" fill="#202020"/>
                     </svg>
                  </div>
                  <div className="btn-next">
                     <svg width="72" height="24" viewBox="0 0 72 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M71.0607 13.0607C71.6464 12.4749 71.6464 11.5251 71.0607 10.9393L61.5147 1.3934C60.9289 0.807617 59.9792 0.807617 59.3934 1.3934C58.8076 1.97919 58.8076 2.92894 59.3934 3.51472L67.8787 12L59.3934 20.4853C58.8076 21.0711 58.8076 22.0208 59.3934 22.6066C59.9792 23.1924 60.9289 23.1924 61.5147 22.6066L71.0607 13.0607ZM-1.31134e-07 13.5L70 13.5L70 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z" fill="#DFBB7F"/>
                     </svg>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
}

export default Registration;