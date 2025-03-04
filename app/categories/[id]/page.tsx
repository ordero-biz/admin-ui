type CategoryPageParams = {
  id: string
};

type CategoryPageProps = {
  params: Promise<CategoryPageParams>;
};

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { id } = await params;

  return (
    <h1>Category {id}</h1>
  );
};

export default CategoryPage;