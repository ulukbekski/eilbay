export type LoginDto = {
    email: string;
    password: string;
}
export type CreateUserDto = {
    fullName: string;
    confirmPassoword: string;
} & LoginDto;