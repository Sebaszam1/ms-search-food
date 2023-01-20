import { ApiProperty } from "@nestjs/swagger";

export class CreateMenuDto {
    @ApiProperty()
    id: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    restaurantId?: string;
    @ApiProperty()
    categoryId?: string;
}
