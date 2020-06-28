export default interface ISaveable{
    save(): object;
    delete(): boolean;
}