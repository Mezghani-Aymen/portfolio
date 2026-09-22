import { Building2, Mail } from "lucide-react";
import { InternalProject } from "@/src/types/project.types";

type Props = {
    project: InternalProject;
};

export default function CompanyInfo({ project }: Props) {
    return (<div className="space-y-4">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
            <Building2 className="h-5 w-5 text-[var(--primary)]" />
            {project.company.name}
        </h3>

        <div className="flex items-center gap-2 text-gray-400 ">
            <Mail className="h-5 w-5" />
            <span>{project.company.email}</span>
        </div>
    </div>)
}