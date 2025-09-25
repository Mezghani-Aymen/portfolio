import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const useAOS = (duration: number = 1000) => {
    useEffect(() => {
        AOS.init({ duration });
    }, [duration]);
};