// Button component
const Button = ({ title }) => {
  return (
     <button className="w-full h-14 px-2.5 py-3.5 bg-gradient-to-r from-blue-600 via-blue-800 to-blue-950 rounded-xl flex justify-center items-center text-white text-xl font-semibold font-['Noto_Sans']">
         {title}
     </button>
  );
 };
export default Button; 