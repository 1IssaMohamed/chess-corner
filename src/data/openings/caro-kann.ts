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
            "The Caro-Kann! Like the French, we prepare ...d5 with pawn support — but with the c-pawn instead of the e-pawn. The crucial difference: this leaves e7 free, so our light-squared bishop can later leave the pawn chain via ...Bf5. Support your center without burying your own bishop.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Caro-Kann starts with 1...c6 — preparing d5 with pawn support.",
        },
        {
          san: "d4",
          explanation:
            "White builds the ideal big center with both central pawns.",
        },
        {
          san: "d5",
          explanation:
            "We challenge the center at once, backed by the c6-pawn. White must now decide: push (e5), trade (exd5), or defend (Nc3) — and each choice gives us an easy game.",
          isKeyMove: true,
        },
        {
          san: "e5",
          explanation:
            "The Advance Variation — White grabs space and locks the center. But the e5-pawn is also a commitment: it's advanced and can become a target, and (unlike the French) our bishop isn't trapped behind the chain.",
        },
        {
          san: "Bf5",
          explanation:
            "The whole point of the Caro-Kann! Before playing ...e6 to lock the chain, we get the light-squared bishop OUTSIDE it. This is the 'good bishop' the French player only dreams of. Always free your bad bishop before you close the pawn chain.",
          isKeyMove: true,
          wrongMoveWarning:
            "After e5, we ALWAYS play Bf5 immediately — this is the whole point of the Caro-Kann!",
        },
        {
          san: "Nf3",
          explanation:
            "White develops and prepares to bolster the advanced e5-pawn, which Black will soon target.",
        },
        {
          san: "e6",
          explanation:
            "NOW ...e6 is correct — the bishop is already outside. This locks the solid c6-d5-e6 chain with our good bishop on the right side of it.",
          isKeyMove: true,
        },
        {
          san: "Be2",
          explanation:
            "White develops modestly and prepares to castle, keeping the structure solid.",
        },
        {
          san: "c5",
          explanation:
            "The critical counter-strike: we attack the base of White's chain (d4). The rule in a locked center is to strike at the base of the enemy pawn chain — that's where it's least defended. Refuse to sit passively.",
          isKeyMove: true,
        },
        {
          san: "O-O",
          explanation: "White castles to safety before the center opens.",
        },
        {
          san: "Nc6",
          explanation:
            "We develop and pile a second attacker onto d4 — fully mobilized and pressing the chain's base.",
          isKeyMove: true,
        },
        {
          san: "c3",
          explanation:
            "White shores up d4 with the c-pawn, holding the base of the chain.",
        },
        {
          san: "Qb6",
          explanation:
            "A double attack: the queen hits b2 AND adds a third attacker to d4, tying White down. Look for one move that creates two threats at once.",
        },
        {
          san: "Nbd2",
          explanation:
            "White brings the knight to defend d4 and cover the b3/c4 squares.",
        },
        {
          san: "cxd4",
          explanation:
            "We resolve the tension to open the c-file toward White's queenside — our highway for the rooks.",
        },
        {
          san: "cxd4",
          explanation:
            "White recaptures, holding d4 but conceding the open c-file to us.",
        },
        {
          san: "Nge7",
          explanation:
            "We develop the knight via e7 (not f6, which would block our own bishop and run into e5), heading for f5 or g6 to hit the e5-pawn. Route your knight to where it attacks the enemy's weakness.",
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
          explanation:
            "The Caro-Kann — preparing ...d5 while keeping the c8-bishop's diagonal open.",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White builds the big center." },
        {
          san: "d5",
          explanation:
            "We challenge the center at once, supported by the c6-pawn.",
          isKeyMove: true,
        },
        {
          san: "Nc3",
          explanation:
            "White defends e4 by developing — choosing to keep the central tension.",
        },
        {
          san: "dxe4",
          explanation:
            "We capture, releasing the tension on OUR terms. The point: this opens the diagonal so the c8-bishop can reach f5 before ...e6 ever has to be played. Trade in the center to free your worst piece.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Classical, we capture dxe4 to activate the c8 bishop to f5.",
        },
        {
          san: "Nxe4",
          explanation:
            "White recaptures, planting a centralized knight on e4 — but it can be hit, and meanwhile our plan proceeds.",
        },
        {
          san: "Bf5",
          explanation:
            "The hallmark Caro-Kann move: the bishop develops OUTSIDE the pawn chain with gain of tempo, hitting the e4-knight. This is the entire point of the opening — the good bishop is free. Develop your problem bishop before locking the structure.",
          isKeyMove: true,
        },
        {
          san: "Ng3",
          explanation:
            "White's attacked knight retreats with tempo, kicking our bishop.",
        },
        {
          san: "Bg6",
          explanation:
            "The bishop steps back to g6 — still outside the chain, still good, controlling the b1-h7 diagonal. It kept its job while dodging the attack.",
          isKeyMove: true,
        },
        {
          san: "h4",
          explanation:
            "White lunges with the h-pawn, threatening h5 to trap the bishop on g6 — a standard idea worth knowing.",
        },
        {
          san: "h6",
          explanation:
            "Essential prophylaxis: ...h6 makes a retreat square on h7 so that after h5 Bh7, the bishop survives. Without it, h5 would win the bishop. Always make luft for a bishop that's about to be hunted by a pawn.",
          isKeyMove: true,
        },
        {
          san: "Nf3",
          explanation:
            "White develops the second knight, supporting e5 and d4.",
        },
        {
          san: "Nd7",
          explanation:
            "We develop flexibly: the knight covers e5, prepares ...Ngf6, and keeps options for ...Nb6 or ...Ne5. Develop toward the center, keeping choices open.",
          isKeyMove: true,
        },
        {
          san: "Bd3",
          explanation:
            "White offers to trade the light-squared bishops; the bishop also eyes h7 in case of a future attack.",
        },
        {
          san: "Bxd3",
          explanation:
            "We trade — happily, because it removes White's attacking bishop and the recapture doesn't disturb our solid structure. Trade off the opponent's potential attacker when it costs you nothing.",
          isKeyMove: true,
        },
        {
          san: "Qxd3",
          explanation: "White recaptures, centralizing the queen.",
        },
        {
          san: "Ngf6",
          explanation:
            "We complete development with a sound, weakness-free position. The bishop pair is gone, but our structure is granite and every piece has a job — the Caro-Kann promise.",
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
          explanation: "The Caro-Kann — preparing ...d5 with the c-pawn.",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White builds the center." },
        {
          san: "d5",
          explanation: "We challenge the center, supported by c6.",
          isKeyMove: true,
        },
        {
          san: "exd5",
          explanation:
            "The Exchange Variation — White releases the tension into a symmetric structure. It's the safe, simple choice, but it surrenders any opening advantage: with no imbalance, Black equalizes easily.",
        },
        {
          san: "cxd5",
          explanation:
            "We recapture with the c-pawn (not the queen), keeping a solid pawn on d5 and — crucially — leaving e7 open so the c8-bishop can develop to f5 outside the chain. The Caro-Kann bishop always gets out.",
          isKeyMove: true,
          wrongMoveWarning:
            "We recapture cxd5 — keeping a solid, symmetric pawn structure.",
        },
        {
          san: "Bd3",
          explanation: "White develops actively, the bishop aiming at h7.",
        },
        {
          san: "Nc6",
          explanation:
            "We develop and pressure d4, contesting the center with pieces.",
          isKeyMove: true,
        },
        {
          san: "c3",
          explanation:
            "White supports d4 and prepares the minority attack (b4-b5).",
        },
        {
          san: "Nf6",
          explanation:
            "We develop toward the kingside — development is effortless in the symmetric Exchange structure.",
          isKeyMove: true,
        },
        {
          san: "Bf4",
          explanation:
            "White develops the c1-bishop outside the chain (the same good-bishop idea, for White).",
        },
        {
          san: "Bg4",
          explanation:
            "We develop the light-squared bishop actively to pin the f3-knight the moment it appears — getting our bishop OUT of the chain and fighting for the initiative rather than playing passively.",
          isKeyMove: true,
        },
        {
          san: "Nf3",
          explanation:
            "White develops, walking into the pin but completing the kingside.",
        },
        {
          san: "e6",
          explanation:
            "NOW ...e6 is safe — both bishops are already developed outside the chain. We open the f8-bishop and prepare to castle.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles to safety." },
        {
          san: "Be7",
          explanation:
            "We develop and prepare to castle, completing harmonious development.",
          isKeyMove: true,
        },
        {
          san: "Nbd2",
          explanation:
            "White completes development, the knight reinforcing the center.",
        },
        {
          san: "O-O",
          explanation:
            "We castle — fully developed, no weaknesses, perfectly equal. In the Exchange, Black simply gets an easy game.",
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
          explanation: "The Caro-Kann — preparing ...d5.",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White builds the center." },
        {
          san: "d5",
          explanation: "We challenge the center, supported by c6.",
          isKeyMove: true,
        },
        {
          san: "exd5",
          explanation: "White trades into a symmetric structure — for now.",
        },
        {
          san: "cxd5",
          explanation: "We recapture, keeping a pawn on d5.",
          isKeyMove: true,
        },
        {
          san: "c4",
          explanation:
            "The Panov! White transforms the position by attacking d5 with a second pawn — heading for a Queen's-Gambit-style fight where Black ends up with an isolated d-pawn. Ambitious: White trades safety for an active, structure-based battle.",
          isKeyMove: true,
        },
        {
          san: "Nf6",
          explanation:
            "We develop and contest the d5/e4 squares, the natural reply that doesn't yet commit the structure.",
          isKeyMove: true,
          wrongMoveWarning:
            "Against the Panov, Nf6 is best — developing and fighting for the center.",
        },
        { san: "Nc3", explanation: "White develops and adds pressure to d5." },
        {
          san: "e6",
          explanation:
            "We back up d5 and open the f8-bishop. We accept that an isolated d-pawn may result — the trade-off being free, active pieces and open lines.",
          isKeyMove: true,
        },
        {
          san: "Nf3",
          explanation: "White develops, eyeing the blockade square d4.",
        },
        {
          san: "Be7",
          explanation:
            "We develop solidly and prepare to castle, keeping the position flexible.",
          isKeyMove: true,
        },
        {
          san: "cxd5",
          explanation:
            "White resolves the tension, leaving us with the isolated queen's pawn after we recapture.",
        },
        {
          san: "Nxd5",
          explanation:
            "We recapture with the knight, occupying the excellent d5 outpost. The IQP bargain: a long-term weak pawn in exchange for active, freely-developed pieces and central squares right now. Activity is the IQP's compensation.",
          isKeyMove: true,
        },
        {
          san: "Bd3",
          explanation:
            "White develops actively, the bishop aiming at the kingside.",
        },
        {
          san: "Nc6",
          explanation:
            "We develop with pressure on d4, getting our pieces active fast — the IQP-holder must play energetically before the pawn becomes a target.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles to safety." },
        {
          san: "O-O",
          explanation:
            "We castle, fully developed. The strategic battle is set: our piece activity vs White's long-term pressure on the d-pawn.",
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
          explanation: "The Caro-Kann — preparing ...d5.",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White builds the center." },
        {
          san: "d5",
          explanation: "We challenge the center, supported by c6.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White defends e4 by developing." },
        {
          san: "dxe4",
          explanation:
            "We capture, releasing the tension to develop comfortably.",
          isKeyMove: true,
        },
        {
          san: "Nxe4",
          explanation: "White recaptures, centralizing the knight.",
        },
        {
          san: "Nd7",
          explanation:
            "The Karpov/Modern move. Instead of ...Bf5, we prepare ...Ngf6 — and the point is subtle: developing the knight first means that after ...Ngf6 Nxf6+, we recapture and avoid giving White the Bd3xBf5 trade. It keeps more tension and our bishop pair. A flexible move order that denies the opponent simplifications.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Modern/Karpov Caro-Kann plays Nd7 here instead of Bf5.",
        },
        {
          san: "Nf3",
          explanation:
            "White develops, controlling e5 and preparing to castle.",
        },
        {
          san: "Ngf6",
          explanation:
            "We develop with a hit on the e4-knight, forcing a decision and gaining time — the second knight supports the first.",
          isKeyMove: true,
        },
        {
          san: "Ng3",
          explanation:
            "White retreats the knight to keep it (Nxf6 would help our development), eyeing f5/h5.",
        },
        {
          san: "e6",
          explanation:
            "Now ...e6 opens the f8-bishop and solidifies — and note our light-squared bishop, though still home, isn't 'bad' here because the structure stays fluid for a ...c5 break.",
          isKeyMove: true,
        },
        {
          san: "Bd3",
          explanation: "White develops actively, aiming the bishop at h7.",
        },
        {
          san: "Bd6",
          explanation:
            "We develop our bishop aggressively, mirroring White's and contesting the b8-h2 diagonal toward White's king. Meet an attacking bishop with your own.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles to safety." },
        {
          san: "O-O",
          explanation: "We castle, king safe, ready for the central break.",
          isKeyMove: true,
        },
        {
          san: "Qe2",
          explanation:
            "White connects rooks and prepares queenside or central expansion.",
        },
        {
          san: "c5",
          explanation:
            "We strike at d4 — the Caro-Kann's thematic freeing break, opening lines for our well-placed pieces and equalizing comfortably. Karpov's recipe: solid setup, then ...c5.",
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
          explanation: "The Caro-Kann — preparing ...d5.",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White builds the center." },
        {
          san: "d5",
          explanation: "We challenge the center, supported by c6.",
          isKeyMove: true,
        },
        {
          san: "f3",
          explanation:
            "The Fantasy Variation! White props up e4 with the f-pawn to keep a big center — but f3 weakens the a7-g1 diagonal and the king's cover, and it does nothing for development. We exploit both.",
        },
        {
          san: "e6",
          explanation:
            "The safest, soundest reply: we keep the center solid and develop, daring White to over-commit. Against a dubious aggressive idea, the calm, sound move often refutes it best.",
          isKeyMove: true,
          wrongMoveWarning:
            "Against the Fantasy Variation, we play e6 — solid and waiting for White to overreach.",
        },
        {
          san: "Nc3",
          explanation: "White develops and defends e4 a second time.",
        },
        {
          san: "Bb4",
          explanation:
            "We pin the c3-knight (a defender of e4), increasing the pressure on the center and exploiting that f3 left White's setup loose. Pin the defender of the point you're attacking.",
          isKeyMove: true,
        },
        {
          san: "Bd3",
          explanation:
            "White develops the bishop, holding e4 and preparing to castle.",
        },
        {
          san: "dxe4",
          explanation:
            "Now we open the center — and crucially White must recapture with the f-pawn, accepting weakened kingside pawns. Open the position to expose the weakness the opponent created.",
          isKeyMove: true,
        },
        {
          san: "fxe4",
          explanation:
            "White recaptures with the f-pawn (Bxe4 drops a pawn to the pin), leaving him with a weakened king and no f-pawn cover.",
        },
        {
          san: "Nf6",
          explanation:
            "We develop with pressure on e4, hitting the now-weakened center with gain of time.",
          isKeyMove: true,
        },
        {
          san: "Nge2",
          explanation:
            "White defends e4 with the knight, keeping the c3-knight in place.",
        },
        {
          san: "O-O",
          explanation:
            "We castle to safety, and the pin on c3 keeps nagging — our development is smooth while White is tied up.",
          isKeyMove: true,
        },
        {
          san: "O-O",
          explanation:
            "White castles, finally tucking the king away behind the loosened pawns.",
        },
        {
          san: "c5",
          explanation:
            "We hit the base of the center (d4) — opening lines toward White's slightly airy king. Strike at the chain's base to convert your better structure into an attack.",
          isKeyMove: true,
        },
        {
          san: "d5",
          explanation:
            "White pushes past to keep the center closed, but this fixes a target on d5.",
        },
        {
          san: "exd5",
          explanation:
            "We open the position — with our pieces more active and White's kingside loosened, the resulting sharp play favors us.",
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
          explanation: "The Caro-Kann — preparing ...d5.",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White builds the center." },
        {
          san: "d5",
          explanation: "We challenge the center, supported by c6.",
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
            "We counterattack e4 with a piece instead of releasing the tension — inviting White to push e5 and commit, after which we get active play. Develop with a counter-threat.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Two Knights Caro, we play Nf6 — fighting for e4 with a piece.",
        },
        {
          san: "e5",
          explanation:
            "White advances, gaining space and kicking our knight — but the e5-pawn is now a committal target.",
        },
        {
          san: "Ne4",
          explanation:
            "Our knight leaps into the center rather than retreating tamely — from e4 it can trade on c3 to damage White's structure. Choose the most active square when attacked.",
          isKeyMove: true,
        },
        {
          san: "f3",
          explanation:
            "White attacks the e4-knight, but this further loosens his kingside and king.",
        },
        {
          san: "Nxc3",
          explanation:
            "We capture to saddle White with doubled c-pawns — a permanent structural concession that's worth more than keeping the knight on its soon-to-be-evicted square. Trade to inflict lasting damage.",
          isKeyMove: true,
        },
        {
          san: "bxc3",
          explanation:
            "White recaptures toward the center, accepting the doubled, weakened c-pawns.",
        },
        {
          san: "e6",
          explanation:
            "We solidify the center and open the f8-bishop, preparing to exploit White's loose structure.",
          isKeyMove: true,
        },
        {
          san: "Be3",
          explanation:
            "White develops, bracing d4 — but the king is still in the center.",
        },
        {
          san: "Qh4+",
          explanation:
            "The disruptive check! With White having played f3, the h4-e1 diagonal is open and the king has no good shelter — the queen forces it to move and lose castling. Exploit a weakened king before completing your own development. The whole point of the line.",
          isKeyMove: true,
        },
        {
          san: "Kd2",
          explanation:
            "Forced — blocking with g3 would drop a pawn, so the king must walk, permanently losing the right to castle.",
        },
        {
          san: "c5",
          explanation:
            "We strike the center while White's king is stuck on d2 — opening lines against the exposed monarch is more important than safe, slow play here. Open the position against a stranded king.",
          isKeyMove: true,
        },
        {
          san: "dxc5",
          explanation:
            "White grabs the pawn, but the bigger story is his displaced king and ragged structure.",
        },
        {
          san: "Nc6",
          explanation:
            "We develop with tempo and full compensation: the c3 doubled pawns, White's stuck king, and our easy development outweigh the pawn.",
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
          explanation: "The Caro-Kann — preparing ...d5.",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White builds the center." },
        {
          san: "d5",
          explanation: "We challenge the center, supported by c6.",
          isKeyMove: true,
        },
        {
          san: "Nd2",
          explanation:
            "The Short System — White develops the knight to d2 (not c3) so it can't be pinned and so the c-pawn stays free. A flexible move, but it blocks White's own bishop momentarily and doesn't change our plan.",
        },
        {
          san: "dxe4",
          explanation:
            "We capture, releasing the tension to develop the bishop — same plan as the Classical, regardless of which square White's knight chose.",
          isKeyMove: true,
          wrongMoveWarning:
            "Against the Short System, we still capture dxe4 and aim for Bf5.",
        },
        {
          san: "Nxe4",
          explanation: "White recaptures with the d2-knight, centralizing it.",
        },
        {
          san: "Bf5",
          explanation:
            "The hallmark Caro-Kann move — the bishop develops outside the chain with tempo. Our plan is the same against every White setup: free the good bishop first.",
          isKeyMove: true,
        },
        { san: "Ng3", explanation: "White kicks the bishop with tempo." },
        {
          san: "Bg6",
          explanation:
            "The bishop steps back, still outside the chain and still good.",
          isKeyMove: true,
        },
        {
          san: "h4",
          explanation:
            "White lunges with the h-pawn, threatening h5 to trap the bishop.",
        },
        {
          san: "h6",
          explanation:
            "Essential — making the h7 escape so h5 Bh7 doesn't trap the bishop.",
          isKeyMove: true,
        },
        { san: "Nf3", explanation: "White develops the second knight." },
        {
          san: "Nd7",
          explanation:
            "We develop flexibly toward f6 and the center, keeping the solid Caro-Kann structure.",
          isKeyMove: true,
        },
        {
          san: "Bd3",
          explanation: "White offers the bishop trade and eyes h7.",
        },
        {
          san: "Bxd3",
          explanation:
            "We trade off White's attacking bishop at no cost to our structure.",
          isKeyMove: true,
        },
        {
          san: "Qxd3",
          explanation: "White recaptures, centralizing the queen.",
        },
        {
          san: "Ngf6",
          explanation:
            "We complete development — an easy, weakness-free position, identical in spirit to the Classical.",
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
          explanation: "The Caro-Kann — preparing ...d5.",
          isKeyMove: true,
        },
        {
          san: "Bc4",
          explanation:
            "The Hillbilly Attack — White rushes the bishop toward f7. But the bishop on c4 runs straight into our planned ...d5, which hits it with tempo. Develop toward a target, not toward a pawn that's about to attack you.",
        },
        {
          san: "d5",
          explanation:
            "We hit the bishop AND grab the center in one move — turning the c6/d5 setup into an immediate gain of tempo. Punish a premature bishop sortie by attacking it with a pawn.",
          isKeyMove: true,
          wrongMoveWarning:
            "Against the Hillbilly, d5 is our best move — fighting for the center.",
        },
        {
          san: "exd5",
          explanation:
            "White trades, since retreating immediately would just lose time.",
        },
        {
          san: "cxd5",
          explanation:
            "We recapture, gaining a strong center AND hitting the c4-bishop again — it must move once more.",
          isKeyMove: true,
        },
        {
          san: "Bb3",
          explanation:
            "The bishop retreats to b3, where (unlike against an Italian) there's no f7 weakness to target — our solid center has neutralized it.",
        },
        {
          san: "Nf6",
          explanation:
            "We develop naturally, the knight defending d5 and eyeing e4. Our development is free and easy.",
          isKeyMove: true,
        },
        {
          san: "d4",
          explanation:
            "White builds a center, transposing toward a normal position — but a tempo down.",
        },
        {
          san: "e6",
          explanation:
            "We solidify d5 and open the f8-bishop, heading for a comfortable setup.",
          isKeyMove: true,
        },
        { san: "Nf3", explanation: "White develops." },
        {
          san: "Be7",
          explanation: "We develop and prepare to castle.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles to safety." },
        {
          san: "O-O",
          explanation:
            "We castle — a completely normal, weakness-free Caro-Kann position, with White's early bishop adventure having achieved nothing.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops and pressures d5." },
        {
          san: "Nc6",
          explanation:
            "We develop and contest d4 — Black is fully developed with no problems at all.",
          isKeyMove: true,
        },
        {
          san: "Re1",
          explanation: "White centralizes the rook on the e-file.",
        },
        {
          san: "Bd6",
          explanation:
            "We place the bishop actively, eyeing h2 and completing a harmonious setup.",
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
          explanation: "The Caro-Kann — preparing ...d5.",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White builds the center." },
        {
          san: "d5",
          explanation: "We challenge the center, supported by c6.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White defends e4 by developing." },
        {
          san: "dxe4",
          explanation:
            "We capture, releasing the tension to follow a different plan.",
          isKeyMove: true,
        },
        {
          san: "Nxe4",
          explanation: "White recaptures, centralizing the knight.",
        },
        {
          san: "g6",
          explanation:
            "The Gurgenidze! Instead of the usual ...Bf5, we fianchetto for a Dragon-style setup — but with ...c6 already played, the position is sturdier than a real Dragon (the b7-c6 pawns give the king extra cover). Borrow a plan from another opening, improved by your existing structure.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Gurgenidze plays g6 in the Caro-Kann — creating a Dragon-like fianchetto position.",
        },
        { san: "Nf3", explanation: "White develops, controlling e5." },
        {
          san: "Bg7",
          explanation:
            "We complete the fianchetto — the g7-bishop rakes the long diagonal toward White's queenside and center, our main long-range weapon.",
          isKeyMove: true,
        },
        {
          san: "Bc4",
          explanation: "White develops the bishop actively toward f7.",
        },
        {
          san: "Nf6",
          explanation: "We develop with a hit on the e4-knight, gaining time.",
          isKeyMove: true,
        },
        {
          san: "Ng3",
          explanation: "White retreats the knight to keep it, eyeing f5/h5.",
        },
        {
          san: "O-O",
          explanation:
            "We castle, king safe behind the fianchetto, before starting counterplay.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles to safety." },
        {
          san: "Nbd7",
          explanation:
            "We develop the last knight, supporting e5 and preparing ...Nb6 to harass the c4-bishop.",
          isKeyMove: true,
        },
        {
          san: "Re1",
          explanation: "White over-protects e4 and centralizes the rook.",
        },
        {
          san: "Nb6",
          explanation:
            "The knight hits the c4-bishop, gaining a tempo and chasing it off its active diagonal — typical play to neutralize White's most aggressive piece.",
          isKeyMove: true,
        },
        {
          san: "Bb3",
          explanation:
            "White retreats the bishop, keeping it but on a quieter square.",
        },
        {
          san: "c5",
          explanation:
            "We strike at d4 with our extra c-pawn lever, opening the long diagonal for the Bg7 — the Caro-Kann's solidity now powering a Dragon-style counterattack.",
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
