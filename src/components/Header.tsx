import { GiHamburgerMenu } from "react-icons/gi";

const Header = (props: any) => {
  const openSideBar = () => {
    props.handleSidebar();
  };

  return (
    <div className="bg-blue-500 text-white h-8 flex justify-between cursor-pointer">
      <div>
        <GiHamburgerMenu onClick={openSideBar} />
      </div>
      <div>Sprint Capacity</div>
      <div>77</div>
    </div>
  );
};

export default Header;
