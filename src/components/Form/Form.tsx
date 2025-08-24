import { useForm, useWatch } from 'react-hook-form';
import './Form.css'
import type { User } from '../../types/User';
import { PROFESSIONAL_CATEGORIES } from '../../types/Categories';

function Form() {
        const { register, handleSubmit, formState: { errors }, control } = useForm<User>();
    const userType = useWatch({ control, name: "typeUser"})

    const onSubmit = async (data: User) => {
        try {
           //  const response = await api.post("/register", data);

           await new Promise((resolve) => setTimeout(resolve, 1000)); // Simula um atraso de 1 segundo

            console.log("Usuário cadastrado com sucesso:", data); // dados mockados no console
            alert("Conta criada com sucesso!"); 
        } catch (error: any) {
            console.error("Error:", error.response?.data || error.message);
                alert(error.response?.data?.message || "Erro ao cadastrar usuário. Tente novamente."
            ); // Exibe mensagem de erro
        };
    };
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="form">
                <input className='inputForms'
                    type="text"
                    placeholder="Nome"
                    {...register("name", { required: "Nome é obrigatório" })}
                />
                {errors.name && <span className="error">{errors.name.message}</span>
                }
                <input className='inputForms' 
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: "Email é obrigatório" })}
                />
                {errors.email && <span className="error">{errors.email.message}</span>}

                <input className='inputForms'
                    type="password"
                    placeholder="Senha"
                    {...register("password", { 
                        required: "Senha é obrigatória",
                        minLength: { value: 6, message: "Senha deve ter pelo menos 6 caracteres" }
                    })}
                />
                {errors.password && <span className="error">{errors.password.message}</span>}

                <input className='inputForms'
                    type="text"
                    placeholder="Pronomes (ele/ela/elu)"
                    {...register("pronouns")}
                />
                {errors.pronouns && <span className="error">{errors.pronouns.message}</span>}

                <select className='inputForms' {...register("typeUser", { required: "Tipo de usuário é obrigatório" })}>
                    <option value="professional">Profissional</option>
                    <option value="client">Estou aqui para contratar um serviço</option>
                </select>
                {errors.typeUser && <span className="error">{errors.typeUser.message}</span>}

                    {userType === "professional" && (
                        <>
                            <input className='inputForms'
                                type="text"
                                placeholder="Título do serviço"
                                {...register("serviceTitle", { required: "Título do serviço é obrigatório" })}
                            />
                            {errors.serviceTitle && <span className="error">{errors.serviceTitle.message}</span>}

                           <select {...register("category", {required: "Categoria é obrigatória" })}>
                                <option value="">Selecione uma categoria</option>
                                {PROFESSIONAL_CATEGORIES.map((category) => (
                                    <option key={category.value} value={category.value}>
                                        {category.label}
                                    </option>
                                ))}
                            </select>
                            {errors.category && <span className="error">{errors.category.message}</span>}
                        </>
                    )}
                <button type="submit">Cadastrar</button>
            </form>        

    ) 
}

export default Form;