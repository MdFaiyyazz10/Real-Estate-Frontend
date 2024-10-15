import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/component/AdminNav.css";

function Adminnav() {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <section>
        <div className="admin-nav">
          <div className="admin-nav_logo">
            <Link to="/admin" className="brand">
              {" "}
              <img src="/img/Logo-1.png" alt="logo" />{" "}
              <span>Wisdom Technosoft</span>{" "}
            </Link>
          </div>
          {/* <div>
                    <div className="textfield-searchbox">
                        <input className="textfield-searchbox-input" type="text" placeholder="Search" />
                        <div className="textfield-searchbox-glass">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                </div> */}
          <div className="r">
            <div className="btn btn-login-style" role="button">
              Logout
            </div>
            <div className="toggler" onClick={toggle}>
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
        <div
          className={`search-panel ${isActive ? "active" : ""}`}
          id="searchpanel"
        >
          <div className="search-panel-head">
            <div className="toggler" onClick={toggle}>
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
          <div className="admin-nav_list">
            <ul>
              <Link to="/admin" className="current">
                <li>
                  {" "}
                  <i className="fa-solid fa-house"></i> Home{" "}
                </li>
              </Link>

              <Link to="/admin/property">
                <li>
                  {" "}
                  <i className="fa-solid fa-house-user"></i> Create Property{" "}
                </li>
              </Link>

              <Link to="/admin/allproperty">
                <li>
                  {" "}
                  <i className="fa-solid fa-building-user"></i> All Property{" "}
                </li>
              </Link>

              <Link to="/admin/soldproperty">
                <li>
                  {" "}
                  <i className="fa-solid fa-building-user"></i> Sold Property{" "}
                </li>
              </Link>

              <Link
                to="/"
                className="sidebar-link collapsed has-dropdown"
                data-bs-toggle="collapse"
                data-bs-target="#auth04"
                aria-expanded="false"
                aria-controls="auth04"
              >
                <li>
                  {" "}
                  <i class="fa-regular fa-image"></i> Gallery{" "}
                </li>
              </Link>

              <ul
                id="auth04"
                className="sidebar-dropdown list-unstyled collapse dropditem-o1"
                data-bs-parent="#sidebar"
              >
                <li className="sidebar-item">
                  <Link to="add-gallery" className="sidebar-link">
                    Add Gallery
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to="gallery" className="sidebar-link">
                    Manage Gallery
                  </Link>
                </li>
              </ul>
            </ul>
            <ul>
              <Link to="#">
                <li>
                  {" "}
                  <i className="fa-solid fa-circle-info"></i> Support{" "}
                </li>
              </Link>
            </ul>
          </div>
          <div className="admin-nav_footer">
            <div className="btn btn-login-style-red" role="button">
              Logout
            </div>
            <button className="settings">
              <i className="fa-solid fa-gear"></i>
            </button>
          </div>
        </div>
        <div className="bg-gradient"></div>
      </section>
    </>
  );
}

export default Adminnav;
