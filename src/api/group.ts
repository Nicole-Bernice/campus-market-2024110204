import http from "@/utils/http";
export const getGroupApi = () => http.get("/items?type=group");
