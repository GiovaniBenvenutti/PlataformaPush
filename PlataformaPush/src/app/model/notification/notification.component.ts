
export class Notification {
    
  idnotification!: Date;
  cardtitulo!: string;
  detalhes!: any;
  link!: string;  
  
  constructor(
    idnotification?: Date,
    cardtitulo?: string,
    detalhes?: any,
    link?: string
  ) {
    this.idnotification = idnotification || new Date;
    this.cardtitulo = cardtitulo || '';
    this.detalhes = detalhes || '';
    this.link = link || '';
  }
  
  toString(): string {
    return `Notification: ${this.idnotification}, ${this.cardtitulo}, 
                      ${this.detalhes}, ${this.link}`;
    }
  
}