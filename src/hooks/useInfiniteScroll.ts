import { DependencyList, RefCallback, useCallback, useRef } from "react";

/**
 * useInfiniteScroll is used to fetch more data when the user scrolls to the bottom of the page.
 * @param callback - callback function to be called when the user scrolls to the bottom of the page.
 * @param deps - dependencies to be checked before calling the callback function.
 * @returns ref - ref callback to be used in the component.
 * IntersectionObserver is used to check if the user has scrolled to the bottom of the page.
 * If the user has scrolled to the bottom of the page, the callback function is called.
 * If the user has not scrolled to the bottom of the page, the observer is disconnected.
 */

export default function useInfiniteScroll<T extends HTMLElement>(
    callback: () => void,
    deps: DependencyList,
): RefCallback<T> {
    const observer = useRef<IntersectionObserver | null>(null);

    const ref = useCallback(
        (node: T) => {
            if (deps.every(Boolean)) {
                if (observer.current) {
                    observer.current.disconnect();
                }
                observer.current = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting) {
                        callback();
                    }
                });
                if (node) observer.current.observe(node);
            }
        },
        [deps, callback],
    );
    return ref;
}