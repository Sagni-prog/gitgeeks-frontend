import React, {useState} from "react";
import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import { IoSend } from "react-icons/io5";
import { sendChannelMessage } from "../../api/messages/sendMessage";

const TextEditor = () => {

  const is = false;
  const [textContent, setTextCoontent] = useState()
  
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
    setTextCoontent(content)
  };

  const handleSendChannelMessage = async() => {
    const sentData = {
      message_body: textContent
    }
     const respons = await sendChannelMessage(9,sentData)
     console.log("message sent:", respons);
  }

  return (

    <div className='flex justify-center items-center mb-2 relative' style={{ maxHeight: '30%', }}>
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          placeholder=""
          onChange={handleProcedureContentChange}
          style={{ 
                width: '95%',
                maxHeight: '100%',
                color: "#adbac7",
                position: "relative",
                height: "100%",
                overflow: "hidden",
              }}
          className="color-primary"
        >
        
        </ReactQuill>
        <IoSend
          onClick={handleSendChannelMessage}
          size={25}
          style={{
            position: "absolute",
            top: "70%",
            left: "90%",
            color: "rgb(20 184 166)",
            cursor: "pointer"
          }}
       /> 
    </div>
  );

}

export default TextEditor;
