import { Suspense, useEffect } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import "./styles/App.scss";
import "./styles/mobile.scss";
import "./styles/media.scss";
import { CollapseProvider } from "./providers/CollapseProvider";
import { TariffProvider } from "./providers/TariffProvider";

function App() {
  const hash = location.hash;

  useEffect(() => {
    if (!hash) return;

    const tryScroll = () => {
      const el = document.querySelector(hash);

      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        setTimeout(tryScroll, 50);
      }
    };

    tryScroll();
  }, [hash]);

  return (
    <Suspense fallback="">
      <CollapseProvider>
        <TariffProvider>
          <Header />
          <Content />
        </TariffProvider>
      </CollapseProvider>
    </Suspense>
  );
}

export default App;
