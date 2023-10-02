import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

const CategorySingle = ({ data: category }) => {
  const { strCategory, idCategory, strCategoryThumb } = category || {};
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`)
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, []);

  if (foods.length <= 4) return;

  return (
    <div className="py-5">
      <div className="">
        <h2
          className={`text-4xl font-bold relative ${
            idCategory % 2 == 0
              ? `text-start border-s-4 ps-3`
              : `text-right border-e-4 pe-3`
          }   border-orange-400`}
        >
          {strCategory}
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 pt-10 pb-5">
        {foods.slice(0, 4).map((food) => (
          <FoodCard key={food.idMeal} food={food}></FoodCard>
        ))}
      </div>
      <div className="text-center">
        <button>See All Recipe </button>
      </div>
    </div>
  );
};

export default CategorySingle;
