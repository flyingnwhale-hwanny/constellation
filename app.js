/* ==========================================================================
   Space Constellation Explorers - Core JavaScript Application Engine
   ========================================================================== */

// 1. CONSTELLATION DATABASE (16 Representitive Seasonal Constellations)
const CONSTELLATION_DB = {
  spring: [
    {
      id: "bootes",
      nameKo: "목동자리",
      nameEn: "Boötes",
      brightStar: "아크투르스 (Arcturus)",
      shapeDesc: "위쪽은 커다란 연 모양(오각형)을 하고 있고, 아래쪽에 오렌지색으로 밝게 빛나는 아크투르스가 매달린 모습이에요.",
      story: "북두칠성의 국자 손잡이 곡선을 따라가면 만나는 봄철의 목동자리는, 하늘의 곰(큰곰자리)을 쫓아가는 소몰이꾼의 모습을 하고 있답니다.",
      illustration: "🪁",
      stars: [
        { x: 200, y: 320, name: "아크투르스", isBright: true }, // 0
        { x: 160, y: 260 }, // 1
        { x: 150, y: 180 }, // 2
        { x: 200, y: 120 }, // 3
        { x: 250, y: 180 }, // 4
        { x: 240, y: 260 }, // 5
        { x: 100, y: 170 }, // 6 (left arm)
        { x: 300, y: 190 }  // 7 (right arm)
      ],
      connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [2, 6], [4, 7]]
    },
    {
      id: "virgo",
      nameKo: "처녀자리",
      nameEn: "Virgo",
      brightStar: "스피카 (Spica)",
      shapeDesc: "알파벳 'Y'자 모양과 흡사하며, 한가운데 유난히 밝고 푸른 보석처럼 빛나는 1등성 스피카가 위치해 있어요.",
      story: "그리스 신화의 정의의 여신 아스트라이아 혹은 대지의 여신의 딸 페르세포네의 모습으로, 봄철 보리이삭을 손에 쥐고 있는 모습입니다.",
      illustration: "🌾",
      stars: [
        { x: 180, y: 280, name: "스피카", isBright: true }, // 0
        { x: 160, y: 210 }, // 1
        { x: 120, y: 180 }, // 2
        { x: 90, y: 140 },  // 3
        { x: 150, y: 130 }, // 4
        { x: 220, y: 170 }, // 5
        { x: 260, y: 130 }, // 6
        { x: 280, y: 220 }  // 7
      ],
      connections: [[0, 1], [1, 2], [2, 3], [2, 4], [4, 5], [5, 6], [1, 7]]
    },
    {
      id: "hydra",
      nameKo: "바다뱀자리",
      nameEn: "Hydra",
      brightStar: "알파드 (Alphard)",
      shapeDesc: "하늘에서 가장 길고 큰 별자리로, 자그마한 머리 부분에서 시작해 하늘 끝까지 구불구불 이어지는 긴 뱀의 형태를 띱니다.",
      story: "그리스 신화에서 영웅 헤라클레스가 맞서 싸운 머리가 아홉 개 달린 무시무시한 물뱀 하이드라의 전설이 깃들어 있습니다.",
      illustration: "🐍",
      stars: [
        { x: 80, y: 120 },  // 0 (head)
        { x: 95, y: 110 },  // 1
        { x: 110, y: 125 }, // 2
        { x: 100, y: 145 }, // 3
        { x: 85, y: 140 },  // 4
        { x: 150, y: 180, name: "알파드", isBright: true }, // 5 (heart)
        { x: 200, y: 200 }, // 6
        { x: 230, y: 230 }, // 7
        { x: 250, y: 270 }, // 8
        { x: 290, y: 280 }, // 9
        { x: 330, y: 310 }, // 10
        { x: 360, y: 340 }  // 11
      ],
      connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [3, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 11]]
    },
    {
      id: "leo",
      nameKo: "사자자리",
      nameEn: "Leo",
      brightStar: "레굴루스 (Regulus)",
      shapeDesc: "앞부분은 물음표를 뒤집어 놓은 듯한 '낫' 모양(사자의 갈기)이고, 뒷부분은 세모꼴 꼬리로 사자가 엎드려 있는 형상입니다.",
      story: "네메아 골짜기에 살던 거대하고 흉포한 사자로, 영웅 헤라클레스의 몽둥이에도 끄떡없던 가죽을 가졌으나 결국 격퇴되어 별자리가 되었습니다.",
      illustration: "🦁",
      stars: [
        { x: 150, y: 250, name: "레굴루스", isBright: true }, // 0 (heart)
        { x: 155, y: 190 }, // 1
        { x: 120, y: 165 }, // 2
        { x: 130, y: 120 }, // 3
        { x: 170, y: 110 }, // 4
        { x: 180, y: 145 }, // 5
        { x: 300, y: 200, name: "데네볼라" }, // 6 (tail)
        { x: 260, y: 230 }, // 7
        { x: 250, y: 170 }  // 8
      ],
      connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 1], [1, 8], [8, 6], [6, 7], [7, 0]]
    }
  ],
  summer: [
    {
      id: "scorpius",
      nameKo: "전갈자리",
      nameEn: "Scorpius",
      brightStar: "안타레스 (Antares)",
      shapeDesc: "심장부에 붉게 빛나는 거대한 안타레스가 있고, 전체적으로 알파벳 'S'자 모양의 긴 전갈 꼬리 낚시바늘 모양이에요.",
      story: "사냥꾼 오리온이 세상에 무서울 것이 없다고 자만하자, 신들이 그를 벌하기 위해 보낸 맹독 전갈의 모습을 형상화한 별자리입니다.",
      illustration: "🦂",
      stars: [
        { x: 180, y: 160, name: "안타레스", isBright: true }, // 0
        { x: 160, y: 110 }, // 1
        { x: 140, y: 130 }, // 2
        { x: 150, y: 150 }, // 3
        { x: 205, y: 190 }, // 4
        { x: 215, y: 230 }, // 5
        { x: 190, y: 280 }, // 6
        { x: 160, y: 310 }, // 7
        { x: 135, y: 290 }, // 8
        { x: 155, y: 270 }  // 9 (stinger)
      ],
      connections: [[1, 2], [2, 3], [2, 0], [0, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 7]]
    },
    {
      id: "aquila",
      nameKo: "독수리자리",
      nameEn: "Aquila",
      brightStar: "알타이르 (Altair - 견우성)",
      shapeDesc: "가장 밝은 알타이르를 중심으로 좌우에 나란히 작은 별 두 개가 있고, 몸통과 큰 날개가 좌우 십자로 뻗은 형상입니다.",
      story: "제우스 신이 아름다운 소년 가니메데를 올림포스 산으로 데려가기 위해 변신했던 거대한 독수리의 모습이라고 전해집니다.",
      illustration: "🦅",
      stars: [
        { x: 200, y: 180, name: "알타이르", isBright: true }, // 0
        { x: 100, y: 240 }, // 1 (left wing tip)
        { x: 150, y: 210 }, // 2
        { x: 250, y: 150 }, // 3
        { x: 300, y: 120 }, // 4 (right wing tip)
        { x: 230, y: 260 }, // 5 (tail)
        { x: 170, y: 120 }  // 6 (head)
      ],
      connections: [[1, 2], [2, 0], [0, 3], [3, 4], [0, 5], [0, 6]]
    },
    {
      id: "cygnus",
      nameKo: "백조자리",
      nameEn: "Cygnus",
      brightStar: "데네브 (Deneb)",
      shapeDesc: "커다란 십자가 모양(북십자성)으로 밤하늘에 놓여 있어, 은하수 한가운데를 날아가는 아름다운 백조의 날개짓과 같습니다.",
      story: "태양신 아폴론의 아들 파에톤이 마차를 제어하지 못해 추락하자, 그를 구하려 강물에 뛰어들다 백조가 된 절친한 친구의 우정 이야기입니다.",
      illustration: "🦢",
      stars: [
        { x: 200, y: 120, name: "데네브", isBright: true }, // 0
        { x: 200, y: 200 }, // 1 (center)
        { x: 200, y: 320, name: "알비레오" }, // 2 (head)
        { x: 100, y: 200 }, // 3 (left wing tip)
        { x: 150, y: 200 }, // 4
        { x: 250, y: 200 }, // 5
        { x: 300, y: 200 }  // 6 (right wing tip)
      ],
      connections: [[0, 1], [1, 2], [1, 4], [4, 3], [1, 5], [5, 6]]
    },
    {
      id: "sagittarius",
      nameKo: "궁수자리",
      nameEn: "Sagittarius",
      brightStar: "카우스 아우스트랄리스",
      shapeDesc: "어린이들에게는 친숙하게 주전자(Teapot) 모양으로 보이며, 손잡이와 몸통, 물이 나오는 부리 모양이 또렷하게 드러납니다.",
      story: "반인반마(켄타우로스) 현자 케이론이 활시위를 당겨 전갈자리가 오리온을 공격하려 할 때 전갈을 조준하는 모습입니다.",
      illustration: "🏹",
      stars: [
        { x: 200, y: 150 }, // 0 (lid)
        { x: 160, y: 190 }, // 1 (handle top)
        { x: 170, y: 240 }, // 2 (handle bottom)
        { x: 200, y: 230 }, // 3 (base)
        { x: 240, y: 180 }, // 4 (spout top)
        { x: 230, y: 220 }, // 5 (spout bottom)
        { x: 210, y: 190 }, // 6 (bowl right)
        { x: 190, y: 190 }  // 7 (bowl left)
      ],
      connections: [[0, 7], [7, 1], [1, 2], [2, 3], [3, 5], [5, 4], [4, 6], [6, 0], [6, 3], [7, 3]]
    }
  ],
  autumn: [
    {
      id: "pisces",
      nameKo: "물고기자리",
      nameEn: "Pisces",
      brightStar: "알레샤 (Alrescha)",
      shapeDesc: "알파벳 'V'자 모양의 긴 끈 형태로 두 갈래가 갈라져 있고, 그 끝에 동그랗게 뭉쳐진 고리 형태의 물고기 두 마리가 달려있어요.",
      story: "괴물 티폰이 올림포스를 습격했을 때, 사랑의 여신 아프로디테와 그녀의 아들 에로스가 물고기로 변신해 서로 놓치지 않게 끈으로 묶고 도망친 이야기입니다.",
      illustration: "🐟",
      stars: [
        { x: 280, y: 280, name: "알레샤" }, // 0 (join)
        { x: 230, y: 240 }, // 1
        { x: 190, y: 200 }, // 2
        { x: 170, y: 170 }, // 3
        { x: 180, y: 150 }, // 4
        { x: 200, y: 160 }, // 5
        { x: 220, y: 300 }, // 6
        { x: 160, y: 310 }, // 7
        { x: 130, y: 290 }, // 8
        { x: 110, y: 300 }, // 9
        { x: 115, y: 320 }, // 10
        { x: 135, y: 325 }  // 11
      ],
      connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 2], [0, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 7]]
    },
    {
      id: "aquarius",
      nameKo: "물병자리",
      nameEn: "Aquarius",
      brightStar: "사달수드 (Sadalsuud)",
      shapeDesc: "오른편에 'Y'자 모양의 물병(귀족의 세 갈래 나뭇가지 모양)이 놓여있고, 아래쪽으로 물줄기가 흐르는 세밀한 다각형 모양입니다.",
      story: "신들의 세계 올림포스에서 제우스의 총애를 받으며 연회에서 물과 신비의 음료를 따르는 아름다운 가니메데 소년의 모습을 그린 별자리입니다.",
      illustration: "🏺",
      stars: [
        { x: 180, y: 160, name: "사달수드" }, // 0
        { x: 220, y: 140 }, // 1
        { x: 240, y: 180 }, // 2 (jar center)
        { x: 260, y: 160 }, // 3
        { x: 270, y: 200 }, // 4
        { x: 220, y: 230 }, // 5
        { x: 200, y: 270 }, // 6
        { x: 180, y: 320 }, // 7 (stream)
        { x: 130, y: 180 }, // 8
        { x: 150, y: 230 }  // 9
      ],
      connections: [[1, 0], [0, 8], [8, 9], [0, 2], [2, 3], [2, 4], [3, 4], [2, 5], [5, 6], [6, 7]]
    },
    {
      id: "pegasus",
      nameKo: "페가수스자리",
      nameEn: "Pegasus",
      brightStar: "마르카브 (Markab)",
      shapeDesc: "가을철 밤하늘 지도의 기준이 되는 거대한 정사각형('페가수스 사각형')이 몸통을 이루고 아래위로 다리와 목이 뻗어 나옵니다.",
      story: "영웅 벨레로폰이 메두사를 처단한 목에서 태어난 날개 달린 신비의 천마 페가수스로, 공중을 자유로이 비상하는 모습입니다.",
      illustration: "🦄",
      stars: [
        { x: 150, y: 250, name: "마르카브", isBright: true }, // 0 (square bottom left)
        { x: 150, y: 150, name: "셰아트" },  // 1 (square top left)
        { x: 250, y: 250 }, // 2 (square bottom right)
        { x: 250, y: 150, name: "알페라츠", isBright: true }, // 3 (square top right / linked to Andromeda)
        { x: 110, y: 280 }, // 4 (neck)
        { x: 70, y: 270 },  // 5
        { x: 50, y: 290 },  // 6 (nose)
        { x: 110, y: 120 }, // 7 (front leg 1)
        { x: 80, y: 90 },   // 8
        { x: 130, y: 100 }, // 9 (front leg 2)
        { x: 110, y: 60 }   // 10
      ],
      connections: [[0, 1], [1, 3], [3, 2], [2, 0], [0, 4], [4, 5], [5, 6], [1, 7], [7, 8], [1, 9], [9, 10]]
    },
    {
      id: "andromeda",
      nameKo: "안드로메다자리",
      nameEn: "Andromeda",
      brightStar: "알페라츠 (Alpheratz - 페가수스 공용)",
      shapeDesc: "페가수스 자리의 오른쪽 위 모서리 별에서 비스듬하게 뻗어나온 두 줄의 완만한 호선 모양입니다. 은하 M31이 이 주변에 위치합니다.",
      story: "에티오피아의 공주 안드로메다가 어머니의 허영심 때문에 바다 괴물의 제물로 쇠사슬에 묶여있다가, 페르세우스에 의해 구출된 전설입니다.",
      illustration: "👸",
      stars: [
        { x: 100, y: 250, name: "알페라츠", isBright: true }, // 0
        { x: 180, y: 200, name: "미라크" }, // 1
        { x: 260, y: 140, name: "알마크" }, // 2
        { x: 160, y: 160 }, // 3
        { x: 150, y: 120 }, // 4 (galaxy vicinity)
        { x: 200, y: 240 }, // 5
        { x: 270, y: 210 }  // 6
      ],
      connections: [[0, 1], [1, 2], [1, 3], [3, 4], [0, 5], [5, 6], [1, 5]]
    }
  ],
  winter: [
    {
      id: "gemini",
      nameKo: "쌍둥이자리",
      nameEn: "Gemini",
      brightStar: "폴룩스 (Pollux)",
      shapeDesc: "나란히 떠 있는 주황빛 폴룩스와 하얀빛 카스토르 형제의 머리에서 아래로 나란히 길쭉한 몸통 뼈대가 뻗은 정겨운 두 사람의 형상입니다.",
      story: "우애가 무척 깊었던 카스토르와 폴룩스 형제로, 동생이 죽자 불사의 능력을 나누어 달라 간청해 하늘에서 영원히 함께하게 되었습니다.",
      illustration: "👬",
      stars: [
        { x: 180, y: 110, name: "카스토르" }, // 0
        { x: 220, y: 120, name: "폴룩스", isBright: true },  // 1
        { x: 170, y: 180 }, // 2
        { x: 160, y: 240 }, // 3
        { x: 140, y: 300 }, // 4
        { x: 170, y: 310 }, // 5
        { x: 210, y: 190 }, // 6
        { x: 200, y: 250 }, // 7
        { x: 190, y: 310 }, // 8
        { x: 220, y: 300 }  // 9
      ],
      connections: [[0, 2], [2, 3], [3, 4], [3, 5], [1, 6], [6, 7], [7, 8], [7, 9], [0, 1], [2, 6], [3, 7]]
    },
    {
      id: "canisminor",
      nameKo: "작은개자리",
      nameEn: "Canis Minor",
      brightStar: "프로키온 (Procyon)",
      shapeDesc: "오직 두 개의 별만이 직선 하나로 곧게 연결되어 있어, 기하학적으로 가장 심플한 막대 선 형태를 띠고 있습니다.",
      story: "사냥꾼 오리온이 데리고 다니던 지혜로운 충성스러운 사냥개 중 한 마리로, 겨울의 대삼각형 한 모퉁이를 지키고 서 있습니다.",
      illustration: "🐶",
      stars: [
        { x: 220, y: 220, name: "프로키온", isBright: true }, // 0
        { x: 150, y: 180 }  // 1
      ],
      connections: [[0, 1]]
    },
    {
      id: "canismajor",
      nameKo: "큰개자리",
      nameEn: "Canis Major",
      brightStar: "시리우스 (Sirius)",
      shapeDesc: "밤하늘에서 가장 밝은 청백색 별 시리우스가 개 목걸이(가슴) 부분에 찬란히 위치하고, 뒤쪽으로 몸통과 꼬리 다리가 표현됩니다.",
      story: "신화 속 거인 오리온의 두 마리 사냥개 중 가장 덩치가 크고 날쌘 사냥개로, 눈부신 시리우스는 온 밤하늘을 통틀어 가장 밝은 항성입니다.",
      illustration: "🐕",
      stars: [
        { x: 200, y: 160, name: "시리우스", isBright: true }, // 0
        { x: 185, y: 130 }, // 1
        { x: 160, y: 200 }, // 2
        { x: 240, y: 210 }, // 3
        { x: 230, y: 270 }, // 4
        { x: 260, y: 280 }, // 5
        { x: 280, y: 190 }, // 6
        { x: 215, y: 140 }  // 7
      ],
      connections: [[0, 1], [0, 2], [0, 3], [3, 4], [3, 5], [3, 6], [1, 7], [7, 3]]
    },
    {
      id: "orion",
      nameKo: "오리온자리",
      nameEn: "Orion",
      brightStar: "리겔 (Rigel) / 베텔게우스",
      shapeDesc: "밤하늘에서 가장 웅장하고 뚜렷한 나비넥타이(모래시계) 형태로, 가운데 나란히 놓인 삼태성(허리띠)과 어깨의 오렌지색 베텔게우스가 대조를 이룹니다.",
      story: "바다의 신 포세이돈의 아들로 훌륭한 거인 사냥꾼이었으나 여신 아르테미스의 오해로 화살에 맞아 숨진 후 별자리가 되었습니다.",
      illustration: "⚔️",
      stars: [
        { x: 150, y: 150, name: "베텔게우스", isBright: true }, // 0 (red giant)
        { x: 250, y: 160, name: "벨라트릭스" }, // 1
        { x: 190, y: 220, name: "알니탁" },  // 2
        { x: 200, y: 222, name: "알닐람" },  // 3
        { x: 210, y: 224, name: "민타카" },  // 4
        { x: 160, y: 290, name: "사이프" },  // 5
        { x: 240, y: 280, name: "리겔", isBright: true }, // 6 (blue supergiant)
        { x: 200, y: 120 }, // 7 (head)
        { x: 280, y: 150 }, // 8 (shield 1)
        { x: 285, y: 190 }, // 9 (shield 2)
        { x: 280, y: 230 }  // 10 (shield 3)
      ],
      connections: [[0, 7], [7, 1], [0, 2], [1, 4], [2, 3], [3, 4], [2, 5], [4, 6], [5, 6], [1, 9], [9, 8], [9, 10]]
    }
  ]
};

