import React, { useState } from "react";
import ProfileLeftside from "../profile/profileLeftside";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from '@heroicons/react/24/solid';





const Favorites = () => {
    const [image, setImage] = useState("");
    const [imageCrop, setImageCrop] = useState("");
    const [src, setSrc] = useState(false);
    const [profile, setProfile] = useState([]);
    const [pview, setPview] = useState(false);

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
                <div className="profile_photo_container">
                    <h2 className="">Понравившиеся</h2>
                   <img src="" alt="" />
                   <h3>BMW M4 Coupe: A Two-Door</h3>
                   <p>23 000$</p>
               
                </div>
                
            </div>
        </div>

    )
}


export default Favorites;