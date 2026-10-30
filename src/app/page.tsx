import Work from "@/components/work";

export default function Home() {
  return (
    <>
      <main className="mt-10 px-5 font-sans text-black text-wrap-pretty md:mt-20 md:px-7">
        <header>
          <p className="mb-1">Daniel Uche</p>
          <p className=" mb-6 text-black/40">Updated Oct 29, 2026</p>
        </header>

        <p className="mt-2">
          I&apos;m a Software and Design Engineer based in Kano, Nigeria.
        </p>
        <p className="mt-4">
          I currently work at{" "}
          <a
            href="https://nileclaim.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-300 underline-offset-2 hover:decoration-black"
          >
            Nileclaim
          </a>{" "}
          as a Design Engineer and Co-founder
        </p>

        <p className="mt-4">
          Previously, I worked as a Computer Engineer and instructor at{" "}
          <a
            href="https://digitalbridgeinstitute.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-300 underline-offset-2 hover:decoration-black"
          >
            Digital Bridge Institute
          </a>
          {""} in Kano, supporting technical operations and helping people
          develop practical digital skills, while also working as a freelance
          Web Developer, designing and building web experiences.
        </p>
        <p className="mt-4">
          I enjoy tinkering with hardware and software to create thoughtful
          digital experiences. Off-screen, I&apos;m probably biking or
          doomscrolling.
        </p>

        <p className="mt-4">
          You can find me on{" "}
          <a
            href="https://twitter.com/daan_"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-300 underline-offset-2 hover:decoration-black"
          >
            X
          </a>
          ,{" "}
          <a
            href="https://github.com/daan"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-300 underline-offset-2 hover:decoration-black"
          >
            Github
          </a>
          ,{" "}
          <a
            href="https://instagram.com/daan"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-300 underline-offset-2 hover:decoration-black"
          >
            Instagram
          </a>{" "}
          or send me an{" "}
          <a
            href="mailto:daan@example.com"
            className="underline decoration-gray-300 underline-offset-2 hover:decoration-black"
          >
            Email
          </a>
          .
        </p>
      </main>
      <Work />
    </>
  );
}
