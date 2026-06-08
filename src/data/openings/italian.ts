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
        {
          san: "e4",
          explanation:
            "The Italian Game — one of the oldest and most played openings in chess — begins here, staking a central claim that will define the whole game. After Bc4 targeting the sensitive f7 pawn, this main line (the Giuoco Pianissimo) builds with c3 and then the quiet d3 rather than the sharper d4, choosing strategic patience over an early explosion. The signature plan is the Nbd2–f1–g3 knight reroute, building kingside pressure while the bishop sits comfortably on the b3–g8 diagonal — all without overextending. This approach is loved from beginner to World Championship level because it's easy to play correctly, hard to go wrong in, and quietly generates a lasting advantage.",
        },
        {
          san: "e5",
          explanation:
            "Black answers in the center. The symmetry isn't imitation for its own sake — if Black lets White own both d4 and e4, Black gets squeezed, so the e-pawn stakes an equal claim before either side develops pieces.",
        },
        {
          san: "Nf3",
          explanation:
            "White develops a knight and attacks e5 in one move. A developing move that also makes a threat is the gold standard of the opening: it forces Black to respond, so White keeps the initiative of the first move.",
        },
        {
          san: "Nc6",
          explanation:
            "Black meets the threat by developing rather than by a passive pawn move. The knight defends e5 and eyes d4 and e5; it blocks nothing and improves Black's position, which is why it's preferred over ...d6 or ...Qe7 here.",
        },
        {
          san: "Bc4",
          explanation:
            "The Italian! The bishop takes its most aggressive diagonal, pointing straight at f7 — the one square only the king defends in the starting position, and the perennial target in open games. It also fights for d5. Aim your bishops at the enemy's weakest point before you commit your pawns.",
          isKeyMove: true,
        },
        {
          san: "Bc5",
          explanation:
            "Black mirrors with his own bishop on the best diagonal, pointing at White's f2 — the symmetric weak point. Both sides have now developed toward the other's vulnerable square, which sets the tone for the whole opening.",
        },
        {
          san: "c3",
          explanation:
            "A quiet move with a big idea: it prepares d4 so that the center can be supported by a pawn rather than just occupied. It also opens c2 as a retreat square for the c4-bishop later. The small cost — c3 takes the knight's natural square — is one White is happy to pay for central control.",
        },
        {
          san: "Nf6",
          explanation:
            "Black develops the last minor piece toward the center and counterattacks e4, refusing to let White expand for free. Develop with a purpose: this knight both completes the kingside and creates a threat.",
        },
        {
          san: "d3",
          explanation:
            "The Giuoco Pianissimo (the 'quietest game'). Instead of the sharp d4, White plays d3 to keep the center locked. The point is strategic: with no pawn breaks rushing things, White can calmly carry out the Nbd2–f1–g3 plan and outmaneuver Black. Choosing the quiet d3 over d4 is a decision to win slowly and safely rather than gamble on tactics.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Pianissimo, we play d3 (not d4) to keep the position closed and strategic.",
        },
        {
          san: "d6",
          explanation:
            "Black mirrors, cementing e5 so it can't be undermined. The closed center suits a slow game for both sides — now it becomes a battle of plans, not tactics.",
        },
        {
          san: "O-O",
          explanation:
            "White castles: king tucked away, rook closer to the center. With a closed center there's no rush, but getting the king safe first is never wrong — it frees the rooks to do real work.",
        },
        {
          san: "O-O",
          explanation:
            "Black castles too. Both kings are safe and the maneuvering phase begins — whoever improves their pieces to better squares will get the upper hand.",
        },
        {
          san: "Nbd2",
          explanation:
            "The start of the signature plan. The knight looks passive on d2, but it's heading f1 then g3 — a reroute toward the kingside. It also keeps the e4 pawn defended and the c1-bishop's diagonal flexible. A knight on the way to a great square is worth more than one stuck on a mediocre one.",
        },
        {
          san: "a6",
          explanation:
            "Black makes luft and prepares ...Ba7, tucking the bishop onto a safe diagonal where it can't be hit by a future b4 or Na4. Both sides shuffle their bishops to durable squares before the action starts.",
        },
        {
          san: "Bb3",
          explanation:
            "White retreats the bishop to b3, off the c-file and out of reach of a future ...Na5 or ...d5, while it keeps raking the a2–g8 diagonal toward f7. Reposition before you're forced to: the bishop is just as strong here and now permanently safe.",
        },
        {
          san: "Ba7",
          explanation:
            "Black tucks his bishop away on a7 by the same logic — still eyeing f2 down the long diagonal, but immune to being kicked. Symmetric maneuvering, each side securing its best bishop.",
        },
        {
          san: "Re1",
          explanation:
            "The rook swings to the half-open e-file behind the e4 pawn, supporting a future d3-d4 or e4-e5 break. Rooks belong on the files that will open — put them there before the file opens, not after.",
        },
        {
          san: "Re8",
          explanation:
            "Black copies, placing his rook on e8 to back up e5. The position is balanced and tense; the next phase is all about who finds the better plan first.",
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
        {
          san: "e4",
          explanation:
            "The Italian Game starts with e4 e5, and after Nf3 Nc6 Bc4 this line diverges when Black plays Be7 instead of the main-line Bc5 — a very passive choice that sidesteps all sharp theory at the cost of a completely inactive bishop. Unlike the main Giuoco Pianissimo where both sides develop actively, here White gets to play d4 freely, trade queens early, and reach a technically favourable endgame where Black's pieces have nothing useful to do. The Hungarian teaches a key lesson: passive play in the opening is a slow death. Your job is to develop calmly, convert the queen trade into a technical edge, and grind it out.",
        },
        {
          san: "e5",
          explanation:
            "Black takes his share of the center — the principled reply that avoids being cramped.",
        },
        {
          san: "Nf3",
          explanation:
            "White develops and attacks e5, gaining time by forcing Black to react.",
        },
        {
          san: "Nc6",
          explanation:
            "Black defends e5 with a developing move that blocks nothing — the natural, economical reply.",
        },
        {
          san: "Bc4",
          explanation:
            "The Italian — the bishop targets f7 and contests d5, the standard aggressive post.",
          isKeyMove: true,
        },
        {
          san: "Be7",
          explanation:
            "The Hungarian Defence. Compare it to the active ...Bc5: on e7 the bishop is safe but does almost nothing — it doesn't fight for the center or eye any weakness. Black trades activity for solidity and a quiet life. The lesson to absorb: a 'safe' but passive piece hands the opponent a free initiative.",
          isKeyMove: true,
        },
        {
          san: "d4",
          explanation:
            "White seizes the center at once, precisely because Black's passive setup can't punish it. When the opponent plays passively, grab space immediately — they have no counter-strike ready.",
        },
        {
          san: "d6",
          explanation:
            "Black props up e5 with the d-pawn, the only solid way to hold the center given the inactive bishop.",
        },
        {
          san: "dxe5",
          explanation:
            "White opens the center while ahead in activity. Open the position when your pieces are better placed than the opponent's — open lines favor the more active army.",
        },
        {
          san: "dxe5",
          explanation:
            "Black recaptures, and the queens now face each other on the open d-file — which lets White force a trade on his terms.",
        },
        {
          san: "Qxd8+",
          explanation:
            "White trades queens — counterintuitive when you want to attack, but exactly right here. With no queens, Black can't generate threats to distract from his passive pieces, and White's job becomes a clean technical grind. Trade into an endgame when your structural/activity edge will matter more than attacking chances.",
          isKeyMove: true,
        },
        {
          san: "Bxd8",
          explanation:
            "Black must recapture with the bishop (the king can't, and ...Kxd8 loses castling), so the e7-bishop trudges back to d8 — even more passive than before. Black has also lost the right to castle.",
        },
        {
          san: "Nc3",
          explanation:
            "White develops toward the center and prepares Bg5, hitting the squares Black's passive pieces can't contest. In the endgame, keep developing with purpose toward the opponent's weaknesses.",
        },
        {
          san: "Nf6",
          explanation:
            "Black finally develops his kingside knight — several moves behind, and into a pin to come.",
        },
        {
          san: "Bg5",
          explanation:
            "White pins the f6-knight against the d8-bishop, freezing two of Black's pieces at once and underlining how tangled his army is.",
        },
        {
          san: "Be6",
          explanation:
            "Black offers to trade off White's powerful c4-bishop to get some relief — the standard way to ease a cramped position: swap your opponent's best piece.",
        },
        {
          san: "Bxe6",
          explanation:
            "White accepts, because the recapture hands Black a structural weakness worth more than the bishop pair here.",
        },
        {
          san: "fxe6",
          explanation:
            "Black recaptures with the f-pawn, leaving doubled, isolated e-pawns. e6 is now a fixed target that can't be defended by another pawn — exactly the kind of long-term weakness White wanted to create.",
        },
      ],
      continuationMoves: [
        {
          san: "O-O",
          idea: "White castles and prepares to exploit Black's passive pieces. Development and activity beat passive defense.",
        },
        {
          san: "Ke7",
          idea: "With queens off, the king is a fighting piece, not a target — so Black walks it up by hand to defend the weak e6 pawn instead of castling. This is the king-march idea: in the middlegame you castle for safety, but in a queenless endgame the king belongs in the center, doing a job.",
        },
        {
          san: "Rfe1",
          idea: "White's f-rook moves to e1, targeting the weak e6 pawn and keeping pressure on the e-file.",
        },
        {
          san: "Kd6",
          idea: "Black's king keeps marching to support e6 — unusual-looking, but correct endgame technique: the king defends what the pawns can't. Even so, Black is purely reacting, which is the cost of the early passivity.",
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
        {
          san: "e4",
          explanation:
            "The Italian Game starts with e4 e5, and after Nf3 Nc6 Bc4 Bc5 c3 this line diverges from the main Giuoco Pianissimo when White plays the more ambitious d4 instead of d3 — blowing open the center for an immediate tactical battle rather than a slow strategic squeeze. The pawn exchanges create open lines for White's bishop pair, the c-file becomes active, and both sides must calculate precisely instead of maneuvering patiently. This is the sharper, more combative face of the Italian: mistakes get punished quickly rather than accumulating over 40 moves.",
        },
        {
          san: "e5",
          explanation:
            "Black claims his half of the center — the sound, symmetric reply.",
        },
        {
          san: "Nf3",
          explanation:
            "Develops and attacks e5 in one move, keeping the initiative.",
        },
        {
          san: "Nc6",
          explanation:
            "Defends e5 with a natural developing move that blocks nothing.",
        },
        {
          san: "Bc4",
          explanation: "The Italian Game — bishop aims at f7 and contests d5.",
          isKeyMove: true,
        },
        {
          san: "Bc5",
          explanation:
            "Black develops symmetrically, his bishop eyeing f2 in mirror image.",
        },
        {
          san: "c3",
          explanation:
            "White prepares d4 with pawn support — so that after the coming exchanges he can keep a pawn in the center rather than just trade it off.",
        },
        {
          san: "Nf6",
          explanation:
            "Black develops and counterattacks e4, refusing to let White build unchallenged.",
        },
        {
          san: "d4",
          explanation:
            "The Giuoco Piano! White cashes in the c3 preparation and strikes, creating immediate central tension. Now concrete calculation replaces slow maneuvering — both sides must read the tactics accurately.",
          isKeyMove: true,
        },
        {
          san: "exd4",
          explanation:
            "Black captures; leaving the tension would let White play dxe5 or d5 on his own terms, so Black resolves it now.",
        },
        {
          san: "cxd4",
          explanation:
            "White recaptures, opening the c-file and — crucially — attacking the c5-bishop with the d4 pawn. Recapture toward the center and gain a tempo: the bishop must now react.",
        },
        {
          san: "Bb4+",
          explanation:
            "Rather than retreat, Black checks, gaining time and forcing White to commit. A check that develops a piece while making White block is far better than a passive retreat.",
        },
        {
          san: "Nc3",
          explanation:
            "White blocks the check by developing the queenside knight — the active interposition that puts a piece into play instead of a passive Bd2 or Kf1. Block a check with a developing move whenever you can.",
          isKeyMove: true,
        },
        {
          san: "Nxe4",
          explanation:
            "Black grabs the e4 pawn, exploiting the fact that the c3-knight is pinned to nothing yet and the position is loose. The game becomes very sharp — both sides now race in development.",
        },
        {
          san: "O-O",
          explanation:
            "White ignores the lost pawn and castles! The point: development and king safety create threats faster than chasing material. This is the gambit spirit — invest a pawn, get every piece working. Don't grab material back when finishing development keeps the initiative.",
          isKeyMove: true,
        },
        {
          san: "Bxc3",
          explanation:
            "Black captures the knight to eliminate an attacker and snag the bishop pair, accepting that it helps White's structure and opens lines toward his own king.",
        },
        {
          san: "bxc3",
          explanation:
            "White recaptures, opening the b-file for the rook and building a broad pawn center on c3-d4. The 'damaged' pawns are actually a central asset, and the open lines feed the attack.",
        },
        {
          san: "d5",
          explanation:
            "Black's key resource — he gives the extra piece back with d5 to blunt White's bishops and free his position. Knowing when to RETURN material to kill the attack is as important as knowing when to grab it.",
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
        {
          san: "e4",
          explanation:
            "The Italian Game starts with e4 e5, and after Nf3 Nc6 Bc4 Bc5, this line takes a dramatic detour at move 4: White plays b4, the Evans Gambit, sacrificing a pawn to gain a massive development lead and attack immediately. Forget the slow Pianissimo build-up — the Evans is 19th-century chess at its finest: White gets all pieces out in record time, Black spends three moves retreating a bishop, and the initiative practically plays itself. Kasparov, Morphy, and countless attacking players have wielded this for 200 years because the practical pressure it creates over the board is enormous.",
        },
        {
          san: "e5",
          explanation: "Black takes his equal share of the center.",
        },
        {
          san: "Nf3",
          explanation: "Develops and attacks e5, gaining a tempo.",
        },
        {
          san: "Nc6",
          explanation: "Defends e5 with a natural developing move.",
        },
        { san: "Bc4", explanation: "The Italian — bishop trained on f7." },
        {
          san: "Bc5",
          explanation:
            "Black develops the bishop actively, mirroring toward f2.",
        },
        {
          san: "b4",
          explanation:
            "The Evans Gambit! White offers the b-pawn for free. The point isn't the pawn — it's the tempo: if Black takes, his bishop will be chased around by c3 and d4 while White builds an ideal center with gain of time. Sacrifice a wing pawn to deflect a defender and seize the initiative.",
          isKeyMove: true,
          wrongMoveWarning:
            "This is the Evans Gambit — we offer b4 to gain a powerful development advantage.",
        },
        {
          san: "Bxb4",
          explanation:
            "Black accepts — declining lets White play a free b5 with space, so taking is principled, but now Black's bishop becomes a target that costs him development time.",
        },
        {
          san: "c3",
          explanation:
            "The gambit's engine: White hits the bishop AND prepares d4. Every White move now comes with a threat, so Black never gets a free tempo to catch up. Make your opponent react on every move and your lead in development snowballs.",
          isKeyMove: true,
        },
        {
          san: "Ba5",
          explanation:
            "The bishop retreats to a5, keeping the pin-like pressure on c3 while staying active.",
        },
        {
          san: "d4",
          explanation:
            "White blasts open the center while two moves ahead in development. Open the position when you're better developed — every open line becomes a highway for your pieces toward the enemy king.",
        },
        {
          san: "exd4",
          explanation:
            "Black captures to relieve the central pressure, but this only opens more lines for White.",
        },
        {
          san: "O-O",
          explanation:
            "White castles and the attack is ready to roll while Black's king is still in the center and his queenside undeveloped. Get your king safe, then point everything at theirs.",
          isKeyMove: true,
        },
        {
          san: "Nge7",
          explanation:
            "Black develops the knight to e7 (not f6, which would block ...d5) trying to shore up the kingside and prepare to castle.",
        },
        {
          san: "cxd4",
          explanation:
            "White recaptures, restoring a powerful pawn on d4 that anchors the center and supports the coming attack.",
        },
        {
          san: "d5",
          explanation:
            "Black strikes back in the center, desperate to open lines for his own pieces and blunt White's bishop.",
        },
        {
          san: "exd5",
          explanation:
            "White captures, ripping open even more lines — exactly what the attacking side wants when ahead in development.",
        },
        {
          san: "Nxd5",
          explanation:
            "Black recaptures with the knight, centralizing it, though it will soon be a target.",
        },
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
        {
          san: "e4",
          explanation:
            "The Italian Game starts with e4 e5, and after Nf3 Nc6 Bc4, this line diverges when Black plays Nf6 instead of the main-line Bc5 — immediately counterattacking e4 rather than developing the bishop symmetrically. White responds with d4, entering Scotch Gambit territory, then the aggressive e5 push drives back the knight and seizes central space while the c4 bishop stays active on its diagonal. A completely different character from the slow Pianissimo — open lines, quick tactical pressure, and central space define this variation.",
        },
        { san: "e5", explanation: "Black claims his share of the center." },
        { san: "Nf3", explanation: "Develops and attacks e5, gaining time." },
        {
          san: "Nc6",
          explanation: "Defends e5 naturally with a developing move.",
        },
        {
          san: "Bc4",
          explanation: "The Italian — bishop to c4, eyeing f7.",
          isKeyMove: true,
        },
        {
          san: "Nf6",
          explanation:
            "Black counterattacks e4 instead of mirroring with ...Bc5 — inviting an open, tactical game.",
        },
        {
          san: "d4",
          explanation:
            "White strikes the center immediately, offering a pawn to open lines while ahead in piece activity — the Scotch Gambit idea.",
          isKeyMove: true,
        },
        {
          san: "exd4",
          explanation:
            "Black accepts the central pawn; declining would let White build a big center for free.",
        },
        {
          san: "e5",
          explanation:
            "White pushes past rather than recapturing, kicking the f6-knight and grabbing space with tempo. Gaining time by attacking a piece is worth more than immediately regaining the pawn.",
        },
        {
          san: "d5",
          explanation:
            "Black hits back in the center, using the d-pawn to gain his own tempo against the c4-bishop.",
        },
        {
          san: "Bb5",
          explanation:
            "Instead of a passive retreat, the bishop drops to b5 and pins the c6-knight — a Ruy López idea inside an Italian. When kicked, relocate to a square where the piece does a new job.",
        },
        {
          san: "Ne4",
          explanation:
            "Black's knight sidesteps the e5 pawn to the strong central e4 outpost rather than retreating to the rim.",
        },
        {
          san: "Nxd4",
          explanation:
            "White recaptures the pawn in the center, restoring material with an active, centralized knight.",
        },
        {
          san: "Bd7",
          explanation:
            "Black develops and unpins, preparing to castle and untangle.",
        },
        {
          san: "Bxc6",
          explanation:
            "White trades to damage Black's structure — giving up the bishop pair to inflict doubled pawns is a sound positional trade.",
        },
        {
          san: "bxc6",
          explanation:
            "Black recaptures, accepting doubled c-pawns in return for the bishop pair and a half-open b-file. A concrete imbalance: structure vs. the two bishops.",
        },
        {
          san: "O-O",
          explanation:
            "White castles, getting the king safe before the position fully opens.",
        },
        {
          san: "Be7",
          explanation:
            "Black develops and prepares to castle, completing his minor-piece development.",
        },
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
        {
          san: "e4",
          explanation:
            "The Italian Game starts with e4 e5, and after Nf3 Nc6 Bc4, this line diverges from the Giuoco Pianissimo when White develops with Nc3 instead of the c3 preparation — allowing both sides to bring out all four knights in a symmetric setup. The c4 bishop gives White a subtle but consistent edge: after castling and Bg5, the pin on Black's f6 knight creates kingside pressure that builds slowly. Patient, positional play is the theme here — the d5 outpost and eventual central pawn push are the long-term rewards.",
        },
        { san: "e5", explanation: "Black claims his half of the center." },
        {
          san: "Nf3",
          explanation: "Develops and attacks e5, gaining a tempo.",
        },
        {
          san: "Nc6",
          explanation: "Defends e5 with a natural developing move.",
        },
        {
          san: "Bc4",
          explanation: "The Italian — bishop trained on f7.",
          isKeyMove: true,
        },
        { san: "Bc5", explanation: "Black develops symmetrically toward f2." },
        {
          san: "Nc3",
          explanation:
            "White develops the queenside knight, choosing piece play over the c3-d4 pawn plan. This commits the knight, so the d4-break is shelved in favor of a slow positional game.",
        },
        {
          san: "Nf6",
          explanation:
            "Black develops and counterattacks e4 — all four knights are now out, and the position is symmetric and tense.",
        },
        {
          san: "d3",
          explanation:
            "White supports e4 and opens the c1-bishop's path toward g5 — solid play, keeping the center closed for maneuvering.",
        },
        {
          san: "d6",
          explanation:
            "Black mirrors, cementing e5 for a long strategic battle.",
        },
        {
          san: "O-O",
          explanation:
            "White castles, king to safety before starting any plan.",
        },
        {
          san: "O-O",
          explanation:
            "Black castles too — both kings safe, the maneuvering begins.",
        },
        {
          san: "Bg5",
          explanation:
            "White pins the f6-knight against the queen, applying the pressure that the c4-bishop setup was built for. Provoke a weakness around the enemy king with the pin.",
          isKeyMove: true,
        },
        {
          san: "h6",
          explanation:
            "Black questions the pin, asking the bishop to declare its intentions.",
        },
        {
          san: "Bh4",
          explanation:
            "White maintains the pin — retreating would release the pressure; keeping it forces Black to weaken further if he wants to break it.",
        },
        {
          san: "g5",
          explanation:
            "Black breaks the pin by force, but at a cost: the kingside pawns are now advanced and the king is permanently a little drafty. Those g5/h6 weaknesses are exactly what White will target.",
        },
        {
          san: "Bg3",
          explanation:
            "White retreats to g3, still on a useful diagonal and now ready to meet ...g4 ideas. The bishop kept its job while baiting Black into loosening his king.",
        },
        {
          san: "Nh5",
          explanation:
            "Black tries to trade off the annoying g3-bishop, accepting a knight on the rim to do it.",
        },
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
        {
          san: "e4",
          explanation:
            "The Italian Game starts with e4 e5, and after Nf3 Nc6 Bc4, this line diverges sharply when Black plays Nf6 instead of the main-line Bc5 — immediately counterattacking e4 with both knights out rather than developing the bishop symmetrically. White replies with the aggressive Ng5, threatening Nxf7 straight away — a completely different character from the slow strategic Pianissimo. Black must fight back precisely with d5, accepting an unbalanced position where active piece play and central pawns compensate for a compromised structure.",
        },
        { san: "e5", explanation: "Black claims his share of the center." },
        { san: "Nf3", explanation: "Develops and attacks e5, gaining time." },
        { san: "Nc6", explanation: "Defends e5 naturally." },
        { san: "Bc4", explanation: "The Italian — bishop aimed at f7." },
        {
          san: "Nf6",
          explanation:
            "The Two Knights Defence! Black ignores symmetry and counterattacks e4 directly — a more combative, riskier choice than ...Bc5 that invites White's sharpest tries.",
          isKeyMove: true,
        },
        {
          san: "Ng5",
          explanation:
            "White pounces on f7 with Nxf7 threatened, winning material if Black does nothing. It looks crude (moving a developed knight again), but the f7-fork threat is so concrete that Black is forced into a specific defense. Concrete threats trump general principles.",
          isKeyMove: true,
          wrongMoveWarning:
            "After Nf6, White plays Ng5 to threaten f7. This is the critical attacking line.",
        },
        {
          san: "d5",
          explanation:
            "The only good defense — Black blocks the bishop's diagonal and opens lines for counterplay, accepting a pawn sacrifice for activity rather than passively defending f7. Meet a flank attack with a central counter-strike.",
        },
        {
          san: "exd5",
          explanation:
            "White captures, keeping the bishop's aim on f7 alive and staying a pawn up.",
        },
        {
          san: "Na5",
          explanation:
            "Black chases the c4-bishop, gaining a tempo and removing the key attacker of f7. The knight goes offside, but trading off the dangerous bishop is worth it. Eliminate the opponent's most dangerous piece, even at a small cost.",
        },
        {
          san: "Bb5+",
          explanation:
            "White checks to keep the bishop active and gain a tempo rather than retreating it tamely.",
        },
        {
          san: "c6",
          explanation:
            "Black blocks the check and continues harassing the bishop, gaining time to develop.",
        },
        {
          san: "dxc6",
          explanation:
            "White grabs another pawn, staying ahead in material while Black gets development for it.",
        },
        {
          san: "bxc6",
          explanation:
            "Black recaptures, opening the b-file and gaining the center pawns — and now the g5-knight, deep in Black's camp, must retreat.",
        },
        {
          san: "Be2",
          explanation:
            "White retreats the bishop to a safe square, content to hold the extra pawn and weather Black's activity.",
        },
        {
          san: "h6",
          explanation:
            "Black kicks the knight, gaining yet another tempo for his initiative.",
        },
        {
          san: "Nf3",
          explanation:
            "The knight retreats to safety. Black has a clear lead in development and open lines as compensation for the sacrificed pawn — the question for the rest of the game is whether activity outweighs material.",
        },
        {
          san: "e4",
          explanation:
            "Black gains space and harasses the f3-knight, keeping the initiative rolling. The position is dynamically balanced: Black's activity vs. White's extra pawn.",
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
        {
          san: "e4",
          explanation:
            "The Italian Game starts with e4 e5, and after Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Nxd5, this line diverges with the shocking Nxf7 — a knight sacrifice to drag Black's king into the open. While the main Giuoco Pianissimo builds quiet strategic pressure over many moves, the Fried Liver is pure attack from move 6: Black's king gets chased from f7 to e6 and beyond while every White piece joins the hunt. Not objectively refuted with best play, but terrifying to face over the board — it has won brilliancies at all levels for over 150 years.",
        },
        { san: "e5", explanation: "Black claims his half of the center." },
        { san: "Nf3", explanation: "Develops and attacks e5, gaining time." },
        { san: "Nc6", explanation: "Defends e5 naturally." },
        { san: "Bc4", explanation: "The Italian — bishop trained on f7." },
        {
          san: "Nf6",
          explanation: "The Two Knights Defence — Black counterattacks e4.",
        },
        {
          san: "Ng5",
          explanation:
            "White threatens Nxf7, setting up the Fried Liver — a direct strike at the weakest square in Black's camp.",
          isKeyMove: true,
        },
        {
          san: "d5",
          explanation:
            "Black's best defence — a central counter-strike that blocks the bishop and fights back rather than passively defending f7.",
        },
        {
          san: "exd5",
          explanation: "White captures, keeping the f7 pressure alive.",
        },
        {
          san: "Nxd5",
          explanation:
            "Black recaptures with the knight, attacking the c4-bishop — but this is the slightly risky capture that invites the sacrifice (the safer ...Na5 avoids it).",
        },
        {
          san: "Nxf7",
          explanation:
            "The Fried Liver Attack! White gives up a whole knight to rip open f7 and drag the king into the center. The point is that a king stuck in the open with no defenders is worth more than a knight — speed of attack over material. Sacrifice for a decisive lead in attacking force, not for immediate regain.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Fried Liver sacrifices the knight on f7 — Black's king is dragged into the open.",
        },
        {
          san: "Kxf7",
          explanation:
            "Black must accept — declining loses material for nothing — but now the king is marooned on f7 with the queenside asleep.",
        },
        {
          san: "Qf3+",
          explanation:
            "White checks, hitting the king and (with the queen) re-attacking the d5-knight. Bring the queen into the attack with tempo, double-attacking king and knight at once.",
        },
        {
          san: "Ke6",
          explanation:
            "Forced and astonishing: the king must step up to e6 to defend the pinned d5-knight, because retreating loses it. The king becomes the knight's only bodyguard — exactly the exposure White sacrificed for.",
        },
        {
          san: "Nc3",
          explanation:
            "White develops with tempo, piling a third attacker onto the pinned d5-knight. Bring every piece into the attack before the defender can untangle.",
        },
        {
          san: "Ncb4",
          explanation:
            "Black's best practical defence — the c6-knight jumps in to challenge ideas like Qe4/d4 and counterattack c2, trying to create chaos rather than sit and be mated.",
        },
        {
          san: "O-O",
          explanation:
            "White calmly castles, adding the rook to the file and tucking the king away — even mid-attack, getting your own king safe pays off.",
        },
        {
          san: "c6",
          explanation:
            "Black shores up d5 and tries to build a fortress around the exposed king.",
        },
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
        {
          san: "e4",
          explanation:
            "The Italian Game starts with e4 e5, and after Nf3 Nc6 Bc4 Nf6 Ng5, instead of the standard d5 counter this line sees Black play the stunning Bc5 — the Traxler Counterattack — ignoring White's threat to f7 entirely and preparing to sacrifice a bishop. Unlike anything else in the Italian, this is pure tactical warfare from both sides: both kings get exposed, material swings wildly, and only the player who knows the theory better survives. An extreme variation that sharpens tactical vision and catches unprepared opponents completely off guard.",
        },
        { san: "e5", explanation: "Black claims his half of the center." },
        { san: "Nf3", explanation: "Develops and attacks e5, gaining time." },
        { san: "Nc6", explanation: "Defends e5 naturally." },
        { san: "Bc4", explanation: "The Italian — bishop trained on f7." },
        {
          san: "Nf6",
          explanation: "The Two Knights Defence — Black counterattacks e4.",
        },
        {
          san: "Ng5",
          explanation:
            "White threatens Nxf7 — the standard Two Knights attacking try.",
          isKeyMove: true,
        },
        {
          san: "Bc5",
          explanation:
            "The Traxler Counterattack! Black meets a threat to f7 with his OWN threat to f2 — a mutual-destruction idea. The logic: if both sides go for the enemy king's weak square, the one whose attack lands first wins. Answer a threat with a bigger threat. One of the boldest moves in all of chess.",
          isKeyMove: true,
        },
        {
          san: "Nxf7",
          explanation:
            "White grabs the rook and forks the queen — accepting the challenge head-on rather than backing down.",
        },
        {
          san: "Bxf2+",
          explanation:
            "Black sacrifices the bishop with check, dragging White's king off e1 before collecting the f7-knight. By inserting the check first, Black exposes the white king and keeps the initiative — move order is everything in a race.",
          isKeyMove: true,
        },
        {
          san: "Kxf2",
          explanation:
            "White must accept — declining loses the queen — but the king is now exposed on f2.",
        },
        {
          san: "Nxe4+",
          explanation:
            "Black checks and grabs e4 with tempo, his knight leaping in while the white king is stuck in the open. In a king hunt, every move must come with check or threat so the defender never gets a breather.",
        },
        {
          san: "Kg1",
          explanation:
            "White's king scurries to the corner — the safest available square, getting off the exposed files.",
        },
        {
          san: "Qh4",
          explanation:
            "Black's queen joins with deadly threats including ...Qf2+ and ...Qxf7. Pour in the heavy pieces while the enemy king is loose.",
        },
        {
          san: "g3",
          explanation:
            "White interposes to block the queen's path to f2, the most forcing defensive try.",
        },
        {
          san: "Nxg3",
          explanation:
            "Black keeps sacrificing to tear open the king — the e4-knight smashes into g3 rather than retreating.",
        },
        {
          san: "hxg3",
          explanation:
            "White captures back, opening the h-file but surviving for the moment.",
        },
        {
          san: "Qxg3+",
          explanation:
            "Black checks again, regaining a pawn and keeping the white king under relentless fire — the attack must never pause.",
        },
        {
          san: "Kf1",
          explanation:
            "White's king tries to scuttle toward the queenside to escape the checks.",
        },
        {
          san: "Rf8",
          explanation:
            "Black brings the last piece into the attack, the rook eyeing f7 and the f-file. With every piece committed, the position is total chaos — and theory, not principles, decides it.",
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
