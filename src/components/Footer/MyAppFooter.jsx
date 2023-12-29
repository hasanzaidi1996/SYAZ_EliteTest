import {
  Button,
  Center,
  Container,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconArrowRight,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconPhone,
} from "@tabler/icons-react";
import classes from "./MyAppFooter.module.css";

const MyAppFooter = () => {
  const icons = [
    <IconBrandTwitter key={1} />,
    <IconBrandFacebook key={2} />,
    <IconBrandInstagram key={3} />,
    <IconBrandLinkedin key={4} />,
  ];
  return (
    <Paper className={classes.wrapper}>
      <Container size="xl">
        <Grid>
          <Grid.Col span={4}>
            <Center>
              <Stack justify="space-between" h={300}>
                <Title tt="uppercase" className={classes.title}>
                  Subscribe Our Email
                </Title>
                <div>
                  <TextInput
                    styles={{
                      input: {
                        backgroundColor: "#01113c",
                        // opacity: "0.5",
                        border: "1px solid #010C29",
                      },
                    }}
                    className={classes.input}
                    placeholder="Email Address"
                  />
                  <Button
                    className={classes.button}
                    variant="filled"
                    fullWidth
                    rightSection={<IconArrowRight size={14} />}
                  >
                    Submit Now
                  </Button>
                </div>
                <Group>
                  <ThemeIcon size="xl" color="#19284E" radius="md">
                    <IconPhone />
                  </ThemeIcon>
                  <Text className={classes.phone}>+1 (559) 3809094</Text>
                </Group>
              </Stack>
            </Center>
          </Grid.Col>
          <Grid.Col span={4}>
            <Center>
              <Stack justify="space-between" h={300}>
                <Title tt="uppercase" className={classes.title2}>
                  Locum Tenens
                </Title>
                <Stack>
                  <Text p={0} className={classes.question}>
                    What is Locum Tenens?
                  </Text>
                  <Text p={0} className={classes.question}>
                    Why Work Locum Tenens?
                  </Text>
                  <Text p={0} className={classes.question}>
                    Work With Imperial Locum!
                  </Text>
                </Stack>
                <Stack>
                  <Text td="underline" p={0} className={classes.question}>
                    Privacy
                  </Text>
                  <Text td="underline" p={0} className={classes.question}>
                    Terms & Conditions
                  </Text>
                </Stack>
              </Stack>
            </Center>
          </Grid.Col>
          <Grid.Col span={4}>
            <Center>
              <Stack justify="space-between" h={300}>
                <Title tt="uppercase" className={classes.title2}>
                  About Imperial Locum
                </Title>
                <Stack>
                  <Text p={0} className={classes.question}>
                    Our Story
                  </Text>
                  <Text p={0} className={classes.question}>
                    Our People
                  </Text>
                </Stack>
                <Group>
                  {icons.map((icon, index) => (
                    <ThemeIcon
                      key={index}
                      size="xl"
                      color="#19284E"
                      radius="md"
                    >
                      {icon}
                    </ThemeIcon>
                  ))}
                </Group>
              </Stack>
            </Center>
          </Grid.Col>
        </Grid>
      </Container>
    </Paper>
  );
};

export default MyAppFooter;
