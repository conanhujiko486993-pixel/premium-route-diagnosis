type Props = {

  current: number;

  total: number;

};

export default function ProgressBar({
  current,
  total,
}: Props) {

  const percent =

    Math.round(
      (
        current /
        total
      ) * 100
    );

  return (

    <div className="mb-8">

      <div
        className="
        flex

        justify-between

        mb-2
        "
      >

        <span
          className="
          text-sm

          font-semibold

          text-slate-700
          "
        >
          診断進行中
        </span>

        <span
          className="
          text-sm

          font-bold

          text-indigo-600
          "
        >
          {percent}%
        </span>

      </div>

      <div
        className="
        h-4

        bg-white/60

        rounded-full

        overflow-hidden

        shadow-inner
        "
      >

        <div
          className="
          h-full

          bg-gradient-to-r

          from-blue-500
          via-indigo-500
          to-purple-500

          rounded-full

          transition-all
          duration-500
          "
          style={{
            width:
              `${percent}%`,
          }}
        />

      </div>

      <div
        className="
        mt-2

        text-center

        text-sm

        font-medium

        text-slate-600
        "
      >
        {current} / {total} 問
      </div>

    </div>


  );

}

<div
  className="
  mb-6

  text-center
  "
>

  <div
    className="
    text-2xl

    font-bold

    text-slate-900
    "
  >
    🎯 適性診断
  </div>

  <div
    className="
    mt-2

    text-slate-600
    "
  >
    あなたに合う企業を
    見つけましょう
  </div>

</div>
