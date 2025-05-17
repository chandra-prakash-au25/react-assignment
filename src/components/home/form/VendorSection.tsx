import React from 'react';
import { FormikProps } from 'formik';
import { InvoiceData } from './types';
import SectionHeader from './SectionHeader';
import FormField from './FormField';
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";


interface VendorSectionProps {
  formik: FormikProps<InvoiceData>;
}

const vendorOptions = [
  { value: 'A-1 Exterminators', label: 'A-1 Exterminators' },
  { value: 'vendor2', label: 'Vendor 2' }
];

const VendorSection: React.FC<VendorSectionProps> = ({ formik }) => {
    const { values, errors, touched, handleChange, handleBlur } = formik;
    const [showVendorDetails, setShowVendorDetails] = React.useState(false);
    const handleVendorDetailToggle = () => {
      setShowVendorDetails(!showVendorDetails);
    };

  return (
    <div className="rounded-lg p-6 shadow-sm">
      <SectionHeader title="Vendor Details" />
      <div className="space-y-4">
        <FormField
          label="Vendor Information"
          name="vendor"
          value={values.vendor}
          error={errors.vendor}
          touched={touched.vendor}
          type="select"
          options={vendorOptions}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        </div>
          <div className='w-full flex flex-col  justify-center py-4'>
              <p onClick={handleVendorDetailToggle} className='w-full text-center text-blue-600 flex justify-center items-center gap-2 text-xs' >
                  {showVendorDetails ? <FaChevronUp /> : <FaChevronDown />}
                  View Vendor Details
              </p>
              {showVendorDetails && (
              <div className="w-full  mt-4 p-4 bg-white rounded-md">
                <div className="space-y-3">
                  <div>
                    <span className="font-medium">Vendor Name:</span>
                    <span className="ml-2">{values.vendor}</span>
                  </div>
                  <div>
                    <span className="font-medium">Contact Information:</span>
                    <span className="ml-2">123-456-7890</span>
                  </div>
                  <div>
                    <span className="font-medium">Address:</span>
                    <span className="ml-2">123 Business Street, Suite 100</span>
                  </div>
                  <div>
                    <span className="font-medium">Payment Terms:</span>
                    <span className="ml-2">Net 30</span>
                  </div>
                </div>
              </div>
            )}
          
        </div>
          
    </div>
  );
};

export default VendorSection;