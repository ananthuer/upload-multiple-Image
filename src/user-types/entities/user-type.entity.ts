import { Model, Table, Column, PrimaryKey, DataType, HasOne, BelongsTo, ForeignKey, HasMany, BelongsToMany } from 'sequelize-typescript';

@Table
export class User extends Model{

    toJSON() : any {
        let data = this.get()
        return {
          ...data,
          image:  `${'http://localhost:8000/'}${data.image}`
        
    
        }
      }    

@Column({ type: DataType.STRING })
username: string;


}
