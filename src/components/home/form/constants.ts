import { InvoiceData } from "./types";

export const dummyData: InvoiceData = {
    vendor: 'A-1 Exterminators',
    purchaseOrderNumber: 'PO-2024-001',
    invoiceNumber: 'INV-2024-001',
    invoiceDate: '2024-01-20',
    totalAmount: 1500.00,
    paymentTerms: 'net30',
    invoiceDueDate: '2024-02-19',
    glPostDate: '2024-01-20',
    invoiceDescription: 'Monthly pest control service for main office building',
    expenses: [{
        lineAmount: 1500.00,
        department: 'Facilities',
        account: 'Maintenance',
        location: 'Main Office',
        description: 'Pest control service - January 2024'
    }],
    comments: 'Regular monthly service - all areas treated as per contract'
};