import { useRef, useEffect, memo, MutableRefObject, useCallback } from "react";

const starCoordinates = [
  { x: 0.5, y: 0.2 },
  { x: 0.6, y: 0.3 },
  { x: 0.2, y: 0.4 },
  { x: 0.7, y: 0.7 },
  { x: 0.65, y: 0.4 },
  { x: 0.5, y: 0.6 },
  { x: 0.4, y: 0.7 },
  { x: 0.6, y: 0.7 },
];

function starryNight({
  canvasRef,
}: {
  canvasRef: MutableRefObject<HTMLCanvasElement | null>;
}) {
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

      let stars = starCoordinates.map(({ x, y }) => ({
        x: x * canvasWidth,
        y: y * canvasHeight,
      }));

      const constellationLines = [
        [0, 1],
        [1, 4],
        [4, 2],
        [2, 6],
        [6, 5],
        [5, 3],
        [3, 7],
      ];

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
        context.fillStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
        context.shadowBlur = 0;
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

      const totalLines = constellationLines.length;
      const opacityTransitionStartIndex = 0;
      const opacityTransitionEndIndex = 2;
      let backgroundStarsOpacity = 0;

      const animateLines = () => {
        if (currentLineIndex >= totalLines) return;

        let startTime: number | null = null;
        const duration = 1500;

        const [startIndex, endIndex] = constellationLines[currentLineIndex];
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
            const [sIndex, eIndex] = constellationLines[i];
            context.moveTo(stars[sIndex].x, stars[sIndex].y);
            context.lineTo(stars[eIndex].x, stars[eIndex].y);
          }
          context.strokeStyle = "#ffffff40";
          context.lineWidth = 1;
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

        stars = starCoordinates.map(({ x, y }) => ({
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

const ConstellationCanvas = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const memoStarryNight = useCallback(starryNight, [starryNight]);

  useEffect(() => {
    memoStarryNight({
      canvasRef: canvasRef,
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute z-[10] w-full h-full top-0 left-0 bg-transparent"
    />
  );
});

export default ConstellationCanvas;
