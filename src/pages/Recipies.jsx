import { useEffect, useState } from "react";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";
import FoodCard from "../components/FoodCard";

const Recipies = () => {
  const [cat, setCat] = useState([]);
  const { state } = useLocation();
  const [catItems, setCatItems] = useState([]);

  const [activeCat, setActiveCat] = useState("");

  useEffect(() => {
    if (state?.strCategory) {
      setActiveCat(state.strCategory);
    } else if (cat.length) {
      setActiveCat(cat[0].strCategory);
    }
  }, [cat, state?.strCategory]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeCat}`)
      .then((res) => res.json())
      .then((data) => setCatItems(data.meals));
  }, [activeCat, cat]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((res) => res.json())
      .then((data) => setCat(data.meals));
  }, []);

  console.log(catItems);

  if (!cat.length) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="text-center py-5">
        <h2 className="text-3xl border-b-4 inline-block pb-2 border-orange-400">
          Categories
        </h2>
      </div>

      <div className="tabs flex flex-wrap gap-3 justify-center">
        {cat.map((item, index) => (
          <button
            className={`text-sm ${activeCat == item.strCategory && "active"}`}
            key={index}
            onClick={() => setActiveCat(item.strCategory)}
          >
            {item.strCategory}
          </button>
        ))}
      </div>

      <div className=" grid grid-cols-3 gap-5 py-10">
        {catItems?.map((food) => (
          <FoodCard key={food.idMeal} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default Recipies;
