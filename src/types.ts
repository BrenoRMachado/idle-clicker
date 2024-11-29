export enum ResourceType {
    wood = "wood",
    coin = "coin",
}

export interface Resource {
    name: string;
    icon: string;
    amount: number;
}

export type Resources = { 
    [Property in keyof typeof ResourceType]: Resource 

};

export interface Trade {
    resourceType: ResourceType;
    amount: number;
}

export enum ActionType {
    chopWood = "chopWood",
    sellWood = "sellWood",
}

export interface Action {
    name: string;
    icon: string;
    trades: Trade[];
}

export type Actions = { 
    [Property in keyof typeof ActionType]: Action
};