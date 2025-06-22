export type UserType = "professional" | "client";


export interface ContactInfo {
    whatsapp?: string;
    instagram?: string;
    tiktok?: string;
    contactEmail?: string;
}

export interface User {
    id?: string;
    name: string;
    email: string;
    password: string;
    pronouns: string;
    typeUser: UserType;
    serviceTitle?: string;
    category?: string;
    description?: string;
    contactInfo?: ContactInfo;
    imageUrl?: string;
}

