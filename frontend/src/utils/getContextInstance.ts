import { useContext, Context } from "react";

/**
 * Safely get the value from a React context.
 * Throws an error if the context is undefined (not provided).
 *
 * @param context - The React context to consume
 * @param componentName - Optional component name for the error message
 * @returns The context value
 */

function useContextInstance<T>(context: Context<T | undefined>, componentName?: string): T {
    const value = useContext(context);
    if (value === undefined) {
        throw new Error(
            `${componentName ? componentName : "Component"} must be used within its Provider`
        );
    }
    return value;
}

export default useContextInstance;
