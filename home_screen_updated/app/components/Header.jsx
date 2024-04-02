import Logo from "./Logo ";
const Header = () => {
  return (
    <header className="bg-Home_Desktop sticky top-0 z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-500 p-2">
      <Logo/>
    </header>
  );
};

export default Header;
