import { supabase} from "../../lib/supabase.js";
import { LoginInput, SignupInput , ForgotPasswordInput } from "./auth.validation.js";
import { AppError } from "../../utils/error/app-error.js";
import { env } from "../../config/env.js";

export async function signup(data: SignupInput) {
  const { data: authData, error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        full_name: data.fullName,
      },
    },
  });

 if (error) {
    throw new AppError(error.message, 400);
  }

  return authData;
}
export async function login(data: LoginInput) {
  const { data: authData, error } =
    await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

  if (error) {
  throw new AppError(error.message, 401);
}

  return authData;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw error;
}


export async function forgotPassword(
  data: ForgotPasswordInput
) {
  const { data: result, error } =
    await supabase.auth.resetPasswordForEmail(
      data.email,
      {
        redirectTo: `${env.FRONTEND_URL}/reset-password`,
      }
    );

  if (error) throw error;

  return result;
}


export async function googleLogin() {
  const { data, error } =
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
     redirectTo: env.GOOGLE_REDIRECT_URI,
      },
    });

   if (error) {
    throw new AppError(error.message, 400);
  }

  return data;
}

