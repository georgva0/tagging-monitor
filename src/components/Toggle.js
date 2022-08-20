import React, { Component } from "react";
import { Collapse, Button, Table } from "reactstrap";

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
                <th scope="row" className="bg-success text-white text-center">
                  Green
                </th>
                <td>Tagging is optimal</td>
              </tr>
              <tr>
                <th scope="row" className="bg-danger text-white text-center">
                  Red
                </th>
                <td>Article is missing a tag category / has too many tags</td>
              </tr>
              <tr>
                <th scope="row" className="bg-warning text-white text-center">
                  Orange
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
