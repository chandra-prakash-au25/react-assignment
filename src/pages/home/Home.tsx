import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import PdfUploader from '../../components/home/PdfUploader';
import Header from '../../components/home/Header';
import FormContent from '../../components/home/FormContent';

interface InvoiceData {
  vendor: string;
  purchaseOrderNumber: string;
  invoiceNumber: string;
  invoiceDate: string;
  totalAmount: number;
  paymentTerms: string;
  invoiceDueDate: string;
  glPostDate: string;
  invoiceDescription: string;
  expenses: Array<{
    lineAmount: number;
    department: string;
    account: string;
    location: string;
    description: string;
  }>;
  comments: string;
}

const validationSchema = Yup.object({
  vendor: Yup.string().required('Vendor is required'),
  purchaseOrderNumber: Yup.string().required('Purchase Order Number is required'),
  invoiceNumber: Yup.string().required('Invoice Number is required'),
  invoiceDate: Yup.string().required('Invoice Date is required'),
  totalAmount: Yup.number().required('Total Amount is required').min(0, 'Amount must be positive'),
  paymentTerms: Yup.string().required('Payment Terms are required'),
  invoiceDueDate: Yup.string().required('Invoice Due Date is required'),
  glPostDate: Yup.string().required('GL Post Date is required'),
  invoiceDescription: Yup.string().required('Invoice Description is required'),
  expenses: Yup.array().of(
    Yup.object({
      lineAmount: Yup.number().required('Line Amount is required').min(0, 'Amount must be positive'),
      department: Yup.string().required('Department is required'),
      account: Yup.string().required('Account is required'),
      location: Yup.string().required('Location is required'),
      description: Yup.string().required('Description is required')
    })
  )
});

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vendor' | 'invoice' | 'comments'>('vendor');
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  // Load initial values from localStorage or use default values
  const getInitialValues = (): InvoiceData => {
    const savedData = localStorage.getItem('invoiceData');
    if (savedData) {
      return JSON.parse(savedData);
    }
    return {
      vendor: '',
      purchaseOrderNumber: '',
      invoiceNumber: '',
      invoiceDate: '',
      totalAmount: 0,
      paymentTerms: '',
      invoiceDueDate: '',
      glPostDate: '',
      invoiceDescription: '',
      expenses: [{
        lineAmount: 0,
        department: '',
        account: '',
        location: '',
        description: ''
      }],
      comments: ''
    };
  };

  const handleSubmit = (values: InvoiceData) => {
    localStorage.setItem('invoiceData', JSON.stringify(values));
    toast.success('Form submitted successfully!');
  };



  return (
    <div className="max-h-screen bg-[#f6f6f6]">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="container mx-auto px-4 pt-8 max-h-[90vh] overflow-y-auto bg-[#f6f6f6]">
        <div className="flex flex-wrap -mx-4 w-full">
          <div className="w-full lg:w-[40%] px-4 mb-8 lg:mb-0">
            <PdfUploader
              onFileSelect={setPdfFile}
              file={pdfFile}
            />
          </div>

          <div className="w-full lg:w-[60%] px-4">
            <Formik
              initialValues={getInitialValues()}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form>
                  <FormContent
                    formik={formik}
                  />
                  
                  <div className="flex justify-between mt-8 sticky bottom-0 bg-white p-3 rounded">
                    <button
                      type="button"
                      className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                      onClick={() => {
                        localStorage.setItem('invoiceData', JSON.stringify(formik.values));
                        toast.success('Draft saved successfully!');
                      }}
                    >
                      Save as Draft
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                      Submit & New
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
