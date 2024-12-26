import React, { ReactNode } from 'react';

import { Field, ErrorMessage, FieldProps } from 'formik';

interface InputFieldProps {
  name: string;
  label: string;
  value?: string;
  placeholder: string;
  type?: string;
  isDate?: boolean;
  children?: ReactNode;
  required?: boolean;
  disabled?: boolean;
  errorMessage?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  value,
  placeholder,
  type = 'text',
  isDate,
  children,
  disabled,
  errorMessage,
  required = false,
}) => {
  const renderInput = ({ field, meta }: FieldProps) => {
    const hasError = (meta.touched && meta.error) || !!errorMessage;

    return (
      <>
        {value && (
          <input {...field} id={name} type={type} placeholder={placeholder} className={hasError ? 'error' : ''} disabled={disabled} value={value} />
        )}
        {!value && <input {...field} id={name} type={type} placeholder={placeholder} className={hasError ? 'error' : ''} disabled={disabled} />}
        {/* {errorMessage ? (
          <p className='txt_error'>{errorMessage}</p>
        ) : ( */}
        <ErrorMessage name={name}>{(msg) => <p className='txt_error'>{errorMessage ?? msg}</p>}</ErrorMessage>
        {/* )} */}
        {children}
      </>
    );
  };

  const inputAreaClassName = `input_area ${children ? 'input_btn' : ''} ${isDate ? 'type_date' : ''}`;

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
