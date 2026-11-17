type Props = {
  current: number;
  total: number;
};

export default function ProgressBar({
  current,
  total,
}: Props) {

  const percent =
    (current / total) * 100;

  return (
    <div className="mb-8">

      <div
        className="
        flex
        justify-between
        mb-2
        text-sm
        "
      >
        <span>進捗</span>

        <span>
          {current}/{total}
        </span>
      </div>

      <div
 className="
 h-4
 bg-slate-200
 rounded-full
 overflow-hidden
 "
>

        <div
 className="
 h-4
 rounded-full

 bg-gradient-to-r
 from-blue-500
 to-indigo-600

 transition-all
 duration-500
 "
          style={{
            width: `${percent}%`,
          }}
        />
      </div>

    </div>
  );
}
