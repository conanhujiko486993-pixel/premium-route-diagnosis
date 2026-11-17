type Props = {
  code: string;
  name: string;
  description: string;
  strengths?: string[];
};

export default function TypeCard({
  code,
  name,
  description,
  strengths = [],
}: Props) {
  return (
    <div
      className="
      bg-white
      border
      rounded-3xl
      p-8
      shadow-sm
      "
    >
      <div
        className="
        text-sm
        text-gray-500
        "
      >
        診断タイプ
      </div>

      <h1
 className="
 text-6xl
 font-extrabold

 bg-gradient-to-r
 from-blue-600
 to-purple-600

 bg-clip-text
 text-transparent
 "
>
 {code}
</h1>

      <h2
        className="
        text-2xl
        font-semibold
        mt-4
        "
      >
        {name}
      </h2>

      <p
        className="
        mt-4
        text-gray-600
        "
      >
        {description}
      </p>

      <div
        className="
        flex
        flex-wrap
        gap-2
        mt-6
        "
      >
        {strengths.map(
          (item) => (
            <span
              key={item}
              className="
              px-3
              py-1
              rounded-full
              bg-blue-100
              text-blue-700
              text-sm
              "
            >
              {item}
            </span>
          )
        )}
      </div>
    </div>
  );
}
