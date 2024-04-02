// Button component
const Button = ({ title }) => {
  return (
     <button className="w-full h-14 px-2.5 py-3.5 bg-gradient-to-r from-purple-600 via-purple-800 to-purple-950 rounded-xl flex justify-center items-center text-white text-xl font-semibold font-['Noto_Sans']">
         {title}
     </button>
  );
 };
export default Button; 