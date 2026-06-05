import type { Opening } from "@/types";

const ruyLopez: Opening = {
  id: "ruy-lopez",
  name: "Ruy López",
  side: "white",
  eco: "C60",
  description:
    "One of the oldest and most classical chess openings. White attacks the knight defending e5 with Bb5, applying long-term positional pressure. The Spanish Game has been favoured by World Champions for centuries.",
  tags: ["e4", "open-game", "classical", "positional"],
  lines: [
    {
      id: "exchange-variation",
      name: "Exchange Variation",
      difficulty: "beginner",
      description:
        "White captures on c6 immediately, giving Black doubled pawns in exchange for fast development and a simpler game. A great line to learn the basics of exploiting structural weaknesses.",
      moves: [
        {
          san: "e4",
          explanation: "Controls the center. The most classical opening move.",
        },
        {
          san: "e5",
          explanation:
            "Black mirrors White's pawn, fighting for equal central space.",
        },
        {
          san: "Nf3",
          explanation: "Develops the knight and attacks the e5 pawn.",
        },
        { san: "Nc6", explanation: "Defends e5 while developing the knight." },
        {
          san: "Bb5",
          explanation:
            "The Ruy López move — pinning the Nc6 against Black's king.",
          isKeyMove: true,
        },
        {
          san: "a6",
          explanation: "Black chases the bishop away to gain queenside space.",
        },
        {
          san: "Bxc6",
          explanation:
            "White captures immediately! This gives Black doubled pawns on c6 but concedes the bishop pair.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Exchange Variation, we capture on c6 rather than retreating to a4.",
        },
        {
          san: "dxc6",
          explanation:
            "Black recaptures with the d-pawn, creating doubled c-pawns and opening the d-file.",
        },
        {
          san: "O-O",
          explanation:
            "White castles quickly. Development first, exploitation later.",
          isKeyMove: true,
        },
        {
          san: "f6",
          explanation:
            "Black reinforces the e5 pawn now that the knight is gone.",
        },
        {
          san: "d4",
          explanation:
            "The central pawn break — challenging Black's e5 pawn while the structure is already weakened.",
          isKeyMove: true,
        },
        {
          san: "exd4",
          explanation: "Black captures, opening the d-file for White's rook.",
        },
      ],
      continuationMoves: [
        {
          san: "Qxd4",
          idea: "White recaptures with the queen — and immediately offers to trade it off.",
        },
        {
          san: "Qxd4",
          idea: "Black trades queens. The game enters an endgame — exactly what White wanted.",
        },
        {
          san: "Nxd4",
          idea: "White recaptures with the knight, beautifully centralised. The endgame is White's to play for: a clean 4-vs-3 kingside majority that produces a passed pawn. Black's doubled c-pawns can never make one.",
        },
      ],
      continuationIdea:
        "Here's the whole point of giving up the bishop: White trades queens and heads for an endgame. White has a clean 4-vs-3 pawn majority on the kingside that can produce a passed pawn. Black has an extra pawn on the queenside, but it's the doubled c-pawns — they can never make a passer. That permanent structural edge is what you're playing for in the Exchange.",
    },
    {
      id: "old-steinitz-defense",
      name: "Old Steinitz Defence (3...d6)",
      difficulty: "beginner",
      description:
        "Black plays d6, the oldest and most solid defence. Very easy to understand — Black simply supports e5 with a pawn. Leads to a somewhat cramped but completely solid position.",
      moves: [
        { san: "e4", explanation: "Controls the center." },
        { san: "e5", explanation: "Black fights for equal space." },
        { san: "Nf3", explanation: "Develops and attacks e5." },
        { san: "Nc6", explanation: "Defends e5." },
        {
          san: "Bb5",
          explanation: "The Ruy López — pinning the Nc6.",
          isKeyMove: true,
        },
        {
          san: "d6",
          explanation:
            "The Old Steinitz — solidly defending e5 with a pawn rather than chasing the bishop.",
          isKeyMove: true,
        },
        {
          san: "d4",
          explanation:
            "White strikes in the center immediately, taking advantage of Black's passive setup.",
        },
        {
          san: "Bd7",
          explanation:
            "Black develops the bishop to prepare O-O, though it's a somewhat passive square.",
        },
        {
          san: "Nc3",
          explanation: "White develops the queenside knight toward the center.",
        },
        { san: "Nf6", explanation: "Black develops and counterattacks e4." },
        { san: "O-O", explanation: "White castles into safety." },
        { san: "Be7", explanation: "Black prepares to castle kingside." },
        {
          san: "Re1",
          explanation: "White's rook reinforces the e4 pawn proactively.",
          isKeyMove: true,
        },
        {
          san: "exd4",
          explanation:
            "Black releases the central tension, simplifying the position.",
        },
        {
          san: "Nxd4",
          explanation: "White recaptures, maintaining a strong central knight.",
        },
        {
          san: "O-O",
          explanation:
            "Black finally castles after a somewhat slow development.",
        },
      ],
    },
    {
      id: "classical-defense",
      name: "Classical Defence (3...Bc5)",
      difficulty: "beginner",
      description:
        "Black immediately develops the bishop to c5, fighting for the center and eyeing f2. White usually replies c3 to prepare d4. A mirror image of the Italian Game that can transpose in several ways.",
      moves: [
        { san: "e4", explanation: "Controls the center." },
        { san: "e5", explanation: "Black mirrors White's central pawn." },
        { san: "Nf3", explanation: "Develops and attacks e5." },
        { san: "Nc6", explanation: "Defends e5." },
        {
          san: "Bb5",
          explanation: "The Ruy López, pinning Nc6.",
          isKeyMove: true,
        },
        {
          san: "Bc5",
          explanation:
            "The Classical Defence — Black develops actively and fights for the center, similar to the Italian.",
          isKeyMove: true,
        },
        {
          san: "c3",
          explanation:
            "White prepares the d4 push, solidifying the center and keeping the bishop active.",
        },
        { san: "Nf6", explanation: "Black develops and counterattacks e4." },
        {
          san: "O-O",
          explanation: "White castles, maintaining the initiative.",
        },
        { san: "O-O", explanation: "Black castles into safety." },
        {
          san: "d4",
          explanation:
            "The central break that White has been preparing. Black's Bc5 is now under fire.",
          isKeyMove: true,
        },
        {
          san: "Bb6",
          explanation:
            "Black retreats the bishop to a safe square where it continues to control the long diagonal.",
        },
        {
          san: "Bg5",
          explanation:
            "White pins the Nf6, preventing it from comfortably defending e5.",
        },
        {
          san: "h6",
          explanation: "Black challenges the pin, forcing White to commit.",
        },
        {
          san: "Bh4",
          explanation:
            "White maintains the pin rather than trading off the bishop pair.",
        },
        {
          san: "d6",
          explanation:
            "Black solidifies the center and prepares to free the position.",
        },
      ],
    },
    {
      id: "main-line",
      name: "Morphy Defence — Closed (Main Line)",
      difficulty: "intermediate",
      description:
        "The most theoretically rich Ruy López. Black chases the bishop with a6, and both sides castle into a complex middlegame. White builds a solid pawn center and prepares the d4 break.",
      moves: [
        {
          san: "e4",
          explanation: "Controls the center — the most classical first move.",
        },
        {
          san: "e5",
          explanation: "Black mirrors White's center. The symmetric response.",
        },
        {
          san: "Nf3",
          explanation: "Develops the knight toward the center and attacks e5.",
          isKeyMove: true,
        },
        {
          san: "Nc6",
          explanation: "Defends the e5 pawn with a natural developing move.",
        },
        {
          san: "Bb5",
          explanation:
            "The Ruy López! White pins the Nc6 — if it moves, e5 hangs.",
          isKeyMove: true,
          wrongMoveWarning:
            "Bb5 is the Ruy López move. Bc4 would be the Italian instead.",
        },
        {
          san: "a6",
          explanation:
            "The Morphy Defence — chasing the bishop and gaining queenside space.",
        },
        {
          san: "Ba4",
          explanation:
            "White retreats, maintaining the pin rather than trading on c6.",
          isKeyMove: true,
        },
        {
          san: "Nf6",
          explanation: "Black develops and counterattacks the e4 pawn.",
        },
        {
          san: "O-O",
          explanation:
            "White castles! The e4 pawn is allowed to be taken — there are hidden resources.",
          isKeyMove: true,
        },
        {
          san: "Be7",
          explanation:
            "Black prepares to castle, developing the bishop to a solid square.",
        },
        {
          san: "Re1",
          explanation:
            "White reinforces e4 proactively. The rook eyes the e-file.",
          isKeyMove: true,
        },
        {
          san: "b5",
          explanation: "Black gains queenside space, kicking the bishop again.",
        },
        {
          san: "Bb3",
          explanation:
            "The bishop retreats to b3, where it eyes f7 and supports d4.",
        },
        {
          san: "d6",
          explanation:
            "Black solidifies the center. The d6+e5 chain is solid and prepares castling.",
        },
        {
          san: "c3",
          explanation:
            "White prepares the d4 central push by supporting it with c3.",
          isKeyMove: true,
        },
        {
          san: "O-O",
          explanation:
            "Black castles, completing development. A rich middlegame begins.",
        },
      ],
    },
    {
      id: "chigorin-variation",
      name: "Chigorin Variation (9...Na5)",
      difficulty: "intermediate",
      description:
        "Black plays Na5 to exchange White's bishop on b3, then advances c5 to fight for the center. A classic strategic system that remains popular at all levels, named after Mikhail Chigorin.",
      moves: [
        { san: "e4", explanation: "Controls the center." },
        { san: "e5", explanation: "Black fights for equal space." },
        { san: "Nf3", explanation: "Develops and attacks e5." },
        { san: "Nc6", explanation: "Defends e5." },
        {
          san: "Bb5",
          explanation: "The Ruy López — the defining move of the Spanish Game.",
          isKeyMove: true,
        },
        { san: "a6", explanation: "The Morphy Defence." },
        { san: "Ba4", explanation: "White maintains the pin." },
        { san: "Nf6", explanation: "Black develops and attacks e4." },
        { san: "O-O", explanation: "White castles." },
        { san: "Be7", explanation: "Black prepares to castle." },
        { san: "Re1", explanation: "White reinforces the e4 pawn." },
        { san: "b5", explanation: "Black kicks the bishop." },
        { san: "Bb3", explanation: "Bishop retreats to b3." },
        { san: "d6", explanation: "Black solidifies the center." },
        { san: "c3", explanation: "White prepares d4." },
        { san: "O-O", explanation: "Black castles." },
        { san: "h3", explanation: "White stops Bg4 before pushing d4." },
        {
          san: "Na5",
          explanation:
            "The Chigorin! Black chases the bishop off b3 to eliminate White's powerful piece.",
          isKeyMove: true,
        },
        {
          san: "Bc2",
          explanation:
            "White retreats the bishop safely, maintaining the diagonal.",
        },
        {
          san: "c5",
          explanation: "Black fights for central space, the follow-up to Na5.",
          isKeyMove: true,
        },
        {
          san: "d4",
          explanation:
            "The central break — both sides now fight for the center.",
        },
        {
          san: "Qc7",
          explanation:
            "Black centralises the queen and prepares to recapture on d4.",
        },
      ],
    },
    {
      id: "open-spanish",
      name: "Open Spanish (5...Nxe4)",
      difficulty: "intermediate",
      description:
        "Black captures on e4, accepting a pawn but gaining active piece play. The Open Ruy López requires both sides to know deep theory — the material imbalances are temporary but the middlegame is sharp.",
      moves: [
        { san: "e4", explanation: "Controls the center." },
        { san: "e5", explanation: "Black fights for equal space." },
        { san: "Nf3", explanation: "Develops and attacks e5." },
        { san: "Nc6", explanation: "Defends e5." },
        { san: "Bb5", explanation: "The Ruy López.", isKeyMove: true },
        { san: "a6", explanation: "The Morphy Defence." },
        { san: "Ba4", explanation: "White maintains the pin." },
        { san: "Nf6", explanation: "Black develops and counterattacks e4." },
        {
          san: "O-O",
          explanation: "White castles, allowing e4 to be taken temporarily.",
        },
        {
          san: "Nxe4",
          explanation:
            "The Open Spanish! Black takes the pawn — this is perfectly sound. The d4 push will win it back.",
          isKeyMove: true,
        },
        {
          san: "d4",
          explanation:
            "White immediately challenges Black's knight and recovers the pawn with initiative.",
          isKeyMove: true,
        },
        {
          san: "b5",
          explanation:
            "Black kicks the bishop while maintaining the extra pawn.",
        },
        {
          san: "Bb3",
          explanation:
            "The bishop retreats to b3 — still active on this diagonal.",
        },
        {
          san: "d5",
          explanation:
            "Black advances with tempo, gaining space in the center.",
        },
        { san: "dxe5", explanation: "White recaptures in the center." },
        {
          san: "Be6",
          explanation: "Black develops actively, eyeing the b3 bishop.",
        },
        {
          san: "c3",
          explanation:
            "White supports the center and prepares to complete development.",
        },
        {
          san: "Bc5",
          explanation:
            "Black's bishop takes an aggressive square, targeting f2.",
        },
      ],
    },
    {
      id: "schliemann-defense",
      name: "Schliemann (Jaenisch) Gambit (3...f5)",
      difficulty: "intermediate",
      description:
        "Black plays f5 to immediately challenge White's center and create wild tactical play. This gambit sacrifices structural solidity for immediate counterplay. As White, you must know the critical refutation.",
      moves: [
        { san: "e4", explanation: "Controls the center." },
        { san: "e5", explanation: "Black fights for equal space." },
        { san: "Nf3", explanation: "Develops and attacks e5." },
        { san: "Nc6", explanation: "Defends e5." },
        { san: "Bb5", explanation: "The Ruy López.", isKeyMove: true },
        {
          san: "f5",
          explanation:
            "The Schliemann Gambit! Black immediately challenges e4 in the most aggressive way possible — creating sharp, double-edged play.",
          isKeyMove: true,
        },
        {
          san: "Nc3",
          explanation:
            "White develops the knight, not committing to capturing on f5 yet.",
        },
        {
          san: "fxe4",
          explanation:
            "Black captures on e4, opening the f-file for counterplay.",
        },
        {
          san: "Nxe4",
          explanation:
            "White recaptures with the knight, maintaining central control.",
          isKeyMove: true,
        },
        {
          san: "d5",
          explanation:
            "Black pushes d5, trying to drive back the knight and open lines.",
        },
        {
          san: "Nxe5",
          explanation:
            "White takes the e5 pawn! The position becomes very sharp.",
        },
        {
          san: "dxe4",
          explanation:
            "Black recaptures in the center, winning material temporarily.",
        },
        {
          san: "Nxc6",
          explanation:
            "White takes on c6, disrupting Black's queenside pawn structure.",
          isKeyMove: true,
        },
        {
          san: "Qd5",
          explanation:
            "Black's queen comes to d5 with tempo, attacking the c6 knight.",
        },
        {
          san: "c3",
          explanation:
            "White defends, preparing to consolidate the extra pawn.",
        },
        {
          san: "Qxc6",
          explanation:
            "Black recaptures, regaining material and leveling the position.",
        },
      ],
    },
    {
      id: "archangel-variation",
      name: "Archangel (Arkhangelsk) Variation",
      difficulty: "advanced",
      description:
        "Black develops the bishop to b7 after b5, creating pressure on e4 while maintaining solidity. A sharp and modern alternative to the main Closed lines, named after the Russian city where it was developed.",
      moves: [
        { san: "e4", explanation: "Controls the center." },
        { san: "e5", explanation: "Black fights for equal space." },
        { san: "Nf3", explanation: "Develops and attacks e5." },
        { san: "Nc6", explanation: "Defends e5." },
        { san: "Bb5", explanation: "The Ruy López.", isKeyMove: true },
        { san: "a6", explanation: "The Morphy Defence." },
        { san: "Ba4", explanation: "White maintains the pin." },
        { san: "Nf6", explanation: "Black develops and attacks e4." },
        { san: "O-O", explanation: "White castles." },
        {
          san: "b5",
          explanation:
            "Black kicks the bishop and prepares the Archangel setup.",
        },
        { san: "Bb3", explanation: "Bishop retreats to b3." },
        {
          san: "Bb7",
          explanation:
            "The Archangel! Black develops the bishop to b7, immediately pressuring e4 from the long diagonal.",
          isKeyMove: true,
        },
        {
          san: "d3",
          explanation:
            "White plays d3 instead of Re1 — a more conservative setup that keeps the pawn chain solid.",
        },
        {
          san: "Bc5",
          explanation:
            "Black's kingside bishop develops actively to c5, eyeing f2.",
        },
        { san: "c3", explanation: "White prepares d4." },
        { san: "d6", explanation: "Black solidifies the center." },
        {
          san: "Nbd2",
          explanation:
            "White develops the queenside knight, preparing Nf1-g3 maneuver.",
        },
        {
          san: "O-O",
          explanation:
            "Black castles. The complex middlegame begins with pressure on both sides.",
        },
      ],
    },
    {
      id: "breyer-variation",
      name: "Breyer Variation (9...Nb8)",
      difficulty: "advanced",
      description:
        "Black retreats the knight to b8 on move 9 to reroute it to d7, creating an ultra-flexible position. Favoured by World Champions Spassky, Karpov, and Kasparov — this is one of the deepest strategic systems in chess.",
      moves: [
        { san: "e4", explanation: "Controls the center." },
        { san: "e5", explanation: "Black fights for equal space." },
        { san: "Nf3", explanation: "Develops and attacks e5." },
        { san: "Nc6", explanation: "Defends e5." },
        { san: "Bb5", explanation: "The Ruy López.", isKeyMove: true },
        { san: "a6", explanation: "The Morphy Defence." },
        { san: "Ba4", explanation: "White maintains the pin." },
        { san: "Nf6", explanation: "Black develops." },
        { san: "O-O", explanation: "White castles." },
        { san: "Be7", explanation: "Black prepares to castle." },
        { san: "Re1", explanation: "White reinforces e4." },
        { san: "b5", explanation: "Black kicks the bishop." },
        { san: "Bb3", explanation: "Bishop to b3." },
        { san: "d6", explanation: "Black solidifies the center." },
        { san: "c3", explanation: "White prepares d4." },
        { san: "O-O", explanation: "Black castles." },
        { san: "h3", explanation: "White stops Bg4, preparing the d4 push." },
        {
          san: "Nb8",
          explanation:
            "The Breyer! The knight retreats to b8, seemingly going backwards — but it will reroute to d7 for a much better post.",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White launches the central attack." },
        {
          san: "Nbd7",
          explanation:
            "The knight completes its journey to d7, defending e5 and preparing ...c5 or ...Nb6.",
          isKeyMove: true,
        },
        { san: "Nbd2", explanation: "White develops the queenside knight." },
        {
          san: "Bb7",
          explanation:
            "Black's bishop pressures White's e4 pawn from the long diagonal — a key part of the Breyer's strategic grip.",
        },
        {
          san: "Bc2",
          explanation:
            "White repositions the bishop to c2, supporting e4 and preparing queenside play.",
        },
        {
          san: "Re8",
          explanation: "Black centralises the rook, supporting e5.",
        },
      ],
    },
    {
      id: "marshall-attack",
      name: "Marshall Attack (8...d5)",
      difficulty: "advanced",
      description:
        "Black sacrifices a pawn on move 8 to launch a powerful kingside attack. Developed by Frank Marshall in 1918, this gambit creates a lasting initiative. One of the most famous attacks in all of chess theory.",
      moves: [
        { san: "e4", explanation: "Controls the center." },
        { san: "e5", explanation: "Black fights for equal space." },
        { san: "Nf3", explanation: "Develops and attacks e5." },
        { san: "Nc6", explanation: "Defends e5." },
        { san: "Bb5", explanation: "The Ruy López.", isKeyMove: true },
        { san: "a6", explanation: "The Morphy Defence." },
        { san: "Ba4", explanation: "White maintains the pin." },
        { san: "Nf6", explanation: "Black develops." },
        { san: "O-O", explanation: "White castles." },
        { san: "Be7", explanation: "Black prepares to castle." },
        { san: "Re1", explanation: "White reinforces e4." },
        { san: "b5", explanation: "Black kicks the bishop." },
        { san: "Bb3", explanation: "Bishop to b3." },
        { san: "O-O", explanation: "Black castles." },
        { san: "c3", explanation: "White prepares d4." },
        {
          san: "d5",
          explanation:
            "The Marshall Attack! Black sacrifices a pawn to immediately open the center and create a powerful kingside attack.",
          isKeyMove: true,
          wrongMoveWarning:
            "This is the Marshall gambit — Black is sacrificing a pawn for a ferocious attack.",
        },
        {
          san: "exd5",
          explanation: "White accepts the gambit, capturing the offered pawn.",
        },
        {
          san: "Nxd5",
          explanation:
            "Black recaptures with the knight, placing it on a powerful central square.",
        },
        {
          san: "Nxe5",
          explanation: "White wins back the e5 pawn.",
          isKeyMove: true,
        },
        {
          san: "Nxe5",
          explanation:
            "Black sacrifices the knight for a devastating attack! The game becomes extremely sharp.",
        },
        {
          san: "Rxe5",
          explanation:
            "White's rook captures, but now Black's attack crashes through.",
        },
        {
          san: "Nf6",
          explanation:
            "Black repositions to f6, aiming for g4 and attacking White's king position.",
        },
      ],
    },
    {
      id: "berlin-defense",
      name: "Berlin Defence (3...Nf6)",
      difficulty: "advanced",
      description:
        "Black challenges e4 immediately with Nf6 instead of chasing the bishop. After the endgame arising from 4.O-O Nxe4 5.d4, Black has a solid but passive position. The top drawing weapon in elite chess — used by Magnus Carlsen and Vladimir Kramnik.",
      moves: [
        { san: "e4", explanation: "Controls the center." },
        { san: "e5", explanation: "Black fights for equal space." },
        { san: "Nf3", explanation: "Develops and attacks e5." },
        { san: "Nc6", explanation: "Defends e5." },
        { san: "Bb5", explanation: "The Ruy López.", isKeyMove: true },
        {
          san: "Nf6",
          explanation:
            "The Berlin Defence! Instead of a6, Black counterattacks e4. This leads to the famous Berlin Endgame.",
          isKeyMove: true,
        },
        {
          san: "O-O",
          explanation:
            "White castles and allows Nxe4 — d4 will recover the pawn with interest.",
          isKeyMove: true,
        },
        {
          san: "Nxe4",
          explanation:
            "Black takes the pawn. This is perfectly calculated — the endgame is fine for Black.",
        },
        {
          san: "d4",
          explanation:
            "White immediately recovers the pawn with central pressure.",
          isKeyMove: true,
        },
        {
          san: "Nd6",
          explanation:
            "Black must retreat the knight. The Berlin endgame begins.",
        },
        {
          san: "Bxc6",
          explanation:
            "White gives up the bishop pair to create structural damage.",
        },
        {
          san: "dxc6",
          explanation:
            "Black recaptures, accepting doubled c-pawns but getting the d-file.",
        },
        {
          san: "dxe5",
          explanation:
            "White wins the e5 pawn, transitioning to the famous Berlin Endgame.",
        },
        {
          san: "Nf5",
          explanation:
            "Black repositions the knight to f5 — an active central square in the endgame, avoiding further piece trades.",
        },
      ],
    },
  ],
};

export default ruyLopez;
