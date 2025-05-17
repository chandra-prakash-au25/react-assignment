import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { IoCloudUploadOutline } from "react-icons/io5";
import { FcUpload } from "react-icons/fc";
import PdfPreviewModal from './PdfPreviewModal';

interface PdfUploaderProps {
  onFileSelect: (file: File) => void;
  file: File | null;
}

const PdfUploader: React.FC<PdfUploaderProps> = ({ onFileSelect, file }) => {
  const [showPreview, setShowPreview] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'application/pdf': ['.pdf']
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onFileSelect(acceptedFiles[0]);
      }
    }
  });

  return (
    <>
      <div className="w-full border border-gray-300 bg-white border-dashed rounded-lg py-[20%] px-[10%]">
        <div {...getRootProps()} className="text-center h-full w-full flex flex-col justify-center items-center">
          <input {...getInputProps()} />
          <h3 className="text-lg font-semibold mb-2">Upload Your Invoice</h3>
          <p className="text-gray-500 text-sm mb-4">To auto-populate fields and save time</p>
          <div className="mb-4 w-full flex justify-center cursor-pointer items-center">
            <IoCloudUploadOutline size={70} color="#3498db" />
          </div>
          
          {file ? (
            <div className="flex flex-col items-center">
              <p className="text-green-600 mb-2">{file.name}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPreview(true);
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Preview PDF
              </button>
            </div>
          ) : (
            <>
              <button
                type="button"
                className="flex gap2 items-center px-4 cursor-pointer py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Upload File <FcUpload/>
              </button>
              <p className='text-sm my-4'>
                <span className='text-blue-700 text-sm'>click to upload</span> or Drag and drop
              </p>
            </>
          )}
        </div>
      </div>

      {showPreview && file && (
        <PdfPreviewModal
          file={file}
          onClose={() => setShowPreview(false)}
        />
      )}
    </>
  );
};

export default PdfUploader;