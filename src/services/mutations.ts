// filepath: src/services/mutations.ts
import axiosInstance from "@/lib/axios-instance";
import { RegisterMutation, LoginMutation, createAccount } from "@/types/mutations-types";

export async function Login(payload: LoginMutation) {
  const response = await axiosInstance.post("/api/v1/auth/login", payload, {
  });
  return response.data;
}

export async function Register(payload: RegisterMutation) {
  const response = await axiosInstance.post("/api/v1/auth/register", payload, {});
  return response.data;
}

export async function Logout() {
  const response = await axiosInstance.post("/api/v1/auth/logout", {});
  return response.data;
}

export async function CreateAccount(payload: createAccount) {
  const formData = new FormData();

  // Converter initialBalance para number
  const processedPayload = {
    ...payload,
    initialBalance: Number(payload.initialBalance)
  };

  Object.entries(processedPayload).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      formData.append(key, value as any);
    }
  });

  const response = await axiosInstance.post("/api/v1/auth/account", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}