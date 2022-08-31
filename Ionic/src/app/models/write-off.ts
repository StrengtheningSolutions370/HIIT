import { Employee } from "./employee";
import { SaleItem } from "./sale-item";
import { WriteOffReason } from "./write-off-reason";

export class WriteOff {
    WriteOffID?: number;
    EmployeeID: number;
    Employee?: Employee
    WriteOffLine: [{
        Quantity: number,
        WriteOffReasonID: number,
        WriteOffReason?: WriteOffReason,
        SaleItemID: number,
        SaleItem?: SaleItem
    }]

}
