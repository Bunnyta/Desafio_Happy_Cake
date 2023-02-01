export default function Contact() {
    return (
        <div className="Form text-center">
            <p className="fs-1  mt-5">Cuentanos, ¿En que te podemos ayudar?</p>
            <div className="item mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Correo:</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="item mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Descripción</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <button type="button" className="btn btn-danger mt-3">Enviar</button>
            </div>
        </div>
    )
}  
