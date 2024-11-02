import { useParams } from "react-router-dom";

import { builds } from "./data/data";

export default function BuildDetails() {
  const params = useParams();
  const buildId = params.buildId;
  const build: any = builds.filter((build) => build.id == buildId);
  const myBuild = build[0];

  return (
    <div>
      <h1 className="text-5xl p-10 my-8">{myBuild.name}</h1>
      <div>
        <a href={myBuild.href}>Click here to view details</a>
      </div>
    </div>
  );
}
