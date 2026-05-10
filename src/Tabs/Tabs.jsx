import { Children } from "react";
import { useState } from "react";

const Tabs = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex border-b border-neutral-800 mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
              activeTab === index
                ? "border-emerald-500 text-emerald-400 bg-emerald-500/5"
                : "border-transparent text-neutral-500 hover:text-neutral-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4 bg-neutral-900/30 rounded-xl border border-neutral-800 text-neutral-300">
        {Children.map(children, (child, index) => {
          return activeTab === index ? child : null;
        })}
      </div>
    </div>
  );
};

export default Tabs;
