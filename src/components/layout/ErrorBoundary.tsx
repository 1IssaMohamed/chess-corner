// Catches render-time crashes in the page below it so a single thrown error shows
// a recoverable fallback instead of a blank screen (the symptom was especially bad
// on mobile, where there were no devtools to see the stack). Class component
// because React only supports error boundaries via componentDidCatch / getDerivedStateFromError.

import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Surface it in the console for debugging; the UI stays usable either way.
    console.error("Caught by ErrorBoundary:", error, info.componentStack);
  }

  handleReset = () => {
    this.setState({ error: null });
  };

  render() {
    if (this.state.error) {
      return (
        <div className="flex flex-col items-center justify-center gap-4 p-8 text-center min-h-[60vh]">
          <p
            className="text-2xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Something went wrong
          </p>
          <p
            className="text-sm max-w-md"
            style={{ color: "var(--text-secondary)" }}
          >
            This page hit an unexpected error. Try again, or head back to the
            home screen.
          </p>
          <div className="flex gap-3">
            <button
              onClick={this.handleReset}
              className="px-4 py-2 rounded-lg text-sm font-semibold"
              style={{ background: "var(--accent-amber)", color: "#1a1205" }}
            >
              Try again
            </button>
            <a
              href="#/"
              onClick={this.handleReset}
              className="px-4 py-2 rounded-lg text-sm font-semibold"
              style={{
                background: "var(--bg-surface)",
                color: "var(--text-primary)",
                textDecoration: "none",
              }}
            >
              ← All openings
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
