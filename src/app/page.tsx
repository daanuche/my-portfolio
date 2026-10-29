import NileClaimProject from "@/app/components/nileclaim-project";
import RealEstateProject from "@/app/components/realestate-project";
import { IconNigeria } from "nucleo-flags";

export default function Home() {
  return (
    <>
      <main className="mx-auto mt-10 w-full max-w-xl px-5 text-[14px]/[24px] font-sans text-black md:mt-20 md:max-w-2xl md:px-7">
        <header>
          <p className="font-local text-16px uppercase ">
            DANIEL UCHE
            <IconNigeria size={16} className="ml-1 inline-block align-middle" />
          </p>
          <p className=" mb-7 font-local text-black/40">Updated Oct 29, 2026</p>
        </header>

        <p className="mt-4">
          Hey, I&apos;m Daniel. I currently work on the Dev team at{" "}
          <a
            href="https://nileclaim.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-dotted decoration-gray-400 underline-offset-2 hover:decoration-solid"
          >
            Nileclaim.
          </a>
        </p>

        <p className="mt-4">
          Previously, I worked as a Comp sci. instructor at{" "}
          <a
            href="https://digitalbridgeinstitute.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-dotted decoration-gray-400 underline-offset-2 hover:decoration-solid"
          >
            Digital Bridge Institute
          </a>
          {""} in Kano, helping people build their skills and confidence on the
          web.
        </p>
        <p className="mt-4">
          I love exploring hardware and software to create thoughtful,
          accessible web experiences. I focus on polished interfaces, meaningful
          animations, and empathetic product design.
        </p>

        <p className="mt-4">
          You can find me on{" "}
          <a
            href="https://twitter.com/daan_"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-dotted decoration-gray-400 underline-offset-2 hover:decoration-solid"
          >
            X
          </a>
          ,{" "}
          <a
            href="https://github.com/daan"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-dotted decoration-gray-400 underline-offset-2 hover:decoration-solid"
          >
            Github
          </a>
          ,{" "}
          <a
            href="https://instagram.com/daan"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-dotted decoration-gray-400 underline-offset-2 hover:decoration-solid"
          >
            Instagram
          </a>{" "}
          or send me an{" "}
          <a
            href="mailto:daan@example.com"
            className="underline decoration-dotted decoration-gray-400 underline-offset-2 hover:decoration-solid"
          >
            Email
          </a>
          .
        </p>
      </main>

      <section className="mx-auto mt-10 w-full max-w-xl px-5 text-[14px]/[24px] font-sans text-black md:max-w-2xl md:px-7">
        <h2 className="mb-2 font-local text-[14px] uppercase">WORK</h2>
        <NileClaimProject className="mb-4" />
        <RealEstateProject />
      </section>
    </>
  );
}
