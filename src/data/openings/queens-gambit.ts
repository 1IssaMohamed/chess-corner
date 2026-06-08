import type { Opening } from "@/types";

const queensGambit: Opening = {
  id: "queens-gambit",
  name: "Queen's Gambit",
  side: "white",
  eco: "D06",
  description:
    "One of the oldest and most respected openings. White offers a pawn on c4 to gain central control. Whether accepted or declined, White aims for a strong center and active piece play.",
  tags: ["d4", "closed-game", "classical", "positional"],
  lines: [
    {
      id: "accepted",
      name: "Queen's Gambit Accepted",
      difficulty: "beginner",
      description:
        "Black accepts the pawn sacrifice with dxc4, but White quickly regains it while gaining central control. The QGA leads to open, active play where White's development advantage becomes clear.",
      moves: [
        {
          san: "d4",
          explanation:
            "The Queen's Gambit — 1.d4 d5 2.c4 — is one of the oldest and most respected openings in chess, a staple of World Championship play from Capablanca to Kasparov. White offers the c4 pawn not as a true sacrifice but as a temporary gambit: whether Black accepts or declines, White aims to control the center with the d-pawn and develop all pieces to their ideal squares. In the accepted line, Black takes the c4 pawn but finds White regaining it with the bishop, emerging with harmonious development and a stable center. The long-term plan is satisfying and repeatable: active minor pieces, the Nc4 outpost, and a5 clamping Black's queenside — White gets a pleasant, risk-free edge every time.",
          isKeyMove: true,
        },
        {
          san: "d5",
          explanation:
            "Black answers in the center. If Black lets White play both e4 and d4, he's squeezed — so the d-pawn stakes an equal claim before pieces come out.",
        },
        {
          san: "c4",
          explanation:
            "The Queen's Gambit! It's not a real sacrifice — it's a deflection. White offers the c-pawn to lure Black's d5-pawn off the center; if ...dxc4, White's d-pawn rules the center alone and the c4-pawn is easily regained. Offer a wing pawn to remove a central defender.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Queen's Gambit always follows with 2.c4 after 1.d4 d5.",
        },
        {
          san: "dxc4",
          explanation:
            "Black accepts. The key thing to understand: this pawn can't be held (after ...b5 to defend it, a4 breaks it up), so Black isn't really winning a pawn — he's conceding the center in exchange for development time.",
        },
        {
          san: "Nf3",
          explanation:
            "White develops and, importantly, stops ...e5 — Black's freeing break. Take away the opponent's central counter-strike before going to win back your pawn.",
          isKeyMove: true,
        },
        {
          san: "Nf6",
          explanation:
            "Black develops naturally and keeps an eye on the e4 and d5 squares.",
        },
        {
          san: "e3",
          explanation:
            "Modest but purposeful: it opens the f1-bishop's path to recapture on c4 and reinforces d4. Sometimes the strong move is the small one that unlocks a plan.",
          isKeyMove: true,
        },
        {
          san: "e6",
          explanation:
            "Black opens his own f8-bishop and prepares ...c5 to hit the center — the only way to fight back is to challenge d4.",
        },
        {
          san: "Bxc4",
          explanation:
            "White recaptures the pawn, and the bishop lands on its dream diagonal aiming at f7. White has regained the material AND has freer development — the gambit's promise delivered.",
          isKeyMove: true,
        },
        {
          san: "c5",
          explanation:
            "Black strikes at d4 immediately — the thematic freeing break. An isolated-queen's-pawn structure or mass trades will follow; Black must generate activity or be left passive.",
        },
        {
          san: "O-O",
          explanation:
            "White tucks the king away and connects the rooks before the center clarifies — safety first, then exploit the freer position.",
          isKeyMove: true,
        },
        {
          san: "a6",
          explanation:
            "Black prepares ...b5 to chase the c4-bishop and grab queenside space — his main source of counterplay in the QGA.",
        },
        {
          san: "Bb3",
          explanation:
            "The bishop steps back but keeps the a2-g8 diagonal and f7 in its sights, sidestepping the coming ...b5 without losing any of its bite.",
        },
        {
          san: "b5",
          explanation:
            "Black expands on the queenside, gaining space and clearing b7 for the bishop.",
        },
        {
          san: "a4",
          explanation:
            "White challenges the b5-pawn at once, before Black can consolidate his queenside grip. Strike at an advancing pawn chain while it's still loose.",
          isKeyMove: true,
        },
        {
          san: "b4",
          explanation:
            "Black pushes past to keep his space rather than allow axb5 — but the advanced b4-pawn and the hole on c4 will become White's targets.",
        },
        {
          san: "Nbd2",
          explanation:
            "The knight heads for the gorgeous c4 outpost (and eyes e4) — routing a piece toward the hole Black just created. Aim your knights at squares the opponent can no longer defend with a pawn.",
        },
        {
          san: "Bb7",
          explanation:
            "Black fianchettoes onto the long diagonal, bearing down on White's center and the g2-square for counterplay.",
        },
      ],
      continuationMoves: [
        {
          san: "Nc4",
          idea: "The knight jumps to c4 — an excellent outpost from where it eyes b6 and d6 and supports the a5 advance.",
        },
        {
          san: "Nbd7",
          idea: "Black develops, covering the key squares and preparing to challenge White's active pieces.",
        },
        {
          san: "a5",
          idea: "White clamps the queenside — the a6 pawn is now a long-term target and Black cannot expand any further.",
        },
        {
          san: "Be7",
          idea: "Black prepares to castle — no counterplay is available yet.",
        },
        {
          san: "Qe2",
          idea: "White prepares to double rooks on the d-file. Black is solid but passive — White has effortless, harmonious development and a clear plan.",
        },
      ],
      continuationIdea:
        "The whole point of accepting the gambit and then handing the pawn back: White emerges with effortless, harmonious development. The bishop on b3 rakes the a2-g8 diagonal at f7, the knight jumps to the active c4 square, and a5 clamps Black's loose queenside pawns. Black is solid but passive — White simply has the easier, more pleasant game.",
    },
    {
      id: "declined-orthodox",
      name: "QGD — Orthodox Defence",
      difficulty: "beginner",
      description:
        "Black declines the gambit and builds a solid defensive setup with e6. The QGD Orthodox is one of Black's most reliable systems — solid, well-tested, used by World Champions for over a century.",
      moves: [
        {
          san: "d4",
          explanation:
            "The Queen's Gambit starts with d4 d5 c4, and this line diverges when Black declines with e6 — the most solid approach — leading to the Orthodox QGD where both sides build classical pawn structures and the game revolves around whether Black's timely c5 break can free a position that is solid but potentially cramped.",
        },
        { san: "d5", explanation: "Black stakes his claim in the center." },
        {
          san: "c4",
          explanation:
            "The Queen's Gambit — offering the c-pawn to deflect Black's center.",
          isKeyMove: true,
        },
        {
          san: "e6",
          explanation:
            "Black declines, propping up d5 with a pawn so the center stays rock-solid. The well-known cost: the e6-pawn locks in Black's light-squared (c8) bishop — solving that 'problem bishop' is Black's main task for the whole game.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the QGD Orthodox, we play e6 to support d5 rather than capturing.",
        },
        {
          san: "Nc3",
          explanation:
            "White develops and adds a second attacker to d5, increasing the pressure on Black's center.",
          isKeyMove: true,
        },
        {
          san: "Nf6",
          explanation:
            "Black develops and defends d5 a third time — every piece earns its keep by guarding the central point.",
        },
        {
          san: "Bg5",
          explanation:
            "White pins the f6-knight to the queen — and since that knight was a key defender of d5, the pin indirectly increases the pressure on the center. The Orthodox main move.",
          isKeyMove: true,
        },
        {
          san: "Be7",
          explanation:
            "Black breaks the pin's sting by backing up the knight, calmly preparing to castle — solid, unflashy development.",
        },
        {
          san: "e3",
          explanation:
            "White opens the f1-bishop's diagonal and reinforces d4 — slow, classical build-up behind a solid center.",
          isKeyMove: true,
        },
        {
          san: "O-O",
          explanation: "Black castles to safety, completing the kingside.",
        },
        {
          san: "Nf3",
          explanation: "White develops the last knight, guarding e5 and d4.",
        },
        {
          san: "h6",
          explanation:
            "Black questions the g5-bishop, forcing it to commit to keeping or releasing the pin.",
        },
        {
          san: "Bh4",
          explanation:
            "White keeps the pin — releasing it would ease Black's game, so the bishop holds the pressure on f6/d5.",
          isKeyMove: true,
        },
        {
          san: "b6",
          explanation:
            "Black finally addresses his problem bishop, preparing ...Bb7 to develop it on the long diagonal.",
        },
        {
          san: "Bd3",
          explanation:
            "White develops aggressively, aiming the bishop at h7 in case of a future kingside attack.",
        },
        {
          san: "Bb7",
          explanation:
            "Black solves the problem bishop — it's now active on the long diagonal, eyeing e4 and the center.",
        },
        {
          san: "O-O",
          explanation:
            "White castles, fully developed. The slow strategic battle over the c5 and e4 breaks begins.",
        },
        {
          san: "Nbd7",
          explanation:
            "Black completes development, the knight supporting the freeing ...c5 break to come.",
        },
      ],
      continuationMoves: [
        {
          san: "Rc1",
          idea: "White centralises the rook to the c-file, targeting the c6 pawn if Black ever plays c5.",
        },
        {
          san: "c5",
          idea: "Black strikes the center — the only real way to fight for equality in the Orthodox.",
        },
        {
          san: "cxd5",
          idea: "White captures, opening the c-file for the rook that just moved to c1.",
        },
        {
          san: "exd5",
          idea: "Black recaptures, reaching the hanging pawns or IQP depending on whether Black plays cxd4.",
        },
        {
          san: "dxc5",
          idea: "White captures — now Black must recapture and manage the IQP. The Orthodox QGD is all about whether Black can activate the d5 pawn or whether it becomes a weakness.",
        },
      ],
      continuationIdea:
        "The Orthodox QGD's central tension revolves around Black's c5 break. White's Rc1 prepares to use the c-file after the exchanges, and if Black doesn't break with c5, White just improves pieces and eventually plays e4 anyway. The key strategic question is whether Black's IQP after the pawn exchanges is a strength (active pieces) or a weakness (endgame target).",
    },
    {
      id: "exchange-variation",
      name: "Exchange Variation",
      difficulty: "beginner",
      description:
        "White captures on d5 early, creating a symmetrical structure. White then aims for the minority attack on the queenside — pushing b4-b5 to create weaknesses in Black's pawn majority.",
      moves: [
        {
          san: "d4",
          explanation:
            "The Queen's Gambit starts with d4 d5 c4, and this line diverges when White captures cxd5 early, leading to the Exchange Variation where White trades the c-pawn to execute the minority attack — pushing b4-b5 to saddle Black with a permanently weak isolated c-pawn.",
        },
        { san: "d5", explanation: "Black stakes his claim in the center." },
        { san: "c4", explanation: "The Queen's Gambit." },
        {
          san: "e6",
          explanation:
            "Black declines, propping up d5 (and locking in the c8-bishop).",
        },
        { san: "Nc3", explanation: "White develops and pressures d5." },
        { san: "Nf6", explanation: "Black develops and defends d5." },
        {
          san: "cxd5",
          explanation:
            "The Exchange Variation! White resolves the center early, fixing a symmetrical structure where he has a concrete plan: the minority attack on the queenside. Trade to reach a structure where you have a clear plan and the opponent doesn't.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Exchange Variation, we capture cxd5 rather than developing another piece.",
        },
        {
          san: "exd5",
          explanation:
            "Black recaptures with the e-pawn to keep a pawn on d5 and reopen the c8-bishop. The symmetrical 'carlsbad' structure is set — and Black's queenside majority is the target.",
        },
        {
          san: "Bg5",
          explanation:
            "White pins the f6-knight, the defender of d5/e4, and develops actively before Black can.",
          isKeyMove: true,
        },
        {
          san: "c6",
          explanation:
            "Black solidifies d5 and frees f5 for the bishop — getting the problem bishop out before ...e6 traps it.",
        },
        {
          san: "e3",
          explanation:
            "White reinforces d4 and opens the f1-bishop — quiet build-up behind the symmetric center.",
        },
        {
          san: "Bf5",
          explanation:
            "Black develops the light-squared bishop OUTSIDE the pawn chain — the key idea, since ...c6/...e6 would otherwise bury it. Get your bad bishop out before you lock it in.",
        },
        {
          san: "Bd3",
          explanation:
            "White offers to trade light-squared bishops; swapping Black's well-placed bishop suits the attacker, and the recapture centralizes the queen.",
          isKeyMove: true,
        },
        {
          san: "Bxd3",
          explanation:
            "Black accepts the trade to avoid losing time retreating, reducing White's attacking material.",
        },
        {
          san: "Qxd3",
          explanation:
            "White recaptures, the queen well-placed and ready to support the queenside expansion.",
        },
        {
          san: "Nbd7",
          explanation:
            "Black develops the last knight, heading toward defending the queenside.",
        },
        {
          san: "Nf3",
          explanation: "White completes development and prepares to castle.",
        },
        {
          san: "Be7",
          explanation: "Black prepares to castle, the bishop on a safe square.",
        },
      ],
      continuationMoves: [
        {
          san: "O-O",
          idea: "White castles and prepares the minority attack — b4-b5 to weaken Black's c6 pawn.",
        },
        {
          san: "O-O",
          idea: "Black castles too. Both sides are fully developed.",
        },
        {
          san: "b4",
          idea: "The minority attack begins! White advances the b-pawn to challenge Black's queenside majority — 2 pawns vs 3.",
        },
        {
          san: "Re8",
          idea: "Black centralises the rook and prepares counterplay. The minority attack is White's signature plan in the Exchange Variation.",
        },
        {
          san: "b5",
          idea: "White presses on — the goal is to trade the b-pawn for Black's c-pawn, leaving a weak, isolated c6 pawn as a permanent target. Simple, logical, and effective.",
        },
      ],
      continuationIdea:
        "The Exchange Variation's plan is beautifully clear: White uses the minority attack (b4-b5-bxc6) to saddle Black with a weak isolated c-pawn. With no active counterplay, Black must defend this pawn passively for the entire middlegame and endgame. Understanding this plan teaches you one of the most important positional concepts in chess — the minority attack.",
    },
    {
      id: "slav-defense",
      name: "Slav Defence",
      difficulty: "intermediate",
      description:
        "Black plays c6 to support d5 without blocking the c8 bishop. The Slav is a rock-solid defence with excellent counterplay potential — very popular at all levels up to the elite.",
      moves: [
        {
          san: "d4",
          explanation:
            "The Queen's Gambit starts with d4 d5 c4, and this line diverges when Black plays c6 instead of e6, leading to the rock-solid Slav Defence — Black's most important advantage is developing the c8 bishop to f5 before the pawn chain closes, solving the QGD's main structural problem.",
        },
        { san: "d5", explanation: "Black stakes his claim in the center." },
        { san: "c4", explanation: "The Queen's Gambit.", isKeyMove: true },
        {
          san: "c6",
          explanation:
            "The Slav! Black supports d5 with the c-pawn instead of the e-pawn — the crucial difference from the QGD is that the c8-bishop's diagonal stays OPEN. Black solves the problem-bishop issue before it arises. Defend your center without imprisoning your own pieces.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Slav plays c6 — supporting d5 while leaving the c8-h3 diagonal open for the bishop.",
        },
        {
          san: "Nf3",
          explanation: "White develops and stops ...e5, the freeing break.",
        },
        { san: "Nf6", explanation: "Black develops and contests e4." },
        {
          san: "Nc3",
          explanation: "White develops and piles a second attacker onto d5.",
          isKeyMove: true,
        },
        {
          san: "dxc4",
          explanation:
            "Black takes — but unlike the QGA, he has the c6-pawn ready to support ...b5 holding the extra pawn, and he'll get the bishop out first. The c6 move makes this capture far more annoying for White.",
        },
        {
          san: "a4",
          explanation:
            "White stops ...b5 (which would defend the c4-pawn) — a small concession, because a4 weakens b4 and the b3-square, but necessary to regain the pawn.",
          isKeyMove: true,
        },
        {
          san: "Bf5",
          explanation:
            "The whole point of the Slav: the bishop develops to an active square OUTSIDE the chain before ...e6 shuts it in. This is the move ...c6 was played to enable. Get the problem bishop out first.",
          isKeyMove: true,
        },
        {
          san: "e3",
          explanation:
            "White opens the f1-bishop to recapture on c4 and reinforces d4.",
        },
        {
          san: "e6",
          explanation:
            "NOW Black plays ...e6 — safe, because the bishop is already outside. The pawn chain forms with the bishop on the good side of it.",
        },
        {
          san: "Bxc4",
          explanation:
            "White regains the gambit pawn, the bishop active on c4.",
        },
        {
          san: "Bb4",
          explanation:
            "Black pins the c3-knight, the defender of e4, fighting for the e4 break and developing with a threat.",
        },
        { san: "O-O", explanation: "White castles to safety." },
        {
          san: "O-O",
          explanation:
            "Black castles, fully developed with no bad pieces — the Slav's promise fulfilled.",
        },
        {
          san: "Qe2",
          explanation:
            "White connects rooks and prepares the e4 break to open lines for the bishop pair.",
        },
        {
          san: "Nbd7",
          explanation:
            "Black completes development, controlling e5 and supporting ...Ne4.",
        },
      ],
      continuationMoves: [
        {
          san: "a5",
          idea: "White advances a5, clamping the queenside and taking away the b6 square from Black's pieces.",
        },
        {
          san: "Bxc3",
          idea: "Black trades the bishop for White's knight, accepting structural damage to eliminate a key defender.",
        },
        {
          san: "bxc3",
          idea: "White recaptures with the b-pawn, opening the b-file.",
        },
        {
          san: "Ne4",
          idea: "Black's knight leaps to the strong e4 outpost — the classic Slav counterplay, centralising the knight on an excellent square.",
        },
        {
          san: "Bd3",
          idea: "White attacks the Ne4, fighting for control of the center. The Slav gives Black active piece play with a solid structure — White has the bishop pair but Black's pieces are well-coordinated.",
        },
      ],
      continuationIdea:
        "The Slav Defence rewards concrete understanding of the bishop pair versus solid structure tradeoff. Black's Bf5 outside the pawn chain is the whole point of c6 — without it, Black would be stuck with a passive bishop. After castling, the game revolves around whether White can use the e4 break to open lines for the bishops, or Black can neutralize them.",
    },
    {
      id: "semi-slav",
      name: "Semi-Slav Defence",
      difficulty: "intermediate",
      description:
        "Black combines e6 and c6, creating a very solid pawn structure that is also the basis for sharp variations like the Meran and Moscow. One of the most studied openings in all of chess.",
      moves: [
        {
          san: "d4",
          explanation:
            "The Queen's Gambit starts with d4 d5 c4, and this line diverges when Black combines e6 and c6 to create the ultra-solid Semi-Slav structure, leading to the theoretically dense Meran Variation where both sides race — White pushing e4 in the center while Black advances b5-c5 on the queenside.",
        },
        { san: "d5", explanation: "Black stakes his claim in the center." },
        { san: "c4", explanation: "The Queen's Gambit." },
        {
          san: "c6",
          explanation:
            "Black starts a Slav structure, keeping ...dxc4 with ...b5 ideas alive.",
        },
        { san: "Nf3", explanation: "White develops and prevents ...e5." },
        { san: "Nf6", explanation: "Black develops and contests e4." },
        { san: "Nc3", explanation: "White piles a second attacker onto d5." },
        {
          san: "e6",
          explanation:
            "The Semi-Slav! Black adds ...e6 to the ...c6 setup, building the ultra-solid c6-d5-e6 triangle. The trade-off is real: the structure is granite, but the c8-bishop is now boxed in — freeing it (or justifying the ...dxc4/...b5 plan) defines the whole opening.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Semi-Slav, we add e6 to the Slav structure — extremely solid and flexible.",
        },
        {
          san: "e3",
          explanation:
            "White chooses the solid Meran setup, opening the bishop to d3 rather than the sharper Bg5 lines.",
        },
        {
          san: "Nbd7",
          explanation:
            "Black develops, supporting e5/c5 breaks and preparing ...dxc4.",
        },
        {
          san: "Bd3",
          explanation:
            "White develops the bishop to its best diagonal, aiming at h7.",
          isKeyMove: true,
        },
        {
          san: "dxc4",
          explanation:
            "The Meran! Black grabs the pawn now that ...b5 will hold it, gaining the tempo on the bishop and freeing the c8-bishop's path.",
        },
        {
          san: "Bxc4",
          explanation: "White recaptures, the bishop again raking toward f7.",
        },
        {
          san: "b5",
          explanation:
            "The Meran's signature: Black gains a tempo on the bishop AND opens b7 for the problem bishop in one move. The queenside pawn storm (...b5-...c5-...b4) becomes Black's main counterplay. A gain of tempo that also frees a piece is doubly good.",
          isKeyMove: true,
        },
        {
          san: "Bd3",
          explanation:
            "The bishop retreats to its best square, still eyeing h7.",
        },
        {
          san: "Bb7",
          explanation:
            "Black finally develops the problem bishop onto the long diagonal.",
        },
        {
          san: "O-O",
          explanation: "White castles, ready to fight for the center with e4.",
        },
        {
          san: "b4",
          explanation:
            "Black pushes the c3-knight, gaining space and clearing c5 for the central break.",
        },
      ],
      continuationMoves: [
        {
          san: "Ne2",
          idea: "White repositions the knight — from e2 it goes to g3, supporting the center and preparing kingside action.",
        },
        {
          san: "a5",
          idea: "Black continues queenside expansion — the b4-b5 pawn roller is the Semi-Slav's main source of counterplay.",
        },
        {
          san: "Ng3",
          idea: "The knight arrives on g3, eyeing f5 and h5 for kingside attack.",
        },
        {
          san: "c5",
          idea: "Black strikes the center, fighting back before White builds a huge center.",
        },
        {
          san: "e4",
          idea: "White pushes e4 — the center opens and both players race. The Semi-Slav Meran is one of the most deeply analyzed variations in chess, with theory going 30+ moves deep.",
        },
      ],
      continuationIdea:
        "The Meran Variation is a race: White attacks in the center with e4, Black pushes queenside pawns with b4-b5-c5. Both plans are direct and forceful — this is why the Semi-Slav is one of the most theoretically dense openings in chess. Whoever knows the theory better usually wins in the complications.",
    },
    {
      id: "tarrasch-defense",
      name: "Tarrasch Defence",
      difficulty: "intermediate",
      description:
        "Black plays c5 early to achieve an isolated queen's pawn (IQP) position with active piece play. The IQP gives Black dynamic chances in exchange for a long-term endgame weakness.",
      moves: [
        {
          san: "d4",
          explanation:
            "The Queen's Gambit starts with d4 d5 c4 e6, and this line diverges when Black plays c5 early to deliberately create an isolated queen's pawn, leading to dynamic IQP positions where Black's active pieces and open d-file compensate for a pawn that becomes a potential endgame weakness.",
        },
        { san: "d5", explanation: "Black stakes his claim in the center." },
        { san: "c4", explanation: "The Queen's Gambit." },
        {
          san: "e6",
          explanation: "Black prepares to support d5 and free the f8-bishop.",
        },
        { san: "Nc3", explanation: "White develops and pressures d5." },
        {
          san: "c5",
          explanation:
            "The Tarrasch! Black counter-strikes d4 immediately, willingly heading for an isolated d-pawn. The bet: the IQP gives him free, active pieces and the open e- and c-files NOW, and he'll attack before the pawn becomes a long-term weakness. Trade a structural defect for piece activity.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Tarrasch, we play c5 early to get active piece play with the IQP.",
        },
        {
          san: "cxd5",
          explanation:
            "White captures, beginning the sequence that isolates Black's d-pawn.",
        },
        {
          san: "exd5",
          explanation:
            "Black recaptures toward the center; the d5-pawn is now isolated (no friendly pawns on c or e files), but it controls c4/e4 and opens lines for his pieces.",
        },
        {
          san: "Nf3",
          explanation: "White develops and prepares to blockade the IQP on d4.",
        },
        {
          san: "Nc6",
          explanation:
            "Black develops, defending d5 and eyeing the d4 and e5 squares.",
        },
        {
          san: "g3",
          explanation:
            "White fianchettoes to attack the isolated d5-pawn straight down the long diagonal — the standard way to pressure an IQP from a distance. Attack the isolated pawn with pieces, not pawns.",
          isKeyMove: true,
        },
        { san: "Nf6", explanation: "Black develops and defends d5 again." },
        {
          san: "Bg2",
          explanation:
            "The fianchetto bishop is home, x-raying d5 — a permanent, low-risk attacker on the weakness.",
        },
        {
          san: "Be7",
          explanation:
            "Black develops and prepares to castle, keeping pieces active.",
        },
        { san: "O-O", explanation: "White castles to safety." },
        {
          san: "O-O",
          explanation: "Black castles, ready to use his active pieces.",
        },
        {
          san: "dxc5",
          explanation:
            "White removes the c5-pawn so that d5 stands truly isolated and fixed as a target. Fix the weakness before you besiege it.",
          isKeyMove: true,
        },
        {
          san: "Bxc5",
          explanation:
            "Black recaptures with the bishop, keeping it active on the a7-g1 diagonal — activity is the IQP-holder's lifeblood.",
        },
      ],
      continuationMoves: [
        {
          san: "Na4",
          idea: "White's knight hits the active Bc5 — the standard way to challenge the bishop guarding the f2-a7 diagonal.",
        },
        {
          san: "Bd6",
          idea: "Black retreats the bishop to an active diagonal, eyeing h2 and keeping the pieces coordinated.",
        },
        {
          san: "Be3",
          idea: "White develops and heads for the d4 blockade square in front of the isolated pawn.",
        },
        {
          san: "Re8",
          idea: "Black centralises the rook on the open e-file — active piece play is the IQP's compensation.",
        },
        {
          san: "Rc1",
          idea: "White piles onto the c-file. The Tarrasch IQP position is a duel between Black's piece activity and White's long-term pressure on the isolated d5 pawn — a fascinating positional battleground.",
        },
      ],
      continuationIdea:
        "The Tarrasch IQP position is the most famous illustration of a positional tradeoff: Black has active piece play and the open d-file, while White targets the isolated d5 pawn long-term. If Black can attack before White consolidates, the pawn doesn't matter. If White blockades it successfully and reaches an endgame, d5 becomes a decisive weakness.",
    },
    {
      id: "catalan",
      name: "Catalan Opening",
      difficulty: "intermediate",
      description:
        "White fianchettos the king's bishop while controlling the center with d4 and c4. The Catalan creates long-term pressure on the queenside and is a favourite of elite players including Magnus Carlsen.",
      moves: [
        {
          san: "d4",
          explanation:
            "The Queen's Gambit starts with d4 d5 c4, and this line diverges when White plays g3 to fianchetto the king's bishop, leading to the patient, long-term pressure of the Catalan Opening — the Bg2 aims down the a8-h1 diagonal all game and creates a slow squeeze on Black's queenside pawns that Magnus Carlsen has turned into an elite precision weapon.",
        },
        { san: "d5", explanation: "Black stakes his claim in the center." },
        { san: "c4", explanation: "The Queen's Gambit." },
        { san: "e6", explanation: "Black declines, supporting d5." },
        { san: "Nf3", explanation: "White develops and prevents ...e5." },
        { san: "Nf6", explanation: "Black develops and contests e4." },
        {
          san: "g3",
          explanation:
            "The Catalan! Instead of Nc3, White fianchettoes — the bishop on g2 will pressure the a8-h1 diagonal (and especially the d5/c6/b7 squares) for the ENTIRE game. It's the most patient idea in chess: lasting pressure over a quick result. Choose long-term pressure when you have no rush.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Catalan, we play g3 to fianchetto the king's bishop.",
        },
        {
          san: "Be7",
          explanation: "Black develops solidly and prepares to castle.",
        },
        {
          san: "Bg2",
          explanation:
            "The Catalan bishop reaches its post, already eyeing b7 and d5. Even if Black grabs the c4-pawn, this bishop's pressure on the long diagonal usually wins it back.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "Black castles to safety." },
        {
          san: "O-O",
          explanation: "White castles, in no hurry to recapture on c4.",
        },
        {
          san: "dxc4",
          explanation:
            "Black grabs the pawn, hoping to hold it with ...a6/...b5 — but the Bg2 makes that hard to sustain.",
        },
        {
          san: "Qc2",
          explanation:
            "White prepares Qxc4 to regain the pawn without committing the bishop, keeping the long diagonal clear. Recover material the way that keeps your best piece working.",
          isKeyMove: true,
        },
        {
          san: "a6",
          explanation: "Black tries to hold c4 with a future ...b5.",
        },
        {
          san: "a4",
          explanation: "White stops ...b5, ensuring the c4-pawn falls.",
        },
        {
          san: "Bd7",
          explanation:
            "Black develops the bishop, planning ...Bc6 to challenge the g2-bishop.",
        },
        {
          san: "Qxc4",
          explanation:
            "White recaptures the pawn, and emerges with the better structure and the Catalan bishop still dominating the long diagonal — the opening's promise delivered.",
        },
        {
          san: "Bc6",
          explanation:
            "Black offers to trade off the dangerous g2-bishop — the standard way to ease the Catalan squeeze.",
        },
      ],
      continuationMoves: [
        {
          san: "Bg5",
          idea: "White develops with tempo, pinning the Nf6 to the queen and completing the minor pieces behind the Catalan bishop.",
        },
        {
          san: "Nbd7",
          idea: "Black develops the knight, adding a defender and taking the sting out of the pin.",
        },
        {
          san: "Nc3",
          idea: "White's last knight comes out, eyeing the d5 and e4 outposts and adding a second attacker against the Bc6 on the long diagonal.",
        },
        {
          san: "Bxf3",
          idea: "Black trades the light-squared bishops to relieve the pressure the Catalan bishop pours down the a8-h1 diagonal.",
        },
        {
          san: "Bxf3",
          idea: "White recaptures with the bishop — even after the trade, the Bf3 keeps raking the long diagonal at b7. The Catalan's signature pressure never really goes away.",
        },
      ],
      continuationIdea:
        "The Catalan's Bg2 is the most patient bishop in chess — it pressures the a8-h1 diagonal all game, targets weak pawns on c4 and a6, and generates slow but relentless pressure that's nearly impossible to neutralize. Magnus Carlsen has turned this opening into a precision weapon at the elite level.",
    },
    {
      id: "cambridge-springs",
      name: "Cambridge Springs Defence",
      difficulty: "advanced",
      description:
        "Black plays Qa5 to attack White's Nc3 diagonally and disrupt the whole setup. This tricky defence forces White to react carefully and can lead to very sharp tactical complications.",
      moves: [
        {
          san: "d4",
          explanation:
            "The Queen's Gambit starts with d4 d5 c4 e6 Nc3 Nf6 Bg5, and this line diverges when Black plays the tricky Qa5, leading to the Cambridge Springs Defence — where the queen disrupts White's entire Bg5-Nc3 setup, forces defensive reactions, and allows an early e5 central break that gives Black excellent winning chances.",
        },
        { san: "d5", explanation: "Black stakes his claim in the center." },
        { san: "c4", explanation: "The Queen's Gambit." },
        { san: "e6", explanation: "Black declines, supporting d5." },
        { san: "Nc3", explanation: "White develops and pressures d5." },
        { san: "Nf6", explanation: "Black develops and defends d5." },
        {
          san: "Bg5",
          explanation:
            "White pins the f6-knight — the Orthodox setup. But this commits the bishop away from the queenside, which Black exploits.",
        },
        {
          san: "Nbd7",
          explanation:
            "Black develops, and note: the d7-knight shields the queen's path so ...Qa5 won't drop the d5-pawn.",
        },
        {
          san: "e3",
          explanation:
            "White opens the f1-bishop — but now both the Bg5 and Nc3 sit on the c1-a5 firing line of a queen on a5.",
        },
        {
          san: "c6",
          explanation:
            "A quiet but purposeful move: it frees c7 so the queen can swing to a5 next, and supports d5. Prepare the square before you bring the piece. The setup move for the whole idea.",
          isKeyMove: true,
        },
        {
          san: "Nf3",
          explanation:
            "White develops the last knight, completing a natural setup — unaware of the coming pin.",
        },
        {
          san: "Qa5",
          explanation:
            "The Cambridge Springs! The queen pins the c3-knight to nothing... but it double-attacks: the Nc3 (defended) AND, behind the Bg5 pin, creates threats of ...Ne4 forking the bishop and knight. White's whole Bg5/Nc3 setup is suddenly loose. Hunt for the move that attacks two loosely-defended pieces at once.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Cambridge Springs plays Qa5 to attack both the knight and bishop simultaneously.",
        },
        {
          san: "Bxf6",
          explanation:
            "White resolves the tension by capturing — removing the pinned knight before ...Ne4 can fork his pieces. Sometimes you must concede the bishop pair to defuse a double attack.",
        },
        {
          san: "Nxf6",
          explanation:
            "Black recaptures, and the Nc3 is still under the queen's gaze — White must address it.",
        },
        {
          san: "Qd3",
          explanation:
            "White defends the c3-knight with the queen, untangling — but this passive square is a small concession the early ...Qa5 forced.",
          isKeyMove: true,
        },
        {
          san: "dxc4",
          explanation:
            "Black opens the position now that his pieces are coordinated, gaining a tempo on the queen.",
        },
        {
          san: "Qxc4",
          explanation: "White regains the pawn, the queen now active on c4.",
        },
        {
          san: "Bd6",
          explanation:
            "Black develops the bishop to its best square, eyeing h2, and prepares to castle — Black has comfortably equalised, the early queen sortie having done its job.",
          isKeyMove: true,
        },
      ],
      continuationMoves: [
        {
          san: "Bd3",
          idea: "White develops the bishop toward the kingside, eyeing h7 and preparing to castle.",
        },
        {
          san: "O-O",
          idea: "Black castles — the king is safe and the Cambridge Springs has equalised comfortably.",
        },
        {
          san: "O-O",
          idea: "White castles too; both sides are fully developed.",
        },
        {
          san: "Qc7",
          idea: "Black reroutes the offside queen back to c7, eyeing h2 alongside the Bd6 and supporting a future ...e5 break.",
        },
        {
          san: "e4",
          idea: "White claims central space, but it's fully balanced. The early ...Qa5 disrupted White's setup and gave Black an easy, comfortable game.",
        },
      ],
      continuationIdea:
        "The Cambridge Springs demonstrates the power of early queen activity in the QGD. Black's Qa5 creates immediate tactical threats that force White to react defensively. Once the queenside tension is resolved, Black has comfortable equality — a reliable weapon against the Orthodox QGD.",
    },
    {
      id: "nimzo-indian",
      name: "Nimzo-Indian Defence (3...Bb4)",
      difficulty: "advanced",
      description:
        "After 2.Nf3 Nf6 3.Nc3, Black plays Bb4, pinning the knight and fighting for the center strategically. The Nimzo is one of the richest and most theoretically deep openings in chess.",
      moves: [
        {
          san: "d4",
          explanation:
            "The Queen's Gambit starts with d4 c4, and this line diverges when Black plays Nf6 and then Bb4 after Nc3, leading to the Nimzo-Indian Defence — one of the richest openings in chess where Black pins the knight to control the e4 square, creating an enduring debate between the bishop pair and pawn structure that World Champions have argued about for a century.",
        },
        {
          san: "Nf6",
          explanation:
            "Black develops and fights for the e4 square right away — a hypermodern idea: control the center with pieces, not pawns.",
        },
        {
          san: "c4",
          explanation: "White grabs central space with the gambit pawn.",
        },
        {
          san: "e6",
          explanation:
            "Black opens lines for the f8-bishop, preparing ...Bb4 or ...d5.",
        },
        {
          san: "Nc3",
          explanation:
            "White develops and prepares e4, the big central break — but this knight is the only guard of e4, which Black immediately targets.",
          isKeyMove: true,
        },
        {
          san: "Bb4",
          explanation:
            "The Nimzo-Indian! Black pins the c3-knight to the king, neutralizing the defender of e4 and fighting for the center with a PIECE rather than a pawn. The implicit threat: ...Bxc3 doubling White's pawns and killing the e4 plan. Control a key square by pinning its only defender.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Nimzo plays Bb4 — pinning the Nc3 to control the e4 square.",
        },
        {
          san: "e3",
          explanation:
            "The solid Rubinstein Variation — White calmly develops, ready to recapture on c3 with a pawn if Black trades, accepting doubled pawns in return for the bishop pair.",
        },
        {
          san: "O-O",
          explanation: "Black castles to safety, keeping the central tension.",
        },
        {
          san: "Bd3",
          explanation:
            "White develops toward the kingside, aiming at h7 and preparing to castle.",
          isKeyMove: true,
        },
        {
          san: "d5",
          explanation:
            "Black challenges the center directly, the classical reaction to White's setup.",
        },
        {
          san: "Nf3",
          explanation:
            "White develops the last minor piece, supporting d4 and e5.",
        },
        {
          san: "c5",
          explanation:
            "Black hits d4 too — striking both central pawns to free his game.",
        },
        {
          san: "O-O",
          explanation:
            "White castles, ready to resolve the central tension favorably.",
        },
        {
          san: "dxc4",
          explanation:
            "Black opens the center, accepting an IQP-type structure in return for active, free piece play.",
        },
        {
          san: "Bxc4",
          explanation:
            "White recaptures, the bishop on its strong c4 diagonal.",
        },
        {
          san: "Nbd7",
          explanation: "Black develops, the knight heading for b6 or e5.",
        },
        {
          san: "Qe2",
          explanation:
            "White connects rooks and prepares the e4 break — still fighting for the center the Nimzo bishop tried to deny him.",
          isKeyMove: true,
        },
        {
          san: "a6",
          explanation:
            "Black prepares ...b5 to gain queenside space and chase the c4-bishop — typical Nimzo counterplay.",
        },
      ],
      continuationMoves: [
        {
          san: "Bb3",
          idea: "White repositions the bishop, keeping the diagonal while avoiding a7-b6 pressure.",
        },
        {
          san: "b5",
          idea: "Black expands on the queenside — typical Nimzo-Indian counterplay.",
        },
        {
          san: "e4",
          idea: "White pushes for the center, the bishop pair and extra space justify this aggressive approach.",
        },
        {
          san: "cxd4",
          idea: "Black captures — clearing the center and activating pieces.",
        },
        {
          san: "Nxd4",
          idea: "White's knight captures on d4, resolving the tension. The Nimzo-Indian is one of the most theory-rich openings in chess — the bishop pair vs. structural damage tradeoff has been analyzed by the world's best players for a century.",
        },
      ],
      continuationIdea:
        "The Nimzo-Indian's Bxc3 trade is the ultimate positional gamble: Black gives up the bishop pair to saddle White with doubled c-pawns. Whether this is good depends entirely on whether White can use the bishop pair for an attack, or Black can neutralize them and target the pawn weaknesses. World Champions from Botvinnik to Kasparov have argued about this for decades.",
    },
    {
      id: "chigorin-defense",
      name: "Chigorin Defence (2...Nc6)",
      difficulty: "advanced",
      description:
        "Black plays Nc6 instead of e6 or c6, developing a knight on a square where it blocks the c7 pawn. This dynamic and unorthodox defence gives Black immediate counterplay and rich tactical complications.",
      moves: [
        {
          san: "d4",
          explanation:
            "The Queen's Gambit starts with d4 d5 c4, and this line diverges when Black plays Nc6 instead of e6 or c6, leading to the dynamic Chigorin Defence where Black deliberately places the knight on a square that blocks the c7 pawn to generate immediate piece activity and rich tactical complications far outside normal QGD theory.",
        },
        { san: "d5", explanation: "Black stakes his claim in the center." },
        { san: "c4", explanation: "The Queen's Gambit." },
        {
          san: "Nc6",
          explanation:
            "The Chigorin! Black breaks a classical rule (don't block the c-pawn with the knight) to fight for d4 and e5 with pieces and develop with maximum speed. It's a deliberate trade of structure for activity and the initiative. Know the rules well enough to break them for a concrete reason.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Chigorin plays Nc6 — an unusual and dynamic approach to fight for the center.",
        },
        { san: "Nf3", explanation: "White develops naturally and defends d4." },
        {
          san: "Bg4",
          explanation:
            "Black pins the f3-knight, attacking the defender of d4 — the consistent follow-up: use pieces to pressure the center.",
        },
        {
          san: "cxd5",
          explanation:
            "White grabs the center pawn, forcing Black to make a structural decision.",
        },
        {
          san: "Bxf3",
          explanation:
            "Black trades the bishop for the knight to inflict doubled f-pawns — giving up the bishop pair to wreck White's structure, the Chigorin's recurring bargain. Damage the structure when you've decided to play for activity, not the long game.",
          isKeyMove: true,
        },
        {
          san: "gxf3",
          explanation:
            "White recaptures toward the center, accepting doubled f-pawns in return for the bishop pair and open g-file.",
        },
        {
          san: "Qxd5",
          explanation:
            "Black regains the pawn, centralizing the queen aggressively — activity over caution.",
        },
        {
          san: "e3",
          explanation:
            "White solidifies d4 and opens his bishop, bracing to use the two bishops.",
        },
        {
          san: "e5",
          explanation:
            "Black strikes the center at once, opening lines for his pieces before White can consolidate the bishop pair.",
        },
        {
          san: "Nc3",
          explanation:
            "White develops with tempo, hitting the centralized queen.",
        },
        {
          san: "Bb4",
          explanation:
            "Black pins the c3-knight, keeping the initiative and threatening to damage White's queenside too.",
          isKeyMove: true,
        },
        {
          san: "Bd2",
          explanation:
            "White breaks the pin and prepares to castle queenside into the open game.",
        },
        {
          san: "Bxc3",
          explanation:
            "Black doubles White's pawns again — trading the second bishop to keep White's structure ragged on both wings.",
        },
        {
          san: "Bxc3",
          explanation:
            "White recaptures, his bishops surviving but his pawns shattered — the Chigorin's bishops-vs-structure war.",
        },
        {
          san: "Nf6",
          explanation:
            "Black develops the last minor piece into a dynamically complex, roughly balanced fight — exactly the chaos the Chigorin player wanted.",
        },
      ],
      continuationMoves: [
        {
          san: "Qa4",
          idea: "White's queen swings to a4, pinning the Nc6 to the king on e8 and piling on the pressure.",
        },
        {
          san: "Qd6",
          idea: "Black's queen defends the Nc6 and creates counterplay by eyeing d4.",
        },
        {
          san: "O-O-O",
          idea: "White castles queenside — the king is safe and the rook immediately joins the attack on the d-file.",
        },
        {
          san: "O-O-O",
          idea: "Black castles queenside too — a wild double-opposite-side castling position emerges.",
        },
        {
          san: "d5",
          idea: "White's d-pawn storms forward to d5, opening the center and fighting for the initiative. The Chigorin Defence creates rich, unconventional positions that reward dynamic players who are comfortable in chaos.",
        },
      ],
      continuationIdea:
        "The Chigorin Defence creates rich, chaotic positions far outside normal QGD theory. Black sacrifices the bishop pair for active piece play and dynamic counterplay — particularly against White's doubled f-pawns. It's an excellent weapon for players who want to fight and avoid well-worn theoretical paths.",
    },
  ],
};

export default queensGambit;
