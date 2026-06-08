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
          explanation:
            "The Ruy López — also known as the Spanish Game — is one of the oldest and most deeply studied openings in chess, beloved by World Champions from Morphy to Carlsen. White's Bb5 attacks the knight defending Black's e5 pawn, creating a subtle long-term pressure that Black must respect for the entire game. The Exchange Variation resolves the tension early: White captures on c6, gives Black doubled pawns, and steers the game toward a clean endgame plan. The goal is elegantly simple — trade queens, reach a 4-vs-3 kingside pawn majority endgame, and convert that structural edge into a passed pawn that Black's doubled c-pawns can never match.",
          isKeyMove: true,
        },
        {
          san: "e5",
          explanation:
            "Black answers in the center. The point isn't to copy White — it's that letting White own both d4 and e4 leads to a long squeeze, so Black plants a pawn in the center first and develops afterward.",
        },
        {
          san: "Nf3",
          explanation:
            "White develops a knight and attacks e5 in the same move — the ideal developing move, because it makes a threat. Black has to react, so White keeps the small initiative of moving first.",
        },
        {
          san: "Nc6",
          explanation:
            "Black defends e5 with a developing move. The knight is the natural defender here: it blocks nothing and gets a piece into play, whereas ...d6 or ...Qe7 would defend passively.",
        },
        {
          san: "Bb5",
          explanation:
            "The Ruy López move. The bishop doesn't attack e5 directly — it attacks the knight that GUARDS e5, threatening to undermine the defense. The knight is also loosely pinned to the e8-king along the b5–e8 diagonal. Attack the defender, not just the defended pawn: that's the strategic idea behind the whole Spanish.",
          isKeyMove: true,
        },
        {
          san: "a6",
          explanation:
            "Black 'puts the question' to the bishop, forcing it to decide: retreat, or capture? This gains a tempo and a little queenside space, and is useful whichever way White answers.",
        },
        {
          san: "Bxc6",
          explanation:
            "White captures immediately! White voluntarily gives up the bishop pair to saddle Black with doubled c-pawns. The trade-off is concrete: long-term structure (a healthier pawn majority) in return for the dynamic two-bishops advantage. The Exchange chooses the endgame over the attack.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Exchange Variation, we capture on c6 rather than retreating to a4.",
        },
        {
          san: "dxc6",
          explanation:
            "Black recaptures with the d-pawn (not the b-pawn) to open the queen's diagonal and the d-file and keep a pawn aimed at the center. The cost is permanent: the c-pawns are now doubled and can never produce a passed pawn.",
        },
        {
          san: "O-O",
          explanation:
            "White castles before doing anything committal. The doubled pawns aren't going anywhere, so there's no rush — get the king safe and the rook into play first, then exploit the structure. Secure your king before you cash in a long-term edge.",
          isKeyMove: true,
        },
        {
          san: "f6",
          explanation:
            "Black props up e5 with the f-pawn now that the c6-knight is gone. It's a little ugly (it blocks the f8-bishop's view and weakens the king), but e5 must be held or White's pieces flood the center.",
        },
        {
          san: "d4",
          explanation:
            "The central break. White challenges e5 directly, knowing that opening the position favors the side with the better structure and the safer plan — exactly White's situation here. Open lines when your long-term advantage is structural.",
          isKeyMove: true,
        },
        {
          san: "exd4",
          explanation:
            "Black captures, opening the d-file toward his own queen and accepting the trade that leads into the endgame White is angling for.",
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
        {
          san: "e4",
          explanation:
            "The Ruy López begins with e4 e5 Nf3 Nc6 Bb5, and this line diverges when Black plays the passive d6 instead of the main-line a6 or Nf6, leading to a cramped but solid position where White systematically dismantles Black's structure through central pawn breaks and piece trades.",
        },
        {
          san: "e5",
          explanation:
            "Black claims his share of the center — the sound, principled reply.",
        },
        {
          san: "Nf3",
          explanation:
            "Develops and attacks e5 in one move, keeping the initiative.",
        },
        {
          san: "Nc6",
          explanation: "Defends e5 with a developing move that blocks nothing.",
        },
        {
          san: "Bb5",
          explanation:
            "The Ruy López — the bishop attacks the knight that guards e5, the signature pressure of the Spanish.",
          isKeyMove: true,
        },
        {
          san: "d6",
          explanation:
            "The Old Steinitz. Black defends e5 with a pawn instead of putting the question to the bishop — solid, but passive. The downside: ...d6 shuts in the f8-bishop and surrenders the initiative. Solidity without activity invites a slow squeeze.",
          isKeyMove: true,
        },
        {
          san: "d4",
          explanation:
            "White strikes the center at once, precisely because Black's passive setup has no counter-strike ready. Against passive play, expand immediately.",
        },
        {
          san: "Bd7",
          explanation:
            "Black breaks the pin and prepares to castle. The bishop is passive on d7, but it unties the c6-knight and connects toward the queenside.",
        },
        {
          san: "Nc3",
          explanation:
            "White develops the last minor piece toward the center with no fuss — when you're better, just complete development.",
        },
        {
          san: "Nf6",
          explanation: "Black develops and finally pressures e4, a touch late.",
        },
        {
          san: "O-O",
          explanation: "White castles, king to safety, rook toward the center.",
        },
        {
          san: "Be7",
          explanation:
            "Black prepares to castle, the bishop on a modest but safe square.",
        },
        {
          san: "Re1",
          explanation:
            "White over-protects e4 and puts the rook on the file that will open — preparing the central trades on his own terms.",
          isKeyMove: true,
        },
        {
          san: "exd4",
          explanation:
            "Black releases the tension to relieve his cramped position, but this just hands White a free, centralized knight.",
        },
        {
          san: "Nxd4",
          explanation:
            "White recaptures with a dominant central knight, ready to trade it for the c6-knight and wreck Black's structure.",
        },
        {
          san: "O-O",
          explanation:
            "Black finally castles after a slow, reactive opening — safe, but with no active plan in sight.",
        },
      ],
      continuationMoves: [
        {
          san: "Nxc6",
          idea: "White trades the knight, immediately exposing Black's pawn structure.",
        },
        {
          san: "Bxc6",
          idea: "Black recaptures with the Bd7 — the only sensible recapture.",
        },
        {
          san: "Bxc6",
          idea: "White's Bb5 captures the Bc6, forcing doubled c-pawns.",
        },
        {
          san: "bxc6",
          idea: "Black recaptures with the b-pawn — doubled c-pawns are a permanent weakness, and d6 is now backward.",
        },
        {
          san: "Bg5",
          idea: "White pins the Nf6 and piles pressure on the weak d6 pawn. This is the whole story of the Old Steinitz: passive play invites systematic dismantling.",
        },
      ],
      continuationIdea:
        "The Old Steinitz is too passive and pays a structural price. White trades off Black's active defenders, leaving doubled c-pawns and a backward d6 pawn that must be defended for the rest of the game. Black has no active pieces to generate counterplay with. A clean demonstration of why passive defence doesn't work in the Ruy López.",
    },
    {
      id: "classical-defense",
      name: "Classical Defence (3...Bc5)",
      difficulty: "beginner",
      description:
        "Black immediately develops the bishop to c5, fighting for the center and eyeing f2. White usually replies c3 to prepare d4. A mirror image of the Italian Game that can transpose in several ways.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Ruy López begins with e4 e5 Nf3 Nc6 Bb5, and this line diverges when Black develops the bishop actively to c5 instead of chasing the Bb5 with a6, leading to Italian-like positions where both sides build solid pawn chains and maneuver for long-term advantage in a rich strategic battle.",
        },
        { san: "e5", explanation: "Black claims his share of the center." },
        {
          san: "Nf3",
          explanation: "Develops and attacks e5, gaining a tempo.",
        },
        {
          san: "Nc6",
          explanation: "Defends e5 with a natural developing move.",
        },
        {
          san: "Bb5",
          explanation:
            "The Ruy López — the bishop pressures the defender of e5.",
          isKeyMove: true,
        },
        {
          san: "Bc5",
          explanation:
            "The Classical Defence. Instead of fussing over the bishop, Black develops actively and aims his own bishop at f2 — meeting positional pressure with rapid, purposeful development. It often transposes to Italian-style play.",
          isKeyMove: true,
        },
        {
          san: "c3",
          explanation:
            "White prepares d4 with pawn support and opens c2 as a future retreat for the bishop — building toward the central break that will hit the c5-bishop.",
        },
        {
          san: "Nf6",
          explanation:
            "Black develops and counterattacks e4, refusing to let White expand for free.",
        },
        {
          san: "O-O",
          explanation:
            "White castles, getting the king safe before opening the center.",
        },
        {
          san: "O-O",
          explanation:
            "Black castles too — both kings safe, the strategic battle begins.",
        },
        {
          san: "d4",
          explanation:
            "The central break White prepared with c3, and it comes with a gain of time: the d4 pawn attacks the c5-bishop, forcing it to react. Strike in the center when it also harasses an enemy piece.",
          isKeyMove: true,
        },
        {
          san: "Bb6",
          explanation:
            "The bishop retreats but keeps raking the a7-g1 diagonal, staying active rather than passively dropping back to e7.",
        },
        {
          san: "Bg5",
          explanation:
            "White pins the f6-knight, weakening Black's grip on e5 and the center — provoking a concession around Black's king.",
        },
        {
          san: "h6",
          explanation:
            "Black questions the bishop, forcing it to decide whether to keep the pin or trade.",
        },
        {
          san: "Bh4",
          explanation:
            "White keeps the pin rather than trading — maintaining the pressure forces Black to spend more moves (and pawn weaknesses) to break free.",
        },
        {
          san: "d6",
          explanation:
            "Black cements e5 and opens a path to free his position, accepting a slightly cramped but solid setup.",
        },
      ],
      continuationMoves: [
        {
          san: "Nbd2",
          idea: "White completes development — the knight heads toward the center.",
        },
        {
          san: "Bd7",
          idea: "Black develops the c8 bishop to d7, completing queenside development.",
        },
        {
          san: "d5",
          idea: "White closes the center, fixing the pawn structure and beginning long-term positional pressure.",
        },
        {
          san: "Nb8",
          idea: "Black retreats the knight to b8, planning to reroute it via d7 to a better post.",
        },
        {
          san: "Be2",
          idea: "White's bishop retreats to e2, a safe and solid square. The Classical Defence leads to a strategically rich battle where White's patient buildup meets Black's piece maneuvering.",
        },
      ],
      continuationIdea:
        "The Classical Defence transposes into a closed Ruy López middlegame. After d5 closes the center, both sides maneuver for advantage: White builds the famous Nf1-g3 kingside battery while Black reroutes knights and prepares queenside counterplay with ...c6 or ...a5. Rich strategic chess — no quick decisions.",
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
          explanation:
            "The Ruy López begins with e4 e5 Nf3 Nc6 Bb5, and the Morphy Defence — Black's a6 chasing the bishop — is the most theoretically rich system in the opening, diverging when White retreats Ba4 instead of capturing, leading to the deeply complex Closed Ruy López where both sides follow long-established plans over 30–40 moves.",
        },
        {
          san: "e5",
          explanation:
            "Black claims his share of the center — the principled symmetric reply.",
        },
        {
          san: "Nf3",
          explanation:
            "Develops and attacks e5 in one move, keeping the initiative of the first move.",
          isKeyMove: true,
        },
        {
          san: "Nc6",
          explanation: "Defends e5 with a developing move that blocks nothing.",
        },
        {
          san: "Bb5",
          explanation:
            "The Ruy López! The bishop attacks the knight guarding e5, putting the trademark Spanish pressure on the center. (Bc4, aiming at f7, would be the Italian instead.)",
          isKeyMove: true,
          wrongMoveWarning:
            "Bb5 is the Ruy López move. Bc4 would be the Italian instead.",
        },
        {
          san: "a6",
          explanation:
            "The Morphy Defence — putting the question to the bishop. Black gains a tempo and queenside space, and keeps the option of ...b5 to chase the bishop further later.",
        },
        {
          san: "Ba4",
          explanation:
            "White retreats but keeps the bishop on the a4-e8 diagonal, maintaining the pressure on c6 and e5 rather than releasing it with a capture. Keep the tension when retreating preserves your pressure.",
          isKeyMove: true,
        },
        {
          san: "Nf6",
          explanation:
            "Black develops and counterattacks e4 — every move should fight for the center or develop, and this does both.",
        },
        {
          san: "O-O",
          explanation:
            "White castles and calmly allows ...Nxe4! It's not a blunder: after ...Nxe4 the moves d4 and Re1 regain the pawn with a strong initiative. Sometimes the safest reply to a threat is to ignore it because the resulting tactics favor you.",
          isKeyMove: true,
        },
        {
          san: "Be7",
          explanation:
            "Black develops the bishop and prepares to castle, declining the e4 pawn in favor of solid, safe development.",
        },
        {
          san: "Re1",
          explanation:
            "White over-protects e4 (now really defending it) and puts the rook on the file that will open after d4. Prepare your break before you play it.",
          isKeyMove: true,
        },
        {
          san: "b5",
          explanation:
            "Black gains more queenside space and chases the bishop again, also clearing b7 for the bishop later.",
        },
        {
          san: "Bb3",
          explanation:
            "The bishop drops to b3, where it's safe but still rakes the a2-g8 diagonal toward f7 and supports the coming d4. Retreat to a square where the piece keeps working.",
        },
        {
          san: "d6",
          explanation:
            "Black builds the solid d6+e5 chain, securing the center and opening a path for the c8-bishop before castling.",
        },
        {
          san: "c3",
          explanation:
            "White supports the future d4 with a pawn and gives the b3-bishop the c2 retreat — the standard preparation for the central break.",
          isKeyMove: true,
        },
        {
          san: "O-O",
          explanation:
            "Black castles, completing development. Both sides now have clear, time-tested plans, and the rich Closed Ruy López middlegame begins.",
        },
      ],
      continuationMoves: [
        {
          san: "h3",
          idea: "A prophylactic move — White prevents Bg4 before launching the central attack with d4.",
        },
        {
          san: "Bb7",
          idea: "Black develops the bishop to the long diagonal, immediately pressuring the e4 pawn.",
        },
        {
          san: "d4",
          idea: "The central break White has been preparing since move 8 — all the c3, Re1, and h3 moves were building to this moment.",
        },
        {
          san: "Re8",
          idea: "Black centralises the rook, supporting the e5 pawn before White's d4 push threatens it.",
        },
        {
          san: "Nbd2",
          idea: "White develops the last minor piece toward the center. From d2 the knight heads to f1 and then g3 for a kingside attack — or to e4 for central dominance. This is the heart of the Ruy López middlegame.",
        },
      ],
      continuationIdea:
        "After the Morphy Defence main line, White's plan unfolds patiently: h3 (prevention), d4 (tension), and Nbd2-f1-g3 (kingside regrouping). Black's Bb7 pressures e4 while Re8 supports e5. Both sides have crystal-clear plans and the game will be decided by who executes theirs more accurately over the next 30-40 moves. This is why the Ruy López is the defining positional opening.",
    },
    {
      id: "chigorin-variation",
      name: "Chigorin Variation (9...Na5)",
      difficulty: "intermediate",
      description:
        "Black plays Na5 to exchange White's bishop on b3, then advances c5 to fight for the center. A classic strategic system that remains popular at all levels, named after Mikhail Chigorin.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Ruy López begins with e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O, and this line diverges when Black plays Na5 to chase the bishop off b3, leading to comfortable, flexible positions where Black gets queenside counterplay at the cost of allowing White's full Nf1–g3 kingside plan.",
        },
        { san: "e5", explanation: "Black claims his share of the center." },
        {
          san: "Nf3",
          explanation: "Develops and attacks e5, gaining a tempo.",
        },
        { san: "Nc6", explanation: "Defends e5 naturally." },
        {
          san: "Bb5",
          explanation:
            "The Ruy López — pressure on the defender of e5, the defining Spanish idea.",
          isKeyMove: true,
        },
        {
          san: "a6",
          explanation:
            "The Morphy Defence — putting the question to the bishop and gaining a tempo.",
        },
        {
          san: "Ba4",
          explanation:
            "White retreats but keeps the bishop's pressure on the a4-e8 diagonal.",
        },
        { san: "Nf6", explanation: "Black develops and counterattacks e4." },
        {
          san: "O-O",
          explanation:
            "White castles, allowing ...Nxe4 because the tactics favor him.",
        },
        { san: "Be7", explanation: "Black develops and prepares to castle." },
        {
          san: "Re1",
          explanation: "White over-protects e4 and readies the d4 break.",
        },
        {
          san: "b5",
          explanation:
            "Black gains queenside space and chases the bishop again.",
        },
        {
          san: "Bb3",
          explanation:
            "The bishop drops to b3, still eyeing f7 and supporting d4.",
        },
        { san: "d6", explanation: "Black builds the solid d6+e5 chain." },
        {
          san: "c3",
          explanation:
            "White supports the coming d4 and frees c2 for the bishop.",
        },
        { san: "O-O", explanation: "Black castles, completing development." },
        {
          san: "h3",
          explanation:
            "Prophylaxis — White stops ...Bg4 before committing to d4, so the f3-knight can't be pinned at the wrong moment.",
        },
        {
          san: "Na5",
          explanation:
            "The Chigorin! Black accepts an awkward-looking knight on the rim to trade off White's powerful light-squared bishop — the piece that eyes f7 and supports the center. Eliminating your opponent's best piece is worth a temporary loss of activity.",
          isKeyMove: true,
        },
        {
          san: "Bc2",
          explanation:
            "White preserves the bishop instead of allowing ...Nxb3. From c2 it still aims at h7 and backs up e4 — saving the bishop for the kingside attack to come.",
        },
        {
          san: "c5",
          explanation:
            "The point of ...Na5: Black grabs queenside space and prepares to recapture toward the center, building his own counterplay there.",
          isKeyMove: true,
        },
        {
          san: "d4",
          explanation:
            "The long-prepared central break finally lands, and both sides fight over the center on equal terms.",
        },
        {
          san: "Qc7",
          explanation:
            "Black centralizes the queen to support e5 and the ...cxd4 recapture, coordinating his forces around the central tension.",
        },
      ],
      continuationMoves: [
        {
          san: "Nbd2",
          idea: "White develops toward the center, preparing the Nf1-g3 maneuver.",
        },
        {
          san: "Nc6",
          idea: "The Na5 has done its job — it chased the bishop to c2 — and now the knight returns to a better square.",
        },
        {
          san: "dxc5",
          idea: "White captures to simplify the center and remove Black's queenside counterplay.",
        },
        {
          san: "dxc5",
          idea: "Black recaptures — the center is now balanced with pawns on e4 and e5.",
        },
        {
          san: "Nf1",
          idea: "The Ruy López knight reroute: f1 → g3, eyeing h5 and f5 for a kingside attack. The Chigorin gives Black a comfortable, flexible middlegame at the cost of letting White use the full Ruy López plan.",
        },
      ],
      continuationIdea:
        "After the Chigorin, both sides have achieved their goals: Black traded off White's dangerous Bb3 and gained queenside space, while White maintains solid central control and the Nf1-g3 attacking plan. The middlegame is balanced but rich — Black's queenside pressure vs White's kingside attack is the eternal Ruy López tension.",
    },
    {
      id: "open-spanish",
      name: "Open Spanish (5...Nxe4)",
      difficulty: "intermediate",
      description:
        "Black captures on e4, accepting a pawn but gaining active piece play. The Open Ruy López requires both sides to know deep theory — the material imbalances are temporary but the middlegame is sharp.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Ruy López begins with e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6, and this line diverges when Black captures the e4 pawn instead of developing further, leading to sharp, knife-edge positions where White's d4 recovers the pawn with a strong pawn center and lasting positional compensation against Black's active pieces.",
        },
        { san: "e5", explanation: "Black claims his share of the center." },
        {
          san: "Nf3",
          explanation: "Develops and attacks e5, gaining a tempo.",
        },
        { san: "Nc6", explanation: "Defends e5 naturally." },
        {
          san: "Bb5",
          explanation: "The Ruy López — pressure on the defender of e5.",
          isKeyMove: true,
        },
        {
          san: "a6",
          explanation:
            "The Morphy Defence, putting the question to the bishop.",
        },
        {
          san: "Ba4",
          explanation:
            "White keeps the bishop's pressure on the a4-e8 diagonal.",
        },
        { san: "Nf6", explanation: "Black develops and counterattacks e4." },
        {
          san: "O-O",
          explanation:
            "White castles, deliberately offering the e4 pawn — the d4 break will recover it with interest.",
        },
        {
          san: "Nxe4",
          explanation:
            "The Open Spanish! Black grabs the pawn and trades structural solidity for active, free-flowing pieces. It's fully sound: Black knows White wins it back, but in return Black's pieces get open lines and concrete play. A principled choice of activity over structure.",
          isKeyMove: true,
        },
        {
          san: "d4",
          explanation:
            "White hits the center at once, opening lines toward the e4-knight and preparing to regain the pawn with a dominant pawn on e5. Don't chase the pawn directly — undermine its support with a central break.",
          isKeyMove: true,
        },
        {
          san: "b5",
          explanation:
            "Black chases the bishop to safeguard his structure and hold the extra pawn for now, clearing b7 for the bishop too.",
        },
        {
          san: "Bb3",
          explanation:
            "The bishop drops to b3, still on its strong diagonal aiming at f7 and the soon-to-be-loose Black center.",
        },
        {
          san: "d5",
          explanation:
            "White plays dxe5 next, but first Black advances ...d5 with tempo, building a protective pawn shield for the e4-knight and grabbing central space. Use a pawn push that gains time to anchor your advanced piece.",
        },
        {
          san: "dxe5",
          explanation:
            "White recaptures, planting a strong, cramping pawn on e5 that restricts Black's kingside.",
        },
        {
          san: "Be6",
          explanation:
            "Black develops actively, defending d5 and offering to neutralize White's dangerous b3-bishop.",
        },
        {
          san: "c3",
          explanation:
            "White supports d4/d5 squares, gives the bishop the c2 retreat, and prepares to complete development — solidifying before untangling the central tension.",
        },
        {
          san: "Bc5",
          explanation:
            "Black's dark-squared bishop takes an aggressive post aiming at f2, keeping the initiative and discouraging White's Nbd2.",
        },
      ],
      continuationMoves: [
        {
          san: "Nbd2",
          idea: "White develops, preparing to reclaim the e4 pawn via Nbd2-b3-c5 or simply with Nf3xe4 ideas.",
        },
        {
          san: "O-O",
          idea: "Black castles — the king needs safety before the complications intensify.",
        },
        {
          san: "Bc2",
          idea: "White repositions the Bb3 to c2, supporting e4 and preparing Nd4 to attack the Ne4.",
        },
        {
          san: "Nxd2",
          idea: "Black simplifies by trading the active Ne4 for a bishop, reducing the tension.",
        },
        {
          san: "Qxd2",
          idea: "White recaptures centrally. The Open Spanish is a sharp test of preparation — Black has active pieces but White's e5 pawn cramps the position. A deeply analysed battle requiring both sides to know the theory.",
        },
      ],
      continuationIdea:
        "The Open Spanish is a knife fight. Black snatched a pawn and has active pieces, but White's e5 pawn cramps Black's pieces and White has a development advantage. The position requires precise play from both sides — Black's active bishops against White's space advantage creates lasting tension even when both play correctly.",
    },
    {
      id: "schliemann-defense",
      name: "Schliemann (Jaenisch) Gambit (3...f5)",
      difficulty: "intermediate",
      description:
        "Black plays f5 to immediately challenge White's center and create wild tactical play. This gambit sacrifices structural solidity for immediate counterplay. As White, you must know the critical refutation.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Ruy López begins with e4 e5 Nf3 Nc6 Bb5, and this line diverges dramatically when Black plays the aggressive f5 instead of any normal development move, leading to wild tactical complications that White must know precisely — the Bxc6+ zwischenzug restores material equality while leaving Black with a permanently shattered queenside.",
        },
        { san: "e5", explanation: "Black claims his share of the center." },
        {
          san: "Nf3",
          explanation: "Develops and attacks e5, gaining a tempo.",
        },
        { san: "Nc6", explanation: "Defends e5 naturally." },
        {
          san: "Bb5",
          explanation: "The Ruy López — pressure on the e5-defender.",
          isKeyMove: true,
        },
        {
          san: "f5",
          explanation:
            "The Schliemann Gambit! Black strikes at e4 with a wing pawn, a King's Gambit-style idea offered a tempo down. It rips the position open for fast counterplay at the cost of king safety. High risk, high reward — and a real test of White's preparation.",
          isKeyMove: true,
        },
        {
          san: "Nc3",
          explanation:
            "The solid refutation try: White develops with a threat to e4 and f5 rather than grabbing on f5. Meet a flank gambit with calm development plus a counter-threat, not greed.",
        },
        {
          san: "fxe4",
          explanation:
            "Black opens the f-file for his rook and removes White's center pawn, committing fully to the gambit's open lines.",
        },
        {
          san: "Nxe4",
          explanation:
            "White recaptures with the knight, keeping a strong central piece and refusing to let the position drift into Black's favor.",
          isKeyMove: true,
        },
        {
          san: "d5",
          explanation:
            "Black gains a tempo by hitting the e4-knight and grabs central space — the only way to keep the initiative alive.",
        },
        {
          san: "Nxe5",
          explanation:
            "The critical resource: instead of meekly retreating, White grabs e5, exploiting that the c6-knight is pinned to the king by the Bb5. Look for in-between captures that exploit a pin before you retreat.",
        },
        {
          san: "dxe4",
          explanation:
            "Black removes the other knight, momentarily up a piece — but the pin on c6 is about to be cashed in.",
        },
        {
          san: "Nxc6",
          explanation:
            "White collects the pinned knight, smashing Black's queenside structure in the process — restoring material while inflicting lasting damage.",
          isKeyMove: true,
        },
        {
          san: "bxc6",
          explanation:
            "Black must recapture, and the queenside is wrecked: isolated a- and doubled c-pawns. The structural wound is permanent.",
        },
        {
          san: "Bxc6+",
          explanation:
            "The key zwischenzug! Before retreating or grabbing e4, White checks on c6, regaining the sacrificed material with tempo. Insert the forcing check first — move order wins the extra pawn.",
          isKeyMove: true,
        },
        {
          san: "Bd7",
          explanation:
            "Black blocks the check and offers to trade off White's strong bishop to relieve the pressure.",
        },
      ],
      continuationMoves: [
        {
          san: "Bxe4",
          idea: "White scoops up the loose e4 pawn — material is level again and Black's wrecked queenside is a lasting weakness.",
        },
        {
          san: "Nf6",
          idea: "Black develops the knight, hitting the Be4 and gaining a tempo.",
        },
        {
          san: "Bd3",
          idea: "The bishop retreats to d3, safe and still eyeing the h7 square.",
        },
        {
          san: "Bd6",
          idea: "Black develops the dark-squared bishop, aiming at h2 and preparing to castle.",
        },
        {
          san: "O-O",
          idea: "White castles. The complications have burned out: material is equal, but Black's split a- and c-pawns hand White a pleasant, risk-free structural edge for the long game.",
        },
      ],
      continuationIdea:
        "The Schliemann is a dangerous gambit at club level, but after the Bxc6+ zwischenzug White equalises the material and emerges with the healthier position: Black's queenside is split into weak, isolated a- and c-pawns. Black's compensation is active piece play and practical complications — making this a great weapon against unprepared opponents, less so against booked-up ones.",
    },
    {
      id: "archangel-variation",
      name: "Archangel (Arkhangelsk) Variation",
      difficulty: "advanced",
      description:
        "Black develops the bishop to b7 after b5, creating pressure on e4 while maintaining solidity. A sharp and modern alternative to the main Closed lines, named after the Russian city where it was developed.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Ruy López begins with e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O b5 Bb3, and this line diverges when Black develops the bishop to b7 instead of d6 or Be7, leading to double-edged positions where the Bb7 exerts constant pressure on e4 and enables an early d5 central break that opens the game for both sides.",
        },
        { san: "e5", explanation: "Black claims his share of the center." },
        {
          san: "Nf3",
          explanation: "Develops and attacks e5, gaining a tempo.",
        },
        { san: "Nc6", explanation: "Defends e5 naturally." },
        {
          san: "Bb5",
          explanation: "The Ruy López — pressure on the e5-defender.",
          isKeyMove: true,
        },
        {
          san: "a6",
          explanation: "The Morphy Defence, gaining a tempo on the bishop.",
        },
        {
          san: "Ba4",
          explanation:
            "White keeps the bishop's pressure on the a4-e8 diagonal.",
        },
        { san: "Nf6", explanation: "Black develops and counterattacks e4." },
        {
          san: "O-O",
          explanation:
            "White castles, offering e4 with hidden tactical resources.",
        },
        {
          san: "b5",
          explanation:
            "Black gains queenside space and clears b7 for the bishop — the setup move for the Archangel.",
        },
        {
          san: "Bb3",
          explanation:
            "The bishop drops to b3, still raking the a2-g8 diagonal toward f7.",
        },
        {
          san: "Bb7",
          explanation:
            "The Archangel! The bishop goes to its most aggressive diagonal, bearing down on e4 from afar instead of the passive ...Be7/...d6. Black plays for piece activity and an early ...d5 break rather than a slow defensive setup. Develop your bishop to where it pressures the enemy center.",
          isKeyMove: true,
        },
        {
          san: "d3",
          explanation:
            "White solidly defends e4 with a pawn rather than relying on tactics — a calm response that takes the sting out of the Bb7's pressure on e4.",
        },
        {
          san: "Bc5",
          explanation:
            "Black's other bishop joins on an active diagonal aiming at f2, completing a fast, aggressive development scheme.",
        },
        {
          san: "c3",
          explanation:
            "White supports the center and prepares the d4 break, also giving the b3-bishop a c2 retreat.",
        },
        {
          san: "d6",
          explanation:
            "Black secures e5 and opens a path for the queen, settling the center.",
        },
        {
          san: "Nbd2",
          explanation:
            "White develops the last knight toward f1 and g3 — the familiar Ruy López rerouting toward the kingside.",
        },
        {
          san: "O-O",
          explanation:
            "Black castles, and a rich, double-edged middlegame begins with chances for both wings.",
        },
      ],
      continuationMoves: [
        {
          san: "Re1",
          idea: "White centralises the rook along the e-file, supporting e4 and preparing central pressure.",
        },
        {
          san: "Re8",
          idea: "Black mirrors — the rook supports e5 and prepares future ...d5 ideas.",
        },
        {
          san: "Nf1",
          idea: "The Ruy López knight maneuver begins — heading for g3 and the kingside.",
        },
        {
          san: "d5",
          idea: "Black strikes in the center before White's kingside attack builds — the Archangel's Bb7 makes this central break very effective.",
        },
        {
          san: "exd5",
          idea: "White captures, opening lines for both sides. The Archangel creates double-edged positions where the Bb7 on the long diagonal battles against White's upcoming Ng3 attack — a rich, dynamic struggle.",
        },
      ],
      continuationIdea:
        "The Archangel is one of Black's sharpest responses to the Ruy López. The Bb7 bears down on the a8-g2 diagonal and creates constant e4 pressure. After ...d5, the game opens up and both pieces become highly active. This is a rich, double-edged opening where Black fights for the initiative from the very start rather than accepting a passive position.",
    },
    {
      id: "breyer-variation",
      name: "Breyer Variation (9...Nb8)",
      difficulty: "advanced",
      description:
        "Black retreats the knight to b8 on move 9 to reroute it to d7, creating an ultra-flexible position. Favoured by World Champions Spassky, Karpov, and Kasparov — this is one of the deepest strategic systems in chess.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Ruy López begins with the full Morphy Defence main line, and this line diverges when Black plays the counterintuitive Nb8 retreat on move 9 to reroute the knight to d7, leading to one of the most strategically profound systems in chess — used by World Champions Spassky, Karpov, and Kasparov for its perfectly flexible position and hidden resources.",
        },
        { san: "e5", explanation: "Black claims his share of the center." },
        {
          san: "Nf3",
          explanation: "Develops and attacks e5, gaining a tempo.",
        },
        { san: "Nc6", explanation: "Defends e5 naturally." },
        {
          san: "Bb5",
          explanation: "The Ruy López — pressure on the e5-defender.",
          isKeyMove: true,
        },
        {
          san: "a6",
          explanation: "The Morphy Defence, gaining a tempo on the bishop.",
        },
        {
          san: "Ba4",
          explanation:
            "White keeps the bishop's pressure on the a4-e8 diagonal.",
        },
        { san: "Nf6", explanation: "Black develops and counterattacks e4." },
        {
          san: "O-O",
          explanation: "White castles, offering e4 with hidden resources.",
        },
        { san: "Be7", explanation: "Black develops and prepares to castle." },
        {
          san: "Re1",
          explanation: "White over-protects e4 and prepares the d4 break.",
        },
        {
          san: "b5",
          explanation: "Black gains queenside space and chases the bishop.",
        },
        { san: "Bb3", explanation: "The bishop drops to b3, still eyeing f7." },
        { san: "d6", explanation: "Black builds the solid d6+e5 chain." },
        {
          san: "c3",
          explanation: "White supports d4 and frees c2 for the bishop.",
        },
        { san: "O-O", explanation: "Black castles, completing development." },
        {
          san: "h3",
          explanation: "Prophylaxis — White stops ...Bg4 before playing d4.",
        },
        {
          san: "Nb8",
          explanation:
            "The Breyer! The knight retreats all the way home — seemingly losing time — to reroute via d7, where it doesn't block the c-pawn or the Bb7's diagonal and supports e5 better. The deepest lesson in the Ruy López: a knight's FUTURE square matters more than the tempo spent reaching it.",
          isKeyMove: true,
        },
        {
          san: "d4",
          explanation:
            "White seizes the moment to play the central break while Black's knight is offside.",
        },
        {
          san: "Nbd7",
          explanation:
            "The knight completes its journey to its ideal post, defending e5 and ready to support ...c5 or jump to b6/f8. Re-routing complete — the piece is now far better placed than it ever was on c6.",
          isKeyMove: true,
        },
        {
          san: "Nbd2",
          explanation:
            "White develops the last knight, heading for the f1-g3 reroute.",
        },
        {
          san: "Bb7",
          explanation:
            "Black's bishop takes the long diagonal to pressure e4 — the Breyer's grip is built on this Bb7 plus the flexible knight on d7.",
        },
        {
          san: "Bc2",
          explanation:
            "White tucks the bishop onto c2, supporting e4 (now contested by the Bb7) and clearing b3 for a future queenside expansion with a4/b3.",
        },
        {
          san: "Re8",
          explanation:
            "Black puts the rook behind e5 and prepares ...Bf8, the flexible defensive regrouping that defines the Breyer.",
        },
      ],
      continuationMoves: [
        {
          san: "Nf1",
          idea: "The knight starts its famous journey — from f1 it heads to g3 or e3 to dominate the center.",
        },
        {
          san: "Bf8",
          idea: "Black repositions the Be7 to f8 — the Breyer's signature flexible defensive setup, preparing ...Bg7.",
        },
        {
          san: "Ng3",
          idea: "The knight arrives on g3, controlling h5 and f5 — a perfect attacking post for the kingside storm.",
        },
        {
          san: "g6",
          idea: "Black prepares ...Bg7, creating the Dragon-like setup that Kasparov mastered in this variation.",
        },
        {
          san: "a4",
          idea: "White opens queenside play, forcing Black to react on both wings simultaneously. The Breyer creates incredibly complex chess — favoured by Spassky, Karpov, and Kasparov for its rich strategic content and hidden resources.",
        },
      ],
      continuationIdea:
        "The Breyer is one of the deepest strategic systems in chess. After the knight's remarkable Nb8-d7 retreat and rerouting maneuver, Black has a perfectly flexible position with the Bb7 pressuring e4. White builds with Ng3 and a4 on the queenside, while Black prepares a kingside counterattack with ...Bg7 and ...f5. Both players must maintain balance on both wings simultaneously — this is the Ruy López at its most sophisticated.",
    },
    {
      id: "marshall-attack",
      name: "Marshall Attack (8...d5)",
      difficulty: "advanced",
      description:
        "Black sacrifices a pawn on move 8 to launch a powerful kingside attack. Developed by Frank Marshall in 1918, this gambit creates a lasting initiative. One of the most famous attacks in all of chess theory.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Ruy López begins with the Morphy Defence main line through castling, and this line diverges when Black sacrifices a pawn on move 8 with d5, leading to one of the most famous gambits in chess theory — a lasting kingside initiative that doesn't evaporate even with accurate defense, developed secretly by Frank Marshall for 11 years before unleashing it against Capablanca in 1918.",
        },
        { san: "e5", explanation: "Black claims his share of the center." },
        {
          san: "Nf3",
          explanation: "Develops and attacks e5, gaining a tempo.",
        },
        { san: "Nc6", explanation: "Defends e5 naturally." },
        {
          san: "Bb5",
          explanation: "The Ruy López — pressure on the e5-defender.",
          isKeyMove: true,
        },
        {
          san: "a6",
          explanation: "The Morphy Defence, gaining a tempo on the bishop.",
        },
        {
          san: "Ba4",
          explanation:
            "White keeps the bishop's pressure on the a4-e8 diagonal.",
        },
        { san: "Nf6", explanation: "Black develops and counterattacks e4." },
        {
          san: "O-O",
          explanation: "White castles, offering e4 with hidden resources.",
        },
        { san: "Be7", explanation: "Black develops and prepares to castle." },
        { san: "Re1", explanation: "White over-protects e4 and prepares d4." },
        {
          san: "b5",
          explanation: "Black gains queenside space and chases the bishop.",
        },
        { san: "Bb3", explanation: "The bishop drops to b3, still eyeing f7." },
        {
          san: "O-O",
          explanation: "Black castles — and now springs the gambit.",
        },
        {
          san: "c3",
          explanation:
            "White prepares d4, the standard slow setup — but Black has a shock prepared.",
        },
        {
          san: "d5",
          explanation:
            "The Marshall Attack! Black blows the center open with a pawn sacrifice, trading a pawn for a long-lasting initiative against White's king. The idea is positional, not a one-move trap: open lines and active pieces that pressure White for 30+ moves. Sometimes a pawn buys a permanent attack.",
          isKeyMove: true,
          wrongMoveWarning:
            "This is the Marshall gambit — Black is sacrificing a pawn for a ferocious attack.",
        },
        {
          san: "exd5",
          explanation:
            "White accepts — declining lets Black equalize comfortably, so the principled test is to take and try to prove the extra pawn matters.",
        },
        {
          san: "Nxd5",
          explanation:
            "Black recaptures with the knight, centralizing it and clearing the way for the coming ...Nxe5 and the queen lift.",
        },
        {
          san: "Nxe5",
          explanation:
            "White grabs the second pawn — declining gives Black free development, so White takes the material and braces to defend.",
          isKeyMove: true,
        },
        {
          san: "Nxe5",
          explanation:
            "Black gives up the knight to demolish White's center and open every line toward the king. This is the gambit's heart: material is secondary to the attack.",
        },
        {
          san: "Rxe5",
          explanation:
            "White must recapture, but the rook is now exposed on e5 and Black's pieces come flooding in with tempo.",
        },
        {
          san: "Nf6",
          explanation:
            "Black regroups the knight toward g4/h5 and clears the way for ...Bd6 and ...Qh4 — assembling the famous Marshall attacking formation.",
        },
      ],
      continuationMoves: [
        {
          san: "Re1",
          idea: "White retreats the rook from e5 back to e1 — it served its purpose attacking, now it supports the center.",
        },
        {
          san: "Bd6",
          idea: "Black's bishop swings to d6, aiming at h2 and setting up the Marshall's signature queen move.",
        },
        {
          san: "h3",
          idea: "White plays prophylactically — preventing Bg4 and buying time, but the Marshall attack keeps generating pressure regardless.",
        },
        {
          san: "Bg4",
          idea: "Black's bishop pins White's Nf3, maintaining pressure and threatening to disrupt White's defenses. This is the Marshall attack in full flow.",
        },
        {
          san: "d4",
          idea: "White must fight back in the center to generate counterplay. Even with perfect defense, the Marshall creates a lasting initiative — which is why Frank Marshall prepared it secretly for 11 years before unleashing it against Capablanca in 1918.",
        },
      ],
      continuationIdea:
        "The Marshall Attack creates a lasting initiative that doesn't evaporate even when White defends accurately. The Bd6-h2 diagonal, the queen on h4, and the rook battery on the e-file all generate constant threats. White has the extra pawn, but defending precisely for 30+ moves under pressure is genuinely difficult. Even the best defenses lead to positions where one slip means a mating attack — and that practical danger is the whole point.",
    },
    {
      id: "berlin-defense",
      name: "Berlin Defence (3...Nf6)",
      difficulty: "advanced",
      description:
        "Black challenges e4 immediately with Nf6 instead of chasing the bishop. After the endgame arising from 4.O-O Nxe4 5.d4, Black has a solid but passive position. The top drawing weapon in elite chess — used by Magnus Carlsen and Vladimir Kramnik.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Ruy López begins with e4 e5 Nf3 Nc6 Bb5, and this line diverges when Black plays Nf6 to counter-attack e4 instead of the standard a6, leading to the famous Berlin Endgame where queens come off early — a deceptively rich positional battleground that became Magnus Carlsen and Vladimir Kramnik's primary drawing weapon at the elite level.",
        },
        { san: "e5", explanation: "Black claims his share of the center." },
        {
          san: "Nf3",
          explanation: "Develops and attacks e5, gaining a tempo.",
        },
        { san: "Nc6", explanation: "Defends e5 naturally." },
        {
          san: "Bb5",
          explanation: "The Ruy López — pressure on the e5-defender.",
          isKeyMove: true,
        },
        {
          san: "Nf6",
          explanation:
            "The Berlin Defence! Black ignores the bishop and counterattacks e4 immediately, heading for a structurally solid (if passive) endgame rather than the sharp Closed lines. Counterattack the center instead of reacting to a threat on the wing.",
          isKeyMove: true,
        },
        {
          san: "O-O",
          explanation:
            "White castles and offers e4 — the d4 push will recover it, leading into the famous Berlin Endgame where White accepts queenless play for a structural pull.",
          isKeyMove: true,
        },
        {
          san: "Nxe4",
          explanation:
            "Black grabs the pawn, fully calculated: the resulting endgame is solid for Black despite looking risky.",
        },
        {
          san: "d4",
          explanation:
            "White hits the center to undermine the e4-knight's support and prepare to regain the pawn — central pressure rather than a direct chase.",
          isKeyMove: true,
        },
        {
          san: "Nd6",
          explanation:
            "Black retreats the knight to hit the b5-bishop and unblock — the only good square, steering into the Berlin Endgame.",
        },
        {
          san: "Bxc6",
          explanation:
            "White gives up the bishop pair to inflict doubled pawns — the same structure-vs-bishops trade as the Exchange Variation, now in an endgame setting.",
        },
        {
          san: "dxc6",
          explanation:
            "Black recaptures with the d-pawn, accepting doubled c-pawns but opening the d-file and gaining the bishop pair in return.",
        },
        {
          san: "dxe5",
          explanation:
            "White grabs e5, and with the d-file open the queens come off next move — entering the famous queenless Berlin middlegame.",
        },
        {
          san: "Nf5",
          explanation:
            "Black activates the knight to f5 rather than allowing more trades — in the endgame, piece activity matters more than ever, so Black keeps a knight that eyes d4 and the kingside.",
        },
      ],
      continuationMoves: [
        {
          san: "Qxd8+",
          idea: "White forces queens off the board — the Berlin Endgame is famous because White enters it deliberately even though it looks harmless for Black.",
        },
        {
          san: "Kxd8",
          idea: "Black recaptures, losing the right to castle. The Berlin Endgame officially begins — Black's king is active in the center but exposed.",
        },
        {
          san: "Nc3",
          idea: "White develops the knight toward d5, aiming to exploit Black's doubled c-pawns and misplaced king.",
        },
        {
          san: "h6",
          idea: "Black prevents Bg5 and prepares kingside expansion. Despite Black's passive-looking position, the doubled c-pawns give two open files and excellent long-term defensive resources.",
        },
        {
          san: "Re1",
          idea: "White centralises the rook, targeting the e5 pawn. The Berlin endgame is deceptively complex — Magnus Carlsen won dozens of games from this 'equal' position by grinding down opponents over 60-80 moves.",
        },
      ],
      continuationIdea:
        "The Berlin Endgame looks drawish but is actually a rich positional battleground. White has the more active pieces and targets the doubled c-pawns; Black has a centralized king, solid structure, and can often activate the rook pair on the c-file and d-file. The reason it became the number one drawing weapon at the top level is that Black can hold with perfect play — but 'perfect play' over 70 moves is nearly impossible.",
    },
  ],
};

export default ruyLopez;
