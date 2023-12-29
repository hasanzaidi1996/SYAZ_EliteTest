import { AppShell } from "@mantine/core";
import HomePage from "../../pages/HomePage/HomePage";
import MyAppFooter from "../Footer/myAppFooter";
import MyAppHeader from "../Header/myAppHeader";
import RightsFooter from "../RightsFooter/RightsFooter";
import ProductListingPage from "../../pages/ProductListingPage/ProductListingPage";

export const MyAppShell = () => {
  return (
    <AppShell header={{ height: 76 }}>
      <AppShell.Header>
        <MyAppHeader />
      </AppShell.Header>

      <AppShell.Main>
        <HomePage />
        {/* <ProductListingPage /> */}
        <MyAppFooter />
        <RightsFooter />
      </AppShell.Main>
    </AppShell>
  );
};
