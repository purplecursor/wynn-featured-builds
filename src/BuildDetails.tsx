import { useParams } from "react-router-dom";
import { builds } from "./data/data";

export default function BuildDetails() {
  const params = useParams();
  const buildId = params.buildId;
  const buildResults = builds.filter((build) => build.id == buildId);
  const myBuild = buildResults[0];

  return (
    <div className="max-w-3xl p-10">
      <a href="#/" className="underline">
        &lt; Return home
      </a>
      <h1 className="text-5xl my-8">{myBuild.name}</h1>
      <div className="p-4">
        <a href={myBuild.href} className="underline" target="_blank">
          Click here to view details
        </a>
      </div>
    </div>
  );
}
