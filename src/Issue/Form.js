import React from "react";

function Form({
  issue,
  dept,
  company,
  designation,
  textareaValue,
  inputDateRef,
  fileInputRef,
  handleTextareaChange,
  handleFileUpload,
  handleDelete,
  handleSave,
  handleSubmit,
  buttonSaveClass,
  buttonSubmitClass,
}) {
  return (
    <div>
      <form className="border bg-[#f3f3f3] mt-5 h-[80vh] rounded-md max-w-[1000px] mx-auto p-5 ">
        <div className="">
          <div className="mt-6 ">
            <div className=" border rounded-md p-2 bg-[white] grid grid-cols-2 ">
              <div className="my-3 border-2 bg-[#f3f3f3] mx-1 rounded-md p-2 grid grid-cols-2">
                <label className="text-[16px] flex font-semibold mx-2">
                  Issue:
                </label>
                <div className="mb-6 flex border rounded-md p-2 bg-[white]">
                  <input
                    type="text"
                    value={issue || ""}
                    className="px-1 text-black"
                  />
                </div>
              </div>
              <div className="my-3 border-2 mx-1 rounded-md p-2 grid grid-cols-2 bg-[#f3f3f3]">
                <label className="text-[16px] font-semibold mx-2 flex ">
                  Department:
                </label>
                <div className="my-3 flex border rounded-md p-2 bg-[white]">
                  <input
                    type="text"
                    value={dept || ""}
                    className="px-1 text-black"
                  />
                </div>
              </div>
              <div className="my-3 border-2 rounded-md p-2 bg-[#f3f3f3] mx-1 grid grid-cols-2">
                <label className="text-[16px] font-semibold mx-2 flex">
                  Company:
                </label>
                <div className="my-2 flex border rounded-md p-2 bg-[white]">
                  <div className="px-1 text-black justify-center mt-3">
                    {company && <img src={company} alt="" />}
                  </div>
                </div>
              </div>
              <div className="my-3 border-2 rounded-md p-2 bg-[#f3f3f3] mx-1 grid grid-cols-2">
                <label className="text-[16px] font-semibold mx-2 flex">
                  Designation:
                </label>
                <div className="my-1 flex border rounded-md p-2 bg-[white]">
                  <div className="px-1 text-black justify-center mt-3">
                    {designation && <img src={designation} alt="" />}
                  </div>
                </div>
              </div>
              <div className="my-3 border-2 rounded-md p-2 bg-[#f3f3f3] mx-1 grid grid-cols-2">
                <label className="text-[16px] font-semibold mx-2 flex">
                  Note:
                </label>
                <div className="flex my-3 border rounded-md p-2 bg-[white]">
                  <textarea
                    value={textareaValue}
                    onChange={handleTextareaChange}
                    className="px-2 w-[350px]"
                  ></textarea>
                </div>
              </div>
              <div className="my-3 border-2 rounded-md p-2 bg-[#f3f3f3] mx-1 grid grid-cols-2">
                <label className="text-[16px] font-semibold mx-2 flex">
                  Deadline:
                </label>
                <div className="flex my-3 border rounded-md p-2 bg-[white]">
                  <input
                    type="date"
                    className="px-1 text-black"
                    ref={inputDateRef}
                  />
                </div>
              </div>
              <div className="mt-3 border-2 rounded-md p-2 bg-[#f3f3f3] mx-1 grid grid-cols-2">
                <label className="text-[16px] font-semibold flex">
                  Supporting Document:
                </label>
                <div className="flex my-5 border rounded-md p-2 bg-[white]">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-between mx-auto w-[560px]  my-2">
          <div className="border rounded-md bg-[white]">
            <button
              onClick={handleDelete}
              className="bg-[#282c34] text-white border rounded-md mx-1 my-1 p-1 hover:bg-red-600 hover:text-white"
            >
              Delete
            </button>
            <button
              onClick={handleSave}
              class={buttonSaveClass}
              className="bg-[#dbdbdb] border rounded-md mx-1 my-1 p-1 hover:bg-blue-400 text-slate-600 hover:text-white"
            >
              Save
            </button>
            <button
              onClick={handleSubmit}
              class={buttonSubmitClass}
              className="bg-[#dbdbdb] border rounded-md mx-1 my-1 p-1 hover:bg-green-400 hover:text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
