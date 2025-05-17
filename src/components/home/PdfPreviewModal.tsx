import React from 'react';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';

interface PdfPreviewModalProps {
  file: File;
  onClose: () => void;
}

const PdfPreviewModal: React.FC<PdfPreviewModalProps> = ({ file, onClose }) => {
  // Create a URL for the file
  const fileUrl = URL.createObjectURL(file);

  return (
    <div className="fixed inset-0 bg-gray-50 bg-opacity-10 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">{file.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div className="flex justify-center h-[70vh]">
          <DocViewer
            documents={[{ uri: fileUrl }]}
            pluginRenderers={DocViewerRenderers}
            style={{ height: '100%', width: '100%', background: '#fff' }}
            config={{
              header: {
                disableHeader: true,
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PdfPreviewModal;