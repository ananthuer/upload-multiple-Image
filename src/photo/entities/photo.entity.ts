import { Model, Table, Column, PrimaryKey, DataType, HasOne, BelongsTo, ForeignKey, HasMany, BelongsToMany } from 'sequelize-typescript';

@Table
export class Photo extends Model{


    @Column({ type: DataType.INTEGER })
   albumId: number;

    @Column({ type: DataType.STRING })
   name: string;

    @Column({ type: DataType.STRING })
   path: string;

    @Column({ type: DataType.STRING })
   status: string;
}
