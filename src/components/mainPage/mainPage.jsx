import React, { useState, useEffect } from "react";
import profile_icon from "../../images/profile_icon.svg";
import logo from '../../images/logo.svg';
import './mainPage.css';
import { Link, useParams } from "react-router-dom";
import red_heart from '../../images/red_heart.svg'
import { instanceProduct } from "../../API/api";
import Announcement from "./announcement";


const MainPage = ({ profileFinal }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [openModal, setOpenModal] = useState(false)
    useEffect(() => {
        // Fetch meal data based on meal ID from the API using Axios
        const getProduct = async () => {
            instanceProduct.get(`product/${id}`)
                .then(response => setProduct(response.data.products[0]))
                .catch(error => console.log(error));
        };
        getProduct();
    }, [id]);

    return (
        <div className="mainpage_container">
            <div className="mainpage_head_container">
                <div className="mainpage_logo_container">
                    <img className="mainpage_logo" src={logo} alt="logo" />
                    <h1 className="mainpage_title">MOBI MARKET</h1>
                </div>
                <div className="mainpage_info">
                    <div className="mainpage_btn_contain">
                        <button
                            onClick={() => { setOpenModal(true) }}
                            className="mainpage_btn">Подать объявление
                            </button>
                            {openModal && <Announcement closeModal={setOpenModal} />}

                    </div>

                    <div className="mainpage_username">

                        <h3 className="mainpage_user">Kerimaaaa</h3>
                        <p className="mainpage_nickname">belovedsummer</p>

                    </div>
                    <div className="mainpage_ava">
                        <img src={profileFinal ? profileFinal : profile_icon}
                            alt="profile" className="profile_ava_icon" />
                    </div>
                </div>

            </div>
            <div className="mainpage_products">
                <>
                    {product ?
                        (
                            <div className="products_container">
                                <div className="products_card">
                                    <img src={product.photo} alt="car" />
                                    <h3 className="products_title">{product.name}</h3>
                                    <p className="products_price"> {product.price}</p>
                                    <div className="products_likes">
                                        <img className="red_heart" src={red_heart} alt="red_heart" />
                                        <span className="number_of_likes">100</span>
                                    </div>

                                </div>
                            </div>
                        ) : (
                            <p className="products_empty"> Empty </p>
                        )}
                </>
            </div>
        </div>
    )
}


export default MainPage;