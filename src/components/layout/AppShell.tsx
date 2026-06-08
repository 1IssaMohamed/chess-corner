import { Outlet, useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import ErrorBoundary from "./ErrorBoundary";

export default function AppShell() {
  // Re-mount the boundary on navigation so a crash on one page doesn't keep
  // showing the fallback after the user moves to a different route.
  const location = useLocation();
  return (
    <div style={{ background: "var(--bg-base)", minHeight: "100vh" }}>
      <TopBar />
      <main>
        <ErrorBoundary key={location.pathname}>
          <Outlet />
        </ErrorBoundary>
      </main>
    </div>
  );
}
