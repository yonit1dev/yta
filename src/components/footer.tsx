import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <>
      <Separator className="my-12 bg-zinc-800" />
      <footer className="text-center text-zinc-500 text-sm animate-fade-in">
        <p className="mb-1">Addis Ababa, Ethiopia</p>
      </footer>
    </>
  );
}
