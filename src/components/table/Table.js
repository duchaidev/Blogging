import React from "react";
import styled from "styled-components";
const TableStyles = styled.div`
  overflow-x: auto;
  /* background-color: white; */
  border-radius: 10px;
  table {
    width: 100%;
  }
  thead {
    background-color: #788da9;
  }
  th,
  td {
    vertical-align: middle;
  }
  th {
    padding: 20px 30px;
    font-weight: 600;
    text-align: left;
  }
  td {
    padding: 15px 30px;
    color: white;
  }
  tbody {
  }
`;
const Table = ({ children }) => {
  return (
    <TableStyles>
      <table>{children}</table>
    </TableStyles>
  );
};

export default Table;
