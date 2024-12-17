import { Field, ErrorMessage, FieldProps, FormikHelpers, FormikValues } from 'formik';

interface ButtonInputFieldProps {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  isSearch?: boolean;
  buttonText: string;
  onButtonClick: (value: string, setFieldError: FormikHelpers<FormikValues>['setFieldError']) => void;
}

function ButtonInputField({ name, label, placeholder, type = 'text', isSearch = false, buttonText, onButtonClick }: ButtonInputFieldProps) {
  const renderInput = ({ field, meta, form }: FieldProps) => {
    const hasError = meta.touched && meta.error;

    return (
      <>
        <input {...field} id={name} type={type} placeholder={placeholder} className={hasError ? 'error' : ''} />
        <ErrorMessage name={name}>{(msg) => <p className='txt_error'>{msg}</p>}</ErrorMessage>
        <button type='button' className='btn' onClick={() => onButtonClick(field.value, form.setFieldError)}>
          {buttonText}
        </button>
      </>
    );
  };

  const inputAreaClassName = `input_area ${isSearch ? 'btn srch' : 'input_btn'}`;

  return (
    <div className={inputAreaClassName}>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>{renderInput}</Field>
    </div>
  );
}

export default ButtonInputField;
