/* eslint-disable */
import { Container } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Table from "react-bootstrap/Table";
import NavbarComponent from "../components/NavbarComponent";
import { AiFillCaretDown } from "react-icons/ai";
import { useQuery } from "react-query";
import { API } from "../config/api";
// import transaction from "../fakeData/transaction.json";

function ListTransactionAdmin() {
  document.title = `List Transaction | Dumbflix`;
  let { data: transactions } = useQuery("transactionsCache", async () => {
    const response = await API.get("/transactions");
    console.log("response transactions", response);
    return response.data.data;
  });

  return (
    <>
      <NavbarComponent />
      <div
        className="px-5 pt-5 bg-black text-white "
        // style={{ height: "100vh" }}
      >
        <Container style={{ height: "100vh", background: "black" }}>
          <h2 className="fw-bold mb-5">Incoming Transaction</h2>
          <Table
            striped
            className="table align-middle"
            variant="dark"
            responsive
            style={{ color: "white" }}
          >
            <thead
              className="table align-middle justify-center"
              style={{
                color: "red",
                backgroundColor: "#1F1F1F",
                height: "74px",
              }}
            >
              <tr>
                <th>No</th>
                <th>Users</th>
                <th>Bukti Transfer</th>
                <th>Remaining Active</th>
                <th>Status User</th>
                <th>Status Payment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {transactions?.map((item, index) => {
                return (
                  <tr key={index} style={{ height: "74px" }}>
                    <td>{index + 1}</td>
                    <td>{item.user?.fullName}</td>
                    <td>
                      <u>{item.user?.fullName}.png</u>
                    </td>
                    <td>
                      {" "}
                      0 hari
                      {/* {item.remaining} */}
                    </td>
                    <td
                      className={
                        // item.status == "Active" ?
                        "text-success"
                        // : "text-danger"
                      }
                    >
                      Active
                      {/* {item.Status} */}
                    </td>
                    <td
                      className={
                        item.Status == "Approve"
                          ? "text-success"
                          : item.Status == "pending"
                          ? "text-warning"
                          : "text-danger"
                      }
                    >
                      Active
                      {/* {item.Status} */}
                    </td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle
                          id="dropdown-button-dark-example1"
                          className="position-relative"
                          variant="outline"
                        >
                          <div>
                            <AiFillCaretDown
                              className="position-absolute"
                              style={{
                                color: "#1C9CD2",
                                width: "40px",
                                height: "40px",
                                left: "0",
                                top: "0",
                              }}
                            />
                          </div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="dark" className="bg-black ">
                          <Dropdown.Item
                            className="text-success"
                            value="Approved"
                            name="Approved"
                            // onChange={handleChange}
                          >
                            Approved
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="text-danger"
                            value="Cancel"
                            name="Cancel"
                            // onChange={handleChange}
                          >
                            Cancel
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  );
}

export default ListTransactionAdmin;
