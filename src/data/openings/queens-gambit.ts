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
          explanation: "Black mirrors White, fighting for central space.",
        },
        {
          san: "c4",
          explanation:
            "The Queen's Gambit! White offers a pawn to gain central control.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Queen's Gambit always follows with 2.c4 after 1.d4 d5.",
        },
        {
          san: "dxc4",
          explanation:
            "Black accepts the gambit! White will regain it, but Black gains development time.",
        },
        {
          san: "Nf3",
          explanation:
            "White develops the knight and prepares to recapture on c4 via e3.",
          isKeyMove: true,
        },
        { san: "Nf6", explanation: "Black develops naturally." },
        {
          san: "e3",
          explanation:
            "White prepares Bxc4. The e3 pawn supports the center and opens the bishop diagonal.",
          isKeyMove: true,
        },
        {
          san: "e6",
          explanation:
            "Black solidifies the position and prepares to develop the f8 bishop.",
        },
        {
          san: "Bxc4",
          explanation:
            "White recaptures the pawn! The bishop is now powerfully placed on c4.",
          isKeyMove: true,
        },
        {
          san: "c5",
          explanation:
            "Black immediately counterattacks the center — the most active approach.",
        },
        {
          san: "O-O",
          explanation: "White castles into safety.",
          isKeyMove: true,
        },
        {
          san: "a6",
          explanation:
            "Black prepares b5 to kick the bishop — a key queenside expansion plan.",
        },
        {
          san: "Bb3",
          explanation:
            "White retreats the bishop to a safe square, keeping the diagonal.",
        },
        {
          san: "b5",
          explanation: "Black expands on the queenside as planned.",
        },
        {
          san: "a4",
          explanation:
            "White challenges the b5 pawn immediately, before Black gets a stable queenside grip.",
          isKeyMove: true,
        },
        {
          san: "b4",
          explanation:
            "Black pushes past to keep the extra queenside space rather than allow axb5.",
        },
        {
          san: "Nbd2",
          explanation:
            "White develops the knight toward c4/e4, eyeing the strong central squares.",
        },
        {
          san: "Bb7",
          explanation:
            "Black fianchettoes the bishop onto the long diagonal, eyeing White's centre.",
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
        { san: "d5", explanation: "Black controls the center." },
        { san: "c4", explanation: "The Queen's Gambit.", isKeyMove: true },
        {
          san: "e6",
          explanation:
            "Black declines the gambit! Supporting d5 with e6 keeps the center solid. This is the QGD.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the QGD Orthodox, we play e6 to support d5 rather than capturing.",
        },
        {
          san: "Nc3",
          explanation: "White develops the knight, pressing on d5.",
          isKeyMove: true,
        },
        {
          san: "Nf6",
          explanation: "Black develops the knight, building a solid position.",
        },
        {
          san: "Bg5",
          explanation:
            "White pins the Nf6 against the queen — the Orthodox variation!",
          isKeyMove: true,
        },
        {
          san: "Be7",
          explanation: "Black prepares to castle and relieves the pin safely.",
        },
        {
          san: "e3",
          explanation: "White solidifies the center and prepares Bd3.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "Black castles into safety." },
        { san: "Nf3", explanation: "White develops the last minor piece." },
        {
          san: "h6",
          explanation: "Black asks the bishop to commit — challenging the pin.",
        },
        {
          san: "Bh4",
          explanation: "White maintains the pin! The bishop retreats to h4.",
          isKeyMove: true,
        },
        {
          san: "b6",
          explanation: "Black prepares Bb7 to develop the queenside bishop.",
        },
        {
          san: "Bd3",
          explanation:
            "White develops the bishop aggressively, eyeing the h7 pawn.",
        },
        {
          san: "Bb7",
          explanation:
            "Black develops the light-squared bishop to the long diagonal.",
        },
        {
          san: "O-O",
          explanation:
            "White castles. Both sides are fully developed — the strategic battle begins.",
        },
        {
          san: "Nbd7",
          explanation:
            "Black develops the last minor piece, completing the setup.",
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
        { san: "d5", explanation: "Black controls the center." },
        { san: "c4", explanation: "The Queen's Gambit." },
        { san: "e6", explanation: "Black declines, supporting d5." },
        { san: "Nc3", explanation: "Develops the knight." },
        { san: "Nf6", explanation: "Black develops." },
        {
          san: "cxd5",
          explanation:
            "White captures on d5 — the Exchange Variation! This leads to a symmetrical structure.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Exchange Variation, we capture cxd5 rather than developing another piece.",
        },
        {
          san: "exd5",
          explanation:
            "Black recaptures with the e-pawn, creating the symmetrical pawn structure.",
        },
        {
          san: "Bg5",
          explanation: "White pins the knight and develops actively.",
          isKeyMove: true,
        },
        {
          san: "c6",
          explanation: "Black solidifies the center and prepares Bf5.",
        },
        {
          san: "e3",
          explanation: "White supports the center and prepares Bd3.",
        },
        {
          san: "Bf5",
          explanation:
            "Black activates the light-squared bishop outside the pawn chain.",
        },
        {
          san: "Bd3",
          explanation:
            "White develops the bishop to d3, eyeing the h7 pawn and preparing to trade on d3.",
          isKeyMove: true,
        },
        {
          san: "Bxd3",
          explanation:
            "Black trades the bishop to reduce White's attacking options.",
        },
        {
          san: "Qxd3",
          explanation: "White recaptures, centralising the queen.",
        },
        { san: "Nbd7", explanation: "Black develops the last minor piece." },
        {
          san: "Nf3",
          explanation: "White completes development and prepares to castle.",
        },
        { san: "Be7", explanation: "Black prepares to castle." },
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
        { san: "d5", explanation: "Black controls the center." },
        { san: "c4", explanation: "The Queen's Gambit.", isKeyMove: true },
        {
          san: "c6",
          explanation:
            "The Slav! Black supports d5 with the c-pawn, keeping the option to develop the c8 bishop.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Slav plays c6 — supporting d5 while leaving the c8-h3 diagonal open for the bishop.",
        },
        { san: "Nf3", explanation: "White develops and prepares Nc3." },
        { san: "Nf6", explanation: "Black develops and counterattacks e4." },
        {
          san: "Nc3",
          explanation: "White develops the queen's knight, pressing on d5.",
          isKeyMove: true,
        },
        {
          san: "dxc4",
          explanation:
            "Black captures! Now the c8 bishop can develop. Unlike the QGA, Black has the c6 support pawn.",
        },
        {
          san: "a4",
          explanation: "White prevents b5 from defending the c4 pawn.",
          isKeyMove: true,
        },
        {
          san: "Bf5",
          explanation:
            "The key Slav move — Black develops the c8 bishop BEFORE it gets locked in.",
          isKeyMove: true,
        },
        {
          san: "e3",
          explanation: "White prepares Bxc4 to recapture the pawn.",
        },
        {
          san: "e6",
          explanation:
            "Black solidifies and prepares to develop the f8 bishop.",
        },
        { san: "Bxc4", explanation: "White recaptures the gambit pawn." },
        {
          san: "Bb4",
          explanation: "Black pins the Nc3, applying pressure to the center.",
        },
        { san: "O-O", explanation: "White castles." },
        {
          san: "O-O",
          explanation: "Black castles. Both sides have solid development.",
        },
        {
          san: "Qe2",
          explanation: "White prepares e4 and increases central control.",
        },
        { san: "Nbd7", explanation: "Black completes development." },
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
        { san: "d5", explanation: "Black controls the center." },
        { san: "c4", explanation: "The Queen's Gambit." },
        { san: "c6", explanation: "Black prepares a Slav structure." },
        { san: "Nf3", explanation: "White develops." },
        { san: "Nf6", explanation: "Black develops." },
        { san: "Nc3", explanation: "White develops the queen's knight." },
        {
          san: "e6",
          explanation:
            "The Semi-Slav! Black plays both c6 and e6, creating a super-solid pawn structure on d5-c6-e6.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Semi-Slav, we add e6 to the Slav structure — extremely solid and flexible.",
        },
        {
          san: "e3",
          explanation:
            "White plays solidly, preparing Bd3 and aiming for a Meran setup.",
        },
        { san: "Nbd7", explanation: "Black develops, preparing to castle." },
        {
          san: "Bd3",
          explanation: "White develops the bishop actively.",
          isKeyMove: true,
        },
        {
          san: "dxc4",
          explanation: "Black captures, entering the Meran Variation.",
        },
        {
          san: "Bxc4",
          explanation: "White recaptures, keeping the bishop active.",
        },
        {
          san: "b5",
          explanation:
            "Black expands on the queenside! The Meran Variation — very sharp and double-edged.",
          isKeyMove: true,
        },
        { san: "Bd3", explanation: "White retreats the bishop." },
        { san: "Bb7", explanation: "Black develops the c8 bishop at last." },
        { san: "O-O", explanation: "White castles." },
        { san: "b4", explanation: "Black continues the queenside expansion." },
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
        { san: "d5", explanation: "Black controls the center." },
        { san: "c4", explanation: "The Queen's Gambit." },
        { san: "e6", explanation: "Black prepares to decline." },
        { san: "Nc3", explanation: "White develops." },
        {
          san: "c5",
          explanation:
            "The Tarrasch Defence! Black immediately counterattacks the center. This will lead to an IQP structure.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Tarrasch, we play c5 early to get active piece play with the IQP.",
        },
        { san: "cxd5", explanation: "White captures in the center." },
        {
          san: "exd5",
          explanation:
            "Black recaptures with the e-pawn — the Tarrasch IQP pawn structure is established.",
        },
        { san: "Nf3", explanation: "White develops." },
        { san: "Nc6", explanation: "Black develops, supporting d5." },
        {
          san: "g3",
          explanation:
            "White fianchettos — a good way to target the IQP from the long diagonal.",
          isKeyMove: true,
        },
        { san: "Nf6", explanation: "Black develops." },
        {
          san: "Bg2",
          explanation:
            "The fianchetto is complete — the bishop pressures the IQP from g2.",
        },
        { san: "Be7", explanation: "Black develops and prepares to castle." },
        { san: "O-O", explanation: "White castles." },
        { san: "O-O", explanation: "Black castles." },
        {
          san: "dxc5",
          explanation:
            "White captures the c5 pawn, leaving Black's d5 pawn isolated. The IQP gives Black active piece play but a long-term endgame weakness.",
          isKeyMove: true,
        },
        {
          san: "Bxc5",
          explanation: "Black recaptures, keeping the bishops active.",
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
        { san: "d5", explanation: "Black controls the center." },
        { san: "c4", explanation: "The Queen's Gambit." },
        { san: "e6", explanation: "Black declines." },
        { san: "Nf3", explanation: "White develops." },
        { san: "Nf6", explanation: "Black develops." },
        {
          san: "g3",
          explanation:
            "The Catalan! White begins the king's bishop fianchetto — creating a powerful long-term weapon on g2.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Catalan, we play g3 to fianchetto the king's bishop.",
        },
        { san: "Be7", explanation: "Black develops solidly." },
        {
          san: "Bg2",
          explanation:
            "The Catalan bishop is in place! It controls the long a8-h1 diagonal.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "Black castles." },
        { san: "O-O", explanation: "White castles." },
        {
          san: "dxc4",
          explanation: "Black accepts the gambit pawn, trying to hold onto c4.",
        },
        {
          san: "Qc2",
          explanation:
            "White threatens to recapture on c4 while keeping pressure.",
          isKeyMove: true,
        },
        { san: "a6", explanation: "Black prepares b5 to defend the c4 pawn." },
        { san: "a4", explanation: "White prevents b5 immediately." },
        { san: "Bd7", explanation: "Black develops the last minor piece." },
        {
          san: "Qxc4",
          explanation:
            "White recaptures the pawn. The Bg2 exerts enormous long-term pressure.",
        },
        { san: "Bc6", explanation: "Black challenges the g2 bishop." },
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
        { san: "d5", explanation: "Black controls the center." },
        { san: "c4", explanation: "The Queen's Gambit." },
        { san: "e6", explanation: "Black declines." },
        { san: "Nc3", explanation: "White develops." },
        { san: "Nf6", explanation: "Black develops." },
        {
          san: "Bg5",
          explanation: "White pins the knight — the Orthodox setup.",
        },
        { san: "Nbd7", explanation: "Black develops the knight to d7." },
        {
          san: "e3",
          explanation: "White opens the bishop's diagonal and supports d4.",
        },
        {
          san: "c6",
          explanation:
            "We free the c7 square so the queen can swing out to a5 next.",
          isKeyMove: true,
        },
        { san: "Nf3", explanation: "White develops." },
        {
          san: "Qa5",
          explanation:
            "The Cambridge Springs! Black's queen attacks the Nc3 diagonally, forcing White into difficult defensive decisions.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Cambridge Springs plays Qa5 to attack both the knight and bishop simultaneously.",
        },
        {
          san: "Bxf6",
          explanation:
            "White captures, breaking the pin while removing an attacker.",
        },
        {
          san: "Nxf6",
          explanation:
            "Black recaptures. The Nc3 is still under attack from Qa5.",
        },
        {
          san: "Qd3",
          explanation: "White defends the Nc3 with the queen.",
          isKeyMove: true,
        },
        {
          san: "dxc4",
          explanation: "Black captures the c4 pawn, opening new lines.",
        },
        { san: "Qxc4", explanation: "White recaptures." },
        {
          san: "Bd6",
          explanation:
            "We develop the bishop and prepare to castle — Black has comfortably equalised.",
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
        { san: "Nf6", explanation: "Black develops and fights for e4." },
        { san: "c4", explanation: "White expands in the center." },
        { san: "e6", explanation: "Black prepares d5 or Bb4." },
        {
          san: "Nc3",
          explanation: "White develops the knight, preparing e4.",
          isKeyMove: true,
        },
        {
          san: "Bb4",
          explanation:
            "The Nimzo-Indian! Black pins the Nc3 — fighting for the center by controlling e4 with a piece, not a pawn.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Nimzo plays Bb4 — pinning the Nc3 to control the e4 square.",
        },
        {
          san: "e3",
          explanation:
            "White solidifies the center (Rubinstein Variation) — solid and classical.",
        },
        { san: "O-O", explanation: "Black castles into safety." },
        {
          san: "Bd3",
          explanation: "White develops the bishop actively, aiming at h7.",
          isKeyMove: true,
        },
        { san: "d5", explanation: "Black challenges the center with d5." },
        { san: "Nf3", explanation: "White develops the last minor piece." },
        { san: "c5", explanation: "Black challenges the d4 pawn immediately." },
        { san: "O-O", explanation: "White castles." },
        {
          san: "dxc4",
          explanation: "Black captures, getting the IQP structure.",
        },
        { san: "Bxc4", explanation: "White recaptures, bishop goes to c4." },
        { san: "Nbd7", explanation: "Black develops the queenside knight." },
        {
          san: "Qe2",
          explanation: "White prepares e4, fighting for the center.",
          isKeyMove: true,
        },
        {
          san: "a6",
          explanation: "Black gains queenside space, preparing b5.",
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
        { san: "d5", explanation: "Black controls the center." },
        { san: "c4", explanation: "The Queen's Gambit." },
        {
          san: "Nc6",
          explanation:
            "The Chigorin Defence! Black develops the knight to c6, fighting for e4 and d4 with pieces.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Chigorin plays Nc6 — an unusual and dynamic approach to fight for the center.",
        },
        { san: "Nf3", explanation: "White develops normally." },
        {
          san: "Bg4",
          explanation:
            "Black pins the Nf3, maintaining pressure on the center.",
        },
        { san: "cxd5", explanation: "White captures in the center." },
        {
          san: "Bxf3",
          explanation:
            "Black captures! Giving up the bishop pair to create doubled pawns on White's f-file.",
          isKeyMove: true,
        },
        {
          san: "gxf3",
          explanation:
            "White recaptures, accepting the structural weakness for the bishop pair.",
        },
        {
          san: "Qxd5",
          explanation: "Black recaptures the pawn, centralising the queen.",
        },
        { san: "e3", explanation: "White supports the center." },
        {
          san: "e5",
          explanation: "Black immediately challenges White's central pawn!",
        },
        { san: "Nc3", explanation: "White develops and attacks the queen." },
        {
          san: "Bb4",
          explanation: "Black pins the Nc3 and maintains the pressure.",
          isKeyMove: true,
        },
        { san: "Bd2", explanation: "White prepares to castle queenside." },
        {
          san: "Bxc3",
          explanation: "Black gives up the bishop pair for doubled c-pawns.",
        },
        { san: "Bxc3", explanation: "White recaptures." },
        {
          san: "Nf6",
          explanation:
            "Black develops the last minor piece — the position is dynamically complex.",
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
