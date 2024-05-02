import { useEffect, useState } from "react";

export default function useDebounce(value: string, timeout: number = 1000) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, timeout);
        return () => {
            clearTimeout(handler);
        };
    }, [value]);

    return debouncedValue;
}