// Flatten list of all 16 constellations for easy indexing
const ALL_CONSTELLATIONS = [];
Object.keys(CONSTELLATION_DB).forEach(season => {
  CONSTELLATION_DB[season].forEach(item => {
    ALL_CONSTELLATIONS.push({
      ...item,
      season: season
    });
  });
});

// 2. SYNTHESIZED SOUND EFFECTS ENGINE (Web Audio API)
const SoundEffects = {
  ctx: null,

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  },

  play(freq, type, duration, vol = 0.1) {
    this.init();
    if (!this.ctx) return;
    
    // Resume context if suspended (browser security)
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const osc = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();

    osc.type = type;
    osc.frequency.value = freq;

    gainNode.gain.setValueAtTime(vol, this.ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

    osc.connect(gainNode);
    gainNode.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  },

  playBubble() {
    // Play a friendly pop sound
    this.play(600, 'sine', 0.1, 0.15);
    setTimeout(() => this.play(900, 'sine', 0.15, 0.1), 60);
  },

  playDiceRoll() {
    this.init();
    if (!this.ctx) return;
    
    // Play a sequence of short low-pitched noise-like bumps
    const startTime = this.ctx.currentTime;
    let delay = 0;
    
    for (let i = 0; i < 8; i++) {
      const pitch = 200 + Math.random() * 150 - (i * 15);
      const dur = 0.05 + Math.random() * 0.05;
      const vol = 0.15 - (i * 0.015);
      
      setTimeout(() => {
        this.play(pitch, 'triangle', dur, vol);
      }, delay);
      
      delay += 80 + (i * 45); // Gradually slow down the clicks
    }
  },

  playSuccess() {
    // Upward clean arpeggio
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.play(freq, 'triangle', 0.4, 0.12);
      }, idx * 100);
    });
  },

  playWrong() {
    // Buzzing low sound
    this.play(180, 'sawtooth', 0.35, 0.15);
    setTimeout(() => this.play(150, 'sawtooth', 0.35, 0.15), 100);
  },

  playSparkle() {
    // Shooting star sweep
    this.init();
    const osc = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(2200, this.ctx.currentTime + 0.4);
    gainNode.gain.setValueAtTime(0.1, this.ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.4);
    osc.connect(gainNode);
    gainNode.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.4);
  },

  playCelebrate() {
    // Rich musical chord sweep
    const chords = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50, 1318.51];
    chords.forEach((freq, idx) => {
      setTimeout(() => {
        this.play(freq, 'sine', 0.8, 0.08);
      }, idx * 60);
    });
  }
};

