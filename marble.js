/* ==========================================================================
   Space Constellation Explorers - Board Game Module (별자리 부루마블)
   ========================================================================== */

// 1. BOARD TILE CONFIGURATION (24 Tiles: 4 Corners + 16 Constellations + 4 Chance Cards)
const MARBLE_BOARD_TILES = [
  { type: "start", name: "출발", icon: "🚀", desc: "이곳을 통과할 때마다 별가루 100을 받습니다." },
  { type: "constellation", id: "leo", name: "사자자리", season: "spring", price: 120, toll: 50 },
  { type: "constellation", id: "virgo", name: "처녀자리", season: "spring", price: 120, toll: 50 },
  { type: "chance", name: "황금열쇠", icon: "🔑", desc: "우주 미지의 구역입니다. 특별한 임무 카드를 뽑습니다!" },
  { type: "constellation", id: "bootes", name: "목동자리", season: "spring", price: 140, toll: 60 },
  { type: "constellation", id: "hydra", name: "바다뱀자리", season: "spring", price: 150, toll: 70 },
  { type: "station", name: "우주정거장", icon: "🛰️", desc: "도착하면 다음 턴에 원하는 타일로 바로 우주 점프(워프)할 수 있습니다." },
  { type: "constellation", id: "scorpius", name: "전갈자리", season: "summer", price: 180, toll: 80 },
  { type: "constellation", id: "aquila", name: "독수리자리", season: "summer", price: 180, toll: 80 },
  { type: "chance", name: "황금열쇠", icon: "🔑", desc: "우주 미지의 구역입니다. 특별한 임무 카드를 뽑습니다!" },
  { type: "constellation", id: "cygnus", name: "백조자리", season: "summer", price: 200, toll: 90 },
  { type: "constellation", id: "sagittarius", name: "궁수자리", season: "summer", price: 220, toll: 100 },
  { type: "blackhole", name: "블랙홀", icon: "🕳️", desc: "우주선이 갇혔습니다! 탈출하려면 다음 턴에 주사위 더블이 나오거나, 50 별가루를 벌금으로 내야 합니다." },
  { type: "constellation", id: "pegasus", name: "페가수스자리", season: "autumn", price: 240, toll: 110 },
  { type: "constellation", id: "andromeda", name: "안드로메다자리", season: "autumn", price: 240, toll: 110 },
  { type: "chance", name: "황금열쇠", icon: "🔑", desc: "우주 미지의 구역입니다. 특별한 임무 카드를 뽑습니다!" },
  { type: "constellation", id: "pisces", name: "물고기자리", season: "autumn", price: 260, toll: 120 },
  { type: "constellation", id: "aquarius", name: "물병자리", season: "autumn", price: 280, toll: 130 },
  { type: "meteor", name: "유성우급행", icon: "☄️", desc: "유성우의 꼬리를 타서 보너스로 주사위를 한 번 더 던질 수 있습니다!" },
  { type: "constellation", id: "gemini", name: "쌍둥이자리", season: "winter", price: 300, toll: 140 },
  { type: "constellation", id: "canisminor", name: "작은개자리", season: "winter", price: 300, toll: 140 },
  { type: "chance", name: "황금열쇠", icon: "🔑", desc: "우주 미지의 구역입니다. 특별한 임무 카드를 뽑습니다!" },
  { type: "constellation", id: "canismajor", name: "큰개자리", season: "winter", price: 320, toll: 150 },
  { type: "constellation", id: "orion", name: "오리온자리", season: "winter", price: 350, toll: 180 }
];

// 2. EDUCATIONAL MULTIPLE CHOICE QUIZZES
const MARBLE_QUIZZES = {
  bootes: {
    q: "목동자리의 가장 아래쪽 꼬리 부분에서 오렌지색으로 밝게 빛나는 봄철의 길잡이 별 이름은?",
    options: ["아크투르스", "스피카", "시리우스", "안타레스"],
    ans: 0
  },
  virgo: {
    q: "봄철 밤하늘 지도의 기준이 되는 별자리로, 스피카를 품고 있는 알파벳 'Y'자 모양의 별자리는?",
    options: ["물병자리", "처녀자리", "쌍둥이자리", "백조자리"],
    ans: 1
  },
  hydra: {
    q: "하늘에서 가장 긴 크기를 가진 별자리로 아홉 개의 머리를 가진 물뱀 신화와 얽힌 별자리는?",
    options: ["처녀자리", "목동자리", "바다뱀자리", "사자자리"],
    ans: 2
  },
  leo: {
    q: "사자자리의 머리 부분은 거꾸로 세워진 물음표 모양을 닮았습니다. 이를 무엇이라 부를까요?",
    options: ["사자의 낫(갈기)", "사자의 발톱", "사자의 방패", "사자의 창"],
    ans: 0
  },
  scorpius: {
    q: "전갈자리의 심장에 자리 잡고 있으며 붉은빛으로 이글거리는 거대한 별의 이름은?",
    options: ["스피카", "안타레스", "데네브", "리겔"],
    ans: 1
  },
  aquila: {
    q: "독수리자리의 1등성으로 한국 전설의 '견우와 직녀' 중 견우성에 해당하는 별의 학명은?",
    options: ["데네브", "아크투르스", "알타이르", "프로키온"],
    ans: 2
  },
  cygnus: {
    q: "은하수 한가운데를 날아가는 형태를 띠며, 밤하늘에서 거대한 십자가 모양(북십자성)을 이룬 별자리는?",
    options: ["독수리자리", "페가수스자리", "백조자리", "궁수자리"],
    ans: 2
  },
  sagittarius: {
    q: "궁수자리는 주전자 모양을 하고 있습니다. 원래 그리스 신화의 어떤 종족 현자가 활을 쏘는 모습일까요?",
    options: ["반인반마 (켄타우로스)", "날개 달린 천마 (페가수스)", "사자", "황소"],
    ans: 0
  },
  pisces: {
    q: "두 마리의 물고기가 아름다운 끈(리본)에 묶여 도망치는 애틋한 형상의 가을 별자리는?",
    options: ["물고기자리", "물병자리", "쌍둥이자리", "처녀자리"],
    ans: 0
  },
  aquarius: {
    q: "신들의 세계에서 신비한 음료를 따르는 아름다운 소년 '가니메데'의 전설이 깃든 별자리는?",
    options: ["처녀자리", "물개자리", "물병자리", "작은개자리"],
    ans: 2
  },
  pegasus: {
    q: "가을철 별자리 지도의 기준이 되며, 거대한 사각형(Great Square) 모양의 몸통을 가진 천마 별자리는?",
    options: ["안드로메다자리", "페가수스자리", "독수리자리", "오리온자리"],
    ans: 1
  },
  andromeda: {
    q: "페가수스자리에서 연결되어 뻗어 나온 호선 모양으로, 우리 은하에서 가장 가깝고 유명한 대은하가 보이는 별자리는?",
    options: ["안드로메다자리", "물고기자리", "처녀자리", "오리온자리"],
    ans: 0
  },
  gemini: {
    q: "쌍둥이자리의 나란히 빛나는 두 형제 머리 별 이름 중 주황빛을 띠는 1등성 별의 이름은?",
    options: ["카스토르", "폴룩스", "시리우스", "안타레스"],
    ans: 1
  },
  canisminor: {
    q: "오직 단 두 개의 별만이 하나의 직선으로 심플하게 이어진 겨울철 별자리는?",
    options: ["큰개자리", "작은개자리", "독수리자리", "물병자리"],
    ans: 1
  },
  canismajor: {
    q: "큰개자리의 목걸이(가슴)에 위치하며, 온 밤하늘을 통틀어 가장 밝게 빛나는 청백색 항성은?",
    options: ["시리우스", "베텔게우스", "리겔", "폴룩스"],
    ans: 0
  },
  orion: {
    q: "오리온자리 중앙에 세 개의 별이 일렬로 나란히 늘어서 있는 허리띠 부분을 가리키는 고유의 이름은?",
    options: ["삼태성", "북두칠성", "카시오페아", "황도성"],
    ans: 0
  }
};

// 2.5. CHANCE CARD DATABASE
const CHANCE_CARDS = [
  {
    id: "exemption",
    title: "✨ 우주 통행세 면제권",
    desc: "다음번에 다른 탐험대의 영토에 착륙했을 때, 통행료를 1회 면제받습니다! (우주 실드로 무장합니다)"
  },
  {
    id: "donation",
    title: "☄️ 기부단 기금 기부",
    desc: "우주 평화 유지 활동을 위해 별가루 50을 기부합니다. (재고가 없으면 파산하지 않고 전액 기부)"
  },
  {
    id: "escape",
    title: "🕳️ 블랙홀 탈출 연료",
    desc: "블랙홀 중력을 무력화할 수 있는 비상 탈출 코드가 생성되었습니다. (블랙홀에 갇혔을 때 즉시 사용 가능)"
  },
  {
    id: "lottery",
    title: "🌟 보너스 별가루 당첨",
    desc: "은하수 초신성 관측 대회에서 우승하여 보너스 별가루 150을 지원받습니다!"
  },
  {
    id: "repair",
    title: "🛰️ 우주선 엔진 결함 수리",
    desc: "유성 충돌로 인한 미세 정비 보수가 필요합니다. 우주정거장에 정비비 70 별가루를 납부합니다."
  },
  {
    id: "warp",
    title: "🌀 강제 은하 도약",
    desc: "미확인 웜홀을 통과했습니다! 우주선이 즉시 우주정거장(Tile 6)으로 공간 이동합니다."
  },
  {
    id: "abundance",
    title: "🛸 은하 무역 연합 지원금",
    desc: "새로운 무역 항로 개척에 성공하여, 다른 모든 플레이어들로부터 각각 30 별가루를 투자받습니다!"
  },
  {
    id: "free_claim",
    title: "🪐 무료 별자리 개척권",
    desc: "우주 개척선이 비어있는 무주공산 행성을 발견했습니다! 현재 위치에서 가장 가까운 빈 별자리를 즉시 공짜로 점령합니다. (빈 별자리가 없으면 100 별가루 보상)"
  }
];

