export type EmployeeType = {
    id: string,
    name: string,
    email: string,
    phone: string,
    department: string
}

export type EmployeeInput = {
    name: string,
    email: string,
    phone: string,
    department: string
}

export type IDType = {
    id: string
}

export type EmployeeProp = {
    handleDelete: (id: string) => Promise<void>,
    employeeData: EmployeeType,
    activeId: string,
    setActiveId: React.Dispatch<React.SetStateAction<string>>,
};

export type EditEmployeeProp = {
    employee: EmployeeType,
    setEmployee: React.Dispatch<React.SetStateAction<EmployeeType>>,
    setActiveId: React.Dispatch<React.SetStateAction<string>>,
    activeId: string
}