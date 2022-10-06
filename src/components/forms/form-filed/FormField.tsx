import React from 'react'
import { useFormContext } from 'react-hook-form'
import './FormField.scss'

interface FormFieldProps {
  name: string,
  label?: string,
  placeholder?: string;
  width?: string
}

const FormField: React.FC<FormFieldProps> = ({name, label, placeholder = '', width = 'auto'} ) => {
  const {register, formState: {errors}} = useFormContext()

  return (
    <div className="form-filed" style={{width}}>
      {label && <label className="form-filed__label">{label}</label>}
      <input 
        className="form-filed__input"
        placeholder={placeholder}
        {...register(name)}
      />
      {!!errors[name]?.message && <p className="form-filed__error">{errors[name]?.message as string}</p>}
    </div>
  )
}

export default FormField