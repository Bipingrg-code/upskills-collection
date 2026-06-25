import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
    username: string;
    email: string;
    fullName: string;
    avatar: string;
    coverImage?: string;
    watchHistory: mongoose.Types.ObjectId[];
    password: string;
    refreshToken?: string;
    createdAt: Date;
    updatedAt: Date;

    // Methods
    // isPasswordCorrect(password: string): Promise<boolean>;
    // generateAccessToken(): string;
    // generateRefreshToken(): string;
}

export interface IUserPayload {
    _id: mongoose.Types.ObjectId;
    email: string;
    username: string;
    fullName: string;
}

export interface IRefreshTokenPayload {
    _id: mongoose.Types.ObjectId;
}

export interface IRegisterUser {
    username: string;
    email: string;
    fullName: string;
    password: string;
    avatar: string;
    coverImage?: string;
}

export interface ILoginUser {
    email?: string;
    username?: string;
    password: string;
}

export interface IUpdateUser {
    fullName?: string;
    email?: string;
    avatar?: string;
    coverImage?: string;
}

export interface IChangePassword {
    oldPassword: string;
    newPassword: string;
}

export interface IAuthTokens {
    accessToken: string;
    refreshToken: string;
}