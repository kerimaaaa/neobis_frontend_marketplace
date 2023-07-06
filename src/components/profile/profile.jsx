import React, { useState } from "react";
import profile_icon from "../../images/profile_icon.svg";
import ProfileLeftside from "./profileLeftside";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { Dialog } from 'primereact/dialog';
import { Button } from "primereact/button"
import { InputText } from 'primereact/inputtext';
import Avatar from "react-avatar-edit";
import { useFormik } from "formik";
import SetNumber from "../setNumber/setNumber";



const Profile = () => {
    const [image, setImage] = useState("");
    const [imageCrop, setImageCrop] = useState("");
    const [src, setSrc] = useState(false);
    const [profile, setProfile] = useState([]);
    const [pview, setPview] = useState(false);
    const [openModal, setOpenModal] = useState(false)

    const profileFinal = profile.map((item) => item.pview);

    const onSubmit = async (values, actions) => {
        console.log(values);
        console.log(actions);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
    }

    const {
        values,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: {

        },
        onSubmit,
    })
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
                            className="ArrowLeftIcon"
                            width={24}
                            height={24} /><span>Назад</span></Link>

                </div>
                <div className="profile_photo_container">
                    <h2 className="">Профиль </h2>
                    <img
                        src={profileFinal.length ? profileFinal : profile_icon}
                        alt="profile"
                        onClick={() => setImageCrop(true)}
                        className="ava_icon"
                    />
                    <p className="profile_photo_choose" onClick={() => setImageCrop(true)}> Выбрать фотографию </p>

                    <Dialog
                        visible={imageCrop}
                        header={() => {
                            <p htmlFor="">
                                Update Profile
                            </p>
                        }}
                        onHide={() => setImage(false)}
                        className="profile_dialog_container" >
                        <div className="avatar_container">

                            <div className="profile_avatar">
                                <Avatar
                                    width={300}
                                    height={200}
                                    onCrop={onCrop}
                                    onClose={onClose}
                                    src={src}
                                />
                                <div className="profile_ava_btn">
                                    <Button onClick={saveCropImage}
                                        label="save"
                                        icon="pi pi-check"
                                        className="ava_save_btn"
                                    />
                                </div>
                            </div>
                        </div>
                    </Dialog>
                    <InputText type="file"
                        accept="image/"
                        style={{ display: "none" }}
                        onChange={(e) => {
                            const file = e.target.files[0];
                            if (file && file.type.substring(0, 5) === "image") {
                                setImage(file)
                            } else {
                                setImage(null)
                            }
                        }} />
                </div>
                <div className="profile_full_info">
                    <form onSubmit={handleSubmit} autoComplete="off" className="announcement_description">

                        <input
                            value={values.firstname}
                            onChange={handleChange}
                            id="firstname"
                            type="text"
                            placeholder="Имя"
                            onBlur={handleBlur}
                            className="profile_input"
                        />
                        <input
                            id="lastname"
                            type="text"
                            placeholder="Фамилия"
                            value={values.lastname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="profile_input"
                        />
                        <input
                            id="birthdate"
                            type="text"
                            placeholder="Дата рождения"
                            value={values.birthdate}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="profile_input"
                        />

                        <input
                            id="phoneNumber"
                            type="text"
                            placeholder="Добавить номер"
                            value={values.phoneNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onClick={() => { setOpenModal(true) }}
                            className="profile_input"
                        />
                        {openModal && <SetNumber closeModal={setOpenModal} />}

                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="profile_input"
                        />
                        <button
                            disabled={isSubmitting}
                            type="submit"
                            className='profile_save_btn'
                        >Далее</button>
                    </form>
                </div>
            </div>
        </div>

    )
}


export default Profile;