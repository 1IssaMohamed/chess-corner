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
          explanation: "White stakes a claim in the center.",
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
        { san: "e4", explanation: "White claims the center.", isKeyMove: true },
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
    },
    {
      id: "ponziani-steinitz",
      name: "Steinitz Variation: 5.e5",
      difficulty: "intermediate",
      description:
        "After 3...Nf6 4.d4 exd4, White plays 5.e5 instead of recapturing — a sharp pawn sacrifice that drives the knight around and seizes space. Requires precise play from both sides.",
      moves: [
        { san: "e4", explanation: "White opens the center.", isKeyMove: true },
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
    },
    {
      id: "ponziani-vs-d5",
      name: "vs 3...d5 — Counter-Attack",
      difficulty: "intermediate",
      description:
        "Black's most energetic reply — immediately striking at the center. White captures and enters an open game where precise play is key.",
      moves: [
        { san: "e4", explanation: "White claims the center.", isKeyMove: true },
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
          explanation: "White occupies the center.",
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
    },
    {
      id: "ponziani-steinitz-sharp",
      name: "Sharp Steinitz: 6.Bc4 Nb6 7.Bb3 d5",
      difficulty: "advanced",
      description:
        "The most forcing line of the Steinitz Variation. White plays Bc4, Black retreats with Nb6, then bombs with d5. White captures en passant, launching a tactical melee that tests both players' preparation.",
      moves: [
        { san: "e4", explanation: "White opens.", isKeyMove: true },
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
    },
  ],
};

export default ponziani;
