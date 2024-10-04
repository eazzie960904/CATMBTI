import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Result";

// 데이터 뿌릴때 기지국 역할
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "question",
        element: <Question />,
      },
      {
        path: "result",
        element: <Result />,
      },
    ],
  },
]);

const GlobalStyle = createGlobalStyle`
${reset}
@font-face {
  font-family: "SimKyungha";
  src: url("/fonts/SimKyungha.ttf") format("truetype");
}
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  ul,li{
    list-style: none;
  }

  a{
    text-decoration:none;
    color: inherit;
  }

  body{
    font-family: "SimKyungha";
    background: url("https://thumb.ac-illust.com/31/31bf355c5d1d5ef36902e72620450e2f_t.jpeg") center/cover no-repeat;
    height: 100vh;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
