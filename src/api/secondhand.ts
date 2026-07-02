import http from "@/utils/http";
export const getSecondHandApi = () => http.get("/items?type=secondhand");
export const addSecondHand = (data: any) => {
  return http.post("/items?type=secondhand", data)
}
