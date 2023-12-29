import {
  Container,
  Group,
  Pagination,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import classes from "./ProductListingPage.module.css";
import { HeroHeader } from "../../components/HeroHeader/HeroHeader";
import ProductsTable from "../../components/ProductsTable.jsx/ProductsTable";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductListingPage = () => {
  const [elements, setElements] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request using Axios
        const response = await axios.get(
          "http://localhost:3000/productListing"
        );
        setElements(response.data.productListing);
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

  // const elements = [
  //   {
  //     name: "Brad Simmons",
  //     email: "bradsimons@gmail.com",
  //     productName: "Inventory Management System",
  //     rating: 5,
  //   },
  //   {
  //     name: "Brad Simmons",
  //     email: "bradsimons@gmail.com",
  //     productName: "Inventory Management System",
  //     rating: 5,
  //   },
  //   {
  //     name: "Brad Simmons",
  //     email: "bradsimons@gmail.com",
  //     productName: "Inventory Management System",
  //     rating: 5,
  //   },
  //   {
  //     name: "Brad Simmons",
  //     email: "bradsimons@gmail.com",
  //     productName: "Inventory Management System",
  //     rating: 5,
  //   },
  //   {
  //     name: "Brad Simmons",
  //     email: "bradsimons@gmail.com",
  //     productName: "Inventory Management System",
  //     rating: 5,
  //   },
  //   {
  //     name: "Brad Simmons",
  //     email: "bradsimons@gmail.com",
  //     productName: "Inventory Management System",
  //     rating: 5,
  //   },
  //   {
  //     name: "Brad Simmons",
  //     email: "bradsimons@gmail.com",
  //     productName: "Inventory Management System",
  //     rating: 5,
  //   },
  //   {
  //     name: "Brad Simmons",
  //     email: "bradsimons@gmail.com",
  //     productName: "Inventory Management System",
  //     rating: 5,
  //   },
  // ];

  //make pagination logic
  const [activePage, setActivePage] = useState(1);
  const [elementsPerPage] = useState(10);
  //get total number of pages
  const totalPages = Math.ceil(elements.length / elementsPerPage);
  const indexOfLastElement = activePage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  const currentElements = elements.slice(
    indexOfFirstElement,
    indexOfLastElement
  );
  const setPage = (page) => {
    setActivePage(page);
  };

  return (
    <div>
      <HeroHeader title="Listing" />
      <Container className={classes.wrapper} size="1360px">
        <Paper>
          <Title className={classes.title} tt="uppercase">
            List Of Products
          </Title>
          <ProductsTable data={currentElements} />
          <Group justify="flex-end">
            <Pagination
              mt="xl"
              color="#CB4C5B"
              next={<Text>Next</Text>}
              total={totalPages}
              value={activePage}
              onChange={setPage}
            />
          </Group>
        </Paper>
      </Container>
    </div>
  );
};

export default ProductListingPage;
