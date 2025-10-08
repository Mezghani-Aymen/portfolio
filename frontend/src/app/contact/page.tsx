"use client"
import ContactForm from "@/src/components/layout/Contact/ContactForm";
import Section from "@/src/components/ui/Section";
import { Briefcase, ChevronDown, ChevronUp, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";


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
};


const faqs: FaqItemType[] = [
    {
        id: "t1",
        q: "What technologies do you work with?",
        a: "I mainly use modern web technologies like React, Next.js, Nest.js, and TypeScript.",
    },
    {
        id: "t2",
        q: "Do you offer revisions?",
        a:
            "Yes — typically I include 4–6 rounds of revisions to ensure you’re satisfied with the final outcome.",
    },
    {
        id: "t3",
        q: "Are you open to remote collaboration?",
        a: "Yes, I can work remotely, on-site, or in a hybrid mode depending on project needs.",
    },
    {
        id: "t4",
        q: "How do you ensure code quality?",
        a: "I follow clean code practices, use version control (Git), and write tests to maintain quality and scalability.",
    },
];


const FaqItem: React.FC<{
    item: FaqItemType;
    expanded: boolean;
    onToggle: (id: string) => void;
}> = ({ item, expanded, onToggle }) => {
    return (
        <div className="rounded-lg bg-white/3 dark:bg-white/4 p-4 shadow-sm">
            <button
                className="w-full flex items-center justify-between gap-4"
                aria-expanded={expanded}
                aria-controls={`faq-panel-${item.id}`}
                onClick={() => onToggle(item.id)}
            >
                <span className="text-left text-sm font-semibold text-gray-100 dark:text-gray-100">
                    {item.q}
                </span>
                <span className="flex items-center gap-3 text-gray-200 dark:text-gray-200">
                    {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </span>
            </button>

            <div
                id={`faq-panel-${item.id}`}
                role="region"
                aria-hidden={!expanded}
                className={`mt-3 text-sm text-gray-300 dark:text-gray-300 transition-[max-height,opacity] duration-300 overflow-hidden ${expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                {item.a}
            </div>
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

            <Section className="w-full  flex items-center justify-center bg-gray-950">


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