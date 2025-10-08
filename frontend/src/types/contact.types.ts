export interface IFormData {
    name: string;
    email: string;
    subject: string;
    description: string;
    attachment?: File | null;
}

export class InitialForm implements IFormData {
    name: string;
    email: string;
    subject: string;
    description: string;
    attachment?: File | null;

    constructor(data: Partial<IFormData> = {}) {
        this.name = data.name ?? "";
        this.email = data.email ?? "";
        this.subject = data.subject ?? "";
        this.description = data.description ?? "";
        this.attachment = data.attachment ?? null;
    }
}