import axios from 'axios';
const Chart = require('./../assets/images/Chart.png');

export interface CryptoData {
  name: string;
  symbol: string;
  logo: string;
  price: string;
  chart: any;
  change24h: string;
}

export  const getCryptoPrices = async (perPage: number): Promise<CryptoData[]> => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: perPage,
        page: 1,
        sparkline: false,
        locale: 'en'
      }
    });

    // Effectuez la transformation des données pour chaque cryptomonnaie
    const transformedData: CryptoData[] = response.data.map((crypto: any) => ({
      name: crypto.name,
      symbol: crypto.symbol.toUpperCase(),
      logo: crypto.image,
      price: crypto.current_price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      chart: Chart, // Remplacez cette ligne par le chemin de l'image du graphique si nécessaire
      change24h: `${crypto.price_change_percentage_24h.toFixed(2)}%`
    }));

    return transformedData;
  } catch (error) {
    console.error('Erreur lors de la récupération des prix des cryptomonnaies :', error);
    return [];
  }
};

