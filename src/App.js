import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';



// BACKEND IN APP.PY (@ ROOT OF FOLDER)


// function Classifier() {
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      formData: {
        Happy: 0,
        Euphoric: 0,
        Uplifted: 0,
        Relaxed: 0,
        Creative: 0,
        Energetic: 0,
        Stress: 0,
        Anxiety: 0,
        Pain: 0,
        Depression: 0,
        Insomnia: 0,
        Fatigue: 0,
      },
      result: ""
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    var formData = this.state.formData;
    formData[name] = value;
    this.setState({
      formData
    });
  }

  handlePredictClick = (event) => {
    const formData = this.state.formData;
    this.setState({ isLoading: true });
    // fetch('http://127.0.0.1:5000/machine_learning_leafly/ml',
    // fetch('https://www.deplorablesnowflake.org/machine_learning_leafly/ml',
    fetch('/machine_learning_leafly/ml',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(response => {
        this.setState({
          result: response.result,
          isLoading: false
        });
      })
  }

  handleCancelClick = (event) => {
    this.setState({ result: "" });
  }

  render() {
    const isLoading = this.state.isLoading;
    const formData = this.state.formData;
    const result = this.state.result;

    var happys = []
    for (var i = 0; i <= 100; i = +(i + 1).toFixed(1)) {
      happys.push(<option key = {i} value = {i}>{i}</option>);
    }
    var euphorics = []
    for (var i = 0; i <= 100; i = +(i + 1).toFixed(1)) {
      euphorics.push(<option key = {i} value = {i}>{i}</option>);
    }
    var uplifteds = []
    for (var i = 0; i <= 100; i = +(i + 1).toFixed(1)) {
      uplifteds.push(<option key = {i} value = {i}>{i}</option>);
    }
    var relaxeds = []
    for (var i = 0; i <= 100; i = +(i + 1).toFixed(1)) {
      relaxeds.push(<option key = {i} value = {i}>{i}</option>);
    }
    var creatives = []
    for (var i = 0; i <= 100; i = +(i + 1).toFixed(1)) {
      creatives.push(<option key = {i} value = {i}>{i}</option>);
    }
    var energetics = []
    for (var i = 0; i <= 100; i = +(i + 1).toFixed(1)) {
      energetics.push(<option key = {i} value = {i}>{i}</option>);
    }

    var stresses = []
    for (var i = 0; i <= 100; i = +(i + 1).toFixed(1)) {
      stresses.push(<option key = {i} value = {i}>{i}</option>);
    }
    var anxieties = []
    for (var i = 0; i <= 100; i = +(i + 1).toFixed(1)) {
      anxieties.push(<option key = {i} value = {i}>{i}</option>);
    }
    var pains = []
    for (var i = 0; i <= 100; i = +(i + 1).toFixed(1)) {
      pains.push(<option key = {i} value = {i}>{i}</option>);
    }
    var depressions = []
    for (var i = 0; i <= 100; i = +(i + 1).toFixed(1)) {
      depressions.push(<option key = {i} value = {i}>{i}</option>);
    }
    var insomnias = []
    for (var i = 0; i <= 100; i = +(i + 1).toFixed(1)) {
      insomnias.push(<option key = {i} value = {i}>{i}</option>);
    }
    var fatigues = []
    for (var i = 0; i <= 100; i = +(i + 1).toFixed(1)) {
      fatigues.push(<option key = {i} value = {i}>{i}</option>);
    }



    return (
      <Container>
        <div>
          <h1 className="title">Predict A Strain</h1>
        </div>
        <div className="content">

          <Form>

            <Form.Row>

              <Form.Group as={Col}>
                <Form.Label>Happy</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.Happy}
                  name="Happy"
                  onChange={this.handleChange}>
                  {happys}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Euphoric</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.Euphoric}
                  name="Euphoric"
                 log onChange={this.handleChange}>
                  {euphorics}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Uplifted</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.Uplifted}
                  name="Uplifted"
                  onChange={this.handleChange}>
                  {uplifteds}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Relaxed</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.Relaxed}
                  name="Relaxed"
                  onChange={this.handleChange}>
                  {relaxeds}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Creative</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.Creative}
                  name="Creative"
                  onChange={this.handleChange}>
                  {creatives}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Energetic</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.Energetic}
                  name="Energetic"
                  onChange={this.handleChange}>
                  {energetics}
                </Form.Control>
              </Form.Group>

            </Form.Row>

            <Form.Row>

              <Form.Group as={Col}>
                <Form.Label>Stress</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.Stress}
                  name="Stress"
                  onChange={this.handleChange}>
                  {stresses}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Anxiety</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.Anxiety}
                  name="Anxiety"
                  onChange={this.handleChange}>
                  {anxieties}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Pain</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.Pain}
                  name="Pain"
                  onChange={this.handleChange}>
                  {pains}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Depression</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.Depression}
                  name="Depression"
                  onChange={this.handleChange}>
                  {depressions}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Insomnia</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.Insomnia}
                  name="Insomnia"
                  onChange={this.handleChange}>
                  {insomnias}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Fatigue</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.Fatigue}
                  name="Fatigue"
                  onChange={this.handleChange}>
                  {fatigues}
                </Form.Control>
              </Form.Group>

            </Form.Row>


            <Row>
              <Col>
                <Button
                  block
                  variant="success"
                  disabled={isLoading}
                  onClick={!isLoading ? this.handlePredictClick : null}>
                  { isLoading ? 'Making prediction' : 'Predict' }
                </Button>
              </Col>

            </Row>
          </Form>


          {result === "" ? null :
            (<Row>
              <Col className="result-container">
                <h5 id="result">{result}</h5>
              </Col>
            </Row>)
          }
        </div>
      </Container>
    );
  }
}

export default App;
// export default Classifier;