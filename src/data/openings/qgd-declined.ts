import type { Opening } from "@/types";

const qgdDeclined: Opening = {
  id: "qgd-declined",
  name: "Queen's Gambit Declined",
  side: "black",
  eco: "D30",
  description:
    "1.d4 d5 2.c4 e6 — playing the QGD as Black means refusing the gambit and building a solid, classical structure. You aim for long-term equality and counterplay while White tries to exploit the extra space.",
  tags: ["d4", "closed", "solid", "strategic", "classical"],
  lines: [
    {
      id: "qgd-orthodox",
      name: "Orthodox Defence",
      difficulty: "beginner",
      description:
        "The classical main line. We develop solidly with Nf6 and Be7, castle kingside, and aim for a ...c5 or ...e5 break to free our position.",
      moves: [
        {
          san: "d4",
          explanation:
            "The Queen's Gambit Declined — 1...d5 followed by 2...e6 — is chess's most solid and time-tested response to the Queen's Gambit, choosing central stability over the tactical complications of accepting the pawn. Black's idea is perfectly simple: support d5 with e6, develop Nf6 and Be7, castle, then wait for the right moment to break with c5 or e5 to free the position. The QGD is the opening of choice for players who want a genuinely sound foundation — no gambits, no speculative sacrifices, no early fireworks — just classical development and a solid structure that leads to rich strategic middlegames where superior understanding wins. It was the main weapon of Anatoly Karpov throughout his entire career, and remains one of the most reliable ways to handle 1.d4 at every level from club player to World Championship.",
        },
        {
          san: "d5",
          explanation:
            "We answer in the center at once — refusing to let White's d-pawn dominate unopposed.",
          isKeyMove: true,
        },
        {
          san: "c4",
          explanation:
            "The Queen's Gambit — White offers the c-pawn to deflect our d5-pawn and dominate the center. It's a temporary loan, not a real sacrifice.",
        },
        {
          san: "e6",
          explanation:
            "We decline, propping up d5 with the e-pawn for a rock-solid center. The well-known trade-off: this shuts in our light-squared (c8) bishop — solving that 'problem child' is our main strategic task for the whole game. We accept one flaw for a granite structure.",
          isKeyMove: true,
        },
        {
          san: "Nc3",
          explanation:
            "White develops and adds a second attacker to our d5-pawn.",
        },
        {
          san: "Nf6",
          explanation:
            "We develop and defend d5 a second time — every piece earns its keep by guarding the central point.",
        },
        {
          san: "Bg5",
          explanation:
            "White pins our f6-knight (a key defender of d5) to the queen, indirectly increasing the pressure on the center.",
        },
        {
          san: "Be7",
          explanation:
            "We quietly break the pin by backing up the knight, preparing to castle. Calm, solid unpinning — no weakening pawn moves needed yet.",
          isKeyMove: true,
        },
        {
          san: "e3",
          explanation:
            "White opens his own bishop and reinforces d4 — slow, classical build-up behind a solid center.",
        },
        {
          san: "O-O",
          explanation:
            "We castle to safety before the middlegame plans clash — finish development first.",
        },
        {
          san: "Nf3",
          explanation: "White completes development, guarding e5 and d4.",
        },
        {
          san: "Nbd7",
          explanation:
            "We develop the last knight to d7 (not c6, which would block the c-pawn needed for the ...c5 break or the ...c6 fortress). From d7 it supports both the ...e5 and ...c5 freeing breaks. Develop so you don't block your own pawn levers.",
        },
      ],
      continuationMoves: [
        {
          san: "Rc1",
          idea: "White centralises the rook to c1, building pressure on the c-file and preparing the eventual c4-c5 break to crack our centre.",
        },
        {
          san: "c6",
          idea: "We reinforce d5 with c6 — the rock-solid QGD fortress. No weaknesses, no easy targets.",
        },
        {
          san: "Bd3",
          idea: "White develops the bishop to a strong diagonal, ready to recapture on c4 and eyeing the h7 pawn.",
        },
        {
          san: "dxc4",
          idea: "We release the central tension — freeing our pieces and forcing White to recapture. Now watch where the bishop goes.",
        },
        {
          san: "Bxc4",
          idea: "White recaptures with the bishop, not a pawn. The bishop is powerfully placed on c4, targeting f7 and controlling the long diagonal. Our plan: ...c5 or ...e5 to free the position — the classic QGD strategy of patience followed by a timely central break.",
        },
      ],
      continuationIdea:
        "White centralises the rook on c1, preparing pressure on the c-file. We reinforce d5 with c6 — solid and sensible. White's Bd3 sets up to recapture on c4. We release the tension with dxc4 and White recaptures with the bishop. This is the QGD middlegame in miniature: we have achieved a comfortable, rock-solid structure. Our plan is ...c5 or ...e5 to generate counterplay — the classic QGD strategy of patience followed by a timely central break.",
    },
    {
      id: "qgd-exchange",
      name: "vs Exchange Variation",
      difficulty: "beginner",
      description:
        "White trades on d5 early, reaching a symmetrical pawn structure. We get easy development and actively look to fight for the initiative.",
      moves: [
        {
          san: "d4",
          explanation:
            "The QGD starts with d4 d5 c4 e6, and this line diverges when White plays cxd5 early — the Exchange Variation — leading to a symmetrical pawn structure where Black's c8 bishop is immediately free to develop via Bf5 and the e5 central break becomes the main counterplay idea while White executes the minority attack with b4-b5.",
        },
        {
          san: "d5",
          explanation: "We answer in the center.",
          isKeyMove: true,
        },
        {
          san: "c4",
          explanation:
            "The Queen's Gambit — offering the c-pawn to deflect our center.",
        },
        {
          san: "e6",
          explanation:
            "We decline, propping up d5 (and locking in the c8-bishop for now).",
          isKeyMove: true,
        },
        {
          san: "cxd5",
          explanation:
            "The Exchange Variation — White releases the tension into a symmetric structure with a clear plan (the minority attack), trading any opening advantage for simplicity.",
        },
        {
          san: "exd5",
          explanation:
            "We recapture with the e-pawn (not the knight), keeping a pawn on d5 and — crucially — reopening the diagonal so our problem c8-bishop can finally get out via ...Bf5. The Exchange hands us our biggest wish.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops and pressures d5." },
        {
          san: "Nf6",
          explanation: "We develop and defend d5, heading for the kingside.",
        },
        {
          san: "Bg5",
          explanation:
            "White pins the f6-knight to develop actively before we do.",
        },
        {
          san: "Be7",
          explanation: "We unpin calmly and prepare to castle.",
        },
        { san: "e3", explanation: "White reinforces d4 and opens his bishop." },
        {
          san: "O-O",
          explanation:
            "We castle. The plan is set: get the c8-bishop out with ...Bf5 and prepare ...c6 + ...Re8 to meet White's coming minority attack.",
        },
        {
          san: "Bd3",
          explanation:
            "White develops, aiming the bishop at h7 and offering to trade off our soon-to-be-active light bishop.",
        },
        {
          san: "Re8",
          explanation:
            "We put the rook behind the e-file, supporting the ...e5 break and the ...Ne4 jump — active piece play before White's queenside plan rolls. Place the rook where lines will open.",
          isKeyMove: true,
        },
      ],
      continuationMoves: [
        {
          san: "Nf3",
          idea: "White develops the last piece and prepares to castle.",
        },
        {
          san: "Nc6",
          idea: "We develop the queenside knight — now all pieces are active.",
        },
        {
          san: "O-O",
          idea: "White castles. In the Exchange Variation, White typically plays the minority attack: b4-b5 to weaken Black's c6 pawn.",
        },
        {
          san: "Bf5",
          idea: "We activate the light-squared bishop outside the pawn chain — a key advantage of the Exchange structure.",
        },
        {
          san: "b4",
          idea: "White launches the minority attack — b4-b5-bxc6 will create a weak isolated c-pawn for Black to defend. Understanding this plan is key to both sides in the Exchange QGD.",
        },
      ],
      continuationIdea:
        "Against the Exchange Variation, the key plan is to activate the c8 bishop with Bf5 before White's minority attack (b4-b5) begins. Our Re8 supports the eventual e5 break and Ne4 plan. Understanding the minority attack — and how to counter it — is the main lesson of the Exchange QGD.",
    },
    {
      id: "qgd-lasker",
      name: "Lasker Defence",
      difficulty: "intermediate",
      description:
        "Emanuel Lasker's clever idea: after Bg5, we play Ne4! — attacking the bishop and simplifying. Trading pieces eases our position and equalizes quickly.",
      moves: [
        {
          san: "d4",
          explanation:
            "The QGD starts with d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3, and this line diverges when Black plays Ne4 — the Lasker Defence — leading to a clever piece trade where the bishop on g5 is attacked and simplification eases Black's cramped position, resulting in a comfortable, equality-oriented game that Emanuel Lasker used to neutralize White's pressure.",
        },
        { san: "d5", explanation: "We answer in the center.", isKeyMove: true },
        { san: "c4", explanation: "The Queen's Gambit." },
        {
          san: "e6",
          explanation: "We decline, propping up d5.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops and pressures d5." },
        { san: "Nf6", explanation: "We develop and defend d5." },
        { san: "Bg5", explanation: "White pins our f6-knight." },
        { san: "Be7", explanation: "We unpin and prepare to castle." },
        { san: "e3", explanation: "White reinforces d4 and opens his bishop." },
        {
          san: "O-O",
          explanation: "We castle to safety.",
        },
        { san: "Nf3", explanation: "White completes development." },
        {
          san: "Ne4",
          explanation:
            "The Lasker Defence! We use the pin against White: ...Ne4 attacks the g5-bishop and offers to trade pieces. The logic is pure: a cramped side benefits from exchanges — every trade gives our pieces more room. Relieve a cramped position by trading, not by passive shuffling.",
          isKeyMove: true,
        },
        {
          san: "Bxe7",
          explanation:
            "White trades to avoid losing the bishop — exactly the simplification we wanted.",
        },
        {
          san: "Qxe7",
          explanation:
            "We recapture with the queen, which lands actively in the center. With a pair of minor pieces off, our once-cramped position breathes easily. Lasker's pragmatic recipe in action.",
          isKeyMove: true,
        },
      ],
      continuationMoves: [
        {
          san: "Bd3",
          idea: "White develops, planning to recapture on c4 and target h7.",
        },
        {
          san: "dxc4",
          idea: "We capture the c4 pawn — a free move to improve our position.",
        },
        {
          san: "Bxc4",
          idea: "White recaptures. Now both bishops are active and the position is very comfortable for us.",
        },
        {
          san: "c5",
          idea: "We immediately counterattack the d4 pawn — the classic QGD counterplay.",
        },
        {
          san: "dxc5",
          idea: "White captures. After Qxc5, we have excellent central control and easy equality. The Lasker Defence shows Lasker's genius — simplify, keep it solid, and trust the resulting endgame.",
        },
      ],
      continuationIdea:
        "The Lasker Defence shows Emanuel Lasker's pragmatic genius: instead of defending passively, trade pieces! After Ne4 and Qxe7, Black's position opens up dramatically. The queen is centralised, White's bishop pair is reduced, and the resulting position is easy to play. This was Lasker's secret weapon against the QGD.",
    },
    {
      id: "qgd-tartakower",
      name: "Tartakower-Makogonov-Bondarevsky",
      difficulty: "intermediate",
      description:
        "One of the richest systems in chess. After ...h6 and ...b6, we fianchetto the queen's bishop and create a dynamic position where both sides have long-term plans.",
      moves: [
        {
          san: "d4",
          explanation:
            "The QGD starts with d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3, and this line diverges when Black plays h6 and then b6 — the Tartakower-Makogonov-Bondarevsky — leading to the fianchetto of the 'bad' light-squared bishop to b7, transforming it from a passive piece locked behind its own pawns into the game's most powerful long-range weapon on the a8-h1 diagonal.",
        },
        { san: "d5", explanation: "We answer in the center.", isKeyMove: true },
        { san: "c4", explanation: "The Queen's Gambit." },
        {
          san: "e6",
          explanation: "We decline, propping up d5.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops and pressures d5." },
        { san: "Nf6", explanation: "We develop and defend d5." },
        { san: "Bg5", explanation: "White pins our f6-knight." },
        { san: "Be7", explanation: "We unpin and prepare to castle." },
        { san: "e3", explanation: "White reinforces d4 and opens his bishop." },
        { san: "O-O", explanation: "We castle to safety." },
        { san: "Nf3", explanation: "White completes development." },
        {
          san: "h6",
          explanation:
            "We question the g5-bishop first, forcing it to commit (Bh4 or Bxf6) before we reveal our queenside plan. A useful insertion: make the opponent declare his bishop before you commit your structure.",
          isKeyMove: true,
        },
        { san: "Bh4", explanation: "White keeps the pin, retreating to h4." },
        {
          san: "b6",
          explanation:
            "The hallmark Tartakower move, and the whole point of the system: we prepare ...Bb7 to fianchetto our 'bad' light-squared bishop — the one buried behind e6. From b7 it becomes our STRONGEST piece, raking the long diagonal. The single best way to fix a bad bishop is to re-route it onto an open diagonal.",
          isKeyMove: true,
        },
        {
          san: "Be2",
          explanation:
            "White retreats the bishop to a safe square, completing development.",
        },
        {
          san: "Bb7",
          explanation:
            "The problem bishop comes to life on b7, bearing down the a8-h1 diagonal at e4 and beyond. The QGD's lifelong weakness is now our best asset.",
        },
        { san: "O-O", explanation: "White castles to safety." },
        {
          san: "Nbd7",
          explanation:
            "We develop the last knight, supporting the ...c5 and ...Ne4 breaks that will open the long diagonal for our newly powerful bishop.",
        },
      ],
      continuationMoves: [
        {
          san: "cxd5",
          idea: "White trades on d5, opening the c-file and clarifying the center.",
        },
        {
          san: "exd5",
          idea: "We recapture with the e-pawn, freeing our light-squared bishop's diagonal.",
        },
        {
          san: "Bg5",
          idea: "White re-establishes the pin on our Nf6, maintaining central pressure.",
        },
        {
          san: "Kh7",
          idea: "The king steps to h7, making room for the rook and preparing ...g6 to challenge the bishop.",
        },
        {
          san: "h4",
          idea: "White advances h4, gaining kingside space. The Tartakower is one of the richest QGD systems — the h6-b6-Bb7 idea transforms our 'bad' light-squared bishop into the game's strongest piece.",
        },
      ],
      continuationIdea:
        "The Tartakower's h6-b6-Bb7 plan solves the QGD's main problem — the 'bad' light-squared bishop. After b6 and Bb7, the bishop controls the entire a8-h1 diagonal and becomes Black's strongest piece. The Ne4-dxe4 sequence then creates a powerful center pawn that backs up the bishop's diagonal.",
    },
    {
      id: "qgd-ragozin",
      name: "Ragozin Variation",
      difficulty: "intermediate",
      description:
        "A hybrid of the QGD and Nimzo-Indian — we play Bb4 early to pin the knight and create structural imbalances. Dynamic and fighting.",
      moves: [
        {
          san: "d4",
          explanation:
            "The QGD starts with d4 d5 c4 e6 Nc3 Nf6 Nf3, and this line diverges when Black plays Bb4 — the Ragozin Variation — leading to a hybrid of the QGD and Nimzo-Indian where the c3 knight is pinned, the dxc4-c5 sequence creates an IQP structure, and Black's active piece play and fighting character give far more winning potential than standard Orthodox QGD lines.",
        },
        { san: "d5", explanation: "We answer in the center.", isKeyMove: true },
        { san: "c4", explanation: "The Queen's Gambit." },
        {
          san: "e6",
          explanation: "We decline, propping up d5.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops and pressures d5." },
        { san: "Nf6", explanation: "We develop and defend d5." },
        {
          san: "Nf3",
          explanation:
            "White develops, supporting d4 and adding pressure on d5.",
        },
        {
          san: "Bb4",
          explanation:
            "The Ragozin! We borrow the Nimzo-Indian idea inside the QGD: ...Bb4 pins the c3-knight (a key defender of e4 and d5). It develops a piece actively AND increases central pressure — and crucially, it gets our DARK-squared bishop active before it can become passive, unlike the usual quiet ...Be7. A more fighting, ambitious QGD.",
          isKeyMove: true,
        },
        {
          san: "e3",
          explanation:
            "White reinforces d4 and opens his bishop, unfazed by the pin.",
        },
        {
          san: "O-O",
          explanation:
            "We castle to safety before the central tension resolves into complications.",
        },
        {
          san: "Bd3",
          explanation:
            "White develops, aiming at h7 and preparing to recapture on c4.",
        },
        {
          san: "dxc4",
          explanation:
            "We grab the c4-pawn with tempo, forcing White to spend a move recapturing while we accelerate our ...c5 counterplay. Trade central tension for a tempo and active piece play.",
          isKeyMove: true,
        },
        {
          san: "Bxc4",
          explanation: "White recovers the pawn, the bishop active on c4.",
        },
        {
          san: "c5",
          explanation:
            "We strike at d4 immediately, fighting for central equality and opening lines for our active pieces — accepting an IQP-type fight where our piece activity is the compensation. The Ragozin plays for a win, not a draw.",
          isKeyMove: true,
        },
      ],
      continuationMoves: [
        {
          san: "O-O",
          idea: "White castles. The Ragozin's c5 break creates immediate central tension.",
        },
        {
          san: "cxd4",
          idea: "We capture — opening the position where our active pieces can shine.",
        },
        {
          san: "exd4",
          idea: "White recaptures — an isolated queen's pawn structure has arisen.",
        },
        {
          san: "Nc6",
          idea: "We develop the knight, fighting for central control and targeting d4.",
        },
        {
          san: "Qe2",
          idea: "White defends d4 with the queen. The Ragozin is a dynamic, fighting system — the Bb4 pin combined with the c5 break gives Black excellent piece activity against White's IQP.",
        },
      ],
      continuationIdea:
        "The Ragozin combines the QGD's solid structure with the Nimzo-Indian's dynamic piece play. After dxc4-Bxc4-c5-cxd4, White has an IQP while Black has active bishops and knights. It's one of the most fighting QGD systems — used by Magnus Carlsen as a reliable weapon.",
    },
    {
      id: "qgd-cambridge-springs",
      name: "Cambridge Springs Defence",
      difficulty: "advanced",
      description:
        "A sharp, aggressive variation where we play Qa5 to attack White's Nc3 diagonally and disrupt the whole setup. Requires concrete knowledge but gives Black excellent winning chances.",
      moves: [
        {
          san: "d4",
          explanation:
            "The QGD starts with d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 e3 c6 Nf3, and this line diverges when Black plays Qa5 — the Cambridge Springs Defence — leading to an aggressive queen sortie that attacks the Nc3 diagonally, disrupts White's entire queenside setup, and allows the e5 central break far earlier than White expects, giving Black excellent winning chances.",
        },
        { san: "d5", explanation: "We answer in the center.", isKeyMove: true },
        { san: "c4", explanation: "The Queen's Gambit." },
        {
          san: "e6",
          explanation: "We decline, propping up d5.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops and pressures d5." },
        { san: "Nf6", explanation: "We develop and defend d5." },
        {
          san: "Bg5",
          explanation:
            "White pins our f6-knight — but this commits the bishop away from the queenside, which we'll exploit.",
        },
        {
          san: "Nbd7",
          explanation:
            "Instead of ...Be7, we develop the knight to d7 — and note its hidden job: it shields the a5-e1 diagonal so our queen can later swing to a5 without dropping the d5-pawn. A quiet move that enables the whole plan.",
        },
        {
          san: "e3",
          explanation:
            "White reinforces d4 — but now both his Bg5 and Nc3 sit on the firing line of a queen on a5.",
        },
        {
          san: "c6",
          explanation:
            "We free the c7-square so the queen can reach a5 next, while also bolstering d5. Prepare the square before you bring the piece.",
          isKeyMove: true,
        },
        {
          san: "Nf3",
          explanation:
            "White completes development, unaware of the coming pin.",
        },
        {
          san: "Qa5",
          explanation:
            "The Cambridge Springs! The queen creates a double-edged threat: it pins the c3-knight to nothing but, combined with ...Ne4 ideas, hits BOTH the Bg5 and Nc3 at once. White's whole Bg5/Nc3 setup is suddenly loose. Hunt for the move that strains two loosely-defended pieces simultaneously.",
          isKeyMove: true,
          wrongMoveWarning:
            "Try Qa5 here — this is the signature Cambridge Springs move!",
        },
        {
          san: "Nd2",
          explanation:
            "White defends c4 and unblocks the a5-d2 diagonal to break the queen's pressure — a common, slightly awkward defensive reply our sortie forced.",
        },
        {
          san: "Bb4",
          explanation:
            "We pile on, adding a second attacker to the pinned c3-knight. White must defend precisely to avoid losing material — exactly the disruption the Cambridge Springs aims for.",
          isKeyMove: true,
        },
        {
          san: "Qc2",
          explanation:
            "White defends the c3-knight and untangles, but the awkward defensive moves are the price our early aggression extracted.",
        },
        {
          san: "O-O",
          explanation:
            "We castle, completing development safely with White still slightly uncoordinated.",
        },
        {
          san: "Bd3",
          explanation:
            "White develops the bishop, finally getting his pieces in order.",
        },
        {
          san: "e5",
          explanation:
            "We unleash the central break — and the point of the whole line: the early ...Qa5 disruption lets us play ...e5 much sooner than in a normal QGD, seizing the initiative in an open, tactical middlegame. Disruption first, central break second.",
          isKeyMove: true,
        },
      ],
      continuationMoves: [
        {
          san: "dxe5",
          idea: "White captures — accepting Black's central break.",
        },
        {
          san: "Nxe5",
          idea: "We recapture with the knight, centralising it to a powerful square.",
        },
        {
          san: "Bxf6",
          idea: "White trades the bishop for the Nf6, doubling our pawns but giving us the open g-file.",
        },
        {
          san: "gxf6",
          idea: "We recapture with the pawn — accepting the structural change for real piece activity and the half-open g-file.",
        },
        {
          san: "Nce4",
          idea: "White's knight occupies the powerful e4 outpost. The Cambridge Springs Qa5 sortie has forced White to play defensively — and our e5 break has created a dynamic, open position where Black's active pieces compensate for any structural issues.",
        },
      ],
      continuationIdea:
        "The Cambridge Springs Qa5 disrupts White's entire setup — it forces defensive moves and allows our e5 central break much earlier than in normal QGD lines. After the e5-dxe5-Nxe5 sequence, Black has centralised, active pieces and real winning chances.",
    },
    {
      id: "qgd-vienna",
      name: "Vienna Variation",
      difficulty: "advanced",
      description:
        "We accept the gambit pawn on c4, then play Bb4 to pin the knight and justify keeping the pawn. Leads to sharp, unbalanced positions with excellent practical chances.",
      moves: [
        {
          san: "d4",
          explanation:
            "The QGD starts with d4 d5 c4 e6 Nc3 Nf6 Nf3, and this line diverges when Black actually accepts the gambit with dxc4 — the Vienna Variation — leading to sharp, unbalanced positions where the Bb4 pin and Nxe4 pawn capture create a tactical battle where Black fights to hold the material while White's bishop pair and open lines provide dynamic compensation.",
        },
        { san: "d5", explanation: "We answer in the center.", isKeyMove: true },
        { san: "c4", explanation: "The Queen's Gambit." },
        { san: "e6", explanation: "We decline... for now.", isKeyMove: true },
        { san: "Nc3", explanation: "White develops and pressures d5." },
        { san: "Nf6", explanation: "We develop and defend d5." },
        {
          san: "Nf3",
          explanation: "White develops, supporting d4 and pressing d5.",
        },
        {
          san: "dxc4",
          explanation:
            "The Vienna! Having developed first, we NOW grab the c4-pawn — a more ambitious, double-edged take on the QGD where we'll fight to keep the extra material amid sharp tactics. Delay the capture until your pieces are ready to support it.",
          isKeyMove: true,
        },
        {
          san: "e4",
          explanation:
            "White seizes the full center with tempo, betting that his pawn duo and lead in space outweigh the pawn. The position turns sharp at once.",
        },
        {
          san: "Bb4",
          explanation:
            "The Vienna's key move: we pin the c3-knight, the defender of e4. This both develops with a threat and undermines White's big center, setting up to win the e4-pawn. Pin the defender of the pawn you want to win.",
          isKeyMove: true,
        },
        {
          san: "Bxc4",
          explanation:
            "White regains his pawn, the bishop active on c4 — but the pin on c3 still bites.",
        },
        {
          san: "Nxe4",
          explanation:
            "We snatch the e4-pawn! It works tactically because the c3-knight is pinned to the king by our b4-bishop — it can't recapture. Exploit a pin to win the piece it's guarding. Sharp, but concrete.",
          isKeyMove: true,
        },
        {
          san: "O-O",
          explanation:
            "White castles, unpinning and generating fast threats against our advanced knight — the price of our greed is that we must now defend accurately.",
        },
        {
          san: "Nxc3",
          explanation:
            "We resolve the tension by capturing the knight, simplifying before White's initiative grows.",
        },
        {
          san: "bxc3",
          explanation:
            "White recaptures, his pawns doubled but the b-file open and his bishops raking toward our king — his dynamic compensation.",
        },
        {
          san: "Be7",
          explanation:
            "We retreat the bishop to a safe square and prepare to castle — the priority now is consolidation, tucking the king away and keeping the extra pawn. After grabbing material, finish development and get safe.",
        },
      ],
      continuationMoves: [
        {
          san: "Re1",
          idea: "White centralises the rook, targeting our Be7 and pressing for compensation.",
        },
        {
          san: "O-O",
          idea: "We castle — the king is safe and we can consolidate the material.",
        },
        {
          san: "Qe2",
          idea: "White adds pressure — targeting e6 and planning to advance the center.",
        },
        {
          san: "Qd6",
          idea: "We centralise the queen on d6, keeping the position flexible and defending key squares.",
        },
        {
          san: "Bd5",
          idea: "White's bishop claims the powerful d5 outpost. The Vienna Variation is one of the sharpest QGD systems — accepting the gambit and fighting to keep the pawn. With precise play, Black can keep the material while neutralising White's dynamic compensation.",
        },
      ],
      continuationIdea:
        "The Vienna Variation shows how to fight for material in the QGD. After dxc4-Bb4-Nxe4-Nxc3, Black has won a pawn but White has compensation in the bishop pair and open lines. The key is to consolidate quickly with Be7-O-O while fighting for active squares with Qd5.",
    },
  ],
};

export default qgdDeclined;
