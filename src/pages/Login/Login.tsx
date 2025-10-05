import { Form, useForm } from "react-hook-form";
import './Login.css'
import { VscEye } from 'react-icons/vsc';
import { VscEyeClosed } from 'react-icons/vsc';
import { useState } from "react";


const Login = () => {
    const {
        control,
        register,
        formState: { isSubmitSuccessful, errors },
    } = useForm()

    const onSubmit = (data: any) => {
        console.log(data);
    };
    const [ isPasswordVisible, setIsPasswordVisible ] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }
    return (
        <>
            <h1>Acesse a plataforma</h1>
            <p>Faça login ou registre-se</p>
            <Form
                action="/api/login"
                method="post"
                control={control}
                onSuccess={() => {
                    console.log("Formulário enviado com sucesso!");
                }}
                >
                <div >
                    <label htmlFor="email">Email</label>
                    <input className="login-form"
                        id="email"
                        type="email"
                        placeholder="Digite seu email"
                        {...register("email", { required: true })}
                        autoComplete="username"
                    />
                    {errors.email && <span className="error">Este campo é obrigatório</span>}

                    <label htmlFor="password">Senha</label>
                    <div className="password-input-wrapper">
                        <input className="login-form"
                            id="password"
                            type={isPasswordVisible ? "text" : "password"}
                            placeholder="Digite sua senha"
                            {...register("password", { required: true })}
                            autoComplete="current-password"
                        />
                        <button
                            type="button"
                            className="toggle-password-btn"
                            onClick={togglePasswordVisibility}
                            aria-label={isPasswordVisible ? "Ocultar senha" : "Mostrar senha"}
                        >
                            {isPasswordVisible ? <VscEye /> : <VscEyeClosed />}
                        </button>
                    </div>
                    {errors.password && <span className="error">Este campo é obrigatório</span>}

                    <p className="forgot-password">Esqueceu a senha?</p>

                    <button type="submit" className="login-btn">Entrar</button>
                </div>
                </Form>
        </>
    );
};

export default Login;