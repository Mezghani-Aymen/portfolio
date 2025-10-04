import { Logo } from "../../ui/Logo";
import SocialsMedia from "./SocialsMedia";

export default function Footer() {
    return (
        <footer className=" py-5     text-gray-300">
            <div className="mx-auto max-w-7xl px-6  md:flex md:items-center md:justify-between">
                {/* Left Section */}
                <div className="text-center md:text-left">
                    <Logo type="text" primaryText="Mezghani" secondaryText="Mohamed Aymen" />
                    <p className="mt-2 text-sm text-gray-400">
                        Crafting clean, scalable, and user-friendly web experiences.
                    </p>
                </div>


                {/* Socials */}
                <SocialsMedia />
            </div>

            {/* Bottom Line */}
            <div className="border-t border-gray-800 mt-8">
                <p className="text-center py-4 text-xs text-gray-500">
                    © {new Date().getFullYear()} Mezghani Mohamed Aymen-Web Developer.
                </p>
            </div>
        </footer>
    );
}