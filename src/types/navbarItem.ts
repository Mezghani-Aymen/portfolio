export interface INavbarItemProps {
    path: string,
    label: string,
    smooth: boolean,
    duration: number,
    onClick?: () => void;
    className?: string
}

