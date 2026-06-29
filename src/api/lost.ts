import http from "@/utils/http";
export const getLostApi = () => http.get("/items?type=lost");
