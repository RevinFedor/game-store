import React, { useEffect, useState } from "react";
import stat from "../../img/stat.png";
import arrival from "../../img/arrival.png";
import basket2 from "../../img/basket2.png";
import whatsapp from "../../img/whatsapp 2.png";
import { useParams } from "react-router-dom";

import array from "../../store/gamesFull";
import useShop from "../../store/ShopContext";

// Удаление строки из массива
// array.map((el) =>{
//       const description = el.description
//         .substring(el.description.indexOf("указанный в процессе покупки. "))
//         .slice(15,el.description.indexOf("указанный в процессе покупки. "))
//         el.description = description
//     }
//     );
//   console.log(array);

const SingleCard = () => {
  const [state, setState] = useState([]);

  // Динамический роутинг
  const { id } = useParams();
  useEffect(() => {
    const data = array.find((el) => el.link === id);
    setState(data);
  }, [id]);


  const { cartGames, addToCart, removeToCart } = useShop();
  const [isGame, setIsGame] = useState(false);

  useEffect(() => {
    const favouritesIsIn = cartGames.find((el) => el.title === state.title);
    if (favouritesIsIn) {
      setIsGame(true);
    } else setIsGame(false);
  }, [cartGames, state.title]);

  const hadleClick = ()=>{
    const cartGames = {
      title: state.title,
      price: state.price,
      link: state.link,
      image: state.image,
      amount: 1
    };
    if (isGame) {
      removeToCart(cartGames);
    } else addToCart(cartGames); 
  }
  return (
    <main className="page">
      <div className="about_game">
        <div className="colomn_left">
          <div className="sketch">
            <img className="sketch" src={state.image} />
          </div>
          <div className="sketch">
            <img src={state.image} />
          </div>
          <div className="sketch">
            <img src={state.image} />
          </div>
          <div className="cover">
            <img src={state.image} />
          </div>
          <div className="reviews">
            <div className="reviews-title">Отзывы</div>
            <div className="wrapper">
              <img src={stat} />
            </div>
            <div className="reviews-rating">4.7</div>
            <div className="wrapper">
              <img src={arrival} />
            </div>
          </div>
        </div>
        <div className="colomn_right">
          <div className="cart__information">
            <div className="cart__information_title">{state.title}</div>
            <div className="cart__information_price">{state.price} P</div>
            <div className="cart__information_rating">
              <div className="wrapper">
                <img src={stat} />
              </div>
              <div className="reviews-rating">4.7</div>
            </div>
          </div>
          <div className="card_buttons">
            <button onClick={hadleClick} className="add-to-basket">
              <div className="wrapper">
                {" "}
                <img src={basket2} />
              </div>
              <div className="add-to-basket text">
                {isGame ? "Удалить из корзины" : "Добавить в корзину"}
              </div>
            </button>
            <button className="checkout">
              <div className="checkout text">Оформить заказ</div>
            </button>
            <button className="contact">
              <div className="wrapper">
                <img src={whatsapp} />
              </div>
              <div className="contact text">Связаться</div>
            </button>
          </div>
          <div className="article">
            <h1>Описание и характеристики</h1>
            <h2>Жанры</h2>
            <span className="article__genres">
              {state.genre
                ? state.genre.map((el, index) => (
                    <p key={index} className="article__genre">
                      {el}
                    </p>
                  ))
                : "Не указан"}
            </span>
            <h2>Об Игре</h2>
            <p>{state.description}</p>
            <h2>Системные требования</h2>
            <ul>
              <li>
                <b>ОС:</b> Windows 10 (64-разрядная)
              </li>
              <li>
                <b>Процессор:</b> Intstate Core i5 или эквивалентный
              </li>
              <li>
                <b>Оперативная память:</b> 8 ГБ ОЗУ
              </li>
              <li>
                <b>Видеокарта:</b> С поддержкой Vulkan (Nvidia GeForce 900
                series / AMD Radeon RX 400 series)
              </li>
              <li>
                <b>Место на диске:</b> 2 ГБ
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </main>
  );
};

export default SingleCard;
