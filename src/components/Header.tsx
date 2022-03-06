import Actions from "./actions/Actions";
import React from "react";

interface Props {
    title: string,
}

export const Header: React.FC<Props> = ({title}) => {
    return (
        <header className='header'>
            <h1>
                {title}
            </h1>
            <Actions/>
        </header>
    );
}
