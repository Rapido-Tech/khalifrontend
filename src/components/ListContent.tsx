// import useSwr from "swr";

// import type { ProductTypeList } from "@/types";

// import ProductsLoading from "./ProductLoading";
// import ProductItem from "./ListProductItem";

// const ListContent = () => {
//   const fetcher = (url: string) => fetch(url).then((res) => res.json());
//   const { data, error } = useSwr("/api/products", fetcher);

//   if (error) return <div>Failed to load users</div>;
//   return (
//     <>
//       {!data && <ProductsLoading />}

//       {data && (
//         <section className="products-list">
//           {data.map((item: ProductTypeList) => (
//             <ProductItem
//               id={item.id}
//               name={item.name}
//               price={item.price}
//               color={item.color}
//               currentPrice={item.currentPrice}
//               key={item.id}
//               images={item.images}
//             />
//           ))}
//         </section>
//       )}
//     </>
//   );
// };

// export default ListContent;
