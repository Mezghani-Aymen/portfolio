"use client"

import React, { useState } from "react";
import ContactForm from "@/src/components/layout/Contact/ContactForm";
import Section from "@/src/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ChevronDown, Mail, MapPin, Phone, Code, Zap, Heart, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type ContactItemProps = {
    icon: React.ReactNode;
    label: string;
    value: React.ReactNode;
};

const ContactItem: React.FC<ContactItemProps> = ({ icon, label, value }) => {
    return (
        <div className="flex items-start gap-4">
            <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg
                   bg-white/8 ring-1 ring-white/6 dark:bg-white/6 dark:ring-white/10"
                aria-hidden
            >
                {icon}
            </div>

            <div className="text-sm">
                <div className="font-semibold text-gray-100 dark:text-gray-100">
                    {label}
                </div>
                <div className="text-gray-300 dark:text-gray-300 break-all ">{value}</div>
            </div>
        </div>
    );
};

type FaqItemType = {
    id: string;
    q: string;
    a: string;
    icon: React.ElementType;
};

const faqs: FaqItemType[] = [
    {
        id: "t1",
        q: "What is your primary tech stack?",
        a: "I specialize in modern web ecosystems, primarily using React, Next.js, and TypeScript for frontends, paired with Node.js/NestJS or Python for robust backends.",
        icon: Code,
    },
    {
        id: "t2",
        q: "What is your development philosophy?",
        a: "I believe in writing clean, maintainable code and prioritizing user experience. Every line of code should serve a purpose and every pixel should add value to the user.",
        icon: Heart,
    },
    {
        id: "t3",
        q: "How do you handle project collaboration?",
        a: "I’m a strong advocate for clear communication. I use Git for version control and am comfortable working in Agile environments, whether remotely or in hybrid settings.",
        icon: Zap,
    },
    {
        id: "t4",
        q: "Can you help with existing projects?",
        a: "Absolutely! I have extensive experience jumping into established codebases, helping with bug fixes, performance optimizations, and feature expansions.",
        icon: MessageCircle,
    },
];

const FaqItem: React.FC<{
    item: FaqItemType;
    expanded: boolean;
    onToggle: (id: string) => void;
}> = ({ item, expanded, onToggle }) => {
    return (
        <div className={cn(
            "rounded-xl transition-all duration-300",
            "bg-white/5 backdrop-blur-md border border-white/10 hover:border-[var(--primary)]/30 shadow-lg",
            expanded && "border-[var(--primary)]/40 bg-white/10"
        )}>
            <button
                className="w-full flex items-center justify-between gap-4 p-5 py-6"
                aria-expanded={expanded}
                aria-controls={`faq-panel-${item.id}`}
                onClick={() => onToggle(item.id)}
            >
                <div className="flex items-center gap-4">
                    <div className={cn(
                        "p-2 rounded-lg transition-colors",
                        expanded ? "bg-[var(--primary)] text-white" : "bg-white/5 text-[var(--primary)]"
                    )}>
                        <item.icon size={18} />
                    </div>
                    <span className="text-left text-sm font-semibold text-gray-100 dark:text-gray-100">
                        {item.q}
                    </span>
                </div>
                <span className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300",
                    expanded ? "bg-[var(--primary)]/20 text-[var(--primary)] rotate-180" : "bg-white/5 text-gray-400"
                )}>
                    <ChevronDown size={18} />
                </span>
            </button>

            <AnimatePresence initial={false}>
                {expanded && (
                    <motion.div
                        id={`faq-panel-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 pb-6 pt-0 text-sm leading-relaxed text-gray-300 border-t border-white/5 mt-[-1px]">
                            <p className="pt-4 border-t border-white/5 opacity-80 italic">
                                {item.a}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};



export default function ContactPage() {
    const [openFaq, setOpenFaq] = useState<Record<string, boolean>>({});
    const toggleFaq = (id: string) => {
        setOpenFaq((s) => ({ ...s, [id]: !s[id] }));
    };

    return (
        <>
            <Section className="w-full min-h-screen flex items-center justify-center pt-20 sm:pt-10 flex-col ">
                <h2
                    id="contact-faq-heading"
                    className="text-4xl font-extrabold text-[var(--primary)] mb-6 text-center md:text-left"
                >
                    Let&apos;s Work Together
                </h2>

                <div className="w-full max-w-7xl grid grid-cols-1 gap-10 lg:grid-cols-2  p-5 items-center">
                    {/* Left column */}
                    <div className="flex flex-col justify-center sm:items-start   ">
                        <p className="mb-6 text-gray-300">
                            Ready to start your next project? I’d love to hear about your ideas, goals, and the challenges you’re looking to solve. <br />
                            Share your vision, and together we’ll craft a solution that blends creativity, functionality, and impact.
                            I’m here to help bring it to life with clean code, modern design, and thoughtful detail.
                        </p>

                        <div className="flex flex-col gap-5  w-full">
                            <ContactItem
                                icon={<Mail className="w-5 h-5 text-[#D76B30]" aria-hidden />}
                                label="Email"
                                value={<a href="mailto:hello@company.com" className="underline ">mezghanimohamedaymen@gmail.com</a>}
                            />
                            <ContactItem
                                icon={<Phone className="w-5 h-5 text-[#D76B30]" aria-hidden />}
                                label="Phone"
                                value={<a href="tel:+21627661583">+216 29 236 016</a>}
                            />
                            <ContactItem
                                icon={<MapPin className="w-5 h-5 text-[#D76B30]" aria-hidden />}
                                label="Location"
                                value="Tunis, Sfax"
                            />
                            <ContactItem
                                icon={<Briefcase className="w-5 h-5 text-[#D76B30]" aria-hidden />}
                                label="Engagement Model"
                                value="Hybrid"
                            />

                            <div
                                className="w-full shadow-2xl backdrop-blur-lg border border-white/20 
                            [background:linear-gradient(135deg,rgba(215,107,48,0.25),rgba(255,255,255,0.05))] mt-6 rounded-lg bg-white/4 p-4 text-sm text-gray-300 flex justify-center flex-col"
                                role="note"
                                aria-label="Response time"
                            >
                                <span className="font-semibold text-gray-100 mb-1 text-sm">Response Time</span>
                                I typically respond to new inquiries within 24 hours.
                            </div>
                        </div>
                    </div>

                    {/* Right column: Contact Form */}
                    <ContactForm />
                </div>
            </Section>
            <Section className="w-full  flex items-center justify-center  overflow-hidden text-center sm:px-0 px-5 border-y border-white/5 bg-zinc-950/20 backdrop-blur-sm">


                {/* ----------------------- FAQ Section ----------------------- */}
                <div className="w-full max-w-7xl flex  justify-center items-center flex-col  gap-6 py-12 px-5">
                    <h3 className="text-3xl font-bold text-[var(--primary)] mb-6 text-center">Frequently Asked Questions</h3>

                    {/* Grid of FAQ items: two columns on md+ */}
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        {faqs.map((f) => (
                            <FaqItem key={f.id} item={f} expanded={!!openFaq[f.id]} onToggle={toggleFaq} />
                        ))}
                    </div>
                </div>
            </Section>

        </>
    );
}