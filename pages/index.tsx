import React from "react"
import Head from "next/head";


const Home: React.FC = () => {
  return (
    <>
  <title> Đồ án nhóm 7 </title>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, user-scalable=no"
  />
  <link rel="stylesheet" href="assets/css/main.css" />
  <noscript>
    &lt;link rel="stylesheet" href="assets/css/noscript.css" /&gt;
  </noscript>
  {/* Wrapper */}
  <div id="wrapper">
    {/* Header */}
    <header id="header" className="alt">
      <span className="logo">
        <img src="images/logo.png"  />
      </span>
      <h1>Kho cung cấp nông sản </h1>
      
    </header>
    {/* Nav */}
    <nav id="nav">
      <ul>
        <li>
          <a href="#intro" className="active">
            Introduction
          </a>
        </li>
        <li>
          <a href="#first">Thông tin sản phẩm</a>
        </li>
        <li>
          <a href="#second">Tạo hợp đồng</a>
        </li>
        <li>
          <a href="#cta">Cập nhật và truy xuất thông tin sản phẩm</a>
        </li>
        <li>
        <a href="HopDong" className="button primary">
                Connect
         </a>
        </li>
      </ul>
    </nav>
    {/* Main */}
    <div id="main">
      {/* Introduction */}
      <section id="intro" className="main">
        <div className="spotlight">
          <div className="content">
            <header className="major">
              <h2>Nông sản Thành Công</h2>
            </header>
            <p>
             Công ty cổ phần nông sản Thành Công, trước đây là Công ty Vật tư
             nông sản thuộc Bộ Nông nghiệp và phát triển nông thôn, được cổ phần hoá tháng 11 năm 2021
             là một trong những doanh nghiệp chuyên cung cấp nông sản  lớn nhất Việt Nam. Hàng năm 
             Nông Sản Thành Công thu mua từ 100.000- 300.000 tấn nông sản của bà con đạt chuẩn an toàn thực phẩm,
             với chủ trương đồng hành với các khu nông sản sạch thúc đẩy nghành Nông Sản trong nước phát triển.
            </p>           
          </div>
          <span className="image">
            <img src="images/pic1.jpg"  />
          </span>
        </div>
      </section>
      {/* First Section */}
      <section id="first" className="main special">
        <header className="major">
          <h2>Thông tin sản phẩm</h2>
        </header>
        <ul className="features">
          <li>
            <span className="vegetable" />
            <img src="images/vegetable.png"  />
              <a href="vegetalbe.html" className="button">
                Rau sạch
              </a>
            <p>
               Nguồn rau quả được cung cấp bởi các khu vườn đạt chuẩn
               an toàn thực phẩm tại Đà Lạt.
            </p>
          </li>
          <li>
            <span className="fruit" />
            <img src="images/fruit.png"  />
              <a href="fruit.html" className="button">
                Trái cây
              </a>
            <p>
               Nguồn trái cây đạt được cung cấp bởi các vựa trái cây đạt chuẩn
               an toàn thực phẩm tại khu vực Miệt vườn Lái Thiêu, Miệt vườn Cái Bè ....
            </p>
          </li>
          <li>
          <span className="rice" />
          <img src="images/rice.png"  />
              <a href="rice.html" className="button">
                Lương thực gạo
              </a>
             <p>
               Nguồn lương thực được lựa chọn tại hai Đồng Bằng lớn nhất nước ta, sàn lọc kỹ càng
               sánh ngang với những sản phẩm được xuất khẩu.
            </p>
          </li>
        </ul>
        
      </section>
      {/* Second Section */}
      <section id="second" className="main special">
        <header className="major">
          <h2>Ký kết hợp đồng</h2>
          <p>
            Dựa trên công nghệ BlockChain đảm bảo tính minh bạch
            <br />
            Truy xuất nguồn gốc sản phẩm được sản xuất qua các khâu, theo dõi lịch
            trình vận chuyển. Thanh toán ngay trên trang web.
          </p>
        </header>
        <ul className="statistics">
          <li className="style1">
            <span className="icon solid fa-globe" />
            <strong>15,120</strong> Số lượng tiếp cận
          </li>
          <li className="style2">
            <span className="icon solid  fa-edit" />
            <strong>8,192</strong> Ký kết với chúng tôi
          </li>
          <li className="style3">
            <span className="icon solid fa-signal" />
            <strong>98%</strong> Đánh giá tốt
          </li>
          <li className="style4">
            <span className="icon solid fa-sign-language" />
            <strong>60%</strong> Quay lại với chúng tôi
          </li>
          
        </ul>
        
        <footer className="major">
          <ul className="actions special">
            <li>
              <a href="capnhathd" className="button">
                 Cập nhật hợp đồng
              </a>
            </li>
          </ul>
        </footer>
      </section>
      {/* Get Started */}
      <section id="cta" className="main special">
        <header className="major">
          <h2>Cập nhật và truy xuất</h2>
          <p>
            Sau khi đăng ký với chúng tôi, các bạn sẽ có thể cập nhật thông tin và truy xuất quá trình 
            <br />
            đóng gói và vận chuyển đến các bạn với mã hợp đồng được cung cấp trong hợp đồng đã ký kết.
          </p>
        </header>
        <footer className="major">
          <ul className="actions special">
            <li>
              <a href="capnhat" className="button primary">
                Cập nhật 
              </a>
            </li>
            <li>
              <a href="truyxuat" className="button">
                Truy xuất
              </a>
            </li>
          </ul>
        </footer>
      </section>
    </div>
    {/* Footer */}
    <footer id="footer">
      
      <section>
        <h2>Nông sản Thành Công</h2>
        <dl className="alt">
          <dt>Address</dt>
          <dd>107 Đường Linh Trung - Thành Phố Thủ Đức</dd>
          <dt>Phone</dt>
          <dd>097821231</dd>
          <dt>Email</dt>
          <dd>
            <a href="#">nongsanthanhcong@gmmail.com</a>
          </dd>
        </dl>
        <ul className="icons">
          <li>
            <a href="#" className="icon brands fa-twitter alt">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-facebook-f alt">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-instagram alt">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-github alt">
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-dribbble alt">
              <span className="label">Dribbble</span>
            </a>
          </li>
        </ul>
      </section>
    </footer>

    <script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/jquery.dropotron.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>
  </div>
</>

        
      
      
        
    
    
  )
}

export default Home
