export default function handler(req, res) {
  const x = Math.floor(Math.random() * 100);

  const resultado =
    x < 75
      ? "Nada aconteceu, tenta denovo aí Ta"
      : x < 88
      ? "Timeout de 5min pra ficar esperto kkkk"
      : x < 99
      ? "Timeout de 10min pra ficar esperto kkkk"
      : "Toma ban";

  res.status(200).send(resultado);
}