// 3. PEER-TO-PEER MULTIPLAYER NETWORKING MODULE
const MarbleNetwork = {
  peer: null,
  conn: null,       // Client's connection to Host
  conns: [],        // Host's connections to Clients
  isHost: false,
  roomId: "",
  activePlayersList: [], // Connected online list: { id, name, peerId, isHost, teamIdx }
  slotsList: [],         // Slot or team names from Host

  init() {
    const urlParams = new URLSearchParams(window.location.search);
    const roomParam = urlParams.get("room");
    if (roomParam) {
      this.roomId = roomParam;
      document.getElementById("modal-online-join").style.display = "flex";
      
      document.getElementById("btn-submit-join").addEventListener("click", () => {
        const nickname = document.getElementById("online-join-nickname").value.trim() || "새 탐험가";
        const selectedIdx = document.getElementById("online-join-slot").selectedIndex;
        this.joinRoom(roomParam, nickname, selectedIdx);
      });
      document.getElementById("btn-cancel-join").addEventListener("click", () => {
        document.getElementById("modal-online-join").style.display = "none";
        window.history.replaceState({}, document.title, window.location.pathname);
      });
    }

    document.getElementById("btn-conn-local").addEventListener("click", () => {
      document.getElementById("btn-conn-local").classList.add("active");
      document.getElementById("btn-conn-online").classList.remove("active");
      document.getElementById("setup-online-actions").style.display = "none";
      document.getElementById("online-status-banner").style.display = "none";
    });

    document.getElementById("btn-conn-online").addEventListener("click", () => {
      document.getElementById("btn-conn-online").classList.add("active");
      document.getElementById("btn-conn-local").classList.remove("active");
      document.getElementById("setup-online-actions").style.display = "flex";
      document.getElementById("online-status-banner").style.display = "block";
    });

    document.getElementById("btn-create-room").addEventListener("click", () => {
      this.createRoom();
    });

    document.getElementById("btn-copy-link").addEventListener("click", () => {
      const inviteLink = window.location.origin + window.location.pathname + "?room=" + this.roomId;
      navigator.clipboard.writeText(inviteLink).then(() => {
        alert("초대 링크가 복사되었습니다! 카톡이나 메신저로 친구들을 초대해 보세요.");
      }).catch(err => {
        alert("직접 링크를 복사해서 전송하세요:\n" + inviteLink);
      });
    });
  },

  createRoom() {
    this.isHost = true;
    this.roomId = Math.floor(10000 + Math.random() * 90000).toString();
    const peerId = "constellation-room-" + this.roomId;
    
    document.getElementById("online-status-text").textContent = "접속 서버 연결 중...";
    
    // Explicit primary secure PeerJS cloud configuration
    try {
      this.peer = new Peer(peerId, {
        host: "peerjs.com",
        port: 443,
        secure: true,
        debug: 3
      });
    } catch (e) {
      console.error("PeerJS custom ID initialization failed, falling back...", e);
      try {
        this.peer = new Peer({
          host: "peerjs.com",
          port: 443,
          secure: true,
          debug: 3
        });
      } catch (err) {
        document.getElementById("online-status-text").textContent = "방 생성 실패: " + err.message;
        return;
      }
    }
    
    this.peer.on("open", (id) => {
      if (id !== peerId) {
        this.roomId = id;
      }
      document.getElementById("online-status-text").innerHTML = `<span class="online-indicator-beacon"></span> 온라인 대기 중 (방 코드: <strong>${this.roomId}</strong>)`;
      document.getElementById("btn-copy-link").style.display = "inline-block";
      document.getElementById("btn-create-room").style.display = "none";
      
      const hostName = document.getElementById("marble-player-name-0")?.value.trim() || (MarbleGameModule.isSoloMode ? "탐험대 1" : "홍팀");
      this.activePlayersList = [{ id: 0, name: hostName, isHost: true, peerId: id, teamIdx: 0 }];
      MarbleGameModule.setupPlayersInputsFromList(this.activePlayersList);
    });

    this.peer.on("connection", (connection) => {
      this.conns.push(connection);
      
      connection.on("open", () => {
        // Send slots and settings on connect
        connection.send({
          type: "CONNECT_ACK",
          isSoloMode: MarbleGameModule.isSoloMode,
          slots: MarbleGameModule.getCurrentSlotNames(),
          list: this.activePlayersList,
          diceCount: MarbleGameModule.diceCount
        });
      });

      connection.on("data", (data) => {
        this.handleData(data, connection);
      });

      connection.on("close", () => {
        this.conns = this.conns.filter(c => c !== connection);
        this.activePlayersList = this.activePlayersList.filter(p => p.peerId !== connection.peer);
        MarbleGameModule.setupPlayersInputsFromList(this.activePlayersList);
        this.broadcast({ type: "SYNC_PLAYERS", list: this.activePlayersList });
      });
    });

    this.peer.on("error", (err) => {
      console.error("PeerJS Host Error:", err);
      if (err.type === "unavailable-id") {
        this.peer.destroy();
        try {
          this.peer = new Peer({
            host: "peerjs.com",
            port: 443,
            secure: true,
            debug: 3
          });
          this.peer.on("open", (id) => {
            this.roomId = id;
            document.getElementById("online-status-text").innerHTML = `<span class="online-indicator-beacon"></span> 온라인 대기 중 (방 코드: <strong>${this.roomId}</strong>)`;
            document.getElementById("btn-copy-link").style.display = "inline-block";
            document.getElementById("btn-create-room").style.display = "none";
            const hostName = document.getElementById("marble-player-name-0")?.value.trim() || (MarbleGameModule.isSoloMode ? "탐험대 1" : "홍팀");
            this.activePlayersList = [{ id: 0, name: hostName, isHost: true, peerId: id, teamIdx: 0 }];
            MarbleGameModule.setupPlayersInputsFromList(this.activePlayersList);
          });
          // Re-bind connection handler
          this.peer.on("connection", (c) => {
            this.conns.push(c);
            c.on("open", () => c.send({
              type: "CONNECT_ACK",
              isSoloMode: MarbleGameModule.isSoloMode,
              slots: MarbleGameModule.getCurrentSlotNames(),
              list: this.activePlayersList,
              diceCount: MarbleGameModule.diceCount
            }));
            c.on("data", (d) => this.handleData(d, c));
            c.on("close", () => {
              this.conns = this.conns.filter(conn => conn !== c);
              this.activePlayersList = this.activePlayersList.filter(p => p.peerId !== c.peer);
              MarbleGameModule.setupPlayersInputsFromList(this.activePlayersList);
              this.broadcast({ type: "SYNC_PLAYERS", list: this.activePlayersList });
            });
          });
        } catch (e2) {
          document.getElementById("online-status-text").textContent = "방 생성 실패: " + e2.message;
        }
      } else {
        document.getElementById("online-status-text").textContent = "방 생성 오류: " + err.type;
      }
    });
  },

  joinRoom(roomId, nickname, selectedIdx) {
    this.isHost = false;
    this.roomId = roomId;
    document.getElementById("online-status-text").textContent = "은하 접속 중...";
    
    try {
      this.peer = new Peer({
        host: "peerjs.com",
        port: 443,
        secure: true,
        debug: 3
      });
    } catch (e) {
      alert("접속 엔진 초기화 실패: " + e.message);
      document.getElementById("modal-online-join").style.display = "none";
      return;
    }
    
    this.peer.on("open", (id) => {
      const targetId = (roomId.length === 5 && !roomId.includes("-")) ? "constellation-room-" + roomId : roomId;
      this.conn = this.peer.connect(targetId);
      
      this.conn.on("open", () => {
        document.getElementById("modal-online-join").style.display = "none";
        AppController.switchView("view-marble-setup");
        
        document.getElementById("btn-conn-online").click();
        document.getElementById("online-status-text").innerHTML = `<span class="online-indicator-beacon"></span> 우주 연결 완료 (ID: ${this.roomId})`;
        document.getElementById("btn-create-room").style.display = "none";
        
        // Submit join
        this.send({ type: "JOIN_SUBMIT", nickname: nickname, teamIdx: selectedIdx });
      });

      this.conn.on("data", (data) => {
        this.handleData(data, this.conn);
      });

      this.conn.on("close", () => {
        alert("방장과 연결이 끊어져 홈 화면으로 이동합니다.");
        AppController.switchView("view-lobby");
      });
    });

    this.peer.on("error", (err) => {
      console.error("PeerJS Join error:", err);
      alert("연결 오류: " + err.type);
      document.getElementById("modal-online-join").style.display = "none";
    });
  },

  send(packet) {
    if (this.isHost) {
      this.conns.forEach(c => {
        if (c.open) c.send(packet);
      });
    } else {
      if (this.conn && this.conn.open) {
        this.conn.send(packet);
      }
    }
  },

  broadcast(packet) {
    this.send(packet);
  },

  handleData(data, senderConn) {
    if (this.isHost) {
      if (data.type === "JOIN_SUBMIT") {
        // Add connected player mapping to list
        const newPlayerIdx = this.activePlayersList.length;
        this.activePlayersList.push({
          id: newPlayerIdx,
          name: data.nickname,
          peerId: senderConn.peer,
          isHost: false,
          teamIdx: data.teamIdx
        });
        
        // Redraw names list locally
        MarbleGameModule.setupPlayersInputsFromList(this.activePlayersList);
        
        // Broadcast new state
        this.broadcast({ type: "SYNC_PLAYERS", list: this.activePlayersList });
      }
      else if (data.type === "ROLL_DICE_REQ") {
        const activePlayer = MarbleGameModule.players[MarbleGameModule.activePlayerIdx];
        const senderPlayer = this.activePlayersList.find(p => p.peerId === senderConn.peer);
        
        if (senderPlayer) {
          const isOwnTurn = activePlayer.id === senderPlayer.teamIdx;
          const isTeamTurn = !MarbleGameModule.isSoloMode && activePlayer.id === senderPlayer.teamIdx;
          
          if (isOwnTurn || isTeamTurn) {
            MarbleGameModule.rollDice();
          }
        }
      }
      else if (data.type === "BUY_DECISION_REQ") {
        const activePlayer = MarbleGameModule.players[MarbleGameModule.activePlayerIdx];
        const senderPlayer = this.activePlayersList.find(p => p.peerId === senderConn.peer);
        
        if (senderPlayer) {
          const isOwnTurn = activePlayer.id === senderPlayer.teamIdx;
          const isTeamTurn = !MarbleGameModule.isSoloMode && activePlayer.id === senderPlayer.teamIdx;
          
          if (isOwnTurn || isTeamTurn) {
            if (data.choice === "buy") {
              MarbleGameModule.buyTileDirect();
            } else if (data.choice === "quiz") {
              MarbleGameModule.startTileQuiz();
            } else if (data.choice === "skip") {
              MarbleGameModule.closeOverlays();
              MarbleGameModule.endTurn();
            }
          }
        }
      }
      else if (data.type === "QUIZ_ANSWER_REQ") {
        const activePlayer = MarbleGameModule.players[MarbleGameModule.activePlayerIdx];
        const senderPlayer = this.activePlayersList.find(p => p.peerId === senderConn.peer);
        
        if (senderPlayer) {
          const isOwnTurn = activePlayer.id === senderPlayer.teamIdx;
          const isTeamTurn = !MarbleGameModule.isSoloMode && activePlayer.id === senderPlayer.teamIdx;
          
          if (isOwnTurn || isTeamTurn) {
            MarbleGameModule.submitQuizAnswer(data.selectedIdx, data.correctIdx);
          }
        }
      }
      else if (data.type === "WARP_DECISION_REQ") {
        const activePlayer = MarbleGameModule.players[MarbleGameModule.activePlayerIdx];
        const senderPlayer = this.activePlayersList.find(p => p.peerId === senderConn.peer);
        
        if (senderPlayer) {
          const isOwnTurn = activePlayer.id === senderPlayer.teamIdx;
          const isTeamTurn = !MarbleGameModule.isSoloMode && activePlayer.id === senderPlayer.teamIdx;
          
          if (isOwnTurn || isTeamTurn) {
            MarbleGameModule.warpToTile(data.targetIdx);
          }
        }
      }
    } 
    else {
      // Client operations
      if (data.type === "CONNECT_ACK") {
        this.activePlayersList = data.list;
        this.slotsList = data.slots;
        
        // Update dice count selector in setup for visual sync on client
        MarbleGameModule.diceCount = data.diceCount || 2;
        document.querySelectorAll(".btn-setup-opt[id^='btn-dice-count-']").forEach(b => b.classList.remove("active"));
        const activeDiceBtn = document.getElementById(`btn-dice-count-${MarbleGameModule.diceCount}`);
        if (activeDiceBtn) activeDiceBtn.classList.add("active");
        
        // Populate selection dropdown inside join modal
        const select = document.getElementById("online-join-slot");
        if (select) {
          select.innerHTML = "";
          data.slots.forEach((s, idx) => {
            const opt = document.createElement("option");
            opt.value = idx;
            opt.textContent = data.isSoloMode ? `${s} 슬롯` : `${s} 참가`;
            select.appendChild(opt);
          });
        }
        
        // Hide/Show labels
        const label = document.querySelector("#join-slot-row label");
        if (label) {
          label.textContent = data.isSoloMode ? "참가 슬롯:" : "참가 모둠:";
        }
        
        MarbleGameModule.isSoloMode = data.isSoloMode;
        MarbleGameModule.setupPlayersInputsFromList(this.activePlayersList);
      }
      else if (data.type === "SYNC_PLAYERS") {
        this.activePlayersList = data.list;
        MarbleGameModule.setupPlayersInputsFromList(this.activePlayersList);
      }
      else if (data.type === "START_GAME") {
        MarbleGameModule.maxTurnsLimit = data.maxTurnsLimit;
        MarbleGameModule.isSoloMode = data.isSoloMode;
        MarbleGameModule.players = data.players;
        MarbleGameModule.diceCount = data.diceCount || 2;
        MarbleGameModule.quizTimeLimit = data.quizTimeLimit || 15;
        
        // Toggle 2nd die visibility
        document.getElementById("dice-container-2").style.display = (MarbleGameModule.diceCount === 1) ? "none" : "inline-block";
        
        AppController.switchView("view-marble");
        MarbleGameModule.closeOverlays();
        MarbleGameModule.updateStatsUI();
        MarbleGameModule.updateTokensUI();
        MarbleGameModule.updateActiveTurnUI();
      }
      else if (data.type === "DICE_ANIMATE") {
        MarbleGameModule.isRolling = true;
        MarbleGameModule.animate3DDice(data.r1, data.r2);
        
        setTimeout(() => {
          MarbleGameModule.isRolling = false;
          MarbleGameModule.moveActivePlayer(data.sum);
        }, 2000);
      }
      else if (data.type === "SYNC_STATE") {
        MarbleGameModule.players = data.players;
        MarbleGameModule.tileOwners = data.tileOwners;
        MarbleGameModule.activePlayerIdx = data.activePlayerIdx;
        MarbleGameModule.currentTurnCount = data.currentTurnCount;
        MarbleGameModule.maxTurnsLimit = data.maxTurnsLimit;
        MarbleGameModule.isSoloMode = data.isSoloMode;
        MarbleGameModule.diceCount = data.diceCount || 2;
        MarbleGameModule.quizTimeLimit = data.quizTimeLimit || 15;
        
        document.getElementById("dice-container-2").style.display = (MarbleGameModule.diceCount === 1) ? "none" : "inline-block";
        
        document.querySelectorAll(".board-tile").forEach(tile => {
          tile.className = tile.className.replace(/\bowned-p\d\b/g, "").trim();
          const idx = parseInt(tile.getAttribute("data-index"));
          if (MarbleGameModule.tileOwners[idx] !== undefined) {
            tile.classList.add(`owned-p${MarbleGameModule.tileOwners[idx]}`);
          }
        });
        
        MarbleGameModule.updateStatsUI();
        MarbleGameModule.updateTokensUI();
        MarbleGameModule.updateActiveTurnUI();
      }
      else if (data.type === "SHOW_BUY_OVERLAY") {
        MarbleGameModule.activeTileIdx = data.tileIdx;
        document.getElementById("buy-tile-name").textContent = data.tileName;
        document.getElementById("buy-tile-price").textContent = data.tilePrice;
        document.getElementById("buy-tile-desc").textContent = data.tileDesc || "";
        
        if (MarbleGameModule.canLocalPlayerControl()) {
          document.getElementById("marble-card-buy").style.display = "flex";
        } else {
          document.getElementById("marble-card-buy").style.display = "none";
        }
        MascotController.setBubbleTextOnly(`🪐 ${MarbleGameModule.players[MarbleGameModule.activePlayerIdx].name}의 별자리 개척 협상 중...\n\n💡 설명: ${data.tileDesc || ""}`);
      }
      else if (data.type === "SHOW_QUIZ_OVERLAY") {
        MarbleGameModule.activeTileIdx = data.tileIdx;
        if (MarbleGameModule.canLocalPlayerControl()) {
          MarbleGameModule.startTileQuizLocally(data.tileIdx);
        } else {
          document.getElementById("marble-card-quiz").style.display = "none";
        }
        MascotController.setBubbleTextOnly(`💡 ${MarbleGameModule.players[MarbleGameModule.activePlayerIdx].name}이(가) 별자리 퀴즈를 풀고 있습니다.`);
      }
      else if (data.type === "SHOW_WARP_OVERLAY") {
        if (MarbleGameModule.canLocalPlayerControl()) {
          MarbleGameModule.isWarpState = true;
          document.getElementById("marble-card-warp").style.display = "flex";
          document.querySelectorAll(".board-tile.prop").forEach(t => t.classList.add("warp-targetable"));
        } else {
          document.getElementById("marble-card-warp").style.display = "none";
        }
        MascotController.setBubbleTextOnly(`🌀 ${MarbleGameModule.players[MarbleGameModule.activePlayerIdx].name}의 우주선 워프 위치 선택 중...`);
      }
      else if (data.type === "SHOW_INFO_OVERLAY") {
        document.getElementById("info-tile-name").textContent = `🪐 ${data.tileName}`;
        document.getElementById("info-tile-season").textContent = `${data.tileSeason.toUpperCase()} CONSTELLATION`;
        document.getElementById("info-tile-desc").textContent = data.tileDesc;
        
        const canvas = document.getElementById("info-tile-canvas");
        if (canvas) {
          MarbleGameModule.drawLargeConstellation(canvas, data.tileId);
        }
        
        document.getElementById("marble-card-info").style.display = "flex";
        MascotController.setBubbleTextOnly(`🪐 ${data.tileName}에 도착했어! 별자리 특징을 우주 지도로 확인해봐!`);
      }
      else if (data.type === "SHOW_CHANCE_OVERLAY") {
        document.getElementById("chance-card-title").textContent = data.title;
        document.getElementById("chance-card-desc").textContent = data.desc;
        document.getElementById("marble-card-chance").style.display = "flex";
        MascotController.setBubbleTextOnly(`🔑 황금열쇠 카드 발견: ${data.title}`);
      }
      else if (data.type === "CLOSE_OVERLAYS") {
        MarbleGameModule.closeOverlays();
      }
      else if (data.type === "LOG") {
        MarbleGameModule.logLocally(data.text, data.className);
      }
      else if (data.type === "GAME_OVER") {
        MarbleGameModule.showGameOverScreen(data.standings);
      }
      else if (data.type === "ERROR") {
        alert(data.message);
        AppController.switchView("view-lobby");
      }
    }
  }
};

