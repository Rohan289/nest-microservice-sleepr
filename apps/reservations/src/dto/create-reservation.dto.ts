import { Type } from 'class-transformer';
import { IsDate } from 'class-validator';
import { Prop } from '@nestjs/mongoose';

export class CreateReservationDto {
  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @IsDate()
  @Type(() => Date)
  endDate: Date;

  @Prop()
  placeId: string;
  @Prop()
  invoiceId: string;
}
