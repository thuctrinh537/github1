import React from "react"
import next from "next"


export default function capnhathd(){
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
    {/* Main */}
    <div id="main"></div>
    
    
    </div>
</>
)
}

