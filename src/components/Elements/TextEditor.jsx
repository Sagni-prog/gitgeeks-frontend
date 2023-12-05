import React from "react";
import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import { IoSend } from "react-icons/io5";


const TextEditor = () => {
  
  var modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [
       
      ],
      [{ "color": ["#adbac7", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", '#adbac7'] }],
    ]
  };

  var formats = [
    "header", "height", "bold", "italic",
    "underline", "strike", "blockquote",
    "list", "color", "bullet", "indent",
    "link", "image", "align", "size",
  ];

  const handleProcedureContentChange = (content) => {
    console.log("content---->", content);
  };

  return (
    <div style = {{ border: "none",   backgroundColor: "#2d333b"}} className="color-primary p-0 m-0 ">
      <div style={{
           width: "48%",
           height: "25%", 
           display: "flex", 
           justifyContent: "center", 
           border: "none",
           position: "fixed",
           bottom: "10px", 
           left: "0",
           marginLeft: "27%",

           }} >
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          placeholder=""
          onChange={handleProcedureContentChange}
          style={{ width: '95%', height: "100%",color: "#adbac7", position: "relative" , overflow: "auto"}}
          className="color-primary"
        >
        
        </ReactQuill>
        <IoSend
          size={25}
        style={{
          position: "absolute",
          top: "76%",
          left: "90%",
          color: "green",
          cursor: "pointer"
        }}/>
      </div>
      
    </div>
  );

}

export default TextEditor;
