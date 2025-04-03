"use server";

import { registerService } from "@/service/authenticationService";
import { log } from "console";

export const registerAction = async (registerData) => {
  try {
    const newRegister = await registerService(registerData);
    return newRegister;
  } catch (error) {
    console.error("Error in Register:", error);
    return error;
  }
};
