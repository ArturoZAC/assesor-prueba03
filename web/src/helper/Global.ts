const url = process.env.NEXT_PUBLIC_API_URL;

export const Global = {
  url: `${url}/api`,
  urlImages: url,
};

// export const Global = {
//   url: 'https://apiaseso.logosperu.com.pe/api',
//   urlImages: 'https://apiaseso.logosperu.com.pe/api'
// }

// // Alternativa: Producción Cencapperu
// export const Global = {
//   url: 'https://api.cencapperu.com/api',
//   urlImages: 'https://api.cencapperu.com'
// }
