import type { User } from "../../types/User";



export type RegisterFormStep = "basic" | "professional" | "contact";

export interface RegisterProps {
    initialValues?: User;
}