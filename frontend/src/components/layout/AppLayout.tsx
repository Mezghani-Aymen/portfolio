import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CyberGridBackground from "../ui/CyberGridBackground";
import { SmoothCursor } from "../ui/SmoothCursor";
import FloatingActions from "../ui/FloatingActions/FloatingActions";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <CyberGridBackground />
            <Header />
            <main>{children}</main>
            <Footer />
            <SmoothCursor />
            <FloatingActions />
        </>
    );
}