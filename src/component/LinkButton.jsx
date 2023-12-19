import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";

export const LinkButton = ({path, ...props}) => {
    return (
        <Link to={path}>
            <Button {...props}/>
        </Link>
    )
}