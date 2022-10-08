export class Experience {
    id? : number;
    position: string;
    description: string;

    constructor(position: string, description: string){
        this.position = position;
        this.description = description;
    }
}
