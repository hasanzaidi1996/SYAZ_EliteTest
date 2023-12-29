import { Rating, Table } from "@mantine/core";
import classes from "./ProductsTable.module.css";

const ProductsTable = ({ data }) => {
  const rows = data?.map((element) => (
    <Table.Tr key={element.name} className={classes.tableRow}>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.email}</Table.Td>
      <Table.Td>{element.productName}</Table.Td>
      <Table.Td>
        <Rating value={element.rating} readOnly />
      </Table.Td>
      <Table.Td>
        <button className={classes.button}>View Details</button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table
      stickyHeader
      // stickyHeaderOffset={60}
      verticalSpacing="md"
      withRowBorders={false}
    >
      <Table.Thead className={classes.tableHead}>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Email</Table.Th>
          <Table.Th>Product Email</Table.Th>
          <Table.Th>Rating</Table.Th>
          <Table.Th>Action</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};
export default ProductsTable;
