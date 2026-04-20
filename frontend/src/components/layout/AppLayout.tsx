import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import CyberGridBackground from "@/components/ui/CyberGridBackground";
import { SmoothCursor } from "@/components/ui/SmoothCursor";
import FloatingActions from "@/components/ui/FloatingActions/FloatingActions";

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