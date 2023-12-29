// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { MyAppShell } from "./components/MyAppShell/MyAppShell";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductListingPage from "./pages/ProductListingPage/ProductListingPage";

export default function App() {
  return (
    <MantineProvider
      theme={{
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Routes>
        <Route element={<MyAppShell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/listing" element={<ProductListingPage />} />
        </Route>
      </Routes>
    </MantineProvider>
  );
}
