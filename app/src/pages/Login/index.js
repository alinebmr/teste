import React, { useState } from "react";
import SignInput from "../../componentes/SignInput";
import SignButtom from "../../componentes/SignButton";
import InvalidityMsg from "../../componentes/InvalidityMsg";
import "./styles.css";
import { validateEmail, validatePassword } from "../../util/validation";
import HeaderLogin from "../../componentes/HeaderLogin";
import { useNavigate } from "react-router-dom";


const Login = (props) => {
  // criando os estados
  const [email, setEmail] = useState({ value: "", invalidity: "" });
  const [password, setPassword] = useState({ value: "", invalidity: "" });
  const navigate = useNavigate();

  // funcoes para mudar os estados
  const changeEmail = (e) => {
    const value = e.target.value;

    setEmail({ ...email, value });
    // como email eh um objeto { value: '', indalidity: '' },
    // vamos clonar as propriedades do objeto usando o operador spread { ...email },
    // e atribuir o novo valor de value { ...email, value }
  };

  const changePassword = (e) => {
    const value = e.target.value;

    setPassword({ ...password, value });
  };

  const validateForm = () => {
    const invalidityEmail = validateEmail(email.value);
    const invalidityPassword = validatePassword(password.value);

    setEmail({ ...email, invalidity: invalidityEmail });
    setPassword({ ...password, invalidity: invalidityPassword });

    return !invalidityEmail && !invalidityPassword ? true : false;
  };

  const submit = () => {
    if (validateForm()) {
      // requisicao
      // api
      //   .post(
      //     "/user/signIn",
      //     { email: email.value, password: password.value },
      //     {
      //       headers: { "Content-Type": "application/json" },
      //     }
      //   )
      //   .then((response) => {
      //     const token = response.data.token;
      //     // salvando o token do usuario no localStorage
      //     localStorage.setItem("token", token);
      //     // salvando os dados do usuario
      //     localStorage.setItem("user", JSON.stringify(response));
      //     // redirecionando para tela Home
      //     props.history.push("/");
      //   })
      //   .catch((error) => {
      //     console.log(error.response);
      //     const msg = error.response.data;

      //     // exibindo mensagem de erro que o backend retorna
      //     if (msg.indexOf("Email não cadastrado") !== -1)
      //       setEmail({ ...email, invalidity: "Email não cadastrado" });
      //     else if (msg === "Senha inválida")
      //       setPassword({ ...password, invalidity: msg });
      //   });
      alert("Usuário logado com sucesso!");
      navigate("/todolist");
    }
  };

  return (
    <div id="header">
       <HeaderLogin/>
       <div id="login">
          <div id="loginBox">
            <span>Login</span>
            <SignInput
            value={email.value}
            onChange={changeEmail}
            label="Email"
            type="email"
            />
           <InvalidityMsg msg={email.invalidity} />
           <SignInput
             value={password.value}
             onChange={changePassword}
             label="Senha"
             type="password"
           />
           <InvalidityMsg msg={password.invalidity} />
           <a href="/">Esqueceu sua senha?</a>
           <SignButtom onClick={submit} text="ENTRAR" /> 
        </div>
      </div>
    </div>
   
  );
};

export default Login;