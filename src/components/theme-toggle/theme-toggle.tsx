import {ToggleWrapper, SwitchUIWrapper} from "./style";
import {useCallback, useState, useEffect, InputHTMLAttributes} from "react";
import {useAppState} from "../../state/app";

interface SwitchStateProps {
    name: string;
    checked: boolean;
}

interface SwitchUIProps extends InputHTMLAttributes<HTMLInputElement>{
    checked: boolean;
    onStateChange: ((v:SwitchStateProps) => void) | null;

}

function SwitchUI({checked, onStateChange = null, name = "", ...props}: SwitchUIProps) {
    const [state, setState] = useState({checked, name: name})
    const handleChange = useCallback((e) => {
        const currentState = {
            checked: e.target.checked,
            name,
        };
        onStateChange && onStateChange(currentState);
        setState(currentState);
    }, [setState, onStateChange, name]);

    useEffect(() => {
        state.checked !== checked && setState({name, checked});
    }, [checked, name, setState]);

    return (
        <SwitchUIWrapper className="switch-ui-group">
            <div className={`switch-ui${props.disabled ? " switch-ui--disabled" : ""}`}>
                <input className="switch-ui__input" type="checkbox" {...props}
                       onChange={handleChange} {...{...state, ...props}}/>
                <div className={`switch-ui__bullet switch-ui__bullet--${checked ? 'active' : "default"}`}/>
            </div>
        </SwitchUIWrapper>
    )
}

export default function ThemeToggle() {
    const {theme, setTheme} = useAppState();
    const handleStateChange = useCallback(({checked}) => {
        setTheme(checked ? "light" : "dark");
    }, [setTheme, theme]);
    return (
        <ToggleWrapper>
            <label>{theme} mode</label>
            <SwitchUI checked={theme === 'light'} name="theme" onStateChange={handleStateChange}/>
        </ToggleWrapper>
    )
}
