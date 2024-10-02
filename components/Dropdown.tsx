import { ReactNode, useState } from 'react';

interface DropdownProps {
  title: string;
  children: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border-b border-gray-700 rounded-md">
      <button
        className="w-full rounded-md text-left py-4 px-4 bg-gray-800 text-gray-300 font-semibold  transition duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && (
        <div className="px-4 py-2  bg-gary-800 text-gray-300 rounded-md">
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;