import { Burger, Container, Drawer, Group, Image, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import classes from "./MyAppHeader.module.css";

const links = [
  { link: "/", label: "Home" },
  { link: "/listing", label: "Product Listing" },
];

const MyAppHeader = () => {
  const navigate = useNavigate();
  const [opened, { toggle }] = useDisclosure(false);
  // const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Text
      key={link.label}
      className={classes.link}
      onClick={() => navigate(link.link)}
    >
      {link.label}
    </Text>
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
