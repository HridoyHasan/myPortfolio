import './globals.css';
import './style.css';


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0a192f] text-white mx-auto">
      <header id="header" className="w-full p-4 sm:p-6 bg-[#0d2538]">
      <nav>
        <div id="logo">
          <a href="#home" className="hover:text-gray-400">Thank you for visiting!</a>
        </div>
        <ul>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#blogs">Blogs</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    
        </header>
        <main>{children}</main>
        <footer className="p-6 text-center">
          <p>© {new Date().getFullYear()} Quazi Mahabubul Hasan. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
