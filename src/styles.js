import { injectGlobal } from "styled-components";

injectGlobal`
    body {
      font-family: 'Roboto Slab', sans-serif;
      background: rgb(247, 247, 247);
      color: rgb(45, 86, 141);
      font-weight: 100;
    }

    input, textarea, select  {
      display: block;
      padding: 10px;
      border: 1px solid #cfcfcf;
      font-family: 'Roboto Slab', sans-serif;
      font-size: 16px;
      outline: none;
      font-weight: 100;
    }
    h1 {
      margin: 0;
    }
    
    .displayErrors input:invalid, .displayErrors textarea:invalid, .displayErrors select:invalid {
      border-color: rgb(244, 181, 180);
    }
`;
