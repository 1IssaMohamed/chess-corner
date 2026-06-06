import type { Opening } from "@/types";

const italian: Opening = {
  id: "italian",
  name: "Italian Game",
  side: "white",
  eco: "C50",
  description:
    "White develops the bishop to c4, aiming at the f7 pawn and fighting for the center. One of the oldest openings in chess, the Italian can lead to sharp tactical battles or quiet positional play.",
  tags: ["e4", "open-game", "attacking", "flexible"],
  lines: [
    {
      id: "giuoco-pianissimo",
      name: "Giuoco Pianissimo (d3 System)",
      difficulty: "beginner",
      description:
        "White plays d3 instead of d4, keeping the center closed for a slow, strategic buildup. This modern system avoids early tactical battles and is easy to learn — highly recommended for beginners.",
      moves: [
        { san: "e4", explanation: "Controls the center." },
        { san: "e5", explanation: "Black mirrors White's center." },
        { san: "Nf3", explanation: "Develops and attacks e5." },
        { san: "Nc6", explanation: "Defends e5." },
        {
          san: "Bc4",
          explanation:
            "The Italian! The bishop eyes the f7 pawn and controls d5.",
          isKeyMove: true,
        },
        {
          san: "Bc5",
          explanation:
            "Black develops the bishop actively, fighting for the center.",
        },
        {
          san: "c3",
          explanation: "White prepares d4 while solidifying the center.",
        },
        { san: "Nf6", explanation: "Black develops and counterattacks e4." },
        {
          san: "d3",
          explanation:
            "The Giuoco Pianissimo — slow and solid. White builds a strong center without rushing into d4.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Pianissimo, we play d3 (not d4) to keep the position closed and strategic.",
        },
        { san: "d6", explanation: "Black solidifies the center." },
        { san: "O-O", explanation: "White castles into safety." },
        { san: "O-O", explanation: "Black castles." },
        {
          san: "Nbd2",
          explanation:
            "White develops the queenside knight, preparing the Nf1-g3 maneuver.",
        },
        {
          san: "a6",
          explanation: "Black gains queenside space and prepares ...Ba7.",
        },
        {
          san: "Bb3",
          explanation:
            "White retreats the bishop to b3, safe and still controlling d5.",
        },
        { san: "Ba7", explanation: "Black repositions the bishop to a7." },
        {
          san: "Re1",
          explanation: "White reinforces e4 and prepares central play.",
        },
        {
          san: "Re8",
          explanation: "Black centralises the rook to support e5.",
        },
      ],
      continuationMoves: [
        {
          san: "Nf1",
          idea: "The knight begins its famous reroute — Nd2 to f1, heading for g3. Don't be fooled by the retreat; this is the Pianissimo's signature plan.",
        },
        {
          san: "Be6",
          idea: "Black challenges the b3 bishop, trying to trade it off before it becomes annoying.",
        },
        {
          san: "Ng3",
          idea: "The knight arrives on g3, eyeing f5 and h5. Combined with the Bb3 on the a2–g8 diagonal, White has a ready-made kingside attack.",
        },
        {
          san: "Bxb3",
          idea: "Black trades off the bishop — but White recaptures with the a-pawn, not the queen.",
        },
        {
          san: "axb3",
          idea: "White recaptures with the pawn, opening the a-file for the rook. The queen stays free, and the a-file becomes a long-term weapon.",
        },
      ],
      continuationIdea:
        "The whole point of the slow setup: the knight reroutes Nbd2–f1–g3 to eye the f5 and h5 squares and support a future kingside expansion, while the b3 bishop sits on a great diagonal. White has a risk-free, easy-to-play position with a clear plan — exactly what you want as a beginner.",
    },
    {
      id: "hungarian-defense",
      name: "Hungarian Defence (3...Be7)",
      difficulty: "beginner",
      description:
        "Black plays Be7 instead of Bc5 or Nf6, a solid and drawish defence. The bishop on e7 is passive but safe, leading to quiet strategic positions. Great for learning to exploit passive setups.",
      moves: [
        { san: "e4", explanation: "Controls the center." },
        { san: "e5", explanation: "Black fights for equal space." },
        { san: "Nf3", explanation: "Develops and attacks e5." },
        { san: "Nc6", explanation: "Defends e5." },
        {
          san: "Bc4",
          explanation: "The Italian — bishop to c4.",
          isKeyMove: true,
        },
        {
          san: "Be7",
          explanation:
            "The Hungarian Defence — very solid. Black avoids all sharp lines at the cost of a passive bishop.",
          isKeyMove: true,
        },
        {
          san: "d4",
          explanation:
            "White immediately strikes in the center while Black is underdeveloped.",
        },
        { san: "d6", explanation: "Black solidifies the center." },
        { san: "dxe5", explanation: "White captures, opening the position." },
        { san: "dxe5", explanation: "Black recaptures, simplifying." },
        {
          san: "Qxd8+",
          explanation:
            "White trades queens — the endgame favours White because Black's pieces are passive.",
          isKeyMove: true,
        },
        {
          san: "Bxd8",
          explanation: "Black recaptures, entering a slightly worse endgame.",
        },
        {
          san: "Nc3",
          explanation: "White develops centrally and prepares Bg5.",
        },
        {
          san: "Nf6",
          explanation: "Black finally develops the kingside knight.",
        },
        {
          san: "Bg5",
          explanation:
            "White pins the Nf6, highlighting Black's passive pieces.",
        },
        {
          san: "Be6",
          explanation:
            "Black trades off the active Bc4 to relieve the pressure.",
        },
        { san: "Bxe6", explanation: "White accepts the trade." },
        {
          san: "fxe6",
          explanation:
            "Black recaptures with the f-pawn, but the doubled e-pawns are a weakness.",
        },
      ],
      continuationMoves: [
        {
          san: "O-O",
          idea: "White castles and prepares to exploit Black's passive pieces. Development and activity beat passive defense.",
        },
        {
          san: "Ke7",
          idea: "Black's king steps toward the center to connect the rooks — but it's slightly awkward.",
        },
        {
          san: "Rfe1",
          idea: "White's f-rook moves to e1, targeting the weak e6 pawn and keeping pressure on the e-file.",
        },
        {
          san: "Kd6",
          idea: "Black's king marches to d6 — unusual, but necessary to support the e6 pawn.",
        },
        {
          san: "Nd5",
          idea: "White's knight jumps to the dominant d5 outpost. The Hungarian Defence illustrates the danger of passive play — small advantages accumulate into a clearly worse endgame with no counterplay in sight.",
        },
      ],
      continuationIdea:
        "The Hungarian Defence gives White a free hand. Black's pieces are passive, the e6 pawn is a target, and the king is slightly awkward. White simply develops normally and puts pressure on Black's weaknesses. It's a great opening to practice against — beating passive setups is a fundamental skill.",
    },
    {
      id: "giuoco-piano",
      name: "Giuoco Piano (d4 Open Center)",
      difficulty: "intermediate",
      description:
        "White plays d4 early, leading to sharp tactical battles after the pawn exchanges. The Open Italian creates dynamic positions where both sides fight for the initiative from the very first moves.",
      moves: [
        { san: "e4", explanation: "Controls the center." },
        { san: "e5", explanation: "Black fights for equal space." },
        { san: "Nf3", explanation: "Develops and attacks e5." },
        { san: "Nc6", explanation: "Defends e5." },
        { san: "Bc4", explanation: "The Italian Game.", isKeyMove: true },
        { san: "Bc5", explanation: "Black develops symmetrically." },
        { san: "c3", explanation: "White prepares d4." },
        { san: "Nf6", explanation: "Black develops and counterattacks e4." },
        {
          san: "d4",
          explanation:
            "The Giuoco Piano! White strikes the center, creating immediate tension.",
          isKeyMove: true,
        },
        { san: "exd4", explanation: "Black captures in the center." },
        {
          san: "cxd4",
          explanation:
            "White recaptures, opening the c-file. The Bc5 is now attacked.",
        },
        {
          san: "Bb4+",
          explanation:
            "Black gives check, gaining time and activating the bishop.",
        },
        {
          san: "Nc3",
          explanation:
            "White blocks with the knight, developing at the same time.",
          isKeyMove: true,
        },
        {
          san: "Nxe4",
          explanation:
            "Black takes the e4 pawn! The position becomes very sharp.",
        },
        {
          san: "O-O",
          explanation:
            "White castles rather than trying to win the piece back immediately — development first.",
          isKeyMove: true,
        },
        {
          san: "Bxc3",
          explanation:
            "Black captures the c3 knight, winning material but ceding the bishop pair.",
        },
        {
          san: "bxc3",
          explanation: "White recaptures, opening the b-file for the rook.",
        },
        {
          san: "d5",
          explanation:
            "White pushes d5 to drive back Black's pieces and open more lines.",
        },
      ],
      continuationMoves: [
        {
          san: "Bb3",
          idea: "White retreats the bishop to b3, safe and still controlling d5.",
        },
        {
          san: "O-O",
          idea: "Black castles into safety before White's development advantage becomes overwhelming.",
        },
        {
          san: "Re1",
          idea: "White centralises the rook, reinforcing e4 and preparing central pressure.",
        },
        {
          san: "Bg4",
          idea: "Black pins the Nf3, trying to relieve the pressure on the kingside.",
        },
        {
          san: "Bxd5",
          idea: "White recaptures the pawn with the bishop. The Open Italian consistently gives White active piece play — the bishop pair and central control are long-term assets.",
        },
      ],
      continuationIdea:
        "The Giuoco Piano's d4 push creates open lines and active piece play for White. The bishop pair and strong center give a lasting structural advantage. Black has to defend precisely and find counterplay — not easy with White's pieces already well-placed.",
    },
    {
      id: "evans-gambit",
      name: "Evans Gambit (4.b4)",
      difficulty: "intermediate",
      description:
        "White sacrifices the b4 pawn to rapidly develop and attack. This 19th-century gambit was played by World Champions and remains theoretically respectable and practically very dangerous.",
      moves: [
        { san: "e4", explanation: "Controls the center." },
        { san: "e5", explanation: "Black fights for equal space." },
        { san: "Nf3", explanation: "Develops and attacks e5." },
        { san: "Nc6", explanation: "Defends e5." },
        { san: "Bc4", explanation: "The Italian." },
        { san: "Bc5", explanation: "Black develops the bishop actively." },
        {
          san: "b4",
          explanation:
            "The Evans Gambit! White sacrifices a pawn to gain rapid development and open lines.",
          isKeyMove: true,
          wrongMoveWarning:
            "This is the Evans Gambit — we offer b4 to gain a powerful development advantage.",
        },
        {
          san: "Bxb4",
          explanation:
            "Black accepts the gambit, winning a pawn but falling behind in development.",
        },
        {
          san: "c3",
          explanation: "White attacks the bishop and prepares d4.",
          isKeyMove: true,
        },
        { san: "Ba5", explanation: "The bishop retreats to a5." },
        {
          san: "d4",
          explanation:
            "White opens the center! The development advantage becomes critical.",
        },
        { san: "exd4", explanation: "Black captures to relieve the pressure." },
        {
          san: "O-O",
          explanation:
            "White castles — the attack begins and Black still needs to develop.",
          isKeyMove: true,
        },
        {
          san: "Nge7",
          explanation: "Black tries to develop and cover the kingside.",
        },
        {
          san: "cxd4",
          explanation: "White recaptures, maintaining the strong central pawn.",
        },
        { san: "d5", explanation: "Black pushes to contest the center." },
        {
          san: "exd5",
          explanation:
            "White captures, opening even more lines for the attack.",
        },
        { san: "Nxd5", explanation: "Black recaptures with the knight." },
      ],
      continuationMoves: [
        {
          san: "Bb3",
          idea: "White retreats the bishop to safety before the central complications unfold.",
        },
        {
          san: "O-O",
          idea: "Black castles — getting the king to safety while material is still flying.",
        },
        {
          san: "Bxd5",
          idea: "White captures the centrally placed knight, gaining back the piece.",
        },
        {
          san: "Qxd5",
          idea: "Black recaptures with the queen — centrally placed but somewhat exposed.",
        },
        {
          san: "Nc3",
          idea: "White develops and attacks the queen. The Evans Gambit's development lead is the point — Black can't castle efficiently while White's pieces all coordinate instantly. This is 19th-century attacking chess at its finest.",
        },
      ],
      continuationIdea:
        "The Evans Gambit gives White a monstrous development lead and attacking chances that never stop. Black scrambles to return the pawn and stabilize, but White's pieces are already optimally placed. Morphy, Kasparov, and countless attacking players have wielded this gambit for 200 years — the practical problems it creates are just too difficult to solve over the board.",
    },
    {
      id: "scotch-gambit",
      name: "Scotch Gambit (via Italian)",
      difficulty: "intermediate",
      description:
        "White plays d4 in the Italian setup, often transposing into Scotch Gambit territory if Black captures. This accelerated central attack leads to open, tactical positions with active piece play for both sides.",
      moves: [
        { san: "e4", explanation: "Controls the center." },
        { san: "e5", explanation: "Black fights for equal space." },
        { san: "Nf3", explanation: "Develops and attacks e5." },
        { san: "Nc6", explanation: "Defends e5." },
        {
          san: "Bc4",
          explanation: "The Italian — bishop to c4.",
          isKeyMove: true,
        },
        { san: "Nf6", explanation: "Black develops and counterattacks e4." },
        {
          san: "d4",
          explanation: "White immediately strikes in the center.",
          isKeyMove: true,
        },
        {
          san: "exd4",
          explanation: "Black captures the pawn, accepting the challenge.",
        },
        {
          san: "e5",
          explanation:
            "White advances e5, driving back the Nf6 and keeping the initiative.",
        },
        { san: "d5", explanation: "Black fights back in the center." },
        {
          san: "Bb5",
          explanation:
            "White pins the Nc6 — a Ruy López-like move appearing in an Italian game.",
        },
        {
          san: "Ne4",
          explanation:
            "Black's knight escapes the e5 pawn attack, centralising to the strong e4 square.",
        },
        {
          san: "Nxd4",
          explanation: "White recaptures the pawn in the center.",
        },
        { san: "Bd7", explanation: "Black develops and plans to castle." },
        {
          san: "Bxc6",
          explanation: "White trades, disrupting Black's queenside structure.",
        },
        {
          san: "bxc6",
          explanation:
            "Black recaptures, accepting doubled pawns for the bishop pair.",
        },
        { san: "O-O", explanation: "White castles." },
        { san: "Be7", explanation: "Black develops and prepares to castle." },
      ],
      continuationMoves: [
        {
          san: "Nb5",
          idea: "White's knight leaps to b5, threatening to invade on c7 or d6.",
        },
        {
          san: "cxb5",
          idea: "Black captures the knight — getting a material advantage but creating a passed pawn.",
        },
        {
          san: "c3",
          idea: "White supports d4 and prepares to activate the bishop pair.",
        },
        {
          san: "Nc5",
          idea: "Black centralises the knight to an active post, threatening d3.",
        },
        {
          san: "b4",
          idea: "White kicks the knight and gains queenside space. The Scotch Gambit creates imbalanced positions — White has compensation in space and bishop pair against Black's extra material.",
        },
      ],
      continuationIdea:
        "The Scotch Gambit via the Italian creates open lines and targets Black's doubled c-pawns. White has easy development and the bishop pair; Black has to prove the structural damage isn't too costly. A great practical weapon — White plays naturally and Black must find accurate defensive moves.",
    },
    {
      id: "four-knights-italian",
      name: "Four Knights — Italian",
      difficulty: "intermediate",
      description:
        "Both sides develop all four knights, creating a symmetrical but dynamic position. White uses the c4 bishop to create attacking chances while Black looks for counterplay in the center.",
      moves: [
        { san: "e4", explanation: "Controls the center." },
        { san: "e5", explanation: "Black fights for equal space." },
        { san: "Nf3", explanation: "Develops and attacks e5." },
        { san: "Nc6", explanation: "Defends e5." },
        { san: "Bc4", explanation: "The Italian.", isKeyMove: true },
        { san: "Bc5", explanation: "Black develops symmetrically." },
        { san: "Nc3", explanation: "White develops the queenside knight." },
        {
          san: "Nf6",
          explanation: "Black develops — all four knights are now out!",
        },
        {
          san: "d3",
          explanation: "White plays solid — supporting e4 and preparing Bg5.",
        },
        { san: "d6", explanation: "Black solidifies the center." },
        { san: "O-O", explanation: "White castles." },
        { san: "O-O", explanation: "Black castles." },
        {
          san: "Bg5",
          explanation: "White pins the Nf6, increasing pressure.",
          isKeyMove: true,
        },
        { san: "h6", explanation: "Black challenges the pin." },
        {
          san: "Bh4",
          explanation: "White maintains the pin — the bishop stays active.",
        },
        {
          san: "g5",
          explanation:
            "Black chases the bishop, gaining space but weakening the kingside.",
        },
        {
          san: "Bg3",
          explanation:
            "White retreats to g3 — the bishop is safe and still useful.",
        },
        { san: "Nh5", explanation: "Black's knight attacks the g3 bishop." },
      ],
      continuationMoves: [
        {
          san: "Na4",
          idea: "White's knight attacks the Bc5, forcing it to move before it becomes annoying on the long diagonal.",
        },
        {
          san: "Bb6",
          idea: "Black retreats the bishop to b6, keeping it active.",
        },
        {
          san: "Nxb6",
          idea: "White captures the bishop on b6, eliminating a potential problem piece.",
        },
        {
          san: "axb6",
          idea: "Black recaptures with the a-pawn, opening the a-file for counterplay.",
        },
        {
          san: "d4",
          idea: "White strikes in the center. The Four Knights gives White a clear plan — central pawns, pressure on the kingside, and piece activity that Black struggles to match.",
        },
      ],
      continuationIdea:
        "The Four Knights Italian rewards patient positional play. After the knight trade on g3, White gains weakened kingside pawns to target and a powerful d5 outpost. The plan is simple: Nd5, c3-d4, and gradual queenside expansion while Black struggles to coordinate with the compromised king structure.",
    },
    {
      id: "two-knights",
      name: "Two Knights Defence (3...Nf6)",
      difficulty: "intermediate",
      description:
        "Black plays Nf6 instead of Bc5, immediately counterattacking e4. This leads to sharp tactical positions, especially after the aggressive 4.Ng5 threatening f7.",
      moves: [
        { san: "e4", explanation: "Controls the center." },
        { san: "e5", explanation: "Black fights for equal space." },
        { san: "Nf3", explanation: "Develops and attacks e5." },
        { san: "Nc6", explanation: "Defends e5." },
        { san: "Bc4", explanation: "The Italian." },
        {
          san: "Nf6",
          explanation:
            "The Two Knights Defence! Black counterattacks e4 immediately.",
          isKeyMove: true,
        },
        {
          san: "Ng5",
          explanation:
            "White attacks f7 — threatening Nxf7, winning the exchange.",
          isKeyMove: true,
          wrongMoveWarning:
            "After Nf6, White plays Ng5 to threaten f7. This is the critical attacking line.",
        },
        {
          san: "d5",
          explanation:
            "The only good defence — Black counter-sacrifices for time and counterplay.",
        },
        {
          san: "exd5",
          explanation: "White captures, maintaining the attack on f7.",
        },
        {
          san: "Na5",
          explanation:
            "Black attacks Bc4, forcing it to move and gaining time.",
        },
        { san: "Bb5+", explanation: "White gives check to gain a tempo." },
        {
          san: "c6",
          explanation: "Black blocks the check and chases the bishop.",
        },
        { san: "dxc6", explanation: "White captures, maintaining a pawn." },
        {
          san: "bxc6",
          explanation: "Black recaptures. The Ng5 must now retreat.",
        },
        {
          san: "Be2",
          explanation: "White retreats the bishop, staying out of trouble.",
        },
        { san: "h6", explanation: "Black kicks the knight back." },
        {
          san: "Nf3",
          explanation:
            "The knight retreats. Black has active play as compensation for the pawn.",
        },
        {
          san: "e4",
          explanation:
            "Black's pawn advances, and the position is dynamically balanced.",
        },
      ],
      continuationMoves: [
        {
          san: "d4",
          idea: "White pushes d4, fighting back in the center and opening lines for the bishops.",
        },
        {
          san: "Bc5",
          idea: "Black develops actively to c5, targeting f2.",
        },
        {
          san: "Bg5",
          idea: "White pins the Nf6, adding pressure and making it harder for Black to hold the e4 pawn.",
        },
        {
          san: "O-O",
          idea: "Black castles into safety before the complications intensify.",
        },
        {
          san: "Nfd2",
          idea: "White's f3-knight attacks the e4 pawn. The Two Knights leads to rich, tactical positions — Black has the compensation of active pieces and central pawns, but White's development and bishop pair are long-term assets.",
        },
      ],
      continuationIdea:
        "After the Two Knights sideline, Black's active pieces compensate for the pawn deficit — but only temporarily. White's plan is to consolidate with d4, develop the bishop pair, and convert the extra pawn in a technical endgame. Black must generate enough activity before White's structural advantages solidify.",
    },
    {
      id: "fried-liver-attack",
      name: "Fried Liver Attack (Nxf7)",
      difficulty: "advanced",
      description:
        "White sacrifices the knight on f7, exposing Black's king for a ferocious attack. The king gets chased across the board. Not objectively best but extremely dangerous in practice.",
      moves: [
        { san: "e4", explanation: "Controls the center." },
        { san: "e5", explanation: "Black fights for equal space." },
        { san: "Nf3", explanation: "Develops and attacks e5." },
        { san: "Nc6", explanation: "Defends e5." },
        { san: "Bc4", explanation: "The Italian." },
        { san: "Nf6", explanation: "The Two Knights Defence." },
        {
          san: "Ng5",
          explanation: "White threatens Nxf7 — the setup for the Fried Liver.",
          isKeyMove: true,
        },
        {
          san: "d5",
          explanation: "Black's best defence — counterattacking in the center.",
        },
        { san: "exd5", explanation: "White captures." },
        {
          san: "Nxd5",
          explanation: "Black captures with the knight, attacking the Bc4.",
        },
        {
          san: "Nxf7",
          explanation:
            "The Fried Liver Attack! White sacrifices the knight on f7, forcing the Black king to move.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Fried Liver sacrifices the knight on f7 — Black's king is dragged into the open.",
        },
        {
          san: "Kxf7",
          explanation:
            "Black must take — the king is now exposed in the center.",
        },
        {
          san: "Qf3+",
          explanation:
            "White gives check, forcing the king further into the open.",
        },
        {
          san: "Ke6",
          explanation:
            "Black's king steps to e6 — the most active retreat, fighting back in the center.",
        },
        {
          san: "Nc3",
          explanation: "White develops with tempo, attacking the Nd5.",
        },
        {
          san: "Ncb4",
          explanation:
            "Black threatens the queen while attacking c2 — the best defence available.",
        },
        {
          san: "O-O",
          explanation: "White castles, adding the rook to the attack.",
        },
        { san: "c6", explanation: "Black fights back, trying to consolidate." },
      ],
      continuationMoves: [
        {
          san: "d4",
          idea: "White opens the center while Black's king is still exposed — every open line is a weapon.",
        },
        {
          san: "Nxc2",
          idea: "Black forks the queen and rook — a desperate attempt to complicate things.",
        },
        {
          san: "Qf7+",
          idea: "White gives check — the queen crashes to f7, attacking the exposed king on e6.",
        },
        {
          san: "Kd6",
          idea: "Black's king flees to d6 — but there is nowhere safe. Every move keeps the king in the open.",
        },
        {
          san: "Qxg7",
          idea: "White wins another pawn and keeps attacking. The Fried Liver Attack is the ultimate example of opening theory as a weapon — memorizing White's attacking moves wins games even against players rated higher.",
        },
      ],
      continuationIdea:
        "The Fried Liver creates a mating attack that practically plays itself. Black's king is dragged to e6, every White piece joins the attack, and Black has to find exact defensive moves while managing forks, checks, and pins simultaneously. Not theoretically sound, but extremely dangerous and fun to play.",
    },
    {
      id: "traxler-counterattack",
      name: "Traxler Counterattack (4...Bc5)",
      difficulty: "advanced",
      description:
        "Black ignores the Ng5 threat to f7 and counterattacks with Bc5, leading to incredibly wild positions where both kings are exposed. Memorising the key variations is essential.",
      moves: [
        { san: "e4", explanation: "Controls the center." },
        { san: "e5", explanation: "Black fights for equal space." },
        { san: "Nf3", explanation: "Develops and attacks e5." },
        { san: "Nc6", explanation: "Defends e5." },
        { san: "Bc4", explanation: "The Italian." },
        { san: "Nf6", explanation: "The Two Knights Defence." },
        { san: "Ng5", explanation: "White threatens Nxf7.", isKeyMove: true },
        {
          san: "Bc5",
          explanation:
            "The Traxler Counterattack! Black ignores the threat and sacrifices a bishop — one of the wildest moves in chess.",
          isKeyMove: true,
        },
        { san: "Nxf7", explanation: "White captures on f7, winning material." },
        {
          san: "Bxf2+",
          explanation:
            "Black sacrifices the bishop with check! White's king is dragged into the open.",
          isKeyMove: true,
        },
        { san: "Kxf2", explanation: "White must take — the king leaves e1." },
        {
          san: "Nxe4+",
          explanation:
            "Black gives check with the knight, capturing the e4 pawn.",
        },
        {
          san: "Kg1",
          explanation: "White's king retreats to the only square.",
        },
        {
          san: "Qh4",
          explanation:
            "Black's queen comes to h4 with multiple threats including Qxf2#.",
        },
        { san: "g3", explanation: "White tries to block the queen." },
        {
          san: "Nxg3",
          explanation: "Black takes on g3 with the knight from e4.",
        },
        { san: "hxg3", explanation: "White captures back." },
        {
          san: "Qxg3+",
          explanation: "Black checks on g3 — the king remains in danger.",
        },
        { san: "Kf1", explanation: "White's king tries to escape." },
        {
          san: "Rf8",
          explanation:
            "Black adds the rook to the attack — the position remains extremely wild.",
        },
      ],
      continuationMoves: [
        {
          san: "Ke2",
          idea: "White's king steps to e2 — forced to march into the center to escape the attack.",
        },
        {
          san: "Rxf7",
          idea: "Black's rook captures the White knight on f7 — regaining material while increasing the attack.",
        },
        {
          san: "Bxf7+",
          idea: "White captures the rook with check — the bishop crashes through and the Black king is again in check.",
        },
        {
          san: "Ke7",
          idea: "Black's king flees to e7 — the only square to escape the bishop check.",
        },
        {
          san: "d4",
          idea: "White strikes in the center, opening lines. The Traxler is one of the wildest openings in chess — both kings are exposed, material is unbalanced, and tiny inaccuracies decide the game instantly.",
        },
      ],
      continuationIdea:
        "The Traxler Counterattack is pure tactical chaos. Both kings are exposed, both players are down material, and the position defies normal evaluation. It's one of the most fun and terrifying openings to play — ideal for testing tactical vision and catching unprepared opponents off guard.",
    },
  ],
};

export default italian;
