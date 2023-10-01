const FoodCard = ({ food }) => {
  console.log(food);
  return (
    <div className="shadow-xl rounded-lg">
      <img className=" rounded-lg" src={food?.strMealThumb} alt="" />
    </div>
  );
};

export default FoodCard;
