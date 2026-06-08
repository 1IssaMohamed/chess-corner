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
        {
          san: "e4",
          explanation:
            "The Sicilian Defence — 1...c5 — is the most popular and ambitious response to 1.e4, played by Bobby Fischer, Garry Kasparov, and Magnus Carlsen as their main weapon throughout their careers. Black's key insight is that c5 fights for the d4 square asymmetrically: instead of mirroring White's center with e5, Black gets the open c-file after cxd4, creating an imbalanced position where both sides have real winning chances. This opening line introduces the core Sicilian idea — opposite-side castling and a race of pawn storms — where White attacks the kingside with g4-g5 while Black counterattacks the queenside with b5-b4, and whoever breaks through first wins. That dynamic tension from the very first move is why the Sicilian is played more often than any other response to 1.e4 at every level from beginner to World Championship.",
        },
        {
          san: "c5",
          explanation:
            "The Sicilian! Instead of meeting e4 with the symmetric ...e5, we fight for d4 from the side. The big idea: after the c-pawn trades for White's d-pawn, we get a half-open c-file and an extra central pawn, an IMBALANCE — and imbalance means we play to win, not just to draw. Decline symmetry to keep winning chances.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Sicilian always starts with 1...c5 — fighting asymmetrically.",
        },
        {
          san: "Nf3",
          explanation:
            "White develops and prepares the central d4 break that opens the position.",
        },
        {
          san: "d6",
          explanation:
            "The most flexible Sicilian move: ...d6 controls e5, prepares ...Nf6 without it being kicked away, and keeps our setup open (Najdorf, Dragon, and Scheveningen all branch from here). Keep your options open before committing the pieces.",
          isKeyMove: true,
        },
        {
          san: "d4",
          explanation:
            "White opens the center — the Open Sicilian. The d-pawn challenges c5, and the trade that follows defines the whole structure.",
        },
        {
          san: "cxd4",
          explanation:
            "We capture, and this is the heart of the Sicilian: we swap a wing pawn (c) for a center pawn (d). The payoff is the half-open c-file pointing at White's queenside — our highway for counterplay all game. Trade a flank pawn for a central one whenever it gives you an open file toward the enemy.",
          isKeyMove: true,
        },
        {
          san: "Nxd4",
          explanation:
            "White recaptures with the knight, centralizing it — but note White now has only one central pawn (e4) to our two (d6, e-pawn to come), the structural imbalance we're playing for.",
        },
        {
          san: "Nf6",
          explanation:
            "We develop with a threat to e4, forcing White to spend a move defending. The f6-knight is Black's most important piece in the Sicilian — it pressures e4 and fights for the central squares all game.",
          isKeyMove: true,
        },
        {
          san: "Nc3",
          explanation:
            "White defends e4 by developing — the natural way to meet a threat, improving a piece while guarding the pawn.",
        },
        {
          san: "a6",
          explanation:
            "The Najdorf move. A quiet pawn move with two big jobs: it denies the b5-square to White's pieces (no Bb5+ or Nb5) and prepares our own ...b5 expansion toward White's king. Small move, large purpose.",
        },
        {
          san: "Be3",
          explanation:
            "White develops and signals the plan: Qd2, O-O-O, and a kingside pawn storm. When White's bishop goes to e3 with f3 to come, expect opposite-side castling.",
        },
        {
          san: "e5",
          explanation:
            "We kick the d4-knight and grab central space. The trade-off: it leaves a hole on d5, but our pawn on e5 and active pieces are worth it. Gain space and a tempo, accept a small concession.",
          isKeyMove: true,
        },
        {
          san: "Nb3",
          explanation:
            "The attacked knight retreats to b3, where it eyes a5/c5 and stays useful rather than dropping back passively.",
        },
        {
          san: "Be6",
          explanation:
            "We develop the light-squared bishop to guard the d5-hole our ...e5 created — covering the weakness with a piece.",
        },
        {
          san: "f3",
          explanation:
            "White braces e4 and clears the way for g4-g5, the kingside pawn storm — the storm warning is now clear.",
        },
        {
          san: "Be7",
          explanation:
            "We develop and prepare to castle, the bishop flexible on e7 (it can reroute to g5 to challenge White's good bishop).",
        },
        {
          san: "Qd2",
          explanation:
            "White connects rooks and prepares O-O-O, committing to castling queenside and the pawn-storm race.",
        },
        {
          san: "O-O",
          explanation:
            "We castle kingside — opposite to where White is heading — getting the king to safety before the race of pawn storms begins.",
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
        {
          san: "e4",
          explanation:
            "The Sicilian starts with e4 c5, and this line diverges when Black plays d6 and then 5...a6 — the Najdorf — leading to the most theoretically rich and hotly contested opening in all of chess, where Black prevents Bb5+ and prepares b5-e5, creating the razor-sharp positions that Fischer, Kasparov, and Carlsen all used to win World Championships.",
        },
        {
          san: "c5",
          explanation:
            "The Sicilian — fighting for d4 asymmetrically to keep the imbalance.",
        },
        {
          san: "Nf3",
          explanation: "White develops and prepares the d4 break.",
        },
        {
          san: "d6",
          explanation:
            "We prepare ...Nf6 and control e5 — the flexible Sicilian setup.",
        },
        { san: "d4", explanation: "White opens the center." },
        {
          san: "cxd4",
          explanation:
            "We trade the flank c-pawn for the central d-pawn, opening the c-file.",
        },
        {
          san: "Nxd4",
          explanation: "White recaptures, centralizing the knight.",
        },
        {
          san: "Nf6",
          explanation: "We develop with a threat to e4, gaining time.",
        },
        { san: "Nc3", explanation: "White defends e4 by developing." },
        {
          san: "a6",
          explanation:
            "The Najdorf move! It looks modest, but ...a6 takes the b5-square away from White's pieces (no Nb5/Bb5) AND prepares ...b5 to gain queenside space and develop the bishop to b7. A single pawn move that's both prophylaxis and preparation — that economy is why the Najdorf is the king of openings.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Najdorf, 5...a6 is the key move — preparing b5 and preventing Bb5+.",
        },
        {
          san: "Bg5",
          explanation:
            "White pins the f6-knight (the guardian of e4 and d5) to the queen — the sharp Classical main line, eyeing Bxf6 to damage Black's structure.",
        },
        {
          san: "e6",
          explanation:
            "We support the d5-square and give the queen an escape, taking the sting out of the pin. ...e6 keeps the center solid before we counterattack.",
          isKeyMove: true,
        },
        {
          san: "f4",
          explanation:
            "White grabs kingside space and prepares e5 or f5 pawn breaks — the kingside storm takes shape.",
        },
        {
          san: "Be7",
          explanation:
            "We develop the bishop to break the pin's bite and prepare to castle. On e7 it defends the king and can swing to f6 to challenge White's dark-square play later.",
          isKeyMove: true,
        },
        {
          san: "Qf3",
          explanation:
            "White centralizes the queen toward the kingside, supporting the f4-f5 push and clearing d1 for the rook after O-O-O.",
        },
        {
          san: "Qc7",
          explanation:
            "We centralize our own queen — it defends d6, eyes the half-open c-file toward White's coming queenside castle, and supports ...b5. The Sicilian queen belongs on c7, pointing where we'll attack.",
          isKeyMove: true,
        },
        {
          san: "O-O-O",
          explanation:
            "White castles queenside — the battle lines are drawn for opposite-wing castling and a race of pawn storms.",
        },
        {
          san: "Nbd7",
          explanation:
            "We develop the last knight, supporting e5/b5 breaks and preparing to castle — and the knight clears b8 for the rook to join the queenside attack.",
        },
      ],
      continuationMoves: [
        {
          san: "Nd5",
          idea: "White centralises the knight aggressively on d5, exerting pressure in the heart of Black's position.",
        },
        {
          san: "Nxd5",
          idea: "We capture the intruder, maintaining central balance.",
        },
        {
          san: "exd5",
          idea: "White recaptures with the e-pawn, fixing the center.",
        },
        {
          san: "Nf6",
          idea: "We develop the knight back to f6, ready to fight for the initiative.",
        },
        {
          san: "Bxf6",
          idea: "White trades the bishop for the knight. The Najdorf's opposite-side castling race is one of the most studied positions in chess — both sides fight simultaneously on their respective wings.",
        },
      ],
      continuationIdea:
        "The Najdorf's opposite-side castling race is one of the most studied positions in all of chess. Black's b5-b4 queenside attack and White's g4-g5 kingside storm happen simultaneously — both sides are essentially playing separate games on their respective wings. The side that breaks through first wins. This is why studying the Najdorf teaches you attacking chess at its highest level.",
    },
    {
      id: "dragon",
      name: "Dragon Variation (5...g6)",
      difficulty: "intermediate",
      description:
        "Black fianchettos the dark-squared bishop to g7, creating the Dragon pawn structure. The Dragon bishop on g7 is a devastating long-range weapon in one of the most violent openings in chess.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Sicilian starts with e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3, and this line diverges when Black plays g6 to fianchetto the dark-squared bishop, leading to the Dragon Variation — one of the most violent openings in chess, where the Bg7 rakes the a1-h8 diagonal all game and the Yugoslav Attack creates a mutual pawn storm that decides the game before move 25.",
        },
        { san: "c5", explanation: "The Sicilian — asymmetric fight for d4." },
        { san: "Nf3", explanation: "White develops and prepares d4." },
        {
          san: "d6",
          explanation: "We control e5 and prepare ...Nf6 and ...g6.",
        },
        { san: "d4", explanation: "White opens the center." },
        {
          san: "cxd4",
          explanation:
            "We trade the flank pawn for the center pawn, opening the c-file.",
        },
        { san: "Nxd4", explanation: "White recaptures, centralizing." },
        { san: "Nf6", explanation: "We develop with a threat to e4." },
        { san: "Nc3", explanation: "White defends e4 by developing." },
        {
          san: "g6",
          explanation:
            "The Dragon! We prepare to fianchetto on g7, aiming the bishop straight down the a1-h8 diagonal at White's queenside and center. This bishop is the soul of the Dragon — its long-range fire backs up everything we do. Point your bishop at the enemy king before the lines open.",
          isKeyMove: true,
          wrongMoveWarning:
            "In the Dragon, g6 is the defining move — preparing the powerful Bg7.",
        },
        {
          san: "Be3",
          explanation:
            "White develops, beginning the Yugoslav Attack (Be3, f3, Qd2, O-O-O, then h4-g4) — the most testing try, racing to attack before our Dragon bishop's counterplay ignites.",
        },
        {
          san: "Bg7",
          explanation:
            "The Dragon bishop is home, raking the long diagonal. Even when blocked by the d4-knight now, once the center opens it becomes one of the most powerful pieces on the board.",
          isKeyMove: true,
        },
        {
          san: "f3",
          explanation:
            "White braces e4 against ...Ng4 and prepares the g4/h4 storm — the Yugoslav Attack's signature, building toward our king.",
        },
        {
          san: "O-O",
          explanation:
            "We castle kingside immediately, tucking the king safely behind the Dragon bishop — knowing the storm is coming, but our counterplay comes too.",
          isKeyMove: true,
        },
        {
          san: "Qd2",
          explanation:
            "White connects rooks and prepares O-O-O — committing to opposite-side castling and the attacking race.",
        },
        {
          san: "Nc6",
          explanation:
            "We develop with a hit on the d4-knight, and the c6-knight is perfectly placed for our counterplay: it supports the ...d5 break and can jump to e5/c4. In the Dragon, we attack the queenside while White attacks the kingside.",
          isKeyMove: true,
        },
        {
          san: "O-O-O",
          explanation:
            "White castles queenside — opposite wings, and the race is officially on. Now it's our attack on the c/b-files vs White's on the g/h-files.",
        },
        {
          san: "d5",
          explanation:
            "The thematic Dragon break! ...d5 strikes the center, and the point is to OPEN the long diagonal for our g7-bishop. Achieving ...d5 in the Dragon is usually the moment Black's attack catches fire. Free your best piece by breaking the center.",
        },
      ],
      continuationMoves: [
        {
          san: "exd5",
          idea: "White captures — the center opens and lines become available for both sides.",
        },
        {
          san: "Nxd5",
          idea: "We recapture with the knight, centralising to d5 and eyeing c3.",
        },
        {
          san: "Nxd5",
          idea: "White captures the Nd5, trying to simplify and reduce Dragon's attacking power.",
        },
        {
          san: "Qxd5",
          idea: "We recapture with the queen, centralising it powerfully on d5. The Dragon bishop now has a fully open diagonal — the Bg7 dominates the a1-h8 diagonal with no obstacles.",
        },
        {
          san: "Nxc6",
          idea: "White breaks up our queenside. The Dragon always comes down to this: the Bg7 is one of the most powerful pieces in chess when the diagonal is open — and our counterattack on the c-file backs it up.",
        },
      ],
      continuationIdea:
        "The Dragon's d5 break is the whole counterplay mechanism. After the exchanges, the Bg7 gets a completely open diagonal toward White's queenside and king. Combined with the open c-file, Black's counterattack in the Dragon is lethal — which is why the Yugoslav Attack (g4-g5) is White's most aggressive attempt to attack before d5 becomes available.",
    },
    {
      id: "scheveningen",
      name: "Scheveningen Variation (5...e6)",
      difficulty: "intermediate",
      description:
        "Black plays e6 (instead of e5) creating a small center with d6-e6. This solid structure supports all counterplay plans and was a favourite of Bobby Fischer's opponents and later Garry Kasparov.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Sicilian starts with e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3, and this line diverges when Black plays e6 (instead of g6 or a6) to create the Scheveningen small center, leading to a solid d6-e6 structure that supports all counterplay plans — Kasparov won hundreds of games from this position with the timely b5-b4 queenside break.",
        },
        { san: "c5", explanation: "The Sicilian — asymmetric fight for d4." },
        { san: "Nf3", explanation: "White develops and prepares d4." },
        {
          san: "d6",
          explanation: "We control e5 and prepare ...Nf6 and ...e6.",
        },
        { san: "d4", explanation: "White opens the center." },
        {
          san: "cxd4",
          explanation:
            "We open the c-file by trading the flank pawn for the center pawn.",
        },
        { san: "Nxd4", explanation: "White recaptures, centralizing." },
        { san: "Nf6", explanation: "We develop with a threat to e4." },
        { san: "Nc3", explanation: "White defends e4 by developing." },
        {
          san: "e6",
          explanation:
            "The Scheveningen! Instead of the space-grabbing ...e5 (which leaves a d5-hole), we build a modest but rock-solid d6-e6 'small center'. It controls d5 and e5, leaves no holes, and flexibly supports every plan we need. A small, solid center can be stronger than a big, loose one.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Scheveningen plays e6 — creating the small center structure d6-e6.",
        },
        {
          san: "Be2",
          explanation:
            "White develops solidly (the Classical setup), planning to castle kingside and attack with f4 — a less committal approach than the Najdorf's English Attack.",
        },
        {
          san: "Be7",
          explanation:
            "We develop the bishop to its natural defensive square and prepare to castle — modest and flexible, exactly matching the Scheveningen's spirit.",
          isKeyMove: true,
        },
        {
          san: "O-O",
          explanation:
            "White castles kingside — signalling a same-side game where the play is slower and more positional.",
        },
        {
          san: "O-O",
          explanation:
            "We castle too. With both kings on the same side, the battle becomes about pawn breaks and piece play rather than a raw storm — and our standard plan begins.",
          isKeyMove: true,
        },
        {
          san: "f4",
          explanation:
            "White grabs kingside space and prepares f5 to pressure e6 — the thematic attacking break.",
        },
        {
          san: "a6",
          explanation:
            "We start the classic Scheveningen plan: ...a6 prepares ...b5-b4 to chase the c3-knight (the defender of e4) and open the queenside. Counter a wing attack by striking where you're strong. Kasparov's favorite plan.",
          isKeyMove: true,
        },
        {
          san: "Be3",
          explanation:
            "White develops the bishop, connecting rooks and supporting d4/e5 ideas.",
        },
        {
          san: "b5",
          explanation:
            "We expand on the queenside — the counterplay is underway. ...b5-b4 will hit the knight defending e4 and pry open lines toward White's queenside.",
        },
      ],
      continuationMoves: [
        {
          san: "a3",
          idea: "White prevents b4 from hitting the Nc3 directly, slowing the queenside attack.",
        },
        {
          san: "Bb7",
          idea: "We develop the c8 bishop to b7, pressuring e4 from the long diagonal.",
        },
        {
          san: "Qe1",
          idea: "White repositions the queen, preparing the f5 pawn push.",
        },
        {
          san: "Nc6",
          idea: "We develop the last minor piece, completing our setup and targeting d4.",
        },
        {
          san: "f5",
          idea: "White launches the attack! f5-exf6-Bxf6 or f6 directly are the threats. The Scheveningen is a great learning opening — Black's solid d6-e6 structure supports all plans while White has to choose an attack carefully.",
        },
      ],
      continuationIdea:
        "The Scheveningen's strength is its flexibility — the d6-e6 structure supports queenside counterplay with a6-b5 while the center remains intact. White typically attacks with f4-f5 while Black uses the c-file and b5 expansion. Kasparov won countless games in this structure by perfectly timing the b4 break.",
    },
    {
      id: "kan",
      name: "Kan / Paulsen Variation (5...a6 4...e6)",
      difficulty: "intermediate",
      description:
        "Black plays e6 and a6, the super-flexible Kan structure. Black avoids committing to a specific pawn structure early, maintaining maximum flexibility. The resulting positions suit positional players.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Sicilian starts with e4 c5 Nf3, and this line diverges when Black plays e6 first and then a6 — the Kan/Paulsen variation — leading to the super-flexible structure where Black avoids committing to any specific pawn setup and keeps all queenside options open for longer than any other Sicilian system.",
        },
        { san: "c5", explanation: "The Sicilian — asymmetric fight for d4." },
        { san: "Nf3", explanation: "White develops and prepares d4." },
        {
          san: "e6",
          explanation:
            "We open the f8-bishop's diagonal and keep the structure flexible — delaying ...d6 and ...Nf6 so White can't aim at a fixed target.",
        },
        { san: "d4", explanation: "White opens the center." },
        {
          san: "cxd4",
          explanation: "We open the c-file with the standard central trade.",
        },
        { san: "Nxd4", explanation: "White recaptures, centralizing." },
        {
          san: "a6",
          explanation:
            "The Kan! Combined with ...e6 and NO committed ...d6 or ...Nc6, this is the most flexible Sicilian of all: ...a6 denies b5 to White's pieces and prepares ...b5, while we keep every other piece uncommitted until we see White's setup. Delay your commitments to react ideally. Perfect for players who outplay rather than out-memorize.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Kan plays a6 with e6 already played — the hyper-flexible Sicilian structure.",
        },
        {
          san: "Nc3",
          explanation: "White develops, defending e4 and eyeing d5/b5.",
        },
        {
          san: "Qc7",
          explanation:
            "We post the queen on its ideal Sicilian square: it eyes the c-file toward White's queenside, covers e5, and supports ...b5. Develop the queen to where the half-open file points.",
          isKeyMove: true,
        },
        {
          san: "Bd3",
          explanation:
            "White develops aggressively, the bishop aiming at the kingside (h7) — but it's a touch exposed to a later ...Nc5 or ...b5-b4.",
        },
        {
          san: "Bc5",
          explanation:
            "We develop with tempo, hitting the d4-knight and aiming the bishop at f2. Active piece placement that forces White to react. Develop with a threat whenever you can.",
          isKeyMove: true,
        },
        {
          san: "Nb3",
          explanation:
            "White retreats the attacked knight, hitting our bishop in passing to gain a tempo back.",
        },
        {
          san: "Ba7",
          explanation:
            "We tuck the bishop onto a7 — out of the knight's reach but still raking the a7-g1 diagonal toward f2. Retreat to a square where the piece keeps working.",
        },
        { san: "O-O", explanation: "White castles to safety." },
        {
          san: "Nf6",
          explanation:
            "We finally commit the knight, developing with pressure on e4 now that the moment is right.",
        },
        {
          san: "Re1",
          explanation:
            "White over-protects e4, putting the rook on a useful central file.",
        },
        {
          san: "b5",
          explanation:
            "We expand on the queenside — the Kan's thematic plan, gaining space and preparing ...Bb7 and ...b4 to pressure White's center and king.",
        },
      ],
      continuationMoves: [
        {
          san: "Bc4",
          idea: "White's bishop moves to c4, targeting the weakened d5 square and putting pressure on Black's position.",
        },
        {
          san: "Nd5",
          idea: "We centralise the knight to d5 — the ideal outpost in the Kan structure.",
        },
        {
          san: "Bxd5",
          idea: "White captures the knight, giving up the bishop for a strong central piece.",
        },
        {
          san: "exd5",
          idea: "We recapture with the e-pawn, opening the position and activating our pieces.",
        },
        {
          san: "e5",
          idea: "White advances e5, gaining space. The Kan's super-flexible structure means Black can adapt to any White setup and always find the right plan. It's the Sicilian for players who prefer positional complexity over sharp memorised lines.",
        },
      ],
      continuationIdea:
        "The Kan's flexibility is its greatest strength — by not committing to d6 or Nc6 early, Black keeps all options open. The Qc7-Bc5-Ba7 bishop maneuver is elegant, and the b5 expansion combined with the eventual d5 break gives Black active counterplay without needing to memorise sharp theory.",
    },
    {
      id: "taimanov",
      name: "Taimanov Variation (4...Nc6)",
      difficulty: "intermediate",
      description:
        "Black develops the knight to c6 instead of d6. The Taimanov is a flexible and sound system where Black keeps the option to play b6-Bb7 or e5 depending on White's setup.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Sicilian starts with e4 c5 Nf3, and this line diverges when Black plays Nc6 early (instead of d6 or e6) — the Taimanov — leading to a flexible system where Qc7 and the Nc6 together create a solid fighting setup that handles White's f4 attacks better than most Sicilian systems because the knight is already on its ideal square.",
        },
        { san: "c5", explanation: "The Sicilian — asymmetric fight for d4." },
        { san: "Nf3", explanation: "White develops and prepares d4." },
        {
          san: "Nc6",
          explanation:
            "The Taimanov move — we develop the knight first, fighting for d4 and e5 with a piece and keeping our pawn structure (...d6 vs ...e5 vs ...e6) undecided for now. Develop a piece to a great square before committing pawns.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Taimanov plays Nc6 early — fighting for the center with pieces.",
        },
        { san: "d4", explanation: "White opens the center." },
        {
          san: "cxd4",
          explanation: "We open the c-file with the central trade.",
        },
        { san: "Nxd4", explanation: "White recaptures, centralizing." },
        {
          san: "e6",
          explanation:
            "We add ...e6 to the Nc6 setup — a small, solid center with no holes that flexibly supports both ...b5 expansion and ...d5 breaks. Solid and adaptable.",
          isKeyMove: true,
        },
        {
          san: "Nc3",
          explanation: "White develops, defending e4 and eyeing d5/b5.",
        },
        {
          san: "Qc7",
          explanation:
            "The thematic Taimanov queen move: on c7 it eyes the c-file, guards e5, and supports ...b5 — and it pressures e4/c2 in a way that often discourages White's most aggressive setups.",
          isKeyMove: true,
        },
        {
          san: "Be3",
          explanation:
            "White develops, connecting rooks and preparing to castle (often queenside).",
        },
        {
          san: "a6",
          explanation:
            "We deny b5 to White's pieces and prepare our own ...b5 expansion — the standard Sicilian queenside plan, here backed by an already-developed knight.",
          isKeyMove: true,
        },
        {
          san: "Be2",
          explanation: "White develops solidly, preparing to castle kingside.",
        },
        {
          san: "Nf6",
          explanation:
            "We develop the last knight with pressure on e4. All our minor pieces are coming out efficiently with purpose.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles kingside." },
        {
          san: "Be7",
          explanation:
            "We develop the bishop and prepare to castle, completing a harmonious setup.",
        },
        {
          san: "f4",
          explanation:
            "White grabs kingside space and prepares f5 — the thematic attack against our e6-pawn.",
        },
        {
          san: "O-O",
          explanation:
            "We castle, and the position is balanced with mutual chances. Crucially, our Nc6+Qc7 are perfectly placed to meet f5 with queenside counterplay.",
        },
      ],
      continuationMoves: [
        {
          san: "f5",
          idea: "White launches the kingside attack immediately — f5 threatens to blow open the e6 pawn.",
        },
        {
          san: "b5",
          idea: "Our queenside counterattack! b5-b4 aims at the Nc3 while White's f-pawn advances.",
        },
        {
          san: "fxe6",
          idea: "White captures, opening the f-file and creating immediate threats.",
        },
        {
          san: "fxe6",
          idea: "We recapture — the pawn structure is now open and both sides have attacking chances.",
        },
        {
          san: "Rxf6",
          idea: "White crashes through on the f6 pawn. The Taimanov handles the f4 attack better than most Sicilian systems because the Nc6 is already well-placed to help coordinate the counterattack.",
        },
      ],
      continuationIdea:
        "The Taimanov excels against White's f4 attacks. The Nc6 + Qc7 setup coordinates easily, and the b5 queenside counterattack often arrives before White's kingside push breaks through. It's a solid, reliable Sicilian system that doesn't require memorising as many sharp lines as the Najdorf or Dragon.",
    },
    {
      id: "accelerated-dragon",
      name: "Accelerated Dragon (4...g6)",
      difficulty: "intermediate",
      description:
        "Black plays g6 before d6, aiming to play d5 in one move rather than two. This avoids the Yugoslav Attack and is a slightly more solid version of the Dragon, popular among club players.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Sicilian starts with e4 c5 Nf3 Nc6 d4 cxd4 Nxd4, and this line diverges when Black plays g6 before d6 — the Accelerated Dragon — leading to positions where d5 can be played in a single move (instead of two), allowing Black to sidestep the Yugoslav Attack entirely while still enjoying the powerful Bg7.",
        },
        { san: "c5", explanation: "The Sicilian — asymmetric fight for d4." },
        { san: "Nf3", explanation: "White develops and prepares d4." },
        {
          san: "Nc6",
          explanation:
            "We develop the knight, fighting for d4 and e5 and keeping ...d6 in reserve — the key to playing ...d5 in one go later.",
          isKeyMove: true,
        },
        { san: "d4", explanation: "White opens the center." },
        {
          san: "cxd4",
          explanation: "We open the c-file with the central trade.",
        },
        { san: "Nxd4", explanation: "White recaptures, centralizing." },
        {
          san: "g6",
          explanation:
            "The Accelerated Dragon! By fianchettoing WITHOUT first playing ...d6, we save a tempo — later ...d5 comes in one move instead of two, and that single tempo lets us dodge the dangerous Yugoslav Attack. Save a move now to unlock a stronger break later.",
          isKeyMove: true,
          wrongMoveWarning:
            "The Accelerated Dragon plays g6 before d6 — we can later play d5 in one move!",
        },
        {
          san: "c4",
          explanation:
            "White plays the Maróczy Bind — a second pawn on c4 clamps the d5-square so we can't get our ...d5 break. White trades attacking chances for a space-based positional grip.",
        },
        {
          san: "Bg7",
          explanation:
            "We complete the fianchetto. Even with d5 restrained by the bind, the Dragon bishop pressures the long diagonal and our plan shifts to piece play (...Nd7-c5, ...a5) against White's space.",
          isKeyMove: true,
        },
        {
          san: "Be3",
          explanation: "White develops, supporting d4 and the c4-bind.",
        },
        { san: "Nf6", explanation: "We develop with pressure on e4." },
        {
          san: "Nc3",
          explanation: "White defends e4 and reinforces the d5-square.",
        },
        {
          san: "O-O",
          explanation:
            "We castle, king safe behind the Dragon bishop, before starting our queenside maneuvers.",
          isKeyMove: true,
        },
        {
          san: "Be2",
          explanation:
            "White develops solidly, content with the space the bind gives him.",
        },
        {
          san: "d6",
          explanation:
            "Now ...d6 completes a solid setup, covering e5 and preparing the knight maneuvers that fight the bind. In the Maróczy we play positionally, not for the ...d5 break.",
          isKeyMove: true,
        },
        { san: "O-O", explanation: "White castles." },
        {
          san: "Na5",
          explanation:
            "We hit the c4-pawn — the base of White's bind. The Na5-c4-or-back-to-c6 maneuver pressures the bind and is our main source of counterplay. Attack the pawn that cramps you.",
        },
      ],
      continuationMoves: [
        {
          san: "b3",
          idea: "White defends the c4 pawn — otherwise we win it for free.",
        },
        {
          san: "Nc6",
          idea: "We bring the Na5 back to c6, the ideal central square where it targets d4 and e5.",
        },
        {
          san: "Nxc6",
          idea: "White captures the knight, trying to break up Black's structure.",
        },
        {
          san: "bxc6",
          idea: "We recapture with the b-pawn, opening the b-file for counterplay.",
        },
        {
          san: "f4",
          idea: "White prepares a kingside attack. The Accelerated Dragon vs the Maróczy Bind is all about whether the Bg7 can outweigh White's space advantage from c4 — and over a long game, it usually can.",
        },
      ],
      continuationIdea:
        "The Accelerated Dragon's Na5 attack on c4 is the key counterplay idea. Even in the Maróczy Bind, the Bg7 remains a powerful piece and the Na5-c5 maneuver creates queenside pressure. The Accelerated Dragon's advantage over the regular Dragon is avoiding the Yugoslav Attack entirely.",
    },
    {
      id: "rossolimo",
      name: "Rossolimo Variation (3.Bb5)",
      difficulty: "intermediate",
      description:
        "White plays Bb5 instead of entering the Open Sicilian. The Rossolimo avoids the main Sicilian theory and aims to double Black's pawns or use the bishop pair. Black must know how to respond accurately.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Sicilian starts with e4 c5 Nf3 Nc6, and this line diverges when White plays Bb5 instead of d4 — the Rossolimo — leading to a Ruy López-like structure where White avoids all Open Sicilian theory and tries to use the bishop pair after doubling Black's c-pawns, while Black's g6 fianchetto and active pieces provide rich counterplay.",
        },
        { san: "c5", explanation: "The Sicilian — asymmetric fight for d4." },
        { san: "Nf3", explanation: "White develops and prepares d4." },
        {
          san: "Nc6",
          explanation:
            "We develop the knight to its best square — though it does invite White's anti-Sicilian Bb5 pin.",
          isKeyMove: true,
        },
        {
          san: "Bb5",
          explanation:
            "The Rossolimo! White sidesteps all the Open Sicilian theory, pinning the c6-knight Ruy-López-style. The plan: trade Bxc6 to double our pawns and play a slow positional game where memorization matters less.",
        },
        {
          san: "g6",
          explanation:
            "We fianchetto — the most reliable answer. The point: if White plays Bxc6 dxc6, our g7-bishop becomes a monster on the long diagonal and the doubled pawns control the center. We welcome the trade. Turn the opponent's structural 'damage' into a strength.",
          isKeyMove: true,
          wrongMoveWarning:
            "Against the Rossolimo, we play g6 to fianchetto and challenge the Bb5.",
        },
        {
          san: "O-O",
          explanation:
            "White castles quickly, keeping the tension and the bishop on b5.",
        },
        {
          san: "Bg7",
          explanation:
            "We complete the fianchetto. The g7-bishop and the c6-knight together give us a harmonious, flexible setup that's ready to contest the center.",
          isKeyMove: true,
        },
        {
          san: "Re1",
          explanation:
            "White over-protects e4 and prepares c3-d4 to build a center — a slow, Ruy-López-like plan.",
        },
        {
          san: "Nf6",
          explanation:
            "We develop with pressure on e4, forcing White to keep defending it.",
          isKeyMove: true,
        },
        {
          san: "c3",
          explanation:
            "White supports the coming d4 push and gives the b5-bishop a c2 retreat.",
        },
        {
          san: "O-O",
          explanation:
            "We castle, king safe, ready to meet White's central expansion with our own counter-strikes.",
          isKeyMove: true,
        },
        {
          san: "d4",
          explanation:
            "White finally plays the central break he prepared with c3.",
        },
        {
          san: "cxd4",
          explanation:
            "We trade to open lines, refusing to let White keep a free big center.",
        },
        {
          san: "cxd4",
          explanation:
            "White recaptures, building a broad d4+e4 center — which we challenge at once.",
        },
        {
          san: "d5",
          explanation:
            "We strike the center! Having developed safely, we hit e4 with ...d5 to free our position and activate the g7-bishop. Meet a big center with a timely central break.",
          isKeyMove: true,
        },
        {
          san: "e5",
          explanation:
            "White pushes past to keep the tension, but this fixes a target and frees our pieces.",
        },
        {
          san: "Ne4",
          explanation:
            "We leap into the strong central e4 outpost, where the knight is hard to dislodge and dominates.",
        },
      ],
      continuationMoves: [
        {
          san: "Bxc6",
          idea: "White trades the bishop for the Nc6, doubling Black's c-pawns and removing a key defender.",
        },
        {
          san: "bxc6",
          idea: "We recapture with the b-pawn. The doubled c-pawns are a structural concession, but our Bg7 becomes even more powerful without the Nc6 in the way.",
        },
        {
          san: "Nfd2",
          idea: "White's f3 knight retreats to d2, making way for the Ne4 advance.",
        },
        {
          san: "Nxd2",
          idea: "We trade the knight — removing an active piece while keeping the Bg7 dominant.",
        },
        {
          san: "Qxd2",
          idea: "White recaptures. The Rossolimo with g6 gives Black a solid, active position — the Bg7 dominates, we have the bishop pair, and White's doubled c-pawns are a long-term target.",
        },
      ],
      continuationIdea:
        "Against the Rossolimo with g6, Black's fianchettoed Bg7 becomes the game's dominant piece. After the bishop trade on c6 (if it happens), we get the bishop pair and White's structural weaknesses. Even without the trade, the Bg7 controls the long diagonal and makes our counterplay very effective.",
    },
    {
      id: "smith-morra-gambit",
      name: "Smith-Morra Gambit (2.d4 cxd4 3.c3)",
      difficulty: "intermediate",
      description:
        "White sacrifices a pawn with c3 after the d4 exchange, gaining fast development and attacking chances. The Smith-Morra is very dangerous for unprepared Black players — learn to handle it correctly.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Sicilian starts with e4 c5, and this line diverges when White plays d4 cxd4 c3 — the Smith-Morra Gambit — leading to a dangerous surprise weapon where White sacrifices a pawn for rapid development and an open c-file, threatening immediate tactical shots that punish unprepared opponents but can be neutralized with the solid Nc6-d6-e6-Nf6-Be7-O-O setup.",
        },
        { san: "c5", explanation: "The Sicilian — asymmetric fight for d4." },
        {
          san: "d4",
          explanation:
            "White challenges c5 immediately rather than preparing d4 with Nf3.",
        },
        { san: "cxd4", explanation: "We capture, winning the central pawn." },
        {
          san: "c3",
          explanation:
            "The Smith-Morra Gambit! White offers a second pawn to blast open lines: after ...dxc3 Nxc3, White gets the open c- and d-files, fast development, and a long-term initiative for the pawn. A gambit that buys time and open files.",
        },
        {
          san: "dxc3",
          explanation:
            "We accept — declining lets White keep a strong center for free, so we take the pawn and plan to give the material back later if needed to defuse the attack. Accept the gambit, then neutralize with calm development.",
          isKeyMove: true,
          wrongMoveWarning:
            "We accept the Smith-Morra — taking the pawn while preparing solid development.",
        },
        {
          san: "Nxc3",
          explanation:
            "White recaptures, developing the knight with tempo toward the d5/b5 squares — exactly the fast development the gambit pays for.",
        },
        {
          san: "Nc6",
          explanation:
            "We develop and control d4/e5, beginning the standard antidote: get pieces out fast to a solid, hard-to-crack setup. Against a gambit, sound development beats holding onto the extra pawn.",
          isKeyMove: true,
        },
        {
          san: "Nf3",
          explanation:
            "White develops, eyeing the e5 and d4 squares for his initiative.",
        },
        {
          san: "d6",
          explanation:
            "We control e5 (a key square for White's knights and pieces) and open a path for the c8-bishop — taking the sting out of White's central pressure.",
          isKeyMove: true,
        },
        {
          san: "Bc4",
          explanation:
            "White develops the bishop to its most aggressive square, aiming at f7 — the gambit's typical attacking try.",
        },
        {
          san: "e6",
          explanation:
            "We blunt the c4-bishop's diagonal and prepare ...Be7 and ...Nf6. ...e6 is the key defensive move — it shuts the door on f7 and d5. Close the attacker's lines toward your king.",
          isKeyMove: true,
        },
        {
          san: "O-O",
          explanation:
            "White castles and stacks up for an attack on the half-open files.",
        },
        {
          san: "Nf6",
          explanation:
            "We develop with pressure on e4, completing the kingside and contesting the center.",
          isKeyMove: true,
        },
        {
          san: "Qe2",
          explanation:
            "White connects to the rooks and prepares e5 or Rd1 to pry open the center.",
        },
        {
          san: "Be7",
          explanation:
            "We develop solidly and prepare to castle — every piece on a safe, useful square is one less target for White's initiative.",
          isKeyMove: true,
        },
        {
          san: "Rd1",
          explanation:
            "White piles onto the half-open d-file, pressuring our d6-pawn — the standard Smith-Morra pressure.",
        },
        {
          san: "O-O",
          explanation:
            "We castle to safety. With every piece developed and the king tucked away, White's compensation has run dry and we keep the extra pawn — the gambit, correctly met, just leaves us a pawn up.",
        },
      ],
      continuationMoves: [
        {
          san: "a4",
          idea: "White prevents b5 and tries to clamp the queenside before we expand.",
        },
        {
          san: "Nd7",
          idea: "We reposition the knight from f6 to d7, planning Ne5 or Nc5 to increase central pressure.",
        },
        {
          san: "Bg5",
          idea: "White swings the bishop to g5, pinning the Be7 against the queen on d8 and pressing the dark squares.",
        },
        {
          san: "Nde5",
          idea: "We centralise the d7-knight to e5! The knight is superb here — it eyes f3, d3 and g4 and anchors our counterplay.",
        },
        {
          san: "Bxe7",
          idea: "White trades the bishop to reduce our pieces. Against the Smith-Morra, the extra pawn matters less than development — but by this point we've fully neutralised White's initiative while keeping the extra material.",
        },
      ],
      continuationIdea:
        "Against the Smith-Morra Gambit, accepting the pawn and developing solidly is the right approach. White gets fast development and the open c-file, but Black has an extra pawn and excellent piece coordination if developed correctly. The Nc6-d6-e6-Nf6-Be7-O-O setup neutralises White's attack while keeping the material.",
    },
    {
      id: "grand-prix-attack",
      name: "Grand Prix Attack (2.Nc3 f4)",
      difficulty: "advanced",
      description:
        "White plays Nc3 and f4 without going through d4, creating an immediate kingside attack. The Grand Prix is aggressive and avoids Sicilian theory. Black needs to know how to counterattack in the center.",
      moves: [
        {
          san: "e4",
          explanation:
            "The Sicilian starts with e4 c5 Nc3, and this line diverges when White plays f4 without going through d4 — the Grand Prix Attack — leading to an immediate kingside assault where f5 threatens to crack open lines before the game even leaves the opening, but the g6 fianchetto and central d5 counterplay defuses the attack and leaves Black with a comfortable position.",
        },
        { san: "c5", explanation: "The Sicilian — asymmetric fight for d4." },
        {
          san: "Nc3",
          explanation:
            "White avoids the Open Sicilian, keeping the d-pawn home to prepare an f4-f5 kingside attack — the Grand Prix approach.",
        },
        {
          san: "Nc6",
          explanation:
            "We develop the knight, fighting for d4 and e5 and keeping a flexible setup.",
          isKeyMove: true,
        },
        {
          san: "f4",
          explanation:
            "The Grand Prix Attack! White grabs kingside space and aims for f5 to open lines toward our king — a fast, theory-light assault. The downside: f4 loosens White's center and king, which we'll target.",
        },
        {
          san: "g6",
          explanation:
            "We fianchetto — the best response. The g7-bishop both defends our king and bears down on White's loosened center (d4/e5), and it blunts the f4-f5 attack along the way. Defend the kingside AND counter the center with one move.",
          isKeyMove: true,
          wrongMoveWarning:
            "Against the Grand Prix, g6 and Bg7 fights most effectively against White's f4 attack.",
        },
        {
          san: "Nf3",
          explanation: "White develops, supporting e5 and preparing to castle.",
        },
        {
          san: "Bg7",
          explanation:
            "We complete the fianchetto — the Dragon-style bishop is our key piece against the Grand Prix, raking the long diagonal.",
          isKeyMove: true,
        },
        {
          san: "Bb5",
          explanation:
            "White pins the c6-knight, hoping to trade on c6 and damage our structure before pushing f5.",
        },
        {
          san: "Nd4",
          explanation:
            "We meet the pin with a counterattacking centralization: ...Nd4 attacks the b5-bishop and the f3-knight at once. White can't easily save the bishop, so we'll win it. A centralizing move that double-attacks is the best answer to a pin.",
          isKeyMove: true,
        },
        {
          san: "O-O",
          explanation:
            "White castles, choosing king safety over saving the bishop — but that costs material.",
        },
        {
          san: "Nxb5",
          explanation:
            "We win the bishop pair, the concrete payoff of ...Nd4. With the two bishops and a sound structure, Black already has the better long-term chances.",
          isKeyMove: true,
        },
        {
          san: "d3",
          explanation:
            "White supports e4 and opens the c1-bishop, trying to develop and create play despite the bishop pair concession.",
        },
        {
          san: "d6",
          explanation:
            "We control e5 and prepare ...Nf6 — solid, taking the air out of White's f5 ambitions.",
          isKeyMove: true,
        },
        {
          san: "Ne2",
          explanation:
            "White reroutes the knight, eyeing Nxd4 to trade off our strong central knight and untangle.",
        },
        {
          san: "Nf6",
          explanation:
            "We develop with pressure on e4 — Black is comfortably ahead in the strategic battle, with the bishop pair and a sound position.",
        },
        {
          san: "Be3",
          explanation:
            "White develops, connecting rooks and bracing the center.",
        },
        {
          san: "O-O",
          explanation:
            "We castle — fully developed, king safe, bishop pair in hand. The Grand Prix has been defused and we stand better.",
        },
      ],
      continuationMoves: [
        {
          san: "e5",
          idea: "White advances e5, grabbing space and challenging Black's central setup.",
        },
        {
          san: "dxe5",
          idea: "We capture the e5 pawn, opening the center and activating our pieces.",
        },
        {
          san: "Nxe5",
          idea: "White's knight captures on e5, occupying a powerful central outpost.",
        },
        {
          san: "Be6",
          idea: "We develop the c8 bishop actively to e6, fighting for central control.",
        },
        {
          san: "Nxf7",
          idea: "White lunges with Nxf7?! — but it's an unsound sham sacrifice. Black recaptures and the dominant Bg7 plus active pieces leave Black clearly better. The Grand Prix only bites against the unprepared; with the g6 fianchetto and central counterplay, Black is fully equal and more.",
        },
      ],
      continuationIdea:
        "Against the Grand Prix Attack, our g6 fianchetto is the ideal response — the Bg7 fights against White's f4-f5 kingside attack while the d5 central break creates immediate counterplay. After the pawn exchanges in the center, the Bg7 controls the long diagonal and our active pieces give us dynamic equality.",
    },
  ],
};

export default sicilianDefense;
