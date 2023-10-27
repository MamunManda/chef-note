import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Title from "../components/Title";
import KitchenItem from "../components/KitchenItem";

const Kitchen = () => {
  const { user } = useContext(AuthContext);
  const [recipies, setRecipies] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/cart?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setRecipies(data));
  }, [user]);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = recipies.filter((item) => item._id != id);
          setRecipies(remaining);
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto pt-10">
      <Title>Total {recipies.length} recipies in The Kitchen</Title>
      <div className="grid grid-cols-1 gap-10">
        {recipies.map((recipie) => (
          <KitchenItem
            key={recipie._id}
            handleDelete={handleDelete}
            recipie={recipie}
          ></KitchenItem>
        ))}
      </div>
    </div>
  );
};
export default Kitchen;
