import { Model, Table, Column, PrimaryKey, DataType, HasOne, BelongsTo, ForeignKey, HasMany, BelongsToMany } from 'sequelize-typescript';

@Table
export class Album extends Model{

@Column({ type: DataType.INTEGER })
userId: number;

@Column({ type: DataType.STRING })
name: string;

@Column({ type: DataType.STRING })
description: string;

}
