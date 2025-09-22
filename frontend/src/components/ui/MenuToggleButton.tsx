import { Menu, X } from "lucide-react";
import Icon from "@/components/ui/Icon";

interface IMenuToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
};

export function MenuToggleButton({ isOpen, onClick }: IMenuToggleButtonProps) {
  return (
    <button
      onClick={onClick}
      className="md:hidden p-1.5 sm:p-2 rounded-lg transition-all hover:scale-110
                bg-[var(--bg-color-01)] hover:bg-[var(--bg-color-02)] dark:bg-[var(--bg-color-02)] dark:hover:bg-[var(--bg-color-01)]"
    >
      {isOpen ? <Icon IconType={X} className="w-5 h-5 sm:w-6 sm:h-6" /> : <Icon IconType={Menu} className="w-5 h-5 sm:w-6 sm:h-6" />}
    </button>
  );
}
