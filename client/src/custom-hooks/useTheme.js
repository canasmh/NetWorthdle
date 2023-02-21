import { useState } from "react";

function useTheme() {
    const [theme, setTheme] = useState("");
    if (localStorage.getItem('theme')) {
        setTheme(localStorage.getItem('theme'))
    } else {
        localStorage.setItem('theme', 'original')
        setTheme('original')
    }

    return [theme, setTheme]
}