import { useState } from "react";
import SignupInput from "../../componentes/SignupInput";
import SignButtom from "../../componentes/SignButton";
import "./styles.css";
import HeaderSignup from "../../componentes/HeaderSignup";

const Signup = (props) => {
    const [email, setEmail] = useState({value: ""});
    const [password, setPassword] = useState({value:""});
    const [name, setName] = useState({value:""});
    const [age, setAge] = useState({value:""});
    const [gender, setGender] = useState({value:""});


const changeEmail = (e) => {
    const value = e.target.value;

    setEmail({ ...email, value });

};

const changePassword = (e) => {
    const value = e.target.value;

    setPassword({ ...email, value });
};

const changeName = (e) => {
    const value = e.target.value;
    setName({ ...email, value });
};

const changeAge = (e) => {
    const value = e.target.value;
    setAge({ ...email, value });
};

const changeGender = (e) => {
    const value = e.target.value;

    setGender({ ...email, value });
};

const submit = () =>{

};

    return (
        <div id="header">
            <HeaderSignup/>
            <div id="signup">
            <div id="signupBox">
                <span>Cadastro</span>
                <SignupInput
                value={email.value}
                onChange={changeEmail}
                label= "Email"
                type="email"
                />
                <SignupInput
                value={password.value}
                onChange={changePassword}
                label= "Senha"
                type="password"
                />
                <SignupInput
                value={name.value}
                onChange={changeName}
                label= "Nome"
                type="name"
                />
                <SignupInput
                value={age.value}
                onChange={changeAge}
                label="Idade"
                type="age"
                />
                <SignupInput
                value={gender.value}
                onChange={changeGender}
                label="Gênero"
                type="gender"
                />
                 <SignButtom onClick={submit} text="FINALIZAR CADASTRO" />
            </div>
        </div>
        </div>
        
    );
};

export default Signup;