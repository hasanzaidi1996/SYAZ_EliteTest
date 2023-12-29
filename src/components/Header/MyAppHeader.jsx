import { useState } from "react";
import { Container, Group, Burger, Image, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./MyAppHeader.module.css";

const links = [
  { link: "/", label: "Home" },
  { link: "/listing", label: "Product Listing" },
];

const MyAppHeader = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <Image
          src="https://eliteitteam.com/wp-content/uploads/2023/09/cropped-Elite-IT-Black-copy.png"
          height={40}
          width={60}
        />
        {/* <MantineLogo size={28} /> */}
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        <Drawer
          opened={opened}
          onClose={toggle}
          withCloseButton={false}
          position="left"
          size="sm"
        >
          {items}
        </Drawer>
      </Container>
    </header>
  );
};

export default MyAppHeader;
