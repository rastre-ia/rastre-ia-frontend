// Layout.js
import { FunctionComponent, ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const location = useLocation();

  // Define routes where you don’t want the footer
  const noFooterRoutes = ["/dashboard"];

  // Check if the current route is in the noFooterRoutes array
  const showFooter = !noFooterRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <header>{/* Add your header component here if you have one */}</header>

      <main className="flex-grow">{children}</main>

      {showFooter && (
        <footer className="bg-gray-100 dark:bg-gray-900 py-8 mt-auto">
          <div className="container mx-auto px-6 text-center">
            <p>
              &copy; {new Date().getFullYear()} RastreIA. Todos os direitos
              reservados.
            </p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
