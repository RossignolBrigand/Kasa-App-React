import React from "react";
import { useState } from "react";

import '../../styles/components/_arrow-icon.scss'

function ArrowIcon({ color }) {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => { setIsClicked(!isClicked) };

    return (
        <div className={`arrow-icon${isClicked ? ' rotated ' : ''}`} onClick={handleClick}>
            <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.2103 13.8522C12.5409 14.5216 11.4538 14.5216 10.7843 13.8522L0.502064 3.56991C-0.167355 2.90049 -0.167355 1.81335 0.502064 1.14393C1.17148 0.474515 2.25862 0.474515 2.92804 1.14393L12 10.2159L21.072 1.14929C21.7414 0.479871 22.8285 0.479871 23.4979 1.14929C24.1674 1.81871 24.1674 2.90585 23.4979 3.57526L13.2157 13.8575L13.2103 13.8522Z" fill={color} />
            </svg>
        </div>
    )
}

export default ArrowIcon;

