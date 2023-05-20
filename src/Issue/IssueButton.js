import React from "react";

function IssueButton({ showIssue, handleIssue }) {
  return (
    <div>
      {showIssue && (
        <div className="mx-auto max-w-[1000px] py-3 text-white">
          <button
            onClick={() => handleIssue("Urgent")}
            className="border-2 bg-white text-black font-semibold rounded-lg w-40 h-12 ease-out duration-300"
          >
            Urgent
          </button>
          <button
            onClick={() => handleIssue("Typical")}
            className="border-2 rounded-md bg-white text-black font-semibold w-40 h-12"
          >
            Typical
          </button>
        </div>
      )}
    </div>
  );
}

export default IssueButton;
