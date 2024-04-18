// import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./Checkout.css";

const Checkout = () => {
  const userInfoString = localStorage.getItem("userInfo");
  const userInfo = userInfoString ? JSON.parse(userInfoString) : null ; 
  // console.log(userInfo);
  
  const handleSubmit = () => {
    Swal.fire({
      icon: "success",
      title: "Sucess",
      text: `Hello ${userInfo.fullName.toUpperCase()} Your Bulk Order Request has been successfully submitted and being processed. We will get back to you as soon as possible.Thank you`,
    });
  };
  return (
    <div className="checkoutContainer">
      <div className="checkoutTitle max-[700px]:w-[85%]">
        <p className="checkouttext">Checkout</p>
      </div>
      <div className="CheckoutWrapper max-[700px]:w-[85%] max-[700px]:flex-col max-[700px]:gap-[50px] ">
        <div className="checkoutLeft flex flex-col gap-[10px] justify-center max-[700px]:w-[100%] ">
          <h4 className="uppercase">
            <span className="font-bold max-[700px]:text-red-600 ">
              full name:
            </span>
           {userInfo.fullName}
          </h4>
          <h4 className="uppercase">
            <span className="font-bold">company name:</span> {userInfo.companyName}
          </h4>
          <h4 className="">
            <span className="font-bold uppercase">email address:</span>{" "}
            {userInfo.email}
          </h4>
          <h4 className="uppercase">
            <span className="font-bold">phone number:</span> {userInfo.phoneNumber}
          </h4>
          <h4 className="uppercase">
            <span className="font-bold">product type:</span> {userInfo.productType}
          </h4>
        </div>
        <div className="checkoutRight max-[700px]:w-[100%]">
          <div className="flex flex-col gap-[15px] items-start w-full justify-center">
            {/* <h4 className="font-bold text-[#FF6600] leading-[28px]">
              MEMBERSHIP SUBSCRIPTION
            </h4> */}
            <div className="flex flex-col items-start justify-center w-full gap-5">
              {/* <p className="text-[#707070] font-normal text-[13px]">
                We believe in empowering your fitness journey with our amazing
                trainers, state-of-the-art equipment, and a welcoming
                environment. Our gym floor is equipped with top-tier brands
                ensuring a premium workout experience Every new member receives
                a complimentary Fitness Assessment, a Personal Training session,
                and a Body Composition Assessment.
              </p> */}
              {/* <label
                className="font-bold text-[#FF6600] leading-[28px]"
                htmlFor="Subscription type"
              >
                SUBSCRIPTION TYPE
                <small>
                  {" "}
                  <i>
                    (If no option is selected your gym type would be regular)
                  </i>
                </small>
              </label> */}
              {/* <select
                name="gym-option gym-dropdown "
                onChange={handleGymChange}
                value={selectedGym}
              >
                {Object.keys(gymOptions).map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select> */}
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <p className="text-gray-500 font-medium">₦</p>
                </div>
                <label
                  className="font-bold text-[#FF6600] leading-[28px]"
                  htmlFor="Subscription type"
                >
                  FEE CHARGE
                </label>
                <input
                  type="text"
                  defaultValue="25,000 - 37,000"
                  className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px] ps-10"
                  placeholder="Amount"
                  name="amount"
                  // value={amount}
                  // value={formData.amount}
                  // onChange={handleChange}
                  required
                />
              </div>
              <label
                className="font-bold text-[#FF6600] leading-[28px]"
                htmlFor="Subscription type"
              >
                PAYMENT CARD DETAILS
              </label>
              <form className="flex flex-wrap gap-3 w-full">
                <label className="relative w-full flex flex-col">
                  <span className="font-bold mb-3">Card number</span>
                  <input
                    className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                    type="text"
                    name="card_number"
                    placeholder="0000 0000 0000"
                    // value={formData.card_number}
                    // onChange={handleChange}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </label>

                <label className="relative flex-1 flex flex-col">
                  <span className="font-bold mb-3">Expire date</span>
                  <input
                    className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                    type="text"
                    name="expire_date"
                    placeholder="MM/YY"
                    // value={formData.expire_date}
                    // onChange={handleChange}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </label>

                <label className="relative flex-1 flex flex-col">
                  <span className="font-bold flex items-center gap-3 mb-3">
                    CVC/CVV
                    <span className="relative group">
                      <span className="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 w-max top-1/2 bg-black text-white">
                        Hey ceci est une infobulle !
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </span>
                  <input
                    className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                    type="text"
                    name="cvc"
                    placeholder="&bull;&bull;&bull;"
                    // value={formData.cvc}
                    // onChange={handleChange}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </label>
              </form>

              <p className="text-[#707070] mt-[-15px] font-normal text-[13px]">
                Secure Payment: Card details are encrypted and securely
                processed
              </p>
            </div>

            {/* <p className="text-[#161616] font-normal text-[16px] text-left">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our{" "}
              <Link
                to="/privacy-policy"
                className="text-[#FF6600] cursor-pointer"
              >
                privacy policy.
              </Link>
            </p> */}

            <button
              type="submit"
              className="text-base font-medium text-white bg-neutral-500 rounded-md md:rounded-md px-7 md:px-12 py-[15px] hover:bg-green-600 w-full mt-[22px] transition-colors "
              // onClick={toggleShowInvoiceModal}
              onClick={handleSubmit}
            >
              PROCEED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
