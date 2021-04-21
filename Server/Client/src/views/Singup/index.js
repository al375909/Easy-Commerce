import SingupForm from "./components/SingupForm";

export default function Singup() {

    const goHome = () => { // props.history.push("/");
    }

    return (
        <SingupForm goHome={goHome}></SingupForm>
    );

}
