import React, { useState } from 'react';

const Tabs = ({ children }) => {
const [activeTab, setActiveTab] = useState(children[0].props.label);
const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
};
return (
    <div>
    <div className="flex space-x-4 text-2xl">
        {children.map(child => (
        <button
        key={child.props.label}
        className={`${
        activeTab === child.props.label ? 'text-orange-500 font-semibold' : ''
        } text-orange-300 hover:text-orange-400`}
        onClick={e => handleClick(e, child.props.label)}
        >
        {child.props.label}
        </button>
        ))}
    </div>
    <div className="py-4">
        {children.map(child => {
        if (child.props.label === activeTab) {
        return <div key={child.props.label}>{child.props.children}</div>;
        }
        return null;
        })}
    </div>
    </div>
);
};
const Tab = ({ label, children }) => {
    return (
    <div label={label} className="hidden">
    {children}
    </div>
    );
};
export { Tabs, Tab };