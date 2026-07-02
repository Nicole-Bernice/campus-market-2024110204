import http from "@/utils/http";
export const getLostApi = () => http.get("/items?type=lost");
export const addLost = (data: any) => {
  return http.post("/items?type=lost", data)
}
