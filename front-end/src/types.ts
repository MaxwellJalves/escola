export interface IMaterias {
  descricao : string
  cargaHorario : string |  number
  periodo : string | number
}

export interface IContato {
  id : string | number
  nome : string
  contato?: IContatos
}

export interface IContatos{
  email?: string
  whatsapp?: string
  telefone? : string
}

