/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { resizeName } from "../../utils/sizes";

export default function SampleProduct({ data }) {
  return (
    <div className="bg-white">
      <div className="mx-auto container py-4  sm:py-8">
        <div className="grid grid-cols-2 gap-x-2 gap-y-10 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 xl:gap-x-4">
          {data?.length > 0 &&
            data
              ?.filter((item) =>
                item?.description?.subcategory?.includes("top rated")
              )
              .map((product) => (
                <Link to={`/productDetails/${product?._id}`} key={product?._id}>
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 ">
                      <img
                        src={`http://localhost:20220/images/${product?.images?.[0].filename}`}
                        alt="product Image"
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>

                    <p className="absolute top-0 bg-red-500 px-2 py-[2px] text-sm font-semibold text-gray-100">
                      30% OFF
                    </p>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-base text-gray-700">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product?.description?.discount}
                        </h3>
                        <p className="mt-1 text-base font-abc text-gray-500 font-bold">
                          {resizeName(product?.description?.productName, 20)}
                        </p>
                      </div>
                      <p className="text-base font-medium text-gray-900">
                        {product?.description?.price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
}
