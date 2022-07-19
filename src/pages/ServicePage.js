import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import {
  Container,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
  Row,
  Col,
  Badge,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { useParams } from "react-router-dom";
import services from "../listings/services";
import NotFound from "./NotFound";
import Toggle from "../components/Toggle";

const ServicePage = () => {
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { service } = useParams();
  const serviceIdentifier = services.find(
    (serviceIdentifier) => serviceIdentifier.serviceUrl === service
  );

  //   useEffect(() => {
  //     fetch(`http://localhost:8000/api/${region}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data) {
  //           setArticles(data);
  //         }
  //       })
  //       .catch((error) => console.log(error))
  //       .finally(() => {
  //         setIsLoading(false);
  //       });
  //   }, [region]);

  if (!serviceIdentifier) return <NotFound />;

  return (
    <Container className="content-container">
      <Row>
        <Col md="11">
          <h3 className="mt-5">
            {" "}
            <span className="text-danger">
              {serviceIdentifier.serviceName}
            </span>{" "}
            ｜ Tagging performance report
          </h3>
          <p className="mt-4">
            {" "}
            Tagging is optimal if each article has{" "}
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
            <strong>Format</strong> tag.
          </p>

          <Toggle />

          <Table hover>
            <thead>
              <tr>
                <th>Article</th>
                <th>Motivation</th>
                <th>About</th>
                <th>Format</th>
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
                    ¿Fin del pacifismo en Japón? La polémica reforma
                    constitucional por la que puede cambiar el papel de los
                    militares en ese país asiático
                  </a>
                </th>
                <td className="text-success">1</td>
                <td className="text-success">4</td>
                <td className="text-success">1</td>
                <td>3</td>
              </tr>
              <tr>
                <th scope="row">
                  <a
                    href="https://www.bbc.com/amharic"
                    className="text-dark text-decoration-none underline"
                  >
                    ¿Por qué ya no progresamos como progresábamos antes?
                  </a>
                </th>
                <td className="text-danger">0</td>
                <td className="text-danger">0</td>
                <td className="text-danger">0</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">
                  <a
                    href="https://www.bbc.com/amharic"
                    className="text-dark text-decoration-none underline"
                  >
                    ¿Por qué ya no progresamos como progresábamos antes?
                  </a>
                </th>
                <td className="text-danger">0</td>
                <td className="text-warning">2</td>
                <td className="text-success">1</td>
                <td>1</td>
              </tr>
              <tr>
                <th scope="row">
                  <a
                    href="https://www.bbc.com/amharic"
                    className="text-dark text-decoration-none underline"
                  >
                    ¿Por qué ya no progresamos como progresábamos antes?
                  </a>
                </th>
                <td className="text-success">1</td>
                <td className="text-warning">7</td>
                <td className="text-danger">0</td>
                <td>1</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );

  //   return (
  //     <Container className="content-container">
  //       <Row>
  //         <Col md="10">
  //           <h3 className="mt-5">
  //             {" "}
  //             <span className="text-danger">{regionName.serviceName}</span> region
  //             ｜ Articles becoming popular
  //           </h3>
  //           <p className="mt-4">
  //             This application uses the{" "}
  //             <a
  //               href="https://docs.chartbeat.com/cbp/api/real-time-apis"
  //               className="text-dark text-decoration-none underline"
  //             >
  //               Chartbeat API
  //             </a>{" "}
  //             to identify WS languages articles recently accessed by an increasing
  //             number of visitors. Titles are automatically translated with{" "}
  //             <a
  //               href="https://www.microsoft.com/en-us/translator/business/translator-api/"
  //               className="text-dark text-decoration-none underline"
  //             >
  //               Microsoft Translator
  //             </a>{" "}
  //             where possible.
  //           </p>
  //           <p>
  //             Use the menu to view selections of articles popular in other{" "}
  //             <a
  //               href="https://www.bbc.co.uk/ws/languages"
  //               className="text-dark text-decoration-none underline"
  //             >
  //               BBC World Service
  //             </a>{" "}
  //             regions.
  //           </p>
  //         </Col>
  //       </Row>
  //       <>
  //         <Row md="4" sm="2" xs="1" className="mt-3">
  //           {isLoading && <Loader />}
  //           {articles &&
  //             articles.map((article, key) => (
  //               <Col key={key}>
  //                 {" "}
  //                 <Card className="border-0">
  //                   <Badge color="secondary" className="mb-2">
  //                     BBC NEWS |{" "}
  //                     {article.section.toUpperCase() === "PORTUGUESE"
  //                       ? "BRAZIL"
  //                       : article.section.toUpperCase()}
  //                   </Badge>
  //                   <a href={`https://${article.url}`} className="stretched-link">
  //                     <CardImg
  //                       alt={article.imageAlt}
  //                       src={article.imageHref}
  //                       top
  //                       width="100%"
  //                     />
  //                   </a>

  //                   <CardBody className="mx-0 px-0">
  //                     <CardTitle tag="h5">{article.translatedTitle} </CardTitle>
  //                     <CardSubtitle className="mb-2 text-muted" tag="h6">
  //                       {article.lastPublished}
  //                     </CardSubtitle>
  //                   </CardBody>
  //                 </Card>
  //               </Col>
  //             ))}
  //         </Row>
  //       </>
  //     </Container>
  //   );
};

export default ServicePage;
