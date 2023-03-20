import { db } from "../db"

export class BaseModel {
    protected readonly tableName: string;

    constructor(tablename: string){
        this.tableName = tablename
    }
    static async findById(id: number) {
      const result = await db
        .selectFrom(this.tableName)
        .where('id', '=', id)
        .execute()
      return result[0]
    }
    static tableName(tableName: any) {
        throw new Error("Method not implemented.");
    }
  
    static async delete(id: number) {
      await db.deleteFrom(this.tableName).where('id', '=', id).execute()
    }
  }