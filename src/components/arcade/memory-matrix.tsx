import { useState, useEffect, useCallback } from "react";
import {
  Grid,
  Sparkles,
  Trophy,
  RefreshCw,
  ArrowRight,
  Volume2,
  VolumeX,
  Star,
  Timer,
  CheckCircle2,
  BrainCircuit,
} from "lucide-react";
import { MEMORY_DECKS, type MemoryPair } from "@/lib/arcade-data";
import { sound } from "./sound-fx";

interface MemoryMatrixProps {
  onBack: () => void;
  onFinish: (xpGained: number, score: number) => void;
}

interface MatrixCard {
  cardId: string;
  pairId: string;
  side: "A" | "B";
  text: string;
  subtext?: string | undefined;
  isFlipped: boolean;
  isMatched: boolean;
}

export function MemoryMatrix({ onBack, onFinish }: MemoryMatrixProps) {
  const [selectedDeckKey, setSelectedDeckKey] = useState<string>("biology");
  const [gameState, setGameState] = useState<"select" | "playing" | "finished">("select");
  const [cards, setCards] = useState<MatrixCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [isMuted, setIsMuted] = useState(sound.isMuted);

  const currentDeck = (MEMORY_DECKS[selectedDeckKey] ?? MEMORY_DECKS["biology"])!;

  const initGame = useCallback((deckKey: string) => {
    setSelectedDeckKey(deckKey);
    const deck = (MEMORY_DECKS[deckKey] ?? MEMORY_DECKS["biology"])!;

    // Create 12 cards from the 6 pairs
    const deckCards: MatrixCard[] = [];
    deck.pairs.forEach((pair) => {
      deckCards.push({
        cardId: `${pair.id}-A`,
        pairId: pair.id,
        side: "A",
        text: pair.cardA.text,
        subtext: pair.cardA.subtext ?? undefined,
        isFlipped: false,
        isMatched: false,
      });
      deckCards.push({
        cardId: `${pair.id}-B`,
        pairId: pair.id,
        side: "B",
        text: pair.cardB.text,
        subtext: pair.cardB.subtext ?? undefined,
        isFlipped: false,
        isMatched: false,
      });
    });

    // Shuffle cards
    deckCards.sort(() => Math.random() - 0.5);

    setCards(deckCards);
    setFlippedCards([]);
    setMoves(0);
    setMatchedPairs(0);
    setTimerSeconds(0);
    setIsLocked(false);
    setGameState("playing");
  }, []);

  // Timer
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (gameState === "playing") {
      interval = setInterval(() => {
        setTimerSeconds((t) => t + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [gameState]);

  const handleCardClick = (index: number) => {
    if (isLocked || gameState !== "playing") return;
    const card = cards[index];
    if (!card || card.isFlipped || card.isMatched) return;

    sound.playFlip();

    // Flip this card
    const newCards = [...cards];
    const targetCard = newCards[index];
    if (!targetCard) return;
    targetCard.isFlipped = true;
    setCards(newCards);

    const newFlipped = [...flippedCards, index];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      setIsLocked(true);

      const firstIdx = newFlipped[0];
      const secondIdx = newFlipped[1];
      if (firstIdx !== undefined && secondIdx !== undefined) {
        const firstCard = newCards[firstIdx];
        const secondCard = newCards[secondIdx];

        if (firstCard && secondCard && firstCard.pairId === secondCard.pairId) {
          // MATCH!
          setTimeout(() => {
            sound.playCorrect();
            firstCard.isMatched = true;
            secondCard.isMatched = true;
            setCards([...newCards]);
            setFlippedCards([]);
            setIsLocked(false);

            setMatchedPairs((mp) => {
              const nextCount = mp + 1;
              if (nextCount >= currentDeck.pairs.length) {
                sound.playVictory();
                setGameState("finished");
              }
              return nextCount;
            });
          }, 400);
        } else if (firstCard && secondCard) {
          // MISMATCH
          setTimeout(() => {
            sound.playWrong();
            firstCard.isFlipped = false;
            secondCard.isFlipped = false;
            setCards([...newCards]);
            setFlippedCards([]);
            setIsLocked(false);
          }, 900);
        }
      }
    }
  };

  // Calculate Stars (1 to 3) based on moves
  const stars = moves <= 8 ? 3 : moves <= 12 ? 2 : 1;
  const score = Math.max(100, 1000 - moves * 40 - timerSeconds * 5);
  const xpGained = Math.round(score / 4);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="text-xs font-semibold px-3 py-1.5 rounded-full border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to Arcade
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMuted(sound.toggleMute())}
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            className="p-2 rounded-full border border-border bg-card text-muted-foreground hover:text-foreground transition-colors"
          >
            {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4 text-emerald-500" />}
          </button>
        </div>
      </div>

      {/* DECK SELECTION SCREEN */}
      {gameState === "select" && (
        <div className="rounded-3xl border border-border bg-card p-6 md:p-10 space-y-8 shadow-sm text-center">
          <div className="size-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-500">
            <BrainCircuit className="size-8" />
          </div>

          <div className="space-y-2 max-w-lg mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Memory Matrix: Concept Grid</h2>
            <p className="text-sm text-muted-foreground">
              Test your cognitive recall by matching technical terms with their functions, chemical reactants with industrial products, and logic gates with their operations.
            </p>
          </div>

          {/* Deck Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {Object.entries(MEMORY_DECKS).map(([key, deck]) => (
              <div
                key={key}
                onClick={() => initGame(key)}
                className="p-5 rounded-2xl border border-border bg-card hover:border-emerald-500/50 hover:bg-muted/40 hover:scale-[1.02] cursor-pointer transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    {deck.category}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted border border-border">
                    6 Pairs (12 Tiles)
                  </span>
                </div>
                <h3 className="text-base font-bold text-foreground">{deck.title}</h3>
                <p className="text-xs text-muted-foreground">
                  Match terms like {deck.pairs.slice(0, 3).map((p) => p.cardA.text).join(", ")} with their definitions.
                </p>
                <div className="pt-1">
                  <button className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <span>Play Grid</span>
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PLAYING SCREEN */}
      {gameState === "playing" && (
        <div className="space-y-4">
          {/* Header Stats Bar */}
          <div className="flex items-center justify-between rounded-2xl border border-border bg-card p-4 shadow-sm">
            <div>
              <p className="text-xs text-muted-foreground uppercase font-semibold">Moves</p>
              <p className="text-xl font-black text-foreground">{moves}</p>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
              <Timer className="size-3.5" />
              <span>{timerSeconds}s</span>
            </div>

            <div className="text-right">
              <p className="text-xs text-muted-foreground uppercase font-semibold">Matched</p>
              <p className="text-xl font-black text-emerald-600 dark:text-emerald-400">
                {matchedPairs} / {currentDeck.pairs.length}
              </p>
            </div>
          </div>

          {/* 3x4 Grid of Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {cards.map((card, index) => {
              const isRevealed = card.isFlipped || card.isMatched;

              return (
                <div
                  key={card.cardId}
                  onClick={() => handleCardClick(index)}
                  className={`relative h-28 md:h-32 rounded-2xl border p-3.5 flex flex-col justify-between text-center cursor-pointer select-none transition-all duration-300 ${
                    card.isMatched
                      ? "border-emerald-500 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 scale-95 opacity-90"
                      : isRevealed
                      ? "border-primary bg-card text-foreground shadow-md rotate-y-0"
                      : "border-border bg-muted/70 hover:bg-muted hover:border-border/80 text-muted-foreground"
                  }`}
                >
                  {isRevealed ? (
                    <div className="h-full flex flex-col justify-center items-center space-y-1 animate-in zoom-in-90 duration-200">
                      <p className="text-xs md:text-sm font-bold leading-snug">{card.text}</p>
                      {card.subtext && (
                        <p className="text-[10px] text-muted-foreground line-clamp-2">{card.subtext}</p>
                      )}
                      {card.isMatched && (
                        <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                      )}
                    </div>
                  ) : (
                    <div className="h-full flex flex-col justify-center items-center">
                      <Sparkles className="size-6 text-muted-foreground/40" />
                      <span className="text-[10px] text-muted-foreground/60 font-mono mt-1">Tap to Flip</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* FINISHED SCREEN */}
      {gameState === "finished" && (
        <div className="rounded-3xl border border-border bg-card p-6 md:p-10 space-y-6 shadow-sm text-center">
          <div className="size-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-500">
            <Trophy className="size-8" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center gap-1 text-amber-500">
              {Array.from({ length: 3 }).map((_, i) => (
                <Star
                  key={i}
                  className={`size-6 ${i < stars ? "fill-amber-500" : "text-muted-foreground/30"}`}
                />
              ))}
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-foreground">Matrix Solved!</h2>
            <p className="text-sm text-muted-foreground">
              You cleared all pairs in {moves} moves and {timerSeconds} seconds.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
            <div className="p-3 rounded-2xl bg-muted/60 border border-border">
              <p className="text-xs text-muted-foreground">Moves</p>
              <p className="text-xl font-black text-foreground mt-0.5">{moves}</p>
            </div>
            <div className="p-3 rounded-2xl bg-muted/60 border border-border">
              <p className="text-xs text-muted-foreground">Time</p>
              <p className="text-xl font-black text-foreground mt-0.5">{timerSeconds}s</p>
            </div>
            <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">XP Reward</p>
              <p className="text-xl font-black text-emerald-600 dark:text-emerald-400 mt-0.5">+{xpGained}</p>
            </div>
          </div>

          {/* Matched Pairs Summary */}
          <div className="space-y-3 pt-2 text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Concept Pairs Summary:
            </h3>
            <div className="space-y-2">
              {currentDeck.pairs.map((pair) => (
                <div
                  key={pair.id}
                  className="p-3 rounded-2xl border border-border bg-muted/40 text-xs flex items-center justify-between gap-3"
                >
                  <div className="font-bold text-foreground">{pair.cardA.text}</div>
                  <ArrowRight className="size-3.5 text-muted-foreground shrink-0" />
                  <div className="text-right text-muted-foreground">{pair.cardB.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              onClick={() => setGameState("select")}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-secondary hover:bg-muted font-semibold text-sm transition-all"
            >
              Choose Another Deck
            </button>
            <button
              onClick={() => {
                onFinish(xpGained, score);
                onBack();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-md transition-all"
            >
              Collect XP & Back to Hub
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
