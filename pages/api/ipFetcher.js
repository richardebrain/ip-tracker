export default async function handler  (req, res) {
    const newIp = req.body;
    try{
       
        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_obaZnNbeu8SgbcpG7H9dz9cQFqdmC&ipAddress=${newIp}`);
        const jsonIp = await response.json();
        res.status(200).json(jsonIp);
    } catch(err){ 
        res.status(500).json({error: err.message})
    }
    res.status(200).json({ name: 'John Doe' })
  }