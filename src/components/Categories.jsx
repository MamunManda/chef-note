import { useLoaderData } from "react-router-dom";
import Title from "./Title";
import CategorySingle from "./CategorySingle";

const Categories = () => {
  const { categories } = useLoaderData();
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
