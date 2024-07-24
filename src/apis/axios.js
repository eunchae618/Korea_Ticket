import axiosInstance from "./axiosInstance";

export const postRegister3 = async (email, password) => {
  try {
    const response = await axiosInstance.post("/auth/register3", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const postRegister = async (userName, email, password) => {
  try {
    const response = await axiosInstance.post("/auth/register", {
      userName,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const patchRegister = async (email) => {
  try {
    const response = await axiosInstance.patch("/auth/register2", {
      email,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postLogin = async (email, password) => {
  try {
    const response = await axiosInstance.post("/auth/login", {
      email,
      password,
    });

    const { accessToken, refreshToken } = response.data;

    // 액세스 토큰은 메모리에 저장 (보안을 위해 localStorage 대신 메모리에 저장하는 것이 권장됩니다)
    localStorage.setItem("accessToken", accessToken);

    // 리프레시 토큰은 로컬 스토리지에 저장
    localStorage.setItem("refreshToken", refreshToken);
    return { accessToken, refreshToken };
  } catch (error) {
    throw error;
  }
};

export const pacthPwfind = async (email) => {
  try {
    const response = await axiosInstance.patch("/auth/temporaryPassword", {
      email,
    });

    const { accessToken, refreshToken } = response.data;

    // 액세스 토큰은 메모리에 저장 (보안을 위해 localStorage 대신 메모리에 저장하는 것이 권장됩니다)
    localStorage.setItem("accessToken", accessToken);

    // 리프레시 토큰은 로컬 스토리지에 저장
    localStorage.setItem("refreshToken", refreshToken);
    return { accessToken, refreshToken };
  } catch (error) {
    throw error;
  }
};

export const postJoin = async (userName, email, password) => {
  try {
    const response = await axiosInstance.post("/auth/register", {
      userName,
      email,
      password,
    });

    const { accessToken, refreshToken } = response.data;

    // 액세스 토큰은 메모리에 저장 (보안을 위해 localStorage 대신 메모리에 저장하는 것이 권장됩니다)
    localStorage.setItem("accessToken", accessToken);

    // 리프레시 토큰은 로컬 스토리지에 저장
    localStorage.setItem("refreshToken", refreshToken);
    return { accessToken, refreshToken };
  } catch (error) {
    throw error;
  }
};
