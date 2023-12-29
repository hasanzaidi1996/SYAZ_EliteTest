import {
  Center,
  Container,
  Grid,
  Overlay,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import classes from "./AllProducts.module.css";
import { useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";

export function AllProducts() {
  const [value, setValue] = useState(0);

  const products = [
    {
      title: "Product 1",
      description:
        "Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum. Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum...",
      price: "$10.00",
    },
    {
      title: "Product 2",
      description:
        "Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum. Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum...",
      price: "$20.00",
    },
    {
      title: "Product 3",
      description:
        "Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum. Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum...",
      price: "$30.00",
    },
  ];
  return (
    <Container size="1360px">
      <div className={classes.wrapper}>
        <Overlay color="#ffffff" opacity={1} zIndex={1} />

        <Container size="1170px">
          <div className={classes.inner}>
            <Title className={classes.title}>VIEW OUR PRODUCTS</Title>

            <Text size="lg" className={classes.description}>
              Lorem Ipsum has been the industry's standard the dummy text ever
              Lorem Ipsum has been the industry's standard. dummy text ever
            </Text>
            <Grid pt="xl" align="center" justify="center">
              {products.map((product, index) => {
                return (
                  <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={index}>
                    <Center>
                      <ProductCard
                        product={product}
                        value={value}
                        setValue={setValue}
                      />
                    </Center>
                  </Grid.Col>
                );
              })}
            </Grid>
          </div>
        </Container>
      </div>
    </Container>
  );
}
