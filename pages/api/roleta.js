export default function handler(req, res) {
  const sender = req.query.sender || "usuario";
  const x = Math.random() * 100;

  let resultado;
  
  resultado =
    x < 66
      ? `${sender} Nada aconteceu, vai tentar de novo ai? Ta`
      : x < 86
      ? `/timeout ${sender} 1 Timeout de 5min pra ficar esperto kkkk`
      : x < 99.5
      ? `/timeout ${sender} 4 Timeout de 10min pra ficar esperto kkkk`
      : `/ban ${sender} Toma perma ban, que sorte HAH kkkk`;
  
  if(sender == "namiss2" && x < 99.5){
    resultado = `/timeout ${sender} 4 hi ${sender} kkkk rsrsrs`;
  }

  res.status(200).send(resultado);
}