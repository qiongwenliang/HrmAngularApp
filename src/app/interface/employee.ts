export interface Employee{
    id:number,
    firstName: string | null | undefined,
    lastName: string | null | undefined,
    middleName: string | null | undefined,
    ssn: number | null | undefined,
    hireDate: Date | null | undefined,
    endDate: Date | null | undefined,
    employeeCategoryId: number | null | undefined,
    employeeStatusId: number | null | undefined,
    address: string | null | undefined,
    emailAddress: string | null | undefined,
    employeeRoleId: number | null | undefined
}