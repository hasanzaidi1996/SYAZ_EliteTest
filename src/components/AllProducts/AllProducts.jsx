import {
  Button,
  Center,
  Container,
  Grid,
  Modal,
  Overlay,
  Rating,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import classes from "./AllProducts.module.css";

export function AllProducts() {
  const [value, setValue] = useState(0);
  const [modalOpened, setModalOpened] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

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
  const submitRating = () => {
    if (!name || !email) {
      if (!name) setNameError("Please enter your name");
      if (!email) setEmailError("Please enter your email");
      return;
    }

    const data = {
      name,
      email,
      rating: value,
      productName: currentProduct.title,
    };
    setEmail("");
    setName("");
    setValue(0);
    setModalOpened(false);

    console.log(data);
  };
  return (
    <Container size="1360px">
      <div className={classes.wrapper}>
        <Overlay color="#ffffff" opacity={1} zIndex={1} />
        <Modal
          opened={modalOpened}
          onClose={() => setModalOpened(false)}
          centered
        >
          <Text size="xl" align="center">
            {currentProduct?.title}
          </Text>
          <Center>
            <Rating
              my="xl"
              value={value}
              onChange={(event) => {
                setValue(event);
              }}
              size={25}
            />
          </Center>
          <TextInput
            label="Name"
            error={nameError}
            size="md"
            placeholder="Enter Your Name"
            value={name}
            onChange={(event) => {
              setNameError("");
              setName(event.currentTarget.value);
            }}
          />
          <TextInput
            type="email"
            error={emailError}
            label="Email"
            size="md"
            my="xl"
            placeholder="Enter Your Email Address"
            value={email}
            onChange={(event) => {
              setEmailError("");
              setEmail(event.currentTarget.value);
            }}
          />
          <Button
            size="lg"
            fullWidth
            className={classes.button}
            onClick={submitRating}
          >
            Submit
          </Button>
        </Modal>

        <Container size="1170px">
          <div className={classes.inner}>
            <Title className={classes.title}>VIEW OUR PRODUCTS</Title>

            <Text size="lg" className={classes.description}>
              Lorem Ipsum has been the industry&aposs standard the dummy text
              ever Lorem Ipsum has been the industry&aposs standard. dummy text
              ever
            </Text>
            <Grid pt="xl" align="center" justify="center">
              {products.map((product, index) => {
                return (
                  <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={index}>
                    <Center>
                      <ProductCard
                        product={product}
                        setCurrentProduct={setCurrentProduct}
                        setValue={setValue}
                        value={value}
                        setModalOpened={setModalOpened}
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
