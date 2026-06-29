import http from "@/utils/http";
export const getErrandApi = () => http.get("/items?type=errand");
