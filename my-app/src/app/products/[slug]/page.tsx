import { getProduct, getProducts } from "@/service/products";

export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}
// 전체데이터 말고, 현재 slug페이지에서 필요한 데이터만 받아온다. 마찬가지로 데이터를 불러오기때문에 비동기로 처리한다.
export default async function Productpage({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  if (!product) {
    return <div>Not Found 404</div>;
  }
  //서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌
  return <h1>{product.name} 제품 소개 페이지~!</h1>;
}

export async function generateStaticParams() {
  //모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄것 (SSG)
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
