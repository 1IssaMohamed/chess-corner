import type { Opening } from "@/types";

const qgdDeclined: Opening = {
  id: "qgd-declined",
  name: "Queen's Gambit Declined",
  side: "black",
  eco: "D30",
  description:
    "1.d4 d5 2.c4 e6 — playing the QGD as Black means refusing the gambit and building a solid, classical structure. You aim for long-term equality and counterplay while White tries to exploit the extra space.",
  tags: ["d4", "closed", "solid", "strategic", "classical"],
  lines: [
    {
      id: "qgd-orthodox",
      name: "Orthodox Defence",
      difficulty: "beginner",
      description:
        "The classical main line. We develop solidly with Nf6 and Be7, castle kingside, and aim for a ...c5 or ...e5 break to free our position.",
      moves: [
        {
          san: "d4",
          explanation: "White occupies the center with the queen's pawn.",
        },
        {
          san: "d5",
          explanation: "We claim our share of the center immediately.",
          isKeyMove: true,
        },
        {
          san: "c4",
          explanation:
            "The Queen's Gambit — White offers a pawn for central control.",
        },
        {
          san: "e6",
          explanation:
            "We decline the gambit, supporting d5 with the e-pawn. The pawn structure is solid, though our light-squared bishop is temporarily blocked.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops and supports the c4 push." },
        {
          san: "Nf6",
          explanation:
            "We develop the knight to its best square, pressuring e4.",
        },
        {
          san: "Bg5",
          explanation: "White pins our knight, increasing pressure on d5.",
        },
        {
          san: "Be7",
          explanation:
            "We unpin by developing the bishop, preparing to castle.",
          isKeyMove: true,
        },
        {
          san: "e3",
          explanation: "White consolidates the center and prepares Nf3.",
        },
        {
          san: "O-O",
          explanation:
            "We castle, getting the king safe before the middlegame begins.",
        },
        { san: "Nf3", explanation: "White completes development." },
        {
          san: "Nbd7",
          explanation:
            "We develop the queenside knight. From d7 it supports e5 and c5 breaks and avoids blocking the c8 bishop.",
        },
      ],
      continuationMoves: [
        {
          san: "Rc1",
          idea: "White centralises the rook to c1, building pressure on the c-file and preparing the eventual c4-c5 break to crack our centre.",
        },
        {
          san: "c6",
          idea: "We reinforce d5 with c6 — the rock-solid QGD fortress. No weaknesses, no easy targets.",
        },
        {
          san: "Bd3",
          idea: "White develops the bishop to a strong diagonal, ready to recapture on c4 and eyeing the h7 pawn.",
        },
        {
          san: "dxc4",
          idea: "We release the central tension — freeing our pieces and forcing White to recapture. Now watch where the bishop goes.",
        },
        {
          san: "Bxc4",
          idea: "White recaptures with the bishop, not a pawn. The bishop is powerfully placed on c4, targeting f7 and controlling the long diagonal. Our plan: ...c5 or ...e5 to free the position — the classic QGD strategy of patience followed by a timely central break.",
        },
      ],
      continuationIdea:
        "White centralises the rook on c1, preparing pressure on the c-file. We reinforce d5 with c6 — solid and sensible. White's Bd3 sets up to recapture on c4. We release the tension with dxc4 and White recaptures with the bishop. This is the QGD middlegame in miniature: we have achieved a comfortable, rock-solid structure. Our plan is ...c5 or ...e5 to generate counterplay — the classic QGD strategy of patience followed by a timely central break.",
    },
    {
      id: "qgd-exchange",
      name: "vs Exchange Variation",
      difficulty: "beginner",
      description:
        "White trades on d5 early, reaching a symmetrical pawn structure. We get easy development and actively look to fight for the initiative.",
      moves: [
        { san: "d4", explanation: "White opens with the queen's pawn." },
        {
          san: "d5",
          explanation: "We respond with our own central claim.",
          isKeyMove: true,
        },
        { san: "c4", explanation: "The Queen's Gambit." },
        {
          san: "e6",
          explanation: "We decline, supporting d5 solidly.",
          isKeyMove: true,
        },
        {
          san: "cxd5",
          explanation:
            "White trades — the Exchange Variation. Symmetrical pawn structure ahead.",
        },
        {
          san: "exd5",
          explanation:
            "We recapture with the e-pawn, opening our light-squared bishop and reaching a symmetrical position.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops the knight." },
        {
          san: "Nf6",
          explanation: "We develop naturally, preparing to castle.",
        },
        { san: "Bg5", explanation: "White pins our knight." },
        {
          san: "Be7",
          explanation: "We unpin and develop, preparing castling.",
        },
        { san: "e3", explanation: "White solidifies the center." },
        {
          san: "O-O",
          explanation:
            "We castle, reaching a solid, balanced position. Our plan is ...c5 or ...Bf5 to activate our pieces.",
        },
        {
          san: "Bd3",
          explanation: "White develops the bishop to target our kingside.",
        },
        {
          san: "Re8",
          explanation:
            "We centralize the rook, supporting the e5 break and adding pressure on the e-file.",
          isKeyMove: true,
        },
      ],
      continuationMoves: [
        {
          san: "Nf3",
          idea: "White develops the last piece and prepares to castle.",
        },
        {
          san: "Nc6",
          idea: "We develop the queenside knight — now all pieces are active.",
        },
        {
          san: "O-O",
          idea: "White castles. In the Exchange Variation, White typically plays the minority attack: b4-b5 to weaken Black's c6 pawn.",
        },
        {
          san: "Bf5",
          idea: "We activate the light-squared bishop outside the pawn chain — a key advantage of the Exchange structure.",
        },
        {
          san: "b4",
          idea: "White launches the minority attack — b4-b5-bxc6 will create a weak isolated c-pawn for Black to defend. Understanding this plan is key to both sides in the Exchange QGD.",
        },
      ],
      continuationIdea:
        "Against the Exchange Variation, the key plan is to activate the c8 bishop with Bf5 before White's minority attack (b4-b5) begins. Our Re8 supports the eventual e5 break and Ne4 plan. Understanding the minority attack — and how to counter it — is the main lesson of the Exchange QGD.",
    },
    {
      id: "qgd-lasker",
      name: "Lasker Defence",
      difficulty: "intermediate",
      description:
        "Emanuel Lasker's clever idea: after Bg5, we play Ne4! — attacking the bishop and simplifying. Trading pieces eases our position and equalizes quickly.",
      moves: [
        { san: "d4", explanation: "White opens." },
        { san: "d5", explanation: "We claim the center.", isKeyMove: true },
        { san: "c4", explanation: "The Queen's Gambit." },
        {
          san: "e6",
          explanation: "We decline, supporting d5.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops." },
        { san: "Nf6", explanation: "We develop the knight." },
        { san: "Bg5", explanation: "White pins our Nf6." },
        { san: "Be7", explanation: "We unpin and prepare to castle." },
        { san: "e3", explanation: "White supports the center." },
        {
          san: "O-O",
          explanation: "We castle, getting the king safe.",
        },
        { san: "Nf3", explanation: "White completes development." },
        {
          san: "Ne4",
          explanation:
            "The Lasker Defence! We attack the bishop on g5 and exchange pieces to ease our cramped position.",
          isKeyMove: true,
        },
        {
          san: "Bxe7",
          explanation: "White trades off the bishop to avoid losing it.",
        },
        {
          san: "Qxe7",
          explanation:
            "We recapture with the queen — now our queen is well-centralized and our position is comfortable and free.",
          isKeyMove: true,
        },
      ],
      continuationMoves: [
        {
          san: "Bd3",
          idea: "White develops, planning to recapture on c4 and target h7.",
        },
        {
          san: "dxc4",
          idea: "We capture the c4 pawn — a free move to improve our position.",
        },
        {
          san: "Bxc4",
          idea: "White recaptures. Now both bishops are active and the position is very comfortable for us.",
        },
        {
          san: "c5",
          idea: "We immediately counterattack the d4 pawn — the classic QGD counterplay.",
        },
        {
          san: "dxc5",
          idea: "White captures. After Qxc5, we have excellent central control and easy equality. The Lasker Defence shows Lasker's genius — simplify, keep it solid, and trust the resulting endgame.",
        },
      ],
      continuationIdea:
        "The Lasker Defence shows Emanuel Lasker's pragmatic genius: instead of defending passively, trade pieces! After Ne4 and Qxe7, Black's position opens up dramatically. The queen is centralised, White's bishop pair is reduced, and the resulting position is easy to play. This was Lasker's secret weapon against the QGD.",
    },
    {
      id: "qgd-tartakower",
      name: "Tartakower-Makogonov-Bondarevsky",
      difficulty: "intermediate",
      description:
        "One of the richest systems in chess. After ...h6 and ...b6, we fianchetto the queen's bishop and create a dynamic position where both sides have long-term plans.",
      moves: [
        { san: "d4", explanation: "White opens." },
        { san: "d5", explanation: "We occupy the center.", isKeyMove: true },
        { san: "c4", explanation: "The Queen's Gambit." },
        { san: "e6", explanation: "We decline solidly.", isKeyMove: true },
        { san: "Nc3", explanation: "White develops." },
        { san: "Nf6", explanation: "We develop the knight." },
        { san: "Bg5", explanation: "White pins our knight." },
        { san: "Be7", explanation: "We unpin and prepare to castle." },
        { san: "e3", explanation: "White consolidates." },
        { san: "O-O", explanation: "We castle." },
        { san: "Nf3", explanation: "White completes development." },
        {
          san: "h6",
          explanation:
            "We nudge the bishop — forcing it to commit before we develop our queenside.",
          isKeyMove: true,
        },
        { san: "Bh4", explanation: "White maintains the pin." },
        {
          san: "b6",
          explanation:
            "The hallmark of the Tartakower! We prepare to fianchetto our bad bishop on b7, dramatically improving its scope.",
          isKeyMove: true,
        },
        { san: "Be2", explanation: "White retreats the bishop to safety." },
        {
          san: "Bb7",
          explanation:
            "Our bishop comes to life on b7, bearing down on the long diagonal toward e4.",
        },
        { san: "O-O", explanation: "White castles." },
        {
          san: "Nbd7",
          explanation:
            "We develop the queenside knight, preparing ...c5 or ...Ne4 to generate counterplay.",
        },
      ],
      continuationMoves: [
        {
          san: "cxd5",
          idea: "White trades on d5, opening the c-file and clarifying the center.",
        },
        {
          san: "exd5",
          idea: "We recapture with the e-pawn, freeing our light-squared bishop's diagonal.",
        },
        {
          san: "Bg5",
          idea: "White re-establishes the pin on our Nf6, maintaining central pressure.",
        },
        {
          san: "Kh7",
          idea: "The king steps to h7, making room for the rook and preparing ...g6 to challenge the bishop.",
        },
        {
          san: "h4",
          idea: "White advances h4, gaining kingside space. The Tartakower is one of the richest QGD systems — the h6-b6-Bb7 idea transforms our 'bad' light-squared bishop into the game's strongest piece.",
        },
      ],
      continuationIdea:
        "The Tartakower's h6-b6-Bb7 plan solves the QGD's main problem — the 'bad' light-squared bishop. After b6 and Bb7, the bishop controls the entire a8-h1 diagonal and becomes Black's strongest piece. The Ne4-dxe4 sequence then creates a powerful center pawn that backs up the bishop's diagonal.",
    },
    {
      id: "qgd-ragozin",
      name: "Ragozin Variation",
      difficulty: "intermediate",
      description:
        "A hybrid of the QGD and Nimzo-Indian — we play Bb4 early to pin the knight and create structural imbalances. Dynamic and fighting.",
      moves: [
        { san: "d4", explanation: "White occupies the center." },
        { san: "d5", explanation: "We reply in the center.", isKeyMove: true },
        { san: "c4", explanation: "The Queen's Gambit." },
        {
          san: "e6",
          explanation: "We decline, supporting d5.",
          isKeyMove: true,
        },
        { san: "Nc3", explanation: "White develops." },
        { san: "Nf6", explanation: "We develop." },
        { san: "Nf3", explanation: "White adds pressure on d5." },
        {
          san: "Bb4",
          explanation:
            "The Ragozin! We pin White's c3 knight, creating pressure similar to the Nimzo-Indian.",
          isKeyMove: true,
        },
        { san: "e3", explanation: "White solidifies the center." },
        {
          san: "O-O",
          explanation:
            "We castle, getting the king safe before the complications begin.",
        },
        { san: "Bd3", explanation: "White develops the bishop." },
        {
          san: "dxc4",
          explanation:
            "We grab the c4 pawn — now White must spend a tempo recapturing while we accelerate our counterplay.",
          isKeyMove: true,
        },
        {
          san: "Bxc4",
          explanation: "White recovers the pawn.",
        },
        {
          san: "c5",
          explanation:
            "We immediately counter-attack White's center, fighting for central equality and activating our pieces.",
          isKeyMove: true,
        },
      ],
      continuationMoves: [
        {
          san: "O-O",
          idea: "White castles. The Ragozin's c5 break creates immediate central tension.",
        },
        {
          san: "cxd4",
          idea: "We capture — opening the position where our active pieces can shine.",
        },
        {
          san: "exd4",
          idea: "White recaptures — an isolated queen's pawn structure has arisen.",
        },
        {
          san: "Nc6",
          idea: "We develop the knight, fighting for central control and targeting d4.",
        },
        {
          san: "Qe2",
          idea: "White defends d4 with the queen. The Ragozin is a dynamic, fighting system — the Bb4 pin combined with the c5 break gives Black excellent piece activity against White's IQP.",
        },
      ],
      continuationIdea:
        "The Ragozin combines the QGD's solid structure with the Nimzo-Indian's dynamic piece play. After dxc4-Bxc4-c5-cxd4, White has an IQP while Black has active bishops and knights. It's one of the most fighting QGD systems — used by Magnus Carlsen as a reliable weapon.",
    },
    {
      id: "qgd-cambridge-springs",
      name: "Cambridge Springs Defence",
      difficulty: "advanced",
      description:
        "A sharp, aggressive variation where we play Qa5 to attack White's Nc3 diagonally and disrupt the whole setup. Requires concrete knowledge but gives Black excellent winning chances.",
      moves: [
        { san: "d4", explanation: "White opens with d4." },
        { san: "d5", explanation: "We stake out the center.", isKeyMove: true },
        { san: "c4", explanation: "The Queen's Gambit." },
        { san: "e6", explanation: "We decline.", isKeyMove: true },
        { san: "Nc3", explanation: "White develops." },
        { san: "Nf6", explanation: "We develop." },
        {
          san: "Bg5",
          explanation: "White pins our knight.",
        },
        {
          san: "Nbd7",
          explanation:
            "Instead of Be7, we develop the queenside knight — keeping options open for the Cambridge Springs.",
        },
        { san: "e3", explanation: "White supports the center." },
        {
          san: "c6",
          explanation: "We reinforce d5 and prepare the queen sortie.",
          isKeyMove: true,
        },
        { san: "Nf3", explanation: "White completes development." },
        {
          san: "Qa5",
          explanation:
            "The Cambridge Springs! Our queen attacks the Nc3 diagonally while threatening to disrupt White's whole setup — forcing difficult choices.",
          isKeyMove: true,
          wrongMoveWarning:
            "Try Qa5 here — this is the signature Cambridge Springs move!",
        },
        {
          san: "Nd2",
          explanation:
            "White defends c4 and blocks Qa5's diagonal — a common response.",
        },
        {
          san: "Bb4",
          explanation:
            "We add more pressure on c3, doubling threats. White must be precise to hold the position together.",
          isKeyMove: true,
        },
        {
          san: "Qc2",
          explanation:
            "White defends the c3 knight and releases the pin tension.",
        },
        {
          san: "O-O",
          explanation: "We castle, completing our development safely.",
        },
        { san: "Bd3", explanation: "White develops the bishop." },
        {
          san: "e5",
          explanation:
            "We unleash the central break — fighting for the initiative and accepting a complex, tactical middlegame.",
          isKeyMove: true,
        },
      ],
      continuationMoves: [
        {
          san: "dxe5",
          idea: "White captures — accepting Black's central break.",
        },
        {
          san: "Nxe5",
          idea: "We recapture with the knight, centralising it to a powerful square.",
        },
        {
          san: "Bxf6",
          idea: "White trades the bishop for the Nf6, doubling our pawns but giving us the open g-file.",
        },
        {
          san: "gxf6",
          idea: "We recapture with the pawn — accepting the structural change for real piece activity and the half-open g-file.",
        },
        {
          san: "Nce4",
          idea: "White's knight occupies the powerful e4 outpost. The Cambridge Springs Qa5 sortie has forced White to play defensively — and our e5 break has created a dynamic, open position where Black's active pieces compensate for any structural issues.",
        },
      ],
      continuationIdea:
        "The Cambridge Springs Qa5 disrupts White's entire setup — it forces defensive moves and allows our e5 central break much earlier than in normal QGD lines. After the e5-dxe5-Nxe5 sequence, Black has centralised, active pieces and real winning chances.",
    },
    {
      id: "qgd-vienna",
      name: "Vienna Variation",
      difficulty: "advanced",
      description:
        "We accept the gambit pawn on c4, then play Bb4 to pin the knight and justify keeping the pawn. Leads to sharp, unbalanced positions with excellent practical chances.",
      moves: [
        { san: "d4", explanation: "White opens." },
        { san: "d5", explanation: "We claim the center.", isKeyMove: true },
        { san: "c4", explanation: "The Queen's Gambit." },
        { san: "e6", explanation: "Declining with e6.", isKeyMove: true },
        { san: "Nc3", explanation: "White develops." },
        { san: "Nf6", explanation: "We develop." },
        { san: "Nf3", explanation: "White adds pressure." },
        {
          san: "dxc4",
          explanation:
            "We accept the gambit! Now we'll fight to hold the c4 pawn with ...b5 or just use it as a tempo.",
          isKeyMove: true,
        },
        {
          san: "e4",
          explanation:
            "White immediately takes the center, threatening to dominate.",
        },
        {
          san: "Bb4",
          explanation:
            "The Vienna Variation — we pin the knight and put pressure on White's ambitious center.",
          isKeyMove: true,
        },
        {
          san: "Bxc4",
          explanation: "White recovers the c4 pawn.",
        },
        {
          san: "Nxe4",
          explanation:
            "We take the e4 pawn! This bold capture kicks off a sharp tactical sequence.",
          isKeyMove: true,
        },
        {
          san: "O-O",
          explanation: "White castles, generating threats against our knight.",
        },
        {
          san: "Nxc3",
          explanation: "We capture the knight, picking up the piece.",
        },
        {
          san: "bxc3",
          explanation:
            "White recaptures, doubling pawns but opening the b-file.",
        },
        {
          san: "Be7",
          explanation:
            "We develop the bishop and consolidate. The position is sharp — both sides must play accurately.",
        },
      ],
      continuationMoves: [
        {
          san: "Re1",
          idea: "White centralises the rook, targeting our Be7 and pressing for compensation.",
        },
        {
          san: "O-O",
          idea: "We castle — the king is safe and we can consolidate the material.",
        },
        {
          san: "Qe2",
          idea: "White adds pressure — targeting e6 and planning to advance the center.",
        },
        {
          san: "Qd6",
          idea: "We centralise the queen on d6, keeping the position flexible and defending key squares.",
        },
        {
          san: "Bd5",
          idea: "White's bishop claims the powerful d5 outpost. The Vienna Variation is one of the sharpest QGD systems — accepting the gambit and fighting to keep the pawn. With precise play, Black can keep the material while neutralising White's dynamic compensation.",
        },
      ],
      continuationIdea:
        "The Vienna Variation shows how to fight for material in the QGD. After dxc4-Bb4-Nxe4-Nxc3, Black has won a pawn but White has compensation in the bishop pair and open lines. The key is to consolidate quickly with Be7-O-O while fighting for active squares with Qd5.",
    },
  ],
};

export default qgdDeclined;
