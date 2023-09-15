import React from 'react';
import { useOutlet } from 'react-router-dom';
function RightBarComponent(){  
    console.log("a");
    const outlet = useOutlet();
   return (
    <>
      <div style={styles}>I am RightSideBar</div>
      {outlet}
    </>
  );
};

export default RightBarComponent;

const styles: any = {
    position: "fixed",
    height: "100%",
    width: "150px",
    top: 0,
    right: 0,
    backgroundColor: "black",
    fontWeight: "bold",
    display: "flex",
    overflow: "hidden",
    alignItems: "center",
    textAlign: "center",
};
