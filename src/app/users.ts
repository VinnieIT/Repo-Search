export class Users {
    
     
    public id: number;
    public login: string;
    public name: string;
    public email: string;
    public public_Repos: number;
    public location: string;
    public CreationDate: string;

    constructor(){
        this.id=0;
        this.login="";
        this.name="";      
        this.email="";
        this.public_Repos=0;
        this.location="";
        this.CreationDate="";
    }
}

