import { useContext, useEffect } from "react";
import { CollapseContext } from "../providers/CollapseContext";
import { TariffContext } from "../providers/TariffContext";
import { TARIFF_OBJ } from "../data/tarrifs";
import Background from "./Background";
import Advantages from "./Advantages";
import Footer from "./Footer";
import Tariffs from "./Tariffs";
import FAQ from "./FAQ";
import Contacts from "./Contacts";
import "../styles/Content.scss";

function Content() {
  const { toggleCollapse } = useContext(CollapseContext);
  const { changeTariffCollapse } = useContext(TariffContext);

  useEffect(() => {
    const collapseLangSwitcher = () => {
      toggleCollapse(true);
    };
    
    const collapseTariffs = () => {
      changeTariffCollapse(TARIFF_OBJ)
    }

    window.addEventListener("click", collapseLangSwitcher);
    window.addEventListener("click", collapseTariffs);

    return () => {
      window.removeEventListener("click", collapseLangSwitcher);
      window.removeEventListener("click", collapseTariffs);
    };
  }, []);

  return (
    <div id="content">
      <div className="content">
        <div id="overlay" className="overlay"></div>
        <div className="wrapper">
          <Background />
          <Advantages />
          <Tariffs />
          <FAQ />
          <Contacts />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Content;
