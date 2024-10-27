export default function Build({ name, href }: { name: string; href: string }) {
  return (
    // <div className="flex justify-center items-center h-48 border rounded p-2">
    //   <a href={href} target="_blank" className="w-full">
    //     <h2 className="text-5xl">{name}</h2>
    //     <p>(click here for details)</p>
    //   </a>
    // </div>

    <a
      href={href}
      target="_blank"
      className="w-full flex justify-center items-center h-48 border rounded p-2"
    >
      <h2 className="text-5xl">{name}</h2>
    </a>
  );
}
