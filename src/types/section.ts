import { ReactNode } from "react";

export interface ISectionProps {
    id: string;
    children: ReactNode;
    dataAos?: string
    dataAosDelay?: string;
    extratClass?: string;
}
