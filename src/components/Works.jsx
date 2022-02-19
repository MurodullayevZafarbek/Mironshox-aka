import './Style/Works.css';

function Works() {
  return (
     <div className="Works">
        <div className="container">
           <h1>Наши работы</h1>
           <ul>
              <li><a href="">Все проекты</a></li>
              <li><a href="">Landing page</a></li>
              <li><a href="">Корпоративные сайты </a></li>
              <li><a href="">Интернет магазини</a></li>
              <li><a href="">Мобильные приложения</a></li>
              <li><a href="">Лого брендинг</a></li>
              <li><a href="">СММ</a></li>
           </ul>
           <li className="ul">
           Все проекты
            <ul>
               <li><a href=""></a></li>
               <li><a href="">Landing page</a></li>
               <li><a href="">Корпоративные сайты </a></li>
               <li><a href="">Интернет магазини</a></li>
               <li><a href="">Мобильные приложения</a></li>
               <li><a href="">Лого брендинг</a></li>
               <li><a href="">СММ</a></li>
            </ul>
           </li>
           <div className="projects">
              <div className="project">
                  <div className="project1">
                     <div className="text">
                        <p>интернет магазин</p>
                        <h3>Tujjor</h3>
                        <div className="border"></div> 
                     </div>
                     <img src="Project1.png" alt="" />
                 </div>
                 <div className="project1">
                    <div className="text">
                       <p>интернет магазин</p>
                        <h3>Tujjor</h3>
                        <div className="border"></div>
                    </div>
                    <img src="Project2.png" alt="" />
                 </div>
                 <div className="project1">
                    <div className="text">
                       <p>интернет магазин</p>
                        <h3>Tujjor</h3>
                        <div className="border"></div>
                    </div>
                     <img src="Project3.png" alt="" />
                  </div>
              </div>
              <div className="project">
                  <div className="project1">
                     <div className="text">
                        <p>интернет магазин</p>
                        <h3>Tujjor</h3>
                        <div className="border"></div>
                     </div>
                     <img src="Project4.png" alt="" />
                 </div>
                 <div className="project1">
                    <div className="text">
                       <p>интернет магазин</p>
                        <h3>Tujjor</h3>
                        <div className="border"></div>
                    </div>
                    <img src="Project5.png" alt="" />
                 </div>
                 <div className="project1">
                    <div className="text">
                       <p>интернет магазин</p>
                        <h3>Tujjor</h3>
                        <div className="border"></div>
                    </div>
                    <img src="Project6.png" alt="" />
                  </div>
               </div>
           </div>
        </div>
    </div>
  );
}

export default Works;
