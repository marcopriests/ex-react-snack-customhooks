import { useEffect, useState } from "react";

export default function useCustomPointer(cursor) {
    const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });

    console.log(cursor);

    useEffect(() => {

        const updatePosition = (event) => {
            setPointerPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', updatePosition);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
        }
    }, [])


    return (
        <div className="cursor" style={{
            top: pointerPosition.y,
            left: pointerPosition.x,
        }}>
            {cursor}
        </div>
    );

};