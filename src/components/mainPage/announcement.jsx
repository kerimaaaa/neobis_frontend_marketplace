import React from "react";
import './announcement.css'
import add_photo from '../../images/add_photo.svg'
import { useFormik } from "formik";
import './mainPage.css'
const Announcement = ({closeModal}) => {
    
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
    return (


        <div className="announcement_container modal_window">
            <div className="announcement_card">
                <div className="announcement_photo">
                    <img src={add_photo} alt="" />
                </div>
                <div >
                    <form onSubmit={handleSubmit} autoComplete="off"
                     className="announcement_description">

                        <input
                            value={values.price}
                            onChange={handleChange}
                            id="price"
                            type="text"
                            placeholder="Цена"
                            onBlur={handleBlur}
                            className="announcement_input"
                        />
                        <input
                            id="title"
                            type="text"
                            placeholder="Название"
                            value={values.title}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="announcement_input"
                        />
                        <input
                            id="description"
                            type="text"
                            placeholder="Краткое описание"
                            value={values.description}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="announcement_input"
                        />

                        <input
                            id="description_full"
                            type="text"
                            placeholder="Полное описание"
                            value={values.descriptionfull}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="announcement_input"
                        />

                        <button 
                        onClick={() => closeModal(false)}
                        className="announcement_btn" 
                        disabled={isSubmitting} 
                        type="submit">
                            Добавить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Announcement;