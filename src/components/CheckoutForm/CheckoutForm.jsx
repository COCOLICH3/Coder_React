import { useState } from "react"


const CheckoutForm = ({onConfirm}) => {
    const[name, setName] = useState('')
    const[phone, setPhone] = useState('')
    const[email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div style={{ maxWidth: "400px", margin: "0 auto", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h2>Checkout Form</h2>
            <form onSubmit={handleConfirm}>
                <div style={{ marginBottom: "1rem" }}>
                    <label style={{ display: "block", marginBottom: "0.5rem" }}>Nombre</label>
                    <input
                        type="text"
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                        placeholder="Tu nombre"
                        style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
                        required
                    />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label style={{ display: "block", marginBottom: "0.5rem" }}>Teléfono</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                        placeholder="Tu teléfono"
                        style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
                        required
                    />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label style={{ display: "block", marginBottom: "0.5rem" }}>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        placeholder="Tu correo electrónico"
                        style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
                        required
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        backgroundColor: "#007BFF",
                        color: "#fff",
                        padding: "0.5rem 1rem",
                        borderRadius: "4px",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Confirmar
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;