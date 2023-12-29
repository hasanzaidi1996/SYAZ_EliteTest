import {
  Button,
  Center,
  Divider,
  Group,
  Paper,
  Rating,
  Text,
  Title,
} from "@mantine/core";
import { IconWallet } from "@tabler/icons-react";
import classes from "./ProductCard.module.css";

export const ProductCard = ({ product, setValue, value }) => {
  const { title, description, price } = product;
  return (
    <Paper className={classes.wrapper}>
      <Title className={classes.title}>{title}</Title>
      <Text className={classes.description}>{description}</Text>
      <Divider className={classes.divider} />
      <Group className={classes.group}>
        <Group>
          <IconWallet />
          <Text className={classes.price}>{price}</Text>
        </Group>
        <Rating value={value} onChange={setValue} size={25} />
      </Group>
      <Center mt="xl">
        <Button className={classes.button} size="lg">
          Show Details
        </Button>
      </Center>
    </Paper>
  );
};
