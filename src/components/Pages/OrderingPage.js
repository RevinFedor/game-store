import React, { useState } from "react";
import visa from "../../img/visa.png";
import arrival from "../../img/arrival.png";
import promo from "../../img/promo.png";
import arrival2 from "../../img/arrival2.png";
import useShop from "../../store/ShopContext";

const OrderingPage = () => {
  const { cartGames, total } = useShop();
  const [hideOrder, setHideOrder] = useState(true);
  console.log(hideOrder);
  return (
    <>
      <main class={`page ${hideOrder ? "" : "displaynone"}`}>
        <div class="ordering">
          <div class="ordering-title">Оформление заказа</div>
          <div class="customer-info">
            <div class="customer-info-title">Информация о клиенте</div>
            <input type="text" placeholder="Электронная почта" />
            <input type="text" placeholder="ФИО" />
          </div>
          <div class="order">
            <div class="order-title">Ваш заказ</div>
            {cartGames.map((game) => (
              <div class="string">
                <div class="string-icon">{game.amount}×</div>
                <div class="string-text">{game.title}</div>
                <div class="string-last">₽ {game.price} </div>
              </div>
            ))}

            <div class="string">
              <div class="string-icon"></div>
              <div class="string-text">К оплате</div>
              <div class="string-last">₽ {total} </div>
            </div>
          </div>
          <div class="payment">
            <div class="payment-title">Способ оплаты</div>
            <div class="string">
              <div class="string-icon">
                <img src={visa} />
              </div>
              <div class="string-text">Счет на kaspi.kz</div>
              <div class="string-last">
                <img src={arrival} />
              </div>
            </div>
            <div class="string">
              <div class="string-icon">
                <img src={promo} />
              </div>
              <div class="string-text lite">Есть промокод?</div>
              <div class="string-last">
                <img src={arrival2} />
              </div>
            </div>
          </div>
          <div class="customer-number">
            <div class="customer-number-title">Номер получателя</div>
            <input type="text" placeholder="+7 ___ ___ __ __" />
          </div>
          <button id="finish-order" onClick={() => setHideOrder(!hideOrder)}>
            Закончить оформление
          </button>
        </div>
      </main>
      <div class={`hideOrder ${hideOrder ? "displaynone" : ""}`}>
        <span className="hideOrder__title">
          Номер вашего заказа №123123, с Вами свяжется наш менеджер.
        </span>
        <button
          className="hideOrder__btn"
          onClick={() => setHideOrder(!hideOrder)}
        >
          Отменить оформление
        </button>
      </div>
    </>
  );
};

export default OrderingPage;
