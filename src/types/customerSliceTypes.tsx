export interface Customer {
    isLogged: boolean,
    jwt_token: string | null,
}

export interface LoginRequest {
    username: string | null,
    password: string | null,
    url: string,
}

export interface LoginResponse {
    status: number,
    data: LoginResponseContent,
}

export interface LoginResponseContent {
    username: string,
    ttl: number,
    jwt_token: string,
    id: number,
    error: boolean,    
}
