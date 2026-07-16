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
        const nickname = document.getElementById("online-join-nickname").value.trim();
        if (!nickname) {
          MarbleGameModule.showCustomAlert("입력 오류", "이름을 입력해주세요.");
          return;
        }
        const selectedIdx = document.getElementById("online-join-slot").selectedIndex;
        this.send({ type: "JOIN_SUBMIT", nickname: nickname, teamIdx: selectedIdx });
      });
      document.getElementById("btn-cancel-join").addEventListener("click", () => {
        document.getElementById("modal-online-join").style.display = "none";
        if (this.peer) {
          this.peer.destroy();
          this.peer = null;
        }
        window.history.replaceState({}, document.title, window.location.pathname);
      });
      
      // Start background connection immediately
      this.joinRoom(roomParam);
    }

    document.getElementById("btn-conn-local").addEventListener("click", () => {
      document.getElementById("btn-conn-local").classList.add("active");
      document.getElementById("btn-conn-online").classList.remove("active");
      document.getElementById("setup-online-actions").style.display = "none";
      document.getElementById("online-status-banner").style.display = "none";
      document.getElementById("row-spectator-mode").style.display = "none";
      
      if (this.peer) {
        this.peer.destroy();
        this.peer = null;
      }
      this.conns = [];
      this.activePlayersList = [];
      
      document.getElementById("btn-spec-off").click();
    });

    document.getElementById("btn-conn-online").addEventListener("click", () => {
      document.getElementById("btn-conn-online").classList.add("active");
      document.getElementById("btn-conn-local").classList.remove("active");
      document.getElementById("setup-online-actions").style.display = "flex";
      document.getElementById("online-status-banner").style.display = "block";
      document.getElementById("row-spectator-mode").style.display = "flex";
    });

    document.getElementById("btn-spec-off").addEventListener("click", () => {
      if (MarbleNetwork.peer && !MarbleNetwork.isHost) return;
      document.getElementById("btn-spec-off").classList.add("active");
      document.getElementById("btn-spec-on").classList.remove("active");
      MarbleGameModule.isSpectatorMode = false;
      
      const count = MarbleGameModule.getPlayerCountConfig();
      MarbleGameModule.setupPlayersInputs(count);
      MarbleGameModule.syncSetupToClients();
    });

    document.getElementById("btn-spec-on").addEventListener("click", () => {
      if (MarbleNetwork.peer && !MarbleNetwork.isHost) return;
      document.getElementById("btn-spec-on").classList.add("active");
      document.getElementById("btn-spec-off").classList.remove("active");
      MarbleGameModule.isSpectatorMode = true;
      
      const count = MarbleGameModule.getPlayerCountConfig();
      MarbleGameModule.setupPlayersInputs(count);
      MarbleGameModule.syncSetupToClients();
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

    document.getElementById("btn-show-qr").addEventListener("click", () => {
      const inviteLink = window.location.origin + window.location.pathname + "?room=" + this.roomId;
      const qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(inviteLink);
      
      document.getElementById("qr-invite-image").src = qrUrl;
      document.getElementById("qr-invite-link-text").textContent = inviteLink;
      document.getElementById("modal-qr-invite").style.display = "flex";
    });

    document.getElementById("btn-close-qr-modal").addEventListener("click", () => {
      document.getElementById("modal-qr-invite").style.display = "none";
    });

    document.getElementById("btn-regen-room").addEventListener("click", () => {
      if (this.peer) {
        if (this.conns.length > 0) {
          if (!confirm("방 코드를 재생성하면 현재 접속 중인 참가자들이 모두 튕겨 나갑니다. 정말 새로 만드시겠습니까?")) {
            return;
          }
        }
        this.peer.destroy();
        this.peer = null;
      }
      this.conns = [];
      document.getElementById("btn-copy-link").style.display = "none";
      document.getElementById("btn-show-qr").style.display = "none";
      document.getElementById("btn-regen-room").style.display = "none";
      this.createRoom();
    });
  },

  createRoom() {
    this.isHost = true;
    this.roomId = Math.floor(10000 + Math.random() * 90000).toString();
    const peerId = "constellation-room-" + this.roomId;
    
    document.getElementById("online-status-text").textContent = "접속 서버 연결 중...";

    // Set 8-second connection timeout warning
    const connectionTimeout = setTimeout(() => {
      if (this.peer && !this.peer.open && !this.peer.destroyed) {
        document.getElementById("online-status-text").innerHTML = 
          `접속 시간이 초과되었습니다.<br><span style="font-size: 11.5px; opacity:0.8;">학교 방화벽에서 실시간 서비스(PeerJS)를 차단했을 가능성이 높습니다.</span>`;
      }
    }, 8000);
    
    // Explicit primary secure PeerJS cloud configuration
    try {
      this.peer = new Peer(peerId, {
        host: "0.peerjs.com",
        port: 443,
        secure: true,
        key: "peerjs",
        debug: 3
      });
    } catch (e) {
      clearTimeout(connectionTimeout);
      console.error("PeerJS custom ID initialization failed, falling back...", e);
      try {
        this.peer = new Peer({
          host: "0.peerjs.com",
          port: 443,
          secure: true,
          key: "peerjs",
          debug: 3
        });
      } catch (err) {
        document.getElementById("online-status-text").textContent = "방 생성 실패: " + err.message;
        return;
      }
    }
    
    this.peer.on("open", (id) => {
      clearTimeout(connectionTimeout);
      if (id !== peerId) {
        this.roomId = id;
      }
      document.getElementById("online-status-text").innerHTML = `<span class="online-indicator-beacon"></span> 온라인 대기 중 (방 코드: <strong>${this.roomId}</strong>)`;
      document.getElementById("btn-copy-link").style.display = "inline-block";
      document.getElementById("btn-show-qr").style.display = "inline-block";
      document.getElementById("btn-regen-room").style.display = "inline-block";
      document.getElementById("btn-create-room").style.display = "none";
      
      const hostName = document.getElementById("marble-player-name-0")?.value.trim() || (MarbleGameModule.isSpectatorMode ? "교사 (관전)" : (MarbleGameModule.isSoloMode ? "참가자 1" : "1조"));
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
          isSpectatorMode: MarbleGameModule.isSpectatorMode,
          slots: MarbleGameModule.getCurrentSlotNames(),
          list: this.activePlayersList,
          diceCount: MarbleGameModule.diceCount,
          playerCount: MarbleGameModule.getPlayerCountConfig()
        });
      });

      connection.on("data", (data) => {
        this.handleData(data, connection);
      });

      connection.on("close", () => {
        this.conns = this.conns.filter(c => c !== connection);
        this.activePlayersList = this.activePlayersList.filter(p => p.peerId !== connection.peer);
        MarbleGameModule.setupPlayersInputsFromList(this.activePlayersList);
        this.broadcast({ type: "SYNC_PLAYERS", list: this.activePlayersList, slots: MarbleGameModule.getCurrentSlotNames() });
      });
    });

    this.peer.on("error", (err) => {
      clearTimeout(connectionTimeout);
      console.error("PeerJS Host Error:", err);
      if (err.type === "unavailable-id") {
        this.peer.destroy();
        try {
          this.peer = new Peer({
            host: "0.peerjs.com",
            port: 443,
            secure: true,
            key: "peerjs",
            debug: 3
          });
          this.peer.on("open", (id) => {
            this.roomId = id;
            document.getElementById("online-status-text").innerHTML = `<span class="online-indicator-beacon"></span> 온라인 대기 중 (방 코드: <strong>${this.roomId}</strong>)`;
            document.getElementById("btn-copy-link").style.display = "inline-block";
            document.getElementById("btn-show-qr").style.display = "inline-block";
            document.getElementById("btn-create-room").style.display = "none";
            const hostName = document.getElementById("marble-player-name-0")?.value.trim() || (MarbleGameModule.isSpectatorMode ? "교사 (관전)" : (MarbleGameModule.isSoloMode ? "참가자 1" : "1조"));
            this.activePlayersList = [{ id: 0, name: hostName, isHost: true, peerId: id, teamIdx: 0 }];
            MarbleGameModule.setupPlayersInputsFromList(this.activePlayersList);
          });
          // Re-bind connection handler
          this.peer.on("connection", (c) => {
            this.conns.push(c);
            c.on("open", () => c.send({
              type: "CONNECT_ACK",
              isSoloMode: MarbleGameModule.isSoloMode,
              isSpectatorMode: MarbleGameModule.isSpectatorMode,
              slots: MarbleGameModule.getCurrentSlotNames(),
              list: this.activePlayersList,
              diceCount: MarbleGameModule.diceCount,
              playerCount: MarbleGameModule.getPlayerCountConfig()
            }));
            c.on("data", (d) => this.handleData(d, c));
            c.on("close", () => {
              this.conns = this.conns.filter(conn => conn !== c);
              this.activePlayersList = this.activePlayersList.filter(p => p.peerId !== c.peer);
              MarbleGameModule.setupPlayersInputsFromList(this.activePlayersList);
              this.broadcast({ type: "SYNC_PLAYERS", list: this.activePlayersList, slots: MarbleGameModule.getCurrentSlotNames() });
            });
          });
        } catch (e2) {
          document.getElementById("online-status-text").textContent = "방 생성 실패: " + e2.message;
        }
      } else {
        let errorMsg = "네트워크 접속 오류가 발생했습니다.";
        switch (err.type) {
          case "network":
            errorMsg = "네트워크 연결에 실패했습니다. 인터넷 상태를 확인해 주세요.";
            break;
          case "disconnected":
            errorMsg = "서버와의 연결이 끊어졌습니다.";
            break;
          case "peer-unavailable":
            errorMsg = "존재하지 않는 방 코드입니다.";
            break;
          default:
            errorMsg = `방 생성 실패: ${err.type}`;
        }
        document.getElementById("online-status-text").textContent = errorMsg;
      }
    });
  },

  joinRoom(roomId) {
    this.isHost = false;
    this.roomId = roomId;
    document.getElementById("online-status-text").textContent = "은하 접속 중...";
    
    // Show connection loading state in join modal
    const loadingEl = document.getElementById("join-conn-loading");
    const formEl = document.getElementById("join-form-wrapper");
    if (loadingEl) loadingEl.style.display = "block";
    if (formEl) formEl.style.display = "none";
    
    try {
      this.peer = new Peer({
        host: "0.peerjs.com",
        port: 443,
        secure: true,
        key: "peerjs",
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
        // Connected! Wait for CONNECT_ACK from host to show form
      });

      this.conn.on("data", (data) => {
        this.handleData(data, this.conn);
      });

      this.conn.on("close", () => {
        alert("방장과 연결이 끊어져 홈 화면으로 이동합니다.");
        if (this.peer) {
          this.peer.destroy();
          this.peer = null;
        }
        this.conns = [];
        this.activePlayersList = [];
        AppController.switchView("view-lobby");
      });
    });

    this.peer.on("error", (err) => {
      console.error("PeerJS Join error:", err);
      
      let errorMsg = "네트워크 접속 오류가 발생했습니다.";
      switch (err.type) {
        case "peer-unavailable":
          errorMsg = "존재하지 않는 방 코드입니다. 코드가 정확한지 확인해 주세요.";
          break;
        case "network":
          errorMsg = "네트워크 서버 연결에 실패했습니다. 인터넷 회선 상태를 확인해 주세요.";
          break;
        case "disconnected":
          errorMsg = "연결이 끊어졌습니다. 다시 시도해 주세요.";
          break;
        case "browser-incompatible":
          errorMsg = "이 브라우저는 멀티플레이 접속을 지원하지 않습니다. 크롬이나 사파리를 사용해 주세요.";
          break;
        case "invalid-id":
          errorMsg = "방 코드 형식이 올바르지 않습니다.";
          break;
        case "server-error":
          errorMsg = "접속 서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.";
          break;
        case "socket-error":
          errorMsg = "네트워크 소켓 연결 오류가 발생했습니다.";
          break;
        default:
          errorMsg = `연결 오류가 발생했습니다. (${err.type})`;
      }
      
      alert(errorMsg);
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
        const countBtn = document.querySelector(".btn-setup-opt[id^='btn-players-'].active");
        const count = countBtn ? parseInt(countBtn.id.replace("btn-players-", "")) : 2;
        const slots = MarbleGameModule.getCurrentSlotNames();
        const nickname = data.nickname.trim();

        const startSlot = MarbleGameModule.isSpectatorMode ? 1 : 0;
        const endSlot = MarbleGameModule.isSpectatorMode ? count + 1 : count;

        // 1. Try to find a slot that matches the nickname exactly (e.g. "1조" or "홍팀")
        let targetSlotIdx = -1;
        for (let i = startSlot; i < endSlot; i++) {
          if (slots[i] && slots[i].trim() === nickname) {
            targetSlotIdx = i;
            break;
          }
        }

        // 2. If no exact match, fall back to the first unoccupied slot sequentially (skipping Slot 0 if spectator)
        if (targetSlotIdx === -1) {
          if (!MarbleGameModule.isSoloMode) {
            senderConn.send({ type: "TEAM_NAME_ERR", msg: "모둠이름이 틀렸습니다." });
            return;
          }
          
          const occupiedIndices = new Set(this.activePlayersList.map(p => p.teamIdx));
          for (let i = startSlot; i < endSlot; i++) {
            if (i === 0 && MarbleGameModule.isSpectatorMode) continue;
            if (!occupiedIndices.has(i)) {
              targetSlotIdx = i;
              break;
            }
          }
        }

        if (targetSlotIdx !== -1) {
          const newPlayerIdx = this.activePlayersList.length;
          this.activePlayersList.push({
            id: newPlayerIdx,
            name: nickname,
            peerId: senderConn.peer,
            isHost: false,
            teamIdx: targetSlotIdx
          });
          
          senderConn.send({ type: "JOIN_SUCCESS", playerIdx: targetSlotIdx });
          
          MarbleGameModule.setupPlayersInputsFromList(this.activePlayersList);
          this.broadcast({ type: "SYNC_PLAYERS", list: this.activePlayersList, slots: MarbleGameModule.getCurrentSlotNames() });
        } else {
          senderConn.send({ type: "ROOM_FULL_ERR" });
        }
      }
      else if (data.type === "ROLL_DICE_REQ") {
        const activePlayer = MarbleGameModule.players[MarbleGameModule.activePlayerIdx];
        const senderPlayer = this.activePlayersList.find(p => p.peerId === senderConn.peer);
        
        if (senderPlayer) {
          const isOwnTurn = activePlayer.teamIdx === senderPlayer.teamIdx;
          const isTeamTurn = !MarbleGameModule.isSoloMode && activePlayer.teamIdx === senderPlayer.teamIdx;
          
          if (isOwnTurn || isTeamTurn) {
            MarbleGameModule.rollDice();
          }
        }
      }
      else if (data.type === "BUY_DECISION_REQ") {
        const activePlayer = MarbleGameModule.players[MarbleGameModule.activePlayerIdx];
        const senderPlayer = this.activePlayersList.find(p => p.peerId === senderConn.peer);
        
        if (senderPlayer) {
          const isOwnTurn = activePlayer.teamIdx === senderPlayer.teamIdx;
          const isTeamTurn = !MarbleGameModule.isSoloMode && activePlayer.teamIdx === senderPlayer.teamIdx;
          
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
          const isOwnTurn = activePlayer.teamIdx === senderPlayer.teamIdx;
          const isTeamTurn = !MarbleGameModule.isSoloMode && activePlayer.teamIdx === senderPlayer.teamIdx;
          
          if (isOwnTurn || isTeamTurn) {
            MarbleGameModule.submitQuizAnswer(data.selectedIdx, data.correctIdx);
          }
        }
      }
      else if (data.type === "INFO_PROCEED_REQ") {
        const activePlayer = MarbleGameModule.players[MarbleGameModule.activePlayerIdx];
        const senderPlayer = this.activePlayersList.find(p => p.peerId === senderConn.peer);
        
        if (senderPlayer && activePlayer.teamIdx === senderPlayer.teamIdx) {
          if (MarbleGameModule.pendingAction) {
            const action = MarbleGameModule.pendingAction;
            MarbleGameModule.pendingAction = null;
            action();
          }
        }
      }
      else if (data.type === "CHANCE_CONFIRM_REQ") {
        const activePlayer = MarbleGameModule.players[MarbleGameModule.activePlayerIdx];
        const senderPlayer = this.activePlayersList.find(p => p.peerId === senderConn.peer);
        
        if (senderPlayer && activePlayer.teamIdx === senderPlayer.teamIdx) {
          if (MarbleGameModule.pendingAction) {
            const action = MarbleGameModule.pendingAction;
            MarbleGameModule.pendingAction = null;
            action();
          }
        }
      }
      else if (data.type === "WARP_DECISION_REQ") {
        const activePlayer = MarbleGameModule.players[MarbleGameModule.activePlayerIdx];
        const senderPlayer = this.activePlayersList.find(p => p.peerId === senderConn.peer);
        
        if (senderPlayer) {
          const isOwnTurn = activePlayer.teamIdx === senderPlayer.teamIdx;
          const isTeamTurn = !MarbleGameModule.isSoloMode && activePlayer.teamIdx === senderPlayer.teamIdx;
          
          if (isOwnTurn || isTeamTurn) {
            MarbleGameModule.warpToTile(data.targetIdx);
          }
        }
      }
      else if (data.type === "BLACKHOLE_DECISION_RESP") {
        const activePlayer = MarbleGameModule.players[MarbleGameModule.activePlayerIdx];
        const senderPlayer = this.activePlayersList.find(p => p.peerId === senderConn.peer);
        if (senderPlayer && activePlayer.teamIdx === senderPlayer.teamIdx) {
          if (data.escape) {
            if (activePlayer.dust >= 50) {
              activePlayer.dust -= 50;
              activePlayer.trappedTurns = 0;
              MarbleGameModule.log(`${activePlayer.name}이(가) 벌금 50 별가루를 내고 블랙홀을 탈출했습니다.`, "highlight-event");
              MarbleGameModule.updateStatsUI();
              MarbleGameModule.syncStateWithClients();
              MarbleGameModule.isRolling = false;
              MarbleGameModule.hasRolled = false;
              MarbleGameModule.rollDice();
            } else {
              senderConn.send({ type: "BLACKHOLE_ERR", msg: "별가루가 부족해 벌금을 낼 수 없습니다. 한 턴 쉬어갑니다." });
              activePlayer.trappedTurns = 0;
              MarbleGameModule.hasRolled = false; // reset on fail too so turn finishes cleanly
              MarbleGameModule.log(`${activePlayer.name}이(가) 별가루 부족으로 블랙홀을 탈출하지 못하고 한 턴 쉬어갑니다.`);
              MarbleGameModule.endTurn();
            }
          } else {
            activePlayer.trappedTurns = 0;
            MarbleGameModule.log(`${activePlayer.name}이(가) 블랙홀 대기를 선택하여 이번 턴을 쉬어갑니다.`);
            MarbleGameModule.endTurn();
          }
        }
      }
    } 
    else {
      // Client operations
      if (data.type === "CONNECT_ACK") {
        this.activePlayersList = data.list;
        this.slotsList = data.slots;
        MarbleGameModule.isSpectatorMode = data.isSpectatorMode || false;
        
        // Sync spectator toggles locally on guest
        if (data.isSpectatorMode) {
          document.getElementById("btn-spec-on").classList.add("active");
          document.getElementById("btn-spec-off").classList.remove("active");
          document.getElementById("row-spectator-mode").style.display = "flex";
        } else {
          document.getElementById("btn-spec-off").classList.add("active");
          document.getElementById("btn-spec-on").classList.remove("active");
          document.getElementById("row-spectator-mode").style.display = "flex";
        }

        // Update dice count selector in setup for visual sync on client
        MarbleGameModule.diceCount = data.diceCount || 2;
        document.querySelectorAll(".btn-setup-opt[id^='btn-dice-count-']").forEach(b => b.classList.remove("active"));
        const activeDiceBtn = document.getElementById(`btn-dice-count-${MarbleGameModule.diceCount}`);
        if (activeDiceBtn) activeDiceBtn.classList.add("active");
        
        // Update player count selector in setup for visual sync on client
        if (data.playerCount) {
          document.querySelectorAll(".btn-setup-opt[id^='btn-players-']").forEach(b => b.classList.remove("active"));
          const activeCountBtn = document.getElementById(`btn-players-${data.playerCount}`);
          if (activeCountBtn) activeCountBtn.classList.add("active");
        }

        // Sync game mode locally on guest
        MarbleGameModule.isSoloMode = data.isSoloMode;
        if (data.isSoloMode) {
          document.getElementById("btn-mode-solo").classList.add("active");
          document.getElementById("btn-mode-team").classList.remove("active");
        } else {
          document.getElementById("btn-mode-team").classList.add("active");
          document.getElementById("btn-mode-solo").classList.remove("active");
        }

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

        // Dynamically alter labels and show team options list in Team Match mode
        const nameLabel = document.querySelector("#join-form-wrapper .setup-row label");
        if (nameLabel) {
          nameLabel.textContent = data.isSoloMode ? "내 이름:" : "모둠 이름:";
        }
        const nameInput = document.getElementById("online-join-nickname");
        if (nameInput) {
          nameInput.placeholder = data.isSoloMode ? "이름 입력" : "예: 1조, 2조";
          nameInput.value = data.isSoloMode ? "새 탐험가" : "1조";
        }
        const hintEl = document.getElementById("join-teams-hint");
        if (hintEl) {
          if (!data.isSoloMode && data.slots) {
            // Exclude Teacher slot from selectable team lists
            const activeSlots = data.slots.filter(s => s !== "교사 (관전)");
            hintEl.textContent = `참가 가능한 모둠: ${activeSlots.join(", ")}`;
            hintEl.style.display = "block";
          } else {
            hintEl.style.display = "none";
          }
        }
        
        if (data.slots) {
          this.slotsList = data.slots;
        }
        MarbleGameModule.setupPlayersInputsFromList(this.activePlayersList);

        // Show guest join input form and hide loading banner
        const loadingEl = document.getElementById("join-conn-loading");
        const formEl = document.getElementById("join-form-wrapper");
        if (loadingEl) loadingEl.style.display = "none";
        if (formEl) formEl.style.display = "block";
      }
      else if (data.type === "SYNC_PLAYERS") {
        this.activePlayersList = data.list;
        if (data.slots) {
          this.slotsList = data.slots;
        }
        MarbleGameModule.setupPlayersInputsFromList(this.activePlayersList);
      }
      else if (data.type === "START_GAME") {
        MarbleGameModule.maxTurnsLimit = data.maxTurnsLimit;
        MarbleGameModule.isSoloMode = data.isSoloMode;
        MarbleGameModule.isSpectatorMode = data.isSpectatorMode || false;
        MarbleGameModule.players = data.players;
        MarbleGameModule.diceCount = data.diceCount || 2;
        MarbleGameModule.quizTimeLimit = data.quizTimeLimit || 15;
        
        // Toggle 2nd die visibility
        document.getElementById("dice-container-2").style.display = (MarbleGameModule.diceCount === 1) ? "none" : "inline-block";
        
        AppController.switchView("view-marble");
        MarbleGameModule.hasRolled = false;
        MarbleGameModule.closeOverlays();
        MarbleGameModule.updateStatsUI();
        MarbleGameModule.updateTokensUI();
        MarbleGameModule.updateActiveTurnUI();
      }
      else if (data.type === "DICE_ANIMATE") {
        MarbleGameModule.hasRolled = true;
        MarbleGameModule.isRolling = true;
        SoundEffects.playDiceRoll();
        MarbleGameModule.animate3DDice(data.r1, data.r2);
        
        setTimeout(() => {
          MarbleGameModule.isRolling = false;
          MarbleGameModule.moveActivePlayer(data.sum);
        }, 2000);
      }
      else if (data.type === "SYNC_STATE") {
        if (data.hasRolled !== undefined) {
          MarbleGameModule.hasRolled = data.hasRolled;
        } else if (MarbleGameModule.activePlayerIdx !== data.activePlayerIdx) {
          MarbleGameModule.hasRolled = false;
        }
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
        document.getElementById("info-tile-name").textContent = data.titleLabel || `🪐 ${data.tileName}`;
        document.getElementById("info-tile-season").textContent = `${data.tileSeason.toUpperCase()} CONSTELLATION`;
        document.getElementById("info-tile-desc").textContent = data.tileDesc;
        document.getElementById("info-tile-msg").textContent = data.tileMsg || "";
        
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
      else if (data.type === "BLACKHOLE_CHOICE_REQ") {
        MarbleGameModule.showCustomConfirm("블랙홀 탈출", "현재 블랙홀에 갇혀있습니다. 50 별가루를 벌금으로 내고 즉시 탈출할까요? 취소를 누르면 이번 턴을 한 번 쉬어갑니다.",
          () => {
            MarbleNetwork.send({ type: "BLACKHOLE_DECISION_RESP", escape: true });
          },
          () => {
            MarbleNetwork.send({ type: "BLACKHOLE_DECISION_RESP", escape: false });
          }
        );
      }
      else if (data.type === "BLACKHOLE_ERR") {
        MarbleGameModule.showCustomAlert("탈출 실패", data.msg);
      }
      else if (data.type === "TEAM_NAME_ERR") {
        MarbleGameModule.showCustomAlert("입력 오류", data.msg);
      }
      else if (data.type === "JOIN_SUCCESS") {
        MarbleGameModule.myTeamIdx = data.playerIdx;
        document.getElementById("modal-online-join").style.display = "none";
        AppController.switchView("view-marble-setup");
        document.getElementById("btn-conn-online").click();
        document.getElementById("online-status-text").innerHTML = `<span class="online-indicator-beacon"></span> 우주 연결 완료 (ID: ${this.roomId})`;
        document.getElementById("btn-create-room").style.display = "none";
      }
      else if (data.type === "ROOM_FULL_ERR") {
        MarbleGameModule.showCustomAlert("접속 불가", "더 이상 참가할 수 있는 빈 자리가 없습니다.");
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
  hasRolled: false,
  isSpectatorMode: false,
  tileOwners: {},
  playerColors: ["#ff5252", "#3b82f6", "#10b981", "#eab308", "#d946ef", "#00d2d3"],
  playerTokens: ["🚀", "🛸", "☄️", "🛰️", "🌠", "🌌"],
  activeTileIdx: 0,
  diceCount: 2,
  pendingAction: null,
  quizTimerInterval: null,
  quizTimeLimit: 15,
  quizTimeRemaining: 0,
  cube1Rot: { x: 0, y: 0 },
  cube2Rot: { x: 0, y: 0 },

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

    [2, 3, 4, 5, 6].forEach(num => {
      document.getElementById(`btn-players-${num}`).addEventListener("click", () => {
        if (MarbleNetwork.peer && !MarbleNetwork.isHost) return;
        
        document.querySelectorAll(".btn-setup-opt[id^='btn-players-']").forEach(b => b.classList.remove("active"));
        document.getElementById(`btn-players-${num}`).classList.add("active");
        this.setupPlayersInputs(num);
        this.syncSetupToClients();
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
      this.syncSetupToClients();
    });

    document.getElementById("btn-mode-team").addEventListener("click", () => {
      if (MarbleNetwork.peer && !MarbleNetwork.isHost) return;
      document.getElementById("btn-mode-team").classList.add("active");
      document.getElementById("btn-mode-solo").classList.remove("active");
      this.isSoloMode = false;
      
      const countBtn = document.querySelector(".btn-setup-opt[id^='btn-players-'].active");
      const count = parseInt(countBtn.id.replace("btn-players-", ""));
      this.setupPlayersInputs(count);
      this.syncSetupToClients();
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
            this.syncSetupToClients();
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

    document.getElementById("btn-marble-lobby").addEventListener("click", () => {
      document.getElementById("marble-result-overlay").style.display = "none";
      if (MarbleNetwork.peer) {
        MarbleNetwork.peer.destroy();
        MarbleNetwork.peer = null;
        MarbleNetwork.conn = null;
        MarbleNetwork.conns = [];
        window.history.replaceState({}, document.title, window.location.pathname);
      }
      AppController.switchView("view-lobby");
    });

    document.getElementById("btn-info-proceed").addEventListener("click", () => {
      if (MarbleNetwork.peer && !MarbleNetwork.isHost) {
        document.getElementById("marble-card-info").style.display = "none";
        if (this.canLocalPlayerControl()) {
          MarbleNetwork.send({ type: "INFO_PROCEED_REQ" });
        }
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
        if (this.canLocalPlayerControl()) {
          MarbleNetwork.send({ type: "CHANCE_CONFIRM_REQ" });
        }
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
    if (MarbleNetwork.peer && !MarbleNetwork.isHost) {
      // Guest: Sync setup parameters from Host instead of defaulting to 2 players
      const count = (MarbleNetwork.slotsList && MarbleNetwork.slotsList.length) ? MarbleNetwork.slotsList.length : 2;
      document.querySelectorAll(".btn-setup-opt[id^='btn-players-']").forEach(b => b.classList.remove("active"));
      const activeCountBtn = document.getElementById(`btn-players-${count}`);
      if (activeCountBtn) activeCountBtn.classList.add("active");
      
      this.setupPlayersInputsFromList(MarbleNetwork.activePlayersList);
    } else {
      // Local or Host: use the active DOM selection (defaults to 2)
      const countBtn = document.querySelector(".btn-setup-opt[id^='btn-players-'].active");
      const count = countBtn ? parseInt(countBtn.id.replace("btn-players-", "")) : 2;
      this.setupPlayersInputs(count);
    }
    document.body.className = "theme-spring";
    MascotController.setBubbleTextOnly("별자리 부루마블 준비실이야! 온라인 모둠전 모드에서는 기기 접속 제한 없이 모둠 이름을 설정해 자유롭게 조작을 나눌 수 있어!");
  },

  getCurrentSlotNames() {
    const names = [];
    const countBtn = document.querySelector(".btn-setup-opt[id^='btn-players-'].active");
    const count = countBtn ? parseInt(countBtn.id.replace("btn-players-", "")) : 2;
    const defaultTeamNames = ["1조", "2조", "3조", "4조", "5조", "6조"];
    const totalSlots = this.isSpectatorMode ? count + 1 : count;
    
    for (let i = 0; i < totalSlots; i++) {
      const inp = document.getElementById(`marble-player-name-${i}`);
      if (inp) {
        names.push(inp.value.trim());
      } else {
        if (i === 0 && this.isSpectatorMode) {
          names.push("교사 (관전)");
        } else {
          const idx = this.isSpectatorMode ? i - 1 : i;
          names.push(this.isSoloMode ? `참가자 ${i + 1}` : defaultTeamNames[idx]);
        }
      }
    }
    return names;
  },

  getPlayerCountConfig() {
    const countBtn = document.querySelector(".btn-setup-opt[id^='btn-players-'].active");
    return countBtn ? parseInt(countBtn.id.replace("btn-players-", "")) : 2;
  },

  syncSetupToClients() {
    if (MarbleNetwork.isHost) {
      MarbleNetwork.broadcast({
        type: "CONNECT_ACK",
        isSoloMode: this.isSoloMode,
        slots: this.getCurrentSlotNames(),
        list: MarbleNetwork.activePlayersList,
        diceCount: this.diceCount,
        playerCount: this.getPlayerCountConfig()
      });
    }
  },

  setupPlayersInputs(count) {
    const container = document.getElementById("marble-players-inputs");
    container.innerHTML = "";
    
    const defaultTeamNames = ["1조", "2조", "3조", "4조", "5조", "6조"];

    if (MarbleNetwork.isHost) {
      let hostName = "";
      const existingHostName = document.getElementById("marble-player-name-0")?.value.trim();
      if (this.isSpectatorMode) {
        hostName = "교사 (관전)";
      } else {
        if (!existingHostName || existingHostName === "교사 (관전)") {
          hostName = this.isSoloMode ? "참가자 1" : defaultTeamNames[0];
        } else {
          hostName = existingHostName;
        }
      }
      MarbleNetwork.activePlayersList = [{ id: 0, name: hostName, isHost: true, peerId: "constellation-room-" + MarbleNetwork.roomId, teamIdx: 0 }];
      
      const startSlot = 1;
      const endSlot = this.isSpectatorMode ? count + 1 : count;
      
      for (let i = startSlot; i < endSlot; i++) {
        const defaultName = this.isSoloMode ? `참가자 ${i}` : defaultTeamNames[i - (this.isSpectatorMode ? 1 : 0)];
        MarbleNetwork.activePlayersList.push({ id: i, name: defaultName, peerId: "", isHost: false, teamIdx: i });
      }
      this.setupPlayersInputsFromList(MarbleNetwork.activePlayersList);
      return;
    }

    for (let i = 0; i < count; i++) {
      const label = this.isSoloMode ? `P${i + 1} 이름` : "모둠이름";
      const defaultValue = this.isSoloMode ? `참가자 ${i + 1}` : defaultTeamNames[i];
      
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
    const countBtn = document.querySelector(".btn-setup-opt[id^='btn-players-'].active");
    const count = countBtn ? parseInt(countBtn.id.replace("btn-players-", "")) : 2;
    const defaultTeamNames = ["1조", "2조", "3조", "4조", "5조", "6조"];
    const totalSlots = this.isSpectatorMode ? count + 1 : count;

    // Retrieve custom slot values from DOM before clearing container innerHTML
    const existingInps = {};
    for (let i = 0; i < totalSlots; i++) {
      const el = document.getElementById(`marble-player-name-${i}`);
      if (el) {
        existingInps[i] = el.value.trim();
      }
    }

    const container = document.getElementById("marble-players-inputs");
    container.innerHTML = "";

    const slotNames = [];
    for (let i = 0; i < totalSlots; i++) {
      if (MarbleNetwork.peer && !MarbleNetwork.isHost && MarbleNetwork.slotsList && MarbleNetwork.slotsList[i]) {
        slotNames.push(MarbleNetwork.slotsList[i]);
      } else {
        // Host or local
        if (i === 0) {
          const hostP = list.find(x => x.teamIdx === 0);
          slotNames.push(hostP ? hostP.name : (this.isSpectatorMode ? "교사 (관전)" : "참가자 1"));
        } else {
          const p = list.find(x => x.teamIdx === i && !x.isHost);
          if (this.isSoloMode) {
            slotNames.push(p ? p.name : `참가자 ${this.isSpectatorMode ? i : i + 1}`);
          } else {
            const existingVal = existingInps[i];
            slotNames.push(existingVal || defaultTeamNames[i - (this.isSpectatorMode ? 1 : 0)]);
          }
        }
      }
    }

    slotNames.forEach((sName, sIdx) => {
      if (sIdx >= totalSlots) return;
      
      const div = document.createElement("div");
      div.className = "player-input-group";
      
      const colorVal = (sIdx === 0 && this.isSpectatorMode) ? "#9e9e9e" : this.playerColors[sIdx - (this.isSpectatorMode ? 1 : 0)];
      div.style.setProperty("--player-color", colorVal);
      
      // Find who is mapped to this slot
      const members = list.filter(p => p.teamIdx === sIdx).map(p => p.name + (p.isHost ? " (방장)" : ""));
      const membersStr = members.length > 0 ? members.join(", ") : "대기 중...";
      
      let label = "";
      if (sIdx === 0 && this.isSpectatorMode) {
        label = "방장 (교사)";
      } else {
        const guestIdx = this.isSpectatorMode ? sIdx : sIdx + 1;
        label = this.isSoloMode ? `P${guestIdx} 이름` : "모둠이름";
      }
      const inputReadonly = (sIdx === 0 && this.isSpectatorMode) ? "disabled" : ((MarbleNetwork.peer && !MarbleNetwork.isHost) ? "disabled" : "");

      div.innerHTML = `
        <label style="color: ${colorVal}">${label}:</label>
        <input type="text" id="marble-player-name-${sIdx}" value="${sName}" ${inputReadonly} style="max-width: 120px; margin-right: 10px;" maxlength="8">
        <span style="font-size: 12.5px; opacity:0.8;">(${membersStr})</span>
      `;
      container.appendChild(div);

      // Bind Host updates
      if (MarbleNetwork.isHost) {
        const inp = div.querySelector("input");
        inp.addEventListener("change", () => {
          // Sync changes to active player name
          const playerObj = MarbleNetwork.activePlayersList.find(p => p.teamIdx === sIdx);
          if (playerObj) {
            playerObj.name = inp.value.trim();
          }
          this.syncSetupToClients();
        });
      }
    });
  },

  canLocalPlayerControl() {
    if (!MarbleNetwork.peer) return true;
    
    const localPlayer = MarbleNetwork.activePlayersList.find(p => p.peerId === MarbleNetwork.peer.id);
    if (!localPlayer) return false;
    
    const activePlayer = this.players[this.activePlayerIdx];
    return activePlayer.teamIdx === localPlayer.teamIdx;
  },

  handleRollClick() {
    if (this.isRolling || this.isWarpState || this.hasRolled) return;
    if (!this.canLocalPlayerControl()) {
      alert("지금은 본인 또는 본인 팀(모둠)의 조작 차례가 아닙니다.");
      return;
    }

    if (MarbleNetwork.peer && !MarbleNetwork.isHost) {
      this.hasRolled = true; // Lock locally immediately to prevent guest spam clicks
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
    const defaultTeamNames = ["1조", "2조", "3조", "4조", "5조", "6조"];

    const startSlot = this.isSpectatorMode ? 1 : 0;
    const endSlot = this.isSpectatorMode ? count + 1 : count;

    for (let i = startSlot; i < endSlot; i++) {
      const nameInput = document.getElementById(`marble-player-name-${i}`);
      const fallbackName = this.isSoloMode ? `참가자 ${this.isSpectatorMode ? i : i + 1}` : defaultTeamNames[i - startSlot];
      const name = (nameInput ? nameInput.value.trim() : "") || fallbackName;
      this.players.push({
        id: i - startSlot,
        teamIdx: i,
        name: name,
        color: this.playerColors[i - startSlot],
        token: this.playerTokens[i - startSlot],
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
        if (this.isSpectatorMode && teamIdx === 0) return;
        const mappedPlayer = this.players.find(p => p.teamIdx === teamIdx);
        if (mappedPlayer) {
          mappedPlayer.members.push(ap.name);
        }
      });
    }
    
    // Set myTeamIdx for Host / Local
    if (MarbleNetwork.peer) {
      if (MarbleNetwork.isHost) {
        this.myTeamIdx = this.isSpectatorMode ? undefined : 0;
      }
    } else {
      this.myTeamIdx = undefined;
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
        isSpectatorMode: this.isSpectatorMode,
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
        quizTimeLimit: this.quizTimeLimit,
        hasRolled: this.hasRolled
      });
    }
  },

  updateStatsUI() {
    const container = document.getElementById("marble-players-status-list");
    container.innerHTML = "";

    this.players.forEach(p => {
      const card = document.createElement("div");
      
      const isMyTeam = (this.myTeamIdx !== undefined && p.teamIdx === this.myTeamIdx);
      card.className = `marble-player-card ${p.id === this.activePlayerIdx ? 'active' : ''} ${p.bankrupt ? 'bankrupt' : ''} ${isMyTeam ? 'my-team-card' : ''}`;
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

      const myTeamBadge = isMyTeam ? `<span class="my-team-badge" style="background: #4caf50; color: #fff; font-size: 10px; font-weight: 800; padding: 2px 6px; border-radius: 4px; margin-left: 6px; text-transform: uppercase; animation: pulseGlow 1.5s infinite alternate; box-shadow: 0 0 6px #4caf50;">내 모둠</span>` : "";

      card.innerHTML = `
        <div class="player-card-left">
          <span class="player-card-token">${p.token}</span>
          <div class="player-card-info">
            <h4 style="display: flex; align-items: center; flex-wrap: wrap;">${p.name}${myTeamBadge}</h4>
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

    if (this.maxTurnsLimit === 999) {
      document.getElementById("marble-turns-left").textContent = `${this.currentTurnCount} 턴 (제한 없음)`;
    } else {
      document.getElementById("marble-turns-left").textContent = `${this.currentTurnCount} / ${this.maxTurnsLimit} 턴`;
    }
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
    if (this.isRolling || this.isWarpState || this.hasRolled) return;

    this.hasRolled = true;
    const activePlayer = this.players[this.activePlayerIdx];
    if (activePlayer.bankrupt) {
      this.endTurn();
      return;
    }

    if (activePlayer.trappedTurns > 0) {
      if (MarbleNetwork.peer) {
        if (MarbleNetwork.isHost) {
          const targetConn = MarbleNetwork.conns.find(c => {
            const p = MarbleNetwork.activePlayersList.find(ap => ap.peerId === c.peer);
            return p && p.teamIdx === activePlayer.teamIdx;
          });
          if (targetConn) {
            targetConn.send({ type: "BLACKHOLE_CHOICE_REQ" });
            this.log(`${activePlayer.name}의 블랙홀 탈출 선택을 대기 중입니다...`);
            return;
          }
        }
      }
      
      this.showCustomConfirm("블랙홀 탈출", `${activePlayer.name}은(는) 현재 블랙홀에 갇혀있습니다. 50 별가루를 벌금으로 내고 즉시 탈출할까요? 취소를 누르면 턴을 한 번 건너뜁니다.`,
        () => {
          if (activePlayer.dust >= 50) {
            activePlayer.dust -= 50;
            activePlayer.trappedTurns = 0;
            this.log(`${activePlayer.name}이(가) 벌금 50 별가루를 내고 블랙홀을 탈출했습니다.`, "highlight-event");
            this.updateStatsUI();
            this.syncStateWithClients();
            this.isRolling = false;
            this.hasRolled = false;
            this.rollDice();
          } else {
            this.showCustomAlert("탈출 실패", "별가루가 부족해 벌금을 낼 수 없습니다. 한 턴 쉬어갑니다.", () => {
              activePlayer.trappedTurns = 0;
              this.log(`${activePlayer.name}이(가) 별가루 부족으로 블랙홀을 탈출하지 못하고 한 턴 쉬어갑니다.`);
              this.hasRolled = false;
              this.endTurn();
            });
          }
        },
        () => {
          activePlayer.trappedTurns = 0;
          this.log(`${activePlayer.name}이(가) 블랙홀 대기를 선택하여 이번 턴을 쉬어갑니다.`);
          this.endTurn();
        }
      );
      return;
    }

    this.isRolling = true;
    SoundEffects.playDiceRoll();

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
    
    this.rotateCubeToValue(c1, v1, 1);
    if (this.diceCount === 2 && v2 > 0) {
      this.rotateCubeToValue(c2, v2, 2);
    }
  },

  rotateCubeToValue(cube, val, cubeIdx) {
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
    const spins = 6;
    const rot = (cubeIdx === 1) ? this.cube1Rot : this.cube2Rot;
    
    rot.x += rx + (360 * spins);
    rot.y += ry + (360 * spins);
    
    cube.style.transform = `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`;
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
      this.hasRolled = false;
      this.syncStateWithClients();
    } 
    else if (tile.type === "chance") {
      this.drawChanceCard();
    }
    else if (tile.type === "constellation") {
      const ownerIdx = this.tileOwners[pos];
      const desc = this.getConstellationDesc(tile.id);
      const seasonName = this.getConstellationSeasonName(tile.season);

      let titleLabel = "";
      let msg = "";
      let mascotText = "";
      let onProceed = null;

      if (ownerIdx === undefined) {
        titleLabel = `🪐 ${tile.name} (미개척 행성)`;
        msg = `아직 주인이 없는 새로운 별자리 행성입니다. 이 별자리를 개척하시겠습니까? (설립 비용: ✨${tile.price} 별가루)`;
        mascotText = `🪐 새로운 별자리 ${tile.name}를 발견했어! 별자리 소개를 다 읽고 개척 여부를 결정해봐!`;
        
        onProceed = () => {
          document.getElementById("marble-card-info").style.display = "none";
          
          // Setup and open buy screen card
          document.getElementById("buy-tile-name").textContent = tile.name;
          document.getElementById("buy-tile-price").textContent = tile.price;
          document.getElementById("buy-tile-desc").textContent = desc;
          document.getElementById("buy-tile-season").textContent = seasonName;
          const canvasBuy = document.getElementById("buy-tile-canvas");
          if (canvasBuy) this.drawLargeConstellation(canvasBuy, tile.id);

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

          if (this.canLocalPlayerControl()) {
            document.getElementById("marble-card-buy").style.display = "flex";
            MascotController.setBubbleTextOnly(`🪐 별자리 ${tile.name}를 개척하기 위해 비용을 지불하거나 퀴즈에 도전해봐!`);
          } else {
            document.getElementById("marble-card-buy").style.display = "none";
            MascotController.setBubbleTextOnly(`🪐 ${activePlayer.name}의 ${tile.name} 개척 결정을 대기하고 있습니다.`);
          }
        };
      } 
      else if (ownerIdx === this.activePlayerIdx) {
        titleLabel = `🪐 ${tile.name} (연합 기지)`;
        msg = "본인 소유의 별자리 기지입니다. 안전하게 기항하여 우주선 점검을 진행합니다.";
        mascotText = `🪐 연합 모둠의 소유 영토 ${tile.name} 기지에 안전하게 정박했어!`;
        
        onProceed = () => {
          document.getElementById("marble-card-info").style.display = "none";
          this.endTurn();
        };
      } else {
        const owner = this.players[ownerIdx];
        
        if (activePlayer.team !== "Solo" && activePlayer.team === owner.team) {
          titleLabel = `🪐 ${tile.name} (연합 기지)`;
          msg = `같은 연합 모둠인 ${owner.name}의 별자리 기지입니다. 통행료가 면제됩니다!`;
          mascotText = `🪐 연합 모둠의 ${tile.name} 기지에 무사 방문했어!`;
          
          onProceed = () => {
            document.getElementById("marble-card-info").style.display = "none";
            this.endTurn();
          };
        } else if (owner.bankrupt) {
          titleLabel = `🪐 ${tile.name} (중립 구역)`;
          msg = `이전 영토 소유자 ${owner.name}이(가) 파산하여 무주공산이 된 중립 별자리입니다. 무사히 통과합니다.`;
          mascotText = `🪐 주인이 없어진 중립 별자리 ${tile.name}를 평화롭게 스쳐 지나갑니다.`;
          
          onProceed = () => {
            document.getElementById("marble-card-info").style.display = "none";
            this.endTurn();
          };
        } else {
          titleLabel = `🪐 ${tile.name} (상대 기지)`;
          msg = `상대 탐험대 ${owner.name}의 영토입니다. 통행료 ✨${tile.toll} 별가루를 지불해야 합니다.`;
          mascotText = `🛸 상대의 ${tile.name} 영토 기지에 진입했어! 기지 통행료 ✨${tile.toll} 별가루를 지불해야 해.`;
          
          onProceed = () => {
            document.getElementById("marble-card-info").style.display = "none";
            this.payToll(activePlayer, owner, tile.toll);
            this.endTurn();
          };
        }
      }

      // Display the common educational info overlay for ALL players
      if (MarbleNetwork.isHost) {
        MarbleNetwork.broadcast({
          type: "SHOW_INFO_OVERLAY",
          tileIdx: pos,
          tileId: tile.id,
          tileName: tile.name,
          tileDesc: desc,
          tileSeason: seasonName,
          tileMsg: msg,
          titleLabel: titleLabel
        });
      }

      document.getElementById("info-tile-name").textContent = titleLabel;
      document.getElementById("info-tile-season").textContent = seasonName;
      document.getElementById("info-tile-desc").textContent = desc;
      document.getElementById("info-tile-msg").textContent = msg;

      const canvas = document.getElementById("info-tile-canvas");
      if (canvas) this.drawLargeConstellation(canvas, tile.id);

      this.pendingAction = onProceed;

      document.getElementById("marble-card-info").style.display = "flex";
      MascotController.setBubbleTextOnly(mascotText);
    }
  },

  drawChanceCard() {
    const activePlayer = this.players[this.activePlayerIdx];
    const card = CHANCE_CARDS[Math.floor(Math.random() * CHANCE_CARDS.length)];
    
    this.log(`${activePlayer.name}이(가) 황금열쇠 칸에 정박하여 카드를 뽑았습니다: [${card.title}]`, "highlight-event");

    // Execute effect immediately
    if (card.id === "exemption") {
      activePlayer.exemptTickets++;
      this.log(`${activePlayer.name} 탐험대가 [우주 통행세 면제권]을 확보했습니다!`, "highlight-event");
    } 
    else if (card.id === "donation") {
      const amount = Math.min(activePlayer.dust, 50);
      activePlayer.dust -= amount;
      this.log(`${activePlayer.name} 탐험대가 우주 기부단에 별가루 ✨${amount}를 기부했습니다.`, "highlight-pay");
    } 
    else if (card.id === "escape") {
      activePlayer.escapeTickets++;
      this.log(`${activePlayer.name} 탐험대가 [블랙홀 탈출 연료]를 충전했습니다!`, "highlight-event");
    } 
    else if (card.id === "lottery") {
      activePlayer.dust += 150;
      this.log(`${activePlayer.name} 탐험대가 보너스 별가루 ✨150에 당첨되었습니다!`, "highlight-event");
    } 
    else if (card.id === "repair") {
      const amount = Math.min(activePlayer.dust, 70);
      activePlayer.dust -= amount;
      this.log(`${activePlayer.name} 탐험대가 우주선 정비 기술료로 별가루 ✨${amount}를 납부했습니다.`, "highlight-pay");
    } 
    else if (card.id === "warp") {
      activePlayer.position = 6; // Move to Space Station (Tile 6)
      this.log(`${activePlayer.name} 탐험대가 웜홀 중력장에 빨려 들어가 우주정거장(Tile 6)으로 도약했습니다!`, "highlight-event");
    } 
    else if (card.id === "abundance") {
      this.players.forEach(p => {
        if (p.id !== activePlayer.id && !p.bankrupt) {
          const amount = Math.min(p.dust, 30);
          p.dust -= amount;
          activePlayer.dust += amount;
          this.log(`${p.name} 탐험대가 ${activePlayer.name} 탐험대에 개척 투자금 ✨${amount} 별가루를 전달했습니다.`);
        }
      });
    } 
    else if (card.id === "free_claim") {
      let targetTileIdx = -1;
      for (let i = 0; i < MARBLE_BOARD_TILES.length; i++) {
        const tileIdx = (activePlayer.position + i) % MARBLE_BOARD_TILES.length;
        const t = MARBLE_BOARD_TILES[tileIdx];
        if (t.type === "constellation" && this.tileOwners[tileIdx] === undefined) {
          targetTileIdx = tileIdx;
          break;
        }
      }
      if (targetTileIdx !== -1) {
        this.tileOwners[targetTileIdx] = this.activePlayerIdx;
        const tileEl = document.getElementById(`tile-${targetTileIdx}`);
        if (tileEl) {
          tileEl.classList.add(`owned-p${this.activePlayerIdx}`);
        }
        const claimedTile = MARBLE_BOARD_TILES[targetTileIdx];
        this.log(`무료 개척: ${activePlayer.name}이(가) 미개척 행성 [${claimedTile.name}]을 무료로 등기했습니다!`, "highlight-event");
      } else {
        activePlayer.dust += 100;
        this.log(`개척할 빈 별자리가 없어 보상금으로 별가루 +100을 지급받았습니다.`, "highlight-event");
      }
    }

    // Broadcast overlay to clients
    if (MarbleNetwork.isHost) {
      MarbleNetwork.broadcast({
        type: "SHOW_CHANCE_OVERLAY",
        title: card.title,
        desc: card.desc
      });
    }

    document.getElementById("chance-card-title").textContent = card.title;
    document.getElementById("chance-card-desc").textContent = card.desc;
    document.getElementById("marble-card-chance").style.display = "flex";
    MascotController.setBubbleTextOnly(`🔑 황금열쇠 카드 발견: ${card.title}`);

    this.pendingAction = () => {
      document.getElementById("marble-card-chance").style.display = "none";
      this.updateStatsUI();
      this.updateTokensUI();
      this.syncStateWithClients();
      this.endTurn();
    };
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
      this.showCustomAlert("별가루 부족", "소지한 별가루가 모자랍니다. 퀴즈에 맞추어 무료 획득을 노려보세요!");
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
      this.showCustomAlert("퀴즈 없음", "이 별자리 칸에는 수호자 퀴즈가 준비되지 않았습니다.");
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
      this.showCustomAlert("워프 오류", "워프 도약은 계절별 성운(별자리) 칸으로만 가능합니다.");
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
    this.hasRolled = false;
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

    const isGuest = MarbleNetwork.peer && !MarbleNetwork.isHost;
    document.getElementById("btn-marble-restart-end").style.display = isGuest ? "none" : "inline-block";
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
  },

  showCustomAlert(title, desc, onConfirm) {
    const modal = document.getElementById("modal-game-choice");
    document.getElementById("game-choice-title").textContent = title;
    document.getElementById("game-choice-desc").textContent = desc;
    
    const btnConfirm = document.getElementById("btn-choice-confirm");
    const btnCancel = document.getElementById("btn-choice-cancel");
    
    btnCancel.style.display = "none";
    
    const newConfirm = btnConfirm.cloneNode(true);
    btnConfirm.parentNode.replaceChild(newConfirm, btnConfirm);
    
    newConfirm.addEventListener("click", () => {
      modal.style.display = "none";
      if (onConfirm) onConfirm();
    });
    
    modal.style.display = "flex";
  },

  showCustomConfirm(title, desc, onConfirm, onCancel) {
    const modal = document.getElementById("modal-game-choice");
    document.getElementById("game-choice-title").textContent = title;
    document.getElementById("game-choice-desc").textContent = desc;
    
    const btnConfirm = document.getElementById("btn-choice-confirm");
    const btnCancel = document.getElementById("btn-choice-cancel");
    
    btnCancel.style.display = "inline-block";
    
    const newConfirm = btnConfirm.cloneNode(true);
    btnConfirm.parentNode.replaceChild(newConfirm, btnConfirm);
    
    const newCancel = btnCancel.cloneNode(true);
    btnCancel.parentNode.replaceChild(newCancel, btnCancel);
    
    newConfirm.addEventListener("click", () => {
      modal.style.display = "none";
      if (onConfirm) onConfirm();
    });
    
    newCancel.addEventListener("click", () => {
      modal.style.display = "none";
      if (onCancel) onCancel();
    });
    
    modal.style.display = "flex";
  }
};
