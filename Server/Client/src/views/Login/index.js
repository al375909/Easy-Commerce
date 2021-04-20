import LoginForm from "./components/LoginForm";
import Header from "../../components/Header";

export default function Login(props){

    const goHome = () =>{
        props.history.push("/");
    }

    return(
       
        <LoginForm goHome={goHome}></LoginForm>
        
    );

}