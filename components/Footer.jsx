export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-slate-900 z-40 h-16">
      <div className="w-[80%] mx-auto py-3 flex items-center justify-between h-full">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} ABHISHEK
        </p>
        <div className="flex items-center gap-6 flex-row-reverse flex-nowrap overflow-x-auto">
          <a
            href="https://github.com/AbhishekKumar1602"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-400 hover:text-white whitespace-nowrap">
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/abhishekkumar1602"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-400 hover:text-white whitespace-nowrap">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
