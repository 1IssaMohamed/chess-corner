import type { Opening } from "@/types";

const caroKann: Opening = {
  id: "caro-kann",
  name: "Caro-Kann Defence",
  side: "black",
  eco: "B10",
  description:
    "A solid and reliable defence against 1.e4. Black plays c6 followed by d5, fighting for the center without blocking the c8 bishop. The Caro-Kann is famously solid — Black avoids weaknesses common in other defences.",
  tags: ["e4", "solid", "positional", "beginner-friendly"],
  lines: [
    {
      id: "advance",
      name: "Advance Variation (3.e5 Bf5)",
      difficulty: "beginner",
      description:
        "White advances e5 to gain space. We immediately develop the bishop to f5 outside the pawn chain — the key advantage of the Caro-Kann over the French Defence. Then we fight back with c5.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Caro-Kann Defence — 1...c6 followed by 2...d5 — is chess's most structurally sound response to 1.e4, building a solid center while keeping the c8 bishop free to develop before the pawn chain closes. Unlike the French Defence where the light-squared bishop is permanently buried behind the pawns, the Caro-Kann's defining advantage is that Bf5 develops outside the chain immediately — solving the biggest structural problem of defending against e4. In the Advance Variation, White grabs space with e5 but Black counterattacks immediately with c5, refusing to be passive, and the resulting plan is instructive: Rc8 occupies the open c-file, Ng6 targets the overextended e5 pawn, and Black achieves comfortable equality with zero structural weaknesses. The Caro-Kann is the ideal opening for players who want genuine solidity without the French's passivity.",
        },
        {
          san: "c6",
          explanation:
            "The Caro-Kann! We prepare d5 while supporting it with c6. Unlike the French, the c8 bishop won't be locked in.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Caro-Kann starts with 1...c6 — preparing d5 with pawn support.",
        },
        { san: "d4", explanation: "White builds a strong center." },
        {
          san: "d5",
          explanation:
            "We challenge the center! The c6 pawn supports d5 — this is the Caro-Kann idea.",
          isKeyMove: true,
        },
        {
          san: "e5",
          explanation:
            "The Advance Variation! White claims space but overextends slightly.",
        },
        {
          san: "Bf5",
          explanation:
            "We immediately develop the bishop outside the pawn chain! This is the key Caro-Kann advantage — our bishop is free.",
          isKeyMove: true,
          wrongMoveWarning:
            "After e5, we ALWAYS play Bf5 immediately — this is the whole point of the Caro-Kann!",
        },
        {
          san: "Nf3",
          explanation: "White develops and prepares to support the e5 pawn.",
        },
        {
          san: "e6",
          explanation:
            "We solidify the center pawn chain and prepare to develop the f8 bishop.",
          isKeyMove: true,
        },
        {
          san: "Be2",
          explanation: "White develops the bishop, preparing to castle.",
        },
        {
          san: "c5",
          explanation:
            "The critical counterattack! We fight back against White's d4 pawn — this is the standard Caro-Kann plan.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles." },
        {
          san: "Nc6",
          explanation:
            "We develop the queen's knight — Black is now fully mobilised and ready to fight.",
          isKeyMove: true,
        },
        { san: "c3", explanation: "White supports d4." },
        {
          san: "Qb6",
          explanation:
            "We attack b2 and d4 simultaneously — an annoying double threat.",
        },
        { san: "Nbd2", explanation: "White supports d4 with the knight." },
        {
          san: "cxd4",
          explanation: "We capture in the center, creating an open c-file.",
        },
        { san: "cxd4", explanation: "White recaptures." },
        {
          san: "Nge7",
          explanation:
            "We develop the kingside knight — it will go to f5 or g6.",
        },
      ],
      continuationMoves: [
        {
          san: "Nb3",
          idea: "White's knight retreats — it was attacked by our c5 pawn and has to move. But it stays near the centre, watching d4.",
        },
        {
          san: "Rc8",
          idea: "We immediately occupy the open c-file with the rook. This is the point of the whole setup — the c-file is ours.",
        },
        {
          san: "Re1",
          idea: "White centralises the rook, reinforcing the e5 pawn that we're about to target.",
        },
        {
          san: "Ng6",
          idea: "The knight heads to g6, directly hitting the e5 pawn. White's advanced pawn is now a target, not an asset. This is the Caro-Kann at its most instructive: we didn't fight the center on move one — we targeted it after our pieces were ready.",
        },
      ],
      continuationIdea:
        "Compare this to the French Defence, where Black's light-squared bishop is buried behind the pawns for the whole game. Here it's already active on f5, outside the chain. That's the entire reason to play the Caro-Kann. Black's plan is easy and pleasant: occupy the open c-file with ...Rc8, hit the e5 pawn with ...Ng6, and pile pressure on White's slightly overextended d4/e5 centre. Black gets a comfortable, low-risk game with a clear target.",
    },
    {
      id: "classical",
      name: "Classical Variation (4...Bf5)",
      difficulty: "beginner",
      description:
        "Black captures on e4 and develops the bishop to f5 outside the pawn chain. This leads to solid, strategic positions where Black enjoys comfortable development and the bishop pair.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Caro-Kann starts with e4 c6 d4 d5, and this line diverges when Black plays dxe4 and then Bf5 — the Classical Variation — leading to the defining Caro-Kann structure where the c8 bishop develops outside the pawn chain with complete freedom, directly solving the French Defence problem and giving Black a comfortable, weakness-free position from the very first moves.",
        },
        {
          san: "c6",
          explanation: "The Caro-Kann! We prepare d5.",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White builds a strong center." },
        {
          san: "d5",
          explanation: "We challenge the center! c6 supports d5.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White defends e4 and develops." },
        {
          san: "dxe4",
          explanation:
            "We capture! This forces White to recapture and allows the c8 bishop to develop freely.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Classical, we capture dxe4 to activate the c8 bishop to f5.",
        },
        {
          san: "Nxe4",
          explanation:
            "White recaptures — the e4 square is occupied by a strong knight.",
        },
        {
          san: "Bf5",
          explanation:
            "The key Caro-Kann move! The bishop develops OUTSIDE the pawn chain before the center closes. This is the main advantage over the French.",
          isKeyMove: true,
        },
        { san: "Ng3", explanation: "White chases the bishop to g6." },
        {
          san: "Bg6",
          explanation:
            "The bishop retreats to g6. It remains active, supporting the kingside.",
          isKeyMove: true,
        },
        { san: "h4", explanation: "White immediately attacks the bishop!" },
        {
          san: "h6",
          explanation:
            "We prevent h5 from trapping the bishop. Without h6, White would play h5-Bh7 and trap our bishop.",
          isKeyMove: true,
        },
        { san: "Nf3", explanation: "White develops the second knight." },
        {
          san: "Nd7",
          explanation:
            "We develop the knight toward the center — it can go to f6, b6, or e5.",
          isKeyMove: true,
        },
        {
          san: "Bd3",
          explanation:
            "White develops aggressively — the bishop eyes the h7 pawn.",
        },
        {
          san: "Bxd3",
          explanation:
            "We trade the bishops — removing White's attacking piece.",
          isKeyMove: true,
        },
        { san: "Qxd3", explanation: "White recaptures." },
        {
          san: "Ngf6",
          explanation:
            "We develop the kingside knight. Black has completed solid development with the bishop pair gone but an easy game.",
        },
      ],
      continuationMoves: [
        {
          san: "O-O",
          idea: "White castles — the king is safe and the position is ready to sharpen.",
        },
        {
          san: "Ne5",
          idea: "We centralise the knight to e5 — a powerful outpost that eyes c4 and d3.",
        },
        {
          san: "Ne4",
          idea: "White brings a knight to e4, challenging our Ne5.",
        },
        {
          san: "Ned7",
          idea: "We retreat the knight to d7 — it will come back to c5 or e5 when the time is right.",
        },
        {
          san: "c3",
          idea: "White supports d4 solidly. The Classical Caro-Kann is perfect for players who want reliability over sharpness — no weaknesses, easy development, and clear plans.",
        },
      ],
      continuationIdea:
        "The Classical Caro-Kann gives Black a solid, harmonious position. After trading the g6 bishop for White's d3 bishop, Black has no weaknesses and easy development. The c5 counterattack in the center keeps the position alive and prevents White from simply building a big center without resistance.",
    },
    {
      id: "exchange",
      name: "Exchange Variation (3.exd5 cxd5)",
      difficulty: "beginner",
      description:
        "White exchanges on d5, leading to a symmetrical position. This is one of the simplest lines for both sides. White aims for the minority attack while Black has easy, comfortable development.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Caro-Kann starts with e4 c6 d4 d5, and this line diverges when White plays exd5 early — the Exchange Variation — leading to a fully symmetrical pawn structure with no weaknesses where Black has easy development and the minority attack (b4-b5) is White's only plan, while Black counterattacks with c5 and comfortable equality.",
        },
        {
          san: "c6",
          explanation: "The Caro-Kann!",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White builds the center." },
        {
          san: "d5",
          explanation: "We challenge the center.",
          isKeyMove: true,
        },
        {
          san: "exd5",
          explanation:
            "White captures — the Exchange Variation. No pawn majority, just symmetry.",
        },
        {
          san: "cxd5",
          explanation:
            "We recapture with the c-pawn, keeping the d5 pawn firmly in place.",
          isKeyMove: true,
          wrongMoveWarning:
            "We recapture cxd5 — keeping a solid, symmetric pawn structure.",
        },
        { san: "Bd3", explanation: "White develops the bishop aggressively." },
        {
          san: "Nc6",
          explanation: "We develop the knight, fighting for the center.",
          isKeyMove: true,
        },
        { san: "c3", explanation: "White supports d4." },
        {
          san: "Nf6",
          explanation:
            "We develop the kingside knight — development is easy in the Exchange Caro-Kann.",
          isKeyMove: true,
        },
        { san: "Bf4", explanation: "White develops the c1 bishop." },
        {
          san: "Bg4",
          explanation:
            "We develop the bishop actively — it will pin the knight the moment White plays Nf3. Black fights for the initiative.",
          isKeyMove: true,
        },
        { san: "Nf3", explanation: "White develops." },
        {
          san: "e6",
          explanation: "We solidify and prepare to develop the f8 bishop.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles." },
        {
          san: "Be7",
          explanation: "We develop and prepare to castle.",
          isKeyMove: true,
        },
        { san: "Nbd2", explanation: "White completes development." },
        {
          san: "O-O",
          explanation:
            "We castle! Black has a very comfortable, equal position.",
        },
      ],
      continuationMoves: [
        {
          san: "Bg5",
          idea: "White pins the Nf6 — adding pressure before we can build counterplay.",
        },
        {
          san: "h6",
          idea: "We challenge the pin immediately — the bishop must decide.",
        },
        {
          san: "Bh4",
          idea: "White maintains the pin, hoping to keep tension.",
        },
        {
          san: "g5",
          idea: "We chase the bishop! Aggressive, but the position supports it — our king is safe.",
        },
        {
          san: "Bg3",
          idea: "White retreats. The Exchange Caro-Kann is one of Black's most solid systems — no weaknesses, easy development, and confident piece activity.",
        },
      ],
      continuationIdea:
        "The Exchange Variation gives Black a symmetrical structure with no weaknesses. White's minority attack (b4-b5) is the main plan, while Black fights back with c5 to break up the center. It's one of the most reliable Caro-Kann setups for players who want a solid, drawish game.",
    },
    {
      id: "panov-botvinnik",
      name: "Panov-Botvinnik Attack (3.exd5 cxd5 4.c4)",
      difficulty: "intermediate",
      description:
        "White plays c4 after the exchange, fighting for control of the d5 square and creating an IQP position. The Panov is one of the sharpest lines against the Caro-Kann — Black must know how to handle the IQP.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Caro-Kann starts with e4 c6 d4 d5 exd5 cxd5, and this line diverges when White plays c4 — the aggressive Panov-Botvinnik Attack — leading to an IQP structure where Black must use the active Nd5 outpost and piece activity to compensate for the long-term isolated d5 pawn, creating a strategic tension similar to the Queen's Gambit.",
        },
        {
          san: "c6",
          explanation: "The Caro-Kann!",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White builds the center." },
        {
          san: "d5",
          explanation: "We challenge the center.",
          isKeyMove: true,
        },
        { san: "exd5", explanation: "White captures." },
        {
          san: "cxd5",
          explanation: "We recapture.",
          isKeyMove: true,
        },
        {
          san: "c4",
          explanation:
            "The Panov-Botvinnik Attack! White immediately fights for the d5 square — very ambitious.",
          isKeyMove: true,
        },
        {
          san: "Nf6",
          explanation: "We develop and fight for e4.",
          isKeyMove: true,
          wrongMoveWarning:
            "Against the Panov, Nf6 is best — developing and fighting for the center.",
        },
        { san: "Nc3", explanation: "White develops." },
        {
          san: "e6",
          explanation:
            "We solidify the center — preparing to develop the f8 bishop.",
          isKeyMove: true,
        },
        { san: "Nf3", explanation: "White develops." },
        {
          san: "Be7",
          explanation: "We develop the f8 bishop solidly.",
          isKeyMove: true,
        },
        {
          san: "cxd5",
          explanation: "White captures, creating the IQP for Black after Nxd5.",
        },
        {
          san: "Nxd5",
          explanation:
            "We recapture with the knight, occupying the strong d5 outpost. Black has active, well-placed pieces to compensate for White's queenside space.",
          isKeyMove: true,
        },
        { san: "Bd3", explanation: "White develops aggressively." },
        {
          san: "Nc6",
          explanation:
            "We develop — Black has good piece activity to compensate for the IQP.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles." },
        {
          san: "O-O",
          explanation:
            "We castle! Both sides are fully developed with an interesting strategic battle ahead.",
        },
      ],
      continuationMoves: [
        {
          san: "Re1",
          idea: "White centralises the rook, targeting the Nd5.",
        },
        {
          san: "Nxc3",
          idea: "We capture — trading the strong Nd5 to eliminate White's pressure.",
        },
        {
          san: "bxc3",
          idea: "White recaptures with the b-pawn, opening the b-file.",
        },
        {
          san: "b6",
          idea: "We prepare Bb7 to develop the c8 bishop — the IQP structure creates active piece play.",
        },
        {
          san: "Qe2",
          idea: "White prepares to target the IQP. The Panov-Botvinnik gives Black the IQP in exchange for active pieces — a typical positional tradeoff that requires precise understanding.",
        },
      ],
      continuationIdea:
        "The Panov creates an IQP for Black, which is a double-edged structure. Black's active pieces and control of key squares compensate for the long-term pawn weakness. The key is to use the Nd5 outpost, develop the remaining bishops, and create attacking chances before White can target the d5 pawn in an endgame.",
    },
    {
      id: "modern-karpov",
      name: "Modern / Karpov Variation (4...Nd7)",
      difficulty: "intermediate",
      description:
        "Instead of Bf5, Black plays Nd7 — a more flexible approach popularised by Anatoly Karpov. The knight goes to d7 preparing Ngf6 and keeping more options open.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Caro-Kann starts with e4 c6 d4 d5 Nc3 dxe4 Nxe4, and this line diverges when Black plays Nd7 instead of Bf5 — the Karpov/Modern Variation — leading to an even more flexible position where the Bd6 becomes Black's attacking piece targeting h2, and the c5 central break gives Black excellent counterplay without the committal Bf5-Bg6 maneuver.",
        },
        {
          san: "c6",
          explanation: "The Caro-Kann!",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White builds the center." },
        {
          san: "d5",
          explanation: "We challenge the center.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White defends e4." },
        {
          san: "dxe4",
          explanation: "We capture on e4.",
          isKeyMove: true,
        },
        { san: "Nxe4", explanation: "White recaptures." },
        {
          san: "Nd7",
          explanation:
            "The Karpov / Modern Variation! Instead of Bf5, we develop the knight to d7 — more flexible.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Modern/Karpov Caro-Kann plays Nd7 here instead of Bf5.",
        },
        { san: "Nf3", explanation: "White develops." },
        {
          san: "Ngf6",
          explanation:
            "We develop the knight. The d7 knight can now go to f8 or b6.",
          isKeyMove: true,
        },
        { san: "Ng3", explanation: "White repositions the knight." },
        {
          san: "e6",
          explanation:
            "We open a path for the f8 bishop and solidify the centre before developing.",
          isKeyMove: true,
        },
        { san: "Bd3", explanation: "White develops the bishop, eyeing h7." },
        {
          san: "Bd6",
          explanation:
            "We develop the bishop aggressively — it targets h2 and the kingside.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles." },
        {
          san: "O-O",
          explanation: "We castle! The king is safe.",
          isKeyMove: true,
        },
        {
          san: "Qe2",
          explanation: "White defends e4 and prepares queenside expansion.",
        },
        {
          san: "c5",
          explanation:
            "We counterattack d4! Black has achieved a very comfortable position.",
          isKeyMove: true,
        },
      ],
      continuationMoves: [
        {
          san: "dxc5",
          idea: "White captures, keeping the center open.",
        },
        {
          san: "Nxc5",
          idea: "We recapture with the knight — now the Nc5 eyes d3 and e4.",
        },
        {
          san: "Ne5",
          idea: "We centralise the knight — it heads to the dominant e5 outpost.",
        },
        {
          san: "Ncd7",
          idea: "We trade off the knight, but the Bd6 remains and Black keeps the initiative.",
        },
        {
          san: "Nf3",
          idea: "White develops. The Karpov Variation is Anatoly Karpov's personal system — deeply solid, no weaknesses, easy development. The Bd6 targets h2 and the c5 break gives active counterplay. Karpov won hundreds of games in this structure.",
        },
      ],
      continuationIdea:
        "The Karpov/Modern Variation is Anatoly Karpov's personal weapon in the Caro-Kann. After Nd7-Ngf6-Bd6, Black has an extremely solid position with the Bd6 eyeing h2 and the c5 break as the main counterplay. It's less committal than Bf5 and gives Black excellent flexibility.",
    },
    {
      id: "fantasy-variation",
      name: "Fantasy Variation (3.f3)",
      difficulty: "intermediate",
      description:
        "White plays f3, trying to hold the e4 pawn aggressively. This leads to sharp positions where Black must find accurate counter-play with e5 or dxe4 to exploit the weakening of White's kingside.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Caro-Kann starts with e4 c6 d4 d5, and this line diverges when White plays f3 — the Fantasy Variation — leading to an aggressive attempt to hold the center at the cost of weakening the kingside, which Black exploits with e6-Bb4-dxe4 to expose White's structural damage and win the long-term strategic battle.",
        },
        {
          san: "c6",
          explanation: "The Caro-Kann!",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White builds the center." },
        {
          san: "d5",
          explanation: "We challenge the center.",
          isKeyMove: true,
        },
        {
          san: "f3",
          explanation:
            "The Fantasy Variation! White supports e4 aggressively, but weakens the kingside.",
        },
        {
          san: "e6",
          explanation:
            "We play solidly — supporting d5 and preparing to develop. This is the safest response.",
          isKeyMove: true,
          wrongMoveWarning:
            "Against the Fantasy Variation, we play e6 — solid and waiting for White to overreach.",
        },
        { san: "Nc3", explanation: "White develops." },
        {
          san: "Bb4",
          explanation:
            "We pin the Nc3! This active move pressures the center and is one of the best responses.",
          isKeyMove: true,
        },
        { san: "Bd3", explanation: "White develops." },
        {
          san: "dxe4",
          explanation:
            "We capture! Forcing White to recapture, opening the position after all.",
          isKeyMove: true,
        },
        {
          san: "fxe4",
          explanation:
            "White recaptures with the f-pawn — the position is now more open.",
        },
        {
          san: "Nf6",
          explanation: "We develop and attack the e4 pawn.",
          isKeyMove: true,
        },
        { san: "Nge2", explanation: "White defends e4." },
        {
          san: "O-O",
          explanation:
            "We castle! The pin on Nc3 continues to cause discomfort.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles." },
        {
          san: "c5",
          explanation:
            "We counterattack d4 — Black has excellent counterplay against White's weakened kingside.",
          isKeyMove: true,
        },
        { san: "d5", explanation: "White advances." },
        {
          san: "exd5",
          explanation:
            "We capture — the position is sharp and dynamically balanced.",
          isKeyMove: true,
        },
      ],
      continuationMoves: [
        {
          san: "exd5",
          idea: "White recaptures, maintaining a pawn on d5.",
        },
        {
          san: "Nxd5",
          idea: "We capture — the Nd5 is a powerful central piece, and White's doubled f-pawns are a structural weakness.",
        },
        {
          san: "Nxd5",
          idea: "White captures the knight to simplify.",
        },
        {
          san: "Qxd5",
          idea: "We recapture with the queen — very active, eyeing d4 and threatening Qxd4.",
        },
        {
          san: "Be3",
          idea: "White defends d4. The Fantasy Variation backfires against accurate play — the f3 pawn weakening becomes a long-term issue for White, while Black's c5-exd5-Nd5 counter creates real pressure.",
        },
      ],
      continuationIdea:
        "Against the Fantasy Variation, the Bb4 pin and dxe4 capture reveal the weakness of White's f3 move. After the central exchanges, Black's pieces are more active and White's kingside is slightly weakened. The Fantasy is aggressive but playable only if Black doesn't know the response — with accurate play, Black gets a comfortable game.",
    },
    {
      id: "two-knights-caro",
      name: "Two Knights Caro-Kann (3.Nc3 Bg4)",
      difficulty: "intermediate",
      description:
        "White plays Nc3 instead of the usual setup. Black responds with Bg4, pinning the Nf3 for active piece play. This leads to positions where Black has easy development and good counterplay.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Caro-Kann starts with e4 c6 d4 d5 Nc3, and this line diverges when Black plays Nf6 instead of the usual dxe4 structure, leading to the Two Knights Caro-Kann where the spectacular Qh4+ check forces White's king to d2 before development is complete — a tactical disruption that gives Black excellent compensation and sharp, dynamic positions far outside normal Caro-Kann theory.",
        },
        {
          san: "c6",
          explanation: "The Caro-Kann!",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White builds the center." },
        {
          san: "d5",
          explanation: "We challenge the center.",
          isKeyMove: true,
        },
        {
          san: "Nc3",
          explanation: "White defends e4 with the knight.",
        },
        {
          san: "Nf6",
          explanation:
            "We develop and counterattack e4 — this is the Two Knights Caro-Kann approach.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Two Knights Caro, we play Nf6 — fighting for e4 with a piece.",
        },
        { san: "e5", explanation: "White advances, driving back our knight." },
        {
          san: "Ne4",
          explanation:
            "Our knight goes to e4 — an active central square. The Two Knights theme continues.",
          isKeyMove: true,
        },
        { san: "f3", explanation: "White attacks the Ne4." },
        {
          san: "Nxc3",
          explanation:
            "We capture, doubling White's pawns — good compensation for retreating.",
          isKeyMove: true,
        },
        { san: "bxc3", explanation: "White recaptures with the b-pawn." },
        {
          san: "e6",
          explanation: "We solidify and prepare to develop the f8 bishop.",
          isKeyMove: true,
        },
        { san: "Be3", explanation: "White develops." },
        {
          san: "Qh4+",
          explanation:
            "We give check with the queen! This active queen move disrupts White's development.",
          isKeyMove: true,
        },
        {
          san: "Kd2",
          explanation: "White's king is forced to move — a disruptive check.",
        },
        {
          san: "c5",
          explanation:
            "We counterattack immediately — fighting against White's pawn center.",
          isKeyMove: true,
        },
        { san: "dxc5", explanation: "White captures." },
        {
          san: "Nc6",
          explanation:
            "We develop — Black has excellent compensation for the pawns.",
        },
      ],
      continuationMoves: [
        {
          san: "Bd4",
          idea: "White develops the bishop to an active square, fighting for control of the long diagonal.",
        },
        {
          san: "Nxd4",
          idea: "We capture the bishop, simplifying in our favour.",
        },
        {
          san: "cxd4",
          idea: "White recaptures, but the king on d2 is awkwardly placed.",
        },
        {
          san: "Ke7",
          idea: "Our king steps toward safety — the pawn ending is comfortable for Black.",
        },
        {
          san: "Ke2",
          idea: "White's king centralises. The Two Knights Caro-Kann's Qh4+ check is the key — it forces the king to d2 before White has completed development, creating lasting disruption.",
        },
      ],
      continuationIdea:
        "The Two Knights Caro-Kann's Qh4+ check is the key move — it disrupts White's development by forcing the king to d2 before White has completed development. Combined with the Nxc3 doubling of White's c-pawns, Black gets excellent compensation and a sharp, dynamic position.",
    },
    {
      id: "short-system",
      name: "Short System (3.Nd2 Bf5)",
      difficulty: "beginner",
      description:
        "White plays Nd2 instead of the more common Nc3, keeping options open. We respond with Bf5 to develop the c8 bishop early — the same key idea as in the Classical Caro-Kann.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Caro-Kann starts with e4 c6 d4 d5, and this line diverges when White plays Nd2 instead of Nc3 — the Short System — leading to the same Caro-Kann structure as the Classical but without the pin on c3, allowing Black to develop identically with dxe4-Bf5-Bg6-h6-Nd7-Bxd3 and reach the same comfortable, weakness-free position.",
        },
        {
          san: "c6",
          explanation: "The Caro-Kann!",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White builds the center." },
        {
          san: "d5",
          explanation: "We challenge the center.",
          isKeyMove: true,
        },
        {
          san: "Nd2",
          explanation:
            "The Short System — White develops the knight to d2 to avoid the Bf5 pin on Nc3.",
        },
        {
          san: "dxe4",
          explanation: "We capture on e4 — same idea as the Classical.",
          isKeyMove: true,
          wrongMoveWarning:
            "Against the Short System, we still capture dxe4 and aim for Bf5.",
        },
        { san: "Nxe4", explanation: "White recaptures." },
        {
          san: "Bf5",
          explanation:
            "We develop the c8 bishop to f5 — the hallmark Caro-Kann move! This is always our goal.",
          isKeyMove: true,
        },
        { san: "Ng3", explanation: "White chases the bishop." },
        {
          san: "Bg6",
          explanation: "The bishop retreats to g6, remaining active.",
          isKeyMove: true,
        },
        { san: "h4", explanation: "White attacks the bishop." },
        {
          san: "h6",
          explanation: "We prevent h5 — essential to keep the bishop alive.",
          isKeyMove: true,
        },
        { san: "Nf3", explanation: "White develops." },
        {
          san: "Nd7",
          explanation:
            "We develop the queenside knight — heading for f6 and the center.",
          isKeyMove: true,
        },
        { san: "Bd3", explanation: "White develops." },
        {
          san: "Bxd3",
          explanation: "We trade the bishops, relieving the pressure.",
          isKeyMove: true,
        },
        { san: "Qxd3", explanation: "White recaptures." },
        {
          san: "Ngf6",
          explanation:
            "We complete development — Black has an easy, comfortable position.",
        },
      ],
      continuationMoves: [
        {
          san: "O-O",
          idea: "White castles — the king is safe and the position is ready to sharpen.",
        },
        {
          san: "Ne5",
          idea: "We centralise the knight to e5 — a powerful outpost that eyes c4 and d3.",
        },
        {
          san: "Ne4",
          idea: "White brings a knight to e4, challenging our Ne5.",
        },
        {
          san: "Ned7",
          idea: "We retreat the knight to d7 — it will come back to c5 or e5 when the time is right.",
        },
        {
          san: "c3",
          idea: "White supports d4. The Short System gives Black the same ideas as the Classical: Bf5, the bishop trade on d3, and easy central counterplay. Simple and reliable.",
        },
      ],
      continuationIdea:
        "The Short System (Nd2) tries to avoid the Bf5 pin, but Black simply plays the same moves as the Classical — dxe4, Bf5, Bg6, h6, Nd7, Bxd3. The result is almost identical. Black's development is easy and the c5 break provides all the counterplay needed.",
    },
    {
      id: "hillbilly-attack",
      name: "Hillbilly Attack (2.Bc4 vs c6)",
      difficulty: "intermediate",
      description:
        "White plays Bc4 early, trying to control e6 and d5 with the bishop. Black must respond accurately to avoid early tactical problems around the f7 square.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Caro-Kann starts with e4 c6, and this line diverges when White plays Bc4 early — the Hillbilly Attack — leading to positions similar to the Italian Game but where Black's d5 immediately challenges the bishop, forces it to b3 where it has no targets, and Black develops comfortably with no problems whatsoever.",
        },
        {
          san: "c6",
          explanation: "The Caro-Kann!",
          isKeyMove: true,
        },
        {
          san: "Bc4",
          explanation:
            "The Hillbilly Attack! White develops the bishop early, similar to the Italian Game, targeting f7.",
        },
        {
          san: "d5",
          explanation:
            "We challenge the center immediately — fighting against the bishop's diagonal.",
          isKeyMove: true,
          wrongMoveWarning:
            "Against the Hillbilly, d5 is our best move — fighting for the center.",
        },
        { san: "exd5", explanation: "White captures." },
        {
          san: "cxd5",
          explanation: "We recapture — our d5 pawn is well supported.",
          isKeyMove: true,
        },
        {
          san: "Bb3",
          explanation:
            "White retreats the bishop — it's no longer targeting f7.",
        },
        {
          san: "Nf6",
          explanation:
            "We develop and attack e4. Black's development is easy and natural.",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White builds the center." },
        {
          san: "e6",
          explanation: "We solidify the center and prepare to castle.",
          isKeyMove: true,
        },
        { san: "Nf3", explanation: "White develops." },
        {
          san: "Be7",
          explanation: "We develop and prepare to castle.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles." },
        {
          san: "O-O",
          explanation:
            "We castle! Black has a solid, comfortable position with no weaknesses.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops." },
        {
          san: "Nc6",
          explanation:
            "We develop — Black has excellent development and no problems.",
          isKeyMove: true,
        },
        { san: "Re1", explanation: "White reinforces e4." },
        {
          san: "Bd6",
          explanation: "We develop the bishop aggressively, eyeing h2.",
        },
      ],
      continuationMoves: [
        {
          san: "Bg5",
          idea: "White pins the Nf6, adding pressure.",
        },
        {
          san: "h6",
          idea: "We challenge the pin — the bishop must either trade or retreat.",
        },
        {
          san: "Bh4",
          idea: "White maintains the pin, hoping to keep pressure on the Nf6.",
        },
        {
          san: "g5",
          idea: "We chase the bishop! The Bd6 + Nc6 setup gives us great piece activity. White's Hillbilly Attack gets nothing if we respond accurately with d5.",
        },
        {
          san: "Bg3",
          idea: "White retreats. Against the Hillbilly Attack, our d5 counter and solid development completely neutralise White's early bishop play — the bishop on b3 is no longer pointing at f7 and has no targets.",
        },
      ],
      continuationIdea:
        "Against the Hillbilly Attack (Bc4), our d5 counter immediately challenges the bishop and forces it to retreat to b3 where it has no attacking chances. After solid development with Nf6-e6-Be7-O-O-Nc6, Black has a completely normal Caro-Kann position with no weaknesses. The Hillbilly is a surprise weapon but nothing to worry about.",
    },
    {
      id: "gurgenidze",
      name: "Gurgenidze System (5...g6)",
      difficulty: "advanced",
      description:
        "Black fianchettos the king's bishop in the Caro-Kann after the dxe4 capture. The resulting positions are similar to the King's Indian but with the c6 move already played, giving extra solidity.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Caro-Kann starts with e4 c6 d4 d5 Nc3 dxe4 Nxe4, and this line diverges when Black plays g6 instead of Bf5 or Nd7 — the Gurgenidze System — leading to a Dragon-like fianchetto in the Caro-Kann where the Bg7 controls the long diagonal and the c6 move provides extra solidity that makes this fianchetto more resilient than a regular Dragon.",
        },
        {
          san: "c6",
          explanation: "The Caro-Kann!",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White builds the center." },
        {
          san: "d5",
          explanation: "We challenge the center.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White defends e4." },
        {
          san: "dxe4",
          explanation: "We capture on e4.",
          isKeyMove: true,
        },
        { san: "Nxe4", explanation: "White recaptures." },
        {
          san: "g6",
          explanation:
            "The Gurgenidze! Instead of Bf5 or Nd7, we fianchetto — creating a Dragon-like setup in the Caro-Kann.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Gurgenidze plays g6 in the Caro-Kann — creating a Dragon-like fianchetto position.",
        },
        { san: "Nf3", explanation: "White develops." },
        {
          san: "Bg7",
          explanation:
            "We complete the fianchetto. The g7 bishop is a powerful long-range piece.",
          isKeyMove: true,
        },
        { san: "Bc4", explanation: "White develops the bishop aggressively." },
        {
          san: "Nf6",
          explanation: "We develop and counterattack the knight on e4.",
          isKeyMove: true,
        },
        { san: "Ng3", explanation: "White retreats the knight." },
        {
          san: "O-O",
          explanation: "We castle! The king is safe behind the fianchetto.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles." },
        {
          san: "Nbd7",
          explanation: "We develop the queenside knight.",
          isKeyMove: true,
        },
        { san: "Re1", explanation: "White reinforces e4." },
        {
          san: "Nb6",
          explanation:
            "The knight goes to b6 to attack the Bc4 and fight for the c4 pawn.",
          isKeyMove: true,
        },
        { san: "Bb3", explanation: "White retreats." },
        {
          san: "c5",
          explanation:
            "We counterattack d4 — Black has excellent counterplay with the Dragon bishop.",
        },
      ],
      continuationMoves: [
        {
          san: "dxc5",
          idea: "White grabs the c5 pawn, opening the centre.",
        },
        {
          san: "Nbd7",
          idea: "We retreat the knight from the pawn's attack — and it immediately eyes c5 to win the pawn straight back.",
        },
        {
          san: "Be3",
          idea: "White develops and defends the extra pawn one more time.",
        },
        {
          san: "Nxc5",
          idea: "We recover the pawn, landing the knight actively on c5 where it hits the b3 bishop and the e4 square.",
        },
        {
          san: "Qe2",
          idea: "White centralises the queen. The Gurgenidze gives Black a fully equal, Dragon-like game — the Bg7 rakes the long diagonal and the c5 knight is superbly placed.",
        },
      ],
      continuationIdea:
        "The Gurgenidze System combines the Caro-Kann's solidity with the Dragon's attacking fianchetto. After the c5-d4 pawn advances, the Bg7 has a completely open diagonal — pointing at White's queenside. The extra c6 move (compared to a normal Dragon) gives Black extra stability to support the central pawn advances.",
    },
  ],
};

export default caroKann;
