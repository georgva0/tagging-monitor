import React, { Component } from "react";
import { Collapse, Button, Table, Badge } from "reactstrap";

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Button
          color="light"
          onClick={this.toggle}
          style={{ marginBottom: "1rem" }}
        >
          Expand to view what action is required by each colour highlight
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Table size="sm" borderless>
            <tbody>
              <tr>
                <th scope="row">
                  <Badge class="success">Green</Badge>
                </th>
                <td>Tagging is optimal</td>
              </tr>
              {/* <tr>
                <th scope="row">
                  <Badge color="dark">Black</Badge>
                </th>
                <td>
                  Article is <strong>not</strong> tagged
                </td>
              </tr> */}
              <tr>
                <th scope="row">
                  <Badge color="danger">Red</Badge>
                </th>
                <td>Article is completely missing a tag category</td>
              </tr>
              <tr>
                <th scope="row">
                  <Badge color="warning">Orange</Badge>
                </th>
                <td>Tagging requires improvement</td>
              </tr>
            </tbody>
          </Table>
        </Collapse>
      </div>
    );
  }
}

export default Toggle;
