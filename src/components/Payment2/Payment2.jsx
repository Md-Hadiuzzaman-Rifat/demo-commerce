
const Payment2 = () => {
    return (
        <div className="m-4">
            <div className=" w-full flex flex-wrap flex-col items-center">
                <div className="flex flex-col  gap-2  items-center">
                    <img src="public/bkash_logo.png" className="w-32 p-2" alt="" />
                    <div className="flex flex-wrap justify-around w-full">
                        <div className="p-4 border  rounded-lg">
                            <span>Urban Region BD</span>
                        </div>
                        <div className="p-4 border rounded-lg">
                            price
                        </div>
                    </div>
                    {/* // transaction start  */}
                    <div className="max-w-[450px] p-4 flex flex-col gap-4 justify-center rounded-md bg-[#d93569c5] divide-y divide-[#c2305e] text-gray-100 text-sm leading-6">
                    <p>১. <span className="text-yellow-300 font-bold">*247#</span> ডায়েল করে আপনার Bkash মোবাইল মেনু তে যান অথবা BKASH App এ যান। </p>
                    
                    <p>২. <span className="text-yellow-300 font-bold">Payment</span> এ ক্লিক করুন। </p>
                    <p>৩. প্রাপক নম্বর হিসেবে লিখুন <span className="text-yellow-300 font-bold">01970134360</span></p>
                    <p>৪. ডেলিভারি চার্জ পরিশোধ করে অর্ডার কনফর্ম করুন।</p>
                    <p>৫. সব কিছু ঠিক থাকলে BKASH থেকে একটি বার্তা পাবেন।</p>
                    <p>৬। আপনার বিকাশ নম্বর ও <span className="text-yellow-300 font-bold">Transaction ID</span> দিয়ে নিচের ফর্ম পুরন করুন। </p>
                    <p>
                        <input type="text" className="w-full text-black text-sm border-0 rounded-md py-[6px] font-bold" placeholder="Bkash নম্বর"/>
                        
                        <input type="text" className="w-full text-black text-sm border-0 rounded-md py-[6px] font-bold mt-2" placeholder="Transaction Id"/>
                        
                    </p>
                    </div>
                    {/* transaction end   */}
                    <button className="bg-[#d93569c5] w-full text-white p-2 rounded-md font-semibold">Verify</button>
                </div>
            </div>
        </div>
    );
};

export default Payment2;