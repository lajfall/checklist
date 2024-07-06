import Image from "next/image";

export default function Header() {
  return (
    <header className="flex h-24 items-center justify-center tracking-wider">
      <Image src="/logo.svg" alt="Logo" width={48} height={48} />
      <h1 className="text-3xl uppercase font-bold">Check</h1>
    </header>
  );
}
