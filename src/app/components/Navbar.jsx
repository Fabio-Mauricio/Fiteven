export function Navbar() {
    return (
<nav className="bg-white dark:bg-gray-900/90 fixed w-full z-20 top-0 start-0 shadow-2xl backdrop-blur-md">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">FitEasy</span>
  </a>
  <div class="flex items-center md:gap-3  md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" class="text-white hover:bg-fitness focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-slate-800 dark:hover:bg-fitness dark:focus:ring-blue-800 mr-10">Entrar</button>
      <button type="button" class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center bg-fitness dark:hover:bg-fitness-600 dark:focus:ring-blue-800 ">Login</button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="text-sm text-neutral-200 flex flex-col p-4 md:p-0 mt-4 font-bold border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 px-3 bg-blue-700 rounded-sm md:bg-transparent md:text-fitness md:p-0 md:dark:text-fitness" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-fitness md:p-0 md:dark:hover:text-fitness  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-fitness md:p-0 md:dark:hover:text-fitness  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-fitness md:p-0 md:dark:hover:text-fitness dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
    )
}