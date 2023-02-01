import img from "../assets/birthday-cake.png"

export default function Home() {
    return (
        <div className="Container text-center">
            <p className="fs-1  mt-5">Bienvenido a <b>Happy Cake</b></p>
            <p className="fs-5 r">El lugar de los pasteles felices</p>
           <img className="cake " src={img} alt="cake " />
        </div>
    );
} 