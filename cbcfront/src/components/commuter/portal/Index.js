import Sidebar from "../../common/sidebar/Sidebar";
import PortalRoutes from "./routes/Index";
import PortalBuses from "./bus/Index";
import PortalBusStops from "./busstops/Index";
import { MainWrapper } from "../../common/lib/layout/Index";
import Home from "./Home";

const Desk = (props) => {
  let component;
  switch (props.path) {
    case "routes":
      component = <PortalRoutes />;
      break;
    case "buses":
      component = <PortalBuses />;
      break;
    case "busstops":
      component = <PortalBusStops />;
      break;

    default:
      component = <Home />;
      break;
  }
  return (
    <MainWrapper sidebar={<Sidebar for="portal" />}>{component}</MainWrapper>
  );
};
export default Desk;
