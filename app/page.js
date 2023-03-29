import { Suspense } from "react";

export const config = { runtime: "edge" };
export const revalidate = 0;

async function Product({ data }) {
  const product = await data.then((res) => res.json());

  return (
    <p
      style={{
        background: (() => {
          switch (product.id) {
            case "1":
              return "lightgreen";
            case "2":
              return "pink";
            case "3":
              return "dodgerblue";
            default:
              return "cyan";
          }
        })(),
      }}
    >
      {product.id} - {product.name} {new Array(2500).fill(".").join("")}
    </p>
  );
}

export default async function Web() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-purple-700">Web</h1>
      <Product
        data={fetch(`https://app-dir.vercel.app/api/products?id=1&delay=400`, {
          cache: "no-store",
        })}
      />
      <Suspense fallback={<p>Loading Product 2 (3s)...</p>}>
        <Product
          data={fetch(
            `https://app-dir.vercel.app/api/products?id=2&delay=3000`,
            {
              cache: "no-store",
            }
          )}
        />
      </Suspense>
      <Suspense fallback={<p>Loading Product 3 (5s)...</p>}>
        <Product
          data={fetch(
            `https://app-dir.vercel.app/api/products?id=3&delay=5000`,
            {
              cache: "no-store",
            }
          )}
        />
      </Suspense>
      <Suspense fallback={<p>Loading Product 4 (10s)...</p>}>
        <Product
          data={fetch(
            `https://app-dir.vercel.app/api/products?id=4&delay=10000`,
            {
              cache: "no-store",
            }
          )}
        />
      </Suspense>
    </div>
  );
}
