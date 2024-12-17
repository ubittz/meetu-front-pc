import React, { ReactNode } from 'react';

import { Field, ErrorMessage, FieldProps } from 'formik';

interface InputFieldProps {
  name: string;
  label: string;
  textfieldHidden?: boolean;
  placeholder: string;
  type?: string;
  required?: boolean;
  additionalClassName?: 'type_date' | 'type_srch' | 'type_02';
  additionalElement?: ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  placeholder,
  textfieldHidden = false,
  type = 'text',
  required = false,
  additionalClassName,
  additionalElement,
}) => {
  const renderInput = ({ field, meta }: FieldProps) => {
    const hasError = meta.touched && meta.error;

    return (
      <>
        {!textfieldHidden && <input {...field} id={name} type={type} placeholder={placeholder} className={hasError ? 'error' : ''} />}
        <ErrorMessage name={name}>{(msg) => <p className='txt_error'>{msg}</p>}</ErrorMessage>
        {additionalElement}
      </>
    );
  };

  const inputAreaClassName = `input_area ${additionalClassName ? additionalClassName : ''}`;

  return (
    <div className={inputAreaClassName}>
      <label htmlFor={name}>
        {label}
        {required && <strong className='required'>*</strong>}
      </label>
      <Field name={name}>{renderInput}</Field>
    </div>
  );
};

export default React.memo(InputField);
