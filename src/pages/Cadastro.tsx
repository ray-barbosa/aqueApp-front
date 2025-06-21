import { useForm } from "react-hook-form";


type FormData = {
    name: string;
    email: string;
    password: string;
    pronouns: string;
    typeUser: "professional" | "client";
};



function Cadastro() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
    console.log("Preparing data from backend", data);
        // Future API call to register the user
        // Example: await api.post('/register', data);    };

    };


    return (
        <>
       
            <h1>Crie sua conta</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <input
                    type="text"
                    placeholder="Nome"
                    {...register("name", { required: "Nome é obrigatório" })}
                />
                {errors.name && <span className="error">{errors.name.message}</span>
                }
                <input
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: "Email é obrigatório" })}
                />
                {errors.email && <span className="error">{errors.email.message}</span>}

                <input
                    type="password"
                    placeholder="Senha"
                    {...register("password", { 
                        required: "Senha é obrigatória",
                        minLength: { value: 6, message: "Senha deve ter pelo menos 6 caracteres" }
                    })}
                />
                {errors.password && <span className="error">{errors.password.message}</span>}

                <input
                    type="text"
                    placeholder="Pronomes (ele/ela/elu)"
                    {...register("pronouns")}
                />
                {errors.pronouns && <span className="error">{errors.pronouns.message}</span>}

                <select {...register("typeUser", { required: "Tipo de usuário é obrigatório" })}>
                    <option value="professional">Profissional</option>
                    <option value="client">Estou aqui para contratar um serviço</option>
                </select>
                {errors.typeUser && <span className="error">{errors.typeUser.message}</span>}

                <button type="submit">Cadastrar</button>
            </form>
        

        </>

        );
    };


export default Cadastro;