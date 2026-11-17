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
  bg-white
  rounded-3xl
  p-8
  shadow-lg
  border
  border-slate-100
  "
>

        <h2
        className="
        text-2xl
        font-bold
        mb-8
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

rounded-2xl

border-2
border-slate-200

hover:border-blue-500
hover:bg-blue-50

transition
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