// 4. MAIN GAME CONTROLLER OBJECT
const MarbleGameModule = {
  players: [],
  activePlayerIdx: 0,
  currentTurnCount: 1,
  maxTurnsLimit: 10,
  isSoloMode: true,
  isWarpState: false,
  isRolling: false,
  tileOwners: {},
  playerColors: ["#ff5252", "#3b82f6", "#10b981", "#eab308", "#d946ef"],
  playerTokens: ["🚀", "🛸", "☄️", "🛰️", "🌠"],
  activeTileIdx: 0,
  diceCount: 2,
  pendingAction: null,
  quizTimerInterval: null,
  quizTimeLimit: 15,
  quizTimeRemaining: 0,

  init() {
    document.querySelectorAll(".board-tile.prop").forEach(tile => {
      const canvas = document.createElement("canvas");
      canvas.className = "tile-canvas";
      canvas.width = 80;
      canvas.height = 50;
      
      const nameEl = tile.querySelector(".tile-name");
      if (nameEl) nameEl.after(canvas);
      
      const index = parseInt(tile.getAttribute("data-index"));
      const config = MARBLE_BOARD_TILES[index];
      if (config && config.id) {
        setTimeout(() => this.drawMiniConstellation(canvas, config.id), 200);
      }
    });

    [2, 3, 4, 5].forEach(num => {
      document.getElementById(`btn-players-${num}`).addEventListener("click", () => {
        if (MarbleNetwork.peer && !MarbleNetwork.isHost) return;
        
        document.querySelectorAll(".btn-setup-opt[id^='btn-players-']").forEach(b => b.classList.remove("active"));
        document.getElementById(`btn-players-${num}`).classList.add("active");
        this.setupPlayersInputs(num);
      });
    });

    document.getElementById("btn-mode-solo").addEventListener("click", () => {
      if (MarbleNetwork.peer && !MarbleNetwork.isHost) return;
      document.getElementById("btn-mode-solo").classList.add("active");
      document.getElementById("btn-mode-team").classList.remove("active");
      this.isSoloMode = true;
      
      const countBtn = document.querySelector(".btn-setup-opt[id^='btn-players-'].active");
      const count = parseInt(countBtn.id.replace("btn-players-", ""));
      this.setupPlayersInputs(count);
    });

    document.getElementById("btn-mode-team").addEventListener("click", () => {
      if (MarbleNetwork.peer && !MarbleNetwork.isHost) return;
      document.getElementById("btn-mode-team").classList.add("active");
      document.getElementById("btn-mode-solo").classList.remove("active");
      this.isSoloMode = false;
      
      const countBtn = document.querySelector(".btn-setup-opt[id^='btn-players-'].active");
      const count = parseInt(countBtn.id.replace("btn-players-", ""));
      this.setupPlayersInputs(count);
    });

    [1, 2].forEach(num => {
      const btn = document.getElementById(`btn-dice-count-${num}`);
      if (btn) {
        btn.addEventListener("click", () => {
          try {
            if (MarbleNetwork.peer && !MarbleNetwork.isHost) return;
            document.querySelectorAll(".btn-setup-opt[id^='btn-dice-count-']").forEach(b => b.classList.remove("active"));
            document.getElementById(`btn-dice-count-${num}`).classList.add("active");
            this.diceCount = num;
            
            if (MarbleNetwork.isHost) {
              MarbleNetwork.broadcast({
                type: "CONNECT_ACK",
                isSoloMode: this.isSoloMode,
                slots: this.getCurrentSlotNames(),
                list: MarbleNetwork.activePlayersList,
                diceCount: this.diceCount
              });
            }
          } catch (err) {
            console.error("Dice select error:", err);
          }
        });
      }
    });

    document.getElementById("btn-marble-start").addEventListener("click", () => {
      if (MarbleNetwork.peer && !MarbleNetwork.isHost) return;
      this.startGame();
    });

    document.getElementById("btn-marble-roll").addEventListener("click", () => {
      this.handleRollClick();
    });

    document.getElementById("btn-buy-dust").addEventListener("click", () => {
      this.handleBuyClick("buy");
    });
    document.getElementById("btn-buy-quiz").addEventListener("click", () => {
      this.handleBuyClick("quiz");
    });
    document.getElementById("btn-buy-skip").addEventListener("click", () => {
      this.handleBuyClick("skip");
    });

    document.querySelectorAll(".board-tile").forEach(tile => {
      tile.addEventListener("click", () => {
        if (this.isWarpState && this.canLocalPlayerControl()) {
          const idx = parseInt(tile.getAttribute("data-index"));
          if (MarbleNetwork.peer && !MarbleNetwork.isHost) {
            MarbleNetwork.send({ type: "WARP_DECISION_REQ", targetIdx: idx });
          } else {
            this.warpToTile(idx);
          }
        }
      });
    });

    document.getElementById("btn-marble-restart-end").addEventListener("click", () => {
      document.getElementById("marble-result-overlay").style.display = "none";
      AppController.switchView("view-marble-setup");
    });

    document.getElementById("btn-info-proceed").addEventListener("click", () => {
      if (MarbleNetwork.peer && !MarbleNetwork.isHost) {
        document.getElementById("marble-card-info").style.display = "none";
      } else {
        if (this.pendingAction) {
          const action = this.pendingAction;
          this.pendingAction = null;
          action();
        }
      }
    });

    document.getElementById("btn-chance-confirm").addEventListener("click", () => {
      if (MarbleNetwork.peer && !MarbleNetwork.isHost) {
        document.getElementById("marble-card-chance").style.display = "none";
      } else {
        if (this.pendingAction) {
          const action = this.pendingAction;
          this.pendingAction = null;
          action();
        }
      }
    });

    MarbleNetwork.init();
  },

  onActivateSetup() {
    this.setupPlayersInputs(2);
    document.body.className = "theme-spring";
    MascotController.setBubbleTextOnly("별자리 부루마블 준비실이야! 온라인 모둠전 모드에서는 기기 접속 제한 없이 모둠 이름을 설정해 자유롭게 조작을 나눌 수 있어!");
  },

  getCurrentSlotNames() {
    const names = [];
    const countBtn = document.querySelector(".btn-setup-opt[id^='btn-players-'].active");
    const count = countBtn ? parseInt(countBtn.id.replace("btn-players-", "")) : 2;
    const defaultTeamNames = ["홍팀", "청팀", "녹팀", "황팀", "자팀"];
    
    for (let i = 0; i < count; i++) {
      const inp = document.getElementById(`marble-player-name-${i}`);
      names.push(inp ? inp.value.trim() : (this.isSoloMode ? `탐험대 ${i + 1}` : defaultTeamNames[i]));
    }
    return names;
  },

  setupPlayersInputs(count) {
    const container = document.getElementById("marble-players-inputs");
    container.innerHTML = "";
    
    const defaultTeamNames = ["홍팀", "청팀", "녹팀", "황팀", "자팀"];

    if (MarbleNetwork.isHost) {
      // Re-initialize active connection structures on host
      const hostName = document.getElementById("marble-player-name-0")?.value.trim() || (this.isSoloMode ? "탐험대 1" : defaultTeamNames[0]);
      MarbleNetwork.activePlayersList = [{ id: 0, name: hostName, isHost: true, peerId: "constellation-room-" + MarbleNetwork.roomId, teamIdx: 0 }];
      for (let i = 1; i < count; i++) {
        MarbleNetwork.activePlayersList.push({ id: i, name: this.isSoloMode ? `대기 중...` : defaultTeamNames[i], peerId: "", isHost: false, teamIdx: i });
      }
      this.setupPlayersInputsFromList(MarbleNetwork.activePlayersList);
      return;
    }

    for (let i = 0; i < count; i++) {
      const label = this.isSoloMode ? `P${i + 1} 탐험대명` : `${defaultTeamNames[i]} 이름`;
      const defaultValue = this.isSoloMode ? `탐험대 ${i + 1}` : defaultTeamNames[i];
      
      const div = document.createElement("div");
      div.className = "player-input-group";
      div.style.setProperty("--player-color", this.playerColors[i]);
      div.innerHTML = `
        <label style="color: ${this.playerColors[i]}">${label}:</label>
        <input type="text" id="marble-player-name-${i}" value="${defaultValue}" maxlength="8">
      `;
      container.appendChild(div);
    }
  },

  setupPlayersInputsFromList(list) {
    const container = document.getElementById("marble-players-inputs");
    container.innerHTML = "";

    const slotNames = this.getCurrentSlotNames();
    const defaultTeamNames = ["홍팀", "청팀", "녹팀", "황팀", "자팀"];

    // In online mode, we display the active connection list mapping
    if (MarbleNetwork.peer) {
      // List the active slot configs
      slotNames.forEach((sName, sIdx) => {
        const div = document.createElement("div");
        div.className = "player-input-group";
        div.style.setProperty("--player-color", this.playerColors[sIdx]);
        
        // Find who is mapped to this slot
        const members = list.filter(p => p.teamIdx === sIdx).map(p => p.name + (p.isHost ? " (방장)" : ""));
        const membersStr = members.length > 0 ? members.join(", ") : "대기 중...";
        
        const label = this.isSoloMode ? `P${sIdx + 1} 슬롯` : `${defaultTeamNames[sIdx]}`;
        const inputReadonly = (MarbleNetwork.peer && !MarbleNetwork.isHost) ? "disabled" : "";

        div.innerHTML = `
          <label style="color: ${this.playerColors[sIdx]}">${label}:</label>
          <input type="text" id="marble-player-name-${sIdx}" value="${sName}" ${inputReadonly} style="max-width: 120px; margin-right: 10px;" maxlength="8">
          <span style="font-size: 12.5px; opacity:0.8;">(${membersStr})</span>
        `;
        container.appendChild(div);

        // Bind Host updates
        if (MarbleNetwork.isHost) {
          const inp = div.querySelector("input");
          inp.addEventListener("change", () => {
            if (MarbleNetwork.isHost) {
              MarbleNetwork.broadcast({
                type: "CONNECT_ACK",
                isSoloMode: this.isSoloMode,
                slots: this.getCurrentSlotNames(),
                list: MarbleNetwork.activePlayersList
              });
            }
          });
        }
      });
    }
  },

  canLocalPlayerControl() {
    if (!MarbleNetwork.peer) return true;
    
    const localPlayer = MarbleNetwork.activePlayersList.find(p => p.peerId === MarbleNetwork.peer.id);
    if (!localPlayer) return false;
    
    const activePlayer = this.players[this.activePlayerIdx];
    return activePlayer.id === localPlayer.teamIdx;
  },

  handleRollClick() {
    if (this.isRolling || this.isWarpState) return;
    if (!this.canLocalPlayerControl()) {
      alert("지금은 본인 또는 본인 팀(모둠)의 조작 차례가 아닙니다.");
      return;
    }

    if (MarbleNetwork.peer && !MarbleNetwork.isHost) {
      MarbleNetwork.send({ type: "ROLL_DICE_REQ" });
    } else {
      this.rollDice();
    }
  },

  handleBuyClick(choice) {
    if (!this.canLocalPlayerControl()) return;
    
    if (MarbleNetwork.peer && !MarbleNetwork.isHost) {
      MarbleNetwork.send({ type: "BUY_DECISION_REQ", choice: choice });
    } else {
      if (choice === "buy") {
        this.buyTileDirect();
      } else if (choice === "quiz") {
        this.startTileQuiz();
      } else if (choice === "skip") {
        this.closeOverlays();
        this.endTurn();
      }
    }
  },

  startGame() {
    let count = 2;
    const countBtn = document.querySelector(".btn-setup-opt[id^='btn-players-'].active");
    if (countBtn) {
      count = parseInt(countBtn.id.replace("btn-players-", ""));
    }

    const turnSelect = document.getElementById("select-marble-turns");
    this.maxTurnsLimit = parseInt(turnSelect.value);

    const quizTimeSelect = document.getElementById("select-marble-quiz-time");
    this.quizTimeLimit = quizTimeSelect ? parseInt(quizTimeSelect.value) : 15;

    this.players = [];
    const defaultTeamNames = ["홍팀", "청팀", "녹팀", "황팀", "자팀"];

    for (let i = 0; i < count; i++) {
      const nameInput = document.getElementById(`marble-player-name-${i}`);
      const name = (nameInput ? nameInput.value.trim() : "") || (this.isSoloMode ? `탐험대 ${i + 1}` : defaultTeamNames[i]);
      this.players.push({
        id: i,
        name: name,
        color: this.playerColors[i],
        token: this.playerTokens[i],
        dust: 500,
        position: 0,
        bankrupt: false,
        trappedTurns: 0,
        team: this.isSoloMode ? "Solo" : name,
        members: [],
        exemptTickets: 0,
        escapeTickets: 0
      });
    }

    // Map nicknames to team members list
    if (MarbleNetwork.peer) {
      MarbleNetwork.activePlayersList.forEach(ap => {
        const teamIdx = ap.teamIdx !== undefined ? ap.teamIdx : ap.id;
        if (this.players[teamIdx]) {
          this.players[teamIdx].members.push(ap.name);
        }
      });
    }

    this.activePlayerIdx = 0;
    this.currentTurnCount = 1;
    this.tileOwners = {};
    this.isWarpState = false;
    this.isRolling = false;
    this.closeOverlays();

    const logBox = document.getElementById("marble-game-logs");
    logBox.innerHTML = '<div class="log-item">별자리 부루마블 탐험이 시작되었습니다!</div>';

    document.querySelectorAll(".board-tile").forEach(tile => {
      tile.className = tile.className.replace(/\bowned-p\d\b/g, "").trim();
    });

    this.updateStatsUI();
    this.updateTokensUI();
    this.updateActiveTurnUI();

    AppController.switchView("view-marble");

    MascotController.setBubbleTextOnly(`${this.players[0].name}의 첫 번째 주사위 차례야! 주사위를 힘차게 굴려줘!`);

    // Toggle 2nd die visibility
    document.getElementById("dice-container-2").style.display = (this.diceCount === 1) ? "none" : "inline-block";

    if (MarbleNetwork.isHost) {
      MarbleNetwork.broadcast({
        type: "START_GAME",
        maxTurnsLimit: this.maxTurnsLimit,
        isSoloMode: this.isSoloMode,
        players: this.players,
        diceCount: this.diceCount,
        quizTimeLimit: this.quizTimeLimit
      });
      this.syncStateWithClients();
    }
  },

  syncStateWithClients() {
    if (MarbleNetwork.isHost) {
      MarbleNetwork.broadcast({
        type: "SYNC_STATE",
        players: this.players,
        tileOwners: this.tileOwners,
        activePlayerIdx: this.activePlayerIdx,
        currentTurnCount: this.currentTurnCount,
        maxTurnsLimit: this.maxTurnsLimit,
        isSoloMode: this.isSoloMode,
        diceCount: this.diceCount,
        quizTimeLimit: this.quizTimeLimit
      });
    }
  },

  updateStatsUI() {
    const container = document.getElementById("marble-players-status-list");
    container.innerHTML = "";

    this.players.forEach(p => {
      const card = document.createElement("div");
      card.className = `marble-player-card ${p.id === this.activePlayerIdx ? 'active' : ''} ${p.bankrupt ? 'bankrupt' : ''}`;
      card.style.setProperty("--player-color", p.color);
      card.style.setProperty("--player-color-glow", p.color + "44");

      const membersText = (p.members && p.members.length > 0) ? `<div style="font-size:10px; opacity:0.85; color:#fff; margin-top:3px; font-weight: 500;">팀원: ${p.members.join(", ")}</div>` : "";
      
      let ticketsHtml = "";
      if (p.exemptTickets > 0 || p.escapeTickets > 0) {
        ticketsHtml = `<div style="font-size:10px; margin-top:3px; color:#ffd700; font-weight:600; display:flex; gap:6px;">`;
        if (p.exemptTickets > 0) ticketsHtml += `<span>🛡️ 면제 x${p.exemptTickets}</span>`;
        if (p.escapeTickets > 0) ticketsHtml += `<span>🕳️ 탈출 x${p.escapeTickets}</span>`;
        ticketsHtml += `</div>`;
      }

      card.innerHTML = `
        <div class="player-card-left">
          <span class="player-card-token">${p.token}</span>
          <div class="player-card-info">
            <h4>${p.name}</h4>
            <span>위치: ${MARBLE_BOARD_TILES[p.position].name}</span>
            ${membersText}
          </div>
        </div>
        <div class="player-card-right">
          <div class="player-card-dust">✨ ${p.dust}</div>
        </div>
      `;
      container.appendChild(card);
    });

    document.getElementById("marble-turns-left").textContent = `${this.currentTurnCount} / ${this.maxTurnsLimit} 턴`;
  },

  updateTokensUI() {
    document.querySelectorAll(".token-container").forEach(c => c.innerHTML = "");

    this.players.forEach(p => {
      if (p.bankrupt) return;
      const targetContainer = document.getElementById(`token-container-${p.position}`);
      if (targetContainer) {
        const span = document.createElement("span");
        span.className = "player-token";
        span.textContent = p.token;
        span.style.color = p.color;
        span.title = p.name;
        targetContainer.appendChild(span);
      }
    });
  },

  updateActiveTurnUI() {
    const activePlayer = this.players[this.activePlayerIdx];
    document.getElementById("marble-player-glow").style.color = activePlayer.color;
    document.getElementById("marble-active-player").textContent = activePlayer.name;
    document.body.className = `theme-${MARBLE_BOARD_TILES[activePlayer.position].season || 'spring'}`;
  },

  log(text, className = "") {
    this.logLocally(text, className);
    if (MarbleNetwork.isHost) {
      MarbleNetwork.broadcast({ type: "LOG", text: text, className: className });
    }
  },

  logLocally(text, className = "") {
    const logBox = document.getElementById("marble-game-logs");
    const div = document.createElement("div");
    div.className = `log-item ${className}`;
    div.textContent = `[턴 ${this.currentTurnCount}] ${text}`;
    logBox.appendChild(div);
    logBox.scrollTop = logBox.scrollHeight;
  },

  closeOverlays() {
    if (this.quizTimerInterval) {
      clearInterval(this.quizTimerInterval);
      this.quizTimerInterval = null;
    }
    document.getElementById("marble-card-info").style.display = "none";
    document.getElementById("marble-card-buy").style.display = "none";
    document.getElementById("marble-card-chance").style.display = "none";
    document.getElementById("marble-card-quiz").style.display = "none";
    document.getElementById("marble-card-warp").style.display = "none";
    this.isWarpState = false;
    document.querySelectorAll(".board-tile").forEach(t => t.classList.remove("warp-targetable"));
    
    if (MarbleNetwork.isHost) {
      MarbleNetwork.broadcast({ type: "CLOSE_OVERLAYS" });
    }
  },

  rollDice() {
    if (this.isRolling || this.isWarpState) return;

    const activePlayer = this.players[this.activePlayerIdx];
    if (activePlayer.bankrupt) {
      this.endTurn();
      return;
    }

    if (activePlayer.trappedTurns > 0) {
      if (confirm(`${activePlayer.name}은(는) 현재 블랙홀에 갇혀있습니다. 50 별가루를 벌금으로 내고 즉시 탈출할까요? 취소를 누르면 턴을 한 번 건너뜁니다.`)) {
        if (activePlayer.dust >= 50) {
          activePlayer.dust -= 50;
          activePlayer.trappedTurns = 0;
          this.log(`${activePlayer.name}이(가) 벌금 50 별가루를 내고 블랙홀을 탈출했습니다.`, "highlight-event");
          this.updateStatsUI();
          this.syncStateWithClients();
        } else {
          alert("별가루가 부족해 벌금을 낼 수 없습니다. 한 턴 쉬어갑니다.");
          activePlayer.trappedTurns = 0;
          this.log(`${activePlayer.name}이(가) 별가루 부족으로 블랙홀을 탈출하지 못하고 한 턴 쉬어갑니다.`);
          this.endTurn();
          return;
        }
      } else {
        activePlayer.trappedTurns = 0;
        this.log(`${activePlayer.name}이(가) 블랙홀 대기를 선택하여 이번 턴을 쉬어갑니다.`);
        this.endTurn();
        return;
      }
    }

    this.isRolling = true;
    SoundEffects.playBubble();

    const r1 = Math.floor(Math.random() * 6) + 1;
    const r2 = this.diceCount === 2 ? (Math.floor(Math.random() * 6) + 1) : 0;
    const sum = this.diceCount === 2 ? (r1 + r2) : r1;

    if (MarbleNetwork.isHost) {
      MarbleNetwork.broadcast({ type: "DICE_ANIMATE", r1: r1, r2: r2, sum: sum });
    }

    this.animate3DDice(r1, r2);

    setTimeout(() => {
      this.isRolling = false;
      const doubleText = (this.diceCount === 2 && r1 === r2) ? " (더블!)" : "";
      this.log(`${activePlayer.name}이(가) 주사위를 던져 ${sum}${doubleText}이 나왔습니다.`);
      this.moveActivePlayer(sum);
    }, 2000);
  },

  animate3DDice(v1, v2) {
    const c1 = document.getElementById("cube-element-1");
    const c2 = document.getElementById("cube-element-2");
    
    this.rotateCubeToValue(c1, v1);
    if (this.diceCount === 2 && v2 > 0) {
      this.rotateCubeToValue(c2, v2);
    }
  },

  rotateCubeToValue(cube, val) {
    if (!cube) return;
    let rx = 0;
    let ry = 0;
    switch (val) {
      case 1: rx = 0; ry = 0; break;
      case 2: rx = 90; ry = 0; break;
      case 3: rx = 0; ry = -90; break;
      case 4: rx = 0; ry = 90; break;
      case 5: rx = -90; ry = 0; break;
      case 6: rx = 0; ry = 180; break;
    }
    const spins = 3;
    const finalX = rx + (360 * spins);
    const finalY = ry + (360 * spins);
    
    cube.style.transform = `rotateX(${finalX}deg) rotateY(${finalY}deg)`;
  },

  moveActivePlayer(steps) {
    const activePlayer = this.players[this.activePlayerIdx];
    let count = 0;

    const interval = setInterval(() => {
      activePlayer.position = (activePlayer.position + 1) % MARBLE_BOARD_TILES.length;
      this.updateTokensUI();
      SoundEffects.play(800 + activePlayer.position * 40, "sine", 0.05, 0.05);

      if (activePlayer.position === 0) {
        activePlayer.dust += 100;
        this.log(`${activePlayer.name}이(가) 출발선을 통과하여 보너스 별가루 +100을 획득했습니다!`, "highlight-event");
        this.updateStatsUI();
        this.syncStateWithClients();
      }

      count++;
      if (count >= steps) {
        clearInterval(interval);
        setTimeout(() => {
          if (!MarbleNetwork.peer || MarbleNetwork.isHost) {
            this.checkTileAction(activePlayer.position);
          }
        }, 300);
      }
    }, 250);
  },

  getConstellationDesc(id) {
    for (const season in CONSTELLATION_DB) {
      const found = CONSTELLATION_DB[season].find(item => item.id === id);
      if (found) {
        return `[모양] ${found.shapeDesc}\n\n[이야기] ${found.story}`;
      }
    }
    return "";
  },

  getConstellationSeasonName(season) {
    const seasons = {
      spring: "봄철의 대표 별자리 🌸",
      summer: "여름철의 대표 별자리 ☀️",
      autumn: "가을철의 대표 별자리 🍁",
      winter: "겨울철의 대표 별자리 ❄️"
    };
    return seasons[season] || "";
  },

  drawLargeConstellation(canvas, id) {
    const ctx = canvas.getContext("2d");
    
    let data = null;
    for (const season in CONSTELLATION_DB) {
      const found = CONSTELLATION_DB[season].find(item => item.id === id);
      if (found) {
        data = found;
        break;
      }
    }
    if (!data) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    data.stars.forEach(s => {
      if (s.x < minX) minX = s.x;
      if (s.x > maxX) maxX = s.x;
      if (s.y < minY) minY = s.y;
      if (s.y > maxY) maxY = s.y;
    });

    const w = maxX - minX;
    const h = maxY - minY;

    // Draw connection lines with neon glow
    ctx.strokeStyle = "rgba(0, 230, 118, 0.65)";
    ctx.shadowBlur = 8;
    ctx.shadowColor = "rgba(0, 230, 118, 0.5)";
    ctx.lineWidth = 2.0;
    
    data.connections.forEach(conn => {
      const s1 = data.stars[conn[0]];
      const s2 = data.stars[conn[1]];

      const x1 = ((s1.x - minX) / w) * (canvas.width - 24) + 12;
      const y1 = ((s1.y - minY) / h) * (canvas.height - 24) + 12;
      const x2 = ((s2.x - minX) / w) * (canvas.width - 24) + 12;
      const y2 = ((s2.y - minY) / h) * (canvas.height - 24) + 12;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    });

    // Draw stars
    ctx.shadowBlur = 0; // reset
    data.stars.forEach(s => {
      const x = ((s.x - minX) / w) * (canvas.width - 24) + 12;
      const y = ((s.y - minY) / h) * (canvas.height - 24) + 12;

      ctx.fillStyle = s.isBright ? "#ffea00" : "#ffffff";
      ctx.beginPath();
      ctx.arc(x, y, s.isBright ? 5.5 : 3.0, 0, Math.PI * 2);
      ctx.fill();

      if (s.isBright) {
        ctx.fillStyle = "rgba(255, 234, 0, 0.35)";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#ffea00";
        ctx.beginPath();
        ctx.arc(x, y, 8.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    });
  },

  checkTileAction(pos) {
    const activePlayer = this.players[this.activePlayerIdx];
    const tile = MARBLE_BOARD_TILES[pos];
    this.activeTileIdx = pos;

    if (tile.type === "start") {
      this.endTurn();
    } 
    else if (tile.type === "station") {
      this.isWarpState = true;
      
      if (MarbleNetwork.isHost) {
        MarbleNetwork.broadcast({
          type: "SHOW_WARP_OVERLAY",
          tileIdx: pos,
          activePlayerIdx: this.activePlayerIdx
        });
      }
      
      if (this.canLocalPlayerControl()) {
        document.getElementById("marble-card-warp").style.display = "flex";
        document.querySelectorAll(".board-tile.prop").forEach(t => t.classList.add("warp-targetable"));
        MascotController.setBubbleTextOnly("🛰️ 우주정거장에 정박했습니다. 보드판에서 가고 싶은 계절 별자리를 클릭해 바로 순간 이동하세요!");
      } else {
        MascotController.setBubbleTextOnly(`🌀 ${activePlayer.name}의 우주선 워프 위치 선택 대기 중...`);
      }
      this.log(`${activePlayer.name}이(가) 우주정거장에 진입하여 은하 점프 차원을 충전 중입니다.`);
    } 
    else if (tile.type === "blackhole") {
      activePlayer.trappedTurns = 1;
      this.log(`${activePlayer.name}이(가) 블랙홀 중력장에 잡혔습니다! 다음 턴에 격리됩니다.`, "highlight-pay");
      MascotController.setBubbleTextOnly("🕳️ 앗! 강력한 블랙홀 중력에 포획되었어. 다음 차례에 벌금을 지불하거나구출을 대기해야 해.");
      this.syncStateWithClients();
      this.endTurn();
    } 
    else if (tile.type === "meteor") {
      this.log(`${activePlayer.name}이(가) 유성우 급행을 탔습니다! 보너스 찬스로 한 번 더 굴리세요!`, "highlight-event");
      MascotController.setBubbleTextOnly("☄️ 엄청난 속도의 유성우 가속을 받았어! 주사위를 한 번 더 던져보자!");
      this.syncStateWithClients();
    } 
    else if (tile.type === "constellation") {
      const ownerIdx = this.tileOwners[pos];
      const desc = this.getConstellationDesc(tile.id);
      const seasonName = this.getConstellationSeasonName(tile.season);

      if (ownerIdx === undefined) {
        if (MarbleNetwork.isHost) {
          MarbleNetwork.broadcast({
            type: "SHOW_BUY_OVERLAY",
            tileIdx: pos,
            tileId: tile.id,
            tileName: tile.name,
            tilePrice: tile.price,
            tileDesc: desc,
            tileSeason: seasonName
          });
        }

        document.getElementById("buy-tile-name").textContent = tile.name;
        document.getElementById("buy-tile-price").textContent = tile.price;
        document.getElementById("buy-tile-desc").textContent = desc;
        document.getElementById("buy-tile-season").textContent = seasonName;
        
        const canvas = document.getElementById("buy-tile-canvas");
        if (canvas) this.drawLargeConstellation(canvas, tile.id);
        
        if (this.canLocalPlayerControl()) {
          document.getElementById("marble-card-buy").style.display = "flex";
          MascotController.setBubbleTextOnly(`🪐 새로운 별자리 ${tile.name}를 발견했어! 별가루를 지불해 개척하거나 퀴즈를 맞추어봐!`);
        } else {
          document.getElementById("marble-card-buy").style.display = "none";
          MascotController.setBubbleTextOnly(`🪐 ${activePlayer.name}의 ${tile.name} 개척 결정을 대기하고 있습니다.`);
        }
      } 
      else if (ownerIdx === this.activePlayerIdx) {
        const msg = "본인 소유의 별자리 기지입니다. 안전하게 기항합니다.";
        if (MarbleNetwork.isHost) {
          MarbleNetwork.broadcast({
            type: "SHOW_INFO_OVERLAY",
            tileIdx: pos,
            tileId: tile.id,
            tileName: tile.name,
            tileDesc: desc,
            tileSeason: seasonName,
            tileMsg: msg
          });
        }
        
        document.getElementById("info-tile-name").textContent = `🪐 ${tile.name} (아군 기지)`;
        document.getElementById("info-tile-season").textContent = seasonName;
        document.getElementById("info-tile-desc").textContent = desc;
        document.getElementById("info-tile-msg").textContent = msg;
        
        const canvas = document.getElementById("info-tile-canvas");
        if (canvas) this.drawLargeConstellation(canvas, tile.id);
        
        this.pendingAction = () => {
          document.getElementById("marble-card-info").style.display = "none";
          this.endTurn();
        };
        
        document.getElementById("marble-card-info").style.display = "flex";
        MascotController.setBubbleTextOnly(`🪐 본인의 ${tile.name} 기지에 정박했어!`);
      } 
      else {
        const owner = this.players[ownerIdx];
        
        if (activePlayer.team !== "Solo" && activePlayer.team === owner.team) {
          const msg = `같은 연합 모둠인 ${owner.name}의 별자리 기지입니다. 통행료가 면제됩니다!`;
          if (MarbleNetwork.isHost) {
            MarbleNetwork.broadcast({
              type: "SHOW_INFO_OVERLAY",
              tileIdx: pos,
              tileId: tile.id,
              tileName: tile.name,
              tileDesc: desc,
              tileSeason: seasonName,
              tileMsg: msg
            });
          }
          
          document.getElementById("info-tile-name").textContent = `🪐 ${tile.name} (연합 기지)`;
          document.getElementById("info-tile-season").textContent = seasonName;
          document.getElementById("info-tile-desc").textContent = desc;
          document.getElementById("info-tile-msg").textContent = msg;
          
          const canvas = document.getElementById("info-tile-canvas");
          if (canvas) this.drawLargeConstellation(canvas, tile.id);
          
          this.pendingAction = () => {
            document.getElementById("marble-card-info").style.display = "none";
            this.endTurn();
          };
          
          document.getElementById("marble-card-info").style.display = "flex";
          MascotController.setBubbleTextOnly(`🪐 연합 모둠의 ${tile.name} 기지에 무사 방문했어!`);
        } else {
          const msg = `상대 탐험대 ${owner.name}의 영토입니다. 통행료 ✨${tile.toll} 별가루를 지불합니다!`;
          if (MarbleNetwork.isHost) {
            MarbleNetwork.broadcast({
              type: "SHOW_INFO_OVERLAY",
              tileIdx: pos,
              tileId: tile.id,
              tileName: tile.name,
              tileDesc: desc,
              tileSeason: seasonName,
              tileMsg: msg
            });
          }
          
          document.getElementById("info-tile-name").textContent = `🪐 ${tile.name} (상대 기지)`;
          document.getElementById("info-tile-season").textContent = seasonName;
          document.getElementById("info-tile-desc").textContent = desc;
          document.getElementById("info-tile-msg").textContent = msg;
          
          const canvas = document.getElementById("info-tile-canvas");
          if (canvas) this.drawLargeConstellation(canvas, tile.id);
          
          this.pendingAction = () => {
            document.getElementById("marble-card-info").style.display = "none";
            this.payToll(activePlayer, owner, tile.toll);
            this.endTurn();
          };
          
          document.getElementById("marble-card-info").style.display = "flex";
          MascotController.setBubbleTextOnly(`🛸 상대의 ${tile.name} 기지에 진입했어! 영토 통행료를 상호 지불해야 해.`);
        }
      }
    }
  },

  payToll(payer, owner, amount) {
    if (payer.exemptTickets && payer.exemptTickets > 0) {
      payer.exemptTickets--;
      this.log(`${payer.name}이(가) 소지하고 있던 [우주 통행세 면제권]을 사용해 통행료 ✨${amount} 별가루 지불을 면제받았습니다!`, "highlight-event");
      MascotController.setBubbleTextOnly(`🛡️ 우주 실드가 통행세 면제권을 작동하여 통행료 ✨${amount} 별가루 지불을 면제했어!`);
      this.updateStatsUI();
      this.syncStateWithClients();
      return;
    }

    if (payer.dust < amount) {
      const remaining = payer.dust;
      payer.dust = 0;
      owner.dust += remaining;
      payer.bankrupt = true;
      this.log(`${payer.name}이(가) 통행료 ${amount}를 낼 별가루가 부족해 파산했습니다!`, "highlight-pay");
      
      Object.keys(this.tileOwners).forEach(key => {
        if (this.tileOwners[key] === payer.id) {
          delete this.tileOwners[key];
          const tileEl = document.getElementById(`tile-${key}`);
          if (tileEl) {
            tileEl.className = tileEl.className.replace(/\bowned-p\d\b/g, "").trim();
          }
        }
      });
      this.updateTokensUI();
    } else {
      payer.dust -= amount;
      owner.dust += amount;
      this.log(`${payer.name}이(가) ${owner.name}에게 영토 점거 통행료 ✨${amount} 별가루를 납부했습니다.`, "highlight-pay");
    }
    this.updateStatsUI();
    this.syncStateWithClients();
  },

  buyTileDirect() {
    const activePlayer = this.players[this.activePlayerIdx];
    const tile = MARBLE_BOARD_TILES[this.activeTileIdx];

    if (activePlayer.dust >= tile.price) {
      activePlayer.dust -= tile.price;
      this.tileOwners[this.activeTileIdx] = this.activePlayerIdx;
      
      const tileEl = document.getElementById(`tile-${this.activeTileIdx}`);
      if (tileEl) {
        tileEl.classList.add(`owned-p${this.activePlayerIdx}`);
      }

      this.log(`${activePlayer.name}이(가) 별가루 ${tile.price}를 지불하고 ${tile.name}의 영토 소유권을 획득했습니다.`, "highlight-event");
      SoundEffects.playSuccess();
      this.closeOverlays();
      this.updateStatsUI();
      this.syncStateWithClients();
      this.endTurn();
    } else {
      alert("소지한 별가루가 모자랍니다. 퀴즈에 맞추어 무료 획득을 노려보세요!");
    }
  },

  startTileQuiz() {
    if (MarbleNetwork.isHost) {
      MarbleNetwork.broadcast({
        type: "SHOW_QUIZ_OVERLAY",
        tileIdx: this.activeTileIdx
      });
    }
    this.startTileQuizLocally(this.activeTileIdx);
  },

  startTileQuizLocally(tileIdx) {
    const tile = MARBLE_BOARD_TILES[tileIdx];
    const quiz = MARBLE_QUIZZES[tile.id];

    if (!quiz) {
      alert("이 별자리 칸에는 수호자 퀴즈가 준비되지 않았습니다.");
      return;
    }

    document.getElementById("marble-card-buy").style.display = "none";
    document.getElementById("marble-quiz-q").textContent = quiz.q;

    const optContainer = document.getElementById("marble-quiz-options");
    optContainer.innerHTML = "";

    quiz.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "btn-quiz-option";
      btn.textContent = `${idx + 1}. ${opt}`;
      btn.addEventListener("click", () => {
        if (MarbleNetwork.peer && !MarbleNetwork.isHost) {
          MarbleNetwork.send({ type: "QUIZ_ANSWER_REQ", selectedIdx: idx, correctIdx: quiz.ans });
        } else {
          this.submitQuizAnswer(idx, quiz.ans);
        }
      });
      optContainer.appendChild(btn);
    });

    document.getElementById("marble-quiz-options").style.display = "flex";
    document.getElementById("marble-card-quiz").style.display = "flex";

    // Start local countdown timer
    if (this.quizTimerInterval) {
      clearInterval(this.quizTimerInterval);
    }
    this.quizTimeRemaining = this.quizTimeLimit;
    document.getElementById("marble-quiz-timer").textContent = this.quizTimeRemaining;

    this.quizTimerInterval = setInterval(() => {
      this.quizTimeRemaining--;
      document.getElementById("marble-quiz-timer").textContent = this.quizTimeRemaining;

      if (this.quizTimeRemaining <= 0) {
        clearInterval(this.quizTimerInterval);
        this.quizTimerInterval = null;

        // Auto submit incorrect choice (-1) on timeout if local player controls
        if (this.canLocalPlayerControl()) {
          this.log(`시간 초과! ${this.players[this.activePlayerIdx].name} 탐험대의 답변 제한 시간이 만료되었습니다.`, "highlight-pay");
          if (MarbleNetwork.peer && !MarbleNetwork.isHost) {
            MarbleNetwork.send({ type: "QUIZ_ANSWER_REQ", selectedIdx: -1, correctIdx: quiz.ans });
          } else {
            this.submitQuizAnswer(-1, quiz.ans);
          }
        }
      }
    }, 1000);
  },

  submitQuizAnswer(selectedIdx, correctIdx) {
    const activePlayer = this.players[this.activePlayerIdx];
    const tile = MARBLE_BOARD_TILES[this.activeTileIdx];

    this.closeOverlays();

    if (selectedIdx === correctIdx) {
      this.tileOwners[this.activeTileIdx] = this.activePlayerIdx;
      const tileEl = document.getElementById(`tile-${this.activeTileIdx}`);
      if (tileEl) {
        tileEl.classList.add(`owned-p${this.activePlayerIdx}`);
      }

      SoundEffects.playSuccess();
      this.log(`${activePlayer.name}이(가) 별자리 수호자 퀴즈를 맞춰 ${tile.name}를 무료로 양도받았습니다!`, "highlight-event");
      MascotController.setBubbleTextOnly("정답이야! 퀴즈 관문을 훌륭하게 클리어하여 우주 영토를 무료로 등기했단다.");
    } else {
      SoundEffects.playWrong();
      this.log(`${activePlayer.name}이(가) 퀴즈 오답을 선택하여 ${tile.name} 개척 자격을 잃었습니다.`);
      MascotController.setBubbleTextOnly("오답이야. 아쉽게도 해당 별자리의 기지 소유권을 얻는 데 실패하고 말았어.");
    }

    this.updateStatsUI();
    this.syncStateWithClients();
    this.endTurn();
  },

  warpToTile(targetIdx) {
    if (!this.isWarpState) return;
    const tile = MARBLE_BOARD_TILES[targetIdx];

    if (tile.type !== "constellation") {
      alert("워프 도약은 계절별 성운(별자리) 칸으로만 가능합니다.");
      return;
    }

    const activePlayer = this.players[this.activePlayerIdx];
    activePlayer.position = targetIdx;

    this.closeOverlays();
    this.updateTokensUI();
    
    this.log(`${activePlayer.name}이(가) 차원 워프 게이트를 통해 ${tile.name}으로 순간 공간 도약했습니다!`, "highlight-event");
    SoundEffects.playSparkle();

    this.syncStateWithClients();

    setTimeout(() => {
      if (!MarbleNetwork.peer || MarbleNetwork.isHost) {
        this.checkTileAction(targetIdx);
      }
    }, 300);
  },

  endTurn() {
    this.closeOverlays();
    this.syncStateWithClients();

    const activeCount = this.players.filter(p => !p.bankrupt).length;
    if (activeCount <= 1) {
      this.endGame();
      return;
    }

    let nextIdx = (this.activePlayerIdx + 1) % this.players.length;
    while (this.players[nextIdx].bankrupt) {
      nextIdx = (nextIdx + 1) % this.players.length;
    }

    this.activePlayerIdx = nextIdx;

    if (nextIdx === 0) {
      this.currentTurnCount++;
      if (this.currentTurnCount > this.maxTurnsLimit) {
        this.endGame();
        return;
      }
    }

    this.updateStatsUI();
    this.updateActiveTurnUI();
    this.syncStateWithClients();

    MascotController.setBubbleTextOnly(`${this.players[this.activePlayerIdx].name}의 턴이야. 주사위를 눌러 출발하자!`);
  },

  endGame(isForcedExit = false) {
    this.closeOverlays();

    if (isForcedExit) {
      if (MarbleNetwork.peer) {
        MarbleNetwork.peer.destroy();
        MarbleNetwork.peer = null;
        MarbleNetwork.conn = null;
        MarbleNetwork.conns = [];
        window.history.replaceState({}, document.title, window.location.pathname);
      }
      AppController.switchView("view-lobby");
      return;
    }

    SoundEffects.playCelebrate();

    let finalStandings = [];
    if (this.isSoloMode) {
      finalStandings = [...this.players].sort((a, b) => b.dust - a.dust);
    } else {
      const redTeam = this.players.filter(p => p.team === "Red");
      const blueTeam = this.players.filter(p => p.team === "Blue");
      const redTotal = redTeam.reduce((sum, p) => sum + p.dust, 0);
      const blueTotal = blueTeam.reduce((sum, p) => sum + p.dust, 0);

      finalStandings = [
        { name: "홍팀 (레드스타)", team: "Red", dust: redTotal, icon: "🔴" },
        { name: "청팀 (블루갤럭시)", team: "Blue", dust: blueTotal, icon: "🔵" }
      ].sort((a, b) => b.dust - a.dust);
    }

    GameState.addScore(300);

    this.showGameOverScreen(finalStandings);

    if (MarbleNetwork.isHost) {
      MarbleNetwork.broadcast({ type: "GAME_OVER", standings: finalStandings });
    }
  },

  showGameOverScreen(standings) {
    const standingsBox = document.getElementById("marble-final-standings");
    standingsBox.innerHTML = "";

    standings.forEach((entry, idx) => {
      const row = document.createElement("div");
      row.className = `ranking-row ${idx === 0 ? 'winner' : ''}`;
      row.innerHTML = `
        <span class="rank-num">${idx + 1}위</span>
        <div class="rank-details">
          <span>${entry.icon || entry.token || '🚀'}</span>
          <strong>${entry.name}</strong>
        </div>
        <span class="rank-score">${entry.dust} 별가루</span>
      `;
      standingsBox.appendChild(row);
    });

    document.getElementById("marble-result-overlay").style.display = "flex";
  },

  drawMiniConstellation(canvas, id) {
    const ctx = canvas.getContext("2d");
    
    let data = null;
    for (const season in CONSTELLATION_DB) {
      const found = CONSTELLATION_DB[season].find(item => item.id === id);
      if (found) {
        data = found;
        break;
      }
    }
    if (!data) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    data.stars.forEach(s => {
      if (s.x < minX) minX = s.x;
      if (s.x > maxX) maxX = s.x;
      if (s.y < minY) minY = s.y;
      if (s.y > maxY) maxY = s.y;
    });

    const w = maxX - minX;
    const h = maxY - minY;

    ctx.strokeStyle = "rgba(0, 230, 118, 0.45)";
    ctx.lineWidth = 1.2;
    data.connections.forEach(conn => {
      const s1 = data.stars[conn[0]];
      const s2 = data.stars[conn[1]];

      const x1 = ((s1.x - minX) / w) * (canvas.width - 12) + 6;
      const y1 = ((s1.y - minY) / h) * (canvas.height - 12) + 6;
      const x2 = ((s2.x - minX) / w) * (canvas.width - 12) + 6;
      const y2 = ((s2.y - minY) / h) * (canvas.height - 12) + 6;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    });

    data.stars.forEach(s => {
      const x = ((s.x - minX) / w) * (canvas.width - 12) + 6;
      const y = ((s.y - minY) / h) * (canvas.height - 12) + 6;

      ctx.fillStyle = s.isBright ? "#ffea00" : "#ffffff";
      ctx.beginPath();
      ctx.arc(x, y, s.isBright ? 3 : 1.5, 0, Math.PI * 2);
      ctx.fill();

      if (s.isBright) {
        ctx.fillStyle = "rgba(255, 234, 0, 0.25)";
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  }
};
