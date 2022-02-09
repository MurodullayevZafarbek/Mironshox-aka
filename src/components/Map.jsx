import './Style/Map.css';
function Map() {
   return (
      <div className="Map">
         <div className="iframe">
            <iframe width="1268" height="713" src="https://www.google.com/maps/place/UMDSOFT/@41.3644491,69.294234,17z/data=!3m1!4b1!4m5!3m4!1s0x38aef3df0d3d5ead:0xa134371038f78e4e!8m2!3d41.3644395!4d69.2964282" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="back"></div>
            <form action="">
               <h2>Cвяжитесь с нами</h2>
               <label htmlFor="">Имя</label>
               <input type="text" placeholder="Ваше имя" />
               <label htmlFor="">Имя</label>
               <input type="text" placeholder="Ваш номер" />
               <label htmlFor="">Имя</label>
               <textarea placeholder="Оставьте отзыв" ></textarea>
               <button type="submit">Отправить сообщение</button>
            </form>
         </div>
      </div>
   );
}
export default Map;