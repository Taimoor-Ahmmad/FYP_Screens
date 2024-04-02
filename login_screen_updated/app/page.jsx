import Image from "next/image";
import ContactForm from "./components/ContactForm";
import bannerImage from "../public/Login_Vector.png";
import "../app/styles/Styles.css"; 
import Button from "./components/Button";
export default function Home() {
 return (
    <div className="login_desktop flexflex-col sm:flex-row items-center justify-center min-h-screen bg-cover bg-center bg-Login_Desktop">
      <div className="desktop-view flex flex-col  justify-center mr-1 pl-3 sm:flex-row">
        <div className="image-container flex pt-5 flex-col items-center justify-center">
          <Image src={bannerImage} width={400} height={400} />
          <h1 className="text-white text-5xl mt-10 pb-4">Roll the Carpet!</h1>
          <Button title="Click me to get back"/>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
      {/* Mobile View*/}
      <div className="mobile-view sm:hidden">
        <ContactForm />
      </div>
    </div>
 );
}
