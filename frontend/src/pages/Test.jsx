// Test Page for HomePage

const data = [
  { id: 1, title: "No Longer Human" },
  { id: 2, title: "Kokoro" },
  { id: 3, title: "Pale Fire" },
  { id: 4, title: "Snow Country" },
  { id: 5, title: "Castle" },
  { id: 6, title: "Setting Sun" },
  { id: 7, title: "Plague" },
];

const data2 = [
];

export default function TestPage() {
  return (
    <div>
      {/* SLIDER */}

      <div className="h-96 w-full bg-cover bg-slate-300 rounded-md">
        <div className="flex items-center justify-center w-full h-full bg-opacity-80">
          <h1 className="text-center font-semibold text-3xl capitalize">
            Slider
          </h1>
        </div>
      </div>

      {/* SLIDER */}

      {data2.length === 0 ? null : "no"}


      <section>
        <h1 className="py-6 text-2xl font-semibold">New & Forthcoming Books</h1>
        <div className="relative flex flex-row gap-x-2 overflow-x-auto whitespace-nowrap py-3">

          {data2.map((book) => (
            <div
              key={book.id}
              className="flex-none w-44 h-64 bg-slate-400 rounded-md py-4 px-2 inline-block hover:scale-105 ease-in-out duration-300 scroll-smooth"
            >
              <h2 className="text-center text-slate-50">{book.title}</h2>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}

      <section>
        <h1 className="py-6 text-2xl font-semibold">Best Selling Books</h1>
        <div className="relative flex flex-row gap-x-2 overflow-x-auto whitespace-nowrap py-3">
          {data.map((book) => (
            <div
              key={book.id}
              className="flex-none w-44 h-64 bg-slate-400 rounded-md py-4 px-2 inline-block hover:scale-105 ease-in-out duration-300 scroll-smooth"
            >
              <h2 className="text-center text-slate-50">{book.title}</h2>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}

      <section className="mb-8">
        <h1 className="py-6 text-2xl font-semibold text-center">Categories</h1>
        <div className="flex flex-col md:flex-row flex-wrap gap-2 ">
          <div className="h-32 grow bg-slate-200 rounded-md p-2">
            <h2 className="text-center">Fiction</h2>
          </div>
          <div className="h-32 grow bg-slate-200 rounded-md p-2 flex flex-col justify-center items-center cursor-pointer">
            <h2 className="text-center font-extrabold text-2xl hover:scale-110 ease-in-out duration-300">
              Poetry
            </h2>
          </div>
          <div className="h-32 grow bg-slate-200 rounded-md p-2">
            <h2 className="text-center">Essays</h2>
          </div>
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="bg-slate-300 rounded-md flex flex-col items-center justify-center h-96">
        <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900">
          Sign up for our newsletter
        </h2>
        <p className="mb-8 fontlight text-gray-500 mx-auto">
          Stay up to date with new books and special offers.
        </p>
        <form action="">
          <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
            <div class="relative w-full">
              <label class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Email address
              </label>
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                class="block p-3 pl-10 w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter your email"
                type="email"
                id="email"
                required=""
              />
            </div>
            <div className="flex flex-row justify-center">
              <button
                type="submit"
                class="py-3 px-5 w-44 md:w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
