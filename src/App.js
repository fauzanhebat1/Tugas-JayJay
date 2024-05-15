import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const Title = styled.h1`
  /* this is template literals*/
  font-size: 20px;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Section = styled.section`
  padding: 40px;
  background: papayawhip;
`;

const Button = styled.button`
padding: 8px 12px;
  width: 150px;
  height: 40px;
  color: ${props => props.primary ? 'white' : 'blue'};
  border 1px solid blue;
  background: ${props => props.primary ? 'blue' : 'white'};
  border-radius: 4px;
  margin-right: 10px;
`

const GreenButton = styled(Button)`
  background: green;
  color: white;
  border-color:green;
`

function App() {
  return (
    <>
      {/* <h1 className="heading-red">This in my first react app</h1>;
      <p>this is my app desc</p> */}
      {/* <Title>This is Title H1</Title>
      <Section>this is section</Section>
      <br></br>
      
      <Button>Normal</Button>
      <Button primary>Primary Button</Button>
      <GreenButton primary>Green Button</GreenButton> */}
      <h1>Hello World</h1>
      <button classname='btn btn-primary'>Button Primary</button>
    </>
  );
}

export default App;
