import React from 'react';
import { Button, Col, Grid, Row } from 'react-bootstrap';

const SummaryGuest = () => (
  <Grid>
    <Row>
      <Col md={12}>
        <Button bsStyle="primary" href="/post">Posts</Button>
      </Col>
    </Row>
  </Grid>
);

export default SummaryGuest;
