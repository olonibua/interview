import React, { useRef, useState } from "react";

import Dept from "./Dept";
import Company from "./Company";
import Designation from "./Designation";
import Form from "./Form";
import IssueButton from "./IssueButton";

function Home() {
  const [issue, setIssue] = React.useState(null);
  const [dept, setDept] = React.useState(null);
  const [company, setCompany] = React.useState(null);
  const [designation, setDesignation] = React.useState(null);
  const [textareaValue, setTextareaValue] = useState("");
  const inputDateRef = useRef(null);
  const fileInputRef = useRef(null);

  const [show, setShow] = React.useState(true);
  const [showIssue, setShowIssue] = React.useState(true);
  const [showDept, setShowDept] = React.useState(false);
  const [showCompany, setShowCompany] = React.useState(false);
  const [showDesignation, setShowDesignation] = React.useState(false);
  const [isSaveClicked, setIsSaveClicked] = useState(false);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const Issue = () => {
    setShowIssue(true);
  };
  const handleIssue = (value) => {
    setIssue(value);
    console.log(value);

    setTimeout(() => {
      setShowDept(true);
      setShowIssue(false);
    }, 300);
  };

  const handleDept = (event) => {
    setDept(event.target.value);
    console.log(event.target.value);

    setTimeout(() => {
      setShowDept(false);
      setShowCompany(true);
    }, 600);
  };

  const handleCompany = (event) => {
    const imageSrc = event.target.getAttribute("data-value");
    console.log(imageSrc);

    setTimeout(() => {
      setCompany(imageSrc);
      setShowCompany(false);
      setShowDesignation(true);
    }, 600);
  };

  const handleDesignation = (event) => {
    const imageSrc = event.target.getAttribute("data-value");
    setDesignation(imageSrc);
    console.log(imageSrc);

    setTimeout(() => {
      setShowDesignation(false);
    }, 300);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
  };

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    setIssue(null);
    setDept(null);
    setCompany(null);
    setDesignation(null);
    setTextareaValue("");
    if (inputDateRef.current) {
      inputDateRef.current.value = "";
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const buttonSaveClass = isSaveClicked
    ? "bg-red-600 border rounded-md mx-1 my-1 p-1 text-white"
    : "bg-[#dbdbdb] border rounded-md mx-1 my-1 p-1 hover:bg-blue-400 text-slate-600 hover:text-white";
  const buttonSubmitClass = isSubmitClicked
    ? "bg-yellow-600 border rounded-md mx-1 my-1 p-1"
    : "bg-[#dbdbdb] border rounded-md mx-1 my-1 p-1 hover:bg-green-400 hover:text-white";

  const handleSave = (event) => {
    event.preventDefault();
    setIsSaveClicked(!isSaveClicked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitClicked(!isSubmitClicked);
  };

  return (
    <div className=" ">
      {show && (
        <div
          onClick={Issue}
          className="text-3xl font-bold cursor-pointer text-white py-6"
        >
          ISSUE
        </div>
      )}

      <IssueButton showIssue={showIssue} handleIssue={handleIssue} />

      <Dept showDept={showDept} handleDept={handleDept} />
      <Company showCompany={showCompany} handleCompany={handleCompany} />
      <Designation
        showDesignation={showDesignation}
        handleDesignation={handleDesignation}
      />

      <Form
        issue={issue}
        handleDelete={handleDelete}
        handleSave={handleSave}
        handleFileUpload={handleFileUpload}
        handleTextareaChange={handleTextareaChange}
        handleSubmit={handleSubmit}
        fileInputRef={fileInputRef}
        inputDateRef={inputDateRef}
        textareaValue={textareaValue}
        dept={dept}
        company={company}
        designation={designation}
        buttonSaveClass={buttonSaveClass}
        buttonSubmitClass={buttonSubmitClass}
      />
    </div>
  );
}

export default Home;
