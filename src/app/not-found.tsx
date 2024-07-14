import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid h-screen place-items-center bg-gallery px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-xl font-semibold text-cerise-red">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-tamarind sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-6 text-base leading-7 text-tussock">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/pages/product"
            className="rounded-md bg-cerise-red px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cerise-red-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cerise-red"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}
