import http from "@/utils/http";
export const getErrandApi = () => http.get("/items?type=errand");
export const addErrand = (data: any) => {
  return http.post("/items?type=errand", data)
}
