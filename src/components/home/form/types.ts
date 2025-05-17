export interface ExpenseDetail {
    lineAmount: number;
    department: string;
    account: string;
    location: string;
    description: string;
}

export interface InvoiceData {
    vendor: string;
    purchaseOrderNumber: string;
    invoiceNumber: string;
    invoiceDate: string;
    totalAmount: number;
    paymentTerms: string;
    invoiceDueDate: string;
    glPostDate: string;
    invoiceDescription: string;
    expenses: ExpenseDetail[];
    comments: string;
}

export interface FormFieldProps {
    label: string;
    name: string;
    value: string | number;
    error?: string;
    touched?: boolean;
    type?: string;
    options?: Array<{ value: string; label: string }>;
    placeholder?: string;
    rows?: number;
    className?: string;
    onChange: (e: React.ChangeEvent<any>) => void;
    onBlur: (e: React.FocusEvent<any>) => void;
}