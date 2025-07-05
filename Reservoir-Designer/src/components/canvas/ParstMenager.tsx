import React from "react";
import Dance from "../parts/Dance";
import StandHorizontal from "../parts/StandHorizontal";


function PartsMenager() {
    let parts: any[] = [];

    parts.push(<Dance />);
    parts.push(<StandHorizontal />);
    return (
        <>
            {parts.map((part, idx) => (
                <React.Fragment key={idx}>{part}</React.Fragment>
            ))}
        </>
    );
}

export default PartsMenager;