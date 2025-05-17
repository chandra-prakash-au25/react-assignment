import React from 'react';
import { FormikProps } from 'formik';
import { InvoiceData } from './types';
import SectionHeader from './SectionHeader';
import FormField from './FormField';


interface InvoiceSectionProps {
  formik: FormikProps<InvoiceData>;
}

const paymentTermsOptions = [
  { value: 'net30', label: 'Net 30' },
  { value: 'net60', label: 'Net 60' }
];

const InvoiceSection: React.FC<InvoiceSectionProps> = ({ formik }) => {
  const { values, errors, touched, handleChange, handleBlur } = formik;

  return (
    <div className="rounded-lg p-6 shadow-sm">
          <SectionHeader title="Invoice Details" />
          <div className=''>
          <h2 className="text-lg font-semibold py-4">General Information</h2>

          <FormField
          label="Purchase Order Number"
          name="purchaseOrderNumber"
          value={values.purchaseOrderNumber}
          error={errors.purchaseOrderNumber}
          touched={touched.purchaseOrderNumber}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        </div>
      <h2 className="text-lg font-semibold py-5">Invoice Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        

        <FormField
          label="Invoice Number"
          name="invoiceNumber"
          value={values.invoiceNumber}
          error={errors.invoiceNumber}
          touched={touched.invoiceNumber}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <FormField
          label="Invoice Date"
          name="invoiceDate"
          value={values.invoiceDate}
          error={errors.invoiceDate}
          touched={touched.invoiceDate}
          type="date"
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <FormField
          label="Total Amount"
          name="totalAmount"
          value={values.totalAmount}
          error={errors.totalAmount}
          touched={touched.totalAmount}
          type="currency"
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <FormField
          label="Payment Terms"
          name="paymentTerms"
          value={values.paymentTerms}
          error={errors.paymentTerms}
          touched={touched.paymentTerms}
          type="select"
          options={paymentTermsOptions}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <FormField
          label="Invoice Due Date"
          name="invoiceDueDate"
          value={values.invoiceDueDate}
          error={errors.invoiceDueDate}
          touched={touched.invoiceDueDate}
          type="date"
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <FormField
          label="GL Post Date"
          name="glPostDate"
          value={values.glPostDate}
          error={errors.glPostDate}
          touched={touched.glPostDate}
          type="date"
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <div className="col-span-2">
          <FormField
            label="Invoice Description"
            name="invoiceDescription"
            value={values.invoiceDescription}
            error={errors.invoiceDescription}
            touched={touched.invoiceDescription}
            type="textarea"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceSection;