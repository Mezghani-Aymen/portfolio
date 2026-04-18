"use client";

import OptimizingLoader from "../ui/OptimizerLoader";
import AppLayout from "./AppLayout";
import useAppLoader from "@/hooks/useAppLoader";

export default function AppBootstrap({ children }: { children: React.ReactNode }) {
    const { progress, isReady } = useAppLoader();

    return (
        <>
            <OptimizingLoader progress={progress} />

            <div
                className={`transition-opacity duration-700 ${isReady ? "opacity-100" : "opacity-0"
                    }`}
                style={{ visibility: isReady ? "visible" : "hidden" }}
            >
                <AppLayout>{children}</AppLayout>
            </div>
        </>
    );
}