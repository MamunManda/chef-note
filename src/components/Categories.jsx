import { useLoaderData, useNavigation } from "react-router-dom";
import Title from "./Title";
import CategorySingle from "./CategorySingle";
import Loading from "../pages/Loading";

const Categories = () => {
  const { categories } = useLoaderData();
  const navigation = useNavigation();
  console.log(navigation.state);
  if (navigation.state == "loading") {
    return <Loading></Loading>;
  }

  //   console.log(categories);
  return (
    <section id="categories" className="w-11/12 mx-auto py-16">
      <Title>Categories</Title>
      {categories.map((category) => (
        <CategorySingle
          key={category.idCategory}
          data={category}
        ></CategorySingle>
      ))}
    </section>
  );
};

export default Categories;
