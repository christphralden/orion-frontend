import { useRef, useEffect, memo, MutableRefObject, useCallback } from "react";

const starCoordinates = {
  vectors: [
    { x: 0.5, y: 0.2 },
    { x: 0.6, y: 0.3 },
    { x: 0.2, y: 0.4 },
    { x: 0.7, y: 0.7 },
    { x: 0.65, y: 0.4 },
    { x: 0.5, y: 0.6 },
    { x: 0.4, y: 0.7 },
    { x: 0.6, y: 0.7 },
  ],
  connections: [
    [0, 1],
    [1, 4],
    [4, 2],
    [2, 6],
    [6, 5],
    [5, 3],
    [3, 7],
  ],
};

const starCoordinates2 = {
  vectors: [
    { x: 0.25, y: 0.65 },
    { x: 0.3, y: 0.8 },
    { x: 0.4, y: 0.8 },
    { x: 0.45, y: 0.65 },

    { x: 0.75, y: 0.65 },
    { x: 0.7, y: 0.8 },
    { x: 0.6, y: 0.8 },
    { x: 0.55, y: 0.65 },

    { x: 0.4, y: 0.55 },
    { x: 0.4, y: 0.25 },
    { x: 0.5, y: 0.13 },

    { x: 0.6, y: 0.25 },

    { x: 0.6, y: 0.55 },
  ],
  connections: [
    [6, 5],
    [0, 1],
    [2, 3],
    [8, 9],
    [10, 11],
    [11, 12],
    [3, 8],
    [5, 4],
    [12, 7],
    [1, 2],
    [9, 10],
    [7, 6],
    [3, 7],
    [4, 12],
    [0, 8],
  ],
};

function starryNight({
  canvasRef,
  isOrion,
}: {
  canvasRef: MutableRefObject<HTMLCanvasElement | null>;
  isOrion: boolean;
}) {
  const coordinates = isOrion ? starCoordinates : starCoordinates2;
  if (canvasRef == null) return;
  let animationFrameId: number;
  const canvas = canvasRef.current;

  if (canvas) {
    const context = canvas.getContext("2d");
    if (context) {
      let canvasWidth: number;
      let canvasHeight: number;

      const setCanvasSize = () => {
        canvasWidth = canvas.width = window.innerWidth;
        canvasHeight = canvas.height = window.innerHeight;
      };

      setCanvasSize();

      let stars = coordinates.vectors.map(({ x, y }) => ({
        x: x * canvasWidth,
        y: y * canvasHeight,
      }));

      const numBackgroundStars = 100;
      let backgroundStars: { x: number; y: number; radius: number }[] = [];
      const generateBackgroundStars = () => {
        backgroundStars = [];
        for (let i = 0; i < numBackgroundStars; i++) {
          const x = Math.random() * canvasWidth;
          const y = Math.random() * canvasHeight;
          const radius = Math.random() * 1.5;
          backgroundStars.push({ x, y, radius });
        }
      };

      generateBackgroundStars();

      const drawBackgroundStars = (opacity: number) => {
        context.fillStyle = `rgba(255, 255, 255, ${opacity * 0.4})`;
        context.shadowBlur = 10;
        backgroundStars.forEach((star) => {
          context.beginPath();
          context.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
          context.fill();
        });
      };

      const drawStars = () => {
        context.fillStyle = "#ffffff80";
        context.shadowColor = "#ffffff80";
        context.shadowBlur = 25;
        stars.forEach((star) => {
          context.beginPath();
          context.arc(star.x, star.y, 2, 0, Math.PI * 2, false);
          context.fill();
        });
      };

      const easeInOutQuad = (t: number) =>
        t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      let currentLineIndex = 0;

      const totalLines = coordinates.connections.length;
      const opacityTransitionStartIndex = 0;
      const opacityTransitionEndIndex = 1;
      let backgroundStarsOpacity = 0;

      const animateLines = () => {
        if (currentLineIndex >= totalLines) return;

        let startTime: number | null = null;
        const duration = 1500;

        const [startIndex, endIndex] =
          coordinates.connections[currentLineIndex];
        const start = stars[startIndex];
        const end = stars[endIndex];

        const animateLine = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = easeInOutQuad(progress);

          const currentX = start.x + (end.x - start.x) * easedProgress;
          const currentY = start.y + (end.y - start.y) * easedProgress;

          context.clearRect(0, 0, canvasWidth, canvasHeight);

          if (
            currentLineIndex >= opacityTransitionStartIndex &&
            currentLineIndex <= opacityTransitionEndIndex
          ) {
            const transitionProgress =
              (currentLineIndex - opacityTransitionStartIndex + easedProgress) /
              (opacityTransitionEndIndex - opacityTransitionStartIndex + 1);
            backgroundStarsOpacity = transitionProgress;
          } else if (currentLineIndex > opacityTransitionEndIndex) {
            backgroundStarsOpacity = 1;
          }

          if (backgroundStarsOpacity > 0) {
            drawBackgroundStars(backgroundStarsOpacity);
          }

          drawStars();

          context.beginPath();
          for (let i = 0; i < currentLineIndex; i++) {
            const [sIndex, eIndex] = coordinates.connections[i];
            context.moveTo(stars[sIndex].x, stars[sIndex].y);
            context.lineTo(stars[eIndex].x, stars[eIndex].y);
          }
          context.strokeStyle = "#ffffff40";
          context.lineWidth = 1.5;
          context.shadowColor = "#ffffff";
          context.shadowBlur = 5;
          context.stroke();

          context.beginPath();
          context.moveTo(start.x, start.y);
          context.lineTo(currentX, currentY);
          context.stroke();

          if (progress < 1) {
            animationFrameId = requestAnimationFrame(animateLine);
          } else {
            currentLineIndex++;
            animateLines();
          }
        };

        animationFrameId = requestAnimationFrame(animateLine);
      };

      drawStars();
      animateLines();

      const handleResize = () => {
        cancelAnimationFrame(animationFrameId);
        setCanvasSize();

        stars = coordinates.vectors.map(({ x, y }) => ({
          x: x * canvasWidth,
          y: y * canvasHeight,
        }));

        generateBackgroundStars();

        backgroundStarsOpacity = 0;
        currentLineIndex = 0;

        drawStars();
        animateLines();
      };
      window.addEventListener("resize", handleResize);

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener("resize", handleResize);
      };
    }
  }
}

const ConstellationCanvas = memo(({ mode }: { mode: string | null }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const memoStarryNight = useCallback(starryNight, [starryNight]);

  const isOrion = mode == import.meta.env.ORION;
  useEffect(() => {
    memoStarryNight({
      canvasRef: canvasRef,
      isOrion: isOrion,
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed z-[10] w-full h-full top-0 left-0 bg-transparent block overflow-hidden"
    />
  );
});

export default ConstellationCanvas;
