import { useRef } from "react";

export const useScrollToElement = () => {
    const ref = useRef<HTMLElement>(null);

    const scrollTo = () => {
        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return { ref, scrollTo };
}