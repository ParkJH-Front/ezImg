import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "../css/nav.css";
import Main from "./main";
import logo from "../img/logo_nukki.png";
import { useNavigate } from "react-router-dom";

function Nav() {
  /** 사용자로부터 받는 키워드 */
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const onChange = (event) => setKeyword(event.target.value);
  const onSubmit = (event) => {
    event.preventDafault();
    if (keyword === "") {
      // 동민이는 바보다
      return;
    } else {
      navigate(`/main${keyword}`);
      setKeyword("");
      // 동민이는 멍충이다
    }
  };

  return (
    <nav className="background_nav">
      {/* 로고 => 메인으로 가기 */}
      <section>
        <a href="#">
          <img className="logo_nav" src={logo}></img>
        </a>
      </section>
      {/* 검색기능 */}
      <section className="search_layout">
        {/* <form onSubmit={onSubmit}> */}
        <form onSubmit={onSubmit}>
          <input
            className="search_input"
            onChange={onChange}
            type="text"
            placeholder="    이미지 검색"
          ></input>
          <button className="search_btn">search</button>
        </form>
      </section>
      {/* 로그인기능 */}
      <section>
        <form>
          <button className="login_btn">login</button>
        </form>
      </section>
    </nav>
  );
}

export default Nav;