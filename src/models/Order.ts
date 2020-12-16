interface DTOOrder {

  periodo: string | null | undefined,
  entrada?: string | null,
  principal?: string | null,
  bebida?: string | null,
  sobremesa?: string | null,
  error?: string | null

}

export default class Order{
  periodo: string | null | undefined
  entrada?: string | null
  principal?: string | null
  bebida?: string | null
  sobremesa?: string | null
  error?: string | null

constructor({periodo, entrada, principal, bebida, sobremesa, error}: DTOOrder ){

  this.periodo = periodo
  this.entrada = entrada
  this.principal = principal
  this.bebida = bebida
  this.sobremesa = sobremesa
  this.error = error



  }
}