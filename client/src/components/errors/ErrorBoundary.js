import React, { Component } from "react";

import NotFound from "./NotFound";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(
      `Error Boundary has catched an error: ${error}, Error Info: ${errorInfo}`
    );
  }

  render() {
    if (this.state.hasError) {
      return <NotFound />;
    }

    return this.props.children;
  }
}
