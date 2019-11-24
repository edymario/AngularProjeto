export interface Chamado {
    id_cliente: number;
    cliente:string;
    tec:string;
    defeito:string;
    solucao:string;
    dataChamado: Date;
    concluido:boolean;
}
