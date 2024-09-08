import React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full h-1000 text-black py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} My Website. Todos los derechos reservados.</p>
        <p>
          Desarrollado por{" "}
          <a
            href="https://tu-portafolio.com"
            className="text-red-400 hover:underline"
          >
            Sofía García
          </a>
        </p>
      </div>
    </footer>
  );
}
