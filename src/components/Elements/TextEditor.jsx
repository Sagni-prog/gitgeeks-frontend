import React from "react";
import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

const TextEditor = () => {
  
  var modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [
        // { list: "ordered" },
        // { list: "bullet" },
        // { indent: "-1" },
        // { indent: "+1" },
        // { align: [] }
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
    <div style = {{ border: "none",overflow: "hidden",}} className="truncate color-primary p-0 m-0">
      <div style={{ width: "47%", display: "flex", justifyContent: "center", border: "none", position: "fixed", bottom: "10px", left: "0", marginLeft: "27%"}} >
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          placeholder=""
          onChange={handleProcedureContentChange}
          style={{ height: "220px", width: '95%', color: "#adbac7", overflow: 'hidden', }}
          className="color-primary truncate"
        >
        </ReactQuill>
      </div>
    </div>
  );

}

export default TextEditor;
