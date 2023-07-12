import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img
          src={
            "https://images.unsplash.com/photo-1621317911081-f123294e86c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
          }
          alt=""
        />
        <span>{"wsdfgh"}</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
