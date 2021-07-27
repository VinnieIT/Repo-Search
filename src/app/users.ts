export class Users {
     
    public userID: number;
    public userlogin: string;
    public userName: string;
    public userEmail: string;
    public userRepoCount: number;
    public userLocation: string;
    userCreationDate: string;

    constructor(){
        this.userID=0;
        this.userlogin="";
        this.userName="";      
        this.userEmail="";
        this.userRepoCount=0;
        this.userLocation="";
        this.userCreationDate="";
    }
}

