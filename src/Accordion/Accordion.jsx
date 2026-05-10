import { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-neutral-800 rounded-lg overflow-hidden mb-4 bg-neutral-900/50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 text-left flex justify-between items-center hover:bg-neutral-800 transition-all"
      >
        <span className="font-medium text-neutral-100">{title}</span>
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="p-4 border-t border-neutral-800 text-neutral-400 bg-neutral-900">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;