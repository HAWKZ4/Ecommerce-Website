import { ProductCardF } from "../../../components/Elements";
import { useSelector } from "react-redux";

export const BestSellingProducts = () => {
  // const [products, setProducts] = useState([]);




  const products = useSelector(state => state.cartState.allProducts)

  const bestSelling = products.filter((product) => product.best_selling)
  // console.log(bestSelling)

  // useEffect(() => {
  //   async function getProducts() {
  //     const response = await fetch("http://localhost:8000/best_selling");
  //     const data = await response.json();
  //     setProducts(data);
  //     console.log(data)
  //   }
  //   getProducts();
  // },[]);

  return (
    <div className="bestSellingProducts ">
      <h1 className="pt-10 pb-5 text-center text-2xl dark:text-white font-semibold">
        Best Selling Products
      </h1>
      <div className="products flex flex-wrap justify-between">

        {bestSelling.map((product) => (
          <ProductCardF key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