// 3. MASCOT & VOICE NARRATION CONTROLLER
const MascotController = {
  speechElement: document.getElementById("mascot-text"),
  currentUtterance: null,

  speak(text) {
    this.speechElement.textContent = text;
  },

  setBubbleTextOnly(text) {
    this.speechElement.textContent = text;
  }
};

// 4. PERSISTENT PROGRESS STATE
const GameState = {
  score: 0,
  unlockedBadges: [], // IDs of badges earned
  badgesConfig: [
    { id: "read_all", name: "별나라 척척박사", desc: "도감의 네 계절 별자리를 한 번씩 정밀 탐사했습니다.", icon: "📖" },
    { id: "connect_all", name: "우주 스케치 마스터", desc: "16개 모든 별자리를 그리기 완성했습니다.", icon: "✏️" },
    { id: "sorter_win", name: "계절 정거장 지휘관", desc: "계절 분류기에서 12개 이상을 정답 처리했습니다.", icon: "🌀" },
    { id: "search_win", name: "허블 망원경의 후예", desc: "밤하늘의 비밀 별자리를 모두 탐색했습니다.", icon: "🔭" },
    { id: "spring_guardian", name: "봄 하늘의 수호자", desc: "봄 대표 별자리를 모두 해금했습니다.", icon: "🌸" },
    { id: "summer_guardian", name: "여름 은하의 정령", desc: "여름 대표 별자리를 모두 해금했습니다.", icon: "🌊" },
    { id: "autumn_guardian", name: "가을 별바다 탐사선", desc: "가을 대표 별자리를 모두 해금했습니다.", icon: "🌾" },
    { id: "winter_guardian", name: "겨울 서리꽃 조각가", desc: "겨울 대표 별자리를 모두 해금했습니다.", icon: "❄️" }
  ],
  completedDrawings: [], // constellation IDs completed drawing

  load() {
    const saved = localStorage.getItem("space_explorers_progress");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.score = parsed.score || 0;
        this.unlockedBadges = parsed.unlockedBadges || [];
        this.completedDrawings = parsed.completedDrawings || [];
      } catch (e) {
        console.error("Failed to load game progress", e);
      }
    }
    this.updateHeaderUI();
  },

  save() {
    localStorage.setItem("space_explorers_progress", JSON.stringify({
      score: this.score,
      unlockedBadges: this.unlockedBadges,
      completedDrawings: this.completedDrawings
    }));
    this.updateHeaderUI();
  },

  addScore(points) {
    this.score += points;
    this.save();
    
    // Animate score change if possible
    const scoreVal = document.getElementById("user-score");
    scoreVal.style.transform = "scale(1.2)";
    scoreVal.style.color = "var(--color-accent)";
    setTimeout(() => {
      scoreVal.style.transform = "scale(1)";
      scoreVal.style.color = "#fff";
    }, 300);
  },

  unlockBadge(badgeId) {
    if (!this.unlockedBadges.includes(badgeId)) {
      this.unlockedBadges.push(badgeId);
      this.save();

      // Show celebratory modal
      const badgeObj = this.badgesConfig.find(b => b.id === badgeId);
      if (badgeObj) {
        SoundEffects.playCelebrate();
        document.getElementById("unlocked-badge-icon").textContent = badgeObj.icon;
        document.getElementById("unlocked-badge-name").textContent = badgeObj.name;
        document.getElementById("unlocked-badge-desc").textContent = badgeObj.desc;
        
        const modal = document.getElementById("modal-badge");
        modal.style.display = "flex";
      }
    }
  },

  updateHeaderUI() {
    document.getElementById("user-score").textContent = this.score;
    document.getElementById("badge-count").textContent = `${this.unlockedBadges.length} / ${this.badgesConfig.length}`;
  },

  reset() {
    localStorage.removeItem("space_explorers_progress");
    this.score = 0;
    this.unlockedBadges = [];
    this.completedDrawings = [];
    this.save();
    this.updateHeaderUI();
  }
};

