
export default function Header({ message }) {


    return (
        <div className="container">
            <h1>INVIA I TUOI DATI</h1>
            {message.text && <p className={`text-${message.type}`}>{message.text}</p>}
        </div>
    )
}