import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { Table } from "reactstrap";
//import HomepageTable from "../components/HomepageTable";
import { Container, Row, Col } from "reactstrap";

const HomePage = () => {
  const [scores, setScores] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      //`https://sheets.googleapis.com/v4/spreadsheets/13YqOJHhi2lrt4hFMQ4FdZ6rv2N_Gf9oyMg2fdObTn4E/values/data!A1:B40?key=${process.env.REACT_APP_GOOGLE_CLOUD_KEY}`
      `https://sheets.googleapis.com/v4/spreadsheets/13YqOJHhi2lrt4hFMQ4FdZ6rv2N_Gf9oyMg2fdObTn4E/values/data!A1:B40?key=AIzaSyBv7Lm0OUj3hPTgcVoep2PyZBz6G2dTOrA`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setScores(data);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  console.log(scores);

  return (
    <Container className="content-container">
      <>
        <Row>
          <Col md="11">
            <h3 className="mt-5">
              What WS team is the best at tagging articles?{" "}
            </h3>
            <p className="mt-4">
              This web application monitors the latest <strong>10</strong>{" "}
              published items published by each BBC World Service language and
              scores them by the quality of tagging (update interval:{" "}
              <span className="text-danger">
                <strong>15</strong>
              </span>{" "}
              min).
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
          <Table hover>
            <thead>
              <tr>
                <th>Language service</th>
                <th>Tagging score</th>
              </tr>
            </thead>
            <tbody>
              {isLoading && <Loader />}
              {scores &&
                scores.values.map((score, key) => {
                  <tr key={key}>
                    <th scope="row">
                      <a
                        href={`/{score[0]}`}
                        className="text-dark text-decoration-none underline"
                      >
                        {score[0].toUpperCase()}
                      </a>
                    </th>
                    <td>{score[1]}</td>
                  </tr>;
                })}
            </tbody>
          </Table>
        </Row>

        {/* <Row>
          <Table hover>
            <thead>
              <tr>
                <th>Service</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <a
                    href="https://www.bbc.com/amharic"
                    className="text-dark text-decoration-none underline"
                  >
                    Amharic
                  </a>
                </th>
                <td>29</td>
              </tr>
              <tr>
                <th scope="row">
                  <a
                    href="https://www.bbc.com/amharic"
                    className="text-dark text-decoration-none underline"
                  >
                    Afrique
                  </a>
                </th>
                <td>29</td>
              </tr>
              <tr>
                <th scope="row">
                  <a
                    href="https://www.bbc.com/amharic"
                    className="text-dark text-decoration-none underline"
                  >
                    Mundo
                  </a>
                </th>
                <td>29</td>
              </tr>
            </tbody>
          </Table>
        </Row> */}
      </>
    </Container>
  );
};

export default HomePage;