// 5. APPLICATION VIEW ROUTING & GENERAL UI
const AppController = {
  currentViewId: "view-lobby",

  init() {
    // Generate Twinkling background stars dynamically
    this.createTwinklingStars();
    
    // Set active theme based on logo
    document.body.className = "theme-spring";

    // Bind Navigation actions
    document.getElementById("btn-home-logo").addEventListener("click", () => this.switchView("view-lobby"));
    document.getElementById("btn-view-badges").addEventListener("click", () => this.showBadgesCabinet());
    
    // Lobby view card navigations
    document.getElementById("card-goto-library").addEventListener("click", () => this.switchView("view-library"));
    document.getElementById("card-goto-connect").addEventListener("click", () => this.switchView("view-connect"));
    document.getElementById("card-goto-sorter").addEventListener("click", () => this.switchView("view-sorter"));
    document.getElementById("card-goto-search").addEventListener("click", () => this.switchView("view-search"));
    document.getElementById("card-goto-marble").addEventListener("click", () => this.switchView("view-marble-setup"));

    // Back buttons
    document.getElementById("btn-library-back").addEventListener("click", () => this.switchView("view-lobby"));
    document.getElementById("btn-connect-back").addEventListener("click", () => this.switchView("view-lobby"));
    document.getElementById("btn-sorter-back").addEventListener("click", () => this.switchView("view-lobby"));
    document.getElementById("btn-search-back").addEventListener("click", () => this.switchView("view-lobby"));
    document.getElementById("btn-marble-setup-back").addEventListener("click", () => {
      if (typeof MarbleNetwork !== "undefined" && MarbleNetwork.peer) {
        MarbleNetwork.peer.destroy();
        MarbleNetwork.peer = null;
        MarbleNetwork.conn = null;
        MarbleNetwork.conns = [];
        window.history.replaceState({}, document.title, window.location.pathname);
      }
      this.switchView("view-lobby");
    });
    document.getElementById("btn-marble-game-back").addEventListener("click", () => {
      if (confirm("현재 별자리 부루마블 게임을 종료하고 로비로 돌아가시겠습니까?")) {
        MarbleGameModule.endGame(true);
      }
    });

    // Modal close buttons
    document.getElementById("btn-close-badge-modal").addEventListener("click", () => {
      document.getElementById("modal-badge").style.display = "none";
    });
    document.getElementById("btn-close-cabinet").addEventListener("click", () => {
      document.getElementById("modal-badges-cabinet").style.display = "none";
    });
    document.getElementById("btn-reset-progress").addEventListener("click", () => {
      if (confirm("정말로 모든 별자리 탐험 기록과 뱃지를 초기화할까요?")) {
        GameState.reset();
        document.getElementById("modal-badges-cabinet").style.display = "none";
        MascotController.speak("탐험 일지가 모두 초기화되었어! 다시 신나게 채워보자!");
      }
    });

    // Bubble sounds for general button hover/click
    document.querySelectorAll("button, .lobby-card").forEach(el => {
      el.addEventListener("mouseenter", () => {
        // Subtle haptic or audio tick if needed
      });
      el.addEventListener("click", () => {
        SoundEffects.playBubble();
      });
    });

    // Initialize individual modules
    LibraryModule.init();
    ConnectGameModule.init();
    SorterGameModule.init();
    SearchGameModule.init();
    MarbleGameModule.init();
  },

  switchView(viewId) {
    document.querySelectorAll(".app-view").forEach(view => {
      view.classList.remove("active");
    });
    const target = document.getElementById(viewId);
    if (target) {
      target.classList.add("active");
      this.currentViewId = viewId;
    }

    // Adapt mascot speech based on active view
    if (viewId === "view-lobby") {
      document.body.className = "theme-spring";
      MascotController.setBubbleTextOnly("어느 탐사 장비에 접속해 볼까? 공부는 도감을, 게임은 그리기를 가장 추천해!");
    } else if (viewId === "view-library") {
      LibraryModule.onActivate();
    } else if (viewId === "view-connect") {
      ConnectGameModule.onActivate();
    } else if (viewId === "view-sorter") {
      SorterGameModule.onActivate();
    } else if (viewId === "view-search") {
      SearchGameModule.onActivate();
    } else if (viewId === "view-marble-setup") {
      MarbleGameModule.onActivateSetup();
    }
  },

  createTwinklingStars() {
    const container = document.getElementById("stars-container");
    container.innerHTML = "";
    
    // Shooting Star Generators
    for (let i = 0; i < 3; i++) {
      const shooter = document.createElement("div");
      shooter.className = "shooting-star";
      shooter.style.left = `${Math.random() * 80 + 10}%`;
      shooter.style.top = `${Math.random() * 40}%`;
      shooter.style.animationDelay = `${Math.random() * 12}s`;
      container.appendChild(shooter);
    }

    // Static and Twinkling background stars
    const count = 100;
    for (let i = 0; i < count; i++) {
      const star = document.createElement("div");
      const size = Math.random() * 2.5 + 0.8;
      const type = Math.random();
      
      let speedClass = "twinkle-slow";
      if (type > 0.8) speedClass = "twinkle-fast";
      
      let colorClass = "spectral-yellow";
      if (type < 0.25) colorClass = "spectral-blue";
      else if (type > 0.9) colorClass = "spectral-red";

      star.className = `star ${speedClass} ${colorClass}`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 4}s`;
      
      container.appendChild(star);
    }
  },

  showBadgesCabinet() {
    const grid = document.getElementById("badge-cabinet-grid");
    grid.innerHTML = "";

    GameState.badgesConfig.forEach(badge => {
      const hasBadge = GameState.unlockedBadges.includes(badge.id);
      const slot = document.createElement("div");
      slot.className = `badge-slot ${hasBadge ? 'unlocked' : ''}`;
      slot.title = badge.desc;

      slot.innerHTML = `
        <div class="slot-icon">${badge.icon}</div>
        <div class="slot-name">${badge.name}</div>
      `;
      grid.appendChild(slot);
    });

    document.getElementById("modal-badges-cabinet").style.display = "flex";
  }
};

// 6. MODULE: CONSTELLATION LIBRARY (도감)
const LibraryModule = {
  currentSeason: "spring",
  currentConstId: null,
  canvas: document.getElementById("library-canvas"),
  ctx: null,
  readSeasons: [], // Tracks which seasons have been explored in detail

  init() {
    this.ctx = this.canvas.getContext("2d");
    
    // Bind Tab Click Handlers
    document.querySelectorAll(".season-tab").forEach(tab => {
      tab.addEventListener("click", (e) => {
        const season = e.target.getAttribute("data-season");
        this.selectSeason(season);
      });
    });

  },

  onActivate() {
    this.selectSeason(this.currentSeason);
    MascotController.setBubbleTextOnly("별자리 도감에 접속했어! 계절별 탭을 선택하고 관심 있는 별자리를 눌러 재미있는 모양과 신화를 학습해봐.");
  },

  selectSeason(season) {
    this.currentSeason = season;
    
    // Update theme body class
    document.body.className = `theme-${season}`;

    // Update active tab styling
    document.querySelectorAll(".season-tab").forEach(tab => {
      tab.classList.remove("active");
      if (tab.getAttribute("data-season") === season) {
        tab.classList.add("active");
      }
    });

    // Repopulate side list
    const container = document.getElementById("library-list-container");
    container.innerHTML = "";

    const list = CONSTELLATION_DB[season];
    list.forEach((item, idx) => {
      const el = document.createElement("div");
      el.className = `constellation-item ${idx === 0 ? 'active' : ''}`;
      el.innerHTML = `
        <div class="item-left">
          <h4>${item.nameKo}</h4>
          <span>${item.nameEn}</span>
        </div>
        <span class="item-icon">${item.illustration}</span>
      `;
      
      el.addEventListener("click", () => {
        document.querySelectorAll(".constellation-item").forEach(c => c.classList.remove("active"));
        el.classList.add("active");
        this.showDetails(item);
      });

      container.appendChild(el);
    });

    // Select the first one by default
    if (list.length > 0) {
      this.showDetails(list[0]);
    }

    // Badge checker
    if (!this.readSeasons.includes(season)) {
      this.readSeasons.push(season);
      if (this.readSeasons.length === 4) {
        GameState.unlockBadge("read_all");
      }
    }
  },

  getActiveConstellation() {
    const list = CONSTELLATION_DB[this.currentSeason];
    return list.find(item => item.id === this.currentConstId);
  },

  showDetails(item) {
    this.currentConstId = item.id;
    
    // Update labels
    document.getElementById("lib-name-ko").textContent = item.nameKo;
    document.getElementById("lib-name-en").textContent = item.nameEn;
    
    const seasonLabel = { spring: "봄철", summer: "여름철", autumn: "가을철", winter: "겨울철" }[this.currentSeason];
    document.getElementById("lib-season-tag").textContent = `${seasonLabel}의 대표 별자리`;
    document.getElementById("lib-bright-star").textContent = `가장 밝은 별: ${item.brightStar}`;
    document.getElementById("lib-shape-desc").textContent = item.shapeDesc;
    document.getElementById("lib-story-desc").textContent = item.story;

    // Draw the static constellation
    this.drawChart(item);
  },

  drawChart(item) {
    const ctx = this.ctx;
    const cw = this.canvas.width;
    const ch = this.canvas.height;
    ctx.clearRect(0, 0, cw, ch);

    // Draw background subtle grids
    ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let i = 50; i < cw; i += 50) {
      ctx.moveTo(i, 0); ctx.lineTo(i, ch);
      ctx.moveTo(0, i); ctx.lineTo(cw, i);
    }
    ctx.stroke();

    // Set styling based on season color variables
    const activeColor = getComputedStyle(document.body).getPropertyValue('--theme-color').trim() || "#7e57c2";

    // 1. Draw connection lines
    ctx.strokeStyle = activeColor;
    ctx.lineWidth = 2.5;
    ctx.shadowBlur = 12;
    ctx.shadowColor = activeColor;
    
    item.connections.forEach(line => {
      const starStart = item.stars[line[0]];
      const starEnd = item.stars[line[1]];
      ctx.beginPath();
      ctx.moveTo(starStart.x, starStart.y);
      ctx.lineTo(starEnd.x, starEnd.y);
      ctx.stroke();
    });

    // Reset shadow for text and stars
    ctx.shadowBlur = 0;

    // 2. Draw stars
    item.stars.forEach(star => {
      const starSize = star.isBright ? 8 : 5;
      
      // Outer glow for stars
      ctx.shadowBlur = star.isBright ? 15 : 6;
      ctx.shadowColor = star.isBright ? "#fff" : activeColor;
      
      ctx.fillStyle = star.isBright ? "#ffffff" : "#d0e4ff";
      ctx.beginPath();
      ctx.arc(star.x, star.y, starSize, 0, Math.PI * 2);
      ctx.fill();

      // Clear shadow
      ctx.shadowBlur = 0;

      // Draw shiny rays for bright stars
      if (star.isBright) {
        ctx.strokeStyle = "rgba(255,255,255,0.7)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(star.x - 14, star.y);
        ctx.lineTo(star.x + 14, star.y);
        ctx.moveTo(star.x, star.y - 14);
        ctx.lineTo(star.x, star.y + 14);
        ctx.stroke();
      }

      // Draw star labels if named
      if (star.name) {
        ctx.fillStyle = "#ffd05b";
        ctx.font = "bold 12px Noto Sans KR";
        ctx.textAlign = "center";
        ctx.fillText(star.name, star.x, star.y - 14);
      }
    });
  }
};

// 7. MODULE: CONNECT THE DOTS GAME (그리기 모음)
const ConnectGameModule = {
  currentStageIndex: 0,
  canvas: document.getElementById("connect-canvas"),
  ctx: null,
  activeConstellation: null,
  connectedLines: [], // Array of string representation of completed lines: '0-1'
  isDrawing: false,
  dragStartStar: null,
  mousePos: { x: 0, y: 0 },
  hintActive: false,

  init() {
    this.ctx = this.canvas.getContext("2d");
    
    // Canvas interaction events (Touch and Mouse)
    const getPos = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      // Convert to canvas scale coordinates
      return {
        x: (clientX - rect.left) * (this.canvas.width / rect.width),
        y: (clientY - rect.top) * (this.canvas.height / rect.height)
      };
    };

    const handleDown = (e) => {
      e.preventDefault();
      const pos = getPos(e);
      this.mousePos = pos;
      
      // Check if clicked near a star
      const starIdx = this.findStarNear(pos.x, pos.y);
      if (starIdx !== null) {
        this.isDrawing = true;
        this.dragStartStar = starIdx;
      }
    };

    const handleMove = (e) => {
      if (!this.isDrawing) return;
      const pos = getPos(e);
      this.mousePos = pos;
      this.render();
    };

    const handleUp = (e) => {
      if (!this.isDrawing) return;
      this.isDrawing = false;
      
      const pos = this.mousePos;
      const targetStarIdx = this.findStarNear(pos.x, pos.y);
      
      if (targetStarIdx !== null && targetStarIdx !== this.dragStartStar) {
        this.tryConnect(this.dragStartStar, targetStarIdx);
      }
      
      this.dragStartStar = null;
      this.render();
    };

    this.canvas.addEventListener("mousedown", handleDown);
    this.canvas.addEventListener("mousemove", handleMove);
    this.canvas.addEventListener("mouseup", handleUp);

    this.canvas.addEventListener("touchstart", handleDown, { passive: false });
    this.canvas.addEventListener("touchmove", handleMove, { passive: false });
    this.canvas.addEventListener("touchend", handleUp, { passive: false });

    // Buttons
    document.getElementById("btn-connect-hint").addEventListener("click", () => {
      this.hintActive = !this.hintActive;
      document.getElementById("btn-connect-hint").textContent = this.hintActive ? "💡 힌트 해제" : "💡 힌트 보기";
      this.render();
    });

    document.getElementById("btn-connect-reset").addEventListener("click", () => {
      this.connectedLines = [];
      this.render();
      MascotController.setBubbleTextOnly("도화지를 지웠어! 반짝이는 별들을 다시 잘 이어보렴.");
    });

    document.getElementById("btn-connect-next").addEventListener("click", () => {
      this.loadNextStage();
    });
  },

  onActivate() {
    this.currentStageIndex = 0;
    this.loadStage(this.currentStageIndex);
    MascotController.speak("별지도가 열렸어! 첫 번째 도전 별자리 사자자리의 별들을 알맞게 드래그해서 연결해보렴.");
  },

  loadStage(idx) {
    this.currentStageIndex = idx;
    this.activeConstellation = ALL_CONSTELLATIONS[idx];
    this.connectedLines = [];
    this.hintActive = false;
    this.isDrawing = false;
    
    // Hide illustrations overlay
    const overlay = document.getElementById("connect-overlay");
    overlay.style.opacity = "0";

    // Set season classes for styles
    document.body.className = `theme-${this.activeConstellation.season}`;

    // Update Stage UI texts
    document.getElementById("connect-stage-num").textContent = `STAGE ${idx + 1} / 16`;
    document.getElementById("connect-target-name").textContent = this.activeConstellation.nameKo;
    
    const seasonLabel = { spring: "봄", summer: "여름", autumn: "가을", winter: "겨울" }[this.activeConstellation.season];
    document.getElementById("connect-target-desc").textContent = `[${seasonLabel}철 별자리] ${this.activeConstellation.shapeDesc}`;

    document.getElementById("btn-connect-next").style.display = "none";
    document.getElementById("btn-connect-hint").textContent = "💡 힌트 보기";

    // Update Progress Bar
    const progressPercent = (idx / 16) * 100;
    document.getElementById("connect-progress-fill").style.width = `${progressPercent}%`;

    this.render();
  },

  loadNextStage() {
    if (this.currentStageIndex < ALL_CONSTELLATIONS.length - 1) {
      this.loadStage(this.currentStageIndex + 1);
    } else {
      // Completed all 16!
      GameState.unlockBadge("connect_all");
      MascotController.speak("세상에! 16개 모든 계절 대표 별자리를 완성해 냈구나! 정말 대단한 천문 스케치 실력이야!");
      AppController.switchView("view-lobby");
    }
  },

  findStarNear(x, y) {
    const threshold = 25; // Proximity threshold in pixels
    const stars = this.activeConstellation.stars;
    for (let i = 0; i < stars.length; i++) {
      const dx = stars[i].x - x;
      const dy = stars[i].y - y;
      if (Math.sqrt(dx * dx + dy * dy) < threshold) {
        return i;
      }
    }
    return null;
  },

  tryConnect(s1, s2) {
    const key1 = `${s1}-${s2}`;
    const key2 = `${s2}-${s1}`;
    
    // Check if segment is in database
    const isValidLine = this.activeConstellation.connections.some(conn => {
      return (conn[0] === s1 && conn[1] === s2) || (conn[0] === s2 && conn[1] === s1);
    });

    if (isValidLine) {
      if (!this.connectedLines.includes(key1) && !this.connectedLines.includes(key2)) {
        this.connectedLines.push(key1);
        SoundEffects.playSparkle();
        GameState.addScore(15);
        
        // Show status
        const total = this.activeConstellation.connections.length;
        const current = this.connectedLines.length;
        MascotController.setBubbleTextOnly(`멋진 연결이야! (${current} / ${total} 완성)`);

        // Check if finished
        if (current === total) {
          this.triggerCompletion();
        }
      }
    } else {
      SoundEffects.playWrong();
      MascotController.setBubbleTextOnly("앗, 그 두 별은 연결되지 않는 곳이야! 다른 별들을 연결해볼까?");
    }
  },

  triggerCompletion() {
    SoundEffects.playSuccess();
    GameState.addScore(100);

    // Save drawn records
    if (!GameState.completedDrawings.includes(this.activeConstellation.id)) {
      GameState.completedDrawings.push(this.activeConstellation.id);
      GameState.save();
    }

    // Verify season achievements
    this.checkSeasonGuardians();

    // Speak facts
    MascotController.speak(`축하해! ${this.activeConstellation.nameKo}가 완성되었어! ${this.activeConstellation.story}`);

    // Reveal next button
    document.getElementById("btn-connect-next").style.display = "block";
    document.getElementById("btn-connect-next").focus();

    // Trigger full completion visuals (Illustration fade in inside app or canvas)
    this.render(true);
  },

  checkSeasonGuardians() {
    // Check spring
    const springIds = CONSTELLATION_DB.spring.map(c => c.id);
    const summerIds = CONSTELLATION_DB.summer.map(c => c.id);
    const autumnIds = CONSTELLATION_DB.autumn.map(c => c.id);
    const winterIds = CONSTELLATION_DB.winter.map(c => c.id);

    const isSpringDone = springIds.every(id => GameState.completedDrawings.includes(id));
    const isSummerDone = summerIds.every(id => GameState.completedDrawings.includes(id));
    const isAutumnDone = autumnIds.every(id => GameState.completedDrawings.includes(id));
    const isWinterDone = winterIds.every(id => GameState.completedDrawings.includes(id));

    if (isSpringDone) GameState.unlockBadge("spring_guardian");
    if (isSummerDone) GameState.unlockBadge("summer_guardian");
    if (isAutumnDone) GameState.unlockBadge("autumn_guardian");
    if (isWinterDone) GameState.unlockBadge("winter_guardian");
  },

  render(isCompleted = false) {
    const ctx = this.ctx;
    const cw = this.canvas.width;
    const ch = this.canvas.height;
    
    ctx.clearRect(0, 0, cw, ch);
    if (!this.activeConstellation) return;

    const activeColor = getComputedStyle(document.body).getPropertyValue('--theme-color').trim() || "#7e57c2";

    // 1. Draw guidance paths (dashed if hint active)
    if (this.hintActive) {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
      ctx.setLineDash([5, 8]);
      ctx.lineWidth = 2;
      this.activeConstellation.connections.forEach(line => {
        const p1 = this.activeConstellation.stars[line[0]];
        const p2 = this.activeConstellation.stars[line[1]];
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      });
      ctx.setLineDash([]);
    }

    // 2. Draw completed connections
    ctx.strokeStyle = isCompleted ? "#00e676" : activeColor;
    ctx.lineWidth = 4;
    ctx.shadowBlur = 15;
    ctx.shadowColor = isCompleted ? "rgba(0, 230, 118, 0.5)" : activeColor;

    this.connectedLines.forEach(lineStr => {
      const parts = lineStr.split("-").map(Number);
      const p1 = this.activeConstellation.stars[parts[0]];
      const p2 = this.activeConstellation.stars[parts[1]];
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    });
    ctx.shadowBlur = 0; // Reset

    // 3. Draw active drawing path
    if (this.isDrawing && this.dragStartStar !== null) {
      const pStart = this.activeConstellation.stars[this.dragStartStar];
      ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
      ctx.lineWidth = 2;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(pStart.x, pStart.y);
      ctx.lineTo(this.mousePos.x, this.mousePos.y);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // 4. Draw stars
    this.activeConstellation.stars.forEach((star, idx) => {
      const isStart = this.dragStartStar === idx;
      let starSize = star.isBright ? 8 : 5;
      if (isStart) starSize += 4;

      ctx.fillStyle = star.isBright ? "#ffffff" : "#badeff";
      ctx.shadowBlur = star.isBright ? 12 : 6;
      ctx.shadowColor = star.isBright ? "#fff" : activeColor;

      ctx.beginPath();
      ctx.arc(star.x, star.y, starSize, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Pulse ring on current target/next option if hint active
      if (this.hintActive) {
        ctx.strokeStyle = "#ffd05b";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(star.x, star.y, starSize + 6, 0, Math.PI * 2);
        ctx.stroke();
      }

      if (star.isBright) {
        ctx.strokeStyle = "rgba(255,255,255,0.7)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(star.x - 14, star.y);
        ctx.lineTo(star.x + 14, star.y);
        ctx.moveTo(star.x, star.y - 14);
        ctx.lineTo(star.x, star.y + 14);
        ctx.stroke();
      }

      if (star.name) {
        ctx.fillStyle = "#ffd05b";
        ctx.font = "bold 11px Outfit, Noto Sans KR";
        ctx.fillText(star.name, star.x - 20, star.y - 12);
      }
    });

    // 5. Draw big decorative character emoji centered when completed
    if (isCompleted) {
      ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
      ctx.font = "140px Outfit";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(this.activeConstellation.illustration, cw / 2, ch / 2);
    }

    // Update indicators
    const totalLines = this.activeConstellation.connections.length;
    const curLines = this.connectedLines.length;
    document.getElementById("connect-stars-left").textContent = `${curLines} / ${totalLines}`;
  }
};

// 8. MODULE: GALAXY SORTER GAME (드래그 앤 드롭)
const SorterGameModule = {
  deck: [],
  currentCard: null,
  correctCount: 0,
  timerInterval: null,
  timeLeft: 60,
  cardCanvas: document.getElementById("sorter-card-canvas"),
  cardCtx: null,

  init() {
    this.cardCtx = this.cardCanvas.getContext("2d");

    // Drag events for card
    const cardEl = document.getElementById("active-sorter-card");
    cardEl.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", this.currentCard.season);
      cardEl.style.opacity = "0.5";
    });
    
    cardEl.addEventListener("dragend", () => {
      cardEl.style.opacity = "1";
    });

    // Drop targets (Season vortexes)
    document.querySelectorAll(".vortex-box").forEach(vortex => {
      vortex.addEventListener("dragover", (e) => {
        e.preventDefault();
        vortex.classList.add("drag-over");
      });

      vortex.addEventListener("dragleave", () => {
        vortex.classList.remove("drag-over");
      });

      vortex.addEventListener("drop", (e) => {
        e.preventDefault();
        vortex.classList.remove("drag-over");
        const cardSeason = e.dataTransfer.getData("text/plain");
        const targetSeason = vortex.getAttribute("data-season");
        
        this.submitAnswer(cardSeason === targetSeason, targetSeason);
      });

      // Accessibility: click vortex directly to submit
      vortex.addEventListener("click", () => {
        if (!this.currentCard) return;
        const isCorrect = this.currentCard.season === vortex.getAttribute("data-season");
        this.submitAnswer(isCorrect, vortex.getAttribute("data-season"));
      });
    });

    // Game Over restarts
    document.getElementById("btn-sorter-restart").addEventListener("click", () => {
      document.getElementById("sorter-result-overlay").style.display = "none";
      this.startGame();
    });

    document.getElementById("btn-sorter-lobby").addEventListener("click", () => {
      document.getElementById("sorter-result-overlay").style.display = "none";
      AppController.switchView("view-lobby");
    });
  },

  onActivate() {
    this.startGame();
    MascotController.speak("은하 분류 장치가 고장 났어! 별자리 카드를 보고 해당 계절의 은하수 정거장으로 신속히 이동시켜 줘!");
  },

  startGame() {
    this.correctCount = 0;
    this.timeLeft = 60;
    document.getElementById("sorter-score-correct").textContent = "0";
    document.getElementById("sorter-time-left").textContent = this.timeLeft;
    document.getElementById("sorter-result-overlay").style.display = "none";
    
    // Clear vortex counters
    document.getElementById("vortex-count-spring").textContent = "0 / 4";
    document.getElementById("vortex-count-summer").textContent = "0 / 4";
    document.getElementById("vortex-count-autumn").textContent = "0 / 4";
    document.getElementById("vortex-count-winter").textContent = "0 / 4";

    // Build shuffled deck of all 16
    this.deck = [...ALL_CONSTELLATIONS];
    this.shuffle(this.deck);
    
    // Timer
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      document.getElementById("sorter-time-left").textContent = this.timeLeft;
      if (this.timeLeft <= 0) {
        this.endGame();
      }
    }, 1000);

    this.drawNextCard();
  },

  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  },

  drawNextCard() {
    document.getElementById("sorter-cards-left").textContent = this.deck.length;

    if (this.deck.length === 0) {
      this.endGame();
      return;
    }

    this.currentCard = this.deck.pop();
    
    // Update theme card styling
    document.getElementById("active-sorter-card").style.borderColor = `var(--color-${this.currentCard.season})`;
    
    document.getElementById("sorter-card-name").textContent = this.currentCard.nameKo;
    
    // Custom hint text containing bright star details
    document.getElementById("sorter-card-hint").textContent = `가장 밝은 별: ${this.currentCard.brightStar}`;

    // Draw miniature star path on card preview
    this.drawCardPreview(this.currentCard);
  },

  drawCardPreview(item) {
    const ctx = this.cardCtx;
    const w = this.cardCanvas.width;
    const h = this.cardCanvas.height;
    ctx.clearRect(0, 0, w, h);

    // Map 400x400 space onto miniature 180x180 card space
    const scale = w / 400;

    // Draw connection lines
    ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
    ctx.lineWidth = 2.5;
    item.connections.forEach(line => {
      const p1 = item.stars[line[0]];
      const p2 = item.stars[line[1]];
      ctx.beginPath();
      ctx.moveTo(p1.x * scale, p1.y * scale);
      ctx.lineTo(p2.x * scale, p2.y * scale);
      ctx.stroke();
    });

    // Draw stars
    item.stars.forEach(star => {
      ctx.fillStyle = star.isBright ? "#ffffff" : "#80b0ff";
      ctx.beginPath();
      ctx.arc(star.x * scale, star.y * scale, star.isBright ? 4 : 2.5, 0, Math.PI * 2);
      ctx.fill();
    });
  },

  submitAnswer(isCorrect, submittedSeason) {
    if (isCorrect) {
      this.correctCount++;
      SoundEffects.playSparkle();
      GameState.addScore(25);
      
      // Update vortex counters
      const vortexCountEl = document.getElementById(`vortex-count-${submittedSeason}`);
      const cur = parseInt(vortexCountEl.textContent.split(" / ")[0]) + 1;
      vortexCountEl.textContent = `${cur} / 4`;

      MascotController.setBubbleTextOnly(`딩동댕! ${this.currentCard.nameKo}는 ${submittedSeason === 'spring' ? '봄' : submittedSeason === 'summer' ? '여름' : submittedSeason === 'autumn' ? '가을' : '겨울'}철 대표 별자리가 맞아!`);
      
      document.getElementById("sorter-score-correct").textContent = this.correctCount;
    } else {
      SoundEffects.playWrong();
      MascotController.setBubbleTextOnly(`앗! ${this.currentCard.nameKo}는 다른 계절 정거장에 탑승해야 해. 다시 집중해보자!`);
    }

    this.drawNextCard();
  },

  endGame() {
    clearInterval(this.timerInterval);
    
    // Calculate final scores
    const bonus = this.correctCount * 30;
    GameState.addScore(bonus);

    document.getElementById("result-sorter-correct").textContent = `${this.correctCount} / 16 개`;
    document.getElementById("result-sorter-points").textContent = `+${bonus} 점`;

    // Unlock badge if 12+ correct
    if (this.correctCount >= 12) {
      GameState.unlockBadge("sorter_win");
    }

    document.getElementById("sorter-result-overlay").style.display = "flex";
  }
};

// 9. MODULE: SKY SEARCH GAME (밤하늘 조준 퀴즈)
const SearchGameModule = {
  canvas: document.getElementById("search-sky-canvas"),
  ctx: null,
  skyWidth: 1200,
  skyHeight: 900,
  panningOffset: { x: 0, y: 0 },
  isDragging: false,
  wasDragging: false,
  dragStartMouse: { x: 0, y: 0 },
  dragStartOffset: { x: 0, y: 0 },
  pannedSkyElementsBySeason: { spring: [], summer: [], autumn: [], winter: [] },
  extraStarsBySeason: { spring: [], summer: [], autumn: [], winter: [] },
  currentTarget: null,
  targetList: [],
  foundCount: 0,
  currentSeason: "spring",
  sightSize: 160,
  isTransitioning: false,

  init() {
    this.ctx = this.canvas.getContext("2d");

    // Click/Touch panning logic
    const container = document.getElementById("sky-drag-container");
    const sight = document.getElementById("telescope-sight");

    container.addEventListener("mousedown", (e) => {
      this.isDragging = true;
      this.wasDragging = false;
      this.dragStartMouse = { x: e.clientX, y: e.clientY };
      this.dragStartOffset = { ...this.panningOffset };
      container.style.cursor = "grabbing";
    });

    container.addEventListener("mousemove", (e) => {
      const rect = container.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;

      // Move telescope sight frame
      sight.style.display = "block";
      sight.style.left = `${relativeX}px`;
      sight.style.top = `${relativeY}px`;

      if (!this.isDragging) return;
      
      const dx = e.clientX - this.dragStartMouse.x;
      const dy = e.clientY - this.dragStartMouse.y;
      
      // If moved more than 5px, mark as drag
      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
        this.wasDragging = true;
      }

      // Update camera offset boundaries
      this.panningOffset.x = Math.max(0, Math.min(this.skyWidth - rect.width, this.dragStartOffset.x - dx));
      this.panningOffset.y = Math.max(0, Math.min(this.skyHeight - rect.height, this.dragStartOffset.y - dy));

      this.render();
    });

    window.addEventListener("mouseup", () => {
      this.isDragging = false;
      container.style.cursor = "grab";
    });

    // Check hit click on telescope sight center
    container.addEventListener("click", (e) => {
      if (this.wasDragging) {
        this.wasDragging = false;
        return;
      }
      
      const rect = container.getBoundingClientRect();
      const clickX = (e.clientX - rect.left) + this.panningOffset.x;
      const clickY = (e.clientY - rect.top) + this.panningOffset.y;

      this.checkTargetHit(clickX, clickY);
    });

    // Restart button handlers
    document.getElementById("btn-search-restart").addEventListener("click", () => {
      this.startGame();
    });
    document.getElementById("btn-search-lobby").addEventListener("click", () => {
      AppController.switchView("view-lobby");
    });

    // Season tab selectors
    document.querySelectorAll(".search-season-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.currentSeason = btn.getAttribute("data-season");
        this.updateSeasonTabsUI();
        this.render();
        this.updateRadarDot();
      });
    });

    // Telescope size slider binding
    const slider = document.getElementById("search-sight-size-slider");
    const valLabel = document.getElementById("telescope-size-value");
    if (slider && valLabel) {
      slider.addEventListener("input", (e) => {
        this.sightSize = parseInt(e.target.value);
        valLabel.textContent = `${this.sightSize}px`;
        if (sight) {
          sight.style.width = `${this.sightSize}px`;
          sight.style.height = `${this.sightSize}px`;
        }
      });
      
      // Setup default initial size
      this.sightSize = parseInt(slider.value);
      valLabel.textContent = `${this.sightSize}px`;
      if (sight) {
        sight.style.width = `${this.sightSize}px`;
        sight.style.height = `${this.sightSize}px`;
      }
    }
  },

  onActivate() {
    this.startGame();
    MascotController.speak("밤하늘 탐험 망원경을 정밀 활성화했어! 각 계절 탭을 누르면 해당 계절의 밤하늘로 이동해. 힌트 메시지를 보고 알맞은 계절로 이동해 목표 별자리를 조준해봐!");
  },

  startGame() {
    this.foundCount = 0;
    this.isTransitioning = false;
    document.getElementById("search-result-overlay").style.display = "none";
    document.getElementById("search-left-count").textContent = `0 / 16`;

    // 1. Build background noise stars for each season (brightened default stars)
    this.extraStarsBySeason = { spring: [], summer: [], autumn: [], winter: [] };
    for (const season of ["spring", "summer", "autumn", "winter"]) {
      for (let i = 0; i < 60; i++) {
        this.extraStarsBySeason[season].push({
          x: Math.random() * this.skyWidth,
          y: Math.random() * this.skyHeight,
          size: Math.random() * 2 + 0.8,
          alpha: Math.random() * 0.4 + 0.6
        });
      }
    }

    // 2. Lay out 4 constellations per season in a 2x2 grid
    this.pannedSkyElementsBySeason = { spring: [], summer: [], autumn: [], winter: [] };
    const cols = 2;
    const rows = 2;
    const cellW = this.skyWidth / cols;
    const cellH = this.skyHeight / rows;

    for (const season of ["spring", "summer", "autumn", "winter"]) {
      const deck = [...CONSTELLATION_DB[season]];
      this.shuffle(deck);

      let k = 0;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (k >= deck.length) break;
          const item = deck[k++];
          item.season = season; // Inject season property

          // Random placement offset within cell
          const offsetX = cellW * c + Math.random() * (cellW - 320) + 40;
          const offsetY = cellH * r + Math.random() * (cellH - 320) + 40;

          this.pannedSkyElementsBySeason[season].push({
            constellation: item,
            originX: offsetX,
            originY: offsetY,
            found: false
          });
        }
      }
    }

    // Build target queue and inject season property
    this.targetList = [];
    for (const season in CONSTELLATION_DB) {
      CONSTELLATION_DB[season].forEach(item => {
        item.season = season; // Inject season property
        this.targetList.push(item);
      });
    }
    this.shuffle(this.targetList);

    this.selectNextTarget();
    this.render();
  },

  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  },

  updateSeasonTabsUI() {
    document.querySelectorAll(".search-season-btn").forEach(btn => {
      if (btn.getAttribute("data-season") === this.currentSeason) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  },

  selectNextTarget() {
    if (this.targetList.length === 0) {
      this.endGame();
      return;
    }

    this.currentTarget = this.targetList.pop();
    document.getElementById("search-target-text").textContent = this.currentTarget.nameKo;

    // Auto switch season tab to target's season!
    this.currentSeason = this.currentTarget.season;
    this.updateSeasonTabsUI();

    const labelSeason = { spring: "봄", summer: "여름", autumn: "가을", winter: "겨울" }[this.currentTarget.season];
    document.getElementById("search-clue-text").textContent = `[계절] ${labelSeason}철 별자리\n[길잡이 별] ${this.currentTarget.brightStar}\n[모양] ${this.currentTarget.shapeDesc}`;

    this.updateRadarDot();
    document.getElementById("search-left-count").textContent = `${this.foundCount} / 16`;
  },

  updateRadarDot() {
    const activeSkyElements = this.pannedSkyElementsBySeason[this.currentTarget.season];
    const targetMap = activeSkyElements.find(el => el.constellation.id === this.currentTarget.id);
    const radarDot = document.getElementById("radar-hint-dot");
    
    if (targetMap && radarDot) {
      if (this.currentSeason === this.currentTarget.season) {
        radarDot.style.display = "block";
        
        // Calculate true centroid of the constellation stars
        const item = targetMap.constellation;
        let sumX = 0, sumY = 0;
        item.stars.forEach(s => {
          sumX += s.x;
          sumY += s.y;
        });
        const centerX = sumX / item.stars.length;
        const centerY = sumY / item.stars.length;

        const targetCenterX = targetMap.originX + centerX;
        const targetCenterY = targetMap.originY + centerY;
        radarDot.style.left = `${(targetCenterX / this.skyWidth) * 100}%`;
        radarDot.style.top = `${(targetCenterY / this.skyHeight) * 100}%`;
      } else {
        radarDot.style.display = "none";
      }
    }
  },

  checkTargetHit(x, y) {
    if (this.isTransitioning) return;

    if (this.currentSeason !== this.currentTarget.season) {
      SoundEffects.playWrong();
      const targetLabel = { spring: "봄하늘", summer: "여름하늘", autumn: "가을하늘", winter: "겨울하늘" }[this.currentTarget.season];
      MascotController.setBubbleTextOnly(`이곳은 ${targetLabel}에 속하지 않아요! 길잡이 힌트를 읽고 [${targetLabel}] 탭으로 먼저 이동해 별자리를 찾으세요.`);
      return;
    }

    const activeElements = this.pannedSkyElementsBySeason[this.currentSeason];
    const targetMap = activeElements.find(el => el.constellation.id === this.currentTarget.id);
    if (!targetMap) return;

    const item = targetMap.constellation;
    const ox = targetMap.originX;
    const oy = targetMap.originY;

    // Check 1: 70% of the constellation's stars are inside the telescope viewfinder circle
    const R = this.sightSize / 2;
    let starsInside = 0;
    item.stars.forEach(star => {
      const starAbsoluteX = ox + star.x;
      const starAbsoluteY = oy + star.y;
      const d = Math.sqrt((starAbsoluteX - x) ** 2 + (starAbsoluteY - y) ** 2);
      if (d <= R) {
        starsInside++;
      }
    });
    const insideRatio = starsInside / item.stars.length;
    const is70PercentInside = insideRatio >= 0.7;

    // Calculate true centroid of the constellation stars
    let sumX = 0, sumY = 0;
    item.stars.forEach(s => {
      sumX += s.x;
      sumY += s.y;
    });
    const centerX = sumX / item.stars.length;
    const centerY = sumY / item.stars.length;

    // Check 2: Center distance check (fallback for small constellations or close centering)
    const tx = ox + centerX;
    const ty = oy + centerY;
    const centerDistance = Math.sqrt((tx - x) ** 2 + (ty - y) ** 2);
    const allowedDistance = Math.max(120, this.sightSize * 0.9);
    const isCenterClose = centerDistance < allowedDistance;

    if (is70PercentInside || isCenterClose) {
      this.isTransitioning = true;
      targetMap.found = true;
      this.foundCount++;
      
      SoundEffects.playSuccess();
      GameState.addScore(40);

      const addEl = document.getElementById("search-score-add");
      addEl.textContent = `+40 점!`;
      addEl.className = "score-addition pop";
      setTimeout(() => {
        addEl.className = "score-addition";
      }, 1200);

      MascotController.speak(`대단해! ${this.currentTarget.nameKo}를 완벽하게 포착했어. ${this.currentTarget.story}`);
      
      this.render(); // Render immediately so they see the bright glowing constellation!
      
      setTimeout(() => {
        this.isTransitioning = false;
        this.selectNextTarget();
        this.render();
      }, 2000);
    } else {
      SoundEffects.playWrong();
      MascotController.setBubbleTextOnly("망원경 초점 안에 아무것도 보이지 않아. 밤하늘 레이더나 길잡이 힌트를 읽고 다시 조준해볼까?");
    }
  },

  endGame() {
    SoundEffects.playCelebrate();
    GameState.unlockBadge("search_win");
    
    const bonus = 400;
    GameState.addScore(bonus);

    document.getElementById("result-search-points").textContent = `+${bonus} 점`;
    document.getElementById("search-result-overlay").style.display = "flex";
  },

  render() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.skyWidth, this.skyHeight);

    ctx.save();
    ctx.translate(-this.panningOffset.x, -this.panningOffset.y);

    // 1. Draw cosmic background noise stars for current season
    const extraStars = this.extraStarsBySeason[this.currentSeason] || [];
    extraStars.forEach(star => {
      ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
    });

    // 2. Draw active season's mapped constellations
    const activeElements = this.pannedSkyElementsBySeason[this.currentSeason] || [];
    activeElements.forEach(element => {
      const item = element.constellation;
      const ox = element.originX;
      const oy = element.originY;

      // Draw lines if already discovered, otherwise hidden
      if (element.found) {
        ctx.strokeStyle = "rgba(0, 230, 118, 0.8)";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(0, 230, 118, 0.6)";
        ctx.lineWidth = 2.5;
        item.connections.forEach(line => {
          const p1 = item.stars[line[0]];
          const p2 = item.stars[line[1]];
          ctx.beginPath();
          ctx.moveTo(ox + p1.x, oy + p1.y);
          ctx.lineTo(ox + p2.x, oy + p2.y);
          ctx.stroke();
        });
        ctx.shadowBlur = 0; // Reset after drawing lines
      }

      // Draw stars
      item.stars.forEach(star => {
        if (element.found) {
          // Discovered stars shine extremely brightly
          ctx.fillStyle = star.isBright ? "#ffea00" : "#ffffff";
          ctx.shadowBlur = star.isBright ? 15 : 8;
          ctx.shadowColor = star.isBright ? "#ffea00" : "#ffffff";
          
          ctx.beginPath();
          ctx.arc(ox + star.x, oy + star.y, star.isBright ? 9 : 6, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0; // Reset

          // Draw cross flare for bright stars
          if (star.isBright) {
            ctx.strokeStyle = "rgba(255, 234, 0, 0.8)";
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(ox + star.x - 14, oy + star.y);
            ctx.lineTo(ox + star.x + 14, oy + star.y);
            ctx.moveTo(ox + star.x, oy + star.y - 14);
            ctx.lineTo(ox + star.x, oy + star.y + 14);
            ctx.stroke();
          }
        } else {
          // Undiscovered stars are faint but clearly visible (brightened default stars)
          ctx.fillStyle = star.isBright ? "rgba(255, 255, 255, 0.85)" : "rgba(158, 208, 255, 0.65)";
          ctx.shadowBlur = star.isBright ? 5 : 2;
          ctx.shadowColor = "#ffffff";
          
          ctx.beginPath();
          ctx.arc(ox + star.x, oy + star.y, star.isBright ? 6.5 : 4.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Write names if found
      if (element.found) {
        // Calculate true centroid for label placement
        let sumX = 0, sumY = 0;
        item.stars.forEach(s => {
          sumX += s.x;
          sumY += s.y;
        });
        const centerX = sumX / item.stars.length;
        const centerY = sumY / item.stars.length;

        ctx.fillStyle = "#ffd05b";
        ctx.shadowBlur = 5;
        ctx.shadowColor = "#ffd05b";
        ctx.font = "bold 15px Noto Sans KR";
        ctx.textAlign = "center";
        ctx.fillText(item.nameKo, ox + centerX, oy + centerY - 45); // Label beautifully centered above centroid
        ctx.shadowBlur = 0;
      }
    });

    ctx.restore();

    const rawCanvas = document.getElementById("search-sky-canvas");
    rawCanvas.style.transform = `translate(${-this.panningOffset.x}px, ${-this.panningOffset.y}px)`;
  }
};

// 10. INITIALIZATION TRIGGER
window.addEventListener("DOMContentLoaded", () => {
  GameState.load();
  AppController.init();
});
