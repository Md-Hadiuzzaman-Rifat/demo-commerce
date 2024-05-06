

const ProductLayout2 = () => {
  return (
    <div >
      <div className="relative flex flex-col items-center">
        <img
          src="https://demo-commerce-backend.vercel.app/images/1714746813232_gray.jpg"
          alt=""
        />
        <div className="flex items-center bg-white w-[120px] rounded-md absolute bottom-[-10px] justify-center gap-2 shadow-lg">
            <p className="font-semibold">৳1000</p>
            <p className="font-thin line-through">৳800</p>
        </div>
      </div>

      <div><p className="text-center mt-4 bg-gray-800 text-white p-1 cursor-pointer font-semibold"> + Add To Cart</p></div>
    </div>
  );
};

export default ProductLayout2;
