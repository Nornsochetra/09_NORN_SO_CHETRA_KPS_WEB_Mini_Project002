import { baseUrl } from "./constants";

// authentication register
export async function registerService(registerData) {
  try {
    const res = await fetch(`${baseUrl}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error Register:", error);
    throw error;
  }
}

// authentication login server
export async function loginService(loginData) {
  try {
    const res = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error Login: ", error);
    throw error;
  }
}
