import { motion } from "framer-motion";

function NewSiteModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 py-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 110, damping: 15 }}
        className="relative w-full max-w-[640px] rounded-[14px] border-4 border-indigo-900 bg-[#080861] p-5 sm:p-7 shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-3 top-2 text-2xl font-bold text-[#d8d6f4] transition hover:text-[#ffd4e7] cursor-pointer"
        >
          &times;
        </button>

        <h2 className="pr-8 text-[clamp(0.95rem,2.5vw,1.25rem)] text-[#d9d6f3] leading-snug">
          New Website Is Live!!!
        </h2>

        <p className="mt-4 text-[clamp(0.62rem,1.7vw,0.78rem)] leading-relaxed text-[#ebeaff]">
          I have moved my latest portfolio to a new home! For the newest
          projects and updates, visit the new website.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="https://krisha.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-[25px] border-4 border-indigo-900 bg-[#F2F1FF] px-4 py-2 text-xs font-medium text-[#2E2A4F] transition duration-300 ease-in-out hover:translate-y-0.5 hover:bg-[#D9D6F3]"
          >
            Go to krisha.dev
          </a>

          <button
            onClick={onClose}
            className="rounded-[25px] border-2 border-[#ffffffaa] bg-indigo-900 px-3 py-2 text-[0.62rem] text-[#e5e5e5] transition duration-300 ease-in-out hover:translate-y-0.5 hover:bg-[#0b0357b3] cursor-pointer"
          >
            Continue On This Site
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default NewSiteModal;
