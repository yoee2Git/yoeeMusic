import axios from './axios'

export const BANNER = 'banner'
export const RECOMMEND = 'recommend'

export function getBannerdata() {
  return axios({
    url: '/banner?type=2'
  })
}
export function exclusive(){
  return axios({
    url:"/personalized/privatecontent"
  })
}
export function newAlbum(){
  return axios({
    url: '/album?id=32311&limit=1'
  })
}
export function topSong(){
  return axios({
    url: '/top/song?type=7'
  })
}
