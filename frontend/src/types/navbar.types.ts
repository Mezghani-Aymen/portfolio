export type LinkType = "page" | "scroll" | "home" | "redirect";

export interface NavLinkItem {
    path: string;
    label: string;
    className?: string;
    smooth?: boolean;
    duration?: number;
    type: LinkType;
}

export interface INavBarProps {
    children?: React.ReactNode;
    className: string;
    links: NavLinkItem[];
}