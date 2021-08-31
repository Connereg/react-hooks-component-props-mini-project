import React from "react";

function AboutCreate({image = "https://via.placeholder.com/215", about}){
    return (
        <aside className="asideSec">
            <img src={image} alt="blog logo" />
            <p>{about}</p>
        </aside>
    );
}

export default AboutCreate