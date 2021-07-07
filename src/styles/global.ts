import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`


* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  
  font: 16px Roboto, sans-serif;
}

#root {
  
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}

button {
  margin: 3px;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 8px;
  background-color: green;
  cursor: pointer;
}

input {
  
  padding: 0.3rem;
  margin: 0.1rem;
  border: none;
  border-bottom: 2px solid green;
  color: #000;
  border-botton: 2px solid red;
}

div{
 
  
  align-items: baseline;

}
tr td {
  padding: 0.3rem;
  border: 1px solid #000;
  text-align: center;
}

`;

