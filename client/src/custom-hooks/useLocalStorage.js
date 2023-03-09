import { useState } from "react";

function useLocalStorage(key, value) {
    const [state, setState] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : value;
    });

    const setValue = (value) => {
        setState(value);
        localStorage.setItem(key, JSON.stringify(value));
    }
    return [state, setValue]
}

export default useLocalStorage;