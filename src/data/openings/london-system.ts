import type { Opening } from "@/types";

const londonSystem: Opening = {
  id: "london-system",
  name: "London System",
  side: "white",
  eco: "D02",
  description:
    "A solid and popular opening system for White. The London is easy to learn, hard to refute, and avoids a lot of theory. White builds a solid pawn triangle and develops all pieces to ideal squares.",
  tags: ["d4", "system", "solid", "beginner-friendly"],
  lines: [
    {
      id: "main-line",
      name: "Main Line vs d5",
      difficulty: "beginner",
      description:
        "The classic London setup against Black's d5. White builds the triangle with d4, Nf3, and Bf4, then completes development with e3, Bd3, and castles. Simple, solid, and effective.",
      moves: [
        {
          san: "d4",
          explanation:
            "The London System — built on d4, Nf3, and Bf4 — is chess's most reliable opening system, offering White a complete, coherent setup that works against virtually any Black response without requiring deep memorisation. The defining moment is playing Bf4 before e3, which ensures the bishop is active outside the pawn chain — move the bishop first or lose it forever. Every London game funnels toward the same dream position: the knight planted on e5 (supported by the d4 pawn and immovable by any pawn), the bishop targeting h7 from d3, and a kingside attack with f4-Qf3-Qh5 or a rook lift. It's the ideal system for players who want a reliable, repeatable weapon they can play for the rest of their chess career.",
          isKeyMove: true,
        },
        {
          san: "d5",
          explanation:
            "Black answers in the center, refusing to let White's d-pawn rule alone.",
        },
        {
          san: "Nf3",
          explanation:
            "White develops to the natural square, controlling e5 and preparing the whole setup. In a system opening, you play the same good squares regardless of what Black does.",
          isKeyMove: true,
        },
        {
          san: "Nf6",
          explanation: "Black develops and contests the e4 and d5 squares.",
        },
        {
          san: "Bf4",
          explanation:
            "The London move, and the one rule you must never break: the bishop comes out BEFORE e3. Play e3 first and this bishop is trapped behind its own pawns forever (the 'bad bishop' the Queen's Gambit Declined suffers). Get your dark-squared bishop outside the pawn chain while you still can.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the London System, we always play Bf4 BEFORE e3 to avoid locking in the bishop.",
        },
        {
          san: "e6",
          explanation:
            "Black opens his own f8-bishop and prepares to castle — solid, but note he's locking his OWN light-squared bishop in (the London avoids exactly this).",
        },
        {
          san: "e3",
          explanation:
            "NOW e3 is correct — the bishop is already safely outside. This completes the solid d4-e3 'triangle' (with c3 to come) that makes the London nearly impossible to crack.",
          isKeyMove: true,
        },
        {
          san: "Bd6",
          explanation:
            "Black offers to trade off White's good bishop — the standard antidote, since the f4-bishop is a key attacking piece. Challenge the opponent's best-placed minor piece.",
        },
        {
          san: "Bg3",
          explanation:
            "White sidesteps rather than trading: keeping the bishop preserves the attacking potential, and trading on d6 would hand Black a free developing recapture. If your piece is better than its counterpart, avoid the swap.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "Black castles to safety." },
        {
          san: "Nbd2",
          explanation:
            "The knight develops toward its dream square: from d2 it jumps to e5 (the outpost) or reroutes f1-g3 for the attack. Always develop this knight to d2 in the London — c3 is reserved for a pawn.",
          isKeyMove: true,
        },
        {
          san: "c5",
          explanation:
            "Black strikes at the base of White's center — the thematic challenge to the d4-pawn.",
        },
        {
          san: "c3",
          explanation:
            "White props up d4 with the pawn, completing the triangle. The London shrugs off ...c5 precisely because c3 holds d4 so cheaply — solidity by design.",
          isKeyMove: true,
        },
        { san: "Nc6", explanation: "Black develops and adds pressure to d4." },
        {
          san: "Bd3",
          explanation:
            "White completes the battery: the bishop eyes h7, lining up with the future Ne5 and Qf3/Qh5 for a kingside attack.",
        },
        {
          san: "Qe7",
          explanation:
            "Black connects rooks and supports a possible ...e5 break.",
        },
        {
          san: "O-O",
          explanation:
            "White castles — the entire setup is complete and was reached with almost no memorization. Now the plan is automatic: Ne5, f4, and a kingside attack.",
        },
        {
          san: "cxd4",
          explanation:
            "Black resolves the central tension, hoping to simplify — but this just hands White a free recapture that re-energizes the center.",
        },
      ],
      continuationMoves: [
        {
          san: "exd4",
          idea: "White recaptures, restoring the d4 pawn and re-energising the center.",
        },
        {
          san: "Bd7",
          idea: "Black tucks the bishop away — no active counterplay available.",
        },
        {
          san: "Ne5",
          idea: "The knight plants itself on e5 — the ideal London outpost. Supported by the d4 pawn, it can't be kicked by another pawn and dominates the position. From here White plays f4 to cement it, then Qf3 and a rook lift for the kingside attack.",
        },
      ],
      continuationIdea:
        "This is the London dream position. The Nd2 jumps to e5 — a permanent outpost supported by the d4 pawn and impossible to kick with a pawn. Combined with the Bd3 (aiming at h7) and the Bg3, White has a ready-made kingside attack: f4 to cement the knight, Qf3/Qh5, and a rook lift via Re3-h3. Every London game funnels toward this same simple, repeatable plan — that's why it's so good for building a repertoire.",
    },
    {
      id: "vs-kings-indian",
      name: "vs King's Indian Setup (g6)",
      difficulty: "beginner",
      description:
        "The London against Black's fianchetto with g6 and Bg7. White maintains the same London triangle and aims to undermine Black's setup with a timely c4 or e4 push.",
      moves: [
        {
          san: "d4",
          explanation:
            "The London System starts with d4 Nf3 Bf4, and this line diverges when Black plays g6 to fianchetto the king's bishop, leading to the London vs King's Indian structure — a strategically rich duel where the Ne4 central outpost is the focal point and White aims for slow queenside expansion while neutralizing the Bg7's long diagonal.",
        },
        {
          san: "Nf6",
          explanation: "Black develops and fights for the e4 square.",
        },
        {
          san: "Nf3",
          explanation:
            "White develops to its natural square — same setup, whatever Black tries.",
          isKeyMove: true,
        },
        {
          san: "g6",
          explanation:
            "Black heads for a fianchetto — the King's Indian setup, planning to pressure the center from the long diagonal rather than occupy it.",
        },
        {
          san: "Bf4",
          explanation:
            "The London bishop, out before e3 as always — here it's especially useful, since the e5-square it eyes is one the fianchettoed Bg7 wants to use.",
          isKeyMove: true,
        },
        {
          san: "Bg7",
          explanation:
            "Black completes the fianchetto, the bishop raking the long diagonal toward d4 and b2.",
        },
        {
          san: "e3",
          explanation:
            "White completes the triangle now that the bishop is safe.",
          isKeyMove: true,
        },
        {
          san: "O-O",
          explanation:
            "Black castles, ready to strike the center with ...d6 and ...e5.",
        },
        {
          san: "Be2",
          explanation:
            "A modest but sensible square: against the Bg7 fianchetto there's no target on h7 yet, so White just completes development and prepares to castle. Match your piece placement to where the targets actually are.",
          isKeyMove: true,
        },
        {
          san: "d6",
          explanation:
            "Black prepares the King's Indian's thematic ...e5 break to challenge White's center.",
        },
        {
          san: "O-O",
          explanation:
            "White castles — the solid London setup is complete and ready.",
          isKeyMove: true,
        },
        {
          san: "c5",
          explanation:
            "Black challenges d4, the standard way to fight for the center against the triangle.",
        },
        {
          san: "c3",
          explanation:
            "White holds d4 with the pawn — the London's effortless answer to ...c5.",
        },
        { san: "Nc6", explanation: "Black develops and piles onto d4." },
        {
          san: "Nbd2",
          explanation: "White develops toward e5/e4, keeping c3 for the pawn.",
        },
        {
          san: "e5",
          explanation:
            "Black plays the signature King's Indian break, finally contesting the center with a pawn.",
        },
        {
          san: "dxe5",
          explanation:
            "White captures to open the position and expose the d6-pawn as a potential target.",
        },
        {
          san: "dxe5",
          explanation:
            "Black recaptures, establishing a pawn on e5 — but it has surrendered the d5 and (after trades) the d-file to White's pieces.",
        },
      ],
      continuationMoves: [
        {
          san: "Ne4",
          idea: "White's knight occupies e4 — a powerful central outpost. The London against the King's Indian always aims for this structure.",
        },
        {
          san: "Nd4",
          idea: "Black centralises in response, fighting for control of the center.",
        },
        {
          san: "Nxc5",
          idea: "White captures the c5 pawn with the knight — winning a pawn and forcing Black to react.",
        },
        {
          san: "Ndb5",
          idea: "Black's d4-knight leaps to b5, fighting back and threatening to recapture on c7.",
        },
        {
          san: "Na4",
          idea: "White's knight retreats to a4, maintaining the c5 outpost. The London vs King's Indian is a test of pawn structure understanding — White's solid triangle vs Black's dynamic Bg7.",
        },
      ],
      continuationIdea:
        "Against the King's Indian fianchetto, the London aims to establish the Ne4 outpost in the center. The Bg7 is a long-term weapon but the Ne4 controls d6 and c5 — keeping Black passive. White's plan is slow queenside expansion while neutralizing the Bg7's pressure.",
    },
    {
      id: "london-vs-dutch",
      name: "vs Dutch (f5)",
      difficulty: "intermediate",
      description:
        "When Black plays f5 (Dutch Defence), White can use the London setup to fight back. The London bishop on f4 becomes very active in this structure, and White aims for e4 to challenge Black's center.",
      moves: [
        {
          san: "d4",
          explanation:
            "The London System starts with d4 Nf3 Bf4, and this line diverges when Black plays the Dutch Defence with f5, leading to a position where White's Bf4 is ideally placed directly opposing Black's f5 structure — the bishop creates lasting pressure and White aims for the Ne5 outpost to dominate the center.",
        },
        {
          san: "f5",
          explanation:
            "The Dutch Defence! Black grabs kingside space and aims for a ...e5 break and an attack — but ...f5 leaves the e5-square permanently weak, which is exactly what the London wants.",
        },
        {
          san: "Nf3",
          explanation:
            "White develops and controls e5, the square Black just weakened.",
        },
        { san: "Nf6", explanation: "Black develops toward the kingside." },
        {
          san: "Bf4",
          explanation:
            "The London bishop is perfectly placed against the Dutch: it eyes e5 (now a hole, since the f5-pawn can never cover it) and the b8-h2 diagonal. The same setup that's 'solid' elsewhere is positively aggressive here. The right system finds good squares automatically.",
          isKeyMove: true,
          wrongMoveWarning:
            "Against the Dutch, we play Bf4 — the bishop is extremely active facing Black's f5 pawn.",
        },
        {
          san: "e6",
          explanation: "Black opens the f8-bishop and prepares to castle.",
        },
        {
          san: "e3",
          explanation:
            "White completes the triangle, the bishop already outside it.",
        },
        { san: "Be7", explanation: "Black develops, heading for safety." },
        {
          san: "Bd3",
          explanation:
            "White builds the h7 battery — and with Black's ...f5 having loosened the kingside, the attacking chances are real.",
          isKeyMove: true,
        },
        {
          san: "O-O",
          explanation: "Black castles into a slightly airy kingside.",
        },
        {
          san: "Nbd2",
          explanation:
            "The knight routes toward the e5 outpost that Black can never challenge with a pawn.",
        },
        {
          san: "d6",
          explanation:
            "Black prepares ...e5 to fight for the center and free his game.",
        },
        {
          san: "c3",
          explanation:
            "White holds d4 and completes the triangle — rock-solid before the center opens.",
        },
        {
          san: "Nc6",
          explanation: "Black develops and supports the ...e5 break.",
        },
        { san: "O-O", explanation: "White castles, fully set up." },
        {
          san: "e5",
          explanation:
            "Black strikes in the center to free his cramped position before White's grip tightens.",
          isKeyMove: true,
        },
        {
          san: "Bg3",
          explanation:
            "The bishop steps back to g3, staying on the strong diagonal and dodging the ...e4 advance while keeping its eye on the e5-square.",
        },
      ],
      continuationMoves: [
        {
          san: "d5",
          idea: "Black expands in the centre with ...d5, adding a second pawn alongside e5.",
        },
        {
          san: "Nxe5",
          idea: "White's knight grabs the e5 pawn — seizing the strong central square that Black's f5 pawn can never cover.",
        },
        {
          san: "Nxe5",
          idea: "Black captures the knight, exchanging off the annoying outpost piece.",
        },
        {
          san: "dxe5",
          idea: "White recaptures with the d-pawn, restoring the strong e5 pawn.",
        },
        {
          san: "Ng4",
          idea: "Black's knight attacks the e5 pawn from the side. The London vs Dutch shows the Bf4's strength — it's perfectly placed facing Black's f5 setup and creates lasting pressure.",
        },
      ],
      continuationIdea:
        "Against the Dutch, the London bishop on f4 is ideally placed — directly opposing Black's f5 pawn structure. White aims for Ne5, f4 (to close the center), and a queenside expansion. Black's kingside attack comes too slowly compared to White's solid, advancing center.",
    },
    {
      id: "london-vs-bf5",
      name: "London vs Bf5 — Strategic Duel",
      difficulty: "intermediate",
      description:
        "Black develops the bishop to f5, fighting White's Bf4 symmetrically. This leads to a rich strategic middlegame where both sides have active bishops and compete for central space.",
      moves: [
        {
          san: "d4",
          explanation:
            "The London System starts with d4 Nf3 Bf4, and this line diverges when Black mirrors with Bf5 to fight for the light squares symmetrically, leading to a strategic duel where White's superior Ne5 outpost and the Bd3-h7 battery become the winning plan after the bishops are traded off.",
        },
        { san: "d5", explanation: "Black answers in the center." },
        { san: "Nf3", explanation: "White develops to its natural square." },
        { san: "Nf6", explanation: "Black develops and contests the center." },
        {
          san: "Bf4",
          explanation: "The London bishop, out before e3.",
          isKeyMove: true,
        },
        {
          san: "Bf5",
          explanation:
            "Black borrows White's idea: develop the light-squared bishop OUTSIDE the chain before ...e6 locks it in. Good moves are good for both sides — Black avoids the bad-bishop problem too.",
          isKeyMove: true,
        },
        {
          san: "e3",
          explanation: "White completes the triangle, bishop safely outside.",
        },
        {
          san: "e6",
          explanation:
            "Black supports d5 and prepares to develop and castle — safe, since his bishop is already out.",
        },
        {
          san: "Bd3",
          explanation:
            "White offers to trade the light-squared bishops. The point: removing Black's good bishop leaves White's e5-outpost plan unopposed, and whoever owns e5 owns the game here.",
          isKeyMove: true,
        },
        {
          san: "Bxd3",
          explanation:
            "Black trades — declining loses a tempo retreating, so he swaps the well-placed bishops off.",
        },
        {
          san: "Qxd3",
          explanation:
            "White recaptures, the queen centralized and eyeing the kingside light squares the trade opened up.",
        },
        { san: "Be7", explanation: "Black develops and prepares to castle." },
        { san: "O-O", explanation: "White castles to safety." },
        {
          san: "O-O",
          explanation:
            "Black castles too — both kings safe, the maneuvering battle begins.",
        },
        {
          san: "Nbd2",
          explanation:
            "White routes the knight toward the e5 outpost — the whole game now revolves around that square.",
          isKeyMove: true,
        },
        {
          san: "c5",
          explanation: "Black challenges d4 to generate queenside play.",
        },
        {
          san: "c3",
          explanation:
            "White holds d4 with the pawn, keeping the structure intact.",
        },
        { san: "Nc6", explanation: "Black develops and contests d4 and e5." },
        {
          san: "Ne5",
          explanation:
            "White plants the knight on the dream outpost, supported by d4 and uncontestable by any pawn.",
        },
        {
          san: "Nd7",
          explanation:
            "Black challenges the outpost knight with his own — the only way to dispute that powerful square.",
        },
      ],
      continuationMoves: [
        {
          san: "Nxd7",
          idea: "White trades — removing the Nd7 that challenged the outpost knight.",
        },
        {
          san: "Qxd7",
          idea: "Black recaptures, centralising the queen.",
        },
        {
          san: "dxc5",
          idea: "White captures the c5 pawn, gaining material and opening the d-file.",
        },
        {
          san: "Bxc5",
          idea: "Black recaptures with the bishop, landing on an active square.",
        },
        {
          san: "Bg3",
          idea: "White's bishop retreats to the long diagonal. The London vs Bf5 is about outpost control — the Ne5 on the strong square versus Black's pieces fighting to contest it.",
        },
      ],
      continuationIdea:
        "When Black mirrors the London with Bf5, White's response is to target the bishop with Bd3, then use the Ne5 outpost as the game's focal point. After trading bishops and establishing Ne5, White plays f4 to anchor it permanently and build a kingside attack. It's methodical but very effective.",
    },
    {
      id: "jobava-london",
      name: "Jobava London (Nc3 Bf4)",
      difficulty: "intermediate",
      description:
        "White plays both Nc3 and Bf4 for an aggressive version of the London. The Jobava London has sharp attacking potential and has been popularised by elite players including Fabiano Caruana.",
      moves: [
        {
          san: "d4",
          explanation:
            "The London System starts with d4 Nf3 Bf4, and this line diverges when White plays Nc3 alongside Bf4 — the aggressive Jobava London — leading to an entirely different attacking character: g4 claims kingside space immediately, the f4 pawn becomes a battering ram, and the resulting positions are far sharper than any standard London line.",
        },
        { san: "Nf6", explanation: "Black develops and fights for e4." },
        {
          san: "Nc3",
          explanation:
            "The Jobava difference: the knight goes to c3, not d2. This gives up the c3-pawn-support of d4 in exchange for fast, aggressive development and ideas like Nb5 and a quick e4/g4. A more committal, attacking interpretation of the London.",
          isKeyMove: true,
        },
        {
          san: "d5",
          explanation: "Black answers in the center, blunting the e4 break.",
        },
        {
          san: "Bf4",
          explanation:
            "The Jobava London! Nc3 AND Bf4 together aim for raw aggression — the bishop eyes c7, and White is ready to throw the g-pawn forward. Sharper and more dangerous than the quiet main line.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Jobava London plays both Nc3 AND Bf4 for maximum aggression.",
        },
        {
          san: "e6",
          explanation: "Black develops solidly, opening his bishop.",
        },
        {
          san: "e3",
          explanation: "White reinforces d4, bishop already outside the chain.",
        },
        {
          san: "Bd6",
          explanation: "Black offers to trade off the active f4-bishop.",
        },
        {
          san: "g4",
          explanation:
            "The Jobava's signature: instead of retreating, White attacks the d6-bishop with the g-pawn and grabs kingside space. The threat of g5 means Black can't keep the bishop on d6. Gain space and a tempo by meeting a bishop's challenge with a pawn thrust.",
          isKeyMove: true,
        },
        {
          san: "Bxf4",
          explanation:
            "Forced — g5 would otherwise trap the bishop, so Black takes, helping White open the e-file.",
        },
        {
          san: "exf4",
          explanation:
            "White recaptures toward the center, gaining a half-open e-file and a f4-pawn that supports a future Ne5/f5 kingside storm. The 'doubled' f-pawn is actually an attacking asset.",
        },
        {
          san: "c5",
          explanation:
            "Black counterstrikes d4, seeking queenside counterplay to offset White's kingside ambitions.",
        },
        {
          san: "g5",
          explanation:
            "White keeps rolling, kicking the f6-knight and gaining more space. In opposite-wing battles, push your pawns where you're attacking and don't look back.",
          isKeyMove: true,
        },
        {
          san: "Nfd7",
          explanation:
            "Black retreats the knight toward the e5/c5 squares, regrouping rather than going to the rim.",
        },
        {
          san: "dxc5",
          explanation:
            "White opens the center while ahead in space, refusing to let Black close it with ...c4.",
        },
        {
          san: "Nxc5",
          explanation:
            "Black recaptures, the knight active and eyeing d3 and e4.",
        },
        {
          san: "Bb5+",
          explanation:
            "White develops with check, gaining a tempo to bring the last bishop into play before castling.",
          isKeyMove: true,
        },
        {
          san: "Nc6",
          explanation:
            "Black blocks the check and develops, but his knight on c5 will soon prove loose.",
        },
      ],
      continuationMoves: [
        {
          san: "Nf3",
          idea: "White develops the last minor piece — now all pieces are active and the king is safe after castling.",
        },
        {
          san: "Nd3+",
          idea: "Black's knight leaps to d3 with check — forking the king and f4 pawn while disrupting White's coordination.",
        },
        {
          san: "Ke2",
          idea: "White's king steps to e2, the only way to escape the check.",
        },
        {
          san: "Nf4+",
          idea: "Black continues with Nf4+, giving another check and winning the f4 pawn.",
        },
        {
          san: "Ke3",
          idea: "White's king marches to e3 — exposed in the center. The Jobava London is the aggressive alternative to the solid main-line London, but Black must play precisely to exploit White's commitments.",
        },
      ],
      continuationIdea:
        "The Jobava London trades the typical London solidity for sharp, aggressive play. The g4-g5 space grab and f4 pawn create immediate kingside pressure. White must act quickly before Black consolidates — but if White keeps pushing, the position becomes incredibly difficult for Black to handle.",
    },
    {
      id: "london-vs-e5",
      name: "London Attack vs e5",
      difficulty: "intermediate",
      description:
        "When Black plays e5 early, White can use the London setup to fight back with Bg5 plans. This positions the London as a flexible fighting opening, not just a defensive system.",
      moves: [
        {
          san: "d4",
          explanation:
            "The London System starts with d4 Nf3 Bf4, and this line diverges when Black plays d6 followed by e5 to stake an early central claim, leading to a position where White captures dxe5 to expose the d6 pawn weakness and then plants a knight on the powerful d6 outpost for a lasting positional advantage.",
        },
        {
          san: "d6",
          explanation:
            "Black prepares an early ...e5, planning to grab the center with a pawn.",
        },
        { san: "Nf3", explanation: "White develops and controls e5." },
        { san: "Nf6", explanation: "Black develops toward the kingside." },
        {
          san: "Bf4",
          explanation: "The London bishop, out before e3.",
          isKeyMove: true,
        },
        {
          san: "e5",
          explanation:
            "Black challenges in the center — but pushing ...e5 leaves d6 backward and the d5-square weak once the e-pawn advances or trades.",
        },
        {
          san: "dxe5",
          explanation:
            "White captures to open the d-file and saddle Black with a weak, backward d6-pawn — the structural target this whole line is about. Create a fixed weakness, then pile up on it.",
          isKeyMove: true,
          wrongMoveWarning:
            "We capture dxe5 — exploiting the d6 weakness that results.",
        },
        {
          san: "dxe5",
          explanation:
            "Black recaptures, but the d6-pawn is gone and the d-file is open toward his position.",
        },
        {
          san: "Bg3",
          explanation:
            "The bishop steps back to safety on g3, staying on the strong diagonal and supporting the e5-square it eyes.",
        },
        { san: "Nc6", explanation: "Black develops and defends e5." },
        {
          san: "e3",
          explanation: "White completes the triangle and opens the f1-bishop.",
        },
        { san: "Be7", explanation: "Black develops and prepares to castle." },
        {
          san: "Bb5",
          explanation:
            "White pins the c6-knight, the defender of e5, increasing pressure on the center and preparing to damage Black's structure.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "Black castles to safety." },
        { san: "O-O", explanation: "White castles, fully developed." },
        {
          san: "a6",
          explanation:
            "Black questions the bishop, inviting the trade — but the recapture will double his pawns.",
        },
        {
          san: "Bxc6",
          explanation:
            "White trades to inflict doubled c-pawns, converting the pin into a permanent structural edge — the bishop's job is done.",
        },
        {
          san: "bxc6",
          explanation:
            "Black recaptures, accepting doubled c-pawns and a target-rich queenside.",
        },
        {
          san: "Nbd2",
          explanation:
            "White completes development, the knight heading toward c4/e4 to attack the weak pawns.",
        },
      ],
      continuationMoves: [
        {
          san: "Bg4",
          idea: "Black pins White's Nf3 — attempting to complicate and reduce White's coordination.",
        },
        {
          san: "h3",
          idea: "White challenges the pin, forcing Black to commit.",
        },
        {
          san: "Bxf3",
          idea: "Black accepts the trade, giving White the bishop pair.",
        },
        {
          san: "Qxf3",
          idea: "White recaptures with the queen, centralizing and activating it immediately.",
        },
        {
          san: "Nd7",
          idea: "Black repositions the knight. Against e5, the London's flexibility shines — White's bishop pair and active queen create persistent pressure despite the symmetric pawn structure.",
        },
      ],
      continuationIdea:
        "After dxe5, White targets the weak d6 pawn and aims to establish a knight on d6 — a powerful deep outpost. Black's doubled c-pawns add to the structural issues. The London vs e5 shows the opening's flexibility: even against sharp setups, White finds solid positional advantages.",
    },
    {
      id: "barry-attack",
      name: "Barry Attack (vs King's Indian)",
      difficulty: "intermediate",
      description:
        "White plays 1.d4 Nf6 2.Nf3 g6 3.Nc3 d5 4.Bf4 — an aggressive setup against the King's Indian/Grünfeld. The Barry Attack aims for quick queenside expansion and a direct fight for the center.",
      moves: [
        {
          san: "d4",
          explanation:
            "The London System starts with d4 Nf3 Bf4, and this line diverges when Black plays the Grünfeld-like g6 d5 setup and White adds Nc3 — the Barry Attack — leading to an aggressive structure where White fights directly for the center against the fianchetto and aims to dominate d5 with queenside expansion.",
        },
        { san: "Nf6", explanation: "Black develops and fights for e4." },
        { san: "Nf3", explanation: "White develops to its natural square." },
        {
          san: "g6",
          explanation:
            "Black heads for a fianchetto (Grünfeld/King's Indian style).",
        },
        {
          san: "Nc3",
          explanation:
            "White develops the knight early to fight for e4 and d5 — the move that turns a quiet London into the aggressive Barry Attack.",
        },
        {
          san: "d5",
          explanation:
            "Black grabs the center Grünfeld-style, before White can play e4.",
        },
        {
          san: "Bf4",
          explanation:
            "The Barry Attack! With Nc3 and Bf4 both out, White is ready for a quick Qd2, Bh6 to trade off Black's strong fianchetto bishop and a kingside attack. Against a fianchetto, swapping the g7-bishop removes the king's best defender.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Barry Attack plays Bf4 here — aiming to fight directly against Black's d5 pawn.",
        },
        {
          san: "Bg7",
          explanation: "Black completes the fianchetto, the bishop eyeing d4.",
        },
        {
          san: "e3",
          explanation: "White completes the triangle, bishop already outside.",
        },
        { san: "O-O", explanation: "Black castles into the fianchetto setup." },
        {
          san: "Be2",
          explanation:
            "White develops modestly and prepares to castle — no h7 target with Black fianchettoed.",
        },
        {
          san: "c6",
          explanation:
            "Black supports d5 solidly, Slav-style, and prepares to expand.",
        },
        { san: "O-O", explanation: "White castles to safety." },
        {
          san: "Nbd7",
          explanation: "Black develops and prepares ...e5 or ...Re8.",
        },
        {
          san: "h3",
          explanation:
            "Prophylaxis — White prevents ...Bg4 before committing to the e5 outpost plan, so the f3-knight can't be pinned.",
          isKeyMove: true,
        },
        {
          san: "Re8",
          explanation:
            "Black activates the rook, supporting a future ...e5 break.",
        },
        {
          san: "Ne5",
          explanation:
            "White plants the knight on the e5 outpost, the heart of the London/Barry setup.",
        },
        {
          san: "Nxe5",
          explanation:
            "Black trades off the dominating knight — the standard way to relieve the bind.",
        },
      ],
      continuationMoves: [
        {
          san: "dxe5",
          idea: "White recaptures with the d-pawn, maintaining a strong pawn on e5.",
        },
        {
          san: "Bg4",
          idea: "Black pins the Nf3, trying to pressure White's central setup.",
        },
        {
          san: "Bg5",
          idea: "White responds symmetrically — pinning Black's knight and fighting for the e7 square.",
        },
        {
          san: "Nd7",
          idea: "Black breaks the pin by moving the knight to d7.",
        },
        {
          san: "Bxe7",
          idea: "White trades off the bishop, maintaining the e5 stronghold. The Barry Attack creates persistent pressure against the King's Indian/Grünfeld setup.",
        },
      ],
      continuationIdea:
        "The Barry Attack aims to establish a powerful center and then push for a kingside attack similar to the Stonewall. After the Ne5 captures and f4 follow-up, White has a locked center that's hard to break. Black's fianchettoed bishop is often neutralized by the pawn on e5 blocking its diagonal.",
    },
    {
      id: "london-stonewall",
      name: "London Stonewall (f4 System)",
      difficulty: "advanced",
      description:
        "White plays the Stonewall pawn structure with d4, e3, f4, and c3, creating a fortified center. This setup is ideal for attacking the kingside while the solid pawn chain prevents counterplay.",
      moves: [
        {
          san: "d4",
          explanation:
            "The London System starts with d4 Bf4, and this line diverges when White plays e3 before Nf3 and then f4 — the Stonewall structure — leading to an impenetrable pawn fortress where the Ne5-Qh5 kingside attack combination is a direct mating threat that Black must weaken with g6 to stop.",
        },
        { san: "d5", explanation: "Black answers in the center." },
        {
          san: "e3",
          explanation:
            "White begins the Stonewall — e3 first, because here the f-pawn (not the c1-bishop) is the key piece. The bishop will reroute later; the priority is the d4-e3-f4 wall. Plan your pawn structure to match your attacking idea.",
        },
        { san: "Nf6", explanation: "Black develops and contests e4." },
        {
          san: "Bd3",
          explanation:
            "White develops the bishop to its attacking square first, aiming at h7 — the Stonewall is all about the kingside.",
        },
        {
          san: "e6",
          explanation:
            "Black develops solidly, but locks in his own light-squared bishop.",
        },
        {
          san: "f4",
          explanation:
            "The Stonewall! The d4-e3-f4 pawns form an impenetrable wall that grips e5 and walls off the center, so White can throw everything at the kingside without fear of counterplay. Lock the center, then attack on the wing where you're stronger.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Stonewall plays f4 — creating an impenetrable pawn center.",
        },
        {
          san: "c5",
          explanation:
            "Black strikes at the base of the chain — the right idea against any locked center is to attack its base.",
        },
        {
          san: "c3",
          explanation:
            "White shores up d4, keeping the wall intact so the kingside attack can proceed undisturbed.",
          isKeyMove: true,
        },
        { san: "Nc6", explanation: "Black develops and presses d4." },
        {
          san: "Nf3",
          explanation:
            "White develops the knight behind the wall, heading for the e5 outpost.",
        },
        {
          san: "Be7",
          explanation:
            "Black develops and prepares to castle — straight into the line of fire.",
        },
        {
          san: "O-O",
          explanation: "White castles, completing the attacking setup.",
        },
        {
          san: "O-O",
          explanation:
            "Black castles kingside, where White's whole army is pointing.",
        },
        {
          san: "Nbd2",
          explanation:
            "White develops the last knight, ready to support Ne5 with the f-pawn already on f4.",
        },
        {
          san: "b6",
          explanation:
            "Black prepares ...Bb7 to develop his bad bishop — but it's slow, and White's attack arrives first.",
        },
        {
          san: "Ne5",
          explanation:
            "The knight slams onto e5, rock-solid behind the f4-pawn and impossible to evict. The launchpad for the attack.",
          isKeyMove: true,
        },
        {
          san: "Bb7",
          explanation:
            "Black completes the fianchetto — but it's the wrong side of the board.",
        },
        {
          san: "Qh5",
          explanation:
            "The queen joins the hunt, eyeing h7 with the Bd3 and Ne5 all converging. Bring your heaviest piece to the attack once your minor pieces are aimed at the king.",
          isKeyMove: true,
        },
        {
          san: "g6",
          explanation:
            "Forced — Black has to throw up a pawn to stop the immediate mate threats on h7 — but every kingside pawn move creates new holes for White to exploit.",
        },
      ],
      continuationMoves: [
        {
          san: "Nxg6",
          idea: "White captures on g6! The knight sacrifice crashes through Black's weakened kingside.",
        },
        {
          san: "hxg6",
          idea: "Black must recapture — the g6 pawn is already weak.",
        },
        {
          san: "Qh7+",
          idea: "White's queen delivers check on h7 — the Black king is in serious danger.",
        },
        {
          san: "Kxh7",
          idea: "The Black king captures the queen's square, stepping into the attack.",
        },
        {
          san: "Bxg6+",
          idea: "White crashes through with another capture, completely destroying Black's pawn cover. The London Stonewall's Qh5 + Ne5 combination is a direct mating attack — one of the London's most powerful attacking motifs.",
        },
      ],
      continuationIdea:
        "The London Stonewall attack is one of the most brutal attacking patterns in the London System. The Ne5 + Qh5 combination forces Black to weaken with g6 — and then White sacrifices on g6 to crash through. This attacking pattern works because the f4 pawn supports everything and Black has no counterplay.",
    },
    {
      id: "torre-attack",
      name: "Torre Attack (Bg5)",
      difficulty: "advanced",
      description:
        "White plays Bg5 instead of Bf4, pinning the Nf6 against the queen. The Torre is a flexible London-related system with attacking potential based on the pin and quick central action.",
      moves: [
        {
          san: "d4",
          explanation:
            "The London System starts with d4 Nf3, and this line diverges when White plays Bg5 instead of Bf4 — the Torre Attack — leading to a pin-based positional system where the Bh4 pin on Nf6 creates lasting pressure and the Ne5 outpost combined with f3-f4 launches a kingside initiative.",
        },
        { san: "Nf6", explanation: "Black develops and fights for e4." },
        { san: "Nf3", explanation: "White develops to its natural square." },
        {
          san: "e6",
          explanation:
            "Black opens his bishop and prepares to develop the kingside.",
        },
        {
          san: "Bg5",
          explanation:
            "The Torre Attack! Same family as the London, but the bishop goes to g5 to PIN the f6-knight rather than eye e5. The pin immediately ties down Black's most useful defender. Same setup, different bishop placement to suit the position.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Torre Attack plays Bg5 — pinning the Nf6 for tactical and positional pressure.",
        },
        {
          san: "d5",
          explanation:
            "Black answers in the center, taking the sting out of a future e4.",
        },
        {
          san: "e3",
          explanation: "White reinforces d4, bishop already outside the chain.",
        },
        {
          san: "Be7",
          explanation:
            "Black unpins by backing up the knight, calmly developing.",
        },
        {
          san: "Nbd2",
          explanation: "White develops toward e5, keeping c3 for the pawn.",
        },
        { san: "O-O", explanation: "Black castles to safety." },
        {
          san: "c3",
          explanation:
            "White builds the flexible center and keeps options for both e4 and a kingside push.",
          isKeyMove: true,
        },
        {
          san: "Nbd7",
          explanation:
            "Black develops and supports the ...c5 and ...e5 breaks.",
        },
        {
          san: "Bd3",
          explanation:
            "White builds the h7 battery, aiming the bishop at the king.",
        },
        { san: "c5", explanation: "Black challenges d4 to free his game." },
        { san: "O-O", explanation: "White castles, fully developed." },
        {
          san: "h6",
          explanation: "Black questions the g5-bishop, asking it to declare.",
        },
        {
          san: "Bh4",
          explanation:
            "White keeps the pin — releasing it would free Black's knight, so the bishop holds on and Black must still reckon with ...g5 weakening his king to break it.",
          isKeyMove: true,
        },
        {
          san: "b6",
          explanation: "Black prepares ...Bb7 to develop the last minor piece.",
        },
        {
          san: "Ne5",
          explanation:
            "White occupies the e5 outpost, combining the pin (Bh4) with the strong knight — the Torre's two main weapons working together.",
        },
        {
          san: "Bb7",
          explanation:
            "Black fianchettoes, finally activating the light-squared bishop.",
        },
      ],
      continuationMoves: [
        {
          san: "Ne4",
          idea: "White's knight jumps to e4 — the other London outpost, supporting d6 and f6.",
        },
        {
          san: "Ne4",
          idea: "Black mirrors, centralising a knight too.",
        },
        {
          san: "Bxe7",
          idea: "White trades off Black's Be7, leaving Black's king slightly exposed.",
        },
        {
          san: "Qxe7",
          idea: "Black recaptures. The Torre's Bh4 pin has served its purpose — Nf6 can't easily break free.",
        },
        {
          san: "f3",
          idea: "White kicks the Ne4 and prepares f4-f5. The Torre Attack's Bh4 pin creates lasting pressure that forces Black to constantly deal with the Nf6 pin before doing anything else.",
        },
      ],
      continuationIdea:
        "The Torre Attack's Bh4 pin is the whole point — while the Nf6 is pinned, Black struggles to coordinate. White plays Ne4, prepares f4-f5, and attacks the kingside while Black is stuck dealing with the pin. It's a flexible, aggressive alternative to the standard Bf4 London.",
    },
  ],
};

export default londonSystem;
