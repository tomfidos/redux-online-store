import './Views.css';

const Signup = (): JSX.Element => {
    return (
        <form className="form">
            <input className="input" placeholder="Nazwa użytkownika" />
            <input className="input" placeholder="Email" />
            <input className="input" placeholder="Hasło" />
            <input className="input" placeholder="Powtórz hasło" />
            <div>
                <button className="button" type="submit">Zarejestruj się</button>
            </div>
        </form>
    );
}

export default Signup;
