export default function Build({ name, href }: { name: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      className="w-full flex justify-center items-center h-48 border rounded p-2"
    >
      <h2 className="text-5xl">{name}</h2>
    </a>
  );
}
