import { useField, useFormikContext } from "formik";
import '../style/style.css';
import './customInput.css'

const CustomInput = ({ label,...props  }) => {
  const [field, meta] = useField(props);
  

  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input_error" : "input"}
      />
      {meta.touched && meta.error && <div className="input_error_text">{meta.error}</div>}
    </>
  );
};
export default CustomInput;