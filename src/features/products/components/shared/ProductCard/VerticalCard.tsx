import Image from "next/image";
import Link from "next/link";
import { addItem } from "@/redux/store";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import type { ProductProps } from "@/features/products/api/types";
import { calculatePriceAfterDiscount } from "@/utils";
import { useAppDispatch } from "@/redux/hooks";

export default function VerticalCard({ product }: { product: ProductProps }) {
     const dispatch = useAppDispatch();
  const priceAfterDiscount = calculatePriceAfterDiscount({ price:product.price, discountPercentage:product.discountPercentage });

  const calcStars = () => {
    var stars = [];
    for (let i = 1; i <= Math.round(product.rating); i++) stars.push(1);
    for (let i = 1; i <= 5 - stars.length; i++) stars.push(0);
    return stars;
  };
  const addItemHandler = () => {
    console.log(priceAfterDiscount);
    dispatch(addItem({...product, quantity:1, price:priceAfterDiscount}));
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-white shadow-md">
      <Link href={"/products/" + product?.id} scroll={true}>
        <Image
          src={product?.thumbnail}
          alt={product?.title}
          width="0"
          height="0"
          className="h-60 w-full rounded-t-lg object-cover"
          unoptimized={true}
        />
      </Link>
      <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-red-500 text-center text-sm text-white">
        {product?.discountPercentage}%
      </span>
      <div className="mt-4 px-5 pb-5">
        <div className="mb-2">
          <h6 className="text-stone-400">{product?.brand}</h6>
        </div>
        <Link
          href={"/products/" + product?.id}
          title={product?.title}
          scroll={true}
        >
          <h5 className="text-xl font-semibold tracking-tight text-slate-900">
            {product?.title.length <= 20
              ? product?.title
              : product?.title.substr(0, 20) + "..."}
          </h5>
        </Link>
        <div className="mt-2.5 mb-5 flex items-center">
          <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
            {product.rating}
          </span>
          {calcStars().map((s, i) =>
            s == 1 ? (
              <FaStar key={"icon-" + i} className="text-yellow-500" />
            ) : (
              <FaRegStar key={"icon-" + i} className="text-yellow-500" />
            )
          )}
        </div>
        <div className="flex items-center justify-between">
          <p>
            <span className="font-bold">$</span>
            <span className="text-3xl font-bold text-slate-900">
              {priceAfterDiscount.toFixed(2)}
            </span>
            <span className="text-sm text-slate-900 line-through">
              {product?.price}
            </span>
          </p>
          <button
            className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={addItemHandler}
            title="Add to Cart"
          >
            <FaCartShopping />
          </button>
        </div>
      </div>
    </div>
  );
}