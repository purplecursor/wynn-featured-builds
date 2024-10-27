export default function About() {
  return (
    <div className="max-w-3xl p-10">
      <h1 className="text-5xl text-center my-8">Wynncraft Builds</h1>
      <h1 className="text-center mb-8 text-3xl">About</h1>
      <p>
        This work in progress site highlights new and cool Wynncraft builds.
      </p>
      {/* <h1 className="text-center mb-8 text-3xl">Description Guide</h1>
      <p className="text-lg">
        First, visit the hppeng-wynn.github.io builder site, and make your
        build. Then press the button named 'copy for sharing', which will create
        a brief preview of your build as text, then in the text box below,
        describe your build, or if it is hard to use, give a quick summary of
        how to use the build or spellcycle. Next, add tags to show whether or
        not this build uses <Mythic>Mythics</Mythic>,{" "}
        <Crafted>Crafteds</Crafted>,{" "}
        <span className="text-red-700 font-bold">or is hard to use</span>, then
        hit the upload button and within a few days, it will show up on the
        site!
      </p> */}

      <button className="border rounded w-full h-32 mt-8 bg-gradient-to-tr from-purple-900 via-indigo-950 to-cyan-900 hover:animate-pulse">
        +
      </button>
    </div>
  );
}
