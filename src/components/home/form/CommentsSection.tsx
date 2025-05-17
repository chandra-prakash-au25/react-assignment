import React from 'react';
import { FormikProps } from 'formik';
import { InvoiceData } from './types';
import SectionHeader from './SectionHeader';
import FormField from './FormField';


interface CommentsSectionProps {
  formik: FormikProps<InvoiceData>;
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ formik }) => {
  const { values, handleChange, handleBlur } = formik;

  return (
    <div className="rounded-lg p-6 shadow-sm ">
      <SectionHeader title="Comments" />
      <FormField
        label="Comments"
        name="comments"
        value={values.comments}
        type="textarea"
        rows={4}
        placeholder="Add a comment you can refer to for this invoice"
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default CommentsSection;