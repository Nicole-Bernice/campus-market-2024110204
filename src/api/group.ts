import http from "@/utils/http";
export const getGroupApi = () => http.get("/items?type=group");
export const addGroup = (data: any) => {
  return http.post("/items?type=group", data)
}
