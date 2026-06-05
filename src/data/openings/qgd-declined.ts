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
    },
  ],
};

export default qgdDeclined;
