import React from 'react';
import { FormikProps } from 'formik';
import { dummyData } from './form/constants';
import { InvoiceData } from './form/types';
import VendorSection from './form/VendorSection';
import InvoiceSection from './form/InvoiceSection';
import ExpenseSection from './form/ExpenseSection';
import CommentsSection from './form/CommentsSection';

interface FormContentProps {
  formik: FormikProps<InvoiceData>;
}

const FormContent: React.FC<FormContentProps> = ({ formik }) => {
  const handlePopulateDummyData = () => {
    formik.setValues(dummyData);
  };

  return (
    <div className="space-y-6">
      <VendorSection formik={formik} />
      <InvoiceSection formik={formik} />
      <ExpenseSection formik={formik} />
      <CommentsSection formik={formik} />
      <div className="flex justify-end mb-4">
        <button
          type="button"
          onClick={handlePopulateDummyData}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          Populate Dummy Data
        </button>
      </div>
    </div>
  );
};

export default FormContent;