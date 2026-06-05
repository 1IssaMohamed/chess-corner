import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import AppShell from "@/components/layout/AppShell";
import HomePage from "@/components/home/HomePage";
import OpeningPage from "@/components/opening/OpeningPage";
import LearnPage from "@/components/learn/LearnPage";
import PracticePage from "@/components/practice/PracticePage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route index element={<HomePage />} />
          <Route path="opening/:openingId" element={<OpeningPage />} />
          <Route path="learn">
            <Route index element={<Navigate to="/" replace />} />
            <Route path=":openingId/:lineId" element={<LearnPage />} />
          </Route>
          <Route path="practice">
            <Route index element={<Navigate to="/" replace />} />
            <Route path=":openingId/:lineId" element={<PracticePage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
