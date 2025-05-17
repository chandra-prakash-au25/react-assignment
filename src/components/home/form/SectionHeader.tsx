import React from 'react';
import { BiBuildings } from "react-icons/bi";
import { TbInvoice } from "react-icons/tb";
import { BiCommentDetail } from "react-icons/bi";


interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({  title }) => (
  <div className="flex items-center gap-2 mb-6">
        {title!=="Expense Details"&&<span className='h-10 w-10 rounded-full bg-[#e6f3fe] flex justify-center items-center mr-2'>
            {title === "Vendor Details" && <BiBuildings className='text-[#5495d1] text-lg' />}
            {title === "Invoice Details" && <TbInvoice className='text-[#5495d1] text-lg' />}
            {title === "Comments" && <BiCommentDetail className='text-[#5495d1] text-lg' />}
        </span>}
    <h2 className="text-xl font-semibold">{title}</h2>
  </div>
);

export default SectionHeader;