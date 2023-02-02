import React from "react";

export const Footer = ()=>{
    // we add styling by making objects like this:
    
    // let footerStyle = {
    //      position: "relative",
    //      top: "70vh",
    //      width: "100%" 
    // };
    
    return (
        // style={footerStyle} : ye likh do as attribute in <footer> tag for styling using footerStyle object
        <footer className="bg-dark text-light py-2">
            <p className="text-center">
                Copyright &copy; MyToDoList.com
            </p>
        </footer>
    );
}