import "./set-public-path";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./App";
import "./index.css";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
  domElementGetter: () => document.getElementById("projects-page"),
});

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function mount(props) {
  localStorage.setItem("projectsAPIUrl", props.projectsAPIUrl);
  await timeout(300);
  return lifecycles.mount(props);
}

export const { bootstrap, unmount } = lifecycles;
