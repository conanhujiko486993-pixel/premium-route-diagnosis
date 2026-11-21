import {
 CompanyQuestion
}
from "@/types/question";

export const companyQuestions = [

  {
  id: "Q9",
  question: "企業選びで最も重視するものは？",

  options: [

    {
      id: "A",
      label: "高年収",

      profile: {
        salary: 3
      }
    },

    {
      id: "B",
      label: "社会貢献",

      profile: {
        social: 3
      }
    },

    {
      id: "C",
      label: "成長環境",

      profile: {
        growth: 3
      }
    },

    {
      id: "D",
      label: "福利厚生",

      profile: {
        welfare: 3
      }
    },

    {
      id: "X",
      label: "🤔 わからない",

      profile: {}
    }

  ]

},

{
  id: "Q10",

  question:
    "20代で最も得たいものは？",

  options: [

    {
      id: "A",

      label:
        "裁量権",

      profile: {
        entrepreneurship: 3
      }
    },

    {
      id: "B",

      label:
        "専門性",

      profile: {
        specialty: 3
      }
    },

    {
      id: "C",

      label:
        "マネジメント経験",

      profile: {
        management: 3
      }
    },

    {
      id: "D",

      label:
        "安定したキャリア",

      profile: {
        welfare: 2,
        workLifeBalance: 2
      }
    },

    {
      id: "X",

      label:
        "🤔 わからない",

      profile: {}
    }

  ]
},

{
  id: "Q11",

  question:
    "成果主義の会社は？",

  options: [

    {
      id: "A",

      label:
        "好き",

      profile: {
        growth: 3,
        entrepreneurship: 2
      }
    },

    {
      id: "B",

      label:
        "やや好き",

      profile: {
        growth: 2
      }
    },

    {
      id: "C",

      label:
        "どちらでも",

      profile: {}
    },

    {
      id: "D",

      label:
        "苦手",

      profile: {
        welfare: 2,
        workLifeBalance: 2
      }
    },

    {
      id: "X",

      label:
        "🤔 わからない",

      profile: {}
    }

  ]
},

{
  id: "Q12",

  question:
    "若手抜擢についてどう思う？",

  options: [

    {
      id: "A",

      label:
        "大歓迎",

      profile: {
        entrepreneurship: 3,
        management: 3
      }
    },

    {
      id: "B",

      label:
        "興味がある",

      profile: {
        management: 2
      }
    },

    {
      id: "C",

      label:
        "少し不安",

      profile: {
        welfare: 2
      }
    },

    {
      id: "D",

      label:
        "望まない",

      profile: {
        workLifeBalance: 2
      }
    },

    {
      id: "X",

      label:
        "🤔 わからない",

      profile: {}
    }

  ]
},

  {
  id: "Q13",
  question: "最も興味のあるテーマは？",

  options: [

    {
      id: "A",
      label: "AI・DX",

      profile: {
        specialty: 2,
        growth: 2
      }
    },

    {
      id: "B",
      label: "金融",

      profile: {
        salary: 2,
        management: 2
      }
    },

    {
      id: "C",
      label: "医療",

      profile: {
        social: 3
      }
    },

    {
      id: "D",
      label: "教育",

      profile: {
        social: 3
      }
    },

    {
      id: "X",
      label: "🤔 わからない",

      profile: {}
    }

  ]

},

{
  id: "Q17",
  question: "給与はどれくらい重視しますか？",

  options: [
    {
      id: "A",
      label: "最重要",
      profile: { salary: 3 }
    },
    {
      id: "B",
      label: "重視する",
      profile: { salary: 2 }
    },
    {
      id: "C",
      label: "普通",
      profile: {}
    },
    {
      id: "D",
      label: "あまり重視しない",
      profile: { social: 1 }
    },
    {
      id: "X",
      label: "🤔 わからない",
      profile: {}
    }
  ]
},

{
  id: "Q18",
  question: "福利厚生をどれくらい重視しますか？",

  options: [
    {
      id: "A",
      label: "最重要",
      profile: { welfare: 3 }
    },
    {
      id: "B",
      label: "重視する",
      profile: { welfare: 2 }
    },
    {
      id: "C",
      label: "普通",
      profile: {}
    },
    {
      id: "D",
      label: "気にしない",
      profile: { growth: 1 }
    },
    {
      id: "X",
      label: "🤔 わからない",
      profile: {}
    }
  ]
},

{
  id: "Q19",
  question: "ワークライフバランスは？",

  options: [
    {
      id: "A",
      label: "最重要",
      profile: { workLifeBalance: 3 }
    },
    {
      id: "B",
      label: "重視",
      profile: { workLifeBalance: 2 }
    },
    {
      id: "C",
      label: "普通",
      profile: {}
    },
    {
      id: "D",
      label: "成長優先",
      profile: { growth: 3 }
    },
    {
      id: "X",
      label: "🤔 わからない",
      profile: {}
    }
  ]
},

{
  id: "Q20",
  question: "残業についてどう考えますか？",

  options: [
    {
      id: "A",
      label: "成長できるなら多くても良い",
      profile: { growth: 3 }
    },
    {
      id: "B",
      label: "適度ならOK",
      profile: { growth: 1 }
    },
    {
      id: "C",
      label: "少ない方が良い",
      profile: { workLifeBalance: 2 }
    },
    {
      id: "D",
      label: "かなり重視",
      profile: { workLifeBalance: 3 }
    },
    {
      id: "X",
      label: "🤔 わからない",
      profile: {}
    }
  ]
},

{
  id: "Q21",
  question: "海外勤務について？",

  options: [
    {
      id: "A",
      label: "絶対したい",
      profile: { global: 3 }
    },
    {
      id: "B",
      label: "機会があれば",
      profile: { global: 2 }
    },
    {
      id: "C",
      label: "国内中心が良い",
      profile: {}
    },
    {
      id: "D",
      label: "興味がない",
      profile: { social: 1 }
    },
    {
      id: "X",
      label: "🤔 わからない",
      profile: {}
    }
  ]
},

{
  id: "Q22",
  question: "転勤についてどう思いますか？",

  options: [
    {
      id: "A",
      label: "全国どこでも歓迎",
      profile: { management: 2 }
    },
    {
      id: "B",
      label: "海外も歓迎",
      profile: { global: 3 }
    },
    {
      id: "C",
      label: "エリア限定希望",
      profile: { workLifeBalance: 2 }
    },
    {
      id: "D",
      label: "気にしない",
      profile: {}
    },
    {
      id: "X",
      label: "🤔 わからない",
      profile: {}
    }
  ]
},

{
  id: "Q23",
  question: "どんな上司が理想ですか？",

  options: [
    {
      id: "A",
      label: "厳しく鍛えてくれる",
      profile: { growth: 2 }
    },
    {
      id: "B",
      label: "任せてくれる",
      profile: { entrepreneurship: 2 }
    },
    {
      id: "C",
      label: "丁寧に育成してくれる",
      profile: { welfare: 2 }
    },
    {
      id: "D",
      label: "専門性が高い",
      profile: { specialty: 3 }
    },
    {
      id: "X",
      label: "🤔 わからない",
      profile: {}
    }
  ]
},

{
  id: "Q24",
  question: "好きな組織文化は？",

  options: [
    {
      id: "A",
      label: "体育会系",
      profile: {
        growth: 2,
        entrepreneurship: 2
      }
    },
    {
      id: "B",
      label: "フラット",
      profile: {
        entrepreneurship: 2
      }
    },
    {
      id: "C",
      label: "論理的",
      profile: {
        specialty: 2
      }
    },
    {
      id: "D",
      label: "穏やか",
      profile: {
        workLifeBalance: 2
      }
    },
    {
      id: "X",
      label: "🤔 わからない",
      profile: {}
    }
  ]
},

{
  id: "Q25",
  question: "最も興味のある仕事は？",

  options: [
    {
      id: "A",
      label: "営業",
      profile: {
        growth: 2,
        management: 1
      }
    },
    {
      id: "B",
      label: "企画",
      profile: {
        management: 2
      }
    },
    {
      id: "C",
      label: "IT",
      profile: {
        specialty: 3
      }
    },
    {
      id: "D",
      label: "コンサル",
      profile: {
        specialty: 2,
        management: 2
      }
    },
    {
      id: "X",
      label: "🤔 わからない",
      profile: {}
    }
  ]
},

{
  id: "Q26",
  question: "10年後の理想像は？",

  options: [
    {
      id: "A",
      label: "起業家",
      profile: {
        entrepreneurship: 3
      }
    },
    {
      id: "B",
      label: "経営幹部",
      profile: {
        management: 3
      }
    },
    {
      id: "C",
      label: "専門家",
      profile: {
        specialty: 3
      }
    },
    {
      id: "D",
      label: "社会課題解決者",
      profile: {
        social: 3
      }
    },
    {
      id: "X",
      label: "🤔 わからない",
      profile: {}
    }
  ]
},

{
  id: "Q27",
  question: "仕事を通じて最も実現したいことは？",

  options: [
    {
      id: "A",
      label: "お金",
      profile: {
        salary: 3
      }
    },
    {
      id: "B",
      label: "成長",
      profile: {
        growth: 3
      }
    },
    {
      id: "C",
      label: "専門性",
      profile: {
        specialty: 3
      }
    },
    {
      id: "D",
      label: "社会貢献",
      profile: {
        social: 3
      }
    },
    {
      id: "X",
      label: "🤔 わからない",
      profile: {}
    }
  ]
},

{
  id: "Q28",
  question: "興味のあるニュースは？",

  options: [
    {
      id: "A",
      label: "AI・DX",
      profile: {
        specialty: 2,
        growth: 1
      }
    },
    {
      id: "B",
      label: "金融",
      profile: {
        salary: 1,
        management: 1
      }
    },
    {
      id: "C",
      label: "医療",
      profile: {
        social: 2
      }
    },
    {
      id: "D",
      label: "教育",
      profile: {
        social: 2
      }
    },
    {
      id: "X",
      label: "🤔 わからない",
      profile: {}
    }
  ]
},

{
  id: "Q29",
  question: "好きな働き方は？",

  options: [
    {
      id: "A",
      label: "自分で決めたい",
      profile: {
        entrepreneurship: 2
      }
    },
    {
      id: "B",
      label: "チームで動く",
      profile: {
        management: 2
      }
    },
    {
      id: "C",
      label: "専門家として働く",
      profile: {
        specialty: 3
      }
    },
    {
      id: "D",
      label: "顧客と向き合う",
      profile: {
        social: 2
      }
    },
    {
      id: "X",
      label: "🤔 わからない",
      profile: {}
    }
  ]
},

{
  id: "Q30",
  question: "好きな評価制度は？",

  options: [
    {
      id: "A",
      label: "完全実力主義",
      profile: {
        growth: 2,
        salary: 2
      }
    },
    {
      id: "B",
      label: "成果＋プロセス",
      profile: {
        management: 1
      }
    },
    {
      id: "C",
      label: "長期育成型",
      profile: {
        welfare: 2
      }
    },
    {
      id: "D",
      label: "気にしない",
      profile: {}
    },
    {
      id: "X",
      label: "🤔 わからない",
      profile: {}
    }
  ]
},

{
  id: "Q31",
  question: "どんな会社で働きたい？",

  options: [
    {
      id: "A",
      label: "急成長企業",
      profile: {
        growth: 3
      }
    },
    {
      id: "B",
      label: "安定企業",
      profile: {
        welfare: 2
      }
    },
    {
      id: "C",
      label: "専門性の高い会社",
      profile: {
        specialty: 3
      }
    },
    {
      id: "D",
      label: "社会課題を解決する会社",
      profile: {
        social: 3
      }
    },
    {
      id: "X",
      label: "🤔 わからない",
      profile: {}
    }
  ]
},

{
  id: "Q32",
  question: "最も共感する価値観は？",

  options: [
    {
      id: "A",
      label: "圧倒的成長",
      profile: {
        growth: 3
      }
    },
    {
      id: "B",
      label: "経営視点",
      profile: {
        management: 3
      }
    },
    {
      id: "C",
      label: "専門性",
      profile: {
        specialty: 3
      }
    },
    {
      id: "D",
      label: "社会を良くする",
      profile: {
        social: 3
      }
    },
    {
      id: "X",
      label: "🤔 わからない",
      profile: {}
    }
  ]
}

];
