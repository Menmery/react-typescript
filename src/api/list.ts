import { http } from "@/utils/index"

// 1.定义泛型
type ResType<T> = {
  messgae: string,
  data: T
}

// 2.定义具体的接口类型
type ChannelItem = {
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