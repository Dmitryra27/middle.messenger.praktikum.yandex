export interface userDataType {

    id: number,
    first_name: string,
    second_name: string,
    display_name: string,
    login: string,
    email: string,
    phone: string,
    avatar: string,
}

export interface postDataType {
    data: string,
    text: string,
    image: string | null | undefined,
    time: string,
    myPost: boolean
}

export interface chartType {
    display_name: string,
    avatar: string,
    time: string,
    text: string,
    counter: number
}
