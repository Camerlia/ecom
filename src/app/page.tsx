
import ProductList from "@/components/ProductList"
import Image from "next/image"

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div>
    <div className=' relative aspect-[3/1] my-12'>
      <Image src={'/featured.jpg'} alt="featured image" fill className=" object-cover" />
      
    </div>
     <ProductList category={category} params="homepage" />
    </div>
  )
}

export default Homepage