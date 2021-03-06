import { promisify } from "./utils";

export const request = promisify<wx.RequestOptions, wx.Response>(wx.request);

/**
 * 创建一个 WebSocket 连接。使用前请先阅读说明。

基础库 1.7.0 之前，一个微信小程序同时只能有一个 WebSocket 连接，如果当前已存在一个
WebSocket 连接，会自动关闭该连接，并重新创建一个 WebSocket 连接。基础库版本 1.7.0 及以后，
支持存在多个 WebSokcet 连接，每次成功调用 wx.connectSocket 会返回一个新的 SocketTask。
 */
export const connectSocket = promisify<
  wx.ConnectSocketOptions,
  wx.BaseResponse
>(wx.connectSocket);

/**
 * 通过 WebSocket 连接发送数据，需要先 connectSocket，并在 onSocketOpen 回调之后才能发送。
 */
export const sendSocketMessage = promisify<
  wx.SendSocketMessageOptions,
  wx.BaseResponse
>(wx.sendSocketMessage);

/**
 * 关闭 WebSocket 连接。
 * //注意这里有时序问题，
//如果 wx.connectSocket 还没回调 wx.onSocketOpen，而先调用 wx.closeSocket，那么就做不到关闭 WebSocket 的目的。
//必须在 WebSocket 打开期间调用 wx.closeSocket 才能关闭。
 */
export const closeSocket = promisify<wx.CloseSocketOptions, wx.BaseResponse>(
  wx.closeSocket
);

export const uploadFile = promisify<
  wx.UploadFileOptions,
  wx.UploadFileResponse
>(wx.uploadFile);

export const downloadFile = promisify<
  wx.DownloadFileOptions,
  wx.DownloadFileResponse
>(wx.downloadFile);
