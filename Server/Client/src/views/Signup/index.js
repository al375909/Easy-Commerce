import SignupForm from "./components/SignupForm";

export default function Singup(props) {

    const goHome = () => {
        props.history.push("/");
    }

    return (
        <SignupForm goHome={goHome}></SignupForm>
    );

}
