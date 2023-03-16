export interface User{
    id:number,
    employeeId: number | null | undefined,
    emailId: string | null | undefined,
    roleId: number | null | undefined,
    firstName: string | null | undefined,
    lastName: string | null | undefined,
    hashPassword: string | null | undefined,
    salt: string | null | undefined
}