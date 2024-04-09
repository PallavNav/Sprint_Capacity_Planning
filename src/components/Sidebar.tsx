
import { useNavigate } from "react-router-dom";

export default function Sidebar(props: any) {

  const navigate = useNavigate();
  const handleRouteSelection = (route:string) => {
    navigate(`/${route}`);
    props.handleSidebar();
    console.log(
      "🚀 ~ handleRouteSelection ~ handleRouteSelection:",
      handleRouteSelection
    );
  };

  return (
    <div className="h-lvh w-48 bg-cyan-500">
      <ul>
        <li onClick={() => handleRouteSelection('createSprint')} className="cursor-pointer">ABC</li>
        <li onClick={() => handleRouteSelection('createSprint')} className="cursor-pointer">DEF</li>
        <li onClick={() => handleRouteSelection('createSprint')} className="cursor-pointer">GHI</li>
      </ul>
    </div>
  );
}
