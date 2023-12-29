import { Container, Overlay, Text, Title } from "@mantine/core";
import classes from "./HeroHeader.module.css";

export function HeroHeader({ title }) {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Container size="md">
          <Title className={classes.title} tt="uppercase">
            {title}
          </Title>
        </Container>

        <Container size={840}>
          <Text size="lg" className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            tellus neque, malesuada sit amet auctor ac, euismod sed enim. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Donec sed ultricies libero. Morbi porttitor
            semper nibh, bibendum ultricies elit mollis id.
          </Text>
        </Container>
      </div>
    </div>
  );
}
