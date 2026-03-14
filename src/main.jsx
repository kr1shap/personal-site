import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Skills from "./pages/Skills.jsx";
import Abt from "./pages/Abt";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import NotFound from "./pages/NotFound.jsx";
import { motion } from "framer-motion";
import NewSiteModal from "./components/NewSiteModal.jsx";
// const mobileRouter = createBrowserRouter([
//   { path: '/', element: <MobileUnsup />, errorElement: <NotFound back={false} /> },
//   ]);

const router = createBrowserRouter([
  { path: "/", element: <Abt />, errorElement: <NotFound back={true} /> },
  { path: "/projects", element: <Experience isExp={false} /> },
  { path: "/experience", element: <Experience isExp={true} /> },
  { path: "/contact", element: <Contact /> },
  { path: "/skills", element: <Skills /> },
]);

function AppShell() {
  const [showNewSiteModal, setShowNewSiteModal] = useState(true);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <RouterProvider router={router} />
      </motion.div>
      {showNewSiteModal && (
        <NewSiteModal onClose={() => setShowNewSiteModal(false)} />
      )}
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppShell />
    {/* {window.innerWidth > 768 ? <RouterProvider router={router}/> : <RouterProvider router={mobileRouter}/> } */}
  </StrictMode>,
);
