import Image from "next/image";
import ContactForm from "./components/ContactForm";
import bannerImage from "../public/Forgot_Vector.png";
import "../app/styles/Styles.css";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="flex flex-col back_desktop sm:flex-row items-center justify-center min-h-screen bg-cover bg-center">
      <div className="desktop-view flex flex-col  justify-center mr-1 pl-3 sm:flex-row">
        <div className="image-container flex flex-col items-center justify-center">
          <Image src={bannerImage} width={400} height={400} />
          <h1 className="text-white text-5xl mt-10 pb-2">Roll the Carpet!</h1>
          
            <Button title={"Take me back!"} />
        
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
      <div className="mobile-view sm:hidden">
        <ContactForm />
      </div>
    </div>
  );
}
