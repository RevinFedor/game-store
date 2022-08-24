import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useShop from "../store/ShopContext";
import CartItem from "./CartItem";
import CatalogCard from "./Pages/CatalogCard.js";

const Cart = () => {
  const { cartGames, total } = useShop();

  return (
    <main class="page">
      <div class="basket">
        <div class="basket-title">Корзина</div>
        <div class="delayed">
          {cartGames.map((game) => (
            <CartItem
              key={game.link}
              amount={game.amount}
              image={game.image}
              title={game.title}
              price={game.price}
              link={game.link}
            />
          ))}
        </div>
        <div class="pre-order">
          <div class="total">
            <div>ИТОГ</div>
            <div class="total-price">{total}</div>
          </div>
          <Link to="/ordering">Оформить заказ</Link>
        </div>
      </div>
    </main>
  );
};

export default Cart;
