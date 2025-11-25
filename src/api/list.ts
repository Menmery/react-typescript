import { http } from "@/utils/index"
import type { ResType } from "./common"

// 2.定义具体的接口类型
export type ChannelItem = {
  id: number,
  name: string
}

type ChannelRes = {
  channels: ChannelItem[]
}

// 请求频道列表
export function fetchChannelAPI() {
  return http.request<ResType<ChannelRes>>({
    url: '/channels'
  })
}