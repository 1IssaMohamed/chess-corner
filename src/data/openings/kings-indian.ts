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
        { san: "d4", explanation: "White builds a strong center." },
        {
          san: "Nf6",
          explanation:
            "The King's Indian start — we control e4 with a piece rather than a pawn.",
          isKeyMove: true,
          wrongMoveWarning:
            "The King's Indian starts with Nf6 — controlling e4 with a piece, not a pawn.",
        },
        {
          san: "c4",
          explanation: "White expands, building an imposing center.",
        },
        {
          san: "g6",
          explanation:
            "We prepare the fianchetto! The g6 pawn prepares Bg7, our powerful long-range piece.",
          isKeyMove: true,
        },
        {
          san: "Nc3",
          explanation: "White develops the knight to its best square.",
        },
        {
          san: "Bg7",
          explanation:
            "The fianchetto! The g7 bishop controls the long a1-h8 diagonal and is the heart of the King's Indian.",
          isKeyMove: true,
        },
        {
          san: "e4",
          explanation:
            "White builds an enormous center. We let them — and then destroy it.",
        },
        {
          san: "d6",
          explanation:
            "We support the future e5 and keep the center flexible. The d6-e5-f6 triangle is the King's Indian foundation.",
          isKeyMove: true,
        },
        {
          san: "Nf3",
          explanation: "White completes development, preparing to castle.",
        },
        {
          san: "O-O",
          explanation:
            "We castle! The king is safe behind the fianchetto. Now we're ready for the counterattack.",
          isKeyMove: true,
        },
        {
          san: "Be2",
          explanation: "White develops solidly and prepares to castle.",
        },
        {
          san: "e5",
          explanation:
            "THE key King's Indian move! We strike the center. This pawn on e5 creates the dynamic imbalance — all of Black's play comes from this.",
          isKeyMove: true,
          wrongMoveWarning:
            "After castling, ALWAYS play e5 — this is the defining King's Indian counterattack!",
        },
        { san: "O-O", explanation: "White castles too." },
        {
          san: "Nc6",
          explanation:
            "We develop the last minor piece, supporting e5 and preparing Nd4 or Nd7-f6.",
          isKeyMove: true,
        },
        {
          san: "d5",
          explanation:
            "White closes the center — the classic KID positional battle: Black plays on the kingside, White on the queenside.",
        },
        {
          san: "Ne7",
          explanation:
            "The knight repositions — in closed KID positions, we maneuver to f5 or g5 to launch the kingside attack.",
          isKeyMove: true,
        },
        {
          san: "Ne1",
          explanation: "White repositions the knight — the Orthodox Main Line.",
        },
        {
          san: "Nd7",
          explanation:
            "We clear the f6 square first — the knight reroutes so the f-pawn can advance.",
          isKeyMove: true,
        },
        {
          san: "Nd3",
          explanation:
            "White's knight heads to d3, eyeing the c5 and f4 squares.",
        },
        {
          san: "f5",
          explanation:
            "We advance! The kingside attack begins — Black will play g5, h5, f4, g4.",
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
        { san: "d4", explanation: "White builds the center." },
        {
          san: "Nf6",
          explanation: "We start the King's Indian.",
          isKeyMove: true,
        },
        { san: "c4", explanation: "White expands." },
        {
          san: "g6",
          explanation: "We prepare the fianchetto.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops." },
        {
          san: "Bg7",
          explanation: "The Dragon bishop is in place.",
          isKeyMove: true,
        },
        { san: "e4", explanation: "White builds a massive center." },
        {
          san: "d6",
          explanation:
            "d6 shores up the center, prepares our coming e5 push, and completes the King's Indian pawn structure.",
          isKeyMove: true,
        },
        {
          san: "f3",
          explanation:
            "The Sämisch Attack! White plays f3, aiming for a powerful pawn center and a kingside attack. Very aggressive.",
          isKeyMove: true,
        },
        {
          san: "O-O",
          explanation:
            "We castle immediately — we need to fight back before White builds a steamroller.",
          isKeyMove: true,
          wrongMoveWarning:
            "Against the Sämisch, castle immediately and prepare c5 or e5 counterplay.",
        },
        { san: "Be3", explanation: "White develops the c1 bishop." },
        {
          san: "c5",
          explanation:
            "We counterattack! The c5 break is one of the best responses to the Sämisch — fighting the d4 pawn directly.",
          isKeyMove: true,
        },
        { san: "d5", explanation: "White advances, closing the center." },
        {
          san: "Nbd7",
          explanation:
            "We develop the queenside knight, preparing to expand with b5.",
          isKeyMove: true,
        },
        { san: "Qd2", explanation: "White prepares to castle queenside." },
        {
          san: "a6",
          explanation:
            "We prepare b5! The classic King's Indian queenside expansion plan.",
          isKeyMove: true,
        },
        {
          san: "O-O-O",
          explanation:
            "White castles queenside — opposite-side castling means a race of attacks!",
        },
        {
          san: "b5",
          explanation:
            "The queenside attack begins! Black will push b4 while White pushes g4-g5-h5.",
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
        { san: "d4", explanation: "White plays d4." },
        { san: "Nf6", explanation: "We start the King's Indian." },
        { san: "c4", explanation: "White expands." },
        {
          san: "g6",
          explanation: "We prepare the fianchetto.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops." },
        {
          san: "Bg7",
          explanation: "The Dragon bishop is in place.",
          isKeyMove: true,
        },
        { san: "e4", explanation: "White builds the center." },
        {
          san: "d6",
          explanation:
            "d6 shores up the center, prepares our coming e5 push, and completes the King's Indian pawn structure.",
          isKeyMove: true,
        },
        {
          san: "f4",
          explanation:
            "The Four Pawns Attack! White goes for the maximum center. Very ambitious — but overextended.",
          isKeyMove: true,
        },
        {
          san: "O-O",
          explanation:
            "We castle immediately — we must fight back before White consolidates.",
          isKeyMove: true,
          wrongMoveWarning:
            "Against the Four Pawns, castle immediately and prepare c5 or e5.",
        },
        { san: "Nf3", explanation: "White completes development." },
        {
          san: "c5",
          explanation:
            "We counterattack d4! This is essential — striking White's overextended center immediately.",
          isKeyMove: true,
        },
        { san: "d5", explanation: "White advances, closing the center." },
        {
          san: "e6",
          explanation:
            "We fight back in the center! Black breaks the pawn chain immediately.",
          isKeyMove: true,
        },
        { san: "dxe6", explanation: "White captures." },
        {
          san: "fxe6",
          explanation:
            "We recapture, keeping the position open — White's center is now undermined.",
          isKeyMove: true,
        },
        { san: "Be2", explanation: "White develops." },
        {
          san: "Nc6",
          explanation:
            "We develop — Black has excellent compensation with active pieces against White's weakened center.",
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
        { san: "d4", explanation: "White builds the center." },
        {
          san: "Nf6",
          explanation: "We start the King's Indian.",
          isKeyMove: true,
        },
        { san: "c4", explanation: "White expands." },
        {
          san: "g6",
          explanation: "We prepare the fianchetto.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops." },
        {
          san: "Bg7",
          explanation: "The fianchetto is complete.",
          isKeyMove: true,
        },
        { san: "e4", explanation: "White builds the center." },
        {
          san: "d6",
          explanation:
            "d6 shores up the center, prepares our coming e5 push, and completes the King's Indian pawn structure.",
          isKeyMove: true,
        },
        { san: "Be2", explanation: "White develops solidly." },
        {
          san: "O-O",
          explanation: "We castle! The king is safe.",
          isKeyMove: true,
        },
        {
          san: "Bg5",
          explanation:
            "The Averbakh! White pins the Nf6, planning a positional stranglehold.",
        },
        {
          san: "h6",
          explanation:
            "We immediately challenge the Bg5 — we must free our pieces.",
          isKeyMove: true,
          wrongMoveWarning:
            "Against the Averbakh's Bg5, play h6 immediately — we cannot allow the pin to continue.",
        },
        { san: "Be3", explanation: "White retreats the bishop to e3." },
        {
          san: "c5",
          explanation:
            "We counterattack! c5 fights against White's d4 pawn — the King's Indian counterattack.",
          isKeyMove: true,
        },
        { san: "d5", explanation: "White closes the center." },
        {
          san: "Ne8",
          explanation:
            "We clear f6 for the f5 pawn advance — the knight steps aside so the f-pawn can surge forward and launch the kingside attack.",
          isKeyMove: true,
        },
        { san: "g4", explanation: "White plays aggressively on the kingside." },
        {
          san: "f5",
          explanation:
            "We strike! Black starts the kingside attack before White's pawns get too far.",
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
        { san: "d4", explanation: "White builds the center." },
        {
          san: "Nf6",
          explanation: "We start the King's Indian.",
          isKeyMove: true,
        },
        { san: "c4", explanation: "White expands." },
        {
          san: "g6",
          explanation: "We prepare the fianchetto.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops." },
        {
          san: "Bg7",
          explanation: "The fianchetto is complete.",
          isKeyMove: true,
        },
        { san: "e4", explanation: "White builds the center." },
        {
          san: "d6",
          explanation:
            "d6 shores up the center, prepares our coming e5 push, and completes the King's Indian pawn structure.",
          isKeyMove: true,
        },
        { san: "Nf3", explanation: "White develops." },
        {
          san: "O-O",
          explanation:
            "We castle — the king is safe behind the fianchetto, and now e5 is our next move.",
          isKeyMove: true,
        },
        { san: "Be2", explanation: "White develops." },
        {
          san: "e5",
          explanation: "We play our key move, fighting for the center.",
          isKeyMove: true,
        },
        {
          san: "d5",
          explanation:
            "The Petrosian System! White closes the center early — preventing our e5-d4 push.",
          isKeyMove: true,
        },
        {
          san: "c6",
          explanation:
            "We fight back on the queenside! c6 attacks the d5 pawn — the standard King's Indian response to the Petrosian.",
          isKeyMove: true,
          wrongMoveWarning:
            "Against the Petrosian d5, play c6 — fighting on the queenside.",
        },
        {
          san: "Nd2",
          explanation: "White retreats the knight, preparing to defend d5.",
        },
        {
          san: "cxd5",
          explanation: "We capture! Opening the c-file for queenside play.",
          isKeyMove: true,
        },
        { san: "cxd5", explanation: "White recaptures." },
        {
          san: "Nh5",
          explanation:
            "We reposition the knight toward f4 — a key King's Indian attacking maneuver.",
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
        { san: "d4", explanation: "White builds the center." },
        {
          san: "Nf6",
          explanation: "We start the King's Indian.",
          isKeyMove: true,
        },
        { san: "c4", explanation: "White expands." },
        {
          san: "g6",
          explanation: "We prepare the fianchetto.",
          isKeyMove: true,
        },
        { san: "Nf3", explanation: "White develops." },
        {
          san: "Bg7",
          explanation: "We complete the fianchetto.",
          isKeyMove: true,
        },
        {
          san: "g3",
          explanation:
            "The Fianchetto Variation! White also fianchettos — creating a mirror battle of the g-bishops.",
          isKeyMove: true,
        },
        {
          san: "O-O",
          explanation:
            "We castle — the position is more strategic than tactical in the Fianchetto.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Fianchetto KID, castle and then play d6 or d5 to fight for the center.",
        },
        {
          san: "Bg2",
          explanation:
            "White completes the fianchetto. The bishops face each other on g2 and g7.",
        },
        {
          san: "d6",
          explanation: "We support e5 and keep the center flexible.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles." },
        {
          san: "Nbd7",
          explanation: "We develop the queenside knight, preparing e5.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops." },
        {
          san: "e5",
          explanation:
            "Our key counterattack! We fight for the center even in the Fianchetto line.",
          isKeyMove: true,
        },
        { san: "e4", explanation: "White builds a center." },
        {
          san: "c6",
          explanation:
            "We prepare to expand with d5 or fight for a different setup.",
          isKeyMove: true,
        },
        { san: "h3", explanation: "White prevents Bg4." },
        {
          san: "exd4",
          explanation: "We exchange in the center, relieving the tension.",
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
        { san: "d4", explanation: "White builds the center." },
        {
          san: "Nf6",
          explanation: "We start the King's Indian.",
          isKeyMove: true,
        },
        { san: "c4", explanation: "White expands." },
        {
          san: "g6",
          explanation: "We prepare the fianchetto.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops." },
        {
          san: "Bg7",
          explanation: "The fianchetto is in place.",
          isKeyMove: true,
        },
        { san: "e4", explanation: "White builds the center." },
        {
          san: "d6",
          explanation:
            "d6 shores up the center, prepares our coming e5 push, and completes the King's Indian pawn structure.",
          isKeyMove: true,
        },
        { san: "Nf3", explanation: "White develops." },
        {
          san: "O-O",
          explanation:
            "We castle — the king is safe behind the fianchetto, and now e5 is our next move.",
          isKeyMove: true,
        },
        { san: "Be2", explanation: "White develops." },
        {
          san: "e5",
          explanation: "Our key King's Indian counterattack!",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles." },
        {
          san: "Nc6",
          explanation: "We develop and support e5.",
          isKeyMove: true,
        },
        { san: "d5", explanation: "White closes the center." },
        {
          san: "Ne7",
          explanation:
            "We reposition the knight, preparing the kingside attack.",
          isKeyMove: true,
        },
        {
          san: "b4",
          explanation:
            "The Bayonet Attack! White immediately advances on the queenside — a direct confrontation.",
          isKeyMove: true,
        },
        {
          san: "Nh5",
          explanation:
            "We attack! The knight goes to h5, ready to jump to f4 or g3 — our kingside attack begins immediately.",
          isKeyMove: true,
          wrongMoveWarning:
            "Against the Bayonet b4, play Nh5 immediately — the kingside attack must start at once.",
        },
        { san: "c5", explanation: "White advances on the queenside." },
        {
          san: "Nf4",
          explanation:
            "Our knight occupies f4 — a powerful outpost targeting d3 and g2.",
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
        { san: "d4", explanation: "White builds the center." },
        {
          san: "Nf6",
          explanation: "We start the King's Indian.",
          isKeyMove: true,
        },
        { san: "c4", explanation: "White expands." },
        {
          san: "g6",
          explanation: "We prepare the fianchetto.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops." },
        {
          san: "Bg7",
          explanation: "The fianchetto is complete.",
          isKeyMove: true,
        },
        { san: "e4", explanation: "White builds the center." },
        {
          san: "d6",
          explanation:
            "d6 shores up the center, prepares our coming e5 push, and completes the King's Indian pawn structure.",
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
            "The Gligoric System! White plays Be3, supporting d4 and eyeing a future Qd2.",
        },
        {
          san: "e5",
          explanation: "We play our key move, fighting for the center.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Gligoric, we strike with e5 — the King's Indian counterattack.",
        },
        { san: "d5", explanation: "White closes the center." },
        {
          san: "Ne8",
          explanation:
            "The knight reroutes via e8, clearing f6 so the f-pawn can advance.",
          isKeyMove: true,
        },
        {
          san: "Nd2",
          explanation:
            "White repositions, preparing to contest f5 and play on the queenside.",
        },
        {
          san: "f5",
          explanation:
            "We advance on the kingside! This pawn break is the heart of our attack in the closed KID.",
          isKeyMove: true,
        },
        {
          san: "f3",
          explanation: "White reinforces e4 and braces for the kingside push.",
        },
        {
          san: "f4",
          explanation:
            "We advance further — f4 secures the kingside space and prepares g5.",
          isKeyMove: true,
        },
        {
          san: "Bf2",
          explanation:
            "White's bishop steps back, out of the path of Black's pawns.",
        },
        {
          san: "Nf6",
          explanation:
            "We redevelop the knight — the pieces are in an ideal attacking configuration.",
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
        { san: "d4", explanation: "White builds the center." },
        {
          san: "Nf6",
          explanation: "We start the King's Indian.",
          isKeyMove: true,
        },
        { san: "c4", explanation: "White expands." },
        {
          san: "g6",
          explanation: "We prepare the fianchetto.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops." },
        {
          san: "Bg7",
          explanation: "The fianchetto is complete.",
          isKeyMove: true,
        },
        { san: "e4", explanation: "White builds the center." },
        {
          san: "d6",
          explanation:
            "d6 shores up the center, prepares our coming e5 push, and completes the King's Indian pawn structure.",
          isKeyMove: true,
        },
        {
          san: "h3",
          explanation: "White prevents Bg4 — the Leningrad System.",
        },
        {
          san: "O-O",
          explanation:
            "We castle — the king is safe behind the fianchetto, and now e5 is our next move.",
          isKeyMove: true,
        },
        { san: "Nf3", explanation: "White develops." },
        {
          san: "e5",
          explanation: "We play our key counterattack!",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Leningrad KID, still play e5 — our King's Indian counterattack.",
        },
        { san: "Be2", explanation: "White develops." },
        {
          san: "Nc6",
          explanation: "We develop and support e5.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles." },
        {
          san: "Ne7",
          explanation:
            "We reposition the knight, preparing for the kingside attack.",
          isKeyMove: true,
        },
        { san: "d5", explanation: "White closes the center." },
        {
          san: "Nd7",
          explanation:
            "The knight goes to d7, preparing c5 and the typical queenside-kingside race.",
          isKeyMove: true,
        },
        { san: "c5", explanation: "White strikes on the queenside." },
        {
          san: "f5",
          explanation:
            "We fight back on the kingside — a tense race on both wings!",
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
        { san: "d4", explanation: "White builds the center." },
        {
          san: "Nf6",
          explanation: "We start the King's Indian.",
          isKeyMove: true,
        },
        { san: "c4", explanation: "White expands." },
        {
          san: "g6",
          explanation: "We prepare the fianchetto.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops." },
        {
          san: "Bg7",
          explanation: "The fianchetto is complete.",
          isKeyMove: true,
        },
        { san: "e4", explanation: "White builds the center." },
        {
          san: "d6",
          explanation:
            "d6 shores up the center, prepares our coming e5 push, and completes the King's Indian pawn structure.",
          isKeyMove: true,
        },
        { san: "Nf3", explanation: "White develops." },
        {
          san: "O-O",
          explanation:
            "We castle — the king is safe behind the fianchetto, and now e5 is our next move.",
          isKeyMove: true,
        },
        { san: "Be2", explanation: "White develops." },
        {
          san: "e5",
          explanation: "Our key counterattack!",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles." },
        {
          san: "Nc6",
          explanation: "We develop and support e5.",
          isKeyMove: true,
        },
        { san: "d5", explanation: "White closes the center." },
        {
          san: "Ne7",
          explanation: "We reposition the knight, preparing f5.",
          isKeyMove: true,
        },
        {
          san: "Ne1",
          explanation:
            "The Orthodox Main Line! White maneuvers the knight to d3 or c2 to support the queenside advance.",
          isKeyMove: true,
        },
        {
          san: "Nd7",
          explanation:
            "We clear the f6 square first so the f-pawn can advance unobstructed.",
          isKeyMove: true,
        },
        { san: "Nd3", explanation: "White continues the regrouping plan." },
        {
          san: "f5",
          explanation:
            "We start the kingside attack! Now both sides race — White on the queenside, we on the kingside.",
          isKeyMove: true,
          wrongMoveWarning:
            "We clear f6 with the knight, then play f5 — the kingside attack must begin.",
        },
        {
          san: "Bd2",
          explanation:
            "White redeploys the bishop toward the queenside action.",
        },
        {
          san: "f4",
          explanation:
            "We advance our pawns further — the kingside attack is in full swing.",
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
