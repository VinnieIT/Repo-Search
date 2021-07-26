export class Users {
     
    userID: number;
    userLoginName: string;
    userName: string;
    userAvatar: string;
    userEmail: string;
    userRepoCount: number;
    userLocation: string;
    userFollowers: number;
    
    userCreationDate: string;

    constructor(){
        this.userID=0;
        this.userLoginName="";
        this.userName="";      
        this.userAvatar="";
        this.userEmail="";
        this.userRepoCount=0;
        this.userLocation="";
        this.userFollowers=0;       
        this.userCreationDate="";
    }
}

