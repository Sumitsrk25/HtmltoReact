export const Home = () => {
  return (
    <>
      <div>
        <main>
          <section className="pb-0 pb-lg-5">
            <div className="container">
              <div className="row g-4 g-lg-5 align-items-center">
                <div className="col-lg-6 position-relative order-1 order-lg-2">
                  {/* Title */}
                  <h2 className="titlefonts">
                    Grow your wealth with returns of upto
                    <span className="spangreen">20%</span>
                  </h2>
                  {/* Info list */}
                  <ul className="list-group list-group-borderless mb-2">
                    <li className="list-group-item d-flex align-items-center px-0">
                      <p className="mb-0 h6 growfont">
                        <img src="assets/images/coin.svg" className="me-2" />
                        Start with as low as{" "}
                        <span className="spangreen">
                          <b>₹1000₹</b>
                        </span>
                      </p>
                    </li>
                    <li className="list-group-item d-flex align-items-center px-0">
                      <p className="mb-0 h6 growfont">
                        <img
                          src="assets/images/favorite-chart.svg"
                          className="me-2"
                        />
                        Diversify beyond FDs, MFs and Stocks
                      </p>
                    </li>
                    <li className="list-group-item d-flex align-items-center px-0">
                      <p className="mb-0 h6 growfont">
                        <img
                          src="assets/images/money-recive.svg"
                          className="me-2"
                        />
                        Get monthly fixed-income
                      </p>
                    </li>
                    <li className="list-group-item d-flex align-items-center px-0">
                      <p className="mb-0 h6 growfont">
                        <img
                          src="assets/images/empty-wallet-tick.svg"
                          className="me-2"
                        />
                        Benefit from high yield returns
                      </p>
                    </li>
                  </ul>
                  {/* Button */}
                  <a href="#" className="btn btn-success mb-0">
                    Invest Now
                  </a>
                </div>
                <div className="col-lg-6 position-relative order-2">
                  {/* SVG decoration */}
                  {/* Image */}
                  <img
                    src="assets/images/element/Group_18000.svg"
                    className="position-relative"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="pt-0 pt-md-5">
            <div className="container">
              {/* Title */}
              <div className="row">
                <div className="col-lg-8 mb-4">
                  <h2 className="mb-0">
                    <img
                      src="assets/images/star.svg"
                      className="me-2 titleheaders"
                    />
                    Popular Assets
                  </h2>
                </div>
                <div className="col-lg-4 mb-4">
                  <h2 className="mb-0 d-flex justify-content-end">
                    <button type="button" className="btn btn-outline-success">
                      View All{" "}
                      <i className="bi bi-arrow-right text-success ms-2" />
                    </button>
                  </h2>
                </div>
              </div>
              <div className="row g-4 mt-4">
                {/* Card Item START */}
                <div className="col-md-6 col-xl-4">
                  <div className="tns-item tns-slide-active" id="tns2-item2">
                    <div className="d-flex justify-content-between align-items-center mt-n6 assetbadge">
                      {/* Logo image */}
                      <div className="bg-white p-2" />
                      {/* Badge */}
                      <div className="h5">
                        <a
                          href="#"
                          className="badge bg-info bg-opacity-10 text-info me-2 badgetext"
                        >
                          <i className="fas fa-circle small fw-bold" /> New
                        </a>
                      </div>
                    </div>
                    <div className="card border mb-1 bg-transparent">
                      {/* Badge and rating */}
                      <div className="d-flex justify-content-between py-2 px-2 assetbg">
                        {/* Badge */}
                        <span>
                          <a href="#" className="text-dark">
                            <img
                              src="assets/images/vibe-(vibe).svg"
                              className="me-2"
                            />
                            Facebook
                          </a>
                        </span>
                        {/* Rating star */}
                        <ul className="list-inline hstack mb-0">
                          <li className="list-inline-item me-0 assetname">
                            Rating
                            <a
                              href="#"
                              className="badge bg-success bg-opacity-10 text-success assetname"
                            >
                              <span>CRISIL</span>
                              <span className="assetrating">A+</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* Card image */}
                      {/* Card body */}
                      <div className="card-body">
                        {/* Title */}
                        <h5 className="card-title mb-3">
                          <a href="#" className="blogfont">
                            Invest in a Diversified Pool of 300+ Personal Loans
                          </a>
                        </h5>
                        {/* Badge and rating */}
                        <div className="d-flex justify-content-between mb-3">
                          {/* Badge */}
                          <span>
                            <a href="#" className="text-dark">
                              Minimum Investment
                            </a>
                          </span>
                          {/* Rating star */}
                          <ul className="list-inline hstack mb-0">
                            <li className="list-inline-item me-0">₹1,000</li>
                          </ul>
                        </div>
                        {/* Badge and rating */}
                        <div className="d-flex justify-content-between mb-3">
                          {/* Badge */}
                          <span>
                            <a href="#" className="text-dark">
                              Yield to maturity
                            </a>
                          </span>
                          {/* Rating star */}
                          <ul className="list-inline hstack mb-0">
                            <li className="list-inline-item me-0">15 %</li>
                          </ul>
                        </div>
                        {/* Badge and rating */}
                        <div className="d-flex justify-content-between mb-3">
                          {/* Badge */}
                          <span>
                            <a href="#" className="text-dark">
                              Minimum Investment
                            </a>
                          </span>
                          {/* Rating star */}
                          <ul className="list-inline hstack mb-0">
                            <li className="list-inline-item me-0">₹1,000</li>
                          </ul>
                        </div>
                        {/* Badge and rating */}
                        <div className="d-flex justify-content-between mb-3">
                          {/* Badge */}
                          <span>
                            <a href="#" className="text-dark">
                              Minimum Investment
                            </a>
                          </span>
                          {/* Rating star */}
                          <ul className="list-inline hstack mb-0">
                            <li className="list-inline-item me-0">₹1,000</li>
                          </ul>
                        </div>
                        <div className="overflow-hidden mt-3">
                          <div className="progress progress-sm bg-success bg-opacity-10">
                            <div
                              className="progress-bar bg-success aos aos-init aos-animate"
                              role="progressbar"
                              data-aos="slide-right"
                              data-aos-delay={200}
                              data-aos-duration={1000}
                              data-aos-easing="ease-in-out"
                              style={{ width: "82%" }}
                              aria-valuenow={82}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <div className="d-flex justify-content-between">
                            <h6 className="uppercase mt-4">
                              <span className="assetcolor">910</span>/2200
                              <br />
                              <span className="assetunits">
                                units remaining
                              </span>
                            </h6>
                            <span className="mt-4">82%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card Item END */}
                {/* Card Item START */}
                <div className="col-md-6 col-xl-4">
                  <div className="tns-item tns-slide-active" id="tns2-item2">
                    <div className="d-flex justify-content-between align-items-center mt-n6 assetbadge">
                      {/* Logo image */}
                      <div className="bg-white p-2" />
                      {/* Badge */}
                      <div className="h5">
                        <a
                          href="#"
                          className="badge bg-info bg-opacity-10 text-info me-2 badgetext"
                        >
                          <i className="fas fa-circle small fw-bold" /> New
                        </a>
                      </div>
                    </div>
                    <div className="card border mb-1 bg-transparent">
                      {/* Badge and rating */}
                      <div className="d-flex justify-content-between py-2 px-2 assetbg">
                        {/* Badge */}
                        <span>
                          <a href="#" className="text-dark">
                            <img
                              src="assets/images/vibe-(vibe).svg"
                              className="me-2"
                            />
                            Facebook
                          </a>
                        </span>
                        {/* Rating star */}
                        <ul className="list-inline hstack mb-0">
                          <li className="list-inline-item me-0 assetname">
                            Rating
                            <a
                              href="#"
                              className="badge bg-success bg-opacity-10 text-success assetname"
                            >
                              <span>CRISIL</span>
                              <span className="assetrating">A+</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* Card image */}
                      {/* Card body */}
                      <div className="card-body">
                        {/* Title */}
                        <h5 className="card-title mb-3">
                          <a href="#" className="blogfont">
                            Invest in a Diversified Pool of 300+ Personal Loans
                          </a>
                        </h5>
                        {/* Badge and rating */}
                        <div className="d-flex justify-content-between mb-3">
                          {/* Badge */}
                          <span>
                            <a href="#" className="text-dark">
                              Minimum Investment
                            </a>
                          </span>
                          {/* Rating star */}
                          <ul className="list-inline hstack mb-0">
                            <li className="list-inline-item me-0">₹1,000</li>
                          </ul>
                        </div>
                        {/* Badge and rating */}
                        <div className="d-flex justify-content-between mb-3">
                          {/* Badge */}
                          <span>
                            <a href="#" className="text-dark">
                              Yield to maturity
                            </a>
                          </span>
                          {/* Rating star */}
                          <ul className="list-inline hstack mb-0">
                            <li className="list-inline-item me-0">15 %</li>
                          </ul>
                        </div>
                        {/* Badge and rating */}
                        <div className="d-flex justify-content-between mb-3">
                          {/* Badge */}
                          <span>
                            <a href="#" className="text-dark">
                              Minimum Investment
                            </a>
                          </span>
                          {/* Rating star */}
                          <ul className="list-inline hstack mb-0">
                            <li className="list-inline-item me-0">₹1,000</li>
                          </ul>
                        </div>
                        {/* Badge and rating */}
                        <div className="d-flex justify-content-between mb-3">
                          {/* Badge */}
                          <span>
                            <a href="#" className="text-dark">
                              Minimum Investment
                            </a>
                          </span>
                          {/* Rating star */}
                          <ul className="list-inline hstack mb-0">
                            <li className="list-inline-item me-0">₹1,000</li>
                          </ul>
                        </div>
                        <div className="overflow-hidden mt-3">
                          <div className="progress progress-sm bg-success bg-opacity-10">
                            <div
                              className="progress-bar bg-success aos aos-init aos-animate"
                              role="progressbar"
                              data-aos="slide-right"
                              data-aos-delay={200}
                              data-aos-duration={1000}
                              data-aos-easing="ease-in-out"
                              style={{ width: "82%" }}
                              aria-valuenow={82}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <div className="d-flex justify-content-between">
                            <h6 className="uppercase mt-4">
                              <span className="assetcolor">910</span>/2200
                              <br />
                              <span className="assetunits">
                                units remaining
                              </span>
                            </h6>
                            <span className="mt-4">82%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card Item END */}
                {/* Card Item START */}
                <div className="col-md-6 col-xl-4">
                  <div className="tns-item tns-slide-active" id="tns2-item2">
                    <div className="d-flex justify-content-between align-items-center mt-n6 assetbadge">
                      {/* Logo image */}
                      <div className="bg-white p-2" />
                      {/* Badge */}
                      <div className="h5">
                        <a
                          href="#"
                          className="badge bg-info bg-opacity-10 text-info me-2 badgetext"
                        >
                          <i className="fas fa-circle small fw-bold" /> New
                        </a>
                      </div>
                    </div>
                    <div className="card border mb-1 bg-transparent">
                      {/* Badge and rating */}
                      <div className="d-flex justify-content-between py-2 px-2 assetbg">
                        {/* Badge */}
                        <span>
                          <a href="#" className="text-dark">
                            <img
                              src="assets/images/vibe-(vibe).svg"
                              className="me-2"
                            />
                            Facebook
                          </a>
                        </span>
                        {/* Rating star */}
                        <ul className="list-inline hstack mb-0">
                          <li className="list-inline-item me-0 assetname">
                            Rating
                            <a
                              href="#"
                              className="badge bg-success bg-opacity-10 text-success assetname"
                            >
                              <span>CRISIL</span>
                              <span className="assetrating">A+</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* Card image */}
                      {/* Card body */}
                      <div className="card-body">
                        {/* Title */}
                        <h5 className="card-title mb-3">
                          <a href="#" className="blogfont">
                            Invest in a Diversified Pool of 300+ Personal Loans
                          </a>
                        </h5>
                        {/* Badge and rating */}
                        <div className="d-flex justify-content-between mb-3">
                          {/* Badge */}
                          <span>
                            <a href="#" className="text-dark">
                              Minimum Investment
                            </a>
                          </span>
                          {/* Rating star */}
                          <ul className="list-inline hstack mb-0">
                            <li className="list-inline-item me-0">₹1,000</li>
                          </ul>
                        </div>
                        {/* Badge and rating */}
                        <div className="d-flex justify-content-between mb-3">
                          {/* Badge */}
                          <span>
                            <a href="#" className="text-dark">
                              Yield to maturity
                            </a>
                          </span>
                          {/* Rating star */}
                          <ul className="list-inline hstack mb-0">
                            <li className="list-inline-item me-0">15 %</li>
                          </ul>
                        </div>
                        {/* Badge and rating */}
                        <div className="d-flex justify-content-between mb-3">
                          {/* Badge */}
                          <span>
                            <a href="#" className="text-dark">
                              Minimum Investment
                            </a>
                          </span>
                          {/* Rating star */}
                          <ul className="list-inline hstack mb-0">
                            <li className="list-inline-item me-0">₹1,000</li>
                          </ul>
                        </div>
                        {/* Badge and rating */}
                        <div className="d-flex justify-content-between mb-3">
                          {/* Badge */}
                          <span>
                            <a href="#" className="text-dark">
                              Minimum Investment
                            </a>
                          </span>
                          {/* Rating star */}
                          <ul className="list-inline hstack mb-0">
                            <li className="list-inline-item me-0">₹1,000</li>
                          </ul>
                        </div>
                        <div className="overflow-hidden mt-3">
                          <div className="progress progress-sm bg-success bg-opacity-10">
                            <div
                              className="progress-bar bg-success aos aos-init aos-animate"
                              role="progressbar"
                              data-aos="slide-right"
                              data-aos-delay={200}
                              data-aos-duration={1000}
                              data-aos-easing="ease-in-out"
                              style={{ width: "82%" }}
                              aria-valuenow={82}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <div className="d-flex justify-content-between">
                            <h6 className="uppercase mt-4">
                              <span className="assetcolor">910</span>/2200
                              <br />
                              <span className="assetunits">
                                units remaining
                              </span>
                            </h6>
                            <span className="mt-4">82%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card Item END */}
              </div>
            </div>
          </section>
          <section className="pt-0 pt-md-5">
            <div className="container">
              {/* Title */}
              <div className="row">
                <div className="col-lg-8 mb-4">
                  <h2 className="mb-0">
                    <img
                      src="assets/images/note-2.svg"
                      className="me-2 titleheaders"
                    />
                    Blogs
                  </h2>
                </div>
                <div className="col-lg-4 mb-4">
                  <h2 className="mb-0 d-flex justify-content-end">
                    <button type="button" className="btn btn-outline-success">
                      View All{" "}
                      <i className="bi bi-arrow-right text-success ms-2" />
                    </button>
                  </h2>
                </div>
              </div>
              <div className="row g-4">
                {/* Card Item START */}
                <div className="col-md-6 col-xl-4">
                  <div className="card p-2 shadow h-100">
                    <div className="rounded-top overflow-hidden">
                      <div className="card-overlay-hover">
                        {/* Image */}
                        <img
                          src="assets/images/Frame_17.png"
                          className="card-img-top"
                          alt="course image"
                        />
                      </div>
                      {/* Hover element */}
                      {/* <div class="card-img-overlay">
                    <div class="card-element-hover d-flex justify-content-end">
                      <a
                        href="#"
                        class="icon-md bg-white rounded-circle text-center"
                      >
                        <i class="fas fa-shopping-cart text-danger"></i>
                      </a>
                    </div>
                  </div> */}
                    </div>
                    {/* Card body */}
                    <div className="card-body">
                      {/* Title */}
                      <h5 className="card-title">
                        <a href="#" className="blogfont">
                          Invest Do’s and Don'ts, make smart investments with
                          xyz
                        </a>
                      </h5>
                      {/* Badge and Price */}
                      <div className="d-flex justify-content-between align-items-center mb-0">
                        <a
                          href="#"
                          className="badge bg-secondary bg-opacity-10 text-dark me-2"
                        >
                          6 mins read
                          <i className="fas fa-circle small fw-bold me-2" />
                          27 Jan 2024
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card Item END */}
                {/* Card Item START */}
                <div className="col-md-6 col-xl-4">
                  <div className="card p-2 shadow h-100">
                    <div className="rounded-top overflow-hidden">
                      <div className="card-overlay-hover">
                        {/* Image */}
                        <img
                          src="assets/images/Frame_171.png"
                          className="card-img-top"
                          alt="course image"
                        />
                      </div>
                      {/* Hover element */}
                      {/* <div class="card-img-overlay">
                    <div class="card-element-hover d-flex justify-content-end">
                      <a
                        href="#"
                        class="icon-md bg-white rounded-circle text-center"
                      >
                        <i class="fas fa-shopping-cart text-danger"></i>
                      </a>
                    </div>
                  </div> */}
                    </div>
                    {/* Card body */}
                    <div className="card-body">
                      {/* Title */}
                      <h5 className="card-title">
                        <a href="#" className="blogfont">
                          Invest Do’s and Don'ts, make smart investments with
                          xyz
                        </a>
                      </h5>
                      {/* Badge and Price */}
                      <div className="d-flex justify-content-between align-items-center mb-0">
                        <a
                          href="#"
                          className="badge bg-secondary bg-opacity-10 text-dark me-2"
                        >
                          6 mins read
                          <i className="fas fa-circle small fw-bold me-2" />
                          27 Jan 2024
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card Item END */}
                {/* Card Item START */}
                <div className="col-md-6 col-xl-4">
                  <div className="card p-2 shadow h-100">
                    <div className="rounded-top overflow-hidden">
                      <div className="card-overlay-hover">
                        {/* Image */}
                        <img
                          src="assets/images/Frame_172.png"
                          className="card-img-top"
                          alt="course image"
                        />
                      </div>
                      {/* Hover element */}
                      {/* <div class="card-img-overlay">
                <div class="card-element-hover d-flex justify-content-end">
                  <a
                    href="#"
                    class="icon-md bg-white rounded-circle text-center"
                  >
                    <i class="fas fa-shopping-cart text-danger"></i>
                  </a>
                </div>
              </div> */}
                    </div>
                    {/* Card body */}
                    <div className="card-body">
                      {/* Title */}
                      <h5 className="card-title">
                        <a href="#" className="blogfont">
                          Invest Do’s and Don'ts, make smart investments with
                          xyz
                        </a>
                      </h5>
                      {/* Badge and Price */}
                      <div className="d-flex justify-content-between align-items-center mb-0">
                        <a
                          href="#"
                          className="badge bg-secondary bg-opacity-10 text-dark me-2"
                        >
                          6 mins read
                          <i className="fas fa-circle small fw-bold me-2" />
                          27 Jan 2024
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card Item END */}
              </div>
            </div>
          </section>
        </main>
        {/* **************** MAIN CONTENT END **************** */}
        <footer className="pt-5 footerbg">
          <div className="container">
            {/* Row START */}
            <div className="row g-4">
              {/* Widget 1 START */}
              <div className="col-lg-5">
                {/* logo */}
                <a className="me-0" href="#">
                  <img
                    className="light-mode-item"
                    src="assets/images/logo/logo-light.svg"
                    alt="logo"
                  />
                  <span className="text-white ms-2"> Platform Name </span>
                </a>
                <p className="my-3 text-white">
                  Our secure and user-friendly platform is designed for all
                  levels of investors. With transparency and cutting-edge
                  technology, we're your partner in financial success. Join us
                  today.
                </p>
              </div>
              {/* Widget 1 END */}
              {/* Widget 2 START */}
              <div className="col-lg-3 offset-lg-1">
                {/* Link block */}
                <h5 className="mb-2 mb-md-4" />
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link text-white" href>
                      Learn
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href>
                      About{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href>
                      Disclaimer
                    </a>
                  </li>
                </ul>
              </div>
              {/* Widget 2 END */}
              {/* Widget 3 START */}
              <div className="col-lg-3">
                {/* Link block */}
                <h5 className="mb-2 mb-md-4" />
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link text-white" href>
                      Blogs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href>
                      FAQ's{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href>
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              {/* Widget 3 END */}
            </div>
            {/* Row END */}
            {/* Divider */}
            <hr className="mt-4 mb-0 textwhite textwhite" />
            {/* Bottom footer */}
            <div className="py-3">
              <div className="container px-0">
                <div className="d-md-flex justify-content-between align-items-center py-3 text-center text-md-left">
                  {/* copyright text */}
                  <ul className="list-inline mb-0 mt-3">
                    <li className="list-inline-item">
                      <a className="px-2 text-facebook" href>
                        <i className="fab fa-fw fa-facebook-f textwhite" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="px-2 text-youtube" href>
                        <i className="fab fa-fw fa-youtube textwhite" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="px-2 text-linkedin" href>
                        <i className="fab fa-fw fa-linkedin-in textwhite" />
                      </a>
                    </li>
                  </ul>
                  {/* copyright links*/}
                  <div className="mt-3 mt-md-0">
                    <div className="text-primary-hover text-white">
                      © 2024 Platform Name. All rights reserved.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* Back to top */}
        <div className="back-top">
          <i className="bi bi-arrow-up-short position-absolute top-50 start-50 translate-middle" />
        </div>
      </div>
    </>
  );
};
