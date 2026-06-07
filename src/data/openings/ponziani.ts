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
          explanation: "Black mirrors White, fighting for the center.",
        },
        {
          san: "Nf3",
          explanation: "White develops the knight and attacks e5.",
        },
        { san: "Nc6", explanation: "Black defends e5 naturally." },
        {
          san: "c3",
          explanation:
            "The Ponziani. White prepares d4 to build a powerful pawn center. The c-pawn supports the coming d4 push.",
          isKeyMove: true,
        },
        { san: "Nf6", explanation: "Black develops and strikes at e4." },
        {
          san: "d4",
          explanation:
            "White executes the plan — a big center with both central pawns.",
          isKeyMove: true,
        },
        {
          san: "exd4",
          explanation: "Black trades the e-pawn for White's d-pawn.",
        },
        {
          san: "cxd4",
          explanation:
            "White recaptures, restoring the central pawn and opening the c-file.",
        },
        {
          san: "d5",
          explanation: "Black challenges White's center immediately.",
        },
        {
          san: "e5",
          explanation:
            "White pushes forward, gaining space and kicking the knight. The pawn center is imposing.",
          isKeyMove: true,
        },
        {
          san: "Ne4",
          explanation: "Black's knight jumps to a strong outpost on e4.",
        },
        {
          san: "Bd3",
          explanation:
            "White attacks the knight on e4, fighting for control of the center square.",
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
        { san: "e5", explanation: "Black matches in the center." },
        { san: "Nf3", explanation: "Attacks e5 and develops." },
        { san: "Nc6", explanation: "Defends e5." },
        {
          san: "c3",
          explanation: "The Ponziani — prepares d4.",
          isKeyMove: true,
        },
        {
          san: "d6",
          explanation:
            "Black takes a more cautious approach, bolstering e5 solidly.",
        },
        {
          san: "d4",
          explanation: "White expands the center as planned.",
          isKeyMove: true,
        },
        { san: "exd4", explanation: "Black releases the central tension." },
        {
          san: "cxd4",
          explanation: "White recaptures, maintaining a broad center.",
        },
        { san: "Nf6", explanation: "Black develops the knight." },
        {
          san: "Bd3",
          explanation:
            "White develops the bishop toward the kingside and supports e4.",
        },
        { san: "Be7", explanation: "Black prepares to castle." },
        {
          san: "O-O",
          explanation: "White castles kingside, completing development.",
        },
        {
          san: "O-O",
          explanation: "Black castles, reaching a solid balanced position.",
        },
      ],
      continuationMoves: [
        {
          san: "h3",
          idea: "White prevents Bg4 before pushing the center — a prophylactic move.",
        },
        {
          san: "Re8",
          idea: "Black centralises the rook, supporting e5 and preparing counterplay.",
        },
        {
          san: "Re1",
          idea: "White centralises the rook to the e-file, adding pressure.",
        },
        {
          san: "Nd7",
          idea: "Black repositions the knight, planning Nf8-e6 to fight for the center.",
        },
        {
          san: "Nbd2",
          idea: "White develops the last piece. The vs d6 Ponziani gives White a comfortable space advantage with a broad center — no immediate winning plan but Black is cramped and must defend for a long time.",
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
        { san: "e5", explanation: "Black replies symmetrically." },
        { san: "Nf3", explanation: "Develops and attacks e5." },
        { san: "Nc6", explanation: "Defends e5." },
        {
          san: "c3",
          explanation: "The Ponziani — prepares the d4 push.",
          isKeyMove: true,
        },
        { san: "Nf6", explanation: "Black develops and hits e4." },
        { san: "d4", explanation: "White occupies the center." },
        { san: "exd4", explanation: "Black captures." },
        {
          san: "e5",
          explanation:
            "The Steinitz Variation! Instead of recapturing, White kicks the knight and grabs space.",
          isKeyMove: true,
          wrongMoveWarning:
            "Try e5 instead of cxd4 — this is the sharp Steinitz line.",
        },
        {
          san: "Nd5",
          explanation: "Black's knight retreats to the central d5 square.",
        },
        {
          san: "cxd4",
          explanation:
            "Now White recaptures, leaving a pawn on e5 and a strong center.",
        },
        {
          san: "Nb6",
          explanation: "The knight retreats again, eyeing c4 and d5.",
        },
        {
          san: "Bc4",
          explanation:
            "White develops the bishop aggressively, targeting the f7 pawn and maintaining central pressure.",
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
        { san: "e5", explanation: "Black matches." },
        { san: "Nf3", explanation: "Develops and pressures e5." },
        { san: "Nc6", explanation: "Defends e5." },
        {
          san: "c3",
          explanation: "The Ponziani — prepares d4.",
          isKeyMove: true,
        },
        {
          san: "d5",
          explanation:
            "Black's sharpest response — immediately counter-attacking the center before White can consolidate.",
          isKeyMove: true,
        },
        {
          san: "exd5",
          explanation: "White accepts the challenge and takes the pawn.",
        },
        {
          san: "Qxd5",
          explanation: "Black recaptures with the queen, centralizing it.",
        },
        {
          san: "d4",
          explanation:
            "White immediately strikes at the queen and fights for the center.",
          isKeyMove: true,
        },
        { san: "exd4", explanation: "Black captures, opening the e-file." },
        {
          san: "cxd4",
          explanation: "White recaptures, building a central pawn majority.",
        },
        {
          san: "Bg4",
          explanation:
            "Black pins White's knight, making it harder to consolidate.",
        },
        {
          san: "Be2",
          explanation:
            "White breaks the pin and prepares to castle, accepting a slightly inferior pawn structure but maintaining the initiative.",
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
        { san: "e5", explanation: "Black mirrors." },
        { san: "Nf3", explanation: "Develops." },
        { san: "Nc6", explanation: "Defends e5." },
        {
          san: "c3",
          explanation: "The Ponziani — preparing d4.",
          isKeyMove: true,
        },
        {
          san: "Bc5",
          explanation:
            "Black develops the bishop to a strong diagonal, targeting f2 and the center.",
        },
        { san: "d4", explanation: "White pushes through as planned." },
        { san: "exd4", explanation: "Black captures." },
        { san: "cxd4", explanation: "White recaptures with the c-pawn." },
        {
          san: "Bb4+",
          explanation:
            "The bishop checks the king, disrupting White's development.",
          isKeyMove: true,
        },
        {
          san: "Nc3",
          explanation:
            "White blocks the check and develops the queenside knight, though the pin is uncomfortable.",
        },
        {
          san: "Nge7",
          explanation:
            "Black avoids the awkward ...Nf6 (which blocks the bishop) and prepares ...d5 or ...d6.",
        },
        {
          san: "Bd3",
          explanation:
            "White develops the bishop to a good diagonal, targeting h7 and preparing to castle.",
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
        { san: "e5", explanation: "Black replies." },
        { san: "Nf3", explanation: "Develops and attacks e5." },
        { san: "Nc6", explanation: "Defends e5." },
        {
          san: "c3",
          explanation: "The Ponziani.",
          isKeyMove: true,
        },
        { san: "Nf6", explanation: "Black develops, hitting e4." },
        { san: "d4", explanation: "White expands." },
        { san: "exd4", explanation: "Black captures." },
        {
          san: "e5",
          explanation:
            "The Steinitz — White pushes the knight and grabs space.",
          isKeyMove: true,
        },
        { san: "Nd5", explanation: "Knight retreats centrally." },
        {
          san: "Bc4",
          explanation:
            "White goes for Bc4 instead of cxd4, putting immediate pressure on d5 and the kingside.",
          isKeyMove: true,
        },
        {
          san: "Nb6",
          explanation: "The d5 knight retreats, avoiding the bishop.",
        },
        { san: "Bb3", explanation: "White repositions the bishop safely." },
        {
          san: "d5",
          explanation:
            "Black's counter-blast — the d-pawn storms forward, threatening to blow up the center.",
          isKeyMove: true,
        },
        {
          san: "exd6",
          explanation:
            "White captures en passant! The e5 pawn takes on d6, a rare and powerful response.",
          isKeyMove: true,
        },
        { san: "Qxd6", explanation: "Black recaptures with the queen." },
        {
          san: "Nxd4",
          explanation:
            "White's knight captures the d4 pawn, restoring material balance in a sharp, unbalanced position.",
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
