type ISeparator ={
  espaco: ' ',
  underline: '_',
  hifen: '-'

}
/** @description
 *  Função recebe um texto e um dos separadores previstos e retorna uma string com a formatação camelCase
 */
export const conversorCamelCase = (texto : string , separator : ISeparator) =>{
  return texto.split(separator.espaco)
              .map((t) => t[0].toUpperCase() +  t.slice(1).toLowerCase())
              .join(separator.espaco)
}
