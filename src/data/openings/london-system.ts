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
        { san: "d5", explanation: "Black mirrors White in the center." },
        {
          san: "Nf3",
          explanation: "Develops the knight to its best square.",
          isKeyMove: true,
        },
        { san: "Nf6", explanation: "Black develops the kingside knight." },
        {
          san: "Bf4",
          explanation:
            "The London move! The bishop goes to f4 BEFORE e3 — this is the defining placement of the London System.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the London System, we always play Bf4 BEFORE e3 to avoid locking in the bishop.",
        },
        {
          san: "e6",
          explanation: "Black prepares to develop the f8 bishop and castle.",
        },
        {
          san: "e3",
          explanation:
            "White supports d4 and completes the pawn triangle. The bishop is safe on f4.",
          isKeyMove: true,
        },
        {
          san: "Bd6",
          explanation:
            "Black challenges the London bishop — the main way to contest White's setup.",
        },
        {
          san: "Bg3",
          explanation:
            "White retreats rather than exchanging — the bishop stays active on g3.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "Black castles." },
        {
          san: "Nbd2",
          explanation:
            "White develops the queenside knight to d2, heading for e5 or f1-g3.",
          isKeyMove: true,
        },
        {
          san: "c5",
          explanation: "Black counterattacks d4 — the standard plan.",
        },
        {
          san: "c3",
          explanation:
            "White supports d4 solidly. The London handles c5 very comfortably.",
          isKeyMove: true,
        },
        { san: "Nc6", explanation: "Black develops the queenside knight." },
        {
          san: "Bd3",
          explanation: "White develops the bishop to d3, eyeing the h7 pawn.",
        },
        { san: "Qe7", explanation: "Black develops the queen." },
        {
          san: "O-O",
          explanation:
            "White castles. The London setup is complete — now plan the middlegame attack.",
        },
        {
          san: "cxd4",
          explanation:
            "Black captures in the center, simplifying the pawn structure.",
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
        { san: "Nf6", explanation: "Black develops and fights for e4." },
        {
          san: "Nf3",
          explanation: "White develops naturally.",
          isKeyMove: true,
        },
        {
          san: "g6",
          explanation: "Black prepares a fianchetto — the King's Indian setup.",
        },
        {
          san: "Bf4",
          explanation: "The London bishop — to f4 before e3.",
          isKeyMove: true,
        },
        { san: "Bg7", explanation: "Black completes the fianchetto." },
        {
          san: "e3",
          explanation: "White completes the London triangle.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "Black castles." },
        {
          san: "Be2",
          explanation: "White develops the bishop to e2, preparing to castle.",
          isKeyMove: true,
        },
        {
          san: "d6",
          explanation: "Black supports e5 and prepares the standard KID plan.",
        },
        {
          san: "O-O",
          explanation: "White castles. The London setup is complete.",
          isKeyMove: true,
        },
        {
          san: "c5",
          explanation:
            "Black counterattacks d4 — the main plan in this structure.",
        },
        { san: "c3", explanation: "White maintains the center solidly." },
        { san: "Nc6", explanation: "Black develops." },
        { san: "Nbd2", explanation: "White develops the queenside knight." },
        {
          san: "e5",
          explanation:
            "Black plays the signature KID pawn move — fighting for the center.",
        },
        { san: "dxe5", explanation: "White captures, simplifying the center." },
        {
          san: "dxe5",
          explanation: "Black recaptures, establishing the pawn on e5.",
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
          explanation: "The Dutch Defence! Black plays for a kingside attack.",
        },
        { san: "Nf3", explanation: "White develops." },
        { san: "Nf6", explanation: "Black develops." },
        {
          san: "Bf4",
          explanation:
            "The London vs Dutch — White's bishop is perfectly placed on f4 against the Dutch setup.",
          isKeyMove: true,
          wrongMoveWarning:
            "Against the Dutch, we play Bf4 — the bishop is extremely active facing Black's f5 pawn.",
        },
        { san: "e6", explanation: "Black prepares to develop and castle." },
        { san: "e3", explanation: "White completes the triangle." },
        { san: "Be7", explanation: "Black develops." },
        {
          san: "Bd3",
          explanation: "White develops the bishop aggressively.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "Black castles." },
        {
          san: "Nbd2",
          explanation:
            "White develops the queenside knight, heading for e5 via the strong square.",
        },
        { san: "d6", explanation: "Black takes central space." },
        {
          san: "c3",
          explanation: "White supports d4 and completes the triangle.",
        },
        { san: "Nc6", explanation: "Black develops the queenside knight." },
        { san: "O-O", explanation: "White castles to safety." },
        {
          san: "e5",
          explanation:
            "Black strikes in the center — the position becomes rich and strategically complex.",
          isKeyMove: true,
        },
        {
          san: "Bg3",
          explanation:
            "White's bishop sidesteps to g3, keeping it on the strong diagonal.",
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
        { san: "d5", explanation: "Black controls the center." },
        { san: "Nf3", explanation: "White develops." },
        { san: "Nf6", explanation: "Black develops." },
        { san: "Bf4", explanation: "The London bishop.", isKeyMove: true },
        {
          san: "Bf5",
          explanation:
            "Black mirrors! Also developing the bishop outside the pawn chain — the symmetrical bishop battle.",
          isKeyMove: true,
        },
        { san: "e3", explanation: "White solidifies the triangle." },
        { san: "e6", explanation: "Black prepares to castle." },
        {
          san: "Bd3",
          explanation:
            "White develops aggressively, fighting to trade bishops.",
          isKeyMove: true,
        },
        { san: "Bxd3", explanation: "Black trades the light-squared bishops." },
        {
          san: "Qxd3",
          explanation: "White recaptures, centralising the queen.",
        },
        { san: "Be7", explanation: "Black develops and prepares to castle." },
        { san: "O-O", explanation: "White castles." },
        { san: "O-O", explanation: "Black castles." },
        {
          san: "Nbd2",
          explanation: "White develops the queenside knight.",
          isKeyMove: true,
        },
        { san: "c5", explanation: "Black challenges the d4 pawn." },
        { san: "c3", explanation: "White maintains the center." },
        { san: "Nc6", explanation: "Black develops." },
        { san: "Ne5", explanation: "White occupies the powerful e5 outpost." },
        { san: "Nd7", explanation: "Black challenges the Ne5." },
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
        { san: "Nf6", explanation: "Black develops." },
        {
          san: "Nc3",
          explanation:
            "White develops the queenside knight early — a key difference from the standard London.",
          isKeyMove: true,
        },
        { san: "d5", explanation: "Black plays d5." },
        {
          san: "Bf4",
          explanation:
            "The Jobava London! Both Nc3 and Bf4 are played, creating aggressive attacking chances.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Jobava London plays both Nc3 AND Bf4 for maximum aggression.",
        },
        { san: "e6", explanation: "Black develops normally." },
        { san: "e3", explanation: "White solidifies the center." },
        { san: "Bd6", explanation: "Black challenges the Bf4." },
        {
          san: "g4",
          explanation:
            "White advances g4 aggressively, attacking the Bd6 while gaining space!",
          isKeyMove: true,
        },
        {
          san: "Bxf4",
          explanation:
            "Black captures — forced since g5 threatens to trap the bishop.",
        },
        {
          san: "exf4",
          explanation:
            "White recaptures, establishing a powerful f4 pawn for a direct kingside attack.",
        },
        { san: "c5", explanation: "Black counterattacks d4." },
        {
          san: "g5",
          explanation:
            "White grabs more kingside space and drives the f6 knight away.",
          isKeyMove: true,
        },
        {
          san: "Nfd7",
          explanation:
            "Black's knight retreats to d7, eyeing the e5 and c5 squares.",
        },
        {
          san: "dxc5",
          explanation:
            "White grabs the c5 pawn, opening the centre while ahead in space.",
        },
        { san: "Nxc5", explanation: "Black recaptures with the knight." },
        {
          san: "Bb5+",
          explanation: "White checks, developing with tempo.",
          isKeyMove: true,
        },
        { san: "Nc6", explanation: "Black blocks the check and develops." },
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
        { san: "d6", explanation: "Black prepares e5." },
        { san: "Nf3", explanation: "White develops." },
        { san: "Nf6", explanation: "Black develops." },
        { san: "Bf4", explanation: "The London bishop.", isKeyMove: true },
        {
          san: "e5",
          explanation: "Black stakes a claim in the center with e5.",
        },
        {
          san: "dxe5",
          explanation:
            "White captures — opening the d-file and creating a pawn weakness on d6.",
          isKeyMove: true,
          wrongMoveWarning:
            "We capture dxe5 — exploiting the d6 weakness that results.",
        },
        { san: "dxe5", explanation: "Black recaptures." },
        {
          san: "Bg3",
          explanation:
            "White repositions the bishop to g3 where it's safe and active.",
        },
        { san: "Nc6", explanation: "Black develops." },
        { san: "e3", explanation: "White solidifies." },
        { san: "Be7", explanation: "Black develops and prepares to castle." },
        {
          san: "Bb5",
          explanation: "White pins the Nc6, adding pressure to the center.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "Black castles." },
        { san: "O-O", explanation: "White castles." },
        {
          san: "a6",
          explanation: "Black questions the bishop, inviting the trade on c6.",
        },
        {
          san: "Bxc6",
          explanation:
            "White trades, creating a doubled pawn structure for Black.",
        },
        { san: "bxc6", explanation: "Black recaptures." },
        { san: "Nbd2", explanation: "White completes development." },
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
        { san: "Nf6", explanation: "Black develops." },
        { san: "Nf3", explanation: "White develops." },
        { san: "g6", explanation: "Black prepares the fianchetto." },
        {
          san: "Nc3",
          explanation: "White develops the queenside knight early.",
        },
        {
          san: "d5",
          explanation: "Black challenges with d5 — the Grünfeld-like setup.",
        },
        {
          san: "Bf4",
          explanation:
            "The Barry Attack! White plays Bf4 to challenge Black's d5-g6 setup aggressively.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Barry Attack plays Bf4 here — aiming to fight directly against Black's d5 pawn.",
        },
        { san: "Bg7", explanation: "Black completes the fianchetto." },
        { san: "e3", explanation: "White solidifies." },
        { san: "O-O", explanation: "Black castles." },
        { san: "Be2", explanation: "White develops the bishop." },
        { san: "c6", explanation: "Black supports d5." },
        { san: "O-O", explanation: "White castles." },
        { san: "Nbd7", explanation: "Black develops the queenside knight." },
        {
          san: "h3",
          explanation:
            "White prevents Bg4, securing the center before pushing forward.",
          isKeyMove: true,
        },
        { san: "Re8", explanation: "Black activates the rook." },
        { san: "Ne5", explanation: "White occupies the powerful e5 outpost." },
        { san: "Nxe5", explanation: "Black challenges White's outpost." },
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
        { san: "d5", explanation: "Black controls the center." },
        {
          san: "e3",
          explanation:
            "White begins the Stonewall setup — e3 supports the coming f4.",
        },
        { san: "Nf6", explanation: "Black develops." },
        {
          san: "Bd3",
          explanation: "White develops the bishop aggressively, aiming at h7.",
        },
        { san: "e6", explanation: "Black develops." },
        {
          san: "f4",
          explanation:
            "The Stonewall! White creates a fortified center with d4-e3-f4 (played before Nf3 so the f-pawn is free). Less common than Bf4 but very solid.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Stonewall plays f4 — creating an impenetrable pawn center.",
        },
        { san: "c5", explanation: "Black immediately counterattacks." },
        {
          san: "c3",
          explanation: "White maintains the pawn structure.",
          isKeyMove: true,
        },
        { san: "Nc6", explanation: "Black develops." },
        {
          san: "Nf3",
          explanation: "White develops the knight behind the pawn wall.",
        },
        { san: "Be7", explanation: "Black develops and prepares to castle." },
        { san: "O-O", explanation: "White castles." },
        { san: "O-O", explanation: "Black castles." },
        { san: "Nbd2", explanation: "White develops." },
        {
          san: "b6",
          explanation: "Black prepares Bb7 to fianchetto the c8 bishop.",
        },
        {
          san: "Ne5",
          explanation: "White places the knight on the powerful e5 outpost!",
          isKeyMove: true,
        },
        { san: "Bb7", explanation: "Black completes the fianchetto." },
        {
          san: "Qh5",
          explanation: "White's queen joins the kingside attack!",
          isKeyMove: true,
        },
        {
          san: "g6",
          explanation:
            "Black must weaken the kingside to stop the immediate threats.",
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
        { san: "Nf6", explanation: "Black develops." },
        { san: "Nf3", explanation: "White develops." },
        { san: "e6", explanation: "Black prepares to develop the kingside." },
        {
          san: "Bg5",
          explanation:
            "The Torre Attack! White pins the Nf6 instead of playing Bf4 — putting immediate pressure on Black.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Torre Attack plays Bg5 — pinning the Nf6 for tactical and positional pressure.",
        },
        { san: "d5", explanation: "Black fights for the center." },
        { san: "e3", explanation: "White supports the center." },
        { san: "Be7", explanation: "Black unpins and develops." },
        { san: "Nbd2", explanation: "White develops the queenside knight." },
        { san: "O-O", explanation: "Black castles." },
        {
          san: "c3",
          explanation: "White prepares a flexible center.",
          isKeyMove: true,
        },
        { san: "Nbd7", explanation: "Black develops." },
        { san: "Bd3", explanation: "White develops the bishop aggressively." },
        { san: "c5", explanation: "Black counterattacks d4." },
        { san: "O-O", explanation: "White castles." },
        { san: "h6", explanation: "Black challenges the Bg5 pin." },
        {
          san: "Bh4",
          explanation: "White maintains the pin on the Nf6.",
          isKeyMove: true,
        },
        { san: "b6", explanation: "Black prepares Bb7." },
        {
          san: "Ne5",
          explanation: "White occupies e5 with the powerful knight.",
        },
        { san: "Bb7", explanation: "Black fianchettos the c8 bishop." },
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
