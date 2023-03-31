import React from 'react';

const LogOut = () => {
    function checkMe() {
        var checkBox = document.getElementById("toggle");
        var text = document.getElementById("text");
        if (checkBox.checked === true) {
            text.style.display = "block";
        } else {
            text.style.display = "none";
            window.localStorage.clear();
        }
    }
    return(
        <div className="toggles">
            <input type="checkbox" id="toggle" onClick={checkMe} />
            <label for="toggle" className="buttonCheck"></label>
            <p id="text" style={{display:"none"}}>I´m checked!</p>
        </div>
        
    )
}
export default LogOut;