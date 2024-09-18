import { Component, ReactNode, ErrorInfo } from "react";

interface ErrorBoundaryProps {
  fallback?: ReactNode;
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  message?: string;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({ message: error.message });
    console.error("ErrorBoundary caught an error", error.message, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <span>Error: {this.state.message}.</span>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
