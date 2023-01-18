import "bootstrap/dist/css/bootstrap.min.css";

import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import { useCallback, useEffect, useMemo, useState } from "react";

import { TimeDelta } from "./types/TimeDelta";
import { addTimeDelta } from "./timeHelpers";

const defaultTimeDelta: TimeDelta = {
  hours: 0,
  days: 0,
  weeks: 0,
  months: 0,
  years: 0,
};

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [timeDelta, setTimeDelta] = useState(defaultTimeDelta);

  useEffect(() => {
    const interval = setInterval(() => setCurrentDate(new Date()), 1000);

    return () => clearInterval(interval);
  }, []);

  const handleDeltaChange = useCallback(
    (key: keyof typeof timeDelta, value: string) =>
      setTimeDelta((state) => ({ ...state, [key]: parseInt(value) || 0 })),
    []
  );

  const handleDeltaReset = useCallback(() => {
    setTimeDelta(defaultTimeDelta);
  }, []);

  const resultDate = useMemo(
    () => addTimeDelta(currentDate, timeDelta),
    [currentDate, timeDelta]
  );

  return (
    <Container className="vh-100 d-flex align-items-center text-center">
      <Container fluid>
        <Row>
          <Col>
            <Image src="/icon-192x192.png" fluid />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-1 ">from now</h1>
            <p className="lead ">find a date and time in the future</p>
          </Col>
        </Row>
        <Row>
          {Object.keys(timeDelta).map((key: any) => (
            <Col xs={12} lg key={key} className="pb-2">
              <FloatingLabel label={key}>
                <Form.Control
                  type="number"
                  value={Number(
                    timeDelta[key as keyof typeof timeDelta]
                  ).toString()}
                  onChange={(e) => handleDeltaChange(key, e.target.value)}
                />
              </FloatingLabel>
            </Col>
          ))}
        </Row>
        <Row>
          <Col xs md={12}>
            <h2 className="">{resultDate.toLocaleTimeString()}</h2>
            <h2 className="">{resultDate.toLocaleDateString()}</h2>
          </Col>
          <Col xs md={12}>
            <Button variant="secondary" onClick={handleDeltaReset}>
              Reset
            </Button>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </Container>
  );
}

export default App;
