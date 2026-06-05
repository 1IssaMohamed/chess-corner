import type { Opening } from "@/types";

const sicilianDefense: Opening = {
  id: "sicilian-defense",
  name: "Sicilian Defence",
  side: "black",
  eco: "B20",
  description:
    "The most popular chess opening at all levels. Black fights for the center asymmetrically with c5, leading to unbalanced positions full of dynamic play. The Sicilian gives Black winning chances from the very start.",
  tags: ["e4", "open-game", "dynamic", "counterplay"],
  lines: [
    {
      id: "open-sicilian-intro",
      name: "Open Sicilian — Core Ideas",
      difficulty: "beginner",
      description:
        "Learn the fundamental ideas of the Open Sicilian: the c5 vs d4 pawn battle, the open c-file for Black, and why the position is fundamentally different from symmetric e5 responses.",
      moves: [
        { san: "e4", explanation: "White controls the center." },
        {
          san: "c5",
          explanation:
            "The Sicilian! We fight for the d4 square without giving White a symmetric center. Black will get the open c-file.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Sicilian always starts with 1...c5 — fighting asymmetrically.",
        },
        { san: "Nf3", explanation: "White develops and prepares d4." },
        {
          san: "d6",
          explanation:
            "We prepare Nf6 and e5 while supporting a future pawn advance. d6 is the most flexible Sicilian move.",
          isKeyMove: true,
        },
        {
          san: "d4",
          explanation: "White opens the center — the Open Sicilian!",
        },
        {
          san: "cxd4",
          explanation:
            "We capture! Black trades the c-pawn for White's d-pawn. We now have more central pawns and a semi-open c-file.",
          isKeyMove: true,
        },
        {
          san: "Nxd4",
          explanation:
            "White recaptures with the knight, which controls the center powerfully.",
        },
        {
          san: "Nf6",
          explanation:
            "We develop and attack the e4 pawn. The Nf6 is Black's most important piece in the Sicilian.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White defends e4 and develops." },
        {
          san: "a6",
          explanation:
            "We prevent Bb5+ and prepare queenside expansion with b5. The Najdorf move.",
        },
        {
          san: "Be3",
          explanation:
            "White develops the bishop, preparing Qd2 and long castles.",
        },
        {
          san: "e5",
          explanation: "We kick the Nd4 and establish a strong e5 outpost.",
          isKeyMove: true,
        },
        { san: "Nb3", explanation: "The knight retreats — it was attacked." },
        { san: "Be6", explanation: "We develop the c8 bishop actively on e6." },
        { san: "f3", explanation: "White prepares a kingside attack." },
        { san: "Be7", explanation: "We prepare to castle." },
        {
          san: "Qd2",
          explanation:
            "White prepares to castle queenside and launch a pawn storm.",
        },
        {
          san: "O-O",
          explanation: "We castle into safety before the storm begins.",
        },
      ],
      continuationMoves: [
        {
          san: "O-O-O",
          idea: "White castles queenside — deliberately on the opposite side from us. This signals a race: White will storm our king while we attack theirs. Opposite-side castling always means all-out war.",
        },
        {
          san: "Nbd7",
          idea: "We develop and prepare our queenside break — the knight clears the way for ...b5-b4.",
        },
        {
          san: "g4",
          idea: "The pawn storm begins! White hurls the g-pawn forward to crack open lines toward our king.",
        },
        {
          san: "b5",
          idea: "Our counterattack launches! We race White's g-pawn with our own queenside assault — b5-b4 will hit the Nc3 and pry open files toward White's king.",
        },
        {
          san: "g5",
          idea: "White presses on — g5 threatens to open the g-file. The race is on: whoever breaks through first wins. This is the Sicilian at its most electric.",
        },
      ],
      continuationIdea:
        "The defining Sicilian battle: opposite-side castling. White castles queenside and hurls the kingside pawns forward (g4-g5-h4-h5) at our king, while we counterattack on the other wing with ...b5-b4 hitting the Nc3 and prying open the queenside. It's a flat-out race — and because our attack down the half-open c-file and the b-pawn often arrives first, the Sicilian gives Black real winning chances, not just equality. That imbalance is the whole reason we play 1...c5.",
    },
    {
      id: "najdorf",
      name: "Najdorf Variation (5...a6)",
      difficulty: "intermediate",
      description:
        "The most popular chess opening at the elite level. After 5...a6, Black prepares b5 and e5 while preventing Bb5+. Used by Fischer, Kasparov, Carlsen, and nearly every World Champion.",
      moves: [
        { san: "e4", explanation: "White plays e4." },
        { san: "c5", explanation: "The Sicilian!" },
        { san: "Nf3", explanation: "White develops." },
        { san: "d6", explanation: "We prepare Nf6 and e5." },
        { san: "d4", explanation: "White opens the center." },
        { san: "cxd4", explanation: "We capture the d4 pawn." },
        { san: "Nxd4", explanation: "White recaptures." },
        { san: "Nf6", explanation: "We develop and attack e4." },
        { san: "Nc3", explanation: "White defends e4." },
        {
          san: "a6",
          explanation:
            "The Najdorf move! Prevents Bb5+ and prepares b5. This quiet pawn move launches one of the richest opening systems in chess.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Najdorf, 5...a6 is the key move — preparing b5 and preventing Bb5+.",
        },
        {
          san: "Bg5",
          explanation: "White pins the Nf6 — the Classical Najdorf with Bg5.",
        },
        {
          san: "e6",
          explanation:
            "We support d5 and unpin the knight. Black prepares to counterattack.",
          isKeyMove: true,
        },
        { san: "f4", explanation: "White builds a kingside pawn storm." },
        {
          san: "Be7",
          explanation:
            "We prepare to castle. The bishop is solid on e7 — it defends the king and can move to f6 later.",
          isKeyMove: true,
        },
        {
          san: "Qf3",
          explanation:
            "White brings the queen to f3 supporting the f4-f5 attack.",
        },
        {
          san: "Qc7",
          explanation:
            "We centralise the queen — defending d6 and preparing queenside counterplay on the c-file.",
          isKeyMove: true,
        },
        {
          san: "O-O-O",
          explanation:
            "White castles queenside — a direct clash! White attacks on the kingside.",
        },
        {
          san: "Nbd7",
          explanation: "We develop the last minor piece and prepare to castle.",
        },
      ],
    },
    {
      id: "dragon",
      name: "Dragon Variation (5...g6)",
      difficulty: "intermediate",
      description:
        "Black fianchettos the dark-squared bishop to g7, creating the Dragon pawn structure. The Dragon bishop on g7 is a devastating long-range weapon in one of the most violent openings in chess.",
      moves: [
        { san: "e4", explanation: "White plays e4." },
        { san: "c5", explanation: "The Sicilian!" },
        { san: "Nf3", explanation: "White develops." },
        { san: "d6", explanation: "We prepare Nf6 and g6." },
        { san: "d4", explanation: "White opens the center." },
        { san: "cxd4", explanation: "We capture." },
        { san: "Nxd4", explanation: "White recaptures." },
        { san: "Nf6", explanation: "We develop." },
        { san: "Nc3", explanation: "White defends e4." },
        {
          san: "g6",
          explanation:
            "The Dragon! We fianchetto the dark-squared bishop. The Bg7 will be a dominant piece for the rest of the game.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Dragon, g6 is the defining move — preparing the powerful Bg7.",
        },
        {
          san: "Be3",
          explanation:
            "White develops — the Yugoslav Attack begins with Be3 f3.",
        },
        {
          san: "Bg7",
          explanation:
            "The Dragon bishop is placed! It controls the long a1-h8 diagonal and will power Black's counterattack.",
          isKeyMove: true,
        },
        {
          san: "f3",
          explanation:
            "White starts the Yugoslav Attack — preparing g4-g5 and a kingside assault.",
        },
        {
          san: "O-O",
          explanation:
            "We castle immediately. Black's king is safe behind the Dragon bishop.",
          isKeyMove: true,
        },
        {
          san: "Qd2",
          explanation:
            "White prepares to castle queenside and launch the attack.",
        },
        {
          san: "Nc6",
          explanation:
            "We develop and attack the Nd4. In the Dragon, Black counterattacks on the queenside while White attacks the kingside.",
          isKeyMove: true,
        },
        {
          san: "O-O-O",
          explanation:
            "White castles queenside — opposite wing castling and a race of attacks!",
        },
        {
          san: "d5",
          explanation:
            "We advance! Black fights back in the center — this is key to the Dragon counterattack.",
        },
      ],
    },
    {
      id: "scheveningen",
      name: "Scheveningen Variation (5...e6)",
      difficulty: "intermediate",
      description:
        "Black plays e6 (instead of e5) creating a small center with d6-e6. This solid structure supports all counterplay plans and was a favourite of Bobby Fischer's opponents and later Garry Kasparov.",
      moves: [
        { san: "e4", explanation: "White plays e4." },
        { san: "c5", explanation: "The Sicilian!" },
        { san: "Nf3", explanation: "White develops." },
        { san: "d6", explanation: "We prepare Nf6 and e6." },
        { san: "d4", explanation: "White opens the center." },
        { san: "cxd4", explanation: "We capture." },
        { san: "Nxd4", explanation: "White recaptures." },
        { san: "Nf6", explanation: "We develop." },
        { san: "Nc3", explanation: "White defends e4." },
        {
          san: "e6",
          explanation:
            "The Scheveningen! We build a small center with d6-e6. Very solid and flexible — Kasparov's favourite.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Scheveningen plays e6 — creating the small center structure d6-e6.",
        },
        {
          san: "Be2",
          explanation: "White develops solidly (Classical Variation).",
        },
        {
          san: "Be7",
          explanation:
            "We develop and prepare to castle. The bishop on e7 is solid and prepares kingside safety.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles." },
        {
          san: "O-O",
          explanation:
            "We castle! Black's king is safe. Now we start our counterplay.",
          isKeyMove: true,
        },
        { san: "f4", explanation: "White prepares a kingside pawn attack." },
        {
          san: "a6",
          explanation:
            "We prepare b5! Black's classic queenside expansion — the a6-b5 plan is one of the best in the Scheveningen.",
          isKeyMove: true,
        },
        { san: "Be3", explanation: "White develops the bishop." },
        {
          san: "b5",
          explanation:
            "Black expands on the queenside! The counterplay has begun.",
        },
      ],
    },
    {
      id: "kan",
      name: "Kan / Paulsen Variation (5...a6 4...e6)",
      difficulty: "intermediate",
      description:
        "Black plays e6 and a6, the super-flexible Kan structure. Black avoids committing to a specific pawn structure early, maintaining maximum flexibility. The resulting positions suit positional players.",
      moves: [
        { san: "e4", explanation: "White plays e4." },
        { san: "c5", explanation: "The Sicilian!" },
        { san: "Nf3", explanation: "White develops." },
        {
          san: "e6",
          explanation: "We play e6 first — keeping the position flexible.",
        },
        { san: "d4", explanation: "White opens the center." },
        { san: "cxd4", explanation: "We capture." },
        { san: "Nxd4", explanation: "White recaptures." },
        {
          san: "a6",
          explanation:
            "The Kan! Combined with e6, this gives Black maximum flexibility — the queenside is ready to expand but nothing is committed.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Kan plays a6 with e6 already played — the hyper-flexible Sicilian structure.",
        },
        { san: "Nc3", explanation: "White develops." },
        {
          san: "Qc7",
          explanation:
            "We centralise the queen early — defending e5, watching c5, and preparing b5. Very flexible.",
          isKeyMove: true,
        },
        { san: "Bd3", explanation: "White develops the bishop aggressively." },
        {
          san: "Bc5",
          explanation:
            "We develop the bishop actively on c5, eyeing f2 and d4.",
          isKeyMove: true,
        },
        { san: "Nb3", explanation: "White retreats the knight." },
        {
          san: "Ba7",
          explanation:
            "We move the bishop to a7 — safe and still controlling the f2-a7 diagonal.",
        },
        { san: "O-O", explanation: "White castles." },
        { san: "Nf6", explanation: "We develop the knight." },
        { san: "Re1", explanation: "White reinforces e4." },
        {
          san: "b5",
          explanation:
            "We expand on the queenside! The Kan's queenside expansion plan.",
        },
      ],
    },
    {
      id: "taimanov",
      name: "Taimanov Variation (4...Nc6)",
      difficulty: "intermediate",
      description:
        "Black develops the knight to c6 instead of d6. The Taimanov is a flexible and sound system where Black keeps the option to play b6-Bb7 or e5 depending on White's setup.",
      moves: [
        { san: "e4", explanation: "White plays e4." },
        { san: "c5", explanation: "The Sicilian!" },
        { san: "Nf3", explanation: "White develops." },
        {
          san: "Nc6",
          explanation:
            "The Taimanov move — Black develops the knight to c6 immediately, fighting for e4 and d4.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Taimanov plays Nc6 early — fighting for the center with pieces.",
        },
        { san: "d4", explanation: "White opens the center." },
        { san: "cxd4", explanation: "We capture." },
        { san: "Nxd4", explanation: "White recaptures." },
        {
          san: "e6",
          explanation:
            "We play e6, combining with Nc6 for a super solid and flexible setup — the Taimanov structure.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops." },
        {
          san: "Qc7",
          explanation:
            "We play Qc7 — the typical Taimanov queen move, centralising and preparing to castle.",
          isKeyMove: true,
        },
        { san: "Be3", explanation: "White develops." },
        {
          san: "a6",
          explanation:
            "We prevent Bb5 and prepare b5. The standard queenside expansion in the Taimanov.",
          isKeyMove: true,
        },
        { san: "Be2", explanation: "White develops." },
        {
          san: "Nf6",
          explanation:
            "We develop the kingside knight. All minor pieces are now developing efficiently.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles." },
        {
          san: "Be7",
          explanation: "We develop the king's bishop and prepare to castle.",
        },
        { san: "f4", explanation: "White prepares a kingside attack." },
        {
          san: "O-O",
          explanation:
            "We castle! The position is balanced with counterplay on both wings.",
        },
      ],
    },
    {
      id: "accelerated-dragon",
      name: "Accelerated Dragon (4...g6)",
      difficulty: "intermediate",
      description:
        "Black plays g6 before d6, aiming to play d5 in one move rather than two. This avoids the Yugoslav Attack and is a slightly more solid version of the Dragon, popular among club players.",
      moves: [
        { san: "e4", explanation: "White plays e4." },
        { san: "c5", explanation: "The Sicilian!" },
        { san: "Nf3", explanation: "White develops." },
        {
          san: "Nc6",
          explanation: "We develop the knight to c6, fighting for the center.",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White opens the center." },
        { san: "cxd4", explanation: "We capture." },
        { san: "Nxd4", explanation: "White recaptures." },
        {
          san: "g6",
          explanation:
            "The Accelerated Dragon! We fianchetto without playing d6 first — this allows d5 in one move later.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Accelerated Dragon plays g6 before d6 — we can later play d5 in one move!",
        },
        {
          san: "c4",
          explanation:
            "White plays the Maróczy Bind — c4 to restrict Black's d5 advance.",
        },
        {
          san: "Bg7",
          explanation:
            "We complete the fianchetto. The Dragon bishop is in place, controlling the long diagonal.",
          isKeyMove: true,
        },
        { san: "Be3", explanation: "White develops." },
        { san: "Nf6", explanation: "We develop and attack e4." },
        { san: "Nc3", explanation: "White defends e4." },
        {
          san: "O-O",
          explanation: "We castle! The king is safe behind the Dragon bishop.",
          isKeyMove: true,
        },
        { san: "Be2", explanation: "White develops solidly." },
        {
          san: "d6",
          explanation:
            "We play d6 to complete development. Black has a very solid setup.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles." },
        {
          san: "Na5",
          explanation:
            "We attack the c4 pawn with the knight, creating counterplay!",
        },
      ],
    },
    {
      id: "rossolimo",
      name: "Rossolimo Variation (3.Bb5)",
      difficulty: "intermediate",
      description:
        "White plays Bb5 instead of entering the Open Sicilian. The Rossolimo avoids the main Sicilian theory and aims to double Black's pawns or use the bishop pair. Black must know how to respond accurately.",
      moves: [
        { san: "e4", explanation: "White plays e4." },
        { san: "c5", explanation: "The Sicilian!" },
        { san: "Nf3", explanation: "White develops." },
        {
          san: "Nc6",
          explanation:
            "We develop the knight — now White can play the Rossolimo with Bb5.",
          isKeyMove: true,
        },
        {
          san: "Bb5",
          explanation:
            "The Rossolimo! White pins the Nc6 like the Ruy López, avoiding the Open Sicilian entirely.",
        },
        {
          san: "g6",
          explanation:
            "We fianchetto! This is one of the best responses — the g7 bishop will challenge the Bb5.",
          isKeyMove: true,
          wrongMoveWarning:
            "Against the Rossolimo, we play g6 to fianchetto and challenge the Bb5.",
        },
        { san: "O-O", explanation: "White castles quickly." },
        {
          san: "Bg7",
          explanation:
            "We complete the fianchetto. The g7 bishop now fights the Bb5 for control.",
          isKeyMove: true,
        },
        {
          san: "Re1",
          explanation: "White reinforces e4 and prepares central action.",
        },
        {
          san: "Nf6",
          explanation: "We develop and counterattack e4.",
          isKeyMove: true,
        },
        { san: "c3", explanation: "White supports d4 and prepares to expand." },
        {
          san: "O-O",
          explanation:
            "We castle! The king is safe and we're ready to fight back.",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White finally opens the center." },
        { san: "cxd4", explanation: "We capture!" },
        {
          san: "cxd4",
          explanation: "White recaptures, establishing a strong center.",
        },
        {
          san: "d5",
          explanation:
            "We fight back in the center! Black challenges White's center after solid preparation.",
          isKeyMove: true,
        },
        { san: "e5", explanation: "White advances." },
        {
          san: "Ne4",
          explanation: "We centralise the knight on the powerful e4 square.",
        },
      ],
    },
    {
      id: "smith-morra-gambit",
      name: "Smith-Morra Gambit (2.d4 cxd4 3.c3)",
      difficulty: "intermediate",
      description:
        "White sacrifices a pawn with c3 after the d4 exchange, gaining fast development and attacking chances. The Smith-Morra is very dangerous for unprepared Black players — learn to handle it correctly.",
      moves: [
        { san: "e4", explanation: "White plays e4." },
        { san: "c5", explanation: "The Sicilian!" },
        { san: "d4", explanation: "White plays d4." },
        { san: "cxd4", explanation: "We capture." },
        {
          san: "c3",
          explanation:
            "The Smith-Morra Gambit! White sacrifices c3 pawn for rapid development.",
        },
        {
          san: "dxc3",
          explanation:
            "We accept the gambit — we take the free pawn while White gains development.",
          isKeyMove: true,
          wrongMoveWarning:
            "We accept the Smith-Morra — taking the pawn while preparing solid development.",
        },
        {
          san: "Nxc3",
          explanation: "White recaptures, developing the knight with tempo.",
        },
        {
          san: "Nc6",
          explanation:
            "We develop the knight, fighting for the center and preparing e6 or d6.",
          isKeyMove: true,
        },
        { san: "Nf3", explanation: "White develops." },
        {
          san: "d6",
          explanation:
            "We support the center and prepare Nf6 — solid development against the gambit.",
          isKeyMove: true,
        },
        { san: "Bc4", explanation: "White develops — the bishop targets f7." },
        {
          san: "e6",
          explanation:
            "We solidify the center and prepare to develop the f8 bishop.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles and prepares to attack." },
        {
          san: "Nf6",
          explanation: "We develop and counterattack e4.",
          isKeyMove: true,
        },
        { san: "Qe2", explanation: "White prepares e5 or d5 to open lines." },
        {
          san: "Be7",
          explanation: "We develop solidly and prepare to castle.",
          isKeyMove: true,
        },
        {
          san: "Rd1",
          explanation: "White activates the rook, adding pressure.",
        },
        {
          san: "O-O",
          explanation:
            "We castle! The king is safe and the position is balanced.",
        },
      ],
    },
    {
      id: "grand-prix-attack",
      name: "Grand Prix Attack (2.Nc3 f4)",
      difficulty: "advanced",
      description:
        "White plays Nc3 and f4 without going through d4, creating an immediate kingside attack. The Grand Prix is aggressive and avoids Sicilian theory. Black needs to know how to counterattack in the center.",
      moves: [
        { san: "e4", explanation: "White plays e4." },
        { san: "c5", explanation: "The Sicilian!" },
        {
          san: "Nc3",
          explanation:
            "White plays Nc3 — avoiding the Open Sicilian and preparing f4.",
        },
        {
          san: "Nc6",
          explanation: "We develop the knight, fighting for the center.",
          isKeyMove: true,
        },
        {
          san: "f4",
          explanation:
            "The Grand Prix Attack! White prepares a kingside attack with f5 without even playing d4.",
        },
        {
          san: "g6",
          explanation:
            "We fianchetto! This is the best response — the g7 bishop will fight against White's f4-f5 attack.",
          isKeyMove: true,
          wrongMoveWarning:
            "Against the Grand Prix, g6 and Bg7 fights most effectively against White's f4 attack.",
        },
        { san: "Nf3", explanation: "White develops." },
        {
          san: "Bg7",
          explanation:
            "We complete the fianchetto. The Dragon bishop will be key in our counterplay.",
          isKeyMove: true,
        },
        {
          san: "Bb5",
          explanation: "White pins the Nc6, preparing to double Black's pawns.",
        },
        {
          san: "Nd4",
          explanation:
            "We centralise the knight on d4, directly attacking the Bb5 — White ignores it by castling, so we take it for free on the next move.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles." },
        {
          san: "Nxb5",
          explanation:
            "We win the bishop, gaining the bishop pair with good compensation.",
          isKeyMove: true,
        },
        { san: "d3", explanation: "White supports the center." },
        {
          san: "d6",
          explanation: "We develop solidly, supporting the center.",
          isKeyMove: true,
        },
        {
          san: "Ne2",
          explanation: "White retreats the knight, planning Nxd4.",
        },
        {
          san: "Nf6",
          explanation:
            "We develop — Black has good counterplay and compensation.",
        },
        { san: "Be3", explanation: "White develops." },
        {
          san: "O-O",
          explanation: "We castle! The position is dynamically balanced.",
        },
      ],
    },
  ],
};

export default sicilianDefense;
