type Option = {
  id: string;
  label: string;
};

type Props = {
  question: string;
  options: Option[];
  onSelect: (id: string) => void;
};

export default function QuestionCard({
  question,
  options,
  onSelect,
}: Props) {
  return (
    <div
  className="
  bg-white/80

  backdrop-blur

  rounded-3xl

  p-8

  shadow-xl

  border
  border-white
  "
>

  <h2
    className="
    text-3xl

    font-bold

    text-slate-900

    mb-8

    leading-relaxed
    "
  >
    {question}
  </h2>

  <div className="space-y-3">

    {options.map((option) => (

      <button
        key={option.id}
        onClick={() =>
          onSelect(option.id)
        }

        className="
        w-full

        p-5

        text-left

        text-slate-800
        font-medium

        rounded-2xl

        border-2
        border-slate-200

        bg-white

        hover:border-blue-500
        hover:bg-blue-50
        hover:text-blue-700

        transition-all
        duration-200
        "
      >

        {option.label}

      </button>

    ))}

  </div>

</div>

  );
}
