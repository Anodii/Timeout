export default function handler(req, res) {
  const sender = req.query.sender || "usuario";
  const x = Math.floor(Math.random() * 100);

  const resultado =
    x < 75
      ? `${sender}, nada aconteceu. Tenta de novo ai Ta`
      : x < 88
      ? `/timeout ${sender} 300 Timeout de 5min pra ficar esperto kkkk`
      : x < 99
      ? `/timeout ${sender} 600 Timeout de 10min pra ficar esperto kkkk`
      : `/ban ${sender} Toma ban, que sorte HAH kkkk`;

  res.status(200).send(resultado);
}