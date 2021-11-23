
/** @description
 *  Função recebe um texto e um dos separadores previstos e retorna uma string com a formatação camelCase
 */
export const conversorCamelCase = (texto : string , separador : ' ') =>{

  return texto.split(separador)
              .map((t) => t[0].toUpperCase() +  t.slice(1).toLowerCase())
              .join(separador)
}
