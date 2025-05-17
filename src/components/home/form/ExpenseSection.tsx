import React, { useState } from 'react';
import { FormikProps } from 'formik';
import { InvoiceData } from './types';
import SectionHeader from './SectionHeader';
import FormField from './FormField';
import { IoIosAdd } from "react-icons/io";


interface ExpenseSectionProps {
  formik: FormikProps<InvoiceData>}

const departmentOptions = [
  { value: 'Facilities', label: 'Facilities' },
  { value: 'IT', label: 'IT' },
  { value: 'HR', label: 'HR' }
];

const accountOptions = [
  { value: 'Maintenance', label: 'Maintenance' },
  { value: 'Supplies', label: 'Supplies' },
  { value: 'Services', label: 'Services' }
];

const locationOptions = [
  { value: 'Main Office', label: 'Main Office' },
  { value: 'Branch 1', label: 'Branch 1' },
  { value: 'Branch 2', label: 'Branch 2' }
];

const ExpenseSection: React.FC<ExpenseSectionProps> = ({ formik }) => {
  const { values, handleChange, handleBlur } = formik;
  const [currencyType, setCurrencyType] = useState<'dollar' | 'percentage'>('dollar');

  return (
    <div className="rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <SectionHeader title="Expense Details" />
        <div className="flex items-center gap-2">
                  <span className={`${currencyType=="dollar"&&"text-blue-400"}`}>$ 0.00 </span>/
                  <span className={`${currencyType=="percentage"&&"text-blue-400"}`}> $ 0.00</span>
          <div className="flex rounded-3xl overflow-hidden border border-gray-200 bg-[#e7eaef]">
            <button
              type="button"
              className={`px-3  text-sm font-medium ${currencyType === 'dollar' ? 'bg-blue-500 text-white' : 'bg-[#e7eaef] text-gray-700 hover:bg-gray-50'}`}
              onClick={() => setCurrencyType('dollar')}
            >
              $
            </button>
            <button
              type="button"
              className={`px-3  text-sm font-medium border-l ${currencyType === 'percentage' ? 'bg-blue-500 text-white' : 'bg-[#e7eaef] text-gray-700 hover:bg-gray-50'}`}
              onClick={() => setCurrencyType('percentage')}
            >
              %
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Line Amount"
          name="expenses[0].lineAmount"
          value={values.expenses[0].lineAmount}
          type="currency"
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <FormField
          label="Department"
          name="expenses[0].department"
          value={values.expenses[0].department}
          type="select"
          options={departmentOptions}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <FormField
          label="Account"
          name="expenses[0].account"
          value={values.expenses[0].account}
          type="select"
          options={accountOptions}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <FormField
          label="Location"
          name="expenses[0].location"
          value={values.expenses[0].location}
          type="select"
          options={locationOptions}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <div className="col-span-2">
          <FormField
            label="Description"
            name="expenses[0].description"
            value={values.expenses[0].description}
            type="textarea"
            rows={2}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      </div>
      <div className="flex justify-end mt-4 ">
        <button
          type="button"
          className="flex text-sm items-center gap-1 text-gray-500 border px-2 py-1 rounded-md bg-white hover:bg-gray-100"
        >
          <IoIosAdd className='text-lg'/>
          Add Expense Coding
        </button>
      </div>
    </div>
  );
};

export default ExpenseSection;