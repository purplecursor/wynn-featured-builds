import Build from "./Build";
const builds = [
  {
    name: "Warp Lightbender w/ Pandemonium",
    href: "https://hppeng-wynn.github.io/builder?v=8#9_0mW0F+0uj0xP0uP0uP0Wf0OH0R10j0t0y0j2M1g00001004fU0z0z0+0+0+0+0s1T",
  },
  {
    name: "Warp Lightbender w/ Entropy",
    href: "https://hppeng-wynn.github.io/builder/?v=8#9_0mW0F+0uj0xP0uP0uP0wr0OH0R10c0u0y0c2M1g00001004fU0z0z0+0+0+0+0s1T",
  },
];
export default function Builds() {
  return (
    <div>
      <h1 className="text-5xl p-10 my-8">New Builds</h1>

      <ul className="space-y-5">
        {builds.map((build) => (
          <li>
            <Build name={build.name} href={build.href} />
          </li>
        ))}
      </ul>
    </div>
  );
}
