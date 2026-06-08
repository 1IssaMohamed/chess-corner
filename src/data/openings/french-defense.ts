import type { Opening } from "@/types";

const frenchDefense: Opening = {
  id: "french-defense",
  name: "French Defence",
  side: "black",
  eco: "C00",
  description:
    "A solid and combative defence. Black builds a pawn chain with e6 and d5, aiming for a counterattack against the White center. The French is famous for rich strategic complexity and lasting imbalances.",
  tags: ["e4", "semi-closed", "strategic", "counterplay"],
  lines: [
    {
      id: "advance",
      name: "Advance Variation (3.e5 c5)",
      difficulty: "beginner",
      description:
        "White advances e5 to restrict Black's pieces. We immediately counterattack with c5, fighting the d4 pawn. This is the most principled response to the Advance — fight the center immediately.",
      moves: [
        {
          san: "e4",
          explanation:
            "The French Defence — 1...e6 followed by 2...d5 — is chess's most strategically rich response to 1.e4, immediately staking a claim in the center while building a resilient pawn chain that creates lasting imbalances where White attacks the kingside and Black counterattacks the center with c5. The c8 bishop is the French's one headache — it gets locked behind the e6 pawn — but the tradeoff is a rock-solid structure that is almost impossible for White to break without Black getting powerful central counterplay. Every French game revolves around the same battle: White pushes f4-f5 to crack open the kingside, and Black lashes back with c5-Nc6 to blow up the d4 pawn, and whoever wins their respective attack first decides the game. The French is the opening of fighters — Mikhail Botvinnik, Victor Korchnoi, and Magnus Carlsen all used it as a serious weapon precisely because the resulting positions are so structurally complex that the player with deeper understanding wins.",
        },
        {
          san: "e6",
          explanation:
            "The French Defence! We prepare ...d5 with the e-pawn. The trade-off to know up front: this shuts in our light-squared bishop (the French's lifelong 'problem child'), but in return we get a granite pawn chain and a clear counterattacking plan. Accept one structural flaw in exchange for a rock-solid, plan-rich position.",
          isKeyMove: true,
          wrongMoveWarning:
            "The French starts with 1...e6 — preparing d5 on the next move.",
        },
        {
          san: "d4",
          explanation:
            "White builds the ideal big center with both central pawns.",
        },
        {
          san: "d5",
          explanation:
            "The key French move — we challenge e4 directly. White must resolve the tension: push (e5), trade (exd5), or defend (Nc3/Nd2), and each choice defines a different French.",
          isKeyMove: true,
        },
        {
          san: "e5",
          explanation:
            "The Advance Variation — White grabs space and locks the center, gaining room and shutting out our f6-knight. But the pawn chain (d4-e5) has a base on d4, and that base is exactly what we'll attack.",
        },
        {
          san: "c5",
          explanation:
            "We strike at once! The golden rule in a locked pawn chain: attack the BASE, where it's least defended. White's chain runs e5→d4, so d4 is the base, and ...c5 hits it. This break is the heartbeat of the whole French. Don't sit passively behind a closed center — undermine its foundation.",
          isKeyMove: true,
          wrongMoveWarning:
            "After e5, we ALWAYS play c5 immediately — attacking White's d4 pawn.",
        },
        {
          san: "c3",
          explanation:
            "White props up the d4 base with the c-pawn — the Milner-Barry/main-line setup, holding the chain together.",
        },
        {
          san: "Nc6",
          explanation:
            "We develop with a second attacker on d4, increasing the pressure on the base of the chain.",
          isKeyMove: true,
        },
        {
          san: "Nf3",
          explanation:
            "White develops and defends d4 a third time — the battle for the base intensifies.",
        },
        {
          san: "Qb6",
          explanation:
            "A classic French double-attack: the queen hits the d4-pawn AND the b2-pawn behind it. The queen on b6 is a permanent thorn, pressuring d4 from a square no minor piece can easily chase. Pile on the chain's base from every angle.",
          isKeyMove: true,
        },
        {
          san: "Bd3",
          explanation:
            "White develops but leaves d4 loose — the Milner-Barry Gambit, offering the d4-pawn for fast development and attacking lines toward our king. A trap is being set.",
        },
        {
          san: "cxd4",
          explanation:
            "We capture, beginning to collect the d4-pawn the gambit offers — but carefully, knowing White wants open lines.",
          isKeyMove: true,
        },
        {
          san: "cxd4",
          explanation:
            "White recaptures, keeping a pawn on d4 for the moment but with an exposed structure.",
        },
        {
          san: "Bd7",
          explanation:
            "Crucial prophylaxis: we develop the bishop to d7 FIRST so that after we win the d4-pawn, the c6-knight is defended and there's no Bb5+ or Nb5 fork. Prepare the safety net before you grab the pawn.",
          isKeyMove: true,
        },
        {
          san: "O-O",
          explanation:
            "White castles, betting that open lines and a development lead outweigh the pawn.",
        },
        {
          san: "Nxd4",
          explanation:
            "Now we collect the pawn — safely, because ...Bd7 already covered the tactics. Patience before greed.",
          isKeyMove: true,
        },
        { san: "Nxd4", explanation: "White recaptures with the knight." },
        {
          san: "Qxd4",
          explanation:
            "We win the pawn and reach a sound position — but the next move is a tightrope (see the continuation). The point: we're up material with a solid structure, IF we don't get greedy.",
        },
      ],
      continuationMoves: [
        {
          san: "Nc3",
          idea: "White develops a piece — looks normal. But this is all part of the Milner-Barry trap: White wants us to get greedy.",
        },
        {
          san: "Qxe5",
          idea: "We grab the e5 pawn too — we're up two pawns now! But our queen is out in the open with White's pieces developing fast. This is dangerous.",
        },
        {
          san: "Re1",
          idea: "The trap springs: the rook pins our queen to the e-file. The queen has nowhere safe to go.",
        },
        {
          san: "Qd6",
          idea: "The only reasonable retreat — we back the queen to d6. But now the knight is coming.",
        },
        {
          san: "Nb5",
          idea: "White's knight forks our queen on d6 and the c7 square simultaneously. This is the punishment for taking too many pawns. The lesson: in the Milner-Barry, don't grab with ...Qxe5 — play calmly and convert the extra pawn without overreaching.",
        },
      ],
      continuationIdea:
        "Careful — this is the Milner-Barry Gambit. White has deliberately sacrificed the d4 (and if we grab it, the e5) pawn to rip open lines at our king: Nc3-b5 hits the loose queen and the c7/d6 squares, Re1 swings to the e-file, and the Bd3 eyes h7. We're up material, but walking a tightrope. The lesson of this line is to KNOW the danger — snatching everything with ...Qxe5 invites a vicious attack; calm, accurate defence converts the extra pawn.",
    },
    {
      id: "exchange",
      name: "Exchange Variation (3.exd5)",
      difficulty: "beginner",
      description:
        "White captures on d5, leading to a symmetrical position. The Exchange French is very drawish — White has little winning chances and Black has easy development. Good for learning the basics.",
      moves: [
        {
          san: "e4",
          explanation:
            "The French starts with e4 e6 d4 d5, and this line diverges when White plays exd5 immediately — the Exchange Variation — leading to a fully symmetrical pawn structure where Black's c8 bishop is immediately free to develop, trading the French's main structural weakness for a sterile but completely equal position where White has very little winning potential.",
        },
        {
          san: "e6",
          explanation: "The French Defence — preparing ...d5.",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White builds the center." },
        {
          san: "d5",
          explanation: "We challenge e4 directly.",
          isKeyMove: true,
        },
        {
          san: "exd5",
          explanation:
            "The Exchange Variation — White releases the tension into total symmetry. Ironically, this hands us our biggest wish: with the e-file open, our 'problem' c8-bishop is suddenly free. White trades all winning chances for a quiet game.",
        },
        {
          san: "exd5",
          explanation:
            "We recapture, and the position is symmetric — but crucially the c8-bishop now has the open diagonal it never gets in other French lines. The French's one drawback has vanished.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Exchange French, we recapture exd5 — keeping the symmetric structure.",
        },
        { san: "Nf3", explanation: "White develops." },
        {
          san: "Nf6",
          explanation:
            "We develop naturally — in a symmetric structure, just mirror good moves and rely on equal chances.",
          isKeyMove: true,
        },
        {
          san: "Bd3",
          explanation: "White develops the bishop toward the kingside.",
        },
        {
          san: "Bd6",
          explanation:
            "We mirror, the bishop active on d6 eyeing h2. With the position symmetric, copying keeps things equal until someone finds a real plan.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles." },
        {
          san: "O-O",
          explanation:
            "We castle — fully equal, both bishops active, no weaknesses. Now we can even play for a win with active piece placement.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops and pressures d5." },
        {
          san: "Nc6",
          explanation:
            "We develop and defend d5 — symmetric, balanced, comfortable.",
          isKeyMove: true,
        },
        {
          san: "Bg5",
          explanation:
            "White pins the f6-knight to break the symmetry and create play.",
        },
        {
          san: "h6",
          explanation:
            "We question the bishop, forcing it to declare — the standard response to a pin.",
          isKeyMove: true,
        },
        {
          san: "Bh4",
          explanation: "White keeps the pin, hoping for kingside chances.",
        },
        {
          san: "g5",
          explanation:
            "We break the pin by force — bold, but sound here because our king is still on g8 with plenty of cover and we gain the e4-square for our knight. When you have a concrete follow-up, a small king-side loosening is worth seizing the initiative.",
          isKeyMove: true,
        },
      ],
      continuationMoves: [
        {
          san: "Bg3",
          idea: "White retreats the bishop — the g5 push worked!",
        },
        {
          san: "Ne4",
          idea: "We centralise the knight to e4 — an excellent outpost in the symmetric structure.",
        },
        {
          san: "Nxe4",
          idea: "White trades the knight, resolving the central tension.",
        },
        {
          san: "dxe4",
          idea: "We recapture — our d-pawn advances to e4, creating a strong passed pawn.",
        },
        {
          san: "c3",
          idea: "White blockades the e4 pawn. The Exchange French is genuinely equal — the g5-Ne4 plan gives Black active piece play and an advanced e4 pawn to work with.",
        },
      ],
      continuationIdea:
        "The Exchange French gives Black a completely equal and comfortable game. The g5-Ne4 plan is the most active approach — chase the bishop, centralise the knight, and fight for the initiative. White has very few winning chances in this structure.",
    },
    {
      id: "tarrasch",
      name: "Tarrasch Variation (3.Nd2 c5)",
      difficulty: "intermediate",
      description:
        "White plays Nd2 instead of Nc3, avoiding the Winawer pin. We respond with c5, fighting for the center. The Tarrasch leads to positions where Black's c5 counterattack is the central theme.",
      moves: [
        {
          san: "e4",
          explanation:
            "The French starts with e4 e6 d4 d5, and this line diverges when White plays Nd2 instead of Nc3 — the Tarrasch Variation — leading to a position where White sidesteps the Winawer Bb4 pin entirely, and Black's c5 counter creates an IQP structure where active piece play and the open d-file compensate for the isolated pawn's long-term weakness.",
        },
        {
          san: "e6",
          explanation: "The French Defence — preparing ...d5.",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White builds the center." },
        {
          san: "d5",
          explanation: "We challenge e4 directly.",
          isKeyMove: true,
        },
        {
          san: "Nd2",
          explanation:
            "The Tarrasch — White develops the knight to d2 (not c3) specifically to avoid the ...Bb4 pin. The cost: the knight on d2 is more passive and blocks the c1-bishop, which we'll exploit with an immediate central strike.",
        },
        {
          san: "c5",
          explanation:
            "We hit d4 at once. Because the d2-knight is passive and doesn't defend d4 as well, the immediate ...c5 is even stronger here than usual — strike the center while White's pieces are awkwardly placed.",
          isKeyMove: true,
          wrongMoveWarning:
            "Against the Tarrasch, we play c5 immediately — the most active response.",
        },
        { san: "exd5", explanation: "White resolves the central tension." },
        {
          san: "exd5",
          explanation:
            "We recapture toward the center, accepting that d5 may become isolated. The bonus: with the e-file open, our light-squared bishop is free at last. We trade a slight structural risk for active pieces.",
          isKeyMove: true,
        },
        {
          san: "Ngf3",
          explanation: "White develops, heading to blockade the d-pawn.",
        },
        {
          san: "Nc6",
          explanation:
            "We develop and defend d5, contesting the center with pieces.",
          isKeyMove: true,
        },
        {
          san: "Bb5",
          explanation:
            "White pins the c6-knight (the Rubinstein-style setup) to pressure the d-pawn's defender.",
        },
        {
          san: "Bd6",
          explanation:
            "We develop the bishop to its best square, aiming at h2 — active piece play is the IQP-holder's lifeblood.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles to safety." },
        {
          san: "Nge7",
          explanation:
            "We develop the knight via e7 (keeping f6 clear for the other pieces and heading for g6/f5), preparing to castle. Route the knight where it supports the attack, not where it blocks your own bishop.",
          isKeyMove: true,
        },
        {
          san: "dxc5",
          explanation:
            "White trades to leave our d-pawn isolated as a long-term target.",
        },
        {
          san: "Bxc5",
          explanation:
            "We recapture with the bishop, keeping it active on the a7-g1 diagonal — activity over structure.",
          isKeyMove: true,
        },
        {
          san: "Nb3",
          explanation:
            "White hits the bishop, trying to trade off our active pieces.",
        },
        {
          san: "Bb6",
          explanation:
            "We retreat but keep the bishop on its strong diagonal — Black has free, active pieces and the open d/e-files as full compensation for the isolated pawn.",
        },
      ],
      continuationMoves: [
        {
          san: "Bxc6+",
          idea: "White captures on c6, giving check — trading the bishop for the strong Nc6.",
        },
        {
          san: "bxc6",
          idea: "We recapture with the b-pawn, opening the b-file. The doubled c-pawns are slightly weak but the open b-file and active pieces compensate.",
        },
        {
          san: "Re1",
          idea: "White centralises the rook, fighting for the e-file.",
        },
        {
          san: "O-O",
          idea: "We castle — the king is safe and we have excellent piece activity.",
        },
        {
          san: "c4",
          idea: "White strikes with c4, fighting against our d5 pawn. The Tarrasch IQP gives Black active bishops, an open d-file, and excellent piece play — the classic IQP compensation.",
        },
      ],
      continuationIdea:
        "The Tarrasch's IQP gives Black active, well-placed pieces and the open d-file. The plan is to use the Bd6-Ng6 battery against h2 and the d-file pressure to create a kingside attack. If White manages to blockade the d5 pawn and reach an endgame, the isolated pawn becomes a weakness — so Black must act quickly.",
    },
    {
      id: "classical",
      name: "Classical Variation (3.Nc3 Nf6 4.Bg5)",
      difficulty: "intermediate",
      description:
        "White plays Nc3 and Bg5, pinning the Nf6. We must decide whether to maintain the pin or break it. The Classical leads to rich strategic battles with White's central pawn chain vs Black's counterattack.",
      moves: [
        {
          san: "e4",
          explanation:
            "The French starts with e4 e6 d4 d5 Nc3, and this line diverges when White plays Bg5 to pin the Nf6 — the Classical Variation — leading to a battle between White's f4 kingside space and Black's c5-Nc6 queenside counterplay, with the Be7 breaking the pin and the resulting pawn structure creating one of chess's great strategic imbalances where the side with better long-term planning wins.",
        },
        {
          san: "e6",
          explanation: "The French Defence — preparing ...d5.",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White builds the center." },
        {
          san: "d5",
          explanation: "We challenge e4 directly.",
          isKeyMove: true,
        },
        {
          san: "Nc3",
          explanation:
            "White defends e4 by developing, keeping the central tension.",
        },
        {
          san: "Nf6",
          explanation:
            "We develop and add a second attacker to e4 — forcing White to resolve the central tension. Pressure the e4-pawn to make White commit.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Classical French, Nf6 — fighting for the center with the knight.",
        },
        {
          san: "Bg5",
          explanation:
            "White pins our f6-knight (a key defender of e4) to the queen — the Classical, ratcheting up the pressure on the center.",
        },
        {
          san: "Be7",
          explanation:
            "We quietly break the pin by backing up the knight. On e7 the bishop is modest but solid, ready to recapture if White trades on f6, and it shelters our king. Unpin calmly rather than weakening with ...h6/...g5 here.",
          isKeyMove: true,
        },
        {
          san: "e5",
          explanation:
            "White pushes, gaining space and kicking the f6-knight — the center locks and the classic French battle (White's kingside vs Black's center) begins.",
        },
        {
          san: "Nfd7",
          explanation:
            "Essential French technique: the kicked knight retreats to d7 (not e4/g8), where it supports the coming ...c5 and ...f6 breaks against White's chain. Whenever e5 hits your f6-knight in the French, ...Nfd7 is almost always right.",
          isKeyMove: true,
        },
        {
          san: "Bxe7",
          explanation:
            "White trades the dark-squared bishops, the pin having done its job.",
        },
        {
          san: "Qxe7",
          explanation:
            "We recapture with the queen (keeping it active and connecting toward the queenside), rather than the cramped ...Kxe7. The queen will support ...c5 and the central fight.",
          isKeyMove: true,
        },
        {
          san: "f4",
          explanation:
            "White reinforces e5 and prepares the f5 break — the kingside pawn storm takes shape.",
        },
        {
          san: "O-O",
          explanation:
            "We castle to safety before opening the center — get the king tucked away before the storm.",
          isKeyMove: true,
        },
        {
          san: "Nf3",
          explanation:
            "White develops, defending d4 and supporting the kingside push.",
        },
        {
          san: "c5",
          explanation:
            "The whole opening has built to this — we strike the base of White's chain (d4). This is the French's defining counterblow; everything else was preparation for it.",
          isKeyMove: true,
        },
        {
          san: "Qd2",
          explanation:
            "White reinforces d4 and connects toward queenside castling or the kingside attack.",
        },
        {
          san: "Nc6",
          explanation:
            "We pile a second attacker onto d4, maximizing the pressure on the chain's base.",
        },
      ],
      continuationMoves: [
        {
          san: "dxc5",
          idea: "White captures — now our d5 pawn is isolated but very active.",
        },
        {
          san: "Nxc5",
          idea: "We recapture with the knight, immediately occupying the strong c5 outpost.",
        },
        {
          san: "Nd4",
          idea: "White's knight jumps to d4, fighting for central control.",
        },
        {
          san: "Nxd4",
          idea: "We trade on d4 — simplifying and keeping our piece activity.",
        },
        {
          san: "Qxd4",
          idea: "White recaptures. The Classical French c5 counterattack gives Black excellent piece activity — the strategic battle revolves around White's f4 pawn attack vs Black's queenside counterplay.",
        },
      ],
      continuationIdea:
        "The Classical French is a battle of White's kingside f4-f5 attack versus Black's c5-Nc6-Nb4 queenside counterplay. Black's plan after the c5 break is to trade pieces on d4 and use the active Nd7-f8-e6 maneuver to fight the e5 pawn. The closed center makes this a long, strategic fight.",
    },
    {
      id: "winawer",
      name: "Winawer Variation (3...Bb4)",
      difficulty: "intermediate",
      description:
        "Black pins the c3 knight with Bb4, creating immediate tension. The Winawer leads to extremely sharp positions — one of the most theoretically rich openings in chess, beloved by elite players.",
      moves: [
        {
          san: "e4",
          explanation:
            "The French starts with e4 e6 d4 d5 Nc3, and this line diverges when Black pins immediately with Bb4 — the Winawer Variation — leading to the sharpest and most theoretically explosive system in the French Defence where Black doubles White's c-pawns and gets the open c-file, launching a kingside vs queenside tactical race that has fueled elite chess debates for a century.",
        },
        {
          san: "e6",
          explanation: "The French Defence — preparing ...d5.",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White builds the center." },
        {
          san: "d5",
          explanation: "We challenge e4 directly.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White defends e4 by developing." },
        {
          san: "Bb4",
          explanation:
            "The Winawer! We pin the c3-knight — the defender of e4 — so that we threaten ...dxe4 winning a pawn, forcing White to push e5 and commit. The deeper idea: we're prepared to trade this bishop for the knight to shatter White's queenside pawns. Pin the defender to dictate the center.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Winawer, Bb4 is the defining move — pinning the knight for maximum tension.",
        },
        {
          san: "e5",
          explanation:
            "White pushes to keep e4 (otherwise ...dxe4 wins a pawn off the pin). The center locks, and a fierce opposite-wing battle begins: White's kingside vs our queenside.",
        },
        {
          san: "c5",
          explanation:
            "We strike the base of the chain (d4) immediately — the standard Winawer counterblow, opening the position against White's center before he can use his space.",
          isKeyMove: true,
        },
        {
          san: "a3",
          explanation:
            "White 'puts the question' — forcing us to either retreat the bishop or trade it for the knight (the Poisoned Pawn main line).",
        },
        {
          san: "Bxc3+",
          explanation:
            "We take! The whole point of the Winawer: we give up the bishop pair to permanently DOUBLE and cripple White's c-pawns. We're betting that the long-term structural damage outweighs the two bishops. Trade a bishop for lasting structural ruin.",
          isKeyMove: true,
        },
        {
          san: "bxc3",
          explanation:
            "White recaptures, and now has doubled, weak c-pawns and an open b-file — the structural scar we were after.",
        },
        {
          san: "Ne7",
          explanation:
            "We develop the knight via e7 (not f6, blocked by e5), heading for f5 to attack the weak d4/e3 dark squares — routing toward White's weaknesses.",
          isKeyMove: true,
        },
        {
          san: "Qg4",
          explanation:
            "White pivots to attack: the queen hits g7, exploiting that ...Bxc3 left our kingside dark squares loose. The Poisoned Pawn race is on.",
        },
        {
          san: "Qc7",
          explanation:
            "The critical Poisoned Pawn choice: we DON'T defend g7 — we hit e5 and set up ...Rg8 to chase the queen, judging that our queenside counterplay is faster than White's pawn-grab. Calculated greed: let White take a wing pawn while we open lines toward his king.",
          isKeyMove: true,
        },
        {
          san: "Qxg7",
          explanation:
            "White grabs g7 — a real pawn, but the queen is now far from home and about to be harassed.",
        },
        {
          san: "Rg8",
          explanation:
            "We hit the queen, forcing it offside to h7, and gain a tempo plus the open g-file toward White's king. The pawn White won comes at the cost of his queen's position.",
          isKeyMove: true,
        },
        {
          san: "Qxh7",
          explanation:
            "White snatches a second pawn, but the queen is now buried in the corner, out of the real battle.",
        },
        {
          san: "cxd4",
          explanation:
            "We cash in our counterplay, opening the c-file and lines against White's wrecked queenside while his queen is on vacation.",
        },
      ],
      continuationMoves: [
        {
          san: "cxd4",
          idea: "White captures on d4. We now have an open c-file and strong counterplay despite being behind on pawns.",
        },
        {
          san: "Nd7",
          idea: "Our knight heads to d7, preparing to jump to f8 and then e6 to fight the e5 pawn.",
        },
        {
          san: "Nf3",
          idea: "White develops — the knight joins the fight for d4.",
        },
        {
          san: "Nc5",
          idea: "Our knight reaches the strong c5 outpost, attacking d3 and b3.",
        },
        {
          san: "Bb2",
          idea: "White develops the bishop. The Winawer's Qxg7-Rg8 counterplay shows the whole point: the queen is awkwardly stuck and our active pieces compensate for the sacrificed pawns.",
        },
      ],
      continuationIdea:
        "The Winawer Poisoned Pawn is one of chess's most analyzed positions. After Qxg7 Rg8 Qxh7, Black has sacrificed two pawns but gotten the queen stuck on h7 and created powerful counterplay with the Ne7-f5 attack and open c-file. White must navigate extremely complex positions where Black's initiative can be devastating.",
    },
    {
      id: "rubinstein",
      name: "Rubinstein Variation (3...dxe4)",
      difficulty: "intermediate",
      description:
        "Instead of challenging with d5, Black captures on e4 immediately, relieving central tension. This leads to a different type of French where Black avoids the closed pawn structure — easier to play.",
      moves: [
        {
          san: "e4",
          explanation:
            "The French starts with e4 e6 d4 d5 Nc3, and this line diverges when Black captures dxe4 immediately — the Rubinstein Variation — leading to the most accessible French system where the tension is released early, the c8 bishop is never locked in, and Black gets easy piece development and a comfortable, equality-oriented position that requires no theoretical preparation.",
        },
        {
          san: "e6",
          explanation: "The French Defence — preparing ...d5.",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White builds the center." },
        {
          san: "d5",
          explanation: "We challenge e4 directly.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White defends e4 by developing." },
        {
          san: "dxe4",
          explanation:
            "The Rubinstein! We release the tension immediately, conceding the center for a simpler game. The big payoff: with ...e6 not yet sealed behind a fixed e5-pawn, the c8-bishop will get out (often via ...b6/...Bb7 or ...Bd7-c6). We swap central tension for solving the French's bad-bishop problem.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Rubinstein plays dxe4 — releasing the tension and simplifying.",
        },
        {
          san: "Nxe4",
          explanation:
            "White recaptures, with a freer position and more space — the cost of our simplification.",
        },
        {
          san: "Nd7",
          explanation:
            "We develop flexibly, preparing ...Ngf6 to challenge the e4-knight WITHOUT allowing a structure-damaging recapture on f6 (since the d7-knight can recapture). Order your knights so trades don't wreck your pawns.",
          isKeyMove: true,
        },
        { san: "Nf3", explanation: "White develops, controlling e5." },
        {
          san: "Ngf6",
          explanation:
            "We challenge the e4-knight, backed by the d7-knight so we recapture cleanly.",
          isKeyMove: true,
        },
        { san: "Nxf6+", explanation: "White trades, simplifying further." },
        {
          san: "Nxf6",
          explanation:
            "We recapture with the knight (not the g-pawn), keeping a sound structure. Black has a solid, slightly passive but weakness-free position that's very easy to play.",
          isKeyMove: true,
        },
        { san: "Bd3", explanation: "White develops actively, eyeing h7." },
        {
          san: "c5",
          explanation:
            "We strike at d4 — the French's freeing break appears here too, opening lines and giving our pieces (including the soon-to-be-developed light bishop) real scope.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles to safety." },
        {
          san: "Be7",
          explanation:
            "We develop and prepare to castle, untroubled by the usual French cramp.",
          isKeyMove: true,
        },
        {
          san: "Qe2",
          explanation: "White centralizes the queen, connecting the rooks.",
        },
        {
          san: "O-O",
          explanation:
            "We castle — fully developed and comfortably equal, with no bad bishop to worry about.",
        },
      ],
      continuationMoves: [
        {
          san: "dxc5",
          idea: "White captures the c5 pawn — now we can recapture and win it back with activity.",
        },
        {
          san: "Bxc5",
          idea: "We recapture with the bishop — landing on a very active square.",
        },
        {
          san: "Nd4",
          idea: "White's knight jumps to the strong d4 outpost, attacking our Bc5.",
        },
        {
          san: "Bb6",
          idea: "We retreat the bishop to b6, keeping it active and safe.",
        },
        {
          san: "c4",
          idea: "White attacks d5. The Rubinstein is one of the easiest French systems — no blocked c8 bishop, no cramped positions. Black just develops normally and gets complete equality.",
        },
      ],
      continuationIdea:
        "The Rubinstein is Black's most solid and straightforward French system. By capturing dxe4 early, Black releases the central tension and gets easy development — no locked c8 bishop, no cramped positions. The resulting game is roughly equal with good counterplay for Black.",
    },
    {
      id: "kia-vs-french",
      name: "King's Indian Attack vs French",
      difficulty: "intermediate",
      description:
        "White plays a King's Indian Attack setup with Nf3, g3, and Bg2 against the French structure. Black should play actively in the center with c5 and Nc6 to avoid being slowly outplayed by White's kingside pressure.",
      moves: [
        {
          san: "e4",
          explanation:
            "The French starts with e4 e6, and this line diverges when White plays d3 instead of d4 — the King's Indian Attack — leading to a slower, fianchetto-based fight where White builds the g3-Bg2-Nf3 setup and tries to push e5 later, while Black's c5-Nc6-b5 queenside expansion is the antidote that creates excellent counterplay before the kingside attack can develop.",
        },
        {
          san: "e6",
          explanation: "The French Defence — preparing ...d5.",
          isKeyMove: true,
        },
        {
          san: "d3",
          explanation:
            "White declines the big center for a King's Indian Attack — a flexible, system-based setup aiming for a later e5 and a kingside attack.",
        },
        {
          san: "d5",
          explanation:
            "We grab the center anyway. Against White's modest d3, our full center gives us more space — punish a passive setup by taking the space it concedes.",
          isKeyMove: true,
        },
        {
          san: "Nd2",
          explanation:
            "White develops the knight, keeping the e-pawn supported and preparing Ngf3.",
        },
        {
          san: "Nf6",
          explanation: "We develop naturally, guarding e4 and d5.",
          isKeyMove: true,
        },
        {
          san: "Ngf3",
          explanation: "White develops, heading for the e5 advance later.",
        },
        {
          san: "c5",
          explanation:
            "Critical: we grab queenside space and prepare the ...b5-b4 expansion. Against the KIA, our attack is on the queenside (where our pawns point) — and we must get it rolling before White's kingside e5/Nf1-g3 attack arrives. Attack where your pawns aim.",
          isKeyMove: true,
          wrongMoveWarning:
            "Against the KIA, c5 is critical — we must fight for the center.",
        },
        {
          san: "g3",
          explanation:
            "White begins the fianchetto, the signature of the KIA setup.",
        },
        {
          san: "Nc6",
          explanation:
            "We develop and support our center, the knight ready to back the queenside expansion.",
          isKeyMove: true,
        },
        {
          san: "Bg2",
          explanation:
            "White completes the fianchetto, the bishop eyeing our queenside and center from g2.",
        },
        {
          san: "Be7",
          explanation:
            "We develop modestly and prepare to castle — flexible, keeping the bishop ready to support ...b5-b4 or reroute.",
          isKeyMove: true,
        },
        {
          san: "O-O",
          explanation:
            "White castles, ready to start the slow kingside build-up.",
        },
        {
          san: "O-O",
          explanation:
            "We castle — but our king won't sit idle; we're racing on the queenside while White builds on the kingside.",
          isKeyMove: true,
        },
        {
          san: "Re1",
          explanation:
            "White over-protects e4 and prepares the e5 push, the start of the KIA's kingside plan.",
        },
        {
          san: "b5",
          explanation:
            "We launch the queenside attack BEFORE White's e5 lands. In these opposite-wing races, speed is everything — get your pawns rolling first. ...b5-b4 will pry open lines toward White's king.",
          isKeyMove: true,
        },
        {
          san: "e5",
          explanation:
            "White finally pushes e5, gaining kingside space and kicking our f6-knight.",
        },
        {
          san: "Nd7",
          explanation:
            "The thematic retreat to d7, where the knight supports the ...c4 break and can reroute to b6/c5 — exactly as in the main French lines. Reposition the knight to feed your own attack.",
          isKeyMove: true,
        },
      ],
      continuationMoves: [
        {
          san: "Nf1",
          idea: "White repositions the knight toward g3 for a kingside attack.",
        },
        {
          san: "c4",
          idea: "We strike in the center! The c4 break challenges White's center before the kingside attack builds.",
        },
        {
          san: "dxc4",
          idea: "White captures, opening the d-file.",
        },
        {
          san: "bxc4",
          idea: "We recapture with the b-pawn, gaining queenside space.",
        },
        {
          san: "N1d2",
          idea: "White's knight repositions — the kingside attack is building. Against the KIA, our b5-c4 expansion on the queenside races against White's Nd2-f1-g3 kingside attack — a classic French strategic battle.",
        },
      ],
      continuationIdea:
        "Against the King's Indian Attack, our b5-c4 queenside expansion is the key plan. We race White's kingside attack with our own queenside pressure — b4 hits the Nc3 or creates a passed pawn, while c4 undermines White's d3 pawn. Black's counterplay is excellent when the queenside pawns advance quickly.",
    },
    {
      id: "maccutcheon",
      name: "MacCutcheon Variation (4...Bb4)",
      difficulty: "advanced",
      description:
        "After the Classical main line setup, Black pins the Nc3 with Bb4 instead of playing Be7. This creates immediate tactical complications and is more aggressive than the Classical main line.",
      moves: [
        {
          san: "e4",
          explanation:
            "The French starts with e4 e6 d4 d5 Nc3 Nf6 Bg5, and this line diverges when Black plays Bb4 to pin the Nc3 — the MacCutcheon Variation — leading to one of the most aggressive and tactical French systems where Bxc3 doubles White's c-pawns and the Ne4 central outpost creates immediate attacking chances that transform the normally strategic French into a sharp tactical battle.",
        },
        {
          san: "e6",
          explanation: "The French Defence — preparing ...d5.",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White builds the center." },
        {
          san: "d5",
          explanation: "We challenge e4 directly.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White defends e4 by developing." },
        {
          san: "Nf6",
          explanation: "We develop and add a second attacker to e4.",
          isKeyMove: true,
        },
        {
          san: "Bg5",
          explanation: "White pins our f6-knight — the Classical setup.",
        },
        {
          san: "Bb4",
          explanation:
            "The MacCutcheon! Instead of the meek ...Be7, we COUNTER-pin: our bishop pins White's c3-knight (defender of e4), creating mutual pins and immediate tactical tension. Answer a pin with a pin to seize the initiative.",
          isKeyMove: true,
          wrongMoveWarning:
            "The MacCutcheon plays Bb4 after Bg5 — pinning the Nc3 for double trouble.",
        },
        {
          san: "e5",
          explanation:
            "White pushes, kicking our f6-knight and gaining space — but our pins still bite.",
        },
        {
          san: "h6",
          explanation:
            "We question the g5-bishop before deciding our knight's path — forcing White to commit the bishop first. Insert a useful tempo move before resolving the central tension.",
          isKeyMove: true,
        },
        {
          san: "Bd2",
          explanation:
            "White retreats to keep the tension (Bxf6 or exf6 would help us), unpinning his own pieces.",
        },
        {
          san: "Bxc3",
          explanation:
            "We take, doubling White's c-pawns — the MacCutcheon's structural payoff, the same crippling idea as the Winawer. We give up the bishop for lasting damage.",
          isKeyMove: true,
        },
        {
          san: "bxc3",
          explanation: "White recaptures, accepting the doubled c-pawns.",
        },
        {
          san: "Ne4",
          explanation:
            "Our knight leaps to the dominant e4 outpost (the f6-knight was about to be kicked by e5 anyway), hitting White's d2-bishop and dominating the center. Turn a soon-to-be-kicked piece into a powerful central one.",
          isKeyMove: true,
        },
        {
          san: "Qg4",
          explanation:
            "White switches to attack, the queen hitting g7 to exploit our loosened dark squares — the sharp tactical phase begins.",
        },
        {
          san: "g6",
          explanation:
            "We defend g7 by shielding it, accepting a slight dark-square weakening — necessary, and our central knight and queenside play compensate. Defend the concrete threat, then rely on your trumps.",
          isKeyMove: true,
        },
        {
          san: "h4",
          explanation:
            "White lunges the h-pawn, opening lines toward our slightly loosened kingside.",
        },
        {
          san: "c5",
          explanation:
            "We hit the d4 base and counterattack before White's kingside assault lands — racing on the center/queenside as always in the French. Counter in the center against a wing attack.",
          isKeyMove: true,
        },
      ],
      continuationMoves: [
        {
          san: "dxc5",
          idea: "White captures the c5 pawn — opening lines before we can consolidate.",
        },
        {
          san: "Nc6",
          idea: "We develop the knight — fighting back in the center and threatening to win the c5 pawn.",
        },
        {
          san: "Nf3",
          idea: "White develops, supporting the advanced pawns.",
        },
        {
          san: "Ne7",
          idea: "Our knight heads toward d5 or f5 — the ideal outpost squares.",
        },
        {
          san: "Bd3",
          idea: "White develops. The MacCutcheon is a bold and aggressive choice — the Bxc3 and Ne4 ideas give Black active, fighting positions. It's the sharpest Classical French line.",
        },
      ],
      continuationIdea:
        "The MacCutcheon's Bxc3 gives up the bishop pair to double White's c-pawns and plant the knight on e4. Combined with g6 and c5, Black creates a powerful counterattacking position. White has the bishop pair but Black's piece activity and central control compensate.",
    },
    {
      id: "steinitz",
      name: "Steinitz Variation (4.e5 c5 5.f4)",
      difficulty: "advanced",
      description:
        "White plays e5 and f4, creating an Advance-like setup but with the knight on c3 already developed. Black fights back with c5 and Nc6, creating maximum central tension.",
      moves: [
        {
          san: "e4",
          explanation:
            "The French starts with e4 e6 d4 d5 Nc3 Nf6, and this line diverges when White plays e5 and then f4 — the Steinitz Variation — leading to White's most aggressive Classical French setup where the f4 pawn creates a kingside pawn storm, met by the critical c5-cxd4-Bc5 counterplay that dissolves the center and gives Black excellent active piece play against White's overextended pawns.",
        },
        {
          san: "e6",
          explanation: "The French Defence — preparing ...d5.",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White builds the center." },
        {
          san: "d5",
          explanation: "We challenge e4 directly.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White defends e4 by developing." },
        {
          san: "Nf6",
          explanation: "We develop and add a second attacker to e4.",
          isKeyMove: true,
        },
        {
          san: "e5",
          explanation:
            "White pushes immediately (the Steinitz), grabbing space and kicking our knight before developing the bishop.",
        },
        {
          san: "Nfd7",
          explanation:
            "The standard French retreat — the knight goes to d7 to support ...c5 and ...f6, never to the rim.",
          isKeyMove: true,
          wrongMoveWarning:
            "After e5, the knight retreats to d7 — this is always the correct French response.",
        },
        {
          san: "f4",
          explanation:
            "White bolsters e5 and prepares the f5 break — the most aggressive Classical setup, building a kingside pawn storm.",
        },
        {
          san: "c5",
          explanation:
            "We hit the d4 base at once — we must open the center NOW before White's f4-f5 storm gathers steam. Counter a pawn storm by breaking in the center immediately.",
          isKeyMove: true,
        },
        { san: "Nf3", explanation: "White develops and defends d4." },
        {
          san: "Nc6",
          explanation:
            "We pile a second attacker onto the d4 base of the chain.",
          isKeyMove: true,
        },
        {
          san: "Be3",
          explanation:
            "White develops and adds another defender to d4 — the fight for the base intensifies.",
        },
        {
          san: "cxd4",
          explanation:
            "We trade to dissolve White's center and open lines for our pieces while White's king is still uncastled.",
          isKeyMove: true,
        },
        {
          san: "Nxd4",
          explanation: "White recaptures, centralizing the knight.",
        },
        {
          san: "Bc5",
          explanation:
            "We develop with a punch — the bishop pins/pressures the d4-knight and eyes f2, exploiting that White's king is stuck in the center. Develop with threats against an uncastled king.",
          isKeyMove: true,
        },
        {
          san: "Qd2",
          explanation:
            "White defends the d4-knight and prepares to castle queenside out of the danger zone.",
        },
        {
          san: "O-O",
          explanation:
            "We castle, fully mobilized with active pieces — the opening problems are solved and our pieces are the more active.",
        },
      ],
      continuationMoves: [
        {
          san: "Qe2",
          idea: "White centralises the queen and defends e5.",
        },
        {
          san: "Nf6",
          idea: "We redevelop the knight to f6, heading for the strong e4 outpost where it will hit White's queen and pieces.",
        },
        {
          san: "f5",
          idea: "White advances! The f-pawn storm continues — this is what the f4 setup was aiming for.",
        },
        {
          san: "Ne4",
          idea: "We centralise the knight — it attacks d2 and forces White to defend.",
        },
        {
          san: "fxe6",
          idea: "White captures on e6, opening the f-file. The Steinitz f4 variation is White's most aggressive Classical French setup, but Black's Bc5 and Ne4 create real counterplay in this sharp position.",
        },
      ],
      continuationIdea:
        "The Steinitz (e5 f4) is White's most aggressive Classical French setup, but Black's c5-cxd4-Bc5 sequence creates excellent counterplay. The Bc5 targets d4 and f2, and after the Nd4-Nxc6 trade, the open b-file gives Black a rook battery. White's f4 space is real but Black has concrete counterplay.",
    },
    {
      id: "two-knights-french",
      name: "Two Knights French (3.Nc3 Nf6 4.e5 Nd7 5.f4)",
      difficulty: "advanced",
      description:
        "White plays Nc3 and then e5 in the Classical French, and Black responds with the knight retreating to d7 while preparing c5 counterplay. The arising positions are rich with attacking chances for both sides.",
      moves: [
        {
          san: "e4",
          explanation:
            "The French starts with e4 e6 d4 d5 Nc3 Nf6 e5 Nfd7, and this line diverges when White plays f4 and Black fights back with c5-cxd4-Nxd4 — the Two Knights French — leading to the complete dissolution of White's center where the Bc5 development and Qh4+ check give Black sharp counterplay and dynamic positions despite White's advanced e5 pawn.",
        },
        {
          san: "e6",
          explanation: "The French Defence — preparing ...d5.",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White builds the center." },
        {
          san: "d5",
          explanation: "We challenge e4 directly.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White defends e4 by developing." },
        {
          san: "Nf6",
          explanation: "We develop and add a second attacker to e4.",
          isKeyMove: true,
        },
        {
          san: "e5",
          explanation: "White pushes, gaining space and kicking the knight.",
        },
        {
          san: "Nfd7",
          explanation:
            "The standard retreat — to d7, supporting the coming ...c5 and ...f6 breaks against White's chain. In the French, a knight kicked by e5 belongs on d7.",
          isKeyMove: true,
          wrongMoveWarning:
            "After e5, the knight retreats to d7 — ALWAYS the right move in the French Advance positions.",
        },
        {
          san: "f4",
          explanation:
            "White reinforces e5 and prepares f5 — the kingside pawn storm.",
        },
        {
          san: "c5",
          explanation:
            "We strike the d4 base immediately — opening the center before White's storm builds. Always the French recipe: meet a wing attack with a central counter.",
          isKeyMove: true,
        },
        { san: "Nf3", explanation: "White develops and defends d4." },
        {
          san: "Nc6",
          explanation: "We add a second attacker to the d4 base.",
          isKeyMove: true,
        },
        {
          san: "Be3",
          explanation:
            "White develops, adding a third defender to the contested d4 point.",
        },
        {
          san: "cxd4",
          explanation:
            "We capture to dissolve the center, opening lines while White's king is uncastled.",
          isKeyMove: true,
        },
        { san: "Nxd4", explanation: "White recaptures with the knight." },
        {
          san: "Nxd4",
          explanation:
            "We trade off the strong central knight, dismantling White's pawn center entirely.",
          isKeyMove: true,
        },
        {
          san: "Bxd4",
          explanation:
            "White recaptures with the bishop, the center now fully dissolved.",
        },
        {
          san: "Bc5",
          explanation:
            "We develop with a punch, challenging the d4-bishop and eyeing f2 against White's uncastled king — excellent, active counterplay.",
        },
      ],
      continuationMoves: [
        {
          san: "Qd2",
          idea: "White defends d4 and prepares to castle queenside.",
        },
        {
          san: "Qh4+",
          idea: "We give check! The queen lands on h4 with tempo, creating immediate pressure.",
        },
        {
          san: "g3",
          idea: "White blocks the check — forced.",
        },
        {
          san: "Qe7",
          idea: "We retreat the queen, attacking the e5 pawn. The Two Knights French c5-cxd4 gives Black excellent activity.",
        },
        {
          san: "a3",
          idea: "White prepares queenside expansion. The Two Knights French is a sharp system — the pawn center dissolves quickly and Black's Bc5 + Nxd4 create active fighting positions.",
        },
      ],
      continuationIdea:
        "In the Two Knights French, Black's c5 break dissolves the center and the resulting Bc5 development gives excellent piece activity. The Qh4+ check disrupts White and the Qe7 follow-up targets the e5 pawn. Black has good counterplay in this rich, double-edged position.",
    },
  ],
};

export default frenchDefense;
