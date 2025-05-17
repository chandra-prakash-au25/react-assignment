import React from 'react';
import { FormFieldProps } from './types';

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  value,
  error,
  touched,
  type = 'text',
  options,
  placeholder,
  rows,
  className = '',
  onChange,
  onBlur
}) => {
  const baseInputClass = "w-full border border-gray-300 rounded-md px-3 py-2 bg-white";
  const inputClass = `${baseInputClass} ${className}`;

  const renderInput = () => {
    if (type === 'select') {
      return (
        <select name={name} value={value} onChange={onChange} onBlur={onBlur} className={inputClass}>
          <option value="">{placeholder || `Select ${label}`}</option>
          {options?.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      );
    }

    if (type === 'textarea') {
      return (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={inputClass}
          rows={rows || 3}
          placeholder={placeholder}
        />
      );
    }

    if (type === 'currency') {
      return (
        <div className="relative">
          <span className="absolute left-3 top-2">$</span>
          <input
            type="number"
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={`${inputClass} pl-7`}
            step="0.01"
          />
        </div>
      );
    }

    return (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={inputClass}
        placeholder={placeholder}
      />
    );
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} <span className={`${error&&"text-red-500"}`}>*</span>
      </label>
      {renderInput()}
      {touched && error && (
        <div className="text-red-500 text-sm mt-1">{error}</div>
      )}
    </div>
  );
};

export default FormField;