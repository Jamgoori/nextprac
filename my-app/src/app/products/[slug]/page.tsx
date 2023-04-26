import { getProduct, getProducts } from "@/service/products";
import Link from "next/link";

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

export default function page({ params: { slug } }: Props) {
  const product = getProduct(slug);

  if (!product) {
    return <div>Not Found 404</div>;
  }
  //서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌
  return <h1>{slug}제품 소개 페이지~!</h1>;
}

export function generateStaticParams() {
  //모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄것 (SSG)
  const products = getProducts();
  return products.map((product) => ({
    slug: product,
  }));
}
