import React, { ReactNode } from 'react';

import { Field, ErrorMessage, FieldProps } from 'formik';

interface InputFieldProps {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  isDate?: boolean;
  children?: ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({ name, label, placeholder, type = 'text', isDate, children }) => {
  const renderInput = ({ field, meta }: FieldProps) => {
    const hasError = meta.touched && meta.error;

    return (
      <>
        <input {...field} id={name} type={type} placeholder={placeholder} className={hasError ? 'error' : ''} />
        <ErrorMessage name={name}>{(msg) => <p className='txt_error'>{msg}</p>}</ErrorMessage>
        {children}
      </>
    );
  };

  const inputAreaClassName = `input_area ${children ? 'input_btn' : ''} ${isDate ? 'type_date' : ''}`;

  return (
    <div className={inputAreaClassName}>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>{renderInput}</Field>
    </div>
  );
};

export default React.memo(InputField);
