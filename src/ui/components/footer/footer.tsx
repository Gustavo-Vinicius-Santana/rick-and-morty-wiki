export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-4 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Gustavo Vinicius Santana</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="https://github.com/Gustavo-Vinicius-Santana"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gustavo-vinicius-596005276/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}