import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@Index(['email'], { unique: true })
@Index(['username'], { unique: true })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  firstname: string;

  @Column('text')
  lastname: string;

  @Column({ length: 255 })
  email: string;

  @Column('text')
  password: string;

  @Column({ length: 255 })
  username: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  //   @OneToMany(() => BadgeAssertion, (badgeAssertion) => badgeAssertion.user)
  //   badgeAssertions: BadgeAssertion[];
}
