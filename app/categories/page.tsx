import Test from './Test';

const CategoriesPage = () => {
  return (
    <>
      <h1>Categories</h1>
      <ul>
        <li>
          <Test href="/categories/1">Category 1</Test>
        </li>
        <li>
          <Test href="/categories/2">Category 2</Test>
        </li>
      </ul>
    </>
  );
};

export default CategoriesPage;