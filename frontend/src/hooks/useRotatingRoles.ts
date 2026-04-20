import { useEffect, useState } from "react";

export default function useRotatingRoles(roles: string[], delay = 3000) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length);
        }, delay);

        return () => clearInterval(timer);
    }, [roles, delay]);

    return roles[index];
}