import type { Opening } from "@/types";

const ponziani: Opening = {
  id: "ponziani",
  name: "Ponziani Opening",
  side: "white",
  eco: "C44",
  description:
    "1.e4 e5 2.Nf3 Nc6 3.c3 — a deceptively solid opening that prepares an early d4 push. Often underestimated, the Ponziani leads to rich positions where White grabs a strong center while Black must tread carefully.",
  tags: ["e4", "classical", "solid", "aggressive center"],
  lines: [
    {
      id: "ponziani-main-nf6",
      name: "Main Line: 3...Nf6",
      difficulty: "beginner",
      description:
        "The most common reply. White plays d4, recaptures on d4, then pushes e5 to claim space. A clean, instructive line showing the Ponziani's central ambitions.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Ponziani Opening — 1.e4 e5 2.Nf3 Nc6 3.c3 — is one of chess's oldest and most underestimated weapons, preparing d4 two moves earlier than the Italian and Ruy López while giving nothing away in development. White's idea is deceptively simple: support d4 with c3, build a broad central pawn duo, and use the resulting space advantage to squeeze Black for the rest of the game. After 3...Nf6 4.d4 exd4 5.cxd4, the e5 push kicks the knight and creates an imposing pawn center that Black must fight or suffocate under. The Ponziani is beloved as a surprise weapon because almost nobody knows how to handle the resulting positions, and White's plan remains the same every game — dominate the center and never let Black breathe.",
          isKeyMove: true,
        },
        {
          san: "e5",
          explanation:
            "Black claims an equal share of the center. The symmetric reply is principled: whoever lets the opponent build pawns on both d4 and e4 unopposed usually ends up cramped, so Black plants a pawn in the center first and worries about pieces second.",
        },
        {
          san: "Nf3",
          explanation:
            "White develops a piece AND attacks e5 in the same move — the ideal developing move, because it does a job while improving a piece. Black must now spend time defending, which is exactly how White keeps the initiative that comes with moving first.",
        },
        {
          san: "Nc6",
          explanation:
            "Black defends e5 with a developing move, answering one threat by improving a piece. Why the knight and not ...d6 or ...Qe7? Because Nc6 is active and blocks nothing, while ...d6 would shut in the f8-bishop and ...Qe7 buries the queen. Defend with your most natural piece, not your most valuable one.",
        },
        {
          san: "c3",
          explanation:
            "The Ponziani's defining move, and it's all about preparation. Play d4 right now and ...exd4 Nxd4 just trades pieces — the center dissolves and White has nothing. With a pawn on c3 first, after ...exd4 White answers cxd4 and KEEPS a pawn on d4: a real, lasting center instead of an even swap. The price is that c3 steals the natural square from the b1-knight, so White accepts slightly clumsier development to buy a structural asset. That trade-off is the whole opening.",
          isKeyMove: true,
        },
        {
          san: "Nf6",
          explanation:
            "Black develops with a counter-threat — the knight hits e4. This is the right idea against a big-center plan: don't sit and let White build, punch back at the center so White has to react instead of roll forward.",
        },
        {
          san: "d4",
          explanation:
            "The payoff for c3. White builds the broad d4+e4 pawn duo, and because c3 backs up d4, Black can't win the center by capturing — the pawns stay. Occupying the center with PAWNS (not just pieces) is what turns a fleeting lead into durable space.",
          isKeyMove: true,
        },
        {
          san: "exd4",
          explanation:
            "Black removes one of the two big pawns rather than let White keep both and later shove e5 with tempo. It's a concession of the center, but doing nothing would let White clamp down first with d5 or e5 — releasing the tension is the lesser evil.",
        },
        {
          san: "cxd4",
          explanation:
            "The recapture that vindicates c3: White rebuilds the d4 pawn and now owns the classic d4+e4 duo plus an open c-file for the rook. This exact structure is what White has been steering toward since move three.",
        },
        {
          san: "d5",
          explanation:
            "Black strikes at the center at once. The principle behind it: a big pawn center is only an asset if it can't be challenged, so Black challenges it immediately — before White finishes developing and the center hardens into a permanent rolling weapon.",
        },
        {
          san: "e5",
          explanation:
            "White pushes past instead of trading. The d4-e5 chain gains space and kicks the f6-knight, and keeping the pawns locked (rather than allowing exchanges) freezes the position in White's favor: the e5 pawn cramps Black's kingside and steals the f6 and d6 squares. Space means more room for your pieces and less for the opponent's.",
          isKeyMove: true,
        },
        {
          san: "Ne4",
          explanation:
            "The knight leaps forward instead of retreating tamely. On e4 it sits in the heart of the board where no pawn can cheaply evict it, eyeing c3 and g3. When a piece is attacked, look first for the most ACTIVE escape square, not just the nearest safe one.",
        },
        {
          san: "Bd3",
          explanation:
            "White challenges the e4-knight and develops toward the kingside at once. The bishop also takes aim down the b1-h7 diagonal toward h7 — the start of a standard attacking battery once Black castles. Contest the opponent's best-placed piece while improving your own.",
        },
      ],
      continuationMoves: [
        {
          san: "Nc5",
          idea: "The knight retreats from e4 — but look where it lands: c5 attacks the Bd3! White cannot capture the knight because the knight is the one doing the attacking.",
        },
        {
          san: "Be2",
          idea: "White moves the bishop to safety. Taking the knight with dxc5 would leave White with no center after Bxc5 — Be2 keeps everything intact.",
        },
        {
          san: "Be7",
          idea: "Black develops quietly, preparing to castle.",
        },
        {
          san: "O-O",
          idea: "White castles, completing development.",
        },
        {
          san: "O-O",
          idea: "Both sides have castled safely. White holds the d4 and e5 pawns — a lasting space advantage. That broad center is exactly what the early c3-d4 push was designed to achieve.",
        },
      ],
      continuationIdea:
        "This is what the early c3-d4 push buys White: a broad pawn duo on d4 and e5 that grips the centre and squeezes Black for space. The e5 pawn in particular cramps Black's kingside and hands White a free hand to build a kingside initiative. A clean, lasting space advantage straight out of the opening — exactly the Ponziani's aim.",
    },
    {
      id: "ponziani-vs-d6",
      name: "vs 3...d6 — Solid Setup",
      difficulty: "beginner",
      description:
        "Black opts for a solid, flexible structure. White develops naturally and castles, reaching a balanced position with a slight space advantage.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Ponziani starts with e4 e5 Nf3 Nc6 c3, and this line diverges when Black plays d6 instead of the main-line Nf6, leading to a solid but passive structure where White builds the ideal d4 center unopposed and steadily accumulates a spatial advantage that slowly squeezes Black's position into passivity.",
          isKeyMove: true,
        },
        {
          san: "e5",
          explanation:
            "Black contests the center symmetrically — the standard, sound way to avoid being squeezed by White's two central pawns.",
        },
        {
          san: "Nf3",
          explanation:
            "Develops and attacks e5 in one move, forcing Black to respond and handing White the initiative.",
        },
        {
          san: "Nc6",
          explanation:
            "Defends e5 with a piece that blocks nothing and develops naturally — the most economical way to meet the threat.",
        },
        {
          san: "c3",
          explanation:
            "The Ponziani — a quiet pawn move that prepares d4 with support, so that after a later ...exd4 White can recapture with cxd4 and keep a real pawn center rather than trading it away.",
          isKeyMove: true,
        },
        {
          san: "d6",
          explanation:
            "Black chooses solidity over the fight: ...d6 cements e5 with a pawn so it can never be undermined. The cost is passivity — d6 hems in Black's own f8-bishop and hands White a free hand in the center. Safe, but it lets White set the agenda.",
        },
        {
          san: "d4",
          explanation:
            "White grabs the center unopposed. Because Black bolstered e5 with ...d6 instead of counter-striking with ...Nf6 or ...d5, White reaches the dream big center with no immediate challenge to it.",
          isKeyMove: true,
        },
        {
          san: "exd4",
          explanation:
            "Black releases the central tension; sitting still would let White choose the moment to play dxe5 or roll the pawns forward on his own terms.",
        },
        {
          san: "cxd4",
          explanation:
            "White rebuilds the broad d4+e4 center and opens the c-file — the same structural win as the main line, except here Black has no active counterpunch prepared.",
        },
        {
          san: "Nf6",
          explanation:
            "Black develops and finally pressures e4 — but a move late, since White is already fully centralized and comfortable.",
        },
        {
          san: "Bd3",
          explanation:
            "White develops the bishop, defends e4, and aims at the kingside. Notice it's the bishop and not the b1-knight coming out first — c3 took that knight's square, so White builds his pieces flexibly around the pawn structure.",
        },
        {
          san: "Be7",
          explanation:
            "Black develops modestly and prepares to castle. It's ...Be7 rather than the active ...Bc5 because the d6 pawn already blocks the bishop's best diagonal — solid, but cramped.",
        },
        {
          san: "O-O",
          explanation:
            "White castles: king to safety, rook toward the center. Finish development before launching action, especially when you already hold the space and time is on your side.",
        },
        {
          san: "O-O",
          explanation:
            "Black castles too. Material is level, but White is simply better placed — more space, easier piece play. Black's middlegame job is to free his cramped position; White's is to keep it cramped.",
        },
      ],
      continuationMoves: [
        {
          san: "h3",
          idea: "White spends a quiet move to prevent ...Bg4 before continuing. Prophylaxis: when you have the space and no rush, deny the opponent his one active idea before it appears.",
        },
        {
          san: "Re8",
          idea: "Black centralises the rook behind the e-file, supporting any future ...e5-break ideas and preparing counterplay.",
        },
        {
          san: "Re1",
          idea: "White answers in kind, putting his own rook on the e-file so the two heaviest pieces face off where the play will be.",
        },
        {
          san: "Nd7",
          idea: "Black repositions the knight, planning Nf8-e6 to pressure d4 — the standard regrouping when your position is cramped: reroute a passive piece to a square that hits the enemy center.",
        },
        {
          san: "Nbd2",
          idea: "White finishes developing. The vs-d6 Ponziani gives White a comfortable space advantage and a broad center — no forced win, but Black is cramped and must defend accurately for a long time.",
        },
      ],
      continuationIdea:
        "The vs d6 line gives White a comfortable Ruy López-like space advantage. Both sides are solid, but White's broad d4-e4 center cramps Black's position. White's plan is simple: develop harmoniously, then advance in the center or on the kingside when Black has no counterplay.",
    },
    {
      id: "ponziani-steinitz",
      name: "Steinitz Variation: 5.e5",
      difficulty: "intermediate",
      description:
        "After 3...Nf6 4.d4 exd4, White plays 5.e5 instead of recapturing — a sharp pawn sacrifice that drives the knight around and seizes space. Requires precise play from both sides.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Ponziani starts with e4 e5 Nf3 Nc6 c3 Nf6 d4 exd4, and this line diverges when White plays the sharp 5.e5 instead of recapturing, leading to the Steinitz Variation where White sacrifices the recapture to gain space immediately — kicking the knight around and entering sharp, forcing positions where Black must find precise defensive moves.",
          isKeyMove: true,
        },
        {
          san: "e5",
          explanation:
            "Black stakes a symmetric claim in the center — the principled reply that stops White from owning both central pawns for free.",
        },
        {
          san: "Nf3",
          explanation:
            "Develops and attacks e5, forcing Black to react and keeping the initiative.",
        },
        {
          san: "Nc6",
          explanation:
            "Defends e5 while developing — the natural, blocking-nothing way to meet the threat.",
        },
        {
          san: "c3",
          explanation:
            "The Ponziani — prepares d4 with pawn support so the coming center can be kept rather than traded off.",
          isKeyMove: true,
        },
        {
          san: "Nf6",
          explanation:
            "Black develops and counter-attacks e4, refusing to let White build the center unchallenged.",
        },
        {
          san: "d4",
          explanation:
            "White occupies the center, daring Black to release the tension.",
        },
        {
          san: "exd4",
          explanation:
            "Black captures, expecting the routine cxd4 — but White has a sharper idea.",
        },
        {
          san: "e5",
          explanation:
            "The Steinitz Variation! Rather than calmly recapturing on d4, White shoves e5 to kick the f6-knight and grab space instantly, temporarily leaving the d4 pawn alone. The idea: gain time and a space bind NOW; the pawn can be collected next move. It's a tempo-and-space play, trading a moment of material calm for initiative.",
          isKeyMove: true,
          wrongMoveWarning:
            "Try e5 instead of cxd4 — this is the sharp Steinitz line.",
        },
        {
          san: "Nd5",
          explanation:
            "The kicked knight lands on the central d5 square instead of slinking back. From d5 it's well-placed and not easily challenged — when forced to move, choose the strongest square available.",
        },
        {
          san: "cxd4",
          explanation:
            "Now White collects the pawn back, and the dust settles on a dream structure: a protected pawn on e5 cramping Black plus a mobile d4 pawn. The delayed recapture cost nothing and gained a big space bind.",
        },
        {
          san: "Nb6",
          explanation:
            "The knight steps off d5 (where it could be hit by Bc4 or c-pawn ideas) toward c4 and d5 squares. Black keeps the knight active rather than retreating to a passive home.",
        },
        {
          san: "Bc4",
          explanation:
            "White develops with menace, training the bishop on f7 — the weakest point in Black's camp before he castles — while keeping the central clamp. Develop toward the enemy weakness, not just toward a comfortable square.",
          isKeyMove: true,
        },
      ],
      continuationMoves: [
        {
          san: "d5",
          idea: "Black fights back in the center — the critical test of White's e5 pawn.",
        },
        {
          san: "exd6",
          idea: "White captures en passant — the e5 pawn takes on d6, a key tactical motif.",
        },
        {
          san: "Qxd6",
          idea: "Black recaptures, centralising the queen and fighting for equality.",
        },
        {
          san: "O-O",
          idea: "White castles and lets the position breathe. The Steinitz variation creates sharp imbalances that reward preparation.",
        },
        {
          san: "Be7",
          idea: "Black develops and prepares to castle. The Steinitz is a sharp practical weapon — if Black doesn't know the theory, White's space advantage and development lead become decisive quickly.",
        },
      ],
      continuationIdea:
        "The Steinitz Variation's e5 push seizes space and creates immediate tactical complications. After cxd4, White has a broad center that Black must challenge immediately — delay means a cramped, passive position. The sharp lines are well-analyzed but extremely complex over the board.",
    },
    {
      id: "ponziani-vs-d5",
      name: "vs 3...d5 — Counter-Attack",
      difficulty: "intermediate",
      description:
        "Black's most energetic reply — immediately striking at the center. White captures and enters an open game where precise play is key.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Ponziani starts with e4 e5 Nf3 Nc6 c3, and this line diverges when Black plays the bold d5 counter-attack — the sharpest response — leading to immediately open positions where the d4 pawn becomes the central battleground and whoever handles the resulting tactical complications better takes control.",
          isKeyMove: true,
        },
        {
          san: "e5",
          explanation:
            "Black contests the center symmetrically before anything else, the soundest way to avoid being squeezed.",
        },
        {
          san: "Nf3",
          explanation:
            "Develops and attacks e5, forcing a response and seizing the initiative.",
        },
        {
          san: "Nc6",
          explanation:
            "Defends e5 with a natural developing move that gets in nothing's way.",
        },
        {
          san: "c3",
          explanation:
            "The Ponziani — preparing d4. But this slow pawn move also reveals the opening's one drawback: it does nothing for development and leaves e4 a touch loose, which is exactly what Black pounces on next.",
          isKeyMove: true,
        },
        {
          san: "d5",
          explanation:
            "Black's sharpest answer, striking the center at once. The logic is concrete: c3 was a non-developing move, so Black opens the position immediately to exploit being slightly ahead in the fight for the center, before White can consolidate.",
          isKeyMove: true,
        },
        {
          san: "exd5",
          explanation:
            "White accepts the challenge and takes. Declining (e.g. allowing ...dxe4) would hand Black easy central play, so White grabs the pawn and prepares to hit the recapturing queen with tempo.",
        },
        {
          san: "Qxd5",
          explanation:
            "Black recaptures with the queen, centralizing it — the only way to regain the pawn, but it brings the queen out early where it can be harassed.",
        },
        {
          san: "d4",
          explanation:
            "The key idea: White strikes in the center and, crucially, gains time by NOT letting the queen sit comfortably. d4 fights for the center while the open position starts to favor whoever develops with threats. Develop with tempo against an exposed queen.",
          isKeyMove: true,
        },
        {
          san: "exd4",
          explanation:
            "Black captures, opening the e-file — the position is now fully open, so development speed and king safety decide everything.",
        },
        {
          san: "cxd4",
          explanation:
            "White recaptures and stands with a central pawn on d4 and ready-to-develop pieces. The structure is slightly loosened, but White's lead in coordination is the real asset.",
        },
        {
          san: "Bg4",
          explanation:
            "Black pins the f3-knight to the queen, gluing White's pieces together and making it harder to castle and consolidate — typical counterplay in an open game where you can't yet match the opponent's development.",
        },
        {
          san: "Be2",
          explanation:
            "White calmly breaks the pin and prepares to castle. White accepts that taking ...Bxf3 would slightly damage the pawns, judging that completing development and getting the king safe matters more than a cosmetic structural blemish.",
        },
      ],
      continuationMoves: [
        {
          san: "Ke7",
          idea: "Black's king steps to e7 — a slow move that invites tactics.",
        },
        {
          san: "Nc3",
          idea: "White develops the knight, immediately attacking Black's undefended queen on d5.",
        },
        {
          san: "Nh6",
          idea: "Black develops the knight — but the queen on d5 is still hanging!",
        },
        {
          san: "Nxd5+",
          idea: "White's knight captures the queen with check — a decisive fork! This is the tactical blow Black must avoid.",
        },
        {
          san: "Ke8",
          idea: "The king retreats. Black must move the queen immediately after Be2 to avoid losing it. The vs d5 Ponziani rewards precise tactical awareness.",
        },
      ],
      continuationIdea:
        "After the 3...d5 counter-attack, the game opens up rapidly and both sides must play aggressively. The resulting positions often feature opposite-side castling and mutual attacks — whoever attacks faster wins. White's d4-e4 center gives attacking chances but Black's queenside counterplay is real.",
    },
    {
      id: "ponziani-vs-bc5",
      name: "vs 3...Bc5 — Bishop Defence",
      difficulty: "intermediate",
      description:
        "Black develops the bishop actively to c5, contesting the center from a distance. White continues with d4 and enters a lively Open Game structure.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Ponziani starts with e4 e5 Nf3 Nc6 c3, and this line diverges when Black develops the bishop to c5 instead of playing Nf6, leading to a lively Open Game after the Bb4+ check disrupts White's development — both sides have active pieces and the resulting unbalanced positions reward concrete calculation over theoretical preparation.",
          isKeyMove: true,
        },
        {
          san: "e5",
          explanation:
            "Black takes his share of the center symmetrically — the sound first reply.",
        },
        {
          san: "Nf3",
          explanation: "Develops with a threat to e5, keeping the initiative.",
        },
        {
          san: "Nc6",
          explanation:
            "Defends e5 naturally, developing a piece that blocks nothing.",
        },
        {
          san: "c3",
          explanation:
            "The Ponziani — preparing d4. The drawback is that c3 doesn't develop a piece, which gives Black time to post a bishop actively.",
          isKeyMove: true,
        },
        {
          san: "Bc5",
          explanation:
            "Black develops the bishop to its best diagonal, eyeing f2 and discouraging White's d4 (the c5-bishop will rake the a7-g1 diagonal once the center opens). Meet a slow plan by developing actively and creating your own pressure.",
        },
        {
          san: "d4",
          explanation:
            "White carries out the plan anyway, accepting that the center will open with Black's bishop staring at his kingside — the price of the Ponziani's tempo on c3.",
        },
        {
          san: "exd4",
          explanation:
            "Black opens the center while his pieces are the more active — exactly what the Bc5 setup was aiming for.",
        },
        {
          san: "cxd4",
          explanation:
            "White recaptures and keeps the d4 pawn, but now the c5-bishop hits d4 and the position is sharp and open.",
        },
        {
          san: "Bb4+",
          explanation:
            "The bishop checks, and the point is disruption: White can't block cleanly. Bd2 or Nc3 each have a drawback, so Black gains time and unbalances White's development. A well-timed check that forces an awkward reply is worth more than one that's easily met.",
          isKeyMove: true,
        },
        {
          san: "Nc3",
          explanation:
            "White blocks by developing the queenside knight — the most active block — accepting that the knight is now pinned and a little uncomfortable. Choose the interposition that at least develops a piece.",
        },
        {
          san: "Nge7",
          explanation:
            "Black develops the knight to e7 rather than f6, deliberately keeping the f6-square and the long diagonal open and preparing ...d5 or ...d6. Develop where you don't block your own plans, even if it looks less natural.",
        },
        {
          san: "Bd3",
          explanation:
            "White develops toward the kingside, aiming the bishop at h7 and clearing the back rank to castle. Even while dealing with the pin, White keeps improving pieces and heading for safety.",
        },
      ],
      continuationMoves: [
        {
          san: "O-O",
          idea: "Black castles, securing the king before the center opens.",
        },
        {
          san: "d5",
          idea: "White advances d5, gaining space and restricting Black's pieces.",
        },
        {
          san: "Nb8",
          idea: "Black's knight retreats to avoid being locked out by the advancing d5 pawn.",
        },
        {
          san: "e5",
          idea: "White extends the pawn chain to e5, claiming a dominant center.",
        },
        {
          san: "Na6",
          idea: "Black repositions the knight to a6, ready to jump to c5. The vs Bc5 Ponziani gives White a strong pawn center — Black must maneuver carefully to find counterplay.",
        },
      ],
      continuationIdea:
        "Against the Bc5 Bishop Defence, the Ponziani becomes a dynamic Open Game after the d4-exd4-Bb4+ sequence. White must deal with the pin while maintaining the center — the resulting positions are rich and unbalanced, with both sides having active pieces and real winning chances.",
    },
    {
      id: "ponziani-steinitz-sharp",
      name: "Sharp Steinitz: 6.Bc4 Nb6 7.Bb3 d5",
      difficulty: "advanced",
      description:
        "The most forcing line of the Steinitz Variation. White plays Bc4, Black retreats with Nb6, then bombs with d5. White captures en passant, launching a tactical melee that tests both players' preparation.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Ponziani starts with e4 e5 Nf3 Nc6 c3 Nf6 d4 exd4 e5 Nd5 Bc4, and this line diverges when White plays the sharp Bc4 instead of cxd4, leading to the most forcing Steinitz line where Black's Nb6 d5 counter-blast is met with the dramatic en passant capture exd6, launching one of the most tactically intense positions in the entire Ponziani repertoire.",
          isKeyMove: true,
        },
        {
          san: "e5",
          explanation:
            "Black claims his half of the center — the principled symmetric reply.",
        },
        {
          san: "Nf3",
          explanation: "Develops and attacks e5, keeping the initiative.",
        },
        {
          san: "Nc6",
          explanation: "Defends e5 with a natural developing move.",
        },
        {
          san: "c3",
          explanation:
            "The Ponziani — preparing d4 so the center can be kept, not swapped.",
          isKeyMove: true,
        },
        {
          san: "Nf6",
          explanation:
            "Black develops and hits e4, counter-punching rather than letting White build freely.",
        },
        {
          san: "d4",
          explanation: "White occupies the center, inviting the tension.",
        },
        {
          san: "exd4",
          explanation:
            "Black releases the tension, again expecting cxd4 — but the Steinitz idea comes first.",
        },
        {
          san: "e5",
          explanation:
            "The Steinitz — White pushes past to kick the knight and grab space, leaving the d4 pawn to be collected later. Initiative and space before material recovery.",
          isKeyMove: true,
        },
        {
          san: "Nd5",
          explanation:
            "The knight retreats to the strong central d5 square rather than the rim.",
        },
        {
          san: "Bc4",
          explanation:
            "White ignores the d4 pawn for one more move to pile pressure on d5 and aim at f7 — using the initiative to keep Black on the defensive instead of cashing in too early.",
          isKeyMove: true,
        },
        {
          san: "Nb6",
          explanation:
            "The d5-knight steps away from the bishop's gaze, hitting the Bc4 in passing to gain a tempo of its own.",
        },
        {
          san: "Bb3",
          explanation:
            "White tucks the bishop onto b3, keeping it trained on the a2-g8 diagonal and f7 while sidestepping the knight — retreat to where the piece still works, not just to safety.",
        },
        {
          san: "d5",
          explanation:
            "Black's counter-blast: the d-pawn storms forward to challenge the e5 pawn and rip open the center while White's king still sits on e1. In a sharp race, the side who opens lines against the uncastled king first usually strikes first.",
          isKeyMove: true,
        },
        {
          san: "exd6",
          explanation:
            "White captures en passant! Instead of letting Black build a center with ...d5, the e5 pawn snaps off on d6, keeping lines open and refusing Black the consolidating pawn. A rare but powerful resource — en passant exists precisely to stop a pawn from sliding past your reach.",
          isKeyMove: true,
        },
        {
          san: "Qxd6",
          explanation:
            "Black recaptures with the queen, the only way to restore material — but the queen lands on an open board where it can become a target.",
        },
        {
          san: "Nxd4",
          explanation:
            "White finally collects the d4 pawn with the knight, restoring material balance in a wide-open, piece-active position. Everything White did — e5, Bc4, exd6 — was financed by this pawn, recovered now on White's terms.",
        },
      ],
      continuationMoves: [
        {
          san: "Ke7",
          idea: "Black's king steps to e7 — the only square available after the pawn storm.",
        },
        {
          san: "Nxc6+",
          idea: "White's knight captures on c6 with check! A fork attacking the king while eliminating a key defender.",
        },
        {
          san: "bxc6",
          idea: "Black recaptures with the b-pawn, shattering the queenside structure.",
        },
        {
          san: "Qd4",
          idea: "White's queen centralises to d4, dominating the board and threatening multiple targets at once.",
        },
        {
          san: "a5",
          idea: "Black advances the a-pawn, seeking queenside counterplay. The Sharp Steinitz creates one of the most theoretically dense positions in the Ponziani — both sides must know the lines precisely or fall into immediate tactical disasters.",
        },
      ],
      continuationIdea:
        "The Sharp Steinitz is the Ponziani at its most forcing and tactical. The en passant capture exd6 and the Nxd4 create immediate material imbalances where both players race to activate their pieces. Precise knowledge of the resulting positions is essential — this is the line to study when you want to take Ponziani opponents by surprise.",
    },
  ],
};

export default ponziani;
