export default function handler(req, res) {
  const sender = req.query.sender || "usuario";
  const x = Math.random() * 100;

  let resultado;
  
  resultado =
    x < 66
      ? `${sender} Nada aconteceu, vai tentar de novo ai? Ta`
      : x < 86
      ? `/timeout ${sender} 300 Timeout de 5min pra ficar esperto kkkk`
      : x < 99.9
      ? `/timeout ${sender} 600 Timeout de 10min pra ficar esperto kkkk`
      : `/ban ${sender} Toma perma ban, que sorte HAH kkkk`;
  
  if((sender == "grompinho" || sender == "lukasdelta_") && x < 99.9){
    resultado = `/timeout ${sender} 300 hi ${sender} kkkk rsrsrs`;
  }

  res.status(200).send(resultado);
}