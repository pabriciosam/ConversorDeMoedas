import { API_KEY } from './../currencyApiKey'
import axios from 'axios'

const baseURL = "https://api.apilayer.com/currency_data"

export const CONVERTE_MOEDAS = "CONVERTE_MOEDAS"

export function ConverteMoedas(converte) {
    //Acessar a url do currencylayer.com
    const url = `${baseURL}/live?apikey=${API_KEY}&source=${converte.de}&currencies=${converte.para}`
    
    const request = axios.get(url)

    //Recebe o valor convertido
    return {
        type: CONVERTE_MOEDAS,
        payload: request
    }
}