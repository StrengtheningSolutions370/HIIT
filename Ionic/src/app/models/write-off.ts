import { Employee } from "./employee";
import { SaleItem } from "./sale-item";
import { WriteOffReason } from "./write-off-reason";

export class WriteOff {
    WriteOffID: number;
    Employee?: Employee;
    Quantity: number;
}
