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
            "The French Defence! Black builds a solid pawn chain. The e6 pawn supports d5.",
          isKeyMove: true,
          wrongMoveWarning:
            "The French starts with 1...e6 — preparing d5 on the next move.",
        },
        { san: "d4", explanation: "White builds a powerful center." },
        {
          san: "d5",
          explanation:
            "The key French move! We challenge the center immediately.",
          isKeyMove: true,
        },
        {
          san: "e5",
          explanation:
            "The Advance Variation! White claims space with e5 — restricting Black's Nf6.",
        },
        {
          san: "c5",
          explanation:
            "We immediately counterattack! c5 strikes at White's d4 pawn — the most principled response to the Advance.",
          isKeyMove: true,
          wrongMoveWarning:
            "After e5, we ALWAYS play c5 immediately — attacking White's d4 pawn.",
        },
        {
          san: "c3",
          explanation: "White supports d4 — the Milner-Barry setup.",
        },
        {
          san: "Nc6",
          explanation: "We develop the knight, adding more pressure to d4.",
          isKeyMove: true,
        },
        { san: "Nf3", explanation: "White develops." },
        {
          san: "Qb6",
          explanation:
            "Our queen attacks b2 and d4 simultaneously — a powerful double-attack in the Advance French.",
          isKeyMove: true,
        },
        {
          san: "Bd3",
          explanation:
            "White defends — and prepares the Milner-Barry Gambit with O-O.",
        },
        {
          san: "cxd4",
          explanation: "We capture in the center, simplifying.",
          isKeyMove: true,
        },
        { san: "cxd4", explanation: "White recaptures." },
        {
          san: "Bd7",
          explanation: "We develop the c8 bishop before the position closes.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles." },
        {
          san: "Nxd4",
          explanation: "We capture! The d4 pawn falls after our preparations.",
          isKeyMove: true,
        },
        { san: "Nxd4", explanation: "White recaptures with the knight." },
        {
          san: "Qxd4",
          explanation:
            "We take back, winning the pawn. Black has achieved equality with active play.",
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
          explanation: "The French Defence!",
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
            "The Exchange Variation — White simplifies immediately. This leads to symmetrical positions.",
        },
        {
          san: "exd5",
          explanation:
            "We recapture with the e-pawn. The position is now completely symmetrical.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Exchange French, we recapture exd5 — keeping the symmetric structure.",
        },
        { san: "Nf3", explanation: "White develops." },
        {
          san: "Nf6",
          explanation:
            "We develop — in the Exchange French, Black has easy development with the c8 bishop free.",
          isKeyMove: true,
        },
        { san: "Bd3", explanation: "White develops the bishop." },
        {
          san: "Bd6",
          explanation:
            "We develop symmetrically — the light-squared bishops are both active.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles." },
        {
          san: "O-O",
          explanation:
            "We castle! The French Exchange leads to easy, comfortable development for Black.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops." },
        {
          san: "Nc6",
          explanation:
            "We develop the queenside knight — Black has perfect equality.",
          isKeyMove: true,
        },
        { san: "Bg5", explanation: "White pins the Nf6." },
        {
          san: "h6",
          explanation: "We challenge the pin.",
          isKeyMove: true,
        },
        { san: "Bh4", explanation: "White maintains the pin." },
        {
          san: "g5",
          explanation:
            "We chase the bishop! Black can be aggressive in the Exchange French.",
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
          explanation: "The French Defence.",
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
            "The Tarrasch! White avoids the Winawer pin by going to d2.",
        },
        {
          san: "c5",
          explanation:
            "We counterattack immediately! c5 fights against White's d4 — the most active Tarrasch response.",
          isKeyMove: true,
          wrongMoveWarning:
            "Against the Tarrasch, we play c5 immediately — the most active response.",
        },
        { san: "exd5", explanation: "White captures." },
        {
          san: "exd5",
          explanation:
            "We recapture — creating an IQP structure where Black has active play.",
          isKeyMove: true,
        },
        { san: "Ngf3", explanation: "White develops." },
        {
          san: "Nc6",
          explanation: "We develop the knight, fighting for the center.",
          isKeyMove: true,
        },
        {
          san: "Bb5",
          explanation: "White pins the Nc6 — the Rubinstein Tarrasch.",
        },
        {
          san: "Bd6",
          explanation: "We develop the f8 bishop aggressively.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles." },
        {
          san: "Nge7",
          explanation:
            "We develop the knight, preparing to castle and fight for the center.",
          isKeyMove: true,
        },
        { san: "dxc5", explanation: "White captures the c5 pawn." },
        {
          san: "Bxc5",
          explanation: "We recapture, keeping active bishops.",
          isKeyMove: true,
        },
        { san: "Nb3", explanation: "White attacks the Bc5." },
        {
          san: "Bb6",
          explanation:
            "We retreat the bishop — Black has excellent activity and is very comfortable.",
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
          explanation: "The French Defence.",
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
          san: "Nf6",
          explanation:
            "We develop and attack e4. This leads to the Classical French.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Classical French, Nf6 — fighting for the center with the knight.",
        },
        {
          san: "Bg5",
          explanation: "White pins the Nf6! The Classical variation begins.",
        },
        {
          san: "Be7",
          explanation:
            "We develop and break the pin. The bishop on e7 is solid and supports the king after castling.",
          isKeyMove: true,
        },
        {
          san: "e5",
          explanation:
            "White advances! The center closes and the classical battle begins.",
        },
        {
          san: "Nfd7",
          explanation:
            "The knight retreats to d7 — standard French technique. Now we prepare c5 and f6.",
          isKeyMove: true,
        },
        { san: "Bxe7", explanation: "White trades the bishops." },
        {
          san: "Qxe7",
          explanation:
            "We recapture with the queen — keeping the queen active and fighting for the center.",
          isKeyMove: true,
        },
        { san: "f4", explanation: "White builds a kingside attack." },
        {
          san: "O-O",
          explanation: "We castle! The king is safe on the kingside.",
          isKeyMove: true,
        },
        { san: "Nf3", explanation: "White develops." },
        {
          san: "c5",
          explanation:
            "The critical French counterattack! We fight the d4 pawn — the whole opening has been building to this.",
          isKeyMove: true,
        },
        { san: "Qd2", explanation: "White defends d4." },
        { san: "Nc6", explanation: "We develop and increase pressure on d4." },
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
          explanation: "The French Defence!",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White builds a powerful center." },
        {
          san: "d5",
          explanation: "We challenge the center.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White defends e4." },
        {
          san: "Bb4",
          explanation:
            "The Winawer! We pin the Nc3 immediately — sharpest and most ambitious. Chaos is coming.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Winawer, Bb4 is the defining move — pinning the knight for maximum tension.",
        },
        {
          san: "e5",
          explanation:
            "White advances! The center closes and a fierce kingside vs queenside battle begins.",
        },
        {
          san: "c5",
          explanation:
            "We counterattack d4 immediately — the standard Winawer plan.",
          isKeyMove: true,
        },
        {
          san: "a3",
          explanation:
            "White forces the bishop to commit — the Poisoned Pawn setup.",
        },
        {
          san: "Bxc3+",
          explanation:
            "We capture the knight! Black gives up the bishop pair to double White's c-pawns.",
          isKeyMove: true,
        },
        {
          san: "bxc3",
          explanation: "White recaptures — the c-pawns are now doubled.",
        },
        {
          san: "Ne7",
          explanation:
            "We develop the knight via e7, preparing to castle. It will go to f5 to attack e3.",
          isKeyMove: true,
        },
        {
          san: "Qg4",
          explanation: "White threatens Qxg7! — the critical moment.",
        },
        {
          san: "Qc7",
          explanation:
            "We target e5 and set up the Rg8 counter-trap — we're going to let White take g7 and chase the queen back.",
          isKeyMove: true,
        },
        {
          san: "Qxg7",
          explanation:
            "White takes the g7 pawn! The position becomes very sharp.",
        },
        {
          san: "Rg8",
          explanation:
            "We attack the queen! The Rg8 forces it to h7, gaining counterplay while White's pawns are exposed.",
          isKeyMove: true,
        },
        { san: "Qxh7", explanation: "White takes another pawn." },
        {
          san: "cxd4",
          explanation: "We capture d4, opening lines for our counterattack.",
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
          explanation: "The French Defence.",
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
          explanation:
            "The Rubinstein! We capture on e4 immediately, relieving tension. This avoids the complicated closed positions of the Classical and Winawer.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Rubinstein plays dxe4 — releasing the tension and simplifying.",
        },
        {
          san: "Nxe4",
          explanation: "White recaptures — the position is now more open.",
        },
        {
          san: "Nd7",
          explanation:
            "We develop the knight, preparing Ngf6 to challenge the Ne4.",
          isKeyMove: true,
        },
        { san: "Nf3", explanation: "White develops." },
        {
          san: "Ngf6",
          explanation: "We develop and attack the Ne4.",
          isKeyMove: true,
        },
        { san: "Nxf6+", explanation: "White trades knights, simplifying." },
        {
          san: "Nxf6",
          explanation:
            "We recapture. Black has a very solid, comfortable position with easy development.",
          isKeyMove: true,
        },
        { san: "Bd3", explanation: "White develops." },
        {
          san: "c5",
          explanation:
            "We counterattack d4! Black has a free position and good counterplay.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles." },
        {
          san: "Be7",
          explanation: "We develop and prepare to castle.",
          isKeyMove: true,
        },
        { san: "Qe2", explanation: "White develops the queen." },
        {
          san: "O-O",
          explanation: "We castle! Black has achieved complete equality.",
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
          explanation: "The French Defence.",
          isKeyMove: true,
        },
        {
          san: "d3",
          explanation: "White plays d3 — the King's Indian Attack setup!",
        },
        {
          san: "d5",
          explanation:
            "We still challenge the center with d5 — the French idea.",
          isKeyMove: true,
        },
        { san: "Nd2", explanation: "White develops the knight." },
        {
          san: "Nf6",
          explanation: "We develop naturally.",
          isKeyMove: true,
        },
        { san: "Ngf3", explanation: "White develops." },
        {
          san: "c5",
          explanation:
            "We counterattack! The c5 break is essential to keep the position active against the KIA.",
          isKeyMove: true,
          wrongMoveWarning:
            "Against the KIA, c5 is critical — we must fight for the center.",
        },
        { san: "g3", explanation: "White begins the fianchetto." },
        {
          san: "Nc6",
          explanation: "We develop and support d5.",
          isKeyMove: true,
        },
        {
          san: "Bg2",
          explanation:
            "White completes the fianchetto — the bishop pressures the queenside.",
        },
        {
          san: "Be7",
          explanation: "We develop and prepare to castle.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles." },
        {
          san: "O-O",
          explanation: "We castle! Now the strategic battle begins.",
          isKeyMove: true,
        },
        {
          san: "Re1",
          explanation: "White reinforces e4, preparing the e5 push.",
        },
        {
          san: "b5",
          explanation:
            "We expand on the queenside — Black should counterattack before White's e5 advance.",
          isKeyMove: true,
        },
        { san: "e5", explanation: "White pushes e5." },
        {
          san: "Nd7",
          explanation:
            "We retreat, preparing a knight redeployment and the c4 break.",
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
          explanation: "The French Defence.",
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
          san: "Nf6",
          explanation: "We develop — now White has to decide on Bg5 or e5.",
          isKeyMove: true,
        },
        {
          san: "Bg5",
          explanation: "White pins the Nf6 — the Classical French.",
        },
        {
          san: "Bb4",
          explanation:
            "The MacCutcheon! Instead of Be7, we pin the Nc3. This is sharper and more aggressive.",
          isKeyMove: true,
          wrongMoveWarning:
            "The MacCutcheon plays Bb4 after Bg5 — pinning the Nc3 for double trouble.",
        },
        { san: "e5", explanation: "White advances the e-pawn." },
        {
          san: "h6",
          explanation:
            "We challenge the Bg5 — forcing it to commit before the center closes.",
          isKeyMove: true,
        },
        {
          san: "Bd2",
          explanation:
            "White retreats the bishop to d2, avoiding the trade and keeping the position complex.",
        },
        {
          san: "Bxc3",
          explanation:
            "We capture the knight! We give up the bishop pair to double White's c-pawns.",
          isKeyMove: true,
        },
        { san: "bxc3", explanation: "White recaptures, doubling the c-pawns." },
        {
          san: "Ne4",
          explanation:
            "We centralise the knight immediately — a powerful outpost on e4.",
          isKeyMove: true,
        },
        {
          san: "Qg4",
          explanation: "White attacks g7 — the tactical complications begin.",
        },
        {
          san: "g6",
          explanation:
            "We defend g7 by playing g6 — weakening the kingside but necessary.",
          isKeyMove: true,
        },
        { san: "h4", explanation: "White attacks further." },
        {
          san: "c5",
          explanation:
            "We counterattack d4 — essential fighting back before White's attack becomes overwhelming.",
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
          explanation: "The French Defence.",
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
          san: "Nf6",
          explanation: "We develop — entering the Classical French.",
          isKeyMove: true,
        },
        {
          san: "e5",
          explanation: "White advances — this is the Steinitz Variation.",
        },
        {
          san: "Nfd7",
          explanation: "We retreat the knight — standard French technique.",
          isKeyMove: true,
          wrongMoveWarning:
            "After e5, the knight retreats to d7 — this is always the correct French response.",
        },
        {
          san: "f4",
          explanation:
            "White plays f4! The Kingside Attack is coming — very aggressive.",
        },
        {
          san: "c5",
          explanation:
            "We immediately counterattack d4 — we must fight back now before White's kingside pawns become overwhelming.",
          isKeyMove: true,
        },
        { san: "Nf3", explanation: "White develops." },
        {
          san: "Nc6",
          explanation: "We develop and add more pressure to d4.",
          isKeyMove: true,
        },
        { san: "Be3", explanation: "White develops and supports d4." },
        {
          san: "cxd4",
          explanation: "We capture in the center, forcing simplification.",
          isKeyMove: true,
        },
        { san: "Nxd4", explanation: "White recaptures." },
        {
          san: "Bc5",
          explanation:
            "We develop the bishop aggressively — targeting d4 and eyeing f2.",
          isKeyMove: true,
        },
        { san: "Qd2", explanation: "White defends d4 with the queen." },
        {
          san: "O-O",
          explanation:
            "We castle — Black has solved all the opening problems with active piece play.",
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
          explanation: "The French Defence.",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White builds the center." },
        {
          san: "d5",
          explanation: "We challenge the center.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White defends e4 with the knight." },
        {
          san: "Nf6",
          explanation: "We develop and fight for e4.",
          isKeyMove: true,
        },
        { san: "e5", explanation: "White advances." },
        {
          san: "Nfd7",
          explanation:
            "The knight retreats to d7 — standard French technique, preparing c5 and f6.",
          isKeyMove: true,
          wrongMoveWarning:
            "After e5, the knight retreats to d7 — ALWAYS the right move in the French Advance positions.",
        },
        {
          san: "f4",
          explanation: "White plays f4 — the kingside attack begins.",
        },
        {
          san: "c5",
          explanation:
            "We counterattack d4 immediately! This is the key — we must fight back in the center.",
          isKeyMove: true,
        },
        { san: "Nf3", explanation: "White develops." },
        {
          san: "Nc6",
          explanation:
            "We develop the queenside knight, adding more pressure to d4.",
          isKeyMove: true,
        },
        { san: "Be3", explanation: "White develops." },
        {
          san: "cxd4",
          explanation: "We capture! Forcing simplification in the center.",
          isKeyMove: true,
        },
        { san: "Nxd4", explanation: "White recaptures." },
        {
          san: "Nxd4",
          explanation: "We capture the knight! The pawn center is dissolved.",
          isKeyMove: true,
        },
        { san: "Bxd4", explanation: "White recaptures." },
        {
          san: "Bc5",
          explanation:
            "We develop the bishop aggressively — Black has excellent counterplay.",
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
