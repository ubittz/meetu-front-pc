import React, { ReactNode } from 'react';

import { Field, ErrorMessage, FieldProps } from 'formik';

interface InputFieldProps {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  additionalClassName?: 'type_date' | 'type_srch';
  additionalElement?: ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({ name, label, placeholder, type = 'text', additionalClassName, additionalElement }) => {
  const renderInput = ({ field, meta }: FieldProps) => {
    const hasError = meta.touched && meta.error;

    return (
      <>
        <input {...field} id={name} type={type} placeholder={placeholder} className={hasError ? 'error' : ''} />
        <ErrorMessage name={name}>{(msg) => <p className='txt_error'>{msg}</p>}</ErrorMessage>
        {additionalElement}
      </>
    );
  };

  const inputAreaClassName = `input_area ${additionalClassName ? additionalClassName : ''}`;

  return (
    <div className={inputAreaClassName}>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>{renderInput}</Field>
    </div>
  );
};

export default React.memo(InputField);
