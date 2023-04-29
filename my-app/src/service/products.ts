import path from "path";
import { promises as fs } from "fs";

export type Product = {
  id: string;
  name: string;
  price: number;
};

// 상품전체 데이터 끌어오기 , 데이터를 가져오는것이기 때문에 비동기 함수를 사용한다.
export async function getProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), "data", "products.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

// 끌어온 데이터중에서 item찾기 , id통해서
// find함수는 있으면 찾아내고, 없으면 undefined이기 때문에 타입도 정해줌 (가본적으로 Promise 타입이고, Product 타입 또는 undefined일수도있다.)
export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((item) => item.id === id);
}
