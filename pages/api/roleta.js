export default function handler(req, res) {
  const sender = req.query.sender || "usuario";
  const x = Math.random() * 100;

  let resultado;
  
  if(sender == "namiss2"){
    resultado = `/timeout ${sender} 4 hi ${sender} kkkk`;
  } else {

  resultado =
    x < 66
      ? `${sender} nada aconteceu. Tenta de novo ai Ta ${x.toFixed(1)}`
      : x < 86
      ? `/timeout ${sender} 1 Timeout de 5min pra ficar esperto kkkk ${x.toFixed(1)}`
      : x < 99.5
      ? `/timeout ${sender} 4 Timeout de 10min pra ficar esperto kkkk ${x.toFixed(1)}`
      : `/ban ${sender} Toma ban, que sorte HAH kkkk ${x.toFixed(1)}`;
  }
  
  res.status(200).send(resultado);
}