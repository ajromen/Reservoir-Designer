import React from "react";
import Dance from "../parts/Dance";


function PartsMenager() {
    let parts: any[] = [];

    parts.push(<Dance />);
    return (
        <>
            {parts.map((part, idx) => (
                <React.Fragment key={idx}>{part}</React.Fragment>
            ))}
        </>
    );
}

export default PartsMenager;