import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styles from '../css/component/AdminNav.module.css'; 
import axios from 'axios';

function Adminnav() {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation(); 

    const navigate = useNavigate()
    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:4000/api/v1/admin/logout', {}, { withCredentials: true });
            navigate('/admin/login'); // Redirect to the login page 
        } catch (error) {
            console.log(error)
            console.error("Logout failed:", error);
        }
    };

    const toggle = () => {
        setIsActive(!isActive);
    };

    const isHomeActive = location.pathname === '/admin/dashboard'; // Check if the current path is exactly "/admin/dashboard"

    return (
        <section>
            <div className={styles['admin-nav']}>
                <div className={styles['admin-nav_logo']}>
                    <NavLink to="/admin/dashboard" className={styles['nav-name']}>
                        <img src="/img/Logo-1.png" alt="logo" />
                        <span>Wisdom Technosoft</span>
                    </NavLink>
                </div>
                <div className={styles.r}>
                    <div className={styles.toggler} onClick={toggle}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
            </div>
            <div className={`${styles['search-panel']} ${isActive ? styles.active : ''}`} id="searchpanel">
                <div className={styles['search-panel-head']}>
                    <div className={styles.toggler} onClick={toggle}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
                <div className={styles['admin-nav_list']}>
                    <ul>
                        <NavLink 
                            to="/admin/dashboard" 
                            className={isHomeActive ? styles.activeLink : undefined}
                        >
                            <li><i className="fa-solid fa-house"></i> Home</li>
                        </NavLink>
                        
                        <NavLink to="/admin/property" className={({ isActive }) => isActive ? styles.activeLink : undefined}>
                            <li><i className="fa-solid fa-house-user"></i> Create Property</li>
                        </NavLink>

                        <NavLink to="/admin/allproperty" className={({ isActive }) => isActive ? styles.activeLink : undefined}>
                            <li><i className="fa-solid fa-building-user"></i> All Property</li>
                        </NavLink>

                        <NavLink to="/admin/soldproperty" className={({ isActive }) => isActive ? styles.activeLink : undefined}>
                            <li><i className="fa-solid fa-building-user"></i> Sold Property</li>
                        </NavLink>

                        <NavLink to="/admin/dashboard/gallery" 
                            className={({ isActive }) => `${styles['sidebar-Navlink']} ${isActive ? styles.activeLink : ''} collapsed has-dropdown`} 
                            data-bs-toggle="collapse" data-bs-target="#auth04" aria-expanded="false" aria-controls="auth04">
                            <li><i className="fa-solid fa-blog"></i> Blog </li>
                        </NavLink>

                        <ul id="auth04" className={`${styles['sidebar-dropdown']} list-unstyled collapse dropditem-o1`} data-bs-parent="#sidebar">
                            <li className={styles['sidebar-item']}>
                                <NavLink to="/admin/dashboard/add-blog" className={({ isActive }) => isActive ? styles.activeLink : undefined}>Add Blog</NavLink>
                            </li>
                            <li className={styles['sidebar-item']}>
                                <NavLink to="/admin/dashboard/manage-blog" className={({ isActive }) => isActive ? styles.activeLink : undefined}>Manage Blog</NavLink>
                            </li>
                        </ul>

                        <NavLink to="/admin/dashboard/gallery" 
                            className={({ isActive }) => `${styles['sidebar-Navlink']} ${isActive ? styles.activeLink : ''} collapsed has-dropdown`} 
                            data-bs-toggle="collapse" data-bs-target="#auth041" aria-expanded="false" aria-controls="auth04">
                            <li><i className="fa-regular fa-image"></i> Gallery</li>
                        </NavLink>

                        <ul id="auth041" className={`${styles['sidebar-dropdown']} list-unstyled collapse dropditem-o1`} data-bs-parent="#sidebar">
                            <li className={styles['sidebar-item']}>
                                <NavLink to="/admin/dashboard/add-gallery" className={({ isActive }) => isActive ? styles.activeLink : undefined}>Add Gallery</NavLink>
                            </li>
                            <li className={styles['sidebar-item']}>
                                <NavLink to="/admin/dashboard/manage-gallery" className={({ isActive }) => isActive ? styles.activeLink : undefined}>Manage Gallery</NavLink>
                            </li>
                        </ul>

                    </ul>
                    <ul>
                        <NavLink to="/support" className={({ isActive }) => isActive ? styles.activeLink : undefined}>
                            <li><i className="fa-solid fa-circle-info"></i> Support</li>
                        </NavLink>
                    </ul>
                </div>
                <div className={styles['admin-nav_footer']}>
                    <div className="btn btn-login-style-red"  onClick={handleLogout} role="button">Logout</div>
                    <button className={styles.settings}>
                        <i className="fa-solid fa-gear"></i>
                    </button>
                </div>
            </div>
            <div className={styles['bg-gradient']}></div>
        </section>
    );
}

export default Adminnav;
