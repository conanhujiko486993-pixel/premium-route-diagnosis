type Props = {
  code: string;
  name: string;
  description: string;
  strengths: string[];
};

export default function TypeCard({
  code,
  name,
  description,
  strengths,
}: Props) {
  return (
    <div
  className="
  relative

  text-white

      overflow-hidden

      rounded-3xl

      bg-gradient-to-br
      from-indigo-600
      via-blue-600
      to-cyan-500

      text-white

      shadow-2xl

      p-10
      md:p-12
      "
    >
      <div
        className="
        absolute

        -top-24
        -right-24

        w-80
        h-80

        rounded-full

        bg-white/10

        blur-3xl
        "
      />

      <div
        className="
        absolute

        bottom-0
        left-0

        w-96
        h-96

        rounded-full

        bg-cyan-300/10

        blur-3xl
        "
      />

      <div
        className="
        relative
        z-10
        "
      >
        <div
          className="
          text-blue-100
          uppercase
          tracking-widest
          text-sm
          font-medium
          "
        >
          Premium Route Diagnosis
        </div>

        <div
          className="
          mt-6
          "
        >
          <div
            className="
            text-7xl
            md:text-8xl

            font-black

            leading-none
            "
          >
            {code}
          </div>

          <div
  className="
  mt-3

  text-3xl
  md:text-4xl

  font-bold

  text-white
  "
>
            {name}
          </div>
        </div>

        <p
          className="
          mt-8

          max-w-3xl

          text-lg

          text-blue-50

          leading-relaxed
          "
        >
          {description}
        </p>

        <div
          className="
          mt-10
          "
        >
          <div
            className="
            font-bold
            text-xl
            mb-4
            "
          >
            ✨ あなたの強み
          </div>

          <div
            className="
            flex
            flex-wrap
            gap-3
            "
          >
            {strengths.map(
              (strength) => (
                <span
                  key={strength}
                  className="
                  px-4
                  py-2

                  rounded-full

                  bg-white/20

                  backdrop-blur

                  text-white

                  font-medium
                  "
                >
                  {strength}
                </span>
              )
            )}
          </div>
        </div>

        <div
          className="
          mt-10

          grid
          md:grid-cols-3

          gap-4
          "
        >
          <div
            className="
            bg-white/10

            backdrop-blur

            rounded-2xl

            p-4
            "
          >
            <div
              className="
              text-sm
              text-blue-100
              "
            >
              診断結果
            </div>

            <div
              className="
              text-2xl
              font-bold
              mt-1
              "
            >
              {code}
            </div>
          </div>

          <div
            className="
            bg-white/10

            backdrop-blur

            rounded-2xl

            p-4
            "
          >
            <div
              className="
              text-sm
              text-blue-100
              "
            >
              適性タイプ
            </div>

            <div
              className="
              text-xl
              font-bold
              mt-1
              "
            >
              {name}
            </div>
          </div>

          <div
            className="
            bg-white/10

            backdrop-blur

            rounded-2xl

            p-4
            "
          >
            <div
              className="
              text-sm
              text-blue-100
              "
            >
              マッチング
            </div>

            <div
              className="
              text-xl
              font-bold
              mt-1
              "
            >
              TOP5企業
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
