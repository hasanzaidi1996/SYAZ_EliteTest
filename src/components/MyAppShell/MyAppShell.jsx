import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";
import MyAppFooter from "../Footer/myAppFooter";
import MyAppHeader from "../Header/myAppHeader";
import RightsFooter from "../RightsFooter/RightsFooter";

export const MyAppShell = () => {
  return (
    <AppShell header={{ height: 76 }}>
      <AppShell.Header>
        <MyAppHeader />
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
        <MyAppFooter />
        <RightsFooter />
      </AppShell.Main>
    </AppShell>
  );
};
