

export interface Social{
    name:string;
    url:string;
    username:string;
}

export interface Link extends Omit<Social, "username">{
    color:string
    emoji:string
}

export interface UserData{
    name:string;
    nickname:string;
    description?:string;
    avatar?:string;
    social:Social[];
    links:Link[];
    footer:string;
}