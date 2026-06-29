import http from "@/utils/http";
export const getSecondHandApi = () => http.get("/items?type=secondhand");
