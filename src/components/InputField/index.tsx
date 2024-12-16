import React from 'react';
import { Field, ErrorMessage, FieldProps, FormikHelpers } from 'formik';

interface InputFieldProps {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  isDate?: boolean;
  buttonText?: string;
  onButtonClick?: (value: string, setFieldError: FormikHelpers<any>['setFieldError']) => void;
}

const InputField: React.FC<InputFieldProps> = ({ name, label, placeholder, type = 'text', isDate, buttonText, onButtonClick }) => {
  const renderInput = ({ field, meta, form }: FieldProps) => {
    const hasError = meta.touched && meta.error;

    return (
      <>
        <input {...field} id={name} type={type} placeholder={placeholder} className={hasError ? 'error' : ''} />
        <ErrorMessage name={name}>{(msg) => <p className='txt_error'>{msg}</p>}</ErrorMessage>
        {buttonText && onButtonClick && (
          <button type='button' className='btn' onClick={() => onButtonClick(field.value, form.setFieldError)}>
            {buttonText}
          </button>
        )}
      </>
    );
  };

  const inputAreaClassName = `input_area ${buttonText ? 'input_btn' : isDate ? 'type_date' : ''}`;

  return (
    <div className={inputAreaClassName}>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>{renderInput}</Field>
    </div>
  );
};

export default React.memo(InputField);
