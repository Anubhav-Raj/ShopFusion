function App() {
  return (
    <>
      <header className="header d-blue-bg">
        <div className="header-top">
          <div className="container 0">
            <div className="header-inner">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-7">
                  <div className="header-inner-start">
                    <div className="header__currency border-right">
                      <div className="s-name">
                        <span>Language: </span>
                      </div>
                      <select>
                        <option>English</option>
                        <option>Deutsch</option>
                        <option>Français</option>
                        <option>Espanol</option>
                      </select>
                    </div>
                    <div className="header__lang border-right">
                      <div className="s-name">
                        <span>Currency: </span>
                      </div>
                      <select>
                        <option> USD</option>
                        <option>EUR</option>
                        <option>INR</option>
                        <option>BDT</option>
                        <option>BGD</option>
                      </select>
                    </div>
                    <div className="support d-none d-sm-block">
                      <p>
                        Need Help?{" "}
                        <a href="tel:+001123456789">+001 123 456 789</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-5 d-none d-lg-block">
                  <div className="header-inner-end text-md-end">
                    <div className="ovic-menu-wrapper ovic-menu-wrapper-2">
                      <ul>
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="contact.html">Order Tracking</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact Us</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQs</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-mid">
          <div className="container">
            <div className="heade-mid-inner">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4">
                  <div className="header__info header__info-2">
                    <div className="logo logo-3">
                      <a href="index.html" className="logo-image">
                        <img src="assets/img/logo/logo1.svg" alt="logo" />
                      </a>
                    </div>
                    <div className="side-menu mr-20">
                      <button
                        type="button"
                        className="side-menu-btn offcanvas-toggle-btn"
                      >
                        <i className="fas fa-bars" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-4 d-none d-lg-block">
                  <div className="header__search">
                    <form action="#">
                      <div className="header__search-box">
                        <input
                          className="search-input search-input-2"
                          type="text"
                          placeholder="I'm shopping for..."
                        />
                        <button
                          className="button button-2 button-3"
                          type="submit"
                        >
                          <i className="far fa-search" />
                        </button>
                      </div>
                      <div className="header__search-cat">
                        <select>
                          <option>All Categories</option>
                          <option>Best Seller Products</option>
                          <option>Top 10 Offers</option>
                          <option>New Arrivals</option>
                          <option>Phones &amp; Tablets</option>
                          <option>Electronics &amp; Digital</option>
                          <option>Fashion &amp; Clothings</option>
                          <option>Jewelry &amp; Watches</option>
                          <option>Health &amp; Beauty</option>
                          <option>Sound &amp; Speakers</option>
                          <option>TV &amp; Audio</option>
                          <option>Computers</option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-8 col-sm-8">
                  <div className="header-action">
                    <div className="block-userlink">
                      <a
                        className="icon-link icon-link-2"
                        href="my-account.html"
                      >
                        <i className="flaticon-user" />
                        <span className="text">
                          <span className="sub">Login </span>
                          My Account{" "}
                        </span>
                      </a>
                    </div>
                    <div className="block-wishlist action">
                      <a className="icon-link icon-link-2" href="wishlist.html">
                        <i className="flaticon-heart" />
                        <span className="count count-2">0</span>
                        <span className="text">
                          <span className="sub">Favorite</span>
                          My Wishlist{" "}
                        </span>
                      </a>
                    </div>
                    <div className="block-cart action">
                      <a className="icon-link icon-link-2" href="cart.html">
                        <i className="flaticon-shopping-bag" />
                        <span className="count count-2">1</span>
                        <span className="text">
                          <span className="sub">Your Cart:</span>
                          $00.00{" "}
                        </span>
                      </a>
                      <div className="cart">
                        <div className="cart__mini">
                          <ul>
                            <li>
                              <div className="cart__title">
                                <h4>Your Cart</h4>
                                <span>(1 Item in Cart)</span>
                              </div>
                            </li>
                            <li>
                              <div className="cart__item d-flex justify-content-between align-items-center">
                                <div className="cart__inner d-flex">
                                  <div className="cart__thumb">
                                    <a href="product-details.html">
                                      <img
                                        src="assets/img/cart/20.jpg"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <div className="cart__details">
                                    <h6>
                                      <a href="product-details.html">
                                        {" "}
                                        Samsung C49J89: £875, Debenhams Plus
                                      </a>
                                    </h6>
                                    <div className="cart__price">
                                      <span>$255.00</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="cart__del">
                                  <a href="#">
                                    <i className="fal fa-times" />
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="cart__sub d-flex justify-content-between align-items-center">
                                <h6>Subtotal</h6>
                                <span className="cart__sub-total">$255.00</span>
                              </div>
                            </li>
                            <li>
                              <a href="cart.html" className="wc-cart mb-10">
                                View cart
                              </a>
                              <a href="checkout.html" className="wc-checkout">
                                Checkout
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__bottom d-none d-lg-block">
          <div className="container">
            <div className="box-items-inner pt-10 pb-10">
              <div className="box-item">
                <a href="shop.html">
                  <i className="fal fa-desktop" />
                  Laptop <br /> &amp; Computer
                </a>
              </div>
              <div className="box-item">
                <a href="shop.html">
                  <i className="fal fa-mobile" />
                  Tablets <br /> &amp; Mobile Phones
                </a>
              </div>
              <div className="box-item">
                <a href="shop.html">
                  <i className="fal fa-router" />
                  Digitals <br /> &amp; Electronics
                </a>
              </div>
              <div className="box-item">
                <a href="shop.html">
                  <i className="fal fa-webcam" />
                  Camera <br /> &amp; Accesories
                </a>
              </div>
              <div className="box-item">
                <a href="shop.html">
                  <i className="fal fa-bed-alt" />
                  Decor <br /> &amp; Furniture
                </a>
              </div>
              <div className="box-item">
                <a href="shop.html">
                  <i className="fal fa-tshirt" />
                  Fashion <br /> &amp; Clotheing
                </a>
              </div>
              <div className="box-item d-lg-none">
                <a href="shop.html">
                  <i className="fal fa-hat-chef" />
                  Garden <br /> &amp; Home Kitchen
                </a>
              </div>
              <div className="box-item d-lg-none d-xl-block">
                <a href="shop.html">
                  <i className="fal fa-speaker" />
                  Audio <br /> &amp; Headphones
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="main-menu">
        <nav id="mobile-menu-2">
          <ul>
            <li>
              <a href="index.html" className="active">
                Home <i className="far fa-angle-down" />
              </a>
              <ul className="megamenu-1">
                <li>
                  <a href="index.html">Home Pages</a>
                  <ul className="mega-item">
                    <li>
                      <a href="index.html">Home One</a>
                    </li>
                    <li>
                      <a href="index-2.html">Home Two</a>
                    </li>
                    <li>
                      <a href="index-3.html" className="active">
                        Home Three
                      </a>
                    </li>
                    <li>
                      <a href="product-details.html">Shop 3 Column</a>
                    </li>
                    <li>
                      <a href="product-details.html">Shop 4 Column</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="shop.html">Product Pages</a>
                  <ul className="mega-item">
                    <li>
                      <a href="product-details.html">Product Details</a>
                    </li>
                    <li>
                      <a href="product-details.html">Product V2</a>
                    </li>
                    <li>
                      <a href="product-details.html">Product V3</a>
                    </li>
                    <li>
                      <a href="product-details.html">Varriable Product</a>
                    </li>
                    <li>
                      <a href="product-details.html">External Product</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="shop.html">Other Pages</a>
                  <ul className="mega-item">
                    <li>
                      <a href="product-details.html">wishlist</a>
                    </li>
                    <li>
                      <a href="product-details.html">Shopping Cart</a>
                    </li>
                    <li>
                      <a href="product-details.html">Checkout</a>
                    </li>
                    <li>
                      <a href="product-details.html">Login</a>
                    </li>
                    <li>
                      <a href="product-details.html">Register</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="shop.html">Phone &amp; Tablets</a>
                  <ul className="mega-item">
                    <li>
                      <a href="product-details.html">Catagory 1</a>
                    </li>
                    <li>
                      <a href="product-details.html">Catagory 2</a>
                    </li>
                    <li>
                      <a href="product-details.html">Catagory 3</a>
                    </li>
                    <li>
                      <a href="product-details.html">Catagory 4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="shop.html">Phone &amp; Tablets</a>
                  <ul className="mega-item">
                    <li>
                      <a href="product-details.html">Catagory 1</a>
                    </li>
                    <li>
                      <a href="product-details.html">Catagory 2</a>
                    </li>
                    <li>
                      <a href="product-details.html">Catagory 3</a>
                    </li>
                    <li>
                      <a href="product-details.html">Catagory 4</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="about.html">About Us</a>
            </li>
            <li>
              <a href="shop.html">
                Shop <i className="far fa-angle-down" />
              </a>
              <ul className="submenu">
                <li>
                  <a href="shop.html">shop</a>
                </li>
                <li>
                  <a href="shop-details.html">Shop Details</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="blog.html">
                Blog <i className="far fa-angle-down" />
              </a>
              <ul className="submenu">
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="blog-details.html">Blog Details</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="about.html">
                Pages <i className="far fa-angle-down" />
              </a>
              <ul className="submenu">
                <li>
                  <a href="my-account.html">My Account</a>
                </li>
                <li>
                  <a href="product-details.html">Product Details</a>
                </li>
                <li>
                  <a href="faq.html">FAQs pages</a>
                </li>
                <li>
                  <a href="cart.html">Cart</a>
                </li>
                <li>
                  <a href="wishlist.html">Wishlist</a>
                </li>
                <li>
                  <a href="checkout.html">Checkout</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
                <li>
                  <a href="404.html">404 Error</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div className="offcanvas__area">
        <div className="offcanvas__wrapper">
          <div className="offcanvas__close">
            <button className="offcanvas__close-btn" id="offcanvas__close-btn">
              <i className="fal fa-times" />
            </button>
          </div>
          <div className="offcanvas__content">
            <div className="offcanvas__logo mb-40">
              <a href="index.html">
                <img src="assets/img/logo/logo-white.png" alt="logo" />
              </a>
            </div>
            <div className="offcanvas__search mb-25">
              <form action="#">
                <input type="text" placeholder="What are you searching for?" />
                <button type="submit">
                  <i className="far fa-search" />
                </button>
              </form>
            </div>
            <div className="sidebar__img mb-20">
              <div className="row gx-2">
                <div className="col-4">
                  <div className="sidebar__single-img hover-effect w-img mb-10">
                    <a
                      className="popup-image"
                      href="assets/img/gallery/gal-1.jpg"
                    >
                      <img src="assets/img/gallery/gal-1.jpg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-4">
                  <div className="sidebar__single-img hover-effect w-img mb-10">
                    <a
                      className="popup-image"
                      href="assets/img/gallery/gal-2.jpg"
                    >
                      <img src="assets/img/gallery/gal-2.jpg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-4">
                  <div className="sidebar__single-img hover-effect w-img mb-10">
                    <a
                      className="popup-image"
                      href="assets/img/gallery/gal-3.jpg"
                    >
                      <img src="assets/img/gallery/gal-3.jpg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-4">
                  <div className="sidebar__single-img hover-effect w-img mb-10">
                    <a
                      className="popup-image"
                      href="assets/img/gallery/gal-4.jpg"
                    >
                      <img src="assets/img/gallery/gal-4.jpg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-4">
                  <div className="sidebar__single-img hover-effect w-img mb-10">
                    <a
                      className="popup-image"
                      href="assets/img/gallery/gal-5.jpg"
                    >
                      <img src="assets/img/gallery/gal-5.jpg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-4">
                  <div className="sidebar__single-img hover-effect w-img mb-10">
                    <a
                      className="popup-image"
                      href="assets/img/gallery/gal-6.jpg"
                    >
                      <img src="assets/img/gallery/gal-6.jpg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-menu-2" />
            <div className="offcanvas__action"></div>
          </div>
        </div>
      </div>
      <div className="body-overlay" />
      <main>
        {/* slider-area-start */}
        <div className="slider-area light-bg-s pt-60">
          <div className="container 0">
            <div className="row">
              <div className="col-xl-6">
                <div className="swiper-container slider__active pb-30">
                  <div className="slider-wrapper swiper-wrapper">
                    <div
                      className="single-slider swiper-slide b-radius-2 slider-height-3 d-flex align-items-center"
                      data-background="assets/img/slider/03-slide-1.jpg"
                    >
                      <div className="slider-content slider-content-2">
                        <div
                          className="slider-top-btn mb-20"
                          data-animation="fadeInLeft"
                          data-delay="1.5s"
                          style={{ animationDelay: "1.5s" }}
                        >
                          <a href="shop.html" className="st-btn b-radius">
                            HOT DEALS
                          </a>
                        </div>
                        <h2
                          data-animation="fadeInLeft"
                          data-delay="1.7s"
                          className="pt-15 slider-title pb-5"
                        >
                          BIG SALE <br /> TOP HEADPHONE
                        </h2>
                        <p
                          className="pr-20 slider_text"
                          data-animation="fadeInLeft"
                          data-delay="1.9s"
                        >
                          Best Sport Edition 2022
                        </p>
                        <div className="slider-bottom-btn mt-65">
                          <a
                            data-animation="fadeInUp"
                            data-delay="1.15s"
                            href="shop.html"
                            className="st-btn-border b-radius-2"
                          >
                            Discover now
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* /single-slider */}
                    <div
                      className="single-slider swiper-slide b-radius-2 slider-height-3 d-flex align-items-center"
                      data-background="assets/img/slider/03-slide-2.jpg"
                    >
                      <div className="slider-content slider-content-2">
                        <div
                          className="slider-top-btn mb-20"
                          data-animation="fadeInLeft"
                          data-delay="1.5s"
                          style={{ animationDelay: "1.5s" }}
                        >
                          <a href="shop.html" className="st-btn b-radius">
                            HOT DEALS
                          </a>
                        </div>
                        <h2
                          data-animation="fadeInLeft"
                          data-delay="1.5s"
                          className="pt-15 slider-title pb-5"
                        >
                          GEAR 360
                          <br /> WiRELESS LARBUDS
                        </h2>
                        <p
                          className="pr-20 slider_text"
                          data-animation="fadeInLeft"
                          data-delay="1.7s"
                        >
                          Top Quality Earbuds &amp; Accessories
                        </p>
                        <div className="slider-bottom-btn mt-65">
                          <a
                            data-animation="fadeInUp"
                            data-delay="1.9s"
                            href="shop.html"
                            className="st-btn-border b-radius-2"
                          >
                            Discover now
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* /single-slider */}
                    <div
                      className="single-slider b-radius-2 swiper-slide slider-height-3 d-flex align-items-center"
                      data-background="assets/img/slider/03-slide-3.jpg"
                    >
                      <div className="slider-content slider-content-2">
                        <div
                          className="slider-top-btn mb-20"
                          data-animation="fadeInLeft"
                          data-delay="1.5s"
                          style={{ animationDelay: "1.5s" }}
                        >
                          <a href="shop.html" className="st-btn b-radius">
                            HOT DEALS
                          </a>
                        </div>
                        <h2
                          data-animation="fadeInLeft"
                          data-delay="1.5s"
                          className="pt-15 slider-title pb-5"
                        >
                          LIMITED
                          <br />
                          WEEK DEALS
                        </h2>
                        <p
                          className="pr-20 slider_text"
                          data-animation="fadeInLeft"
                          data-delay="1.8s"
                        >
                          Discount 20% On Products
                        </p>
                        <div className="slider-bottom-btn mt-65">
                          <a
                            data-animation="fadeInUp"
                            data-delay="1.10s"
                            href="shop.html"
                            className="st-btn-border b-radius-2"
                          >
                            Discover now
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* /single-slider */}
                    <div className="main-slider-paginations" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-sm-6">
                        <div className="banner__item p-relative w-img mb-30">
                          <div className="banner__img banner__img-2 b-radius-2">
                            <a href="product-details.html">
                              <img
                                src="assets/img/banner/banner-17.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="banner__content">
                            <h6>
                              <a href="product-details.html">
                                New Style <br /> Bluetooh Speaker
                              </a>
                            </h6>
                            <p className="banner-p mt-30">Free Shipping 20km</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-sm-6">
                        <div className="banner__item p-relative w-img mb-30">
                          <div className="banner__img banner__img-2 b-radius-2">
                            <a href="product-details.html">
                              <img
                                src="assets/img/banner/banner-18.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="banner__content">
                            <h6>
                              <a href="product-details.html">
                                Limited <br /> Top Camera
                              </a>
                            </h6>
                            <p className="banner-p mt-30">Free Shipping 20km</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="banner__item p-relative w-img mb-30">
                      <div className="banner__img banner__img-3  b-radius-2">
                        <a href="product-details.html">
                          <img src="assets/img/banner/banner-19.jpg" alt="" />
                        </a>
                      </div>
                      <div className="banner__content banner__content-3">
                        <div className="banner-df-btn mb-15">
                          <a href="#" className="st-btn b-radius">
                            HOT DEALS
                          </a>
                        </div>
                        <p>Xbox Wireless</p>
                        <h6 className="df-title">
                          <a href="product-details.html">Sale Up To 50% Off</a>
                        </h6>
                        <div className="bottom-btn">
                          <a
                            href="shop.html"
                            className="st-btn-border-2 b-radius"
                          >
                            Discover now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* slider-area-end */}
        {/* top-dels-start */}
        <section className="top-dels light-bg-s pt-30">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="section__head d-flex justify-content-between mb-30">
                  <div className="section__title section__title-2">
                    <h5 className="st-titile-d st-titile-d-2">
                      Top Deals Of The Day
                    </h5>
                  </div>
                  <div className="offer-time">
                    <span className="offer-title d-none d-sm-block">
                      Hurry Up! Offer ends in:
                    </span>
                    <div className="countdown">
                      <div
                        className="countdown-inner b-radius-2"
                        data-countdown=""
                        data-date="Mar 02 2022 20:20:22"
                      >
                        <ul className="text-center">
                          <li>
                            <span data-days="">30</span> Days
                          </li>
                          <li>
                            <span data-hours="">9</span> Hours
                          </li>
                          <li>
                            <span data-minutes="">37</span> Mins
                          </li>
                          <li>
                            <span data-seconds="">38</span> Secs
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-xxl-5 row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1">
              <div className="col">
                <div className="product__item product__item-2 b-radius-2 mb-20">
                  <div className="product__thumb fix">
                    <div className="product-image w-img">
                      <a href="product-details.html">
                        <img src="assets/img/product/tp-1.jpg" alt="product" />
                      </a>
                    </div>
                    <div className="product__offer">
                      <span className="discount">-15%</span>
                    </div>
                    <div className="product-action product-action-2">
                      <a
                        href="#"
                        className="icon-box icon-box-1"
                        data-bs-toggle="modal"
                        data-bs-target="#productModalId"
                      >
                        <i className="fal fa-eye" />
                        <i className="fal fa-eye" />
                      </a>
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-heart" />
                        <i className="fal fa-heart" />
                      </a>
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-layer-group" />
                        <i className="fal fa-layer-group" />
                      </a>
                    </div>
                  </div>
                  <div className="product__content product__content-3">
                    <h6>
                      <a href="product-details.html">
                        Epple iPad Pro 10.5-inch Cellular 64G
                      </a>
                    </h6>
                    <div className="rating mb-5 mt-10">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                      </ul>
                      <span>(01 review)</span>
                    </div>
                    <div className="price mb-20">
                      <span>$105-$110</span>
                    </div>
                    <div className="progress mb-5">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "20%" }}
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="progress-rate">
                      <span>Sold:315/1225</span>
                    </div>
                  </div>
                  <div className="product__add-cart text-center">
                    <button
                      type="button"
                      className="cart-btn-3 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="product__item product__item-2 b-radius-2 mb-20">
                  <div className="product__thumb fix">
                    <div className="product-image w-img">
                      <a href="product-details.html">
                        <img src="assets/img/product/tp-2.jpg" alt="product" />
                      </a>
                    </div>
                    <div className="product-action product-action-2">
                      <a
                        href="#"
                        className="icon-box icon-box-1"
                        data-bs-toggle="modal"
                        data-bs-target="#productModalId"
                      >
                        <i className="fal fa-eye" />
                        <i className="fal fa-eye" />
                      </a>
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-heart" />
                        <i className="fal fa-heart" />
                      </a>
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-layer-group" />
                        <i className="fal fa-layer-group" />
                      </a>
                    </div>
                  </div>
                  <div className="product__content product__content-3">
                    <h6>
                      <a href="product-details.html">
                        Men Size Yellow Basketball Jerseys
                      </a>
                    </h6>
                    <div className="rating mb-5 mt-10">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                      </ul>
                      <span>(01 review)</span>
                    </div>
                    <div className="price mb-20">
                      <span>$105-$150</span>
                    </div>
                    <div className="progress mb-5">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "20%" }}
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="progress-rate">
                      <span>Sold:315/1225</span>
                    </div>
                  </div>
                  <div className="product__add-cart text-center">
                    <button
                      type="button"
                      className="cart-btn-3 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="product__item product__item-2 b-radius-2 mb-20">
                  <div className="product__thumb fix">
                    <div className="product-image w-img">
                      <a href="product-details.html">
                        <img src="assets/img/product/tp-3.jpg" alt="product" />
                      </a>
                    </div>
                    <div className="product__offer">
                      <span className="discount">-9%</span>
                    </div>
                    <div className="product-action product-action-2">
                      <a
                        href="#"
                        className="icon-box icon-box-1"
                        data-bs-toggle="modal"
                        data-bs-target="#productModalId"
                      >
                        <i className="fal fa-eye" />
                        <i className="fal fa-eye" />
                      </a>
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-heart" />
                        <i className="fal fa-heart" />
                      </a>
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-layer-group" />
                        <i className="fal fa-layer-group" />
                      </a>
                    </div>
                  </div>
                  <div className="product__content product__content-3">
                    <h6>
                      <a href="product-details.html">
                        Xbox Wireless Game Controller Pink
                      </a>
                    </h6>
                    <div className="rating mb-5 mt-10">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                      </ul>
                      <span>(01 review)</span>
                    </div>
                    <div className="price mb-20">
                      <span>$200-$280</span>
                    </div>
                    <div className="progress mb-5">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "20%" }}
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="progress-rate">
                      <span>Sold:315/1225</span>
                    </div>
                  </div>
                  <div className="product__add-cart text-center">
                    <button
                      type="button"
                      className="cart-btn-3 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="product__item product__item-2 b-radius-2 mb-20">
                  <div className="product__thumb fix">
                    <div className="product-image w-img">
                      <a href="product-details.html">
                        <img src="assets/img/product/tp-7.jpg" alt="product" />
                      </a>
                    </div>
                    <div className="product-action product-action-2">
                      <a
                        href="#"
                        className="icon-box icon-box-1"
                        data-bs-toggle="modal"
                        data-bs-target="#productModalId"
                      >
                        <i className="fal fa-eye" />
                        <i className="fal fa-eye" />
                      </a>
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-heart" />
                        <i className="fal fa-heart" />
                      </a>
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-layer-group" />
                        <i className="fal fa-layer-group" />
                      </a>
                    </div>
                  </div>
                  <div className="product__content product__content-3">
                    <h6>
                      <a href="product-details.html">
                        APPO R11s 64GB Dual 20MP Cameras
                      </a>
                    </h6>
                    <div className="rating mb-5 mt-10">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                      </ul>
                      <span>(01 review)</span>
                    </div>
                    <div className="price mb-20">
                      <span>$150.00-$270.00</span>
                    </div>
                    <div className="progress mb-5">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "20%" }}
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="progress-rate">
                      <span>Sold:315/1225</span>
                    </div>
                  </div>
                  <div className="product__add-cart text-center">
                    <button
                      type="button"
                      className="cart-btn-3 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="product__item product__item-2 b-radius-2 mb-20">
                  <div className="product__thumb fix">
                    <div className="product-image w-img">
                      <a href="product-details.html">
                        <img src="assets/img/product/tp-10.jpg" alt="product" />
                      </a>
                    </div>
                    <div className="product-action product__content-3">
                      <a
                        href="#"
                        className="icon-box icon-box-1"
                        data-bs-toggle="modal"
                        data-bs-target="#productModalId"
                      >
                        <i className="fal fa-eye" />
                        <i className="fal fa-eye" />
                      </a>
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-heart" />
                        <i className="fal fa-heart" />
                      </a>
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-layer-group" />
                        <i className="fal fa-layer-group" />
                      </a>
                    </div>
                  </div>
                  <div className="product__content product__content-3">
                    <h6>
                      <a href="product-details.html">
                        G951s Pink Stereo Gaming Headset
                      </a>
                    </h6>
                    <div className="rating mb-5 mt-10">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                      </ul>
                      <span>(01 review)</span>
                    </div>
                    <div className="price mb-20">
                      <span>$120.00-$210.00</span>
                    </div>
                    <div className="progress mb-5">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "20%" }}
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="progress-rate">
                      <span>Sold:315/1225</span>
                    </div>
                  </div>
                  <div className="product__add-cart text-center">
                    <button
                      type="button"
                      className="cart-btn-3 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* top-dels-end */}
        {/* featured-start */}
        <section className="featured light-bg-s pt-50 pb-40">
          <div className="container 0">
            <div className="row">
              <div className="col-xl-12">
                <div className="section__head d-flex justify-content-between mb-30">
                  <div className="section__title section__title-2">
                    <h5 className="st-titile">Top Featured Products</h5>
                  </div>
                  <div className="button-wrap button-wrap-2">
                    <a href="product.html">
                      See All Product <i className="fal fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-12">
                <div className="single-features-item single-features-item-d b-radius-2 mb-20">
                  <div className="row  g-0 align-items-center">
                    <div className="col-md-6">
                      <div className="features-thum">
                        <div className="features-product-image w-img">
                          <a href="product-details.html">
                            <img
                              src="assets/img/features-product/fpsm-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-action product-action-2">
                          <a
                            href="#"
                            className="icon-box icon-box-1"
                            data-bs-toggle="modal"
                            data-bs-target="#productModalId"
                          >
                            <i className="fal fa-eye" />
                            <i className="fal fa-eye" />
                          </a>
                          <a href="#" className="icon-box icon-box-1">
                            <i className="fal fa-layer-group" />
                            <i className="fal fa-layer-group" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="product__content product__content-d product__content-d-2">
                        <h6>
                          <a href="product-details.html">
                            Samsang Galaxy A70 128GB Dual-SIM
                          </a>
                        </h6>
                        <div className="rating mb-5">
                          <ul className="rating-d">
                            <li>
                              <a href="#">
                                <i className="fal fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fal fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fal fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fal fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fal fa-star" />
                              </a>
                            </li>
                          </ul>
                          <span>(01 review)</span>
                        </div>
                        <div className="price d-price mb-10">
                          <span>
                            $307.00 <del>$110</del>
                          </span>
                        </div>
                        <div className="features-des mb-25">
                          <ul>
                            <li>
                              <a href="product-details.html">
                                <i className="fas fa-circle" /> Bass and Stereo
                                Sound.
                              </a>
                            </li>
                            <li>
                              <a href="product-details.html">
                                <i className="fas fa-circle" /> Display with
                                3088 x 1440 pixels resolution.
                              </a>
                            </li>
                            <li>
                              <a href="product-details.html">
                                <i className="fas fa-circle" /> Memory, Storage
                                &amp; SIM: 12GB RAM, 256GB.
                              </a>
                            </li>
                            <li>
                              <a href="product-details.html">
                                <i className="fas fa-circle" /> Androi v10.0
                                Operating system.
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="cart-option">
                          <a
                            href="cart.html"
                            className="cart-btn-4 w-100 mr-10"
                          >
                            Add to Cart
                          </a>
                          <a href="cart.html" className="transperant-btn-2">
                            <i className="fal fa-heart" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12">
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-features-item b-radius-2 mb-20">
                      <div className="row  g-0 align-items-center">
                        <div className="col-6">
                          <div className="features-thum">
                            <div className="features-product-image w-img">
                              <a href="product-details.html">
                                <img
                                  src="assets/img/features-product/fp-1.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product__offer">
                              <span className="discount">-15%</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="product__content product__content-d product__content-d-2">
                            <h6>
                              <a href="product-details.html">
                                Epple Watch SE Gold Aluminum
                              </a>
                            </h6>
                            <div className="rating mb-5">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                              </ul>
                              <span>(01 review)</span>
                            </div>
                            <div className="price d-price">
                              <span>
                                $307.00 <del>$110</del>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-features-item b-radius-2 mb-20">
                      <div className="row  g-0 align-items-center">
                        <div className="col-6">
                          <div className="features-thum">
                            <div className="features-product-image w-img">
                              <a href="product-details.html">
                                <img
                                  src="assets/img/features-product/fp-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product__offer">
                              <span className="discount">-5%</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="product__content product__content-d product__content-d-2">
                            <h6>
                              <a href="product-details.html">
                                G951s Pink Stereo Gaming Headset
                              </a>
                            </h6>
                            <div className="rating mb-5">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                              </ul>
                              <span>(01 review)</span>
                            </div>
                            <div className="price d-price">
                              <span>
                                $210.00 <del>$110</del>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-features-item b-radius-2 mb-20">
                      <div className="row  g-0 align-items-center">
                        <div className="col-6">
                          <div className="features-thum">
                            <div className="features-product-image w-img">
                              <a href="product-details.html">
                                <img
                                  src="assets/img/features-product/fp-3.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product__offer">
                              <span className="discount">-25%</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="product__content product__content-d product__content-d-2">
                            <h6>
                              <a href="product-details.html">
                                Solo3 Wireless On-Ear Headphones
                              </a>
                            </h6>
                            <div className="rating mb-5">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                              </ul>
                              <span>(01 review)</span>
                            </div>
                            <div className="price">
                              <span>
                                $160.00 <del>$110</del>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-features-item b-radius-2 mb-20">
                      <div className="row  g-0 align-items-center">
                        <div className="col-6">
                          <div className="features-thum">
                            <div className="features-product-image w-img">
                              <a href="product-details.html">
                                <img
                                  src="assets/img/features-product/fp-6.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="product__content product__content-d product__content-d-2">
                            <h6>
                              <a href="product-details.html">
                                Men’s Short-Sleeve Pocket Oxford Shirt
                              </a>
                            </h6>
                            <div className="rating mb-5">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                              </ul>
                              <span>(01 review)</span>
                            </div>
                            <div className="price">
                              <span>
                                $280.00 <del>$110</del>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* featured-end */}
        {/* banner__area-start */}
        <section className="banner__area light-bg-s pb-10">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="banner__item p-relative w-img mb-30">
                  <div className="banner__img b-radius-2">
                    <a href="product-details.html">
                      <img src="assets/img/banner/banner-1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="banner__content">
                    <h6>
                      <a href="product-details.html">
                        Intelligent <br /> New Touch Control
                      </a>
                    </h6>
                    <p>Discount 20% On Products</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="banner__item p-relative mb-30 w-img">
                  <div className="banner__img b-radius-2">
                    <a href="product-details.html">
                      <img src="assets/img/banner/banner-2.jpg" alt="" />
                    </a>
                  </div>
                  <div className="banner__content">
                    <h6>
                      <a href="product-details.html">
                        On-sale <br /> Best Prices
                      </a>
                    </h6>
                    <p>Limited Time: Online Only!</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="banner__item p-relative mb-30 w-img">
                  <div className="banner__img b-radius-2">
                    <a href="product-details.html">
                      <img src="assets/img/banner/banner-3.jpg" alt="" />
                    </a>
                  </div>
                  <div className="banner__content">
                    <h6>
                      <a href="product-details.html">
                        Hot Sale <br /> Super Laptops 2022{" "}
                      </a>
                    </h6>
                    <p>Free Shipping All Order</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* banner__area-end */}
        {/* trending-product-area-start */}
        <section className="trending-product-area light-bg-s pt-20 pb-15">
          <div className="container 0">
            <div className="row">
              <div className="col-xl-12">
                <div className="section__head d-flex justify-content-between mb-30">
                  <div className="section__title section__title-2">
                    <h5 className="st-titile">Hot Trending Products</h5>
                  </div>
                  <div className="button-wrap button-wrap-2">
                    <a href="product.html">
                      See All Product <i className="fal fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2">
                <div className="product__item product__item-2 b-radius-2 mb-20">
                  <div className="product__thumb fix">
                    <div className="product-image w-img">
                      <a href="product-details.html">
                        <img src="assets/img/product/tp-1.jpg" alt="product" />
                      </a>
                    </div>
                    <div className="product__offer">
                      <span className="discount">-15%</span>
                    </div>
                    <div className="product-action product-action-2">
                      <a
                        href="#"
                        className="icon-box icon-box-1"
                        data-bs-toggle="modal"
                        data-bs-target="#productModalId"
                      >
                        <i className="fal fa-eye" />
                        <i className="fal fa-eye" />
                      </a>
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-heart" />
                        <i className="fal fa-heart" />
                      </a>
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-layer-group" />
                        <i className="fal fa-layer-group" />
                      </a>
                    </div>
                  </div>
                  <div className="product__content product__content-2">
                    <h6>
                      <a href="product-details.html">
                        Epple iPad Pro 10.5-inch Cellular 64G
                      </a>
                    </h6>
                    <div className="rating mb-5 mt-10">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                      </ul>
                      <span>(01 review)</span>
                    </div>
                    <div className="price">
                      <span>$105-$110</span>
                    </div>
                  </div>
                  <div className="product__add-cart text-center">
                    <button
                      type="button"
                      className="cart-btn-3 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2">
                <div className="product__item product__item-2 b-radius-2 mb-20">
                  <div className="product__thumb fix">
                    <div className="product-image w-img">
                      <a href="product-details.html">
                        <img src="assets/img/product/tp-2.jpg" alt="product" />
                      </a>
                    </div>
                    <div className="product-action product-action-2">
                      <a
                        href="#"
                        className="icon-box icon-box-1"
                        data-bs-toggle="modal"
                        data-bs-target="#productModalId"
                      >
                        <i className="fal fa-eye" />
                        <i className="fal fa-eye" />
                      </a>
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-heart" />
                        <i className="fal fa-heart" />
                      </a>
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-layer-group" />
                        <i className="fal fa-layer-group" />
                      </a>
                    </div>
                  </div>
                  <div className="product__content product__content-2">
                    <h6>
                      <a href="product-details.html">
                        Men Size Yellow Basketball Jerseys
                      </a>
                    </h6>
                    <div className="rating mb-5 mt-10">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                      </ul>
                      <span>(01 review)</span>
                    </div>
                    <div className="price">
                      <span>$105-$150</span>
                    </div>
                  </div>
                  <div className="product__add-cart text-center">
                    <button
                      type="button"
                      className="cart-btn-3 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2">
                <div className="product__item product__item-2 b-radius-2 mb-20">
                  <div className="product__thumb fix">
                    <div className="product-image w-img">
                      <a href="product-details.html">
                        <img src="assets/img/product/tp-3.jpg" alt="product" />
                      </a>
                    </div>
                    <div className="product__offer">
                      <span className="discount">-9%</span>
                    </div>
                    <div className="product-action product-action-2">
                      <a
                        href="#"
                        className="icon-box icon-box-1"
                        data-bs-toggle="modal"
                        data-bs-target="#productModalId"
                      >
                        <i className="fal fa-eye" />
                        <i className="fal fa-eye" />
                      </a>
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-heart" />
                        <i className="fal fa-heart" />
                      </a>
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-layer-group" />
                        <i className="fal fa-layer-group" />
                      </a>
                    </div>
                  </div>
                  <div className="product__content product__content-2">
                    <h6>
                      <a href="product-details.html">
                        Xbox Wireless Game Controller Pink
                      </a>
                    </h6>
                    <div className="rating mb-5 mt-10">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                      </ul>
                      <span>(01 review)</span>
                    </div>
                    <div className="price">
                      <span>$200-$280</span>
                    </div>
                  </div>
                  <div className="product__add-cart text-center">
                    <button
                      type="button"
                      className="cart-btn-3 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2">
                <div className="product__item product__item-2 b-radius-2 mb-20">
                  <div className="product__thumb fix">
                    <div className="product-image w-img">
                      <a href="product-details.html">
                        <img src="assets/img/product/tp-7.jpg" alt="product" />
                      </a>
                    </div>
                    <div className="product-action product-action-2">
                      <a
                        href="#"
                        className="icon-box icon-box-1"
                        data-bs-toggle="modal"
                        data-bs-target="#productModalId"
                      >
                        <i className="fal fa-eye" />
                        <i className="fal fa-eye" />
                      </a>
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-heart" />
                        <i className="fal fa-heart" />
                      </a>
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-layer-group" />
                        <i className="fal fa-layer-group" />
                      </a>
                    </div>
                  </div>
                  <div className="product__content product__content-2">
                    <h6>
                      <a href="product-details.html">
                        APPO R11s 64GB Dual 20MP Cameras
                      </a>
                    </h6>
                    <div className="rating mb-5 mt-10">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                      </ul>
                      <span>(01 review)</span>
                    </div>
                    <div className="price">
                      <span>$150.00-$270.00</span>
                    </div>
                  </div>
                  <div className="product__add-cart text-center">
                    <button
                      type="button"
                      className="cart-btn-3 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2">
                <div className="product__item product__item-2 b-radius-2 mb-20">
                  <div className="product__thumb fix">
                    <div className="product-image w-img">
                      <a href="product-details.html">
                        <img src="assets/img/product/tp-10.jpg" alt="product" />
                      </a>
                    </div>
                    <div className="product-action product-action-2">
                      <a
                        href="#"
                        className="icon-box icon-box-1"
                        data-bs-toggle="modal"
                        data-bs-target="#productModalId"
                      >
                        <i className="fal fa-eye" />
                        <i className="fal fa-eye" />
                      </a>
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-heart" />
                        <i className="fal fa-heart" />
                      </a>
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-layer-group" />
                        <i className="fal fa-layer-group" />
                      </a>
                    </div>
                  </div>
                  <div className="product__content product__content-2">
                    <h6>
                      <a href="product-details.html">
                        G951s Pink Stereo Gaming Headset
                      </a>
                    </h6>
                    <div className="rating mb-5 mt-10">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                      </ul>
                      <span>(01 review)</span>
                    </div>
                    <div className="price">
                      <span>$120.00-$210.00</span>
                    </div>
                  </div>
                  <div className="product__add-cart text-center">
                    <button
                      type="button"
                      className="cart-btn-3 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2">
                <div className="product__item product__item-2 b-radius-2 mb-20">
                  <div className="product__thumb fix">
                    <div className="product-image w-img">
                      <a href="product-details.html">
                        <img src="assets/img/product/tp-9.jpg" alt="product" />
                      </a>
                    </div>
                    <div className="product-action product-action-2">
                      <a
                        href="#"
                        className="icon-box icon-box-1"
                        data-bs-toggle="modal"
                        data-bs-target="#productModalId"
                      >
                        <i className="fal fa-eye" />
                        <i className="fal fa-eye" />
                      </a>
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-heart" />
                        <i className="fal fa-heart" />
                      </a>
                      <a href="#" className="icon-box icon-box-1">
                        <i className="fal fa-layer-group" />
                        <i className="fal fa-layer-group" />
                      </a>
                    </div>
                  </div>
                  <div className="product__content product__content-2">
                    <h6>
                      <a href="product-details.html">
                        Epple iPhone 11 Pro Max 64GB Gold
                      </a>
                    </h6>
                    <div className="rating mb-5 mt-10">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star" />
                          </a>
                        </li>
                      </ul>
                      <span>(01 review)</span>
                    </div>
                    <div className="price">
                      <span>$120.00-$140.00</span>
                    </div>
                  </div>
                  <div className="product__add-cart text-center">
                    <button
                      type="button"
                      className="cart-btn-3 product-modal-sidebar-open-btn d-flex align-items-center justify-content-center w-100"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* trending-product-area-end */}
        {/* doubale-product-area-start */}
        <div className="doubale-product-area light-bg-s pt-20 pb-40">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-6">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="section__head d-flex justify-content-between mb-30">
                      <div className="section__title section__title-2">
                        <h5 className="st-titile">Hot Trending Products</h5>
                      </div>
                      <div className="button-wrap button-wrap-2">
                        <a href="product.html">
                          See All <i className="fal fa-chevron-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="single-features-item b-radius-2 mb-20">
                      <div className="row  g-0 align-items-center">
                        <div className="col-4">
                          <div className="features-thum">
                            <div className="features-product-image w-img">
                              <a href="product-details.html">
                                <img
                                  src="assets/img/features-product/fp-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product__offer">
                              <span className="discount">-5%</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="product__content product__content-d product__content-d-2">
                            <h6>
                              <a href="product-details.html">
                                G951s Pink Stereo Gaming Headset
                              </a>
                            </h6>
                            <div className="rating mb-5">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                              </ul>
                              <span>(01 review)</span>
                            </div>
                            <div className="price d-price">
                              <span>
                                $210.00 <del>$110</del>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="single-features-item b-radius-2 mb-20">
                      <div className="row  g-0 align-items-center">
                        <div className="col-4">
                          <div className="features-thum">
                            <div className="features-product-image w-img">
                              <a href="product-details.html">
                                <img
                                  src="assets/img/features-product/fp-3.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product__offer">
                              <span className="discount">-25%</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="product__content product__content-d product__content-d-2">
                            <h6>
                              <a href="product-details.html">
                                Solo3 Wireless On-Ear Headphones
                              </a>
                            </h6>
                            <div className="rating mb-5">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                              </ul>
                              <span>(01 review)</span>
                            </div>
                            <div className="price">
                              <span>
                                $160.00 <del>$110</del>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="single-features-item b-radius-2 mb-20">
                      <div className="row  g-0 align-items-center">
                        <div className="col-4">
                          <div className="features-thum">
                            <div className="features-product-image w-img">
                              <a href="product-details.html">
                                <img
                                  src="assets/img/features-product/fp-6.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="product__content product__content-d product__content-d-2">
                            <h6>
                              <a href="product-details.html">
                                Men’s Short-Sleeve Pocket Oxford Shirt
                              </a>
                            </h6>
                            <div className="rating mb-5">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                              </ul>
                              <span>(01 review)</span>
                            </div>
                            <div className="price">
                              <span>
                                $280.00 <del>$110</del>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="section__head d-flex justify-content-between mb-30">
                      <div className="section__title section__title-2">
                        <h5 className="st-titile">On-sale Products</h5>
                      </div>
                      <div className="button-wrap button-wrap-2">
                        <a href="product.html">
                          See All <i className="fal fa-chevron-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="single-features-item b-radius-2 mb-20">
                      <div className="row  g-0 align-items-center">
                        <div className="col-4">
                          <div className="features-thum">
                            <div className="features-product-image w-img">
                              <a href="product-details.html">
                                <img
                                  src="assets/img/features-product/fp-7.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="product__content product__content-d product__content-d-2">
                            <h6>
                              <a href="product-details.html">
                                OnePlus Nord N100 64GB, 4GB RAM
                              </a>
                            </h6>
                            <div className="rating mb-5">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                              </ul>
                              <span>(01 review)</span>
                            </div>
                            <div className="price d-price">
                              <span>
                                $245.00 <del>$110</del>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="single-features-item b-radius-2 mb-20">
                      <div className="row  g-0 align-items-center">
                        <div className="col-4">
                          <div className="features-thum">
                            <div className="features-product-image w-img">
                              <a href="product-details.html">
                                <img
                                  src="assets/img/features-product/fp-8.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product__offer">
                              <span className="discount">-25%</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="product__content product__content-d product__content-d-2">
                            <h6>
                              <a href="product-details.html">
                                Smartwatch with Heart Rate 256bpm
                              </a>
                            </h6>
                            <div className="rating mb-5">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                              </ul>
                              <span>(01 review)</span>
                            </div>
                            <div className="price">
                              <span>
                                $130.00 <del>$110</del>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="single-features-item b-radius-2 mb-20">
                      <div className="row  g-0 align-items-center">
                        <div className="col-4">
                          <div className="features-thum">
                            <div className="features-product-image w-img">
                              <a href="product-details.html">
                                <img
                                  src="assets/img/features-product/fp-9.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="product__content product__content-d product__content-d-2">
                            <h6>
                              <a href="product-details.html">
                                Samsang Galaxy A21S 4GB Ram, 128Gb
                              </a>
                            </h6>
                            <div className="rating mb-5">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                              </ul>
                              <span>(01 review)</span>
                            </div>
                            <div className="price">
                              <span>
                                $180.00 <del>$110</del>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="section__head d-flex justify-content-between mb-30">
                      <div className="section__title section__title-2">
                        <h5 className="st-titile">Top Rate Products</h5>
                      </div>
                      <div className="button-wrap button-wrap-2">
                        <a href="product.html">
                          See All <i className="fal fa-chevron-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="single-features-item b-radius-2 mb-20">
                      <div className="row  g-0 align-items-center">
                        <div className="col-4">
                          <div className="features-thum">
                            <div className="features-product-image w-img">
                              <a href="product-details.html">
                                <img
                                  src="assets/img/features-product/fp-10.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product__offer">
                              <span className="discount">-5%</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="product__content product__content-d product__content-d-2">
                            <h6>
                              <a href="product-details.html">
                                Apple iPhone XR 64GB Red Dual-SIM
                              </a>
                            </h6>
                            <div className="rating mb-5">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                              </ul>
                              <span>(01 review)</span>
                            </div>
                            <div className="price d-price">
                              <span>
                                $165.00 <del>$110</del>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="single-features-item b-radius-2 mb-20">
                      <div className="row  g-0 align-items-center">
                        <div className="col-4">
                          <div className="features-thum">
                            <div className="features-product-image w-img">
                              <a href="product-details.html">
                                <img
                                  src="assets/img/features-product/fp-11.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="product__offer">
                              <span className="discount">-25%</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="product__content product__content-d product__content-d-2">
                            <h6>
                              <a href="product-details.html">
                                MW65 Wireless Headphones Z1000
                              </a>
                            </h6>
                            <div className="rating mb-5">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                              </ul>
                              <span>(01 review)</span>
                            </div>
                            <div className="price">
                              <span>
                                $130.00 <del>$110</del>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="single-features-item b-radius-2 mb-20">
                      <div className="row  g-0 align-items-center">
                        <div className="col-4">
                          <div className="features-thum">
                            <div className="features-product-image w-img">
                              <a href="product-details.html">
                                <img
                                  src="assets/img/features-product/fp-12.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="product__content product__content-d product__content-d-2">
                            <h6>
                              <a href="product-details.html">
                                All-new Fire HD 10 Tablet 10.1″ Full HD
                              </a>
                            </h6>
                            <div className="rating mb-5">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fal fa-star" />
                                  </a>
                                </li>
                              </ul>
                              <span>(01 review)</span>
                            </div>
                            <div className="price">
                              <span>
                                $140.00 <del>$110</del>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* doubale-product-area-end */}
        {/* moveing-text-area-start */}
        <section className="moveing-text-area">
          <div className="container">
            <div className="ovic-running">
              <div className="wrap">
                <div className="inner">
                  <p className="item">
                    Free UK Delivery - Return Over $100.00 ( Excluding Homeware
                    ) | Free UK Collect From Store
                  </p>
                  <p className="item">
                    Design Week / 15% Off the website / Code: AYOSALE-2020
                  </p>
                  <p className="item">
                    Always iconic. Now organic. Introducing the $20 Organic Tee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* moveing-text-area-end */}
        {/* blog-area-start */}
        <div className="blog-area pt-55 pb-75">
          <div className="container 0">
            <div className="row">
              <div className="col-xl-12">
                <div className="section__head d-flex justify-content-between mb-30">
                  <div className="section__title section__title-2">
                    <h5 className="st-titile">From The Blog</h5>
                  </div>
                  <div className="button-wrap button-wrap-2">
                    <a href="blog.html">
                      See All Product <i className="fal fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-4">
                <div className="single-smblog mb-30">
                  <div className="smblog-thum">
                    <div className="blog-image blog-image-2 w-img">
                      <a href="blog-details.html">
                        <img src="assets/img/blog/sm-b-1.jpg" alt="" />
                      </a>
                    </div>
                    <div className="blog-tag">
                      <a href="blog.html">Digital</a>
                    </div>
                  </div>
                  <div className="smblog-content smblog-content-2">
                    <h6>
                      <a href="blog-details.html">
                        How mobile phones have changed people’s lives in the
                        world
                      </a>
                    </h6>
                    <span className="author mb-10">
                      posted by <a href="#">Adlop</a>
                    </span>
                    <div className="smblog-foot pt-15">
                      <div className="post-readmore">
                        <a href="blog-details.html">
                          {" "}
                          Read More <span className="icon" />
                        </a>
                      </div>
                      <div className="post-date">
                        <a href="blog-details.html">Jan 24, 2022</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-4">
                <div className="single-smblog mb-30">
                  <div className="smblog-thum">
                    <div className="blog-image blog-image-2 w-img">
                      <a href="blog-details.html">
                        <img src="assets/img/blog/sm-b-2.jpg" alt="" />
                      </a>
                    </div>
                    <div className="blog-tag">
                      <a href="blog.html">New</a>
                    </div>
                  </div>
                  <div className="smblog-content smblog-content-2">
                    <h6>
                      <a href="blog-details.html">
                        Top 5 Best Digital Cameras for 2021 You Should Buy
                      </a>
                    </h6>
                    <span className="author mb-10">
                      posted by <a href="#">Angelia</a>
                    </span>
                    <div className="smblog-foot pt-15">
                      <div className="post-readmore">
                        <a href="blog-details.html">
                          Read More <span className="icon" />
                        </a>
                      </div>
                      <div className="post-date">
                        <a href="blog-details.html">Jan 24, 2022</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-4">
                <div className="single-smblog mb-30">
                  <div className="smblog-thum">
                    <div className="blog-image blog-image-2 w-img">
                      <a href="blog-details.html">
                        <img src="assets/img/blog/sm-b-3.jpg" alt="" />
                      </a>
                    </div>
                    <div className="blog-tag">
                      <a href="blog.html">Update</a>
                    </div>
                  </div>
                  <div className="smblog-content smblog-content-2">
                    <h6>
                      <a href="blog-details.html">
                        Capture the moment with 4 cameras on Oppo A92
                      </a>
                    </h6>
                    <span className="author mb-10">
                      posted by <a href="#">Iqbal</a>
                    </span>
                    <div className="smblog-foot pt-15">
                      <div className="post-readmore">
                        <a href="blog-details.html">
                          {" "}
                          Read More <span className="icon" />
                        </a>
                      </div>
                      <div className="post-date">
                        <a href="blog-details.html">Jan 24, 2022</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-4">
                <div className="single-smblog mb-30">
                  <div className="smblog-thum">
                    <div className="blog-image blog-image-2 w-img">
                      <a href="blog-details.html">
                        <img src="assets/img/blog/sm-b-4.jpg" alt="" />
                      </a>
                    </div>
                    <div className="blog-tag">
                      <a href="blog.html">Offer</a>
                    </div>
                  </div>
                  <div className="smblog-content smblog-content-2">
                    <h6>
                      <a href="blog-details.html">
                        Use Headphones Properly Not To Damage Your Hearing
                      </a>
                    </h6>
                    <span className="author mb-10">
                      posted by <a href="#">Jenny</a>
                    </span>
                    <div className="smblog-foot pt-15">
                      <div className="post-readmore">
                        <a href="blog-details.html">
                          {" "}
                          Read More <span className="icon" />
                        </a>
                      </div>
                      <div className="post-date">
                        <a href="blog-details.html">Jan 24, 2022</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* blog-area-end */}
        {/* brand-area-start */}
        <section className="brand-area brand-area-d">
          <div className="container">
            <div className="brand-slider swiper-container pt-50 pb-45">
              <div className="swiper-wrapper">
                <div className="brand-item w-img swiper-slide">
                  <a href="#">
                    <img src="assets/img/brand/brand-1.jpg" alt="brand" />
                  </a>
                </div>
                <div className="brand-item w-img swiper-slide">
                  <a href="#">
                    <img src="assets/img/brand/brand-2.jpg" alt="brand" />
                  </a>
                </div>
                <div className="brand-item w-img swiper-slide">
                  <a href="#">
                    <img src="assets/img/brand/brand-3.jpg" alt="brand" />
                  </a>
                </div>
                <div className="brand-item w-img swiper-slide">
                  <a href="#">
                    <img src="assets/img/brand/brand-4.jpg" alt="brand" />
                  </a>
                </div>
                <div className="brand-item w-img swiper-slide">
                  <a href="#">
                    <img src="assets/img/brand/brand-5.jpg" alt="brand" />
                  </a>
                </div>
                <div className="brand-item w-img swiper-slide">
                  <a href="#">
                    <img src="assets/img/brand/brand-6.jpg" alt="brand" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* brand-area-end */}
        {/* shop modal start */}
        <div
          className="modal fade"
          id="productModalId"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered product__modal"
            role="document"
          >
            <div className="modal-content">
              <div className="product__modal-wrapper p-relative">
                <div className="product__modal-close p-absolute">
                  <button data-bs-dismiss="modal">
                    <i className="fal fa-times" />
                  </button>
                </div>
                <div className="product__modal-inner">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="product__modal-box">
                        <div className="tab-content" id="modalTabContent">
                          <div
                            className="tab-pane fade show active"
                            id="nav1"
                            role="tabpanel"
                            aria-labelledby="nav1-tab"
                          >
                            <div className="product__modal-img w-img">
                              <img
                                src="assets/img/quick-view/quick-view-1.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="nav2"
                            role="tabpanel"
                            aria-labelledby="nav2-tab"
                          >
                            <div className="product__modal-img w-img">
                              <img
                                src="assets/img/quick-view/quick-view-2.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="nav3"
                            role="tabpanel"
                            aria-labelledby="nav3-tab"
                          >
                            <div className="product__modal-img w-img">
                              <img
                                src="assets/img/quick-view/quick-view-3.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="nav4"
                            role="tabpanel"
                            aria-labelledby="nav4-tab"
                          >
                            <div className="product__modal-img w-img">
                              <img
                                src="assets/img/quick-view/quick-view-4.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <ul
                          className="nav nav-tabs"
                          id="modalTab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              id="nav1-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav1"
                              type="button"
                              role="tab"
                              aria-controls="nav1"
                              aria-selected="true"
                            >
                              <img
                                src="assets/img/quick-view/quick-nav-1.jpg"
                                alt=""
                              />
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="nav2-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav2"
                              type="button"
                              role="tab"
                              aria-controls="nav2"
                              aria-selected="false"
                            >
                              <img
                                src="assets/img/quick-view/quick-nav-2.jpg"
                                alt=""
                              />
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="nav3-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav3"
                              type="button"
                              role="tab"
                              aria-controls="nav3"
                              aria-selected="false"
                            >
                              <img
                                src="assets/img/quick-view/quick-nav-3.jpg"
                                alt=""
                              />
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="nav4-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav4"
                              type="button"
                              role="tab"
                              aria-controls="nav4"
                              aria-selected="false"
                            >
                              <img
                                src="assets/img/quick-view/quick-nav-4.jpg"
                                alt=""
                              />
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="product__modal-content">
                        <h4>
                          <a href="product-details.html">
                            Samsung C49J89: £875, Debenhams Plus
                          </a>
                        </h4>
                        <div className="product__review d-sm-flex">
                          <div className="rating rating__shop mb-10 mr-30">
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="fal fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fal fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fal fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fal fa-star" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fal fa-star" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="product__add-review mb-15">
                            <span>01 review</span>
                          </div>
                        </div>
                        <div className="product__price">
                          <span>$109.00 – $307.00</span>
                        </div>
                        <div className="product__modal-des mt-20 mb-15">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fas fa-circle" /> Bass and Stereo
                                Sound.
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-circle" /> Display with
                                3088 x 1440 pixels resolution.
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-circle" /> Memory, Storage
                                &amp; SIM: 12GB RAM, 256GB.
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-circle" /> Androi v10.0
                                Operating system.
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="product__stock mb-20">
                          <span className="mr-10">Availability :</span>
                          <span>1795 in stock</span>
                        </div>
                        <div className="product__modal-form">
                          <form action="#">
                            <div className="pro-quan-area d-lg-flex align-items-center">
                              <div className="product-quantity mr-20 mb-25">
                                <div className="cart-plus-minus p-relative">
                                  <input type="text" defaultValue={1} />
                                </div>
                              </div>
                              <div className="pro-cart-btn mb-25">
                                <button className="cart-btn" type="submit">
                                  Add to cart
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="product__stock mb-30">
                          <ul>
                            <li>
                              <a href="#">
                                <span className="sku mr-10">SKU:</span>
                                <span>
                                  Samsung C49J89: £875, Debenhams Plus
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="cat mr-10">Categories:</span>
                                <span>iPhone, Tablets</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="tag mr-10">Tags:</span>
                                <span>Smartphone, Tablets</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* shop modal end */}
      </main>
    </>
  );
}

export default App;
