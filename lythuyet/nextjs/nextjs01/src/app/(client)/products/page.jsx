import ProductList from "./ProductList";
import SearchForm from "./SearchForm";

export default function ProductPage({ searchParams }) {
  console.log(searchParams);

  return (
    <div>
      <h1>ProductPage</h1>
      <ProductList />
      <SearchForm />
    </div>
  );
}
