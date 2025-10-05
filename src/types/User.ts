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
    userLogin: UserLogin
    pronouns: string;
    typeUser: UserType;
    serviceTitle?: string;
    category?: string;
    description?: string;
    contactInfo?: ContactInfo; // adicionar defaut desse campo como email, mas podera receber uma lista de strings futuramente
    imageUrl?: string;
}

export interface UserLogin {
    email: string;
    password:string
}
