export default function Work() {
  return (
    <section className="mt-10 px-5  font-sans text-black md:px-7">
      <h2 className="time block border-b border-black/5 pt-2.5 pb-2.5">Work</h2>

      <ul>
        <li className="grid grid-cols-[3rem_1fr] items-center gap-x-15">
          <time dateTime="2025" className="text-black/40">
            2025
          </time>
          <span className="block border-b border-black/5 pt-2 pb-2">
            <a
              href="https://nileclaim.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nileclaim
            </a>
          </span>
        </li>
        <li className="grid grid-cols-[3rem_1fr] items-center gap-x-15">
          <time dateTime="2024" className="text-black/40">
            2024
          </time>
          <span className="block border-b border-black/5 pt-2.5 pb-2.5">
            <a
              href="https://digitalbridgeinstitute.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              ##########
            </a>{" "}
            #########
          </span>
        </li>
      </ul>
    </section>
  );
}
