export default interface IDatabase {
    create(object: Object): Object;
    delete(id: string): boolean;
    get(objectId: string): Promise<Object>;
    getAll(): Promise<Array<Object>>;
    query(parameters: any): Promise<Array<Object>>;
    update(object: Object): Object;
}