import AWS from "aws-sdk";

import IDatabase from "../interfaces/IDatabase";

export default class DynamoDB implements IDatabase {
    client: AWS.DynamoDB.DocumentClient;
    tableName: string;
    constructor(client: AWS.DynamoDB.DocumentClient, tableName: string) {
        this.client = client;
        this.tableName = tableName;
    };

    create = (object: object): Object => {
        const parameters: AWS.DynamoDB.DocumentClient.PutItemInput = {
            Item: object,
            TableName: this.tableName
        };
        this.client.put(parameters);
        return object;
    };

    delete = (id: string): boolean => {
        const parameters: AWS.DynamoDB.DocumentClient.DeleteItemInput = {
            Key: {id},
            TableName: this.tableName
        };
        this.client.delete(parameters);
        return true;
    };

    get = async (id: string): Promise<Object> => {
        const parameters: AWS.DynamoDB.DocumentClient.GetItemInput = {
            Key: {id},
            TableName: this.tableName
        };
        const response: AWS.DynamoDB.DocumentClient.GetItemOutput = await this.client.get(parameters).promise();
        if (response.Item) {
            return response.Item;
        }
        throw Error;
    };

    getAll = async (): Promise<Array<Object>> => {
        const parameters: AWS.DynamoDB.DocumentClient.ScanInput = {
            TableName: this.tableName
        };
        const response: AWS.DynamoDB.DocumentClient.ScanOutput = await this.client.scan(parameters).promise();
        if (response.Items) {
            return response.Items;
        }
        throw Error;
    };

    query = async (parameters: any): Promise<Array<Object>> => {

    }
    
}