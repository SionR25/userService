/**
 * This class defines the query paramters for database calls, and defines functions to help with
 * building and using queries
 */
import uuid from "uuid";

 export default class Query {
     id: string;
     index?: string; // What index of the table to query against
     constructor() {
        this.id = uuid();
     };


 }