import React from "react";

function Dept({ showDept, handleDept }) {
  return (
    <div>
      {showDept && (
        <div className="py-3">
          <select
            onChange={handleDept}
            className="border-2 h-12 text-[20px] font-semibold rounded-md w-80"
          >
            <option value="Administrative">Administrative</option>
            <option value="Finance">Finance</option>
            <option value="Accounting">Accounting</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Logistic">Logistic</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Supplier">Supplier</option>
            <option value="Security">Security</option>
          </select>
        </div>
      )}
    </div>
  );
}

export default Dept;
