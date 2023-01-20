import { ApiProperty } from "@nestjs/swagger"

export class CreateRestaurantDto {
    @ApiProperty()
    name: string
    @ApiProperty()
    phone: string
    @ApiProperty()
    cel: string
    @ApiProperty()
    dir: string
}
