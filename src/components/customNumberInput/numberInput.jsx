import { useField} from "formik";
import '../style/style.css';
import './numberInput.css';



const NumberInput = ({ label,...props  }) => {
  const [field, meta] = useField(props);
  

  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input_error" : "number_input"}
      />
      {meta.touched && meta.error && <div className="input_error_text">{meta.error}</div>}
    </>
  );
};
export default NumberInput;