"use client";

export default function ClickHint() {
    return (
        <div
            className=" inline-flex flex-col items-center gap-2  pointer-events-none "
            aria-hidden
        >
            <div
                className=" relative w-6 h-6 rounded-full border-2 border-muted-foreground flex items-center justify-center " >
                <span className=" w-2 h-2 rounded-full bg-muted-foreground  animate-click-pulse " />
            </div>
        </div>
    );
}
