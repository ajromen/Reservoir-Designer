import React from "react";
import Dance from "../parts/Dance";
import StandHorizontal from "../parts/StandHorizontal";
import { Thread } from "../parts/Thread";
import TopOpening from "../parts/TopOpening";


function PartsMenager() {
    let parts: any[] = [];

    parts.push(<Dance />);
    parts.push(<StandHorizontal />);
    parts.push(<Thread />);
    parts.push(<TopOpening offset={0} />);
    return (
        <>
            {parts.map((part, idx) => (
                <React.Fragment key={idx}>{part}</React.Fragment>
            ))}
        </>
    );
}

export default PartsMenager;