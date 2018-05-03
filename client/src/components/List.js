import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, CardHeader, CardBody, Container, Table } from "reactstrap";
//import FontAwesomeIcon from "@fortawesome/react-fontawesome";
//import "./List.css";

class List extends React.Component {

  state = {
    items: []
  };

  componentDidMount() {
    axios.get("/api/item")
    .then(res => {
      this.setState( {
        items: res.data
      });
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <h4>{"Unamed List"}</h4>
        </CardHeader>
        <CardBody>
          <Container>
            {/*<h5>
              <Link to="/create">
                <FontAwesomeIcon icon="plus-circle" /> Add Item
              </Link>
            </h5>*/}
            <Table hover striped responsive>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Location</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                { this.state.items.map(item =>
                  <tr>
                    <td className="name"> {item.name}</td>
                    <td className="location"> {item.location}</td>
                    <td className="price"> {item.price}</td>
                  </tr>
                  )
                }
              </tbody>
            </Table>
          </Container>
        </CardBody>
      </Card>
    )
  }
}

export default List;
