import CategoryItem from "./CategoryItem";

const NewCategory = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between">
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
        </div>
      </div>
    </div>
  );
};

export default NewCategory;
