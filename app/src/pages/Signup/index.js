import { useState } from "react";
import SignupInput from "../../componentes/SignupInput";
import SignButtom from "../../componentes/SignButton";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import HeaderSignup from "../../componentes/Header Signup";
import useAuth from "../../hooks/useAuth";

const Signup = (props) => {
    const [email, setEmail] = useState({value: ""});
    const [emailConf, setEmailConf] = useState("");
    const [password, setPassword] = useState({value:""});
    const [name, setName] = useState({value:""});
    const [age, setAge] = useState({value:""});
    const [gender, setGender] = useState({value:""});
    const [error, setError] = useState({value:""});
    const navigate = useNavigate();
    const { signup } = useAuth;

const handleSignup = () => {
    if (!email | !emailConf | !password) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, password);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/todolist");
  };


    return (
        <div id="header">
            <HeaderSignup/>
            <div id="signupstart">
            <div id="signupBox">
                <span>Cadastro</span>
                <SignupInput
                type="email"
                label="Digite seu E-mail"
                value={email.value}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <SignupInput
                type="emailconf"
                label="Confirme seu E-mail"
                value={emailConf.value}
                onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                />
                <SignupInput
                type="password"
                label="Digite sua Senha"
                value={password.value}
                onChange={(e) => [setPassword(e.target.value), setError("")]}
                />
                <SignupInput
                type="name"
                label="Digite seu Nome Completo"
                value={name.value}
                onChange={(e) => [setName(e.target.value), setError("")]}
                />
                <SignupInput
                type="age"
                label="Digite sua Idade"
                value={age.value}
                onChange={(e) => [setAge(e.target.value), setError("")]}
                />
                <SignupInput
                type="gender"
                label="Digite seu gênero"
                value={gender.value}
                onChange={(e) => [setGender(e.target.value), setError("")]}
                />
                <a href="/login">Já tem uma conta?</a>
                <SignButtom onClick={handleSignup} text="FINALIZAR CADASTRO" />
            </div>
        </div>
        </div>
        
    );
};

export default Signup;