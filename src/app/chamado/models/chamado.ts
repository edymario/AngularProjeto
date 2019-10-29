export interface Chamado {
    id_cliente: number;
    cliente:string;
    tecnico:string;
    defeito:string;
    solucao:string;
    dataChamado: Date;
    concluido:boolean;
}
  