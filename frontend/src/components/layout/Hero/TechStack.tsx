export default function TechStack({ techBadges }: { techBadges: string[] }) {
    return (
        <div className="flex flex-wrap gap-3">
            {techBadges.map((tech) => (
                <span
                    key={tech}
                    className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-2 py-1 border border-white/5 rounded bg-white/2"
                >
                    {tech}
                </span>
            ))}
        </div>
    );
}