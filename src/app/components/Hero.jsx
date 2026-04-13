export default function Hero() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-white px-4 pt-20 pb-24 sm:pt-32">
      <div className="z-10 flex max-w-4xl flex-col items-center text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
          We Build <br className="hidden sm:block" />
          <span className="text-[#a87ffb]">Productive</span> Apps
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-500 sm:text-xl">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
      </div>

      <div className="z-10 mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-6 py-3 transition-shadow hover:shadow-md"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 3L19 12L4 21V3Z" fill="#4285F4" />
            <path d="M4 3L19 12L12 14L4 21V3Z" fill="#EA4335" />
            <path d="M4 3L12 10L19 12L4 3Z" fill="#FBBC04" />
            <path d="M4 21L12 14L19 12L4 21Z" fill="#34A853" />
          </svg>
          <span className="text-base font-bold text-gray-900">Google Play</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-6 py-3 transition-shadow hover:shadow-md"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.5 6C15.5 6 15 3.5 12 3.5C12 3.5 11.5 6 15.5 6Z" fill="#007AFF" />
            <path
              d="M8.5 21C8.5 21 6.5 17.5 7.5 14C8.5 10.5 12 8.5 12 8.5C12 8.5 15.5 10.5 16.5 14C17.5 17.5 15.5 21 15.5 21L12 18L8.5 21Z"
              fill="#007AFF"
            />
            <path d="M7.5 14L3 17" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" />
            <path d="M16.5 14L21 17" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" />
            <path d="M10 11L5 8" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" />
            <path d="M14 11L19 8" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="text-base font-bold text-gray-900">App Store</span>
        </a>
      </div>

      <div className="relative mt-20 flex min-h-[500px] w-full max-w-5xl justify-center">
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <div className="absolute top-10 left-[15%] flex h-16 w-16 items-center justify-center rounded-full bg-[#00a8e8] text-white shadow-lg">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>

          <div className="absolute top-40 left-[20%] flex h-16 w-16 items-center justify-center rounded-full bg-[#0052cc] text-white shadow-lg">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <div className="absolute bottom-20 left-[15%] flex h-16 w-16 items-center justify-center rounded-full bg-[#36a336] text-white shadow-lg">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
              <line x1="12" y1="2" x2="12" y2="12" />
            </svg>
          </div>

          <div className="absolute top-10 right-[15%] flex h-16 w-16 items-center justify-center rounded-full bg-[#f04f4f] text-white shadow-lg">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>

          <div className="absolute top-40 right-[20%] flex h-16 w-16 items-center justify-center rounded-full bg-[#0052cc] text-white shadow-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <path d="M7 7h3v10H7zM14 7h3v6h-3z" fill="white" />
            </svg>
          </div>

          <div className="absolute right-[15%] bottom-20 flex h-16 w-16 items-center justify-center rounded-full bg-[#00a8e8] text-white shadow-lg">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 flex h-[600px] w-[300px] flex-col overflow-hidden rounded-[3rem] border-[12px] border-black bg-black shadow-2xl">
          <div className="absolute top-0 left-1/2 z-20 h-6 w-32 -translate-x-1/2 rounded-b-3xl bg-black"></div>

          <div className="flex flex-1 flex-col gap-4 bg-[#22183f] px-4 pt-10 text-white">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold">&lt; All Courses</span>
              <div className="flex gap-2">
                <span className="rounded-full bg-slate-800 px-2 py-0.5 text-xs">PRO</span>
                <span className="rounded-full bg-orange-500 px-2 py-0.5 text-xs">345</span>
              </div>
            </div>

            <div className="mt-2 flex rounded-lg bg-[#1e1636] p-1">
              <div className="flex-1 rounded-md bg-indigo-600 py-2 text-center text-xs">
                Regular Course
              </div>
              <div className="flex-1 rounded-md py-2 text-center text-xs text-slate-400">
                Video Course
              </div>
            </div>

            <h3 className="mt-2 text-sm font-bold">Choose your Course</h3>

            <div className="relative h-36 overflow-hidden rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 p-4 shadow-lg">
              <h4 className="w-2/3 text-sm font-bold leading-tight">
                Complete Web Development
              </h4>
              <p className="mt-8 text-xs text-purple-200">203 Lessons</p>
              <div className="absolute right-[-10px] bottom-[-10px] h-24 w-24 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm"></div>
            </div>

            <div className="relative h-36 overflow-hidden rounded-xl bg-gradient-to-br from-orange-400 to-red-500 p-4 shadow-lg">
              <h4 className="w-2/3 text-sm font-bold leading-tight">
                Python Programming
              </h4>
              <div className="absolute right-[-10px] bottom-[-10px] h-24 w-24 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}