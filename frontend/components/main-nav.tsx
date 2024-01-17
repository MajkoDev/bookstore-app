import Link from "next/link";

export default function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <span className="inline-block text-xl font-bold">BookStore</span>
      </Link>
    </div>
  );
}
