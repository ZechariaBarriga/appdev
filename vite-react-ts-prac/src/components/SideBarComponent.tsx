import React from 'react';
import { useOutlet } from 'react-router-dom';
function LeftBarComponent(){  
    console.log("a");
    const outlet = useOutlet();
   return (
    <>
      <div style={styles}>I am LeftSideBar</div>
      {outlet}
    </>
  );
};

export default LeftBarComponent;

const styles: any = {
    position: "fixed",
    height: "100%",
    width: "150px",
    top: 0,
    left: 0,
    backgroundColor: "white",
    fontWeight: "bold",
    display: "flex",
    overflow: "hidden",
    alignItems: "center",
    textAlign: "center",
};

  