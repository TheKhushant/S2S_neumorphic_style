import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-gray-700 bg-gray-900">
      <div className="container grid gap-8 py-10 md:grid-cols-4">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Skill2Success Logo"
              className="h-8 w-8 md:h-6 md:w-6 sm:h-5 sm:w-5 object-contain"
              aria-hidden="true"
            />
            <span className="text-lg font-extrabold tracking-tight text-white">
              Skill2Success
            </span>
          </div>
          <p className="text-sm text-gray-400">
            Leading training institute for software courses. Modernized
            experience with animations and accessibility.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold text-white">Company</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/about" className="hover:text-blue-400">About</Link>
            </li>
            <li>
              <Link to="/placements" className="hover:text-blue-400">Placements</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-blue-400">Blog</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold text-white">Training</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/online-training" className="hover:text-blue-400">Online</Link>
            </li>
            <li>
              <Link to="/classroom-training" className="hover:text-blue-400">Classroom</Link>
            </li>
            <li>
              <Link to="/corporate-training" className="hover:text-blue-400">Corporate</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold text-white">Address</h4>
          <p className="text-sm text-gray-300">
            Plot No.26, Khandwekar Bunglow <br />
            2nd Floor, Near Lendra Park <br />
            Ramdaspeth, Nagpur-440010
          </p>
          <p className="text-sm text-gray-300">
            Phone: 9399345989, 8446691425
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Skill2Success. All rights reserved. <br />
        Developed by{" "}
        <a
          href="https://ssinfotech.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          SS Infotech Team
        </a>.
      </div>
    </footer>
  );
}
