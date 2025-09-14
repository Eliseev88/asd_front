import { Suspense } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import "./styles/App.scss";
import "./styles/mobile.scss";
import "./styles/media.scss";
import { CollapseProvider } from "./providers/CollapseProvider";
import { TariffProvider } from "./providers/TariffProvider";

function App() {
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
