import Build from "./Build";
import { builds } from "./data/data";
export default function Builds() {
  return (
    <div>
      <h1 className="text-5xl p-10 my-8">New Builds</h1>

      <ul className="space-y-5 p-2">
        {builds.map((build) => (
          <li>
            <Build name={build.name} href={`#/builds/${build.id}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}
