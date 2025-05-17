import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
  const tabs = [
    { id: 'vendor', label: 'Vendor Details' },
    { id: 'invoice', label: 'Invoice Details' },
    { id: 'comments', label: 'Comments' }
  ];
interface HeaderProps {
  activeTab: 'vendor' | 'invoice' | 'comments';
  onTabChange: (tab: 'vendor' | 'invoice' | 'comments') => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    navigate('/login');
  };

  return (
        <div className="flex items-center justify-between h-16 px-8 bg-white shadow-sm">
          <div className="flex items-center space-x-4">
            <button
              className="flex items-center text-gray-600 hover:text-gray-800"
            >
              <span className="mr-2"><IoMdArrowBack/></span>
              <span className="font-medium">Create New Invoice</span>
            </button>
          </div>
         <div className="flex space-x-8 -mb-px">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`py-4 px-1 border-b-2 ${
            activeTab === tab.id
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
          onClick={() => onTabChange(tab.id as 'vendor' | 'invoice' | 'comments')}
        >
          {tab.label}
        </button>
      ))}
    </div>
          <div className="">
            <CiLogout className="text-gray-600 hover:text-gray-800 cursor-pointer h-6 w-6" onClick={handleLogout}/>
          </div>
        </div>


  );
};

export default Header;
