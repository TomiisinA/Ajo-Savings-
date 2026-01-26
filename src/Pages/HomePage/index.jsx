import Footer from "../../components/Footer/footer";
import { useNavigate } from "react-router";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden ">
      {/* ================= HERO SECTION ================= */}
      <section className="flex flex-col md:flex-row px-6 md:px-10 py-6 m-6 min-h-[calc(100vh-80px)]">
        {/* Text */}
        <div className="flex-3 flex items-center">
          <div className="flex flex-col justify-center gap-12 pr-0 md:pr-24">
            <h1 className="text-hero font-bold text-primary-200">
              Unlock your Financial Future: Save smarter
            </h1>

            <p className="text-2xl md:text-xl text-gray-100 l">
              Our product provides a seamless and secure financial experience to
              both businesses and individuals.
            </p>

            <div>
              <button
                onClick={() => navigate("/SignUp", { replace: true })}
                className="bg-primary-100 text-white text-lg px-8 py-3 rounded-md hover:opacity-90 transition"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex-2 flex items-center justify-center mt-10 md:mt-0">
          <img src="iPhone X.png" alt="" className="max-w-full h-auto" />
        </div>
      </section>

      {/* ================= SECOND SECTION ================= */}
      <section className="mx-6 text-center w-full">
        <h1 className="text-3xl md:text-[40px] font-bold text-primary-200 ">
          What we do
        </h1>

        <p className="text-lg md:text-xl text-gray-100 my-5">
          We help users manage and create saving plan to attain their desired
          financial goal.
        </p>

        <img src="iPad Pro.png" alt="" className="mx-auto" />
      </section>

      {/* ================= THIRD SECTION ================= */}
      <section className="px-6 md:px-10 py-6 text-center bg-white-100 flex flex-col items-center">
        <h1 className="my-8 text-4xl font-bold text-primary-200">
          How it works
        </h1>

        {/* Circle Image */}
        <div className="relative w-[250px] h-[250px] mb-10">
          <div className="absolute inset-0 bg-[#ff6b52] rounded-full" />
          <img
            src="image 2.png"
            alt=""
            className="relative w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Boxes */}
        <div className="flex flex-col md:flex-row gap-6 mt-6 w-full justify-center">
          <div className="bg-white p-6 text-left w-full md:w-[30%] rounded-lg shadow-md">
            <h2 className="text-primary-200 text-xl font-semibold mb-2">
              1. Sign up
            </h2>
            <p className="text-[#3a3a3ae5] text-lg">
              Create an account with us to get with nice features for your
              saving plan.
            </p>
          </div>

          <div className="bg-white p-6 text-left w-full md:w-[30%] rounded-lg shadow-md">
            <h2 className="text-primary-200 text-xl font-semibold mb-2">
              2. Select a Saving plan
            </h2>
            <p className="text-[#3a3a3ae5] text-lg">
              We have three savings plans; Emergency, Flex and Target plan. You
              have access to create more wallets in any currency.
            </p>
          </div>

          <div className="bg-white p-6 text-left w-full md:w-[30%] rounded-lg shadow-md">
            <h2 className="text-primary-200 text-xl font-semibold mb-2">
              3. Manage your Portfolio
            </h2>
            <p className="text-[#3a3a3ae5] text-lg">
              You have access to create more wallets in any currency.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOURTH SECTION ================= */}
      <section className="py-6 text-center">
        <h1 className="my-8 text-4xl font-semibold text-primary-200">
          What Customers Say
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <img src="Rectangle 33.png" alt="" className="w-full md:w-auto" />

          <div className="relative w-[250px] h-[250px]">
            <div className="absolute inset-0 bg-blue rounded-full rounded-tr-none" />
            <img
              src="Rectangle 31.png"
              alt=""
              className="relative w-full h-full object-cover"
            />
          </div>

          <div className="px-6 md:px-10 text-left leading-relaxed max-w-md">
            <img src="quote.png" alt="" className="mb-4" />
            <p className="text-[#3a3a3ae5] text-lg">
              MoneyBag, has helped me many times, achieve my saving goal. Guys,
              its simple and fast to use, and it has wonderful saving plans.
            </p>

            <p className="mt-4 font-semibold text-gray-600">Laura</p>
            <p className="text-sm text-gray-500">Entrepreneur</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
