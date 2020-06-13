import React, {useEffect} from "react";
import {useLocalStorage} from "./useLocalStorage";


const useLightMode = (enabled) => {
    const [isEnabled, setIsEnabled] = useLocalStorage("enabled", enabled);

    useEffect(() =>{
        //I know there has to be a better way than querySelectors...
        document.querySelector("body").classList.toggle("light-mode", isEnabled);
        document.querySelector("h1").classList.toggle("light-mode", isEnabled);
        document.querySelector("form").classList.toggle("light-mode", isEnabled);
        document.querySelector("button").classList.toggle("light-mode", isEnabled);
        const btns = document.querySelectorAll("li");
        btns.forEach(btn => btn.classList.toggle("light-mode", isEnabled));
    }, [isEnabled]);

    return[isEnabled, setIsEnabled];
}

export default useLightMode;