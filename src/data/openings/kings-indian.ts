import type { Opening } from "@/types";

const kingsIndian: Opening = {
  id: "kings-indian",
  name: "King's Indian Defence",
  side: "black",
  eco: "E60",
  description:
    "A hypermodern defence where Black allows White to build a strong center, then fights back with e5 and d6. The King's Indian leads to rich strategic battles with attacking chances for both sides.",
  tags: ["d4", "hypermodern", "dynamic", "fianchetto"],
  lines: [
    {
      id: "classical",
      name: "Classical Variation (7...O-O 8...e5)",
      difficulty: "beginner",
      description:
        "The main line of the King's Indian. We castle and play e5, challenging White's center. This is the defining King's Indian move — all of Black's counterplay flows from the e5 pawn.",
      moves: [
        {
          san: "d4",
          explanation:
            "The King's Indian Defence — 1...Nf6 followed by g6, Bg7, d6, O-O, and e5 — is chess's most dynamic and ambitious hypermodern defence, built on the deliberate sacrifice of the center to build an unstoppable kingside attack. Where other openings fight for central squares with pawns, the King's Indian allows White to build the massive d4-c4-e4 triangle and then destroys it with e5 and f5, transforming the position into a pawn storm while the Bg7 rakes the entire a1-h8 diagonal all game. Every King's Indian tells the same story: White attacks the queenside with c5-b4-a4, Black attacks the kingside with f5-g5-h5, and whoever breaks through first wins — a brutal, electric race that defined the careers of Bobby Fischer, Garry Kasparov, and Teimour Radjabov. This is the ideal opening for players who want to WIN, not draw — the positions are imbalanced by design and always give Black genuine winning chances.",
        },
        {
          san: "Nf6",
          explanation:
            "The hypermodern start: we control the central e4-square with a PIECE instead of occupying the center with a pawn. The whole King's Indian philosophy is to let White build a big pawn center, then attack and undermine it. Influence the center from afar before committing pawns.",
          isKeyMove: true,
          wrongMoveWarning:
            "The King's Indian starts with Nf6 — controlling e4 with a piece, not a pawn.",
        },
        {
          san: "c4",
          explanation:
            "White grabs maximum central space — exactly what we're inviting, so we can target it later.",
        },
        {
          san: "g6",
          explanation:
            "We prepare the fianchetto. The bishop will sit on g7, controlling the long a1-h8 diagonal straight through White's center — pressuring it from the wing rather than blocking it.",
          isKeyMove: true,
        },
        {
          san: "Nc3",
          explanation:
            "White develops and prepares e4, building toward the big pawn center.",
        },
        {
          san: "Bg7",
          explanation:
            "The fianchetto — the soul of the King's Indian. The g7-bishop aims down the long diagonal at d4 and beyond; when our ...e5/...f5 breaks eventually open that diagonal, this bishop becomes a monster. Develop the bishop to where it will dominate once the center opens.",
          isKeyMove: true,
        },
        {
          san: "e4",
          explanation:
            "White builds the imposing d4-c4-e4 center. We deliberately let him — the hypermodern bet is that a big center can become a big target.",
        },
        {
          san: "d6",
          explanation:
            "The key restraining move: ...d6 controls e5 and prepares our own ...e5 break, while keeping the bishop's diagonal open. It's modest, but it's the foundation the whole counterattack is built on. Restrain before you strike.",
          isKeyMove: true,
        },
        {
          san: "Nf3",
          explanation:
            "White develops and supports the center, preparing to castle.",
        },
        {
          san: "O-O",
          explanation:
            "We castle to safety FIRST — the coming pawn storm will fly forward, so the king must be tucked away behind the fianchetto before we open things up. Get safe, then attack.",
          isKeyMove: true,
        },
        {
          san: "Be2",
          explanation:
            "White develops solidly and prepares to castle — the Classical main line.",
        },
        {
          san: "e5",
          explanation:
            "THE defining King's Indian move. We finally strike the center, challenging d4 directly. White must now choose: trade (dxe5), close (d5), or hold the tension — and each choice sets the structure for the whole game. Everything Black does flows from this break.",
          isKeyMove: true,
          wrongMoveWarning:
            "After castling, ALWAYS play e5 — this is the defining King's Indian counterattack!",
        },
        {
          san: "O-O",
          explanation:
            "White castles too, keeping the central tension for now.",
        },
        {
          san: "Nc6",
          explanation:
            "We develop the knight to pressure d4 (and provoke White into committing). It looks like it blocks the c-pawn, but in the closed KID structure that doesn't matter — the knight will reroute to e7 and onward to the kingside.",
          isKeyMove: true,
        },
        {
          san: "d5",
          explanation:
            "White closes the center with d5, kicking the c6-knight. This is the most important KID decision: with the center LOCKED, the game splits into two wing battles — we attack the kingside, White the queenside. A locked center is the starting gun for the opposite-wing race.",
        },
        {
          san: "Ne7",
          explanation:
            "The knight retreats to e7 — not a loss of time, but a re-route: from e7 it heads to g6 or f5 to join the kingside attack and clears c-file space. In a closed position, maneuver your pieces toward where you'll attack.",
          isKeyMove: true,
        },
        {
          san: "Ne1",
          explanation:
            "White begins his own re-route (Ne1-d3) to support the queenside c5 break — the Orthodox plan.",
        },
        {
          san: "Nd7",
          explanation:
            "We clear f6 so our f-pawn can advance unobstructed — you must move the f6-knight out of the way before ...f5-f4 can roll. Prepare the pawn storm by unblocking its path.",
          isKeyMove: true,
        },
        {
          san: "Nd3",
          explanation:
            "White's knight reaches d3, eyeing c5 and supporting the queenside expansion.",
        },
        {
          san: "f5",
          explanation:
            "The kingside attack launches! ...f5 strikes at e4 and starts the pawn avalanche (f5-f4-g5-g4) toward White's king. This is what every previous move was preparing. Now it's a race. Throw your pawns at the king you're attacking.",
          isKeyMove: true,
        },
      ],
      continuationMoves: [
        {
          san: "f3",
          idea: "White braces the centre — f3 shores up e4 and anticipates our coming pawn storm.",
        },
        {
          san: "f4",
          idea: "Our f-pawn strikes forward! The kingside assault has begun — f4 grabs space and we'll follow with g5-g4.",
        },
        {
          san: "Bd2",
          idea: "White develops quietly and prepares the queenside counter with c5.",
        },
        {
          san: "g5",
          idea: "Another pawn joins the march — g5-g4 is coming next, aiming to crack open lines to White's king.",
        },
        {
          san: "c5",
          idea: "White's queenside counterstrike! This is the classic King's Indian race: our pawns roll on the kingside, White's on the queenside. Whoever breaks through first wins. Every tempo matters.",
        },
      ],
      continuationIdea:
        "White braces with f3, then strikes with f4 to challenge our e5 pawn. We answer by rolling forward — g5 launches the kingside pawn avalanche. Meanwhile White counters on the queenside with c5, trying to undermine our structure. This is the King's Indian at its most electric: a race on opposite wings where every tempo counts and the first side to break through wins.",
    },
    {
      id: "saemisch",
      name: "Sämisch Attack (f3 System)",
      difficulty: "intermediate",
      description:
        "White plays f3, preparing e4-f4-g4 for a brutal kingside assault or just keeping control. Black must fight back immediately with c5 or e5 — passive play gets steamrolled.",
      moves: [
        {
          san: "d4",
          explanation:
            "The King's Indian starts with d4 Nf6 c4 g6 Nc3 Bg7 e4 d6, and this line diverges when White plays f3 — the Sämisch Attack — leading to opposite-side castling and a pure pawn storm race where White's g4-g5 kingside assault meets Black's b5-b4-a5 queenside counterattack, creating some of the most violent and decisive positions in all of chess.",
        },
        {
          san: "Nf6",
          explanation: "The hypermodern start — controlling e4 with a piece.",
          isKeyMove: true,
        },
        { san: "c4", explanation: "White grabs central space." },
        {
          san: "g6",
          explanation: "We prepare the fianchetto.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops and prepares e4." },
        {
          san: "Bg7",
          explanation:
            "The fianchetto — our bishop eyes the long diagonal through White's center.",
          isKeyMove: true,
        },
        { san: "e4", explanation: "White builds the big d4-c4-e4 center." },
        {
          san: "d6",
          explanation:
            "d6 controls e5, prepares our break, and keeps the bishop's diagonal open — the King's Indian foundation.",
          isKeyMove: true,
        },
        {
          san: "f3",
          explanation:
            "The Sämisch! White props up e4 with the f-pawn (rather than a knight on f3) so he can throw g4-h4 forward in a kingside storm. The trade-off: f3 blocks the g1-knight's best square and commits White to a sharp, attacking game — which we'll meet by attacking his king instead.",
          isKeyMove: true,
        },
        {
          san: "O-O",
          explanation:
            "We castle quickly — against the Sämisch we must get the king safe and counterattack before White's pawn steamroller rolls. Speed over caution here.",
          isKeyMove: true,
          wrongMoveWarning:
            "Against the Sämisch, castle immediately and prepare c5 or e5 counterplay.",
        },
        {
          san: "Be3",
          explanation: "White develops and braces d4, planning Qd2 and O-O-O.",
        },
        {
          san: "c5",
          explanation:
            "We hit the center with ...c5! Against the Sämisch this is often better than ...e5: it strikes d4 and, when White plays d5, opens the c-file and gives us a clear queenside attacking plan (...a6, ...b5). Choose the break that points your pawns at the enemy king.",
          isKeyMove: true,
        },
        {
          san: "d5",
          explanation:
            "White closes the center, committing to the wing battle and gaining space.",
        },
        {
          san: "Nbd7",
          explanation:
            "We develop the knight toward b6/e5 and support the coming ...b5 expansion.",
          isKeyMove: true,
        },
        {
          san: "Qd2",
          explanation:
            "White connects rooks and prepares to castle queenside — the storm is brewing.",
        },
        {
          san: "a6",
          explanation:
            "We prepare ...b5, the standard queenside pawn-storm lever. With White castling queenside, that's exactly where our attack must go. Aim your pawns at where the enemy king will live.",
          isKeyMove: true,
        },
        {
          san: "O-O-O",
          explanation:
            "White castles queenside — opposite-side castling, so it's now a flat-out race of pawn storms toward each other's kings.",
        },
        {
          san: "b5",
          explanation:
            "The queenside attack launches! ...b5-b4 will hit the c3-knight and rip open lines toward White's king. Note our attack often arrives first because ...b4 hits a piece (the Nc3), gaining a tempo. Strike at the king with tempo.",
          isKeyMove: true,
        },
      ],
      continuationMoves: [
        {
          san: "g4",
          idea: "White launches the kingside attack — g4-g5-h5 is coming to crack open lines.",
        },
        {
          san: "b4",
          idea: "Our queenside counter launches! b4 hits the Nc3 and opens lines toward White's castled king.",
        },
        {
          san: "g5",
          idea: "White presses the kingside attack — the h-file will open.",
        },
        {
          san: "Nb6",
          idea: "Our knight jumps to b6, hitting the c4 pawn and joining the queenside pressure.",
        },
        {
          san: "Bxc5",
          idea: "White captures on c5. The Sämisch vs c5 creates a pure race — both sides attack on their respective wings with maximum urgency. Who breaks through first wins.",
        },
      ],
      continuationIdea:
        "The Sämisch's opposite-side castling creates a pure race. White's g4-g5 kingside storm vs Black's b5-b4-a5 queenside counterattack. The side that breaks through first wins. Black's queenside attack often arrives faster because b4 disrupts the knight on c3 immediately.",
    },
    {
      id: "four-pawns",
      name: "Four Pawns Attack",
      difficulty: "intermediate",
      description:
        "White builds an aggressive four-pawn center. Black must react sharply — passive play gets crushed. Our best plan is c5 or e5 to undermine the overextended center.",
      moves: [
        {
          san: "d4",
          explanation:
            "The King's Indian starts with d4 Nf6 c4 g6 Nc3 Bg7 e4 d6, and this line diverges when White plays f4 — the Four Pawns Attack — leading to an exceptionally aggressive structure where four white pawns dominate the center, but the immediate e6 break exposes the overextension and gives Black excellent active piece play against White's too-ambitious pawn mass.",
        },
        {
          san: "Nf6",
          explanation: "The hypermodern start — controlling e4 with a piece.",
        },
        { san: "c4", explanation: "White grabs central space." },
        {
          san: "g6",
          explanation: "We prepare the fianchetto.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops and prepares e4." },
        {
          san: "Bg7",
          explanation: "The fianchetto — our bishop eyes the long diagonal.",
          isKeyMove: true,
        },
        { san: "e4", explanation: "White builds the center." },
        {
          san: "d6",
          explanation:
            "d6 controls e5 and prepares our break — the King's Indian foundation.",
          isKeyMove: true,
        },
        {
          san: "f4",
          explanation:
            "The Four Pawns Attack! White grabs the maximum center with c4-d4-e4-f4. It looks crushing, but four advanced pawns are also four targets, and the more pawns advance, the more squares they leave behind them. We strike before it consolidates.",
          isKeyMove: true,
        },
        {
          san: "O-O",
          explanation:
            "We castle at once — against this huge center we must get safe and counterattack immediately, never passively.",
          isKeyMove: true,
          wrongMoveWarning:
            "Against the Four Pawns, castle immediately and prepare c5 or e5.",
        },
        {
          san: "Nf3",
          explanation:
            "White completes development, defending the broad center.",
        },
        {
          san: "c5",
          explanation:
            "We hit the base of the pawn mass with ...c5. The bigger the center, the more urgently it must be challenged — strike before White can support it all. This is essential, not optional.",
          isKeyMove: true,
        },
        {
          san: "d5",
          explanation:
            "White closes with d5, the most testing reply, gaining space.",
        },
        {
          san: "e6",
          explanation:
            "We blast at the chain! ...e6 attacks d5 directly, refusing to let White's center stand. Against an overextended pawn mass, open a second front to crack it. This is the key Four Pawns antidote.",
          isKeyMove: true,
        },
        {
          san: "dxe6",
          explanation:
            "White captures, conceding the central tension to avoid being undermined further.",
        },
        {
          san: "fxe6",
          explanation:
            "We recapture toward the center, keeping the position open and the half-open f-file for our rook. White's grand center is now just two pawns (c4, e4) — both of which we'll target.",
          isKeyMove: true,
        },
        {
          san: "Be2",
          explanation:
            "White develops, trying to consolidate the loosened center.",
        },
        {
          san: "Nc6",
          explanation:
            "We develop with pressure — the knight eyes d4 and e5, and our active pieces swarm the weakened center. Full compensation for inviting the pawn mass.",
        },
      ],
      continuationMoves: [
        {
          san: "e5",
          idea: "White pushes e5 to restore the center pawn mass.",
        },
        {
          san: "Nd7",
          idea: "We retreat — the knight will go to c5 to fight the e5 pawn.",
        },
        {
          san: "Be3",
          idea: "White develops and supports the center.",
        },
        {
          san: "Nb6",
          idea: "Our knight heads to b6 — it will swing to c4 or d5 from there, targeting the e-pawn.",
        },
        {
          san: "Nd2",
          idea: "White defends e5. The Four Pawns Attack is one of the most aggressive setups against the King's Indian, but Black's e6 break creates immediate counterplay and targets the overextended center.",
        },
      ],
      continuationIdea:
        "The Four Pawns Attack aims to steamroll Black with four central pawns, but the e6 break creates immediate counterplay. After fxe6 and Nc6, Black has active pieces fighting against White's now-weakened center. The key is to attack the pawn mass before it consolidates.",
    },
    {
      id: "averbakh",
      name: "Averbakh System (5.Be2 O-O 6.Bg5)",
      difficulty: "intermediate",
      description:
        "White plays Be2 and Bg5 instead of Nf3, pinning the Nf6 and preparing a different type of positional pressure. Black should fight back with h6 and e5 to free the position.",
      moves: [
        {
          san: "d4",
          explanation:
            "The King's Indian starts with d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2, and this line diverges when White plays Bg5 to pin the Nf6 — the Averbakh System — leading to a positional battle where h6 immediately dislodges the bishop and Black's Ne8-f5 knight maneuver combined with the f5 advance creates the typical King's Indian kingside attack.",
        },
        {
          san: "Nf6",
          explanation: "The hypermodern start — controlling e4 with a piece.",
          isKeyMove: true,
        },
        { san: "c4", explanation: "White grabs central space." },
        {
          san: "g6",
          explanation: "We prepare the fianchetto.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops and prepares e4." },
        {
          san: "Bg7",
          explanation: "The fianchetto — eyeing the long diagonal.",
          isKeyMove: true,
        },
        { san: "e4", explanation: "White builds the center." },
        {
          san: "d6",
          explanation:
            "d6 controls e5 and prepares our break — the King's Indian foundation.",
          isKeyMove: true,
        },
        {
          san: "Be2",
          explanation:
            "White develops the bishop, keeping the g1-knight flexible.",
        },
        {
          san: "O-O",
          explanation: "We castle to safety before counterattacking.",
          isKeyMove: true,
        },
        {
          san: "Bg5",
          explanation:
            "The Averbakh! By delaying Nf3, White can play Bg5 to pin the f6-knight — specifically to discourage our thematic ...e5 (which would hang after the pin). A clever move-order to interfere with our main plan.",
        },
        {
          san: "h6",
          explanation:
            "We question the pinning bishop at once — it must commit or retreat, and we refuse to let it sit there cramping our ...e5 break. Challenge an annoying pin immediately before it interferes with your plans.",
          isKeyMove: true,
          wrongMoveWarning:
            "Against the Averbakh's Bg5, play h6 immediately — we cannot allow the pin to continue.",
        },
        {
          san: "Be3",
          explanation:
            "White retreats to e3, keeping the bishop active and bracing d4.",
        },
        {
          san: "c5",
          explanation:
            "We strike the center with ...c5 (cleaner than ...e5 here given White's setup), challenging d4 and opening a queenside plan after the close. Pick the break that gives you the most active plan.",
          isKeyMove: true,
        },
        {
          san: "d5",
          explanation:
            "White closes the center, gaining space and committing to the wing battle.",
        },
        {
          san: "Ne8",
          explanation:
            "We re-route the knight to clear f6 for the f-pawn. ...Ne8 looks backward, but it's the standard KID prep: the f6-knight must step aside so ...f5-f4 can roll. The knight reroutes via e8 toward c7/d6 or back to f6 later.",
          isKeyMove: true,
        },
        {
          san: "g4",
          explanation:
            "White grabs kingside space to slow our ...f5 — a double-edged committal advance that loosens his own king.",
        },
        {
          san: "f5",
          explanation:
            "We strike anyway! ...f5 opens the kingside before White's pawns get rolling — in the KID, the kingside is OUR battlefield and we must contest it actively.",
        },
      ],
      continuationMoves: [
        {
          san: "exf5",
          idea: "White captures — accepting the open e-file in exchange for eliminating our f5 pawn.",
        },
        {
          san: "gxf5",
          idea: "We recapture with the g-pawn, keeping the pawn center intact and aiming for f4.",
        },
        {
          san: "Nf3",
          idea: "White develops and prepares central pressure.",
        },
        {
          san: "f4",
          idea: "We advance — the f4 pawn is powerful and our kingside attack is rolling.",
        },
        {
          san: "Nd2",
          idea: "White repositions. In the Averbakh, Black's Ne8-f5 maneuver combined with g4 and f5 creates a powerful kingside attack — the h6 was key to preventing the bishop from pinning this whole plan.",
        },
      ],
      continuationIdea:
        "Against the Averbakh's Bg5 pin, h6 is critical — it forces the bishop to commit before the center closes. Then the Ne8-f5 plan launches the kingside attack. With the f5-f4 advance and the Bg7 on the long diagonal, Black creates powerful attacking chances.",
    },
    {
      id: "petrosian",
      name: "Petrosian System (5.Nf3 O-O 6.d5)",
      difficulty: "intermediate",
      description:
        "White closes the center early with d5, trying to prevent Black's e5 counterplay. Black must fight on the queenside with c6 and b5, or use different plans than the usual e5 counterattack.",
      moves: [
        {
          san: "d4",
          explanation:
            "The King's Indian starts with d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5, and this line diverges when White plays d5 immediately — the Petrosian System — leading to a locked center where the normal e5 strategy is cut off and Black's queenside c6-b5 expansion becomes the main battleground while the Nh5-Nf4 knight maneuver dominates the kingside.",
        },
        {
          san: "Nf6",
          explanation: "The hypermodern start — controlling e4 with a piece.",
          isKeyMove: true,
        },
        { san: "c4", explanation: "White grabs central space." },
        {
          san: "g6",
          explanation: "We prepare the fianchetto.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops and prepares e4." },
        {
          san: "Bg7",
          explanation: "The fianchetto — eyeing the long diagonal.",
          isKeyMove: true,
        },
        { san: "e4", explanation: "White builds the center." },
        {
          san: "d6",
          explanation:
            "d6 controls e5 and prepares our break — the King's Indian foundation.",
          isKeyMove: true,
        },
        { san: "Nf3", explanation: "White develops, supporting the center." },
        {
          san: "O-O",
          explanation:
            "We castle to safety, then strike the center with ...e5.",
          isKeyMove: true,
        },
        {
          san: "Be2",
          explanation: "White develops, completing the Classical setup.",
        },
        {
          san: "e5",
          explanation: "The key King's Indian break — challenging d4 directly.",
          isKeyMove: true,
        },
        {
          san: "d5",
          explanation:
            "The Petrosian! White closes the center IMMEDIATELY (before ...Nc6), specifically to deny us the ...Nc6 pressure and the usual structure. The locked center still means a wing race — we just adapt our plan.",
          isKeyMove: true,
        },
        {
          san: "c6",
          explanation:
            "We attack the head of White's chain (d5) from the queenside. Since the center is locked and ...Nc6 isn't available, ...c6 is the right lever — undermine the d5-pawn and open the c-file. Strike the pawn chain where you can.",
          isKeyMove: true,
          wrongMoveWarning:
            "Against the Petrosian d5, play c6 — fighting on the queenside.",
        },
        {
          san: "Nd2",
          explanation:
            "White re-routes the knight to defend the center and support c4/queenside play.",
        },
        {
          san: "cxd5",
          explanation:
            "We open the c-file for our rooks, giving ourselves concrete queenside play.",
          isKeyMove: true,
        },
        {
          san: "cxd5",
          explanation:
            "White recaptures, keeping the locked d5-e4 vs d6-e5 structure.",
        },
        {
          san: "Nh5",
          explanation:
            "We start the kingside maneuver: the knight heads for the dominant f4-square (...Nh5-Nf4). Even with queenside play available, the KID knight on f4 is too strong to pass up. Route the knight to its best outpost.",
          isKeyMove: true,
        },
      ],
      continuationMoves: [
        {
          san: "g3",
          idea: "White prepares Bg2 to contest the long diagonal against our Bg7.",
        },
        {
          san: "Nf4",
          idea: "Our knight reaches f4 — the best square in the position. It targets d3 and h3.",
        },
        {
          san: "Nf3",
          idea: "White's knight returns to f3 from d2, reinforcing the center.",
        },
        {
          san: "a5",
          idea: "We expand on the queenside while the knight dominates on f4.",
        },
        {
          san: "a4",
          idea: "White counters on the queenside. The Petrosian with d5 creates a locked center — Black's kingside knight maneuver (Nh5-Nf4) and the Bg7's long diagonal pressure are the key attacking ideas.",
        },
      ],
      continuationIdea:
        "The Petrosian System closes the center early to prevent Black's e5 plan. Black responds by fighting on both wings: the Nh5-Nf4 knight maneuver dominates the kingside while a5 expands the queenside. The Bg7 remains a long-term weapon once the pawn structure finally opens.",
    },
    {
      id: "fianchetto",
      name: "Fianchetto Variation (3.Nf3 g6 4.g3)",
      difficulty: "intermediate",
      description:
        "White also fianchettos with g3 and Bg2, creating a mirror fianchetto battle. Black must play actively with d5 or e5 to not be outplayed by White's superior bishop on g2.",
      moves: [
        {
          san: "d4",
          explanation:
            "The King's Indian starts with d4 Nf6 c4 g6, and this line diverges when White plays Nf3 and then g3 — the Fianchetto Variation — leading to a mirror battle of fianchetto bishops where the Bg2 and Bg7 face each other on the long diagonal, and Black must fight actively with e5-exd4-Ne4 to prevent White's superior bishop from dominating the position.",
        },
        {
          san: "Nf6",
          explanation: "The hypermodern start — controlling e4 with a piece.",
          isKeyMove: true,
        },
        { san: "c4", explanation: "White grabs central space." },
        {
          san: "g6",
          explanation: "We prepare the fianchetto.",
          isKeyMove: true,
        },
        {
          san: "Nf3",
          explanation:
            "White develops, keeping a flexible, fianchetto-friendly setup (no early e4).",
        },
        {
          san: "Bg7",
          explanation:
            "We complete the fianchetto, the bishop eyeing the long diagonal.",
          isKeyMove: true,
        },
        {
          san: "g3",
          explanation:
            "The Fianchetto Variation — White builds his OWN fianchetto. This is the most solid anti-KID: the g2-bishop directly opposes our g7-bishop and reinforces d5/e4. The character changes from a pawn-storm race to a quieter strategic fight.",
          isKeyMove: true,
        },
        {
          san: "O-O",
          explanation:
            "We castle — in the Fianchetto line the play is more positional than tactical, so calm, sound development comes first.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Fianchetto KID, castle and then play d6 or d5 to fight for the center.",
        },
        {
          san: "Bg2",
          explanation:
            "White completes his fianchetto. Both long-diagonal bishops now stare at each other — whoever's bishop ends up more active will have the edge.",
        },
        {
          san: "d6",
          explanation:
            "We support the coming ...e5 and keep the center flexible — the standard KID base, adaptable here.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles to safety." },
        {
          san: "Nbd7",
          explanation:
            "We develop the knight to support the ...e5 break (rather than ...Nc6, which the g2-bishop's pressure on the long diagonal discourages).",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops and reinforces e4/d5." },
        {
          san: "e5",
          explanation:
            "Our key break — we challenge the center even here, refusing to be slowly squeezed by White's harmonious fianchetto setup. Activity is the antidote to a positional grip.",
          isKeyMove: true,
        },
        {
          san: "e4",
          explanation:
            "White grabs space, transposing toward a Classical-style center.",
        },
        {
          san: "c6",
          explanation:
            "We prepare ...d5 or ...exd4 to fight for the center and challenge White's grip on the long diagonal.",
          isKeyMove: true,
        },
        {
          san: "h3",
          explanation:
            "White prevents ...Bg4, securing his kingside before the center clarifies.",
        },
        {
          san: "exd4",
          explanation:
            "We release the tension to open lines for our pieces and our Bg7, fighting White's fianchetto bishop on equal terms.",
        },
      ],
      continuationMoves: [
        {
          san: "Nxd4",
          idea: "White recaptures — the center is open and pieces can become active.",
        },
        {
          san: "Re8",
          idea: "We centralise the rook, preparing e5 or supporting an e-pawn push.",
        },
        {
          san: "e5",
          idea: "White pushes e5, gaining central space and attacking our d6 pawn.",
        },
        {
          san: "Ne4",
          idea: "Our knight jumps to e4 — a powerful centralised outpost, fighting against White's center.",
        },
        {
          san: "Nxe4",
          idea: "White captures. In the Fianchetto KID, both Bg7 and Bg2 are strong — the game becomes a battle of the long diagonal bishops. Black's e5-Ne4 counterplay creates active piece play against White's center.",
        },
      ],
      continuationIdea:
        "The Fianchetto variation creates a mirror battle of the g-bishops — both sides have powerful fianchettos. Black's response is to challenge White's superior bishop with active piece play: the exd4-Ne4 sequence creates central outposts and fighting positions where the Bg7 can become the dominant piece.",
    },
    {
      id: "bayonet-attack",
      name: "Bayonet Attack (9.b4)",
      difficulty: "advanced",
      description:
        "White advances b4 in the Main Line after White's Nc3, aiming for immediate queenside expansion. Black must respond energetically with Re8 and Nf8 to prepare the typical King's Indian kingside attack.",
      moves: [
        {
          san: "d4",
          explanation:
            "The King's Indian starts with d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7, and this line diverges when White plays b4 — the Bayonet Attack — leading to the most aggressive queenside thrust in the King's Indian where the only correct answer is the immediate Nh5-Nf4 kingside counterattack that must begin before White's b5-c5 expansion becomes overwhelming.",
        },
        {
          san: "Nf6",
          explanation: "The hypermodern start — controlling e4 with a piece.",
          isKeyMove: true,
        },
        { san: "c4", explanation: "White grabs central space." },
        {
          san: "g6",
          explanation: "We prepare the fianchetto.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops and prepares e4." },
        {
          san: "Bg7",
          explanation: "The fianchetto — eyeing the long diagonal.",
          isKeyMove: true,
        },
        { san: "e4", explanation: "White builds the center." },
        {
          san: "d6",
          explanation:
            "d6 controls e5 and prepares our break — the King's Indian foundation.",
          isKeyMove: true,
        },
        { san: "Nf3", explanation: "White develops, supporting the center." },
        {
          san: "O-O",
          explanation: "We castle to safety, then strike with ...e5.",
          isKeyMove: true,
        },
        { san: "Be2", explanation: "White develops, the Classical setup." },
        {
          san: "e5",
          explanation: "The key King's Indian break — challenging d4.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles, keeping the tension." },
        {
          san: "Nc6",
          explanation: "We pressure d4, provoking White to close the center.",
          isKeyMove: true,
        },
        {
          san: "d5",
          explanation: "White closes the center — the wing race is set.",
        },
        {
          san: "Ne7",
          explanation:
            "We re-route the knight toward the kingside (g6/f5) for the attack.",
          isKeyMove: true,
        },
        {
          san: "b4",
          explanation:
            "The Bayonet Attack! White skips slow regrouping and lunges b4 straight away to crash through on the queenside as fast as possible. It's the most direct anti-KID try — so we must counter with equal urgency.",
          isKeyMove: true,
        },
        {
          san: "Nh5",
          explanation:
            "The only correct answer: we head for f4 IMMEDIATELY. There's no time for slow prep — against the fast b4, our knight must reach the dominant f4-square at once to get our attack rolling first. In a race, don't waste a single tempo.",
          isKeyMove: true,
          wrongMoveWarning:
            "Against the Bayonet b4, play Nh5 immediately — the kingside attack must start at once.",
        },
        {
          san: "c5",
          explanation:
            "White rolls the queenside pawns forward, racing toward our king's wing.",
        },
        {
          san: "Nf4",
          explanation:
            "The knight lands on f4 — the King's Indian dream square, hitting e2/g2/d3 and anchoring the kingside attack. Now ...g5, ...h5, ...g4 will follow.",
        },
      ],
      continuationMoves: [
        {
          san: "g3",
          idea: "White tries to kick the Nf4 by preparing Bg2.",
        },
        {
          san: "g5",
          idea: "We advance the kingside pawns — the attack continues before White stabilises.",
        },
        {
          san: "Bxf4",
          idea: "White trades the bishop to eliminate the powerful Nf4.",
        },
        {
          san: "gxf4",
          idea: "We recapture with the g-pawn — now the g5 advance has cleared a path for the rook on the g-file.",
        },
        {
          san: "Kg2",
          idea: "White's king moves away from g1. The Bayonet Attack is one of the sharpest King's Indian lines — Nh5-Nf4 is the only correct antidote, launching the kingside attack before White's queenside expansion gets going.",
        },
      ],
      continuationIdea:
        "The Bayonet Attack's b4-c5 queenside expansion must be met immediately with Nh5-Nf4, launching the kingside attack. After Nf4, the g5 advance and g4 pawn storm follows — the Bg7 will power the attack once lines open. The race is extremely sharp and both sides must play precisely.",
    },
    {
      id: "gligoric",
      name: "Gligoric System (6.Be3 e5 7.d5)",
      difficulty: "advanced",
      description:
        "White plays Be3 before Nf3, keeping more flexibility. After the center closes with d5, Black plays the classic Knight-to-d7 and prepares the queenside expansion — the Gligoric is strategically rich.",
      moves: [
        {
          san: "d4",
          explanation:
            "The King's Indian starts with d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3, and this line diverges when White plays Be3 instead of Be2 — the Gligoric System — leading to a rich strategic battle where the Ne8-f5 kingside attack and the f5-f4-g5 pawn storm are Black's plan, while White's d5-closure gives a classic closed KID with attacking chances on both wings.",
        },
        {
          san: "Nf6",
          explanation: "The hypermodern start — controlling e4 with a piece.",
          isKeyMove: true,
        },
        { san: "c4", explanation: "White grabs central space." },
        {
          san: "g6",
          explanation: "We prepare the fianchetto.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops and prepares e4." },
        {
          san: "Bg7",
          explanation: "The fianchetto — eyeing the long diagonal.",
          isKeyMove: true,
        },
        { san: "e4", explanation: "White builds the center." },
        {
          san: "d6",
          explanation:
            "d6 controls e5 and prepares our break — the King's Indian foundation.",
          isKeyMove: true,
        },
        {
          san: "Nf3",
          explanation: "White develops the knight, preparing to castle.",
        },
        {
          san: "O-O",
          explanation: "We castle to safety before launching our counterplay.",
          isKeyMove: true,
        },
        {
          san: "Be3",
          explanation:
            "The Gligoric! White develops the bishop to e3 (instead of e2) to over-protect d4 and keep the option of meeting ...Ng4 with Bg5. A flexible move that asks us to commit first.",
        },
        {
          san: "e5",
          explanation:
            "Our key break — challenging d4. (If White ever allows ...Ng4 hitting the e3-bishop, that's an extra resource for us.)",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Gligoric, we strike with e5 — the King's Indian counterattack.",
        },
        {
          san: "d5",
          explanation:
            "White closes the center, committing to the wing battle.",
        },
        {
          san: "Ne8",
          explanation:
            "We clear f6 for the f-pawn — the standard re-route so ...f5-f4 can advance. The knight will return via c7/d6 or f6 later.",
          isKeyMove: true,
        },
        {
          san: "Nd2",
          explanation:
            "White re-routes the knight to support the c4/c5 queenside push and cover the e4/f3 squares.",
        },
        {
          san: "f5",
          explanation:
            "The kingside break — the heart of our attack in the closed KID. ...f5 strikes e4 and opens the f-file for our pieces.",
          isKeyMove: true,
        },
        {
          san: "f3",
          explanation:
            "White braces e4 with the f-pawn and prepares to absorb our pawn storm.",
        },
        {
          san: "f4",
          explanation:
            "We push past, locking f4 in and gaining kingside space — now the bishop on e3 must move and ...g5-g4 will roll. Fix the kingside, then storm.",
          isKeyMove: true,
        },
        {
          san: "Bf2",
          explanation:
            "White's bishop retreats out of the pawns' path, redeploying toward the queenside defense.",
        },
        {
          san: "Nf6",
          explanation:
            "We bring the knight back into the attack via f6 (now that the f-pawn is past it), eyeing g4/h5 — the pieces reach their ideal attacking formation.",
          isKeyMove: true,
        },
      ],
      continuationMoves: [
        {
          san: "c5",
          idea: "White strikes on the queenside! The c5 advance claims space before we can consolidate.",
        },
        {
          san: "g5",
          idea: "We continue the pawn avalanche — g5 prepares h5 and expands the attack.",
        },
        {
          san: "Ne2",
          idea: "White repositions the knight to e2, eyeing d4 and f4.",
        },
        {
          san: "Nbd7",
          idea: "We develop the queenside knight — heading for c5 to fight back on the queenside.",
        },
        {
          san: "a4",
          idea: "White counters on the queenside. The Gligoric is a deeply strategic King's Indian — both sides pursue their plans methodically, and the first to create a concrete breakthrough wins.",
        },
      ],
      continuationIdea:
        "The Gligoric's f5-f4-g5 kingside attack is the King's Indian at its most beautiful. After the Ne8-f6 rerouting and the pawn storm, the Bg7 becomes a devastating long-range weapon pointing at White's queenside. The key is timing — the attack must begin before White's queenside expansion gains momentum.",
    },
    {
      id: "leningrad",
      name: "Leningrad System (6.h3 e5 7.d5)",
      difficulty: "advanced",
      description:
        "White plays h3 to prevent Bg4, then closes the center with d5. Black plays the typical King's Indian setup and focuses on the Nf6-d7-c5 or f5 maneuvers for kingside play.",
      moves: [
        {
          san: "d4",
          explanation:
            "The King's Indian starts with d4 Nf6 c4 g6 Nc3 Bg7 e4 d6, and this line diverges when White plays h3 — the Leningrad System — leading to positions that are strategically identical to the Classical variation where the h3 preparation doesn't change Black's plan at all: e5, castle, Nc6, Ne7, and then the f5-f4-g5 kingside attack rolls forward exactly on schedule.",
        },
        {
          san: "Nf6",
          explanation: "The hypermodern start — controlling e4 with a piece.",
          isKeyMove: true,
        },
        { san: "c4", explanation: "White grabs central space." },
        {
          san: "g6",
          explanation: "We prepare the fianchetto.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops and prepares e4." },
        {
          san: "Bg7",
          explanation: "The fianchetto — eyeing the long diagonal.",
          isKeyMove: true,
        },
        { san: "e4", explanation: "White builds the center." },
        {
          san: "d6",
          explanation:
            "d6 controls e5 and prepares our break — the King's Indian foundation.",
          isKeyMove: true,
        },
        {
          san: "h3",
          explanation:
            "The Leningrad — White spends a move on h3 to stop ...Bg4 (a useful prophylaxis before he develops Nf3/Be3). It doesn't address our core plan, so we proceed exactly as in the Classical.",
        },
        {
          san: "O-O",
          explanation: "We castle to safety, then strike with ...e5.",
          isKeyMove: true,
        },
        { san: "Nf3", explanation: "White develops, supporting the center." },
        {
          san: "e5",
          explanation:
            "Our key break — the same plan regardless of White's h3.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Leningrad KID, still play e5 — our King's Indian counterattack.",
        },
        { san: "Be2", explanation: "White develops, completing the setup." },
        {
          san: "Nc6",
          explanation: "We pressure d4, provoking the closure.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles." },
        {
          san: "Ne7",
          explanation: "We re-route the knight toward the kingside attack.",
          isKeyMove: true,
        },
        {
          san: "d5",
          explanation: "White closes the center — the wing race begins.",
        },
        {
          san: "Nd7",
          explanation:
            "We clear f6 and prepare ...c5/...f5 — the same closed-KID re-routing as always. The plan never changes: unblock the f-pawn, then storm.",
          isKeyMove: true,
        },
        {
          san: "c5",
          explanation: "White grabs queenside space, starting his own attack.",
        },
        {
          san: "f5",
          explanation:
            "We answer on our wing — the kingside pawn storm vs White's queenside expansion. A tense race on opposite flanks, identical in spirit to every closed KID.",
        },
      ],
      continuationMoves: [
        {
          san: "Bd2",
          idea: "White develops and prepares to support the queenside c5-c6 plan.",
        },
        {
          san: "f4",
          idea: "We continue the kingside attack — f4 advances the pawn storm.",
        },
        {
          san: "b4",
          idea: "White's queenside counterattack launches — the b-pawn storms forward.",
        },
        {
          san: "g5",
          idea: "We keep pushing — g5 prepares the final pawn storm h5-g4.",
        },
        {
          san: "c6",
          idea: "White's c5 pawn advances to c6, driving into Black's queenside. The Leningrad KID is a classic race — both sides attack simultaneously on opposite wings. Black's f5-f4-g5 vs White's b4-c5-c6.",
        },
      ],
      continuationIdea:
        "The Leningrad System's h3 preparation doesn't change Black's plan at all — we still play e5, castle, and launch the f5-f4-g5 kingside attack. The race against White's queenside expansion is the same as in all closed KID positions — attack faster than the other side.",
    },
    {
      id: "orthodox-main",
      name: "Orthodox Main Line (Ne1 Plan)",
      difficulty: "advanced",
      description:
        "White plays Ne1 to regroup the knight to c2-d5 or d3, while Black launches the classic kingside attack. Both sides race with their respective wing attacks — extremely complex and theory-heavy.",
      moves: [
        {
          san: "d4",
          explanation:
            "The King's Indian starts with d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7, and this line diverges when White plays Ne1 — the Orthodox Main Line — leading to the most deeply analyzed King's Indian position in history, where White's Ne1-Nd3-c5 queenside plan races against Black's Nd7-f5-f4-g5 kingside attack in an explosive mutual pawn storm where every tempo is decisive.",
        },
        {
          san: "Nf6",
          explanation: "The hypermodern start — controlling e4 with a piece.",
          isKeyMove: true,
        },
        { san: "c4", explanation: "White grabs central space." },
        {
          san: "g6",
          explanation: "We prepare the fianchetto.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops and prepares e4." },
        {
          san: "Bg7",
          explanation: "The fianchetto — eyeing the long diagonal.",
          isKeyMove: true,
        },
        { san: "e4", explanation: "White builds the center." },
        {
          san: "d6",
          explanation:
            "d6 controls e5 and prepares our break — the King's Indian foundation.",
          isKeyMove: true,
        },
        { san: "Nf3", explanation: "White develops, supporting the center." },
        {
          san: "O-O",
          explanation: "We castle to safety, then strike with ...e5.",
          isKeyMove: true,
        },
        { san: "Be2", explanation: "White develops, the Classical setup." },
        {
          san: "e5",
          explanation: "Our key break — challenging d4.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles, keeping the tension." },
        {
          san: "Nc6",
          explanation: "We pressure d4, provoking the closure.",
          isKeyMove: true,
        },
        {
          san: "d5",
          explanation: "White closes the center — the wing race is set.",
        },
        {
          san: "Ne7",
          explanation: "We re-route the knight toward the kingside.",
          isKeyMove: true,
        },
        {
          san: "Ne1",
          explanation:
            "The Orthodox Main Line! White's knight steps back to re-route Ne1-d3, where it supports the c5 break and blockades our coming ...f4. Both sides now re-route knights toward their attacking wings.",
          isKeyMove: true,
        },
        {
          san: "Nd7",
          explanation:
            "We clear f6 so the f-pawn can advance — the essential prep before ...f5. The knight heads for c5/f6 to support the storm.",
          isKeyMove: true,
        },
        {
          san: "Nd3",
          explanation:
            "White's knight reaches d3, eyeing c5 and f4 — the heart of his blockade-and-expand plan.",
        },
        {
          san: "f5",
          explanation:
            "The kingside attack begins — both sides are now fully committed to opposite-wing storms. From here it's a pure race: our f5-f4-g5-g4 vs White's c5-cxd6. Whoever lands first wins.",
          isKeyMove: true,
          wrongMoveWarning:
            "We clear f6 with the knight, then play f5 — the kingside attack must begin.",
        },
        {
          san: "Bd2",
          explanation:
            "White redeploys the bishop toward the queenside, clearing the way for c5 and rook lifts.",
        },
        {
          san: "f4",
          explanation:
            "We push past, locking the kingside and gaining space — now ...g5-g4 will pry open lines toward White's king. The avalanche is rolling.",
          isKeyMove: true,
        },
      ],
      continuationMoves: [
        {
          san: "c5",
          idea: "White's queenside counterattack launches — the race is on.",
        },
        {
          san: "g5",
          idea: "We keep pushing — g5 prepares the final pawn storm h5 and g4.",
        },
        {
          san: "Na4",
          idea: "White's knight leaps to a4, targeting the b6 square and putting pressure on the queenside.",
        },
        {
          san: "Nf6",
          idea: "We redevelop the knight from d7 back to f6, joining the kingside attack.",
        },
        {
          san: "Nb6",
          idea: "White's knight arrives on b6 — a dominant outpost. The Orthodox Main Line is the most deeply analyzed King's Indian position — played by Kasparov, Fischer, and every great attacking player.",
        },
      ],
      continuationIdea:
        "The Orthodox Main Line is the King's Indian at its most complex. White's Ne1-Nd3-Nc2-Nb4 plan creates queenside pressure while Black's f4-g5-h5 pawn storm targets the king. Both attacks are direct and forceful — this position has been analyzed to 40+ moves by computers. Understanding the plans is more important than memorising the lines.",
    },
  ],
};

export default kingsIndian;
