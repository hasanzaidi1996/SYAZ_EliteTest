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
import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import classes from "./AllProducts.module.css";
import axios from "axios";

export function AllProducts() {
  const [value, setValue] = useState(0);
  const [modalOpened, setModalOpened] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request using Axios
        const response = await axios.get("http://localhost:3000/products");
        console.log(response.data.products);
        setProducts(response.data.products);
      } catch (error) {
        // setError(error);
        console.log(error);
      } finally {
        // setLoading(false);
        console.log("finally");
      }
    };

    fetchData();
  }, []);

  // const products = [
  //   {
  //     title: "Product Management Tool",
  //     description:
  //       "Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum. Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum...",
  //     price: "$200",
  //   },
  //   {
  //     title: "Inventory Management Product",
  //     description:
  //       "Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum. Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum...",
  //     price: "$200",
  //   },
  //   {
  //     title: "Hospital Management System",
  //     description:
  //       "Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum. Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum...",
  //     price: "$200",
  //   },
  // ];
  const emailRegex = /\S+@\S+\.\S+/;
  const submitRating = async () => {
    if (!name) {
      setNameError("Please enter your name");
      return;
    }

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    const data = {
      name,
      email,
      rating: value,
      productName: currentProduct.title,
    };
    try {
      // Make a POST request using Axios
      const response = await axios.post(
        "http://localhost:3000/productListing",
        data
      );
      console(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finally");
    }

    setEmail("");
    setName("");
    setValue(0);
    setModalOpened(false);

    // console.log(data);
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
              {products?.map((product, index) => {
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
