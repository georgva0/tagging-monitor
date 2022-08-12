import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Container, Row, Col } from "reactstrap";

function HomePage() {
  const [scores, setScores] = useState();

  useEffect(() => {
    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/13YqOJHhi2lrt4hFMQ4FdZ6rv2N_Gf9oyMg2fdObTn4E/values/data!A2:B40?key=${process.env.REACT_APP_GOOGLE_CLOUD_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setScores(data.values));
  }, []);

  //return JSON.stringify(scores || "");

  return (
    <Container className="content-container">
      {" "}
      <>
        <Row>
          <Col md="11">
            <h3 className="mt-5">
              What WS team is the best at tagging articles?{" "}
            </h3>
            <p className="mt-4">
              This web application monitors the latest <strong>10</strong>{" "}
              published items published by each BBC World Service language and
              scores them by the quality of tagging. (Update interval:{" "}
              <span className="text-danger">
                <strong>15</strong>
              </span>{" "}
              min)
            </p>
            <p>
              An article gets maximum points if it has{" "}
              <strong>
                <span className="text-danger">1</span>
              </strong>{" "}
              <strong>Audience Motivation </strong>
              tag,{" "}
              <strong>
                <span className="text-danger">3-5</span>
              </strong>{" "}
              <strong>About </strong> tags and{" "}
              <strong>
                <span className="text-danger">1</span>
              </strong>{" "}
              <strong>Format</strong> tag. The maximum number of points a
              service can accumulate is <strong>30</strong>.
            </p>
          </Col>
        </Row>

        <Row>
          <Table striped borderless hover>
            <thead>
              <tr>
                <th>Language service</th>
                <th>Tagging score</th>
              </tr>
            </thead>
            <tbody>
              {scores &&
                scores.map((score, key) => (
                  <tr key={score[0]}>
                    <td>
                      <a
                        href={"/" + score[0]}
                        className="text-dark text-decoration-none underline"
                      >
                        {score[0].toUpperCase() === "PORTUGUESE"
                          ? "BRAZIL"
                          : score[0].toUpperCase() === "ZHONGWEN/SIMP"
                          ? "CHINESE"
                          : score[0].toUpperCase() === "SERBIAN/LAT"
                          ? "SERBIAN"
                          : score[0].toUpperCase()}
                      </a>
                    </td>
                    <td>{score[1]}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Row>
      </>
    </Container>
  );
}

export default HomePage;
