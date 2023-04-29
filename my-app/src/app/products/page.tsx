import { getProducts } from "@/service/products";
import Link from "next/link";

export const revalidate = 3;

export default async function page() {
  //서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
  // 데이터를 가져오는 작업이기때문에 비동기로 처리한다.
  const products = await getProducts();
  return (
    <>
      <div>제품 소개 페이지 입니다.</div>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {/* id로 받아오고, 출력은 name */}
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
