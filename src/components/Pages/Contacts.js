import React from "react";
import map from "../../img/map.png";
import mark from "../../img/mark.png";
import Instagram from "../../img/Instagram.png";
import Telegram from "../../img/Telegram.png";
import Whatsapp from "../../img/Whatsapp.png";
import VK from "../../img/VK.png";
import phone from "../../img/phone.png";

const Contacts = () => {
  return (
    <main className="page">
      <div className="our-contact">
        <div className="we-on-map">
          <div className="map">
            <img src={map} />
          </div>
          <div className="adress">
            <div className="wrapper">
              <img src={mark} />
            </div>
            <div>Аксай-3а, 62ф, Алматы, Казахстан</div>
            <div>3 этаж 35 кабинет</div>
          </div>
        </div>
        <div className="social">
          <a title="VK" href="https://vk.com">
            <img src={VK} />
          </a>
          <a title="Instagram" href="https://www.instagram.com">
            <img src={Instagram} />
          </a>
          <a title="Telegram" href="https://web.telegram.org/">
            <img src={Telegram} />
          </a>
          <a title="Whatsapp" href="https://www.whatsapp.com">
            <img src={Whatsapp} />
          </a>
        </div>
        <div className="number-phone">
          {" "}
          <img src={phone} />
          <div>+7 777 777 77 77</div>
        </div>
      </div>
    </main>
  );
};

export default Contacts;
