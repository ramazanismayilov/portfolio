import { useEffect } from "react";

export const BackgroundCanvas = () => {
  useEffect(() => {
    const canvas = document.getElementById("q5Canvas1");
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const lines = [];
    const lineCount = 70;

    for (let i = 0; i < lineCount; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
      });
    }

    const animate = () => {
      if (!ctx) return;
      ctx.fillStyle = "#1A1E23";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 10;
      lines.forEach((line) => {
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        line.x += line.dx;
        line.y += line.dy;
        if (line.x < 0 || line.x > canvas.width) line.dx *= -1;
        if (line.y < 0 || line.y > canvas.height) line.dy *= -1;

        ctx.lineTo(line.x, line.y);
        ctx.stroke();
      });
      requestAnimationFrame(animate);
    };
    animate();
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas
      id="q5Canvas1"
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
};

export default BackgroundCanvas;
