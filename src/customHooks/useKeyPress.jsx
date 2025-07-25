import { useEffect, useState } from "react";

export default function useKeyPress(key) {
    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === key) {
                setIsPressed(true);
            }
        }

        const handleKeyUp = (e) => {
            if (e.key === key) {
                setIsPressed(false);
            }
        }


        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return isPressed;
};