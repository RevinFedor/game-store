import React, { useEffect, useState } from "react";
import array from "../../store/gamesFull";
import ButtonFilter from "../UI/ButtonFilter";
import CatalogCard from "./CatalogCard.js";

const Catalog = () => {
  const [dataFilter, setDataFilter] = useState(array);
  const [totalPage, setTotalPage] = useState(0);

  // поиск
  const [refer, setRefer] = useState("");
  useEffect(() => {
    setTotalPage(0);
    const arraySearch = array.filter((game) => {
      return game.title.toLowerCase().includes(refer.toLowerCase());
    });
    setDataFilter(arraySearch);
  }, [refer]);

  // фильтрация
  const filterArrow = ["Экшен", "Инди игры", "Симуляторы", "Стратегии"];
  const [active, setActive] = useState(filterArrow[0]); // активная кнопка
  const cartFilter = (genre) => {
    setTotalPage(0)
    setActive(genre);
    if (genre === "Все") {
      setDataFilter(array);
      return;
    }
    // Просматриваем жанр кнопки и подставляем его в филтрацию
    const arrayFilter = array.filter((el) => el.genre.includes(genre));
    setDataFilter(arrayFilter);
  };

 


  return (
    <main className="page">
      <div className="filter">
        <div className="filter_bunttons">
          {filterArrow.map((el) => (
            <ButtonFilter
              key={el}
              active={active}
              filter={el}
              cartFilter={cartFilter}
            />
          ))}
        </div>
        <input
          className="filter_search"
          type="text"
          onChange={(event) => {
            setRefer(event.target.value);
          }}
          placeholder="Поиск..."
        />
      </div>
      <div className="page__buttons">
        <button
          className="page__button_btn"
          onClick={() => {
            if (totalPage < 12) {
              let total = array.length - 12;
              setTotalPage(total);
              return;
            }
            let total = totalPage - 12;
            setTotalPage(total);
          }}
        >
          Предыдущая страница
        </button>
        <div>
          Страницы {totalPage} - {totalPage + 12} из {array.length}
        </div>
        <button
          className="page__button_btn"
          onClick={() => {
            if (totalPage > array.length - 13) {
              let total = 0;
              setTotalPage(total);
              return;
            }
            let total = totalPage + 12;
            setTotalPage(total);
          }}
        >
          Следующая страница
        </button>
      </div>
      <div className="block-game">
        <div className="block-game-preview">
          {dataFilter.slice(totalPage, totalPage + 12).map((game) => (
            <CatalogCard
              key={game.link}
              link={game.link}
              image={game.image}
              price={game.price}
              title={game.title}
              {...game}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Catalog;
