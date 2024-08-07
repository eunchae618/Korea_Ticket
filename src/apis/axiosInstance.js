import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "ip: 13.125.77.62",
  timeout: 6000,
});

//요청 인터셉터 추가하기
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["authorization"] = localStorage.getItem("accessToken");
    config.headers["refresh-token"] = localStorage.getItem("refreshToken");
    return config;
  },
  (error) => {
    console.log(error);
    //비동기 작업을 수행할 때, 성공적으로 처리할 수 없는 상황(에러 발생 등)에서 Promise.reject(error)를 사용
    //실패한 Promise를 반환
    return Promise.reject(error);
  }
);

// 토큰 재발급 함수
const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  try {
    const response = await axiosInstance.post(`/auth/token`, { refreshToken });
    const { accessToken: newAccessToken } = response.data;
    localStorage.setItem("accessToken", newAccessToken);
    console.log("토큰 재발급 성공:", newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.error("토큰 재발급 실패:", error);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    throw error;
  }
};

//응답 인터셉터 추가하기
axiosInstance.interceptors.response.use(
  (response) => {
    if (response.headers["authorization"]) {
      localStorage.setItem("accessToken", response.headers["authorization"]);
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      error.response.data.error === "INVALID_TOKEN"
    ) {
      try {
        console.log("새로운 액세스 토큰으로 재요청 시도.");
        const newAccessToken = await refreshAccessToken();
        originalRequest.headers["authorization"] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        alert("리플래시 토큰이 만료되었습니다. 다시 로그인 해주세요");
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

//엑시스 토큰이 인증 만료 되면 리플래시 토큰을 확인해서 리플래시 토큰이 사용가능하면 재발급 하고 리플래시 토큰이 잘못되거나 없으면 재발급 실패
