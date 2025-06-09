export default function handler(req, res) {
  res.status(200).json({
    name: "Eclipse RP",
    ip: "141.95.234.19",
    port: 1185,
    players_online: 15,
    players_max: 100
  });
}