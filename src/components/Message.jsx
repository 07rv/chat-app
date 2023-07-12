import React from "react";

const Message = () => {
  return (
    <div className={`message owner`}>
      <div className="messageInfo">
        <img
          src={
            "https://images.unsplash.com/photo-1621317911081-f123294e86c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{"gdggmhjfsghjkhgffserkulikyjt"}</p>
        <img
          src={
            "https://images.unsplash.com/photo-1621317911081-f123294e86c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
