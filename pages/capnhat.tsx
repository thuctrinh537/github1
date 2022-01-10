import React from "react";


export default function capnhat() {
  return (
    <>
    <title>Cập nhật thông tin</title>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="assets/css/main.css" />
   
    <noscript>
    &lt;link rel="stylesheet" href="assets/css/noscript.css" /&gt;
  </noscript>
  <div id="wrapper"/>
     <div className ="logo">
        <img  src="images/logo.png"  />
     </div>
   {/* Nav */}
   <nav id="nav">
      <ul>
        <li>
          <a href="http://localhost:3000/" className="active">
            Introduction
          </a>
        </li>
        <li>
          <a href="http://localhost:3000/">Thông tin sản phẩm</a>
        </li>
        <li>
          <a href="capnhathd">Tạo hợp đồng</a>
        </li>
        <li>
          <a href="http://localhost:3000/">Cập nhật và truy xuất thông tin sản phẩm</a>
        </li>
        <li>
        <a href="HopDong" className="button primary">
                Connect
         </a>
        </li>
      </ul>
    </nav>
    <div id="main"></div>
         
        <header>
      <div className="text-center text-black text-5xl font-bold ">Cập nhật thông tin lô hàng</div>
    </header>
    <main>
      <div className="container">
        <div className="register-form">
          <form method="post">
            <h1>Yêu cầu đã được ký hợp đồng</h1>
            <div className="input-box">
              <input type="text" placeholder="Nhập mã hợp đồng" />
            </div>
            <div className="input-box">
              <div className="col-6">
                <label htmlFor="ngaysinh">Ngày cập nhật</label>
                <br />
                <input type="date" id="ngaycapnhat" />
              </div>
              <div className="col-6">
                <label htmlFor="doituong">Đối tượng cập nhật</label>
                <br />
                <select id="doituong">
                  <option value=".....">.......</option>
                  <option value="Nhân viên kho">Nhân viên kho</option>
                  <option value="Nhân viên đóng gói">Nhân viên đóng gói</option>
                  <option value="Vận Chuyển">Vận chuyển</option>
                </select>
              </div>
              <div className="clear" />
            </div>
            <div className="input-box">
              <label htmlFor="trangthai">Trạng thái đơn hàng </label>
              <br />
              <textarea id="trangthai" defaultValue={""} />
            </div>
            <div className="btn-box">
              <button type="submit">Cập nhật</button>
            </div>
          </form>
        </div>
      </div>
    </main>

    <footer id="footers">
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
  </>
  
  )
}

