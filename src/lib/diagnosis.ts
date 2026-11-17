export type AxisScore = {

  S: number;
  C: number;

  P: number;
  B: number;

  E: number;
  M: number;

  D: number;
  G: number;

};

export const emptyAxis: AxisScore = {

  S: 0,
  C: 0,

  P: 0,
  B: 0,

  E: 0,
  M: 0,

  D: 0,
  G: 0,

};

export function calculateAxisScore(
  answers: string[],
  questions: any[]
): AxisScore {

  const score = {
    ...emptyAxis,
  };

  questions.forEach(
    (question, index) => {

      const answerId =
        answers[index];

      const selected =
        question.options.find(
          (option: any) =>
            option.id === answerId
        );

      if (!selected) {
        return;
      }

      Object.entries(
        selected.axis || {}
      ).forEach(

        ([key, value]) => {

          score[
            key as keyof AxisScore
          ] += Number(value);

        }

      );

    }
  );

  return score;

}

export function determineType(
  score: AxisScore
) {

  return (

    (score.S >= score.C
      ? "S"
      : "C")

    +

    (score.P >= score.B
      ? "P"
      : "B")

    +

    (score.E >= score.M
      ? "E"
      : "M")

    +

    (score.D >= score.G
      ? "D"
      : "G")

  );

}

