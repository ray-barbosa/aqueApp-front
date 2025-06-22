export const PROFESSIONAL_CATEGORIES = [
    { value: "beuty", label: "Beleza & Estética" },
    { value: "fashion", label: "Moda & Acessórios" },
    { value: "home", label: "Casa & Decoração" },
    { value: "food", label: "Alimentação & Bebidas" },
    { value: "marketing", label: "Marketing & Publicidade" },
    { value: "technology", label: "Tecnologia & Informática" },
    { value: "health", label: "Saúde & Bem-estar" },
    { value: "other", label: "Outros" },
];

export type CategoryValue = typeof PROFESSIONAL_CATEGORIES[number]["value"];