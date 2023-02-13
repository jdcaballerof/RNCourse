// Generated by https://quicktype.io

export interface RyMCharacter {
    info:    InfoOfRyMCharacter;
    results: ResultOfRyMCharacter[];
}

export interface InfoOfRyMCharacter {
    count: number;
    pages: number;
    next:  null;
    prev:  null;
}

export interface ResultOfRyMCharacter {
    id:       number;
    name:     string;
    status:   Status;
    species:  Species;
    type:     Type;
    gender:   Gender;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  string;
}

export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

export interface Location {
    name: string;
    url:  string;
}

export enum Species {
    Human = "Human",
    Humanoid = "Humanoid",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}

export enum Type {
    CHUDHumanMix = "CHUD Human Mix",
    Empty = "",
    SoullessPuppet = "Soulless Puppet",
}
