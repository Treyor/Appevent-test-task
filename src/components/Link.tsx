import { FC } from "react"
import { NavLink } from "react-router-dom"

/**
 * @param {label} text, we want to show in button
 * @param {link} link to component, which we want to be redirected on after click
 * @param {elementClassName} string of css classes
 */
interface ButtonProps {
    label: string,
    link: string,
    elementClassName: string
}

const Link: FC<ButtonProps> = (props) => {
    return (
        <NavLink to={props.link}>
            <button className={props.elementClassName}>{props.label}</button>
        </NavLink>
    )
}

export default Link