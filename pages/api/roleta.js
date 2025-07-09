export default function handler(req, res) {
  const x = Math.floor(Math.random() * 100);

  const resultado =
    x < 75
      ? "$(sender) Nada aconteceu, tenta denovo aí Ta"
      : x < 88
      ? "/timeout $(sender.name) 300 Timeout de 5min pra ficar esperto kkkk"
      : x < 99
      ? "/timeout $(sender.name) 600 Timeout de 10min pra ficar esperto kkkk"
      : "/ban $(sender.name) Toma ban, que sorte HAH kkkk ";

  res.status(200).send(resultado);
}
