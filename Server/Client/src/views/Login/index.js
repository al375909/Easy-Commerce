import LoginForm from "./components/LoginForm";

export default function Login(props) {

    const goHome = () => {
        props.history.push("/");
    }

    return (
        <LoginForm goHome={goHome}></LoginForm>
    );

}
