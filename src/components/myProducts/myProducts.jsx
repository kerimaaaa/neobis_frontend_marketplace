import React, { useState, useEffect } from "react";
import ProfileLeftside from "../profile/profileLeftside";
import { Link, useParams } from "react-router-dom";
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import car from '../../images/car.svg'
import './myProducts.css';
import '../profile/profile.css'
import red_heart from '../../images/red_heart.svg'
import { instanceProduct } from "../../API/api";

const MyProducts = () => {
    const [image, setImage] = useState("");
    const [imageCrop, setImageCrop] = useState("");
    const [src, setSrc] = useState(false);
    const [profile, setProfile] = useState([]);
    const [pview, setPview] = useState(false);
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const profileFinal = profile.map((item) => item.pview);

    const onClose = () => {
        setPview(null);
    };

    const onCrop = (view) => {
        setPview(view);
    }
    const saveCropImage = () => {
        setProfile([...profile, { pview }]);
        setImageCrop(false);
    };



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
        <div className="pages_container">
            <div>
                <ProfileLeftside profileFinal={profileFinal} />
            </div>
            <div className="profile">
                <div className="profile_header">
                    <Link to="/mainpage" className="profile_arrow_left">
                        <ArrowLeftIcon
                            className=""
                            width={24}
                            height={24} /><span>Назад</span></Link>

                </div>
                <h2 className="products_header">Мои товары</h2>
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


export default MyProducts;