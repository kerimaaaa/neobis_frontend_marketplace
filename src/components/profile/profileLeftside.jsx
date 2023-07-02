import React from "react";
import profile_icon from "../../images/profile_icon.svg";
import heart from "../../images/heart.svg";
import store from "../../images/store.svg";
import exit from "../../images/exit.svg";
import { Link } from "react-router-dom";
import '../profile/profileLeftside.css';
import './profile.css';
import arrowRight from "../../images/arrowRight.svg";







const ProfileLeftside = ({profileFinal}) => {


    return (
        <div className="pages_container">
            <div className="profile_leftside">
                <div className="profile_info">
                    <div className="profile_ava">
                        <img  src={ profileFinal.length ? profileFinal : profile_icon}
                        alt="profile" className="profile_ava_icon"  />
                    </div>
                    <div className="profile_username">
                        <h3>Kerimaaaa</h3>
                        <p>belovedsummer</p>
                    </div>
                </div>
                <div className="profile_link_container">
                    <Link to="/favorites" className="profile_pages_links">
                        <img src={heart} alt="heart" />
                        <p className="profile_pages_titles" >
                            Избранные </p>
                        <img className="arrowRightLiked" src={arrowRight} alt="arrowRight" />

                    </Link>
                    <Link to="/myproducts" className="profile_pages_links">
                        <img src={store} alt="store" />
                        <p className="profile_pages_titles" >
                            Мои товары  </p>
                        <img className="arrowRightBasket" src={arrowRight} alt="arrowRight" />
                    </Link>
                    <Link to="/" className="profile_pages_links exit" >
                        <img src={exit} alt="exit" />
                        <p className="profile_pages_titles ">
                            Выйти </p>
                        <img className="arrowRightExit" src={arrowRight} alt="arrowRight" />
                    </Link>

                </div>
            </div>
        </div>

    )
}

export default ProfileLeftside;