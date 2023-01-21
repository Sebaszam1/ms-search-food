import { ApiProperty } from "@nestjs/swagger"

export class CreateSubsidiaryDto {
    @ApiProperty()
    name: string
    @ApiProperty()
    subStar: number
    @ApiProperty()
    restaurantId: string
}
