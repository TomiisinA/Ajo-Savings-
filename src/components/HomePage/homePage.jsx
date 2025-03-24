import "./homePage.css";
function HomePage() {
  return (
    <div className="container">
      <div className="home-page">
        <div className="text-container">
          <div className="wrapper">
            <h1 className="text-heading">
              Unlock your Financial Future: Save smarter
            </h1>
            <p>
              Our product provides a seamless and secure financial experience to
              both businesses and individuals.
            </p>
            <div>
              <button> Get Started</button>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img src="iPhone X.png" alt="" />
        </div>
      </div>
      {/* second section */}
      <div className="second-section">
        <div className="second-heading">
          <h1> What we do</h1>
          <p>
            We halp users manage and create saving plan to attain their desired
            financial goal.
          </p>
        </div>
        <div>
          <img src="iPad Pro.png" alt="" />
        </div>
      </div>

      {/* third section */}
      <div className="third-section">
        <div className="heading">
          <h1> How it works</h1>
        </div>
        <div className="img-wrapper">
          <div className="circle">
            <img src="image 2.png" alt="" />
          </div>
        </div>
        <div className="boxes">
          <div className="box">
            <h1> 1. Sign up</h1>
            <p>
              Create an account with us to get with nice features for your
              saving plan.
            </p>
          </div>
          <div className="box">
            <h1> 2. select a Saving plan</h1>
            <p>
              We have three savings plans; Emergency, Flex and Target plan. You
              have access to create more wallets in any currency.
            </p>
          </div>
          <div className="box">
            <h1> 3. Manage your Portfolio</h1>
            <p>You have access to create more wallets in any currency.</p>
          </div>
        </div>
      </div>

      {/* fourth section */}
      <div className="fourth-section">
        <div className=" heading">
          <h1> What Customers Say</h1>
        </div>
        <div className="testimonial-container">
          <div className="top-img">
            <img src="Rectangle 33.png" alt="" />
          </div>
          <div className="testimonial-img">
            {/* <div className="circle-2">
              <img src="Rectangle 31.png" alt="" />
            </div> */}
          </div>
          <div className="testimonial-text">
            <img src="quote.png" alt="" />
            <p>
              MoneyBag, has helped me many times, achieve my saving goal. Guys,
              its simple and fast to use, and it has wonderful saving plans.
            </p>
            <div className="author">
              <p> Laura</p>
            </div>
            <div className="author-role">
              <p> Entrepreneur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
