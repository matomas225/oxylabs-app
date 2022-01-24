import { css } from '@emotion/react';
import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { fontSize } from '../../Configs/Fonts';

const styles = {
  inputWrap: css`
    position: relative;
    margin-bottom: 30px;
  `,
  input: css`
    width: calc(100% - 50px);
    font-size: ${fontSize[16]};
    padding: 20px 0px 20px 50px;
    border-radius: 5px;
    border: none;
  `,
  fieldError: css`
    color: #ff0000;
    font-weight: 500;
    position: absolute;
    bottom: -25px;
    left: 0px;
  `,
  icon: css`
    position: absolute;
    bottom: 20px;
    width: 18px;
    left: 20px;
  `,
};

interface FormInputProps {
  register: UseFormRegister<FieldValues>;
  errors: {
    [x: string]: {
      type: string;
    };
  };
  placeholder: string;
  id: string;
  type?: string;
  icon: string;
}

function FormInput({
  register,
  errors,
  placeholder,
  id,
  type,
  icon,
}: FormInputProps) {
  return (
    <div css={styles.inputWrap}>
      <input
        css={styles.input}
        placeholder={placeholder}
        id={id}
        {...register(id, { required: true })}
        type={type ? `${type}` : 'text'}
      />
      <img css={styles.icon} src={icon} alt={icon} />
      {errors[id] && errors[id].type === 'required' && (
        <span css={styles.fieldError}>{placeholder} Is Required</span>
      )}
    </div>
  );
}

export default FormInput;
