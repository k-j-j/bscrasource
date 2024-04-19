import './reset.css';
import './modal.css';
import './style.css';
import './hmenu.js';
import './modal.js';
//import $ from 'jquery';

function App() {
  return (
  <>

      <div className="modal_back"></div>
      <header id="header">
<h1><a href="#"><img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="logo"/></a></h1>
<div id="menu">
  <a href="#">FOM</a>
  <a href="#">STORE</a>
  <a href="#">단체주문</a>
  <button className="hm">
    <img src={`${process.env.PUBLIC_URL}/img/btn_menu.png`} alt="ham_btn"/>
  </button>
</div>
</header>
<nav className="menu">
  <div className="head">
    <button className="cross">&#735;</button>
    <ul className="cf">
      <li className="fr"><a href="#">LOGIN</a></li>
      <li><a href="#">JOIN</a></li>    
      <li className="search">
        <a href="#"><img src={`${process.env.PUBLIC_URL}/img/btn_search.png`} alt="search"/></a>       
      </li>  
    </ul>
  </div>
 <ul className="mm">
  <li><a href="#">BRAND<img src={`${process.env.PUBLIC_URL}/img/ico_nav.png`} alt="menu"/></a>
    <ul className="sub">
      <li><a href="#">MENU1</a></li>
      <li><a href="#">MENU2</a></li>
    </ul>
  </li>
  <li><a href="#">PRODUCT<img src={`${process.env.PUBLIC_URL}/img/ico_nav.png`} alt="menu"/></a>
    <ul className="sub">
      <li><a href="#">MENU1</a></li>
      <li><a href="#">MENU2</a></li>
    </ul>
  </li>
  <li><a href="#">STORE<img src={`${process.env.PUBLIC_URL}/img/ico_nav.png`} alt="menu"/></a>
    <ul className="sub">
      <li><a href="#">MENU1</a></li>
      <li><a href="#">MENU2</a></li>
    </ul>
  </li>
  <li><a href="#">EVENT<img src={`${process.env.PUBLIC_URL}/img/ico_nav.png`} alt="menu"/></a>
    <ul className="sub">
      <li><a href="#">MENU1</a></li>
      <li><a href="#">MENU2</a></li>
    </ul>
  </li>
  <li><a href="#">ABOUT<img src={`${process.env.PUBLIC_URL}/img/ico_nav.png`} alt="menu"/></a>
    <ul className="sub">
      <li><a href="#">MENU1</a></li>
      <li><a href="#">MENU2</a></li>
    </ul>
  </li>
 </ul>
</nav>
<div id="main">
  <a href="#"><img src={`${process.env.PUBLIC_URL}/img/banner.jpg`} alt="b"/></a>
</div>
<div id="slide">
  <ul className="cf">
      <li><img src={`${process.env.PUBLIC_URL}/img/b1.png`} alt="b1"/></li>
      <li><img src={`${process.env.PUBLIC_URL}/img/b2.png`} alt="b1"/></li>
      <li><img src={`${process.env.PUBLIC_URL}/img/b3.png`} alt="b1"/></li>
  </ul>
  <div id="roll">
      <a href="#" className="on"></a>
      <a href="#"></a>
      <a href="#"></a>
  </div>
</div>
<section id="list">
  <h3>BR EVENT</h3>
  <ul className="cf">
    <li>
      <a href="#">
      <img src={`${process.env.PUBLIC_URL}/img/list1.png`} alt="lst1"/>
        <span className="im"><img src={`${process.env.PUBLIC_URL}/img/stit_store.gif`} alt="sit_store"/></span>
        <span className="txt">해피오더 딜리버리로 간편하게 주문하세요!</span>
        <span className="txt1">상시진행</span>
      </a>
    </li>
    <li>
      <a href="#">
      <img src={`${process.env.PUBLIC_URL}/img/list2.png`} alt="lst1"/>
        <span className="im"><img src={`${process.env.PUBLIC_URL}/img/stit_store.gif`} alt="sit_store"/></span>
        <span className="txt">해피오더 딜리버리로 간편하게 주문하세요!</span>
        <span className="txt1">상시진행</span>
      </a>
    </li>
  </ul>
        <div id="roll2">
          <a href="#" className="active"></a>
          <a href="#"></a>
          <a href="#"></a>
        </div>
</section>

<section id="list1">
  <h3>BR MENU</h3>
  <div className="ban">
  <img src={`${process.env.PUBLIC_URL}/img/listgroup.png`} alt="ban"/>
  </div>
</section>

<section id="store">
  <h3>BR STORE</h3>
  <img src={`${process.env.PUBLIC_URL}/img/fban.jpg`} alt="fban"/>
</section>   

<section id="deli">
  <h3>HAPPY ORDER & DELIVERY</h3>
  <img src={`${process.env.PUBLIC_URL}/img/deli.jpg`} alt="fban"/>
</section>

<section id="sns">
  <h3>SNS</h3>
  <ul>
    <li><a href="#"><img src={`${process.env.PUBLIC_URL}/img/f.png`} alt="f"/></a></li>
    <li><a href="#"><img src={`${process.env.PUBLIC_URL}/img/t.png`} alt="f"/></a></li>
    <li><a href="#"><img src={`${process.env.PUBLIC_URL}/img/b.png`} alt="f"/></a></li>
    <li><a href="#"><img src={`${process.env.PUBLIC_URL}/img/u.png`} alt="f"/></a></li>
    <li><a href="#"><img src={`${process.env.PUBLIC_URL}/img/i.png`} alt="f"/></a></li>
  </ul> 
</section> 

<h4 className="line">
  <a href="#"><img src={`${process.env.PUBLIC_URL}/img/tt.png`} alt="tt"/></a>
</h4>

<div id="listimg">
  <ul className="cf">
     <li><a href="#"><img src={`${process.env.PUBLIC_URL}/img/ff.png`} alt="flist"/></a></li>
     <li><a href="#"><img src={`${process.env.PUBLIC_URL}/img/ff.png`} alt="flist"/></a></li>
     <li><a href="#"><img src={`${process.env.PUBLIC_URL}/img/ff.png`} alt="flist"/></a></li>
     <li><a href="#"><img src={`${process.env.PUBLIC_URL}/img/ff.png`} alt="flist"/></a></li>
  </ul>
</div>
<footer id="footer">
  <nav id="fmenu">
    <ul className="cf">
        <li><a href="#">채용문의</a></li>
        <li><a href="#">이용약관</a></li>
        <li><a href="#">윤리신고센터</a></li>
        <li><a href="#" className="pr">개인정보처리방침</a></li>
        <li><a href="#">영상정보처리기기운영관리방침</a></li>
        <li><a href="#">거래희망회사 사전등록</a></li>
    </ul>
  </nav>
  <div className="customer">
  <p className="center"><a href="#">고객센터</a></p>
  <p className="tel"><a href="#">080-222-1234</a></p>
</div>

<div className="site">
  <button type="button">FAMILY SITE</button>
  <ul>
          <li><a href="#">aaaa</a></li>
          <li><a href="#">bbbb</a></li>
          <li><a href="#">cccc</a></li>
          <li><a href="#">ddddd</a></li>
          <li><a href="#">eeeee</a></li>
  </ul>
</div>

<div className="info">
  <div className="foot cf">
    <p className="info1">사업자 등록번호 : 000-00-00000</p>
    <p className="info2">주연코리아(주) 대표이사 김준수</p>
      <address>서울특별시 서초구 남부순환로 1234</address>	
    <p className="info3">개인정보관리책임자 : 이지현</p>   
  </div>
</div>

</footer>
  </>
  );
}

export default App;
