import LoginForm from "./components/LoginForm";
import { useParams } from "react-router-dom";

export default function Login(props) {

    


    const goHome = () => {
        props.history.push("/");
    }

    return (
    
        <LoginForm goHome={goHome}></LoginForm>
    );

}
