export default function NileClaimProject({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={className}>
      <a
        href="#"
        className=" text-black underline decoration-dotted decoration-gray-400 underline-offset-5 hover:decoration-solid"
      >
        Nileclaim
      </a>
      <p className="mt-1 ">
        A web app that help users claim compensation for flight delays and
        cancellations.
      </p>
    </div>
  );
}
