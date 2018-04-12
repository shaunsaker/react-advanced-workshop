import React from "react";

const Tab = ({ active, onSelect, children }) => {
    return (
        <div
            onClick={onSelect}
            style={{
                color: active ? "blue" : "black",
                border: "1px solid black",
                width: 200,
                margin: "auto",
            }}>
            {children}
        </div>
    );
};

export default Tab;
