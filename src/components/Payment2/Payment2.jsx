
const Payment2 = () => {
    return (
        <div>
            <div className=" w-full flex flex-wrap flex-col items-center">
                <div className="flex flex-col items-center">
                    <img src="public/bkash_logo.png" className="w-32" alt="" />
                    <div className="flex flex-wrap justify-around w-full">
                        <div className="p-4 border  rounded-lg">
                            company name
                        </div>
                        <div className="p-4 border rounded-lg">
                            price
                        </div>
                    </div>
                    {/* // transaction start  */}
                    <div className="max-w-[350px]">
                    <p>১. *247# ডায়েল করে আপনার BKASH মোবাইল মেনু তে যান অথবা BKASH App এ যান। </p>
                    <p>২. <span>Payment</span> এ ক্লিক করুন। </p>
                    <p>৩. প্রাপক নম্বর হিসেবে লিখুন <span>01970134360</span></p>
                    <p>৪. ডেলিভারি চার্জ </p>
                    <p>৫. সব কিছু ঠিক থাকলে BKASH থেকে একটি বার্তা পাবেন।</p>
                    <p></p>
                    </div>
                    {/* transaction end   */}
                    <button>Verify</button>
                </div>
            </div>
        </div>
    );
};

export default Payment2;