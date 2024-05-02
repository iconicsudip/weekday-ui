import { useEffect, useState } from "react";

/**
 * This hook is used to debounce the value
 * @param value - The value to be debounced
 * @param timeout - The timeout for the debounce
 * @returns 
 */

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