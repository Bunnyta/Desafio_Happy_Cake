import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center">
       <p className="fs-1  mt-5 text-center">Not Found</p>
       <Link className="link" to="/Home">   click <b>Aqui</b> para volver al Home</Link>
    </div>
  );
}
