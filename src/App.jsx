// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { MyAppShell } from "./components/MyAppShell/MyAppShell";

export default function App() {
  return (
    <MantineProvider
      theme={{
        fontFamily: "Inter, sans-serif",
      }}
    >
      <MyAppShell />
    </MantineProvider>
  );
}
