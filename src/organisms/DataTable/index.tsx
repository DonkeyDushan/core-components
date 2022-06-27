import { useState } from "react";
import { Table } from "rsuite";
const { Column, Cell, HeaderCell } = Table;
import 'rsuite-table/dist/css/rsuite-table.css';

export const DataTable = () => {
  const data = [
    { firstName: "Gourav", lastName: "Hammad", city: "Mhow" },
    { firstName: "Rithik", lastName: "Verma", city: "Indore" },
    { firstName: "Kartik", lastName: "Malik", city: "Raipur" },
    { firstName: "Nikhil", lastName: "Kapoor", city: "Rau" },
    { firstName: "Ayush", lastName: "Singh", city: "Dewas" }
  ];

  const [sortColumn, setSortColumn] = useState();
  const [sortType, setSortType] = useState();
  const [loading, setLoading] = useState(false);

  const getData = () => {
    if (sortColumn && sortType) {
      return data.sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];
        if (typeof x === 'string') {
          x = x.charCodeAt();
        }
        if (typeof y === 'string') {
          y = y.charCodeAt();
        }
        if (sortType === 'asc') {
          return x - y;
        } else {
          return y - x;
        }
      });
    }
    return data;
  };

  const handleSortColumn = (sortColumn: any, sortType: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSortColumn(sortColumn);
      setSortType(sortType);
    }, 500);
  };

  return (
    <div style={{
      display: "block", width: 700, paddingLeft: 30
    }}>
      <h4>React Suite Table Component</h4>
      <Table
        height={500}
        data={getData()}
        sortColumn={sortColumn}
        onSortColumn={handleSortColumn}
      >
        <Column width={200} sortable fixed resizable>
          <HeaderCell>First Name</HeaderCell>
          <Cell dataKey="firstName" />
        </Column>
        <Column width={200} sortable fixed resizable>
          <HeaderCell>Last Name</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>
        <Column width={200} sortable resizable>
          <HeaderCell>City</HeaderCell>
          <Cell dataKey="city" />
        </Column>
      </Table>
    </div>
  );
};
