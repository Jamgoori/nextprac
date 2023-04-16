import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

const products = ["shirt", "pants", "skirt", "shoes"];
export default function page({ params }: Props) {
  return (
    <div>
      <h1>제품 소개 페이지~!</h1>
      <div>{params.slug} 레시피!!</div>
      <div>{params.slug} 무봤나 ㅋㅋ </div>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